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
        "id": 27540,
        "exportedSymbols": {
            "StdChains": [
                27539
            ],
            "VmSafe": [
                36025
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:10885:97",
        "nodes": [
            {
                "id": 26821,
                "nodeType": "PragmaDirective",
                "src": "32:31:97",
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
                "id": 26823,
                "nodeType": "ImportDirective",
                "src": "65:32:97",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/Vm.sol",
                "file": "./Vm.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 27540,
                "sourceUnit": 36498,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 26822,
                            "name": "VmSafe",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 36025,
                            "src": "73:6:97",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 27539,
                "nodeType": "ContractDefinition",
                "src": "1899:9017:97",
                "nodes": [
                    {
                        "id": 26841,
                        "nodeType": "VariableDeclaration",
                        "src": "1933:92:97",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "vm",
                        "nameLocation": "1957:2:97",
                        "scope": 27539,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_VmSafe_$36025",
                            "typeString": "contract VmSafe"
                        },
                        "typeName": {
                            "id": 26826,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 26825,
                                "name": "VmSafe",
                                "nameLocations": [
                                    "1933:6:97"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 36025,
                                "src": "1933:6:97"
                            },
                            "referencedDeclaration": 36025,
                            "src": "1933:6:97",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VmSafe_$36025",
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
                                                                    "id": 26835,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "string",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "2003:17:97",
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
                                                                "id": 26834,
                                                                "name": "keccak256",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -8,
                                                                "src": "1993:9:97",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                }
                                                            },
                                                            "id": 26836,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1993:28:97",
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
                                                        "id": 26833,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "1985:7:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_uint256_$",
                                                            "typeString": "type(uint256)"
                                                        },
                                                        "typeName": {
                                                            "id": 26832,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "1985:7:97",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 26837,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1985:37:97",
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
                                                "id": 26831,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "1977:7:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_uint160_$",
                                                    "typeString": "type(uint160)"
                                                },
                                                "typeName": {
                                                    "id": 26830,
                                                    "name": "uint160",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1977:7:97",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 26838,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1977:46:97",
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
                                        "id": 26829,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "1969:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_address_$",
                                            "typeString": "type(address)"
                                        },
                                        "typeName": {
                                            "id": 26828,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1969:7:97",
                                            "typeDescriptions": {}
                                        }
                                    },
                                    "id": 26839,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1969:55:97",
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
                                "id": 26827,
                                "name": "VmSafe",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 36025,
                                "src": "1962:6:97",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_VmSafe_$36025_$",
                                    "typeString": "type(contract VmSafe)"
                                }
                            },
                            "id": 26840,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1962:63:97",
                            "tryCall": false,
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VmSafe_$36025",
                                "typeString": "contract VmSafe"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 26843,
                        "nodeType": "VariableDeclaration",
                        "src": "2032:33:97",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "stdChainsInitialized",
                        "nameLocation": "2045:20:97",
                        "scope": 27539,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                        },
                        "typeName": {
                            "id": 26842,
                            "name": "bool",
                            "nodeType": "ElementaryTypeName",
                            "src": "2032:4:97",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 26850,
                        "nodeType": "StructDefinition",
                        "src": "2072:93:97",
                        "nodes": [],
                        "canonicalName": "StdChains.ChainData",
                        "members": [
                            {
                                "constant": false,
                                "id": 26845,
                                "mutability": "mutable",
                                "name": "name",
                                "nameLocation": "2106:4:97",
                                "nodeType": "VariableDeclaration",
                                "scope": 26850,
                                "src": "2099:11:97",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 26844,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2099:6:97",
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
                                "name": "chainId",
                                "nameLocation": "2128:7:97",
                                "nodeType": "VariableDeclaration",
                                "scope": 26850,
                                "src": "2120:15:97",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 26846,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2120:7:97",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 26849,
                                "mutability": "mutable",
                                "name": "rpcUrl",
                                "nameLocation": "2152:6:97",
                                "nodeType": "VariableDeclaration",
                                "scope": 26850,
                                "src": "2145:13:97",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 26848,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2145:6:97",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "ChainData",
                        "nameLocation": "2079:9:97",
                        "scope": 27539,
                        "visibility": "public"
                    },
                    {
                        "id": 26859,
                        "nodeType": "StructDefinition",
                        "src": "2171:598:97",
                        "nodes": [],
                        "canonicalName": "StdChains.Chain",
                        "members": [
                            {
                                "constant": false,
                                "id": 26852,
                                "mutability": "mutable",
                                "name": "name",
                                "nameLocation": "2228:4:97",
                                "nodeType": "VariableDeclaration",
                                "scope": 26859,
                                "src": "2221:11:97",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 26851,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2221:6:97",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 26854,
                                "mutability": "mutable",
                                "name": "chainId",
                                "nameLocation": "2283:7:97",
                                "nodeType": "VariableDeclaration",
                                "scope": 26859,
                                "src": "2275:15:97",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 26853,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2275:7:97",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 26856,
                                "mutability": "mutable",
                                "name": "chainAlias",
                                "nameLocation": "2383:10:97",
                                "nodeType": "VariableDeclaration",
                                "scope": 26859,
                                "src": "2376:17:97",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 26855,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2376:6:97",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 26858,
                                "mutability": "mutable",
                                "name": "rpcUrl",
                                "nameLocation": "2756:6:97",
                                "nodeType": "VariableDeclaration",
                                "scope": 26859,
                                "src": "2749:13:97",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 26857,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2749:6:97",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "Chain",
                        "nameLocation": "2178:5:97",
                        "scope": 27539,
                        "visibility": "public"
                    },
                    {
                        "id": 26864,
                        "nodeType": "VariableDeclaration",
                        "src": "2873:39:97",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "chains",
                        "nameLocation": "2906:6:97",
                        "scope": 27539,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26859_storage_$",
                            "typeString": "mapping(string => struct StdChains.Chain)"
                        },
                        "typeName": {
                            "id": 26863,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 26860,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "2881:6:97",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "2873:24:97",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26859_storage_$",
                                "typeString": "mapping(string => struct StdChains.Chain)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 26862,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 26861,
                                    "name": "Chain",
                                    "nameLocations": [
                                        "2891:5:97"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 26859,
                                    "src": "2891:5:97"
                                },
                                "referencedDeclaration": 26859,
                                "src": "2891:5:97",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Chain_$26859_storage_ptr",
                                    "typeString": "struct StdChains.Chain"
                                }
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 26868,
                        "nodeType": "VariableDeclaration",
                        "src": "2978:48:97",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "defaultRpcUrls",
                        "nameLocation": "3012:14:97",
                        "scope": 27539,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                            "typeString": "mapping(string => string)"
                        },
                        "typeName": {
                            "id": 26867,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 26865,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "2986:6:97",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "2978:25:97",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                                "typeString": "mapping(string => string)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 26866,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "2996:6:97",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 26872,
                        "nodeType": "VariableDeclaration",
                        "src": "3075:44:97",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "idToAlias",
                        "nameLocation": "3110:9:97",
                        "scope": 27539,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                            "typeString": "mapping(uint256 => string)"
                        },
                        "typeName": {
                            "id": 26871,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 26869,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "3083:7:97",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "3075:26:97",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                                "typeString": "mapping(uint256 => string)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 26870,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "3094:6:97",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 26875,
                        "nodeType": "VariableDeclaration",
                        "src": "3126:44:97",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "fallbackToDefaultRpcUrls",
                        "nameLocation": "3139:24:97",
                        "scope": 27539,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                        },
                        "typeName": {
                            "id": 26873,
                            "name": "bool",
                            "nodeType": "ElementaryTypeName",
                            "src": "3126:4:97",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            }
                        },
                        "value": {
                            "hexValue": "74727565",
                            "id": 26874,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3166:4:97",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            },
                            "value": "true"
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 26927,
                        "nodeType": "FunctionDefinition",
                        "src": "3255:524:97",
                        "nodes": [],
                        "body": {
                            "id": 26926,
                            "nodeType": "Block",
                            "src": "3345:434:97",
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
                                                "id": 26890,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "id": 26886,
                                                                "name": "chainAlias",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 26877,
                                                                "src": "3369:10:97",
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
                                                            "id": 26885,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "3363:5:97",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                "typeString": "type(bytes storage pointer)"
                                                            },
                                                            "typeName": {
                                                                "id": 26884,
                                                                "name": "bytes",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "3363:5:97",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 26887,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3363:17:97",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    },
                                                    "id": 26888,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3381:6:97",
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "src": "3363:24:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 26889,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "3391:1:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "3363:29:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "537464436861696e7320676574436861696e28737472696e67293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e",
                                                "id": 26891,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3394:69:97",
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
                                            "id": 26883,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "3355:7:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 26892,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3355:109:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26893,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3355:109:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 26894,
                                            "name": "initializeStdChains",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27501,
                                            "src": "3475:19:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 26895,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3475:21:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26896,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3475:21:97"
                                },
                                {
                                    "expression": {
                                        "id": 26901,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26897,
                                            "name": "chain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26881,
                                            "src": "3506:5:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "baseExpression": {
                                                "id": 26898,
                                                "name": "chains",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26864,
                                                "src": "3514:6:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26859_storage_$",
                                                    "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                                                }
                                            },
                                            "id": 26900,
                                            "indexExpression": {
                                                "id": 26899,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26877,
                                                "src": "3521:10:97",
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
                                            "src": "3514:18:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$26859_storage",
                                                "typeString": "struct StdChains.Chain storage ref"
                                            }
                                        },
                                        "src": "3506:26:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                            "typeString": "struct StdChains.Chain memory"
                                        }
                                    },
                                    "id": 26902,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3506:26:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 26907,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 26904,
                                                        "name": "chain",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26881,
                                                        "src": "3563:5:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                                            "typeString": "struct StdChains.Chain memory"
                                                        }
                                                    },
                                                    "id": 26905,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3569:7:97",
                                                    "memberName": "chainId",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 26854,
                                                    "src": "3563:13:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 26906,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "3580:1:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "3563:18:97",
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
                                                                "id": 26912,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "3619:49:97",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_be183459e9329da9bfc4a2fec17224f102b8a68c1139772e954a2d6fd9877e00",
                                                                    "typeString": "literal_string \"StdChains getChain(string): Chain with alias \"\""
                                                                },
                                                                "value": "StdChains getChain(string): Chain with alias \""
                                                            },
                                                            {
                                                                "id": 26913,
                                                                "name": "chainAlias",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 26877,
                                                                "src": "3670:10:97",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                    "typeString": "string memory"
                                                                }
                                                            },
                                                            {
                                                                "hexValue": "22206e6f7420666f756e642e",
                                                                "id": 26914,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "3682:15:97",
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
                                                                "id": 26910,
                                                                "name": "abi",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -1,
                                                                "src": "3602:3:97",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_abi",
                                                                    "typeString": "abi"
                                                                }
                                                            },
                                                            "id": 26911,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "3606:12:97",
                                                            "memberName": "encodePacked",
                                                            "nodeType": "MemberAccess",
                                                            "src": "3602:16:97",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                "typeString": "function () pure returns (bytes memory)"
                                                            }
                                                        },
                                                        "id": 26915,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3602:96:97",
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
                                                    "id": 26909,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "3595:6:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                        "typeString": "type(string storage pointer)"
                                                    },
                                                    "typeName": {
                                                        "id": 26908,
                                                        "name": "string",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "3595:6:97",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 26916,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3595:104:97",
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
                                            "id": 26903,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "3542:7:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 26917,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3542:167:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26918,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3542:167:97"
                                },
                                {
                                    "expression": {
                                        "id": 26924,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26919,
                                            "name": "chain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26881,
                                            "src": "3720:5:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 26921,
                                                    "name": "chainAlias",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26877,
                                                    "src": "3754:10:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                },
                                                {
                                                    "id": 26922,
                                                    "name": "chain",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26881,
                                                    "src": "3766:5:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
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
                                                        "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                                        "typeString": "struct StdChains.Chain memory"
                                                    }
                                                ],
                                                "id": 26920,
                                                "name": "getChainWithUpdatedRpcUrl",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 27309,
                                                "src": "3728:25:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$26859_memory_ptr_$returns$_t_struct$_Chain_$26859_memory_ptr_$",
                                                    "typeString": "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)"
                                                }
                                            },
                                            "id": 26923,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3728:44:97",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "src": "3720:52:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                            "typeString": "struct StdChains.Chain memory"
                                        }
                                    },
                                    "id": 26925,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3720:52:97"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getChain",
                        "nameLocation": "3264:8:97",
                        "parameters": {
                            "id": 26878,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26877,
                                    "mutability": "mutable",
                                    "name": "chainAlias",
                                    "nameLocation": "3287:10:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26927,
                                    "src": "3273:24:97",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 26876,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3273:6:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3272:26:97"
                        },
                        "returnParameters": {
                            "id": 26882,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26881,
                                    "mutability": "mutable",
                                    "name": "chain",
                                    "nameLocation": "3338:5:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26927,
                                    "src": "3325:18:97",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                        "typeString": "struct StdChains.Chain"
                                    },
                                    "typeName": {
                                        "id": 26880,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 26879,
                                            "name": "Chain",
                                            "nameLocations": [
                                                "3325:5:97"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 26859,
                                            "src": "3325:5:97"
                                        },
                                        "referencedDeclaration": 26859,
                                        "src": "3325:5:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$26859_storage_ptr",
                                            "typeString": "struct StdChains.Chain"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3324:20:97"
                        },
                        "scope": 27539,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 26984,
                        "nodeType": "FunctionDefinition",
                        "src": "3785:541:97",
                        "nodes": [],
                        "body": {
                            "id": 26983,
                            "nodeType": "Block",
                            "src": "3866:460:97",
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
                                                "id": 26938,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 26936,
                                                    "name": "chainId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26929,
                                                    "src": "3884:7:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 26937,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "3895:1:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "3884:12:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "537464436861696e7320676574436861696e2875696e74323536293a20436861696e2049442063616e6e6f7420626520302e",
                                                "id": 26939,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3898:52:97",
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
                                            "id": 26935,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "3876:7:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 26940,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3876:75:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26941,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3876:75:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 26942,
                                            "name": "initializeStdChains",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27501,
                                            "src": "3961:19:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 26943,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3961:21:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26944,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3961:21:97"
                                },
                                {
                                    "assignments": [
                                        26946
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 26946,
                                            "mutability": "mutable",
                                            "name": "chainAlias",
                                            "nameLocation": "4006:10:97",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 26983,
                                            "src": "3992:24:97",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string"
                                            },
                                            "typeName": {
                                                "id": 26945,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3992:6:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_storage_ptr",
                                                    "typeString": "string"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 26950,
                                    "initialValue": {
                                        "baseExpression": {
                                            "id": 26947,
                                            "name": "idToAlias",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26872,
                                            "src": "4019:9:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                                                "typeString": "mapping(uint256 => string storage ref)"
                                            }
                                        },
                                        "id": 26949,
                                        "indexExpression": {
                                            "id": 26948,
                                            "name": "chainId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26929,
                                            "src": "4029:7:97",
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
                                        "src": "4019:18:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3992:45:97"
                                },
                                {
                                    "expression": {
                                        "id": 26955,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26951,
                                            "name": "chain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26933,
                                            "src": "4048:5:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "baseExpression": {
                                                "id": 26952,
                                                "name": "chains",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26864,
                                                "src": "4056:6:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26859_storage_$",
                                                    "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                                                }
                                            },
                                            "id": 26954,
                                            "indexExpression": {
                                                "id": 26953,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26946,
                                                "src": "4063:10:97",
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
                                            "src": "4056:18:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$26859_storage",
                                                "typeString": "struct StdChains.Chain storage ref"
                                            }
                                        },
                                        "src": "4048:26:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                            "typeString": "struct StdChains.Chain memory"
                                        }
                                    },
                                    "id": 26956,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4048:26:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 26961,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 26958,
                                                        "name": "chain",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26933,
                                                        "src": "4106:5:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                                            "typeString": "struct StdChains.Chain memory"
                                                        }
                                                    },
                                                    "id": 26959,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4112:7:97",
                                                    "memberName": "chainId",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 26854,
                                                    "src": "4106:13:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 26960,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4123:1:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "4106:18:97",
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
                                                                "id": 26966,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "4162:45:97",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_ce7b2cad45f1a6d0b9b7bb125e9a8742fce8fed7d742c83265d4a2da4caf457d",
                                                                    "typeString": "literal_string \"StdChains getChain(uint256): Chain with ID \""
                                                                },
                                                                "value": "StdChains getChain(uint256): Chain with ID "
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 26969,
                                                                        "name": "chainId",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 26929,
                                                                        "src": "4221:7:97",
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
                                                                        "id": 26967,
                                                                        "name": "vm",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 26841,
                                                                        "src": "4209:2:97",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_VmSafe_$36025",
                                                                            "typeString": "contract VmSafe"
                                                                        }
                                                                    },
                                                                    "id": 26968,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "4212:8:97",
                                                                    "memberName": "toString",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 35557,
                                                                    "src": "4209:11:97",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                                    }
                                                                },
                                                                "id": 26970,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "4209:20:97",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                    "typeString": "string memory"
                                                                }
                                                            },
                                                            {
                                                                "hexValue": "206e6f7420666f756e642e",
                                                                "id": 26971,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "4231:13:97",
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
                                                                "id": 26964,
                                                                "name": "abi",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -1,
                                                                "src": "4145:3:97",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_abi",
                                                                    "typeString": "abi"
                                                                }
                                                            },
                                                            "id": 26965,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "4149:12:97",
                                                            "memberName": "encodePacked",
                                                            "nodeType": "MemberAccess",
                                                            "src": "4145:16:97",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                "typeString": "function () pure returns (bytes memory)"
                                                            }
                                                        },
                                                        "id": 26972,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4145:100:97",
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
                                                    "id": 26963,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "4138:6:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                        "typeString": "type(string storage pointer)"
                                                    },
                                                    "typeName": {
                                                        "id": 26962,
                                                        "name": "string",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4138:6:97",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 26973,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4138:108:97",
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
                                            "id": 26957,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4085:7:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 26974,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4085:171:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 26975,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4085:171:97"
                                },
                                {
                                    "expression": {
                                        "id": 26981,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 26976,
                                            "name": "chain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26933,
                                            "src": "4267:5:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 26978,
                                                    "name": "chainAlias",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26946,
                                                    "src": "4301:10:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                },
                                                {
                                                    "id": 26979,
                                                    "name": "chain",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26933,
                                                    "src": "4313:5:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
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
                                                        "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                                        "typeString": "struct StdChains.Chain memory"
                                                    }
                                                ],
                                                "id": 26977,
                                                "name": "getChainWithUpdatedRpcUrl",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 27309,
                                                "src": "4275:25:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$26859_memory_ptr_$returns$_t_struct$_Chain_$26859_memory_ptr_$",
                                                    "typeString": "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)"
                                                }
                                            },
                                            "id": 26980,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4275:44:97",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "src": "4267:52:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                            "typeString": "struct StdChains.Chain memory"
                                        }
                                    },
                                    "id": 26982,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4267:52:97"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getChain",
                        "nameLocation": "3794:8:97",
                        "parameters": {
                            "id": 26930,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26929,
                                    "mutability": "mutable",
                                    "name": "chainId",
                                    "nameLocation": "3811:7:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26984,
                                    "src": "3803:15:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 26928,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3803:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3802:17:97"
                        },
                        "returnParameters": {
                            "id": 26934,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26933,
                                    "mutability": "mutable",
                                    "name": "chain",
                                    "nameLocation": "3859:5:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 26984,
                                    "src": "3846:18:97",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                        "typeString": "struct StdChains.Chain"
                                    },
                                    "typeName": {
                                        "id": 26932,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 26931,
                                            "name": "Chain",
                                            "nameLocations": [
                                                "3846:5:97"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 26859,
                                            "src": "3846:5:97"
                                        },
                                        "referencedDeclaration": 26859,
                                        "src": "3846:5:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$26859_storage_ptr",
                                            "typeString": "struct StdChains.Chain"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3845:20:97"
                        },
                        "scope": 27539,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 27094,
                        "nodeType": "FunctionDefinition",
                        "src": "4397:1173:97",
                        "nodes": [],
                        "body": {
                            "id": 27093,
                            "nodeType": "Block",
                            "src": "4482:1088:97",
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
                                                "id": 26999,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "id": 26995,
                                                                "name": "chainAlias",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 26986,
                                                                "src": "4519:10:97",
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
                                                            "id": 26994,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "4513:5:97",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                "typeString": "type(bytes storage pointer)"
                                                            },
                                                            "typeName": {
                                                                "id": 26993,
                                                                "name": "bytes",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "4513:5:97",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 26996,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4513:17:97",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    },
                                                    "id": 26997,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4531:6:97",
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "src": "4513:24:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 26998,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4541:1:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "4513:29:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e",
                                                "id": 27000,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4556:79:97",
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
                                            "id": 26992,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4492:7:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 27001,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4492:153:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27002,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4492:153:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 27007,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 27004,
                                                        "name": "chain",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26989,
                                                        "src": "4664:5:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                            "typeString": "struct StdChains.ChainData memory"
                                                        }
                                                    },
                                                    "id": 27005,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4670:7:97",
                                                    "memberName": "chainId",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 26847,
                                                    "src": "4664:13:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 27006,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4681:1:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "4664:18:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e2049442063616e6e6f7420626520302e",
                                                "id": 27008,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4684:61:97",
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
                                            "id": 27003,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4656:7:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 27009,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4656:90:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27010,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4656:90:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 27011,
                                            "name": "initializeStdChains",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27501,
                                            "src": "4757:19:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 27012,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4757:21:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27013,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4757:21:97"
                                },
                                {
                                    "assignments": [
                                        27015
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 27015,
                                            "mutability": "mutable",
                                            "name": "foundAlias",
                                            "nameLocation": "4802:10:97",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 27093,
                                            "src": "4788:24:97",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string"
                                            },
                                            "typeName": {
                                                "id": 27014,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4788:6:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_storage_ptr",
                                                    "typeString": "string"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 27020,
                                    "initialValue": {
                                        "baseExpression": {
                                            "id": 27016,
                                            "name": "idToAlias",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26872,
                                            "src": "4815:9:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                                                "typeString": "mapping(uint256 => string storage ref)"
                                            }
                                        },
                                        "id": 27019,
                                        "indexExpression": {
                                            "expression": {
                                                "id": 27017,
                                                "name": "chain",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26989,
                                                "src": "4825:5:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            },
                                            "id": 27018,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4831:7:97",
                                            "memberName": "chainId",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 26847,
                                            "src": "4825:13:97",
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
                                        "src": "4815:24:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4788:51:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                "id": 27042,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 27028,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "arguments": [
                                                                {
                                                                    "id": 27024,
                                                                    "name": "foundAlias",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 27015,
                                                                    "src": "4877:10:97",
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
                                                                "id": 27023,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "4871:5:97",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                    "typeString": "type(bytes storage pointer)"
                                                                },
                                                                "typeName": {
                                                                    "id": 27022,
                                                                    "name": "bytes",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "4871:5:97",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 27025,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "4871:17:97",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        },
                                                        "id": 27026,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "4889:6:97",
                                                        "memberName": "length",
                                                        "nodeType": "MemberAccess",
                                                        "src": "4871:24:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "hexValue": "30",
                                                        "id": 27027,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "4899:1:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "4871:29:97",
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
                                                    "id": 27041,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 27032,
                                                                        "name": "foundAlias",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 27015,
                                                                        "src": "4920:10:97",
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
                                                                    "id": 27031,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "4914:5:97",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                        "typeString": "type(bytes storage pointer)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 27030,
                                                                        "name": "bytes",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "4914:5:97",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 27033,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "4914:17:97",
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
                                                            "id": 27029,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "4904:9:97",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 27034,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4904:28:97",
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
                                                                        "id": 27038,
                                                                        "name": "chainAlias",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 26986,
                                                                        "src": "4952:10:97",
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
                                                                    "id": 27037,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "4946:5:97",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                        "typeString": "type(bytes storage pointer)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 27036,
                                                                        "name": "bytes",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "4946:5:97",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 27039,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "4946:17:97",
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
                                                            "id": 27035,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "4936:9:97",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 27040,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4936:28:97",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "src": "4904:60:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "src": "4871:93:97",
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
                                                                "id": 27047,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5040:49:97",
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
                                                                            "id": 27050,
                                                                            "name": "chain",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 26989,
                                                                            "src": "5123:5:97",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                                                "typeString": "struct StdChains.ChainData memory"
                                                                            }
                                                                        },
                                                                        "id": 27051,
                                                                        "isConstant": false,
                                                                        "isLValue": true,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "memberLocation": "5129:7:97",
                                                                        "memberName": "chainId",
                                                                        "nodeType": "MemberAccess",
                                                                        "referencedDeclaration": 26847,
                                                                        "src": "5123:13:97",
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
                                                                        "id": 27048,
                                                                        "name": "vm",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 26841,
                                                                        "src": "5111:2:97",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_VmSafe_$36025",
                                                                            "typeString": "contract VmSafe"
                                                                        }
                                                                    },
                                                                    "id": 27049,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "5114:8:97",
                                                                    "memberName": "toString",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 35557,
                                                                    "src": "5111:11:97",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                                    }
                                                                },
                                                                "id": 27052,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "5111:26:97",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                    "typeString": "string memory"
                                                                }
                                                            },
                                                            {
                                                                "hexValue": "20616c726561647920757365642062792022",
                                                                "id": 27053,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5159:21:97",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_03dcc98944d744f10105f4b63a1d5b4f5b14493812e66201e5f21a3da2662077",
                                                                    "typeString": "literal_string \" already used by \"\""
                                                                },
                                                                "value": " already used by \""
                                                            },
                                                            {
                                                                "id": 27054,
                                                                "name": "foundAlias",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 27015,
                                                                "src": "5202:10:97",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                    "typeString": "string memory"
                                                                }
                                                            },
                                                            {
                                                                "hexValue": "222e",
                                                                "id": 27055,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5234:5:97",
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
                                                                "id": 27045,
                                                                "name": "abi",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -1,
                                                                "src": "5002:3:97",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_abi",
                                                                    "typeString": "abi"
                                                                }
                                                            },
                                                            "id": 27046,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5006:12:97",
                                                            "memberName": "encodePacked",
                                                            "nodeType": "MemberAccess",
                                                            "src": "5002:16:97",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                "typeString": "function () pure returns (bytes memory)"
                                                            }
                                                        },
                                                        "id": 27056,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5002:255:97",
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
                                                    "id": 27044,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "4978:6:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                        "typeString": "type(string storage pointer)"
                                                    },
                                                    "typeName": {
                                                        "id": 27043,
                                                        "name": "string",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4978:6:97",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 27057,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4978:293:97",
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
                                            "id": 27021,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4850:7:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 27058,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4850:431:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27059,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4850:431:97"
                                },
                                {
                                    "assignments": [
                                        27061
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 27061,
                                            "mutability": "mutable",
                                            "name": "oldChainId",
                                            "nameLocation": "5300:10:97",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 27093,
                                            "src": "5292:18:97",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 27060,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5292:7:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 27066,
                                    "initialValue": {
                                        "expression": {
                                            "baseExpression": {
                                                "id": 27062,
                                                "name": "chains",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26864,
                                                "src": "5313:6:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26859_storage_$",
                                                    "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                                                }
                                            },
                                            "id": 27064,
                                            "indexExpression": {
                                                "id": 27063,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26986,
                                                "src": "5320:10:97",
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
                                            "src": "5313:18:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$26859_storage",
                                                "typeString": "struct StdChains.Chain storage ref"
                                            }
                                        },
                                        "id": 27065,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "5332:7:97",
                                        "memberName": "chainId",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 26854,
                                        "src": "5313:26:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5292:47:97"
                                },
                                {
                                    "expression": {
                                        "id": 27070,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "delete",
                                        "prefix": true,
                                        "src": "5349:28:97",
                                        "subExpression": {
                                            "baseExpression": {
                                                "id": 27067,
                                                "name": "idToAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26872,
                                                "src": "5356:9:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                                                    "typeString": "mapping(uint256 => string storage ref)"
                                                }
                                            },
                                            "id": 27069,
                                            "indexExpression": {
                                                "id": 27068,
                                                "name": "oldChainId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 27061,
                                                "src": "5366:10:97",
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
                                            "src": "5356:21:97",
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
                                    "id": 27071,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5349:28:97"
                                },
                                {
                                    "expression": {
                                        "id": 27084,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 27072,
                                                "name": "chains",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26864,
                                                "src": "5388:6:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26859_storage_$",
                                                    "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                                                }
                                            },
                                            "id": 27074,
                                            "indexExpression": {
                                                "id": 27073,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26986,
                                                "src": "5395:10:97",
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
                                            "src": "5388:18:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$26859_storage",
                                                "typeString": "struct StdChains.Chain storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "expression": {
                                                        "id": 27076,
                                                        "name": "chain",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26989,
                                                        "src": "5434:5:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                            "typeString": "struct StdChains.ChainData memory"
                                                        }
                                                    },
                                                    "id": 27077,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5440:4:97",
                                                    "memberName": "name",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 26845,
                                                    "src": "5434:10:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                },
                                                {
                                                    "expression": {
                                                        "id": 27078,
                                                        "name": "chain",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26989,
                                                        "src": "5455:5:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                            "typeString": "struct StdChains.ChainData memory"
                                                        }
                                                    },
                                                    "id": 27079,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5461:7:97",
                                                    "memberName": "chainId",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 26847,
                                                    "src": "5455:13:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 27080,
                                                    "name": "chainAlias",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26986,
                                                    "src": "5482:10:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                },
                                                {
                                                    "expression": {
                                                        "id": 27081,
                                                        "name": "chain",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 26989,
                                                        "src": "5502:5:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                            "typeString": "struct StdChains.ChainData memory"
                                                        }
                                                    },
                                                    "id": 27082,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5508:6:97",
                                                    "memberName": "rpcUrl",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 26849,
                                                    "src": "5502:12:97",
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
                                                "id": 27075,
                                                "name": "Chain",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26859,
                                                "src": "5421:5:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_struct$_Chain_$26859_storage_ptr_$",
                                                    "typeString": "type(struct StdChains.Chain storage pointer)"
                                                }
                                            },
                                            "id": 27083,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "structConstructorCall",
                                            "lValueRequested": false,
                                            "nameLocations": [
                                                "5428:4:97",
                                                "5446:7:97",
                                                "5470:10:97",
                                                "5494:6:97"
                                            ],
                                            "names": [
                                                "name",
                                                "chainId",
                                                "chainAlias",
                                                "rpcUrl"
                                            ],
                                            "nodeType": "FunctionCall",
                                            "src": "5421:95:97",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "src": "5388:128:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$26859_storage",
                                            "typeString": "struct StdChains.Chain storage ref"
                                        }
                                    },
                                    "id": 27085,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5388:128:97"
                                },
                                {
                                    "expression": {
                                        "id": 27091,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 27086,
                                                "name": "idToAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26872,
                                                "src": "5526:9:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                                                    "typeString": "mapping(uint256 => string storage ref)"
                                                }
                                            },
                                            "id": 27089,
                                            "indexExpression": {
                                                "expression": {
                                                    "id": 27087,
                                                    "name": "chain",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26989,
                                                    "src": "5536:5:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                        "typeString": "struct StdChains.ChainData memory"
                                                    }
                                                },
                                                "id": 27088,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5542:7:97",
                                                "memberName": "chainId",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 26847,
                                                "src": "5536:13:97",
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
                                            "src": "5526:24:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 27090,
                                            "name": "chainAlias",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26986,
                                            "src": "5553:10:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "5526:37:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 27092,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5526:37:97"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setChain",
                        "nameLocation": "4406:8:97",
                        "parameters": {
                            "id": 26990,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26986,
                                    "mutability": "mutable",
                                    "name": "chainAlias",
                                    "nameLocation": "4429:10:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 27094,
                                    "src": "4415:24:97",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 26985,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4415:6:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 26989,
                                    "mutability": "mutable",
                                    "name": "chain",
                                    "nameLocation": "4458:5:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 27094,
                                    "src": "4441:22:97",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                        "typeString": "struct StdChains.ChainData"
                                    },
                                    "typeName": {
                                        "id": 26988,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 26987,
                                            "name": "ChainData",
                                            "nameLocations": [
                                                "4441:9:97"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 26850,
                                            "src": "4441:9:97"
                                        },
                                        "referencedDeclaration": 26850,
                                        "src": "4441:9:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_ChainData_$26850_storage_ptr",
                                            "typeString": "struct StdChains.ChainData"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4414:50:97"
                        },
                        "returnParameters": {
                            "id": 26991,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4482:0:97"
                        },
                        "scope": 27539,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 27115,
                        "nodeType": "FunctionDefinition",
                        "src": "5641:195:97",
                        "nodes": [],
                        "body": {
                            "id": 27114,
                            "nodeType": "Block",
                            "src": "5722:114:97",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 27103,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 27096,
                                                "src": "5741:10:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 27105,
                                                            "name": "chain",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 27099,
                                                            "src": "5770:5:97",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                                                "typeString": "struct StdChains.Chain memory"
                                                            }
                                                        },
                                                        "id": 27106,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5776:4:97",
                                                        "memberName": "name",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 26852,
                                                        "src": "5770:10:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 27107,
                                                            "name": "chain",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 27099,
                                                            "src": "5791:5:97",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                                                "typeString": "struct StdChains.Chain memory"
                                                            }
                                                        },
                                                        "id": 27108,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5797:7:97",
                                                        "memberName": "chainId",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 26854,
                                                        "src": "5791:13:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 27109,
                                                            "name": "chain",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 27099,
                                                            "src": "5814:5:97",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                                                "typeString": "struct StdChains.Chain memory"
                                                            }
                                                        },
                                                        "id": 27110,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5820:6:97",
                                                        "memberName": "rpcUrl",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 26858,
                                                        "src": "5814:12:97",
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
                                                    "id": 27104,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26850,
                                                    "src": "5753:9:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$26850_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 27111,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [
                                                    "5764:4:97",
                                                    "5782:7:97",
                                                    "5806:6:97"
                                                ],
                                                "names": [
                                                    "name",
                                                    "chainId",
                                                    "rpcUrl"
                                                ],
                                                "nodeType": "FunctionCall",
                                                "src": "5753:75:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27102,
                                            "name": "setChain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                27094,
                                                27115
                                            ],
                                            "referencedDeclaration": 27094,
                                            "src": "5732:8:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27112,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5732:97:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27113,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5732:97:97"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setChain",
                        "nameLocation": "5650:8:97",
                        "parameters": {
                            "id": 27100,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 27096,
                                    "mutability": "mutable",
                                    "name": "chainAlias",
                                    "nameLocation": "5673:10:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 27115,
                                    "src": "5659:24:97",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 27095,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5659:6:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 27099,
                                    "mutability": "mutable",
                                    "name": "chain",
                                    "nameLocation": "5698:5:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 27115,
                                    "src": "5685:18:97",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                        "typeString": "struct StdChains.Chain"
                                    },
                                    "typeName": {
                                        "id": 27098,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 27097,
                                            "name": "Chain",
                                            "nameLocations": [
                                                "5685:5:97"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 26859,
                                            "src": "5685:5:97"
                                        },
                                        "referencedDeclaration": 26859,
                                        "src": "5685:5:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$26859_storage_ptr",
                                            "typeString": "struct StdChains.Chain"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5658:46:97"
                        },
                        "returnParameters": {
                            "id": 27101,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5722:0:97"
                        },
                        "scope": 27539,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 27192,
                        "nodeType": "FunctionDefinition",
                        "src": "5842:451:97",
                        "nodes": [],
                        "body": {
                            "id": 27191,
                            "nodeType": "Block",
                            "src": "5916:377:97",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        27123
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 27123,
                                            "mutability": "mutable",
                                            "name": "strb",
                                            "nameLocation": "5939:4:97",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 27191,
                                            "src": "5926:17:97",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 27122,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5926:5:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 27128,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 27126,
                                                "name": "str",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 27117,
                                                "src": "5952:3:97",
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
                                            "id": 27125,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "5946:5:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                "typeString": "type(bytes storage pointer)"
                                            },
                                            "typeName": {
                                                "id": 27124,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5946:5:97",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 27127,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5946:10:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5926:30:97"
                                },
                                {
                                    "assignments": [
                                        27130
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 27130,
                                            "mutability": "mutable",
                                            "name": "copy",
                                            "nameLocation": "5979:4:97",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 27191,
                                            "src": "5966:17:97",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 27129,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5966:5:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 27136,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 27133,
                                                    "name": "strb",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 27123,
                                                    "src": "5996:4:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "id": 27134,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6001:6:97",
                                                "memberName": "length",
                                                "nodeType": "MemberAccess",
                                                "src": "5996:11:97",
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
                                            "id": 27132,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "5986:9:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (uint256) pure returns (bytes memory)"
                                            },
                                            "typeName": {
                                                "id": 27131,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5990:5:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            }
                                        },
                                        "id": 27135,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5986:22:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5966:42:97"
                                },
                                {
                                    "body": {
                                        "id": 27184,
                                        "nodeType": "Block",
                                        "src": "6060:198:97",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    27149
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 27149,
                                                        "mutability": "mutable",
                                                        "name": "b",
                                                        "nameLocation": "6081:1:97",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 27184,
                                                        "src": "6074:8:97",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes1",
                                                            "typeString": "bytes1"
                                                        },
                                                        "typeName": {
                                                            "id": 27148,
                                                            "name": "bytes1",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "6074:6:97",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes1",
                                                                "typeString": "bytes1"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 27153,
                                                "initialValue": {
                                                    "baseExpression": {
                                                        "id": 27150,
                                                        "name": "strb",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 27123,
                                                        "src": "6085:4:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    },
                                                    "id": 27152,
                                                    "indexExpression": {
                                                        "id": 27151,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 27138,
                                                        "src": "6090:1:97",
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
                                                    "src": "6085:7:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes1",
                                                        "typeString": "bytes1"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "6074:18:97"
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
                                                            "typeIdentifier": "t_bytes1",
                                                            "typeString": "bytes1"
                                                        },
                                                        "id": 27156,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 27154,
                                                            "name": "b",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 27149,
                                                            "src": "6110:1:97",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes1",
                                                                "typeString": "bytes1"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": ">=",
                                                        "rightExpression": {
                                                            "hexValue": "30783631",
                                                            "id": 27155,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "6115:4:97",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_97_by_1",
                                                                "typeString": "int_const 97"
                                                            },
                                                            "value": "0x61"
                                                        },
                                                        "src": "6110:9:97",
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
                                                        "id": 27159,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 27157,
                                                            "name": "b",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 27149,
                                                            "src": "6123:1:97",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes1",
                                                                "typeString": "bytes1"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "<=",
                                                        "rightExpression": {
                                                            "hexValue": "30783741",
                                                            "id": 27158,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "6128:4:97",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_122_by_1",
                                                                "typeString": "int_const 122"
                                                            },
                                                            "value": "0x7A"
                                                        },
                                                        "src": "6123:9:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "6110:22:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": {
                                                    "id": 27182,
                                                    "nodeType": "Block",
                                                    "src": "6204:44:97",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 27180,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 27176,
                                                                        "name": "copy",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 27130,
                                                                        "src": "6222:4:97",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "id": 27178,
                                                                    "indexExpression": {
                                                                        "id": 27177,
                                                                        "name": "i",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 27138,
                                                                        "src": "6227:1:97",
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
                                                                    "src": "6222:7:97",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "id": 27179,
                                                                    "name": "b",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 27149,
                                                                    "src": "6232:1:97",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "src": "6222:11:97",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            "id": 27181,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "6222:11:97"
                                                        }
                                                    ]
                                                },
                                                "id": 27183,
                                                "nodeType": "IfStatement",
                                                "src": "6106:142:97",
                                                "trueBody": {
                                                    "id": 27175,
                                                    "nodeType": "Block",
                                                    "src": "6134:64:97",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 27173,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 27161,
                                                                        "name": "copy",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 27130,
                                                                        "src": "6152:4:97",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "id": 27163,
                                                                    "indexExpression": {
                                                                        "id": 27162,
                                                                        "name": "i",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 27138,
                                                                        "src": "6157:1:97",
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
                                                                    "src": "6152:7:97",
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
                                                                            "id": 27171,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "arguments": [
                                                                                    {
                                                                                        "id": 27168,
                                                                                        "name": "b",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 27149,
                                                                                        "src": "6175:1:97",
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
                                                                                    "id": 27167,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "lValueRequested": false,
                                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                                    "src": "6169:5:97",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_type$_t_uint8_$",
                                                                                        "typeString": "type(uint8)"
                                                                                    },
                                                                                    "typeName": {
                                                                                        "id": 27166,
                                                                                        "name": "uint8",
                                                                                        "nodeType": "ElementaryTypeName",
                                                                                        "src": "6169:5:97",
                                                                                        "typeDescriptions": {}
                                                                                    }
                                                                                },
                                                                                "id": 27169,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "typeConversion",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "6169:8:97",
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
                                                                                "id": 27170,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "kind": "number",
                                                                                "lValueRequested": false,
                                                                                "nodeType": "Literal",
                                                                                "src": "6180:2:97",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_rational_32_by_1",
                                                                                    "typeString": "int_const 32"
                                                                                },
                                                                                "value": "32"
                                                                            },
                                                                            "src": "6169:13:97",
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
                                                                        "id": 27165,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "6162:6:97",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 27164,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "6162:6:97",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 27172,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "6162:21:97",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "src": "6152:31:97",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            "id": 27174,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "6152:31:97"
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
                                        "id": 27144,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 27141,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27138,
                                            "src": "6038:1:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 27142,
                                                "name": "strb",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 27123,
                                                "src": "6042:4:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            "id": 27143,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6047:6:97",
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "src": "6042:11:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6038:15:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 27185,
                                    "initializationExpression": {
                                        "assignments": [
                                            27138
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 27138,
                                                "mutability": "mutable",
                                                "name": "i",
                                                "nameLocation": "6031:1:97",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 27185,
                                                "src": "6023:9:97",
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
                                                    "src": "6023:7:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 27140,
                                        "initialValue": {
                                            "hexValue": "30",
                                            "id": 27139,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6035:1:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "6023:13:97"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "id": 27146,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "6055:3:97",
                                            "subExpression": {
                                                "id": 27145,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 27138,
                                                "src": "6055:1:97",
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
                                        "id": 27147,
                                        "nodeType": "ExpressionStatement",
                                        "src": "6055:3:97"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "6018:240:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 27188,
                                                "name": "copy",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 27130,
                                                "src": "6281:4:97",
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
                                            "id": 27187,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "6274:6:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                "typeString": "type(string storage pointer)"
                                            },
                                            "typeName": {
                                                "id": 27186,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6274:6:97",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 27189,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6274:12:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 27121,
                                    "id": 27190,
                                    "nodeType": "Return",
                                    "src": "6267:19:97"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_toUpper",
                        "nameLocation": "5851:8:97",
                        "parameters": {
                            "id": 27118,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 27117,
                                    "mutability": "mutable",
                                    "name": "str",
                                    "nameLocation": "5874:3:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 27192,
                                    "src": "5860:17:97",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 27116,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5860:6:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5859:19:97"
                        },
                        "returnParameters": {
                            "id": 27121,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 27120,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 27192,
                                    "src": "5901:13:97",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 27119,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5901:6:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5900:15:97"
                        },
                        "scope": 27539,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 27309,
                        "nodeType": "FunctionDefinition",
                        "src": "6429:1218:97",
                        "nodes": [],
                        "body": {
                            "id": 27308,
                            "nodeType": "Block",
                            "src": "6541:1106:97",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
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
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 27205,
                                                            "name": "chain",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 27197,
                                                            "src": "6561:5:97",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                                                "typeString": "struct StdChains.Chain memory"
                                                            }
                                                        },
                                                        "id": 27206,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "6567:6:97",
                                                        "memberName": "rpcUrl",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 26858,
                                                        "src": "6561:12:97",
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
                                                    "id": 27204,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "6555:5:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                        "typeString": "type(bytes storage pointer)"
                                                    },
                                                    "typeName": {
                                                        "id": 27203,
                                                        "name": "bytes",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "6555:5:97",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 27207,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "6555:19:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            "id": 27208,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6575:6:97",
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "src": "6555:26:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 27209,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6585:1:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "6555:31:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 27305,
                                    "nodeType": "IfStatement",
                                    "src": "6551:1068:97",
                                    "trueBody": {
                                        "id": 27304,
                                        "nodeType": "Block",
                                        "src": "6588:1031:97",
                                        "statements": [
                                            {
                                                "clauses": [
                                                    {
                                                        "block": {
                                                            "id": 27224,
                                                            "nodeType": "Block",
                                                            "src": "6665:60:97",
                                                            "statements": [
                                                                {
                                                                    "expression": {
                                                                        "id": 27222,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftHandSide": {
                                                                            "expression": {
                                                                                "id": 27218,
                                                                                "name": "chain",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 27197,
                                                                                "src": "6683:5:97",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                                                                    "typeString": "struct StdChains.Chain memory"
                                                                                }
                                                                            },
                                                                            "id": 27220,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": true,
                                                                            "memberLocation": "6689:6:97",
                                                                            "memberName": "rpcUrl",
                                                                            "nodeType": "MemberAccess",
                                                                            "referencedDeclaration": 26858,
                                                                            "src": "6683:12:97",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_string_memory_ptr",
                                                                                "typeString": "string memory"
                                                                            }
                                                                        },
                                                                        "nodeType": "Assignment",
                                                                        "operator": "=",
                                                                        "rightHandSide": {
                                                                            "id": 27221,
                                                                            "name": "configRpcUrl",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 27216,
                                                                            "src": "6698:12:97",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_string_memory_ptr",
                                                                                "typeString": "string memory"
                                                                            }
                                                                        },
                                                                        "src": "6683:27:97",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                            "typeString": "string memory"
                                                                        }
                                                                    },
                                                                    "id": 27223,
                                                                    "nodeType": "ExpressionStatement",
                                                                    "src": "6683:27:97"
                                                                }
                                                            ]
                                                        },
                                                        "errorName": "",
                                                        "id": 27225,
                                                        "nodeType": "TryCatchClause",
                                                        "parameters": {
                                                            "id": 27217,
                                                            "nodeType": "ParameterList",
                                                            "parameters": [
                                                                {
                                                                    "constant": false,
                                                                    "id": 27216,
                                                                    "mutability": "mutable",
                                                                    "name": "configRpcUrl",
                                                                    "nameLocation": "6651:12:97",
                                                                    "nodeType": "VariableDeclaration",
                                                                    "scope": 27225,
                                                                    "src": "6637:26:97",
                                                                    "stateVariable": false,
                                                                    "storageLocation": "memory",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_string_memory_ptr",
                                                                        "typeString": "string"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 27215,
                                                                        "name": "string",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "6637:6:97",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_string_storage_ptr",
                                                                            "typeString": "string"
                                                                        }
                                                                    },
                                                                    "visibility": "internal"
                                                                }
                                                            ],
                                                            "src": "6636:28:97"
                                                        },
                                                        "src": "6628:97:97"
                                                    },
                                                    {
                                                        "block": {
                                                            "id": 27301,
                                                            "nodeType": "Block",
                                                            "src": "6751:858:97",
                                                            "statements": [
                                                                {
                                                                    "assignments": [
                                                                        27230
                                                                    ],
                                                                    "declarations": [
                                                                        {
                                                                            "constant": false,
                                                                            "id": 27230,
                                                                            "mutability": "mutable",
                                                                            "name": "envName",
                                                                            "nameLocation": "6783:7:97",
                                                                            "nodeType": "VariableDeclaration",
                                                                            "scope": 27301,
                                                                            "src": "6769:21:97",
                                                                            "stateVariable": false,
                                                                            "storageLocation": "memory",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_string_memory_ptr",
                                                                                "typeString": "string"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 27229,
                                                                                "name": "string",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "6769:6:97",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_string_storage_ptr",
                                                                                    "typeString": "string"
                                                                                }
                                                                            },
                                                                            "visibility": "internal"
                                                                        }
                                                                    ],
                                                                    "id": 27241,
                                                                    "initialValue": {
                                                                        "arguments": [
                                                                            {
                                                                                "arguments": [
                                                                                    {
                                                                                        "arguments": [
                                                                                            {
                                                                                                "id": 27236,
                                                                                                "name": "chainAlias",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 27194,
                                                                                                "src": "6826:10:97",
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
                                                                                            "id": 27235,
                                                                                            "name": "_toUpper",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": 27192,
                                                                                            "src": "6817:8:97",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                                                                "typeString": "function (string memory) pure returns (string memory)"
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
                                                                                        "src": "6817:20:97",
                                                                                        "tryCall": false,
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                                            "typeString": "string memory"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "hexValue": "5f5250435f55524c",
                                                                                        "id": 27238,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": true,
                                                                                        "kind": "string",
                                                                                        "lValueRequested": false,
                                                                                        "nodeType": "Literal",
                                                                                        "src": "6839:10:97",
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
                                                                                        "id": 27233,
                                                                                        "name": "abi",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": -1,
                                                                                        "src": "6800:3:97",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_magic_abi",
                                                                                            "typeString": "abi"
                                                                                        }
                                                                                    },
                                                                                    "id": 27234,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "lValueRequested": false,
                                                                                    "memberLocation": "6804:12:97",
                                                                                    "memberName": "encodePacked",
                                                                                    "nodeType": "MemberAccess",
                                                                                    "src": "6800:16:97",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                                        "typeString": "function () pure returns (bytes memory)"
                                                                                    }
                                                                                },
                                                                                "id": 27239,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "functionCall",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "6800:50:97",
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
                                                                            "id": 27232,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "6793:6:97",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                                                "typeString": "type(string storage pointer)"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 27231,
                                                                                "name": "string",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "6793:6:97",
                                                                                "typeDescriptions": {}
                                                                            }
                                                                        },
                                                                        "id": 27240,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "typeConversion",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "6793:58:97",
                                                                        "tryCall": false,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                            "typeString": "string memory"
                                                                        }
                                                                    },
                                                                    "nodeType": "VariableDeclarationStatement",
                                                                    "src": "6769:82:97"
                                                                },
                                                                {
                                                                    "condition": {
                                                                        "id": 27242,
                                                                        "name": "fallbackToDefaultRpcUrls",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 26875,
                                                                        "src": "6873:24:97",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bool",
                                                                            "typeString": "bool"
                                                                        }
                                                                    },
                                                                    "falseBody": {
                                                                        "id": 27265,
                                                                        "nodeType": "Block",
                                                                        "src": "7006:77:97",
                                                                        "statements": [
                                                                            {
                                                                                "expression": {
                                                                                    "id": 27263,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "leftHandSide": {
                                                                                        "expression": {
                                                                                            "id": 27256,
                                                                                            "name": "chain",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": 27197,
                                                                                            "src": "7028:5:97",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                                                                                "typeString": "struct StdChains.Chain memory"
                                                                                            }
                                                                                        },
                                                                                        "id": 27258,
                                                                                        "isConstant": false,
                                                                                        "isLValue": true,
                                                                                        "isPure": false,
                                                                                        "lValueRequested": true,
                                                                                        "memberLocation": "7034:6:97",
                                                                                        "memberName": "rpcUrl",
                                                                                        "nodeType": "MemberAccess",
                                                                                        "referencedDeclaration": 26858,
                                                                                        "src": "7028:12:97",
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
                                                                                                "id": 27261,
                                                                                                "name": "envName",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 27230,
                                                                                                "src": "7056:7:97",
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
                                                                                                "id": 27259,
                                                                                                "name": "vm",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 26841,
                                                                                                "src": "7043:2:97",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_contract$_VmSafe_$36025",
                                                                                                    "typeString": "contract VmSafe"
                                                                                                }
                                                                                            },
                                                                                            "id": 27260,
                                                                                            "isConstant": false,
                                                                                            "isLValue": false,
                                                                                            "isPure": false,
                                                                                            "lValueRequested": false,
                                                                                            "memberLocation": "7046:9:97",
                                                                                            "memberName": "envString",
                                                                                            "nodeType": "MemberAccess",
                                                                                            "referencedDeclaration": 35101,
                                                                                            "src": "7043:12:97",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                                                                "typeString": "function (string memory) view external returns (string memory)"
                                                                                            }
                                                                                        },
                                                                                        "id": 27262,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": false,
                                                                                        "kind": "functionCall",
                                                                                        "lValueRequested": false,
                                                                                        "nameLocations": [],
                                                                                        "names": [],
                                                                                        "nodeType": "FunctionCall",
                                                                                        "src": "7043:21:97",
                                                                                        "tryCall": false,
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                                            "typeString": "string memory"
                                                                                        }
                                                                                    },
                                                                                    "src": "7028:36:97",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_string_memory_ptr",
                                                                                        "typeString": "string memory"
                                                                                    }
                                                                                },
                                                                                "id": 27264,
                                                                                "nodeType": "ExpressionStatement",
                                                                                "src": "7028:36:97"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "id": 27266,
                                                                    "nodeType": "IfStatement",
                                                                    "src": "6869:214:97",
                                                                    "trueBody": {
                                                                        "id": 27255,
                                                                        "nodeType": "Block",
                                                                        "src": "6899:101:97",
                                                                        "statements": [
                                                                            {
                                                                                "expression": {
                                                                                    "id": 27253,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "leftHandSide": {
                                                                                        "expression": {
                                                                                            "id": 27243,
                                                                                            "name": "chain",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": 27197,
                                                                                            "src": "6921:5:97",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                                                                                "typeString": "struct StdChains.Chain memory"
                                                                                            }
                                                                                        },
                                                                                        "id": 27245,
                                                                                        "isConstant": false,
                                                                                        "isLValue": true,
                                                                                        "isPure": false,
                                                                                        "lValueRequested": true,
                                                                                        "memberLocation": "6927:6:97",
                                                                                        "memberName": "rpcUrl",
                                                                                        "nodeType": "MemberAccess",
                                                                                        "referencedDeclaration": 26858,
                                                                                        "src": "6921:12:97",
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
                                                                                                "id": 27248,
                                                                                                "name": "envName",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 27230,
                                                                                                "src": "6945:7:97",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                                                    "typeString": "string memory"
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                "baseExpression": {
                                                                                                    "id": 27249,
                                                                                                    "name": "defaultRpcUrls",
                                                                                                    "nodeType": "Identifier",
                                                                                                    "overloadedDeclarations": [],
                                                                                                    "referencedDeclaration": 26868,
                                                                                                    "src": "6954:14:97",
                                                                                                    "typeDescriptions": {
                                                                                                        "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                                                                                                        "typeString": "mapping(string memory => string storage ref)"
                                                                                                    }
                                                                                                },
                                                                                                "id": 27251,
                                                                                                "indexExpression": {
                                                                                                    "id": 27250,
                                                                                                    "name": "chainAlias",
                                                                                                    "nodeType": "Identifier",
                                                                                                    "overloadedDeclarations": [],
                                                                                                    "referencedDeclaration": 27194,
                                                                                                    "src": "6969:10:97",
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
                                                                                                "src": "6954:26:97",
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
                                                                                                "id": 27246,
                                                                                                "name": "vm",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 26841,
                                                                                                "src": "6936:2:97",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_contract$_VmSafe_$36025",
                                                                                                    "typeString": "contract VmSafe"
                                                                                                }
                                                                                            },
                                                                                            "id": 27247,
                                                                                            "isConstant": false,
                                                                                            "isLValue": false,
                                                                                            "isPure": false,
                                                                                            "lValueRequested": false,
                                                                                            "memberLocation": "6939:5:97",
                                                                                            "memberName": "envOr",
                                                                                            "nodeType": "MemberAccess",
                                                                                            "referencedDeclaration": 35232,
                                                                                            "src": "6936:8:97",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                                                                "typeString": "function (string memory,string memory) external returns (string memory)"
                                                                                            }
                                                                                        },
                                                                                        "id": 27252,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": false,
                                                                                        "kind": "functionCall",
                                                                                        "lValueRequested": false,
                                                                                        "nameLocations": [],
                                                                                        "names": [],
                                                                                        "nodeType": "FunctionCall",
                                                                                        "src": "6936:45:97",
                                                                                        "tryCall": false,
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                                            "typeString": "string memory"
                                                                                        }
                                                                                    },
                                                                                    "src": "6921:60:97",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_string_memory_ptr",
                                                                                        "typeString": "string memory"
                                                                                    }
                                                                                },
                                                                                "id": 27254,
                                                                                "nodeType": "ExpressionStatement",
                                                                                "src": "6921:60:97"
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    "assignments": [
                                                                        27268
                                                                    ],
                                                                    "declarations": [
                                                                        {
                                                                            "constant": false,
                                                                            "id": 27268,
                                                                            "mutability": "mutable",
                                                                            "name": "notFoundError",
                                                                            "nameLocation": "7175:13:97",
                                                                            "nodeType": "VariableDeclaration",
                                                                            "scope": 27301,
                                                                            "src": "7162:26:97",
                                                                            "stateVariable": false,
                                                                            "storageLocation": "memory",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                                "typeString": "bytes"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 27267,
                                                                                "name": "bytes",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "7162:5:97",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                                                    "typeString": "bytes"
                                                                                }
                                                                            },
                                                                            "visibility": "internal"
                                                                        }
                                                                    ],
                                                                    "id": 27281,
                                                                    "initialValue": {
                                                                        "arguments": [
                                                                            {
                                                                                "hexValue": "4368656174436f64654572726f72",
                                                                                "id": 27271,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "kind": "string",
                                                                                "lValueRequested": false,
                                                                                "nodeType": "Literal",
                                                                                "src": "7235:16:97",
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
                                                                                                "id": 27276,
                                                                                                "isConstant": false,
                                                                                                "isLValue": false,
                                                                                                "isPure": true,
                                                                                                "kind": "string",
                                                                                                "lValueRequested": false,
                                                                                                "nodeType": "Literal",
                                                                                                "src": "7277:18:97",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_stringliteral_2baf3da7b122675739218e635e969f0d1b560b915d35635239551f70fe123eed",
                                                                                                    "typeString": "literal_string \"invalid rpc url \""
                                                                                                },
                                                                                                "value": "invalid rpc url "
                                                                                            },
                                                                                            {
                                                                                                "id": 27277,
                                                                                                "name": "chainAlias",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 27194,
                                                                                                "src": "7297:10:97",
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
                                                                                                "id": 27274,
                                                                                                "name": "abi",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": -1,
                                                                                                "src": "7260:3:97",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_magic_abi",
                                                                                                    "typeString": "abi"
                                                                                                }
                                                                                            },
                                                                                            "id": 27275,
                                                                                            "isConstant": false,
                                                                                            "isLValue": false,
                                                                                            "isPure": true,
                                                                                            "lValueRequested": false,
                                                                                            "memberLocation": "7264:12:97",
                                                                                            "memberName": "encodePacked",
                                                                                            "nodeType": "MemberAccess",
                                                                                            "src": "7260:16:97",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                                                "typeString": "function () pure returns (bytes memory)"
                                                                                            }
                                                                                        },
                                                                                        "id": 27278,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": false,
                                                                                        "kind": "functionCall",
                                                                                        "lValueRequested": false,
                                                                                        "nameLocations": [],
                                                                                        "names": [],
                                                                                        "nodeType": "FunctionCall",
                                                                                        "src": "7260:48:97",
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
                                                                                    "id": 27273,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "lValueRequested": false,
                                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                                    "src": "7253:6:97",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                                                        "typeString": "type(string storage pointer)"
                                                                                    },
                                                                                    "typeName": {
                                                                                        "id": 27272,
                                                                                        "name": "string",
                                                                                        "nodeType": "ElementaryTypeName",
                                                                                        "src": "7253:6:97",
                                                                                        "typeDescriptions": {}
                                                                                    }
                                                                                },
                                                                                "id": 27279,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "typeConversion",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "7253:56:97",
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
                                                                                "id": 27269,
                                                                                "name": "abi",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": -1,
                                                                                "src": "7211:3:97",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_magic_abi",
                                                                                    "typeString": "abi"
                                                                                }
                                                                            },
                                                                            "id": 27270,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "memberLocation": "7215:19:97",
                                                                            "memberName": "encodeWithSignature",
                                                                            "nodeType": "MemberAccess",
                                                                            "src": "7211:23:97",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_function_abiencodewithsignature_pure$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                                                "typeString": "function (string memory) pure returns (bytes memory)"
                                                                            }
                                                                        },
                                                                        "id": 27280,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "functionCall",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "7211:99:97",
                                                                        "tryCall": false,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "nodeType": "VariableDeclarationStatement",
                                                                    "src": "7162:148:97"
                                                                },
                                                                {
                                                                    "condition": {
                                                                        "commonType": {
                                                                            "typeIdentifier": "t_bool",
                                                                            "typeString": "bool"
                                                                        },
                                                                        "id": 27297,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_bytes32",
                                                                                "typeString": "bytes32"
                                                                            },
                                                                            "id": 27288,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "arguments": [
                                                                                    {
                                                                                        "id": 27283,
                                                                                        "name": "notFoundError",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 27268,
                                                                                        "src": "7342:13:97",
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
                                                                                    "id": 27282,
                                                                                    "name": "keccak256",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": -8,
                                                                                    "src": "7332:9:97",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                                        "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                                    }
                                                                                },
                                                                                "id": 27284,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "functionCall",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "7332:24:97",
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
                                                                                        "id": 27286,
                                                                                        "name": "err",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 27227,
                                                                                        "src": "7370:3:97",
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
                                                                                    "id": 27285,
                                                                                    "name": "keccak256",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": -8,
                                                                                    "src": "7360:9:97",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                                        "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                                    }
                                                                                },
                                                                                "id": 27287,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "functionCall",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "7360:14:97",
                                                                                "tryCall": false,
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_bytes32",
                                                                                    "typeString": "bytes32"
                                                                                }
                                                                            },
                                                                            "src": "7332:42:97",
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
                                                                            "id": 27296,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "expression": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "expression": {
                                                                                                "id": 27291,
                                                                                                "name": "chain",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 27197,
                                                                                                "src": "7384:5:97",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                                                                                    "typeString": "struct StdChains.Chain memory"
                                                                                                }
                                                                                            },
                                                                                            "id": 27292,
                                                                                            "isConstant": false,
                                                                                            "isLValue": true,
                                                                                            "isPure": false,
                                                                                            "lValueRequested": false,
                                                                                            "memberLocation": "7390:6:97",
                                                                                            "memberName": "rpcUrl",
                                                                                            "nodeType": "MemberAccess",
                                                                                            "referencedDeclaration": 26858,
                                                                                            "src": "7384:12:97",
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
                                                                                        "id": 27290,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": true,
                                                                                        "lValueRequested": false,
                                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                                        "src": "7378:5:97",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                                            "typeString": "type(bytes storage pointer)"
                                                                                        },
                                                                                        "typeName": {
                                                                                            "id": 27289,
                                                                                            "name": "bytes",
                                                                                            "nodeType": "ElementaryTypeName",
                                                                                            "src": "7378:5:97",
                                                                                            "typeDescriptions": {}
                                                                                        }
                                                                                    },
                                                                                    "id": 27293,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "kind": "typeConversion",
                                                                                    "lValueRequested": false,
                                                                                    "nameLocations": [],
                                                                                    "names": [],
                                                                                    "nodeType": "FunctionCall",
                                                                                    "src": "7378:19:97",
                                                                                    "tryCall": false,
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                                                        "typeString": "bytes memory"
                                                                                    }
                                                                                },
                                                                                "id": 27294,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "memberLocation": "7398:6:97",
                                                                                "memberName": "length",
                                                                                "nodeType": "MemberAccess",
                                                                                "src": "7378:26:97",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "==",
                                                                            "rightExpression": {
                                                                                "hexValue": "30",
                                                                                "id": 27295,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "kind": "number",
                                                                                "lValueRequested": false,
                                                                                "nodeType": "Literal",
                                                                                "src": "7408:1:97",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                                    "typeString": "int_const 0"
                                                                                },
                                                                                "value": "0"
                                                                            },
                                                                            "src": "7378:31:97",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_bool",
                                                                                "typeString": "bool"
                                                                            }
                                                                        },
                                                                        "src": "7332:77:97",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bool",
                                                                            "typeString": "bool"
                                                                        }
                                                                    },
                                                                    "id": 27300,
                                                                    "nodeType": "IfStatement",
                                                                    "src": "7328:267:97",
                                                                    "trueBody": {
                                                                        "id": 27299,
                                                                        "nodeType": "Block",
                                                                        "src": "7411:184:97",
                                                                        "statements": [
                                                                            {
                                                                                "AST": {
                                                                                    "nodeType": "YulBlock",
                                                                                    "src": "7497:80:97",
                                                                                    "statements": [
                                                                                        {
                                                                                            "expression": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "arguments": [
                                                                                                            {
                                                                                                                "kind": "number",
                                                                                                                "nodeType": "YulLiteral",
                                                                                                                "src": "7534:2:97",
                                                                                                                "type": "",
                                                                                                                "value": "32"
                                                                                                            },
                                                                                                            {
                                                                                                                "name": "err",
                                                                                                                "nodeType": "YulIdentifier",
                                                                                                                "src": "7538:3:97"
                                                                                                            }
                                                                                                        ],
                                                                                                        "functionName": {
                                                                                                            "name": "add",
                                                                                                            "nodeType": "YulIdentifier",
                                                                                                            "src": "7530:3:97"
                                                                                                        },
                                                                                                        "nodeType": "YulFunctionCall",
                                                                                                        "src": "7530:12:97"
                                                                                                    },
                                                                                                    {
                                                                                                        "arguments": [
                                                                                                            {
                                                                                                                "name": "err",
                                                                                                                "nodeType": "YulIdentifier",
                                                                                                                "src": "7550:3:97"
                                                                                                            }
                                                                                                        ],
                                                                                                        "functionName": {
                                                                                                            "name": "mload",
                                                                                                            "nodeType": "YulIdentifier",
                                                                                                            "src": "7544:5:97"
                                                                                                        },
                                                                                                        "nodeType": "YulFunctionCall",
                                                                                                        "src": "7544:10:97"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "revert",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "7523:6:97"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "7523:32:97"
                                                                                            },
                                                                                            "nodeType": "YulExpressionStatement",
                                                                                            "src": "7523:32:97"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "documentation": "@solidity memory-safe-assembly",
                                                                                "evmVersion": "paris",
                                                                                "externalReferences": [
                                                                                    {
                                                                                        "declaration": 27227,
                                                                                        "isOffset": false,
                                                                                        "isSlot": false,
                                                                                        "src": "7538:3:97",
                                                                                        "valueSize": 1
                                                                                    },
                                                                                    {
                                                                                        "declaration": 27227,
                                                                                        "isOffset": false,
                                                                                        "isSlot": false,
                                                                                        "src": "7550:3:97",
                                                                                        "valueSize": 1
                                                                                    }
                                                                                ],
                                                                                "id": 27298,
                                                                                "nodeType": "InlineAssembly",
                                                                                "src": "7488:89:97"
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "errorName": "",
                                                        "id": 27302,
                                                        "nodeType": "TryCatchClause",
                                                        "parameters": {
                                                            "id": 27228,
                                                            "nodeType": "ParameterList",
                                                            "parameters": [
                                                                {
                                                                    "constant": false,
                                                                    "id": 27227,
                                                                    "mutability": "mutable",
                                                                    "name": "err",
                                                                    "nameLocation": "6746:3:97",
                                                                    "nodeType": "VariableDeclaration",
                                                                    "scope": 27302,
                                                                    "src": "6733:16:97",
                                                                    "stateVariable": false,
                                                                    "storageLocation": "memory",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                                        "typeString": "bytes"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 27226,
                                                                        "name": "bytes",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "6733:5:97",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_storage_ptr",
                                                                            "typeString": "bytes"
                                                                        }
                                                                    },
                                                                    "visibility": "internal"
                                                                }
                                                            ],
                                                            "src": "6732:18:97"
                                                        },
                                                        "src": "6726:883:97"
                                                    }
                                                ],
                                                "externalCall": {
                                                    "arguments": [
                                                        {
                                                            "id": 27213,
                                                            "name": "chainAlias",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 27194,
                                                            "src": "6616:10:97",
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
                                                            "id": 27211,
                                                            "name": "vm",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 26841,
                                                            "src": "6606:2:97",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_VmSafe_$36025",
                                                                "typeString": "contract VmSafe"
                                                            }
                                                        },
                                                        "id": 27212,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "6609:6:97",
                                                        "memberName": "rpcUrl",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 35986,
                                                        "src": "6606:9:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                            "typeString": "function (string memory) view external returns (string memory)"
                                                        }
                                                    },
                                                    "id": 27214,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6606:21:97",
                                                    "tryCall": true,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                },
                                                "id": 27303,
                                                "nodeType": "TryStatement",
                                                "src": "6602:1007:97"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 27306,
                                        "name": "chain",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 27197,
                                        "src": "7635:5:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                            "typeString": "struct StdChains.Chain memory"
                                        }
                                    },
                                    "functionReturnParameters": 27202,
                                    "id": 27307,
                                    "nodeType": "Return",
                                    "src": "7628:12:97"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getChainWithUpdatedRpcUrl",
                        "nameLocation": "6438:25:97",
                        "parameters": {
                            "id": 27198,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 27194,
                                    "mutability": "mutable",
                                    "name": "chainAlias",
                                    "nameLocation": "6478:10:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 27309,
                                    "src": "6464:24:97",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 27193,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6464:6:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 27197,
                                    "mutability": "mutable",
                                    "name": "chain",
                                    "nameLocation": "6503:5:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 27309,
                                    "src": "6490:18:97",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                        "typeString": "struct StdChains.Chain"
                                    },
                                    "typeName": {
                                        "id": 27196,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 27195,
                                            "name": "Chain",
                                            "nameLocations": [
                                                "6490:5:97"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 26859,
                                            "src": "6490:5:97"
                                        },
                                        "referencedDeclaration": 26859,
                                        "src": "6490:5:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$26859_storage_ptr",
                                            "typeString": "struct StdChains.Chain"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6463:46:97"
                        },
                        "returnParameters": {
                            "id": 27202,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 27201,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 27309,
                                    "src": "6527:12:97",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Chain_$26859_memory_ptr",
                                        "typeString": "struct StdChains.Chain"
                                    },
                                    "typeName": {
                                        "id": 27200,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 27199,
                                            "name": "Chain",
                                            "nameLocations": [
                                                "6527:5:97"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 26859,
                                            "src": "6527:5:97"
                                        },
                                        "referencedDeclaration": 26859,
                                        "src": "6527:5:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$26859_storage_ptr",
                                            "typeString": "struct StdChains.Chain"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6526:14:97"
                        },
                        "scope": 27539,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 27319,
                        "nodeType": "FunctionDefinition",
                        "src": "7653:117:97",
                        "nodes": [],
                        "body": {
                            "id": 27318,
                            "nodeType": "Block",
                            "src": "7716:54:97",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 27316,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 27314,
                                            "name": "fallbackToDefaultRpcUrls",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26875,
                                            "src": "7726:24:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 27315,
                                            "name": "useDefault",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27311,
                                            "src": "7753:10:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "7726:37:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 27317,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7726:37:97"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setFallbackToDefaultRpcUrls",
                        "nameLocation": "7662:27:97",
                        "parameters": {
                            "id": 27312,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 27311,
                                    "mutability": "mutable",
                                    "name": "useDefault",
                                    "nameLocation": "7695:10:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 27319,
                                    "src": "7690:15:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 27310,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7690:4:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7689:17:97"
                        },
                        "returnParameters": {
                            "id": 27313,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7716:0:97"
                        },
                        "scope": 27539,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 27501,
                        "nodeType": "FunctionDefinition",
                        "src": "7776:2751:97",
                        "nodes": [],
                        "body": {
                            "id": 27500,
                            "nodeType": "Block",
                            "src": "7815:2712:97",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 27322,
                                        "name": "stdChainsInitialized",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 26843,
                                        "src": "7829:20:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 27324,
                                    "nodeType": "IfStatement",
                                    "src": "7825:33:97",
                                    "trueBody": {
                                        "functionReturnParameters": 27321,
                                        "id": 27323,
                                        "nodeType": "Return",
                                        "src": "7851:7:97"
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 27327,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 27325,
                                            "name": "stdChainsInitialized",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 26843,
                                            "src": "7868:20:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "74727565",
                                            "id": 27326,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "7891:4:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "7868:27:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 27328,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7868:27:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "616e76696c",
                                                "id": 27330,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8018:7:97",
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
                                                        "id": 27332,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8037:7:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_1ab1bd2f543bf53e1036abfe292a89809c7285bff756db6e274686afe6fb41b4",
                                                            "typeString": "literal_string \"Anvil\""
                                                        },
                                                        "value": "Anvil"
                                                    },
                                                    {
                                                        "hexValue": "3331333337",
                                                        "id": 27333,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8046:5:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_31337_by_1",
                                                            "typeString": "int_const 31337"
                                                        },
                                                        "value": "31337"
                                                    },
                                                    {
                                                        "hexValue": "687474703a2f2f3132372e302e302e313a38353435",
                                                        "id": 27334,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8053:23:97",
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
                                                    "id": 27331,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26850,
                                                    "src": "8027:9:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$26850_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 27335,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8027:50:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27329,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27538,
                                            "src": "7992:25:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27336,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7992:86:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27337,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7992:86:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6d61696e6e6574",
                                                "id": 27339,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8127:9:97",
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
                                                        "id": 27341,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8148:9:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_8d646f556e5d9d6f1edcf7a39b77f5ac253776eb34efcfd688aacbee518efc26",
                                                            "typeString": "literal_string \"Mainnet\""
                                                        },
                                                        "value": "Mainnet"
                                                    },
                                                    {
                                                        "hexValue": "31",
                                                        "id": 27342,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8159:1:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_1_by_1",
                                                            "typeString": "int_const 1"
                                                        },
                                                        "value": "1"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f6d61696e6e65742e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                                                        "id": 27343,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8162:63:97",
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
                                                    "id": 27340,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26850,
                                                    "src": "8138:9:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$26850_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 27344,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8138:88:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27338,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27538,
                                            "src": "8088:25:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27345,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8088:148:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27346,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8088:148:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "676f65726c69",
                                                "id": 27348,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8285:8:97",
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
                                                        "id": 27350,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8305:8:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_736fc55653a3415af498a1309898240f13c5e9e33098fa3cf9e5f2a200d14c3e",
                                                            "typeString": "literal_string \"Goerli\""
                                                        },
                                                        "value": "Goerli"
                                                    },
                                                    {
                                                        "hexValue": "35",
                                                        "id": 27351,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8315:1:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_5_by_1",
                                                            "typeString": "int_const 5"
                                                        },
                                                        "value": "5"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f676f65726c692e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                                                        "id": 27352,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8318:62:97",
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
                                                    "id": 27349,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26850,
                                                    "src": "8295:9:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$26850_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 27353,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8295:86:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27347,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27538,
                                            "src": "8246:25:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27354,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8246:145:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27355,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8246:145:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "7365706f6c6961",
                                                "id": 27357,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8440:9:97",
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
                                                        "id": 27359,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8461:9:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_a6b54cd124a84bb64f1808905ed95fb171a09730726f85e60eefcd47a4831b27",
                                                            "typeString": "literal_string \"Sepolia\""
                                                        },
                                                        "value": "Sepolia"
                                                    },
                                                    {
                                                        "hexValue": "3131313535313131",
                                                        "id": 27360,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8472:8:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_11155111_by_1",
                                                            "typeString": "int_const 11155111"
                                                        },
                                                        "value": "11155111"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7365706f6c69612e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                                                        "id": 27361,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8482:63:97",
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
                                                    "id": 27358,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26850,
                                                    "src": "8451:9:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$26850_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 27362,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8451:95:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27356,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27538,
                                            "src": "8401:25:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27363,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8401:155:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27364,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8401:155:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6f7074696d69736d",
                                                "id": 27366,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8592:10:97",
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
                                                        "id": 27368,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8614:10:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_f997187c3c319ef9e33fa05f852d1612b66e309dc48d97a4b6b39832090a3bec",
                                                            "typeString": "literal_string \"Optimism\""
                                                        },
                                                        "value": "Optimism"
                                                    },
                                                    {
                                                        "hexValue": "3130",
                                                        "id": 27369,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8626:2:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_10_by_1",
                                                            "typeString": "int_const 10"
                                                        },
                                                        "value": "10"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f6d61696e6e65742e6f7074696d69736d2e696f",
                                                        "id": 27370,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8630:29:97",
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
                                                    "id": 27367,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26850,
                                                    "src": "8604:9:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$26850_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 27371,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8604:56:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27365,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27538,
                                            "src": "8566:25:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27372,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8566:95:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27373,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8566:95:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6f7074696d69736d5f676f65726c69",
                                                "id": 27375,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8697:17:97",
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
                                                        "id": 27377,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8726:17:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_6271e061a2d4ce1b6e267081a40c4dca996efe738d092d650bcfa23669d2fd24",
                                                            "typeString": "literal_string \"Optimism Goerli\""
                                                        },
                                                        "value": "Optimism Goerli"
                                                    },
                                                    {
                                                        "hexValue": "343230",
                                                        "id": 27378,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8745:3:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_420_by_1",
                                                            "typeString": "int_const 420"
                                                        },
                                                        "value": "420"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f676f65726c692e6f7074696d69736d2e696f",
                                                        "id": 27379,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8750:28:97",
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
                                                    "id": 27376,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26850,
                                                    "src": "8716:9:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$26850_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 27380,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8716:63:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27374,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27538,
                                            "src": "8671:25:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27381,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8671:109:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27382,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8671:109:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "617262697472756d5f6f6e65",
                                                "id": 27384,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8816:14:97",
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
                                                        "id": 27386,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8842:14:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_9e42b1aebd5463751aea2c5f6ee37505334a82b4085315a5f4b8b0f81d3b9004",
                                                            "typeString": "literal_string \"Arbitrum One\""
                                                        },
                                                        "value": "Arbitrum One"
                                                    },
                                                    {
                                                        "hexValue": "3432313631",
                                                        "id": 27387,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8858:5:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_42161_by_1",
                                                            "typeString": "int_const 42161"
                                                        },
                                                        "value": "42161"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f617262312e617262697472756d2e696f2f727063",
                                                        "id": 27388,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8865:30:97",
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
                                                    "id": 27385,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26850,
                                                    "src": "8832:9:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$26850_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 27389,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8832:64:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27383,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27538,
                                            "src": "8790:25:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27390,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8790:107:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27391,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8790:107:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "617262697472756d5f6f6e655f676f65726c69",
                                                "id": 27393,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8946:21:97",
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
                                                        "id": 27395,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8979:21:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_57f7b6894161eb541e81676f15adf1e65eee36bdcfd592f252d22d4394480f21",
                                                            "typeString": "literal_string \"Arbitrum One Goerli\""
                                                        },
                                                        "value": "Arbitrum One Goerli"
                                                    },
                                                    {
                                                        "hexValue": "343231363133",
                                                        "id": 27396,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9002:6:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_421613_by_1",
                                                            "typeString": "int_const 421613"
                                                        },
                                                        "value": "421613"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f676f65726c692d726f6c6c75702e617262697472756d2e696f2f727063",
                                                        "id": 27397,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9010:39:97",
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
                                                    "id": 27394,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26850,
                                                    "src": "8969:9:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$26850_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 27398,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8969:81:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27392,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27538,
                                            "src": "8907:25:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27399,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8907:153:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27400,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8907:153:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "617262697472756d5f6e6f7661",
                                                "id": 27402,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9096:15:97",
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
                                                        "id": 27404,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9123:15:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_25c77b7679bf463420c39c7728b9f65b6a8f1ae05b3335eb9e394b1b61bf8f21",
                                                            "typeString": "literal_string \"Arbitrum Nova\""
                                                        },
                                                        "value": "Arbitrum Nova"
                                                    },
                                                    {
                                                        "hexValue": "3432313730",
                                                        "id": 27405,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9140:5:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_42170_by_1",
                                                            "typeString": "int_const 42170"
                                                        },
                                                        "value": "42170"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f6e6f76612e617262697472756d2e696f2f727063",
                                                        "id": 27406,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9147:30:97",
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
                                                    "id": 27403,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26850,
                                                    "src": "9113:9:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$26850_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 27407,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9113:65:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27401,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27538,
                                            "src": "9070:25:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27408,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9070:109:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27409,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9070:109:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "706f6c79676f6e",
                                                "id": 27411,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9215:9:97",
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
                                                        "id": 27413,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9236:9:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_890af8db8ca1aa1e915857edbc2717639ebd8a22c786f9e0e776d6a1aacb5e71",
                                                            "typeString": "literal_string \"Polygon\""
                                                        },
                                                        "value": "Polygon"
                                                    },
                                                    {
                                                        "hexValue": "313337",
                                                        "id": 27414,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9247:3:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_137_by_1",
                                                            "typeString": "int_const 137"
                                                        },
                                                        "value": "137"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f706f6c79676f6e2d7270632e636f6d",
                                                        "id": 27415,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9252:25:97",
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
                                                    "id": 27412,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26850,
                                                    "src": "9226:9:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$26850_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 27416,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9226:52:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27410,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27538,
                                            "src": "9189:25:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27417,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9189:90:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27418,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9189:90:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "706f6c79676f6e5f6d756d626169",
                                                "id": 27420,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9328:16:97",
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
                                                        "id": 27422,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9356:16:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_173b0df64039e25119e26da4408dbd53da69bf06543516209ecc66f21e0c9725",
                                                            "typeString": "literal_string \"Polygon Mumbai\""
                                                        },
                                                        "value": "Polygon Mumbai"
                                                    },
                                                    {
                                                        "hexValue": "3830303031",
                                                        "id": 27423,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9374:5:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_80001_by_1",
                                                            "typeString": "int_const 80001"
                                                        },
                                                        "value": "80001"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7270632d6d756d6261692e6d61746963766967696c2e636f6d",
                                                        "id": 27424,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9381:35:97",
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
                                                    "id": 27421,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26850,
                                                    "src": "9346:9:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$26850_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 27425,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9346:71:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27419,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27538,
                                            "src": "9289:25:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27426,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9289:138:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27427,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9289:138:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6176616c616e636865",
                                                "id": 27429,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9463:11:97",
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
                                                        "id": 27431,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9486:11:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_6585177c3aba6cb7ffc0a37e831a958c4ee9278e4c62c7bdad7175ca09883c40",
                                                            "typeString": "literal_string \"Avalanche\""
                                                        },
                                                        "value": "Avalanche"
                                                    },
                                                    {
                                                        "hexValue": "3433313134",
                                                        "id": 27432,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9499:5:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_43114_by_1",
                                                            "typeString": "int_const 43114"
                                                        },
                                                        "value": "43114"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f6170692e617661782e6e6574776f726b2f6578742f62632f432f727063",
                                                        "id": 27433,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9506:39:97",
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
                                                    "id": 27430,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26850,
                                                    "src": "9476:9:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$26850_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 27434,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9476:70:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27428,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27538,
                                            "src": "9437:25:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27435,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9437:110:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27436,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9437:110:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6176616c616e6368655f66756a69",
                                                "id": 27438,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9596:16:97",
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
                                                        "id": 27440,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9624:16:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_522b176494c651b1a4c5779e66ed19f885df62891abfb18fd5e45b69bdabe11b",
                                                            "typeString": "literal_string \"Avalanche Fuji\""
                                                        },
                                                        "value": "Avalanche Fuji"
                                                    },
                                                    {
                                                        "hexValue": "3433313133",
                                                        "id": 27441,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9642:5:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_43113_by_1",
                                                            "typeString": "int_const 43113"
                                                        },
                                                        "value": "43113"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f6170692e617661782d746573742e6e6574776f726b2f6578742f62632f432f727063",
                                                        "id": 27442,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9649:44:97",
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
                                                    "id": 27439,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26850,
                                                    "src": "9614:9:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$26850_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 27443,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9614:80:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27437,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27538,
                                            "src": "9557:25:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27444,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9557:147:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27445,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9557:147:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "626e625f736d6172745f636861696e",
                                                "id": 27447,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9753:17:97",
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
                                                        "id": 27449,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9782:17:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_3606544ee65d30d7c7f7d6a1f6618e0d836299fa5b85b88d71a59535c6a1550f",
                                                            "typeString": "literal_string \"BNB Smart Chain\""
                                                        },
                                                        "value": "BNB Smart Chain"
                                                    },
                                                    {
                                                        "hexValue": "3536",
                                                        "id": 27450,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9801:2:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_56_by_1",
                                                            "typeString": "int_const 56"
                                                        },
                                                        "value": "56"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f6273632d6461746173656564312e62696e616e63652e6f7267",
                                                        "id": 27451,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9805:35:97",
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
                                                    "id": 27448,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26850,
                                                    "src": "9772:9:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$26850_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 27452,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9772:69:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27446,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27538,
                                            "src": "9714:25:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27453,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9714:137:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27454,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9714:137:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "626e625f736d6172745f636861696e5f746573746e6574",
                                                "id": 27456,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9900:25:97",
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
                                                        "id": 27458,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9949:25:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_3b1d88342c4ab079c9a8243ef8dfeb0bb41e1da5dc9fe62ca728dfe4ea21092c",
                                                            "typeString": "literal_string \"BNB Smart Chain Testnet\""
                                                        },
                                                        "value": "BNB Smart Chain Testnet"
                                                    },
                                                    {
                                                        "hexValue": "3937",
                                                        "id": 27459,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9976:2:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_97_by_1",
                                                            "typeString": "int_const 97"
                                                        },
                                                        "value": "97"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7270632e616e6b722e636f6d2f6273635f746573746e65745f63686170656c",
                                                        "id": 27460,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9980:41:97",
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
                                                    "id": 27457,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26850,
                                                    "src": "9939:9:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$26850_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 27461,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9939:83:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27455,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27538,
                                            "src": "9861:25:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27462,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9861:171:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27463,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9861:171:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "676e6f7369735f636861696e",
                                                "id": 27465,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "10068:14:97",
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
                                                        "id": 27467,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10094:14:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_9bfc6ae4a1f5d8ea33b4f631c2f7dfbfa7d613af42ef38137c06d4cd03619b02",
                                                            "typeString": "literal_string \"Gnosis Chain\""
                                                        },
                                                        "value": "Gnosis Chain"
                                                    },
                                                    {
                                                        "hexValue": "313030",
                                                        "id": 27468,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10110:3:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_100_by_1",
                                                            "typeString": "int_const 100"
                                                        },
                                                        "value": "100"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7270632e676e6f736973636861696e2e636f6d",
                                                        "id": 27469,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10115:29:97",
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
                                                    "id": 27466,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26850,
                                                    "src": "10084:9:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$26850_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 27470,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10084:61:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27464,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27538,
                                            "src": "10042:25:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27471,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10042:104:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27472,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10042:104:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6d6f6f6e6265616d",
                                                "id": 27474,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "10182:10:97",
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
                                                        "id": 27476,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10204:10:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_99a49606e97aa9d58789783bd4cdfcc3ab4072167b449d1e303cb1135216531b",
                                                            "typeString": "literal_string \"Moonbeam\""
                                                        },
                                                        "value": "Moonbeam"
                                                    },
                                                    {
                                                        "hexValue": "31323834",
                                                        "id": 27477,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10216:4:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_1284_by_1",
                                                            "typeString": "int_const 1284"
                                                        },
                                                        "value": "1284"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7270632e6170692e6d6f6f6e6265616d2e6e6574776f726b",
                                                        "id": 27478,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10222:34:97",
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
                                                    "id": 27475,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26850,
                                                    "src": "10194:9:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$26850_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 27479,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10194:63:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27473,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27538,
                                            "src": "10156:25:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27480,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10156:102:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27481,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10156:102:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6d6f6f6e7269766572",
                                                "id": 27483,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "10307:11:97",
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
                                                        "id": 27485,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10330:11:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_65d5ad77d0dd38eb7219d1087db2cb9c2440e3f70be3ee1567aa2329d21dad8a",
                                                            "typeString": "literal_string \"Moonriver\""
                                                        },
                                                        "value": "Moonriver"
                                                    },
                                                    {
                                                        "hexValue": "31323835",
                                                        "id": 27486,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10343:4:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_1285_by_1",
                                                            "typeString": "int_const 1285"
                                                        },
                                                        "value": "1285"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7270632e6170692e6d6f6f6e72697665722e6d6f6f6e6265616d2e6e6574776f726b",
                                                        "id": 27487,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10349:44:97",
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
                                                    "id": 27484,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26850,
                                                    "src": "10320:9:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$26850_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 27488,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10320:74:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27482,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27538,
                                            "src": "10268:25:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27489,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10268:136:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27490,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10268:136:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6d6f6f6e62617365",
                                                "id": 27492,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "10440:10:97",
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
                                                        "id": 27494,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10462:10:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_6f3c53069778183912da77a05fe67c3d6edb208ffdf1ca0161d51543035e3c68",
                                                            "typeString": "literal_string \"Moonbase\""
                                                        },
                                                        "value": "Moonbase"
                                                    },
                                                    {
                                                        "hexValue": "31323837",
                                                        "id": 27495,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10474:4:97",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_1287_by_1",
                                                            "typeString": "int_const 1287"
                                                        },
                                                        "value": "1287"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7270632e746573746e65742e6d6f6f6e6265616d2e6e6574776f726b",
                                                        "id": 27496,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10480:38:97",
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
                                                    "id": 27493,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 26850,
                                                    "src": "10452:9:97",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$26850_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 27497,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10452:67:97",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27491,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27538,
                                            "src": "10414:25:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27498,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10414:106:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27499,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10414:106:97"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "initializeStdChains",
                        "nameLocation": "7785:19:97",
                        "parameters": {
                            "id": 27320,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7804:2:97"
                        },
                        "returnParameters": {
                            "id": 27321,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7815:0:97"
                        },
                        "scope": 27539,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 27538,
                        "nodeType": "FunctionDefinition",
                        "src": "10609:305:97",
                        "nodes": [],
                        "body": {
                            "id": 27537,
                            "nodeType": "Block",
                            "src": "10702:212:97",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        27510
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 27510,
                                            "mutability": "mutable",
                                            "name": "rpcUrl",
                                            "nameLocation": "10726:6:97",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 27537,
                                            "src": "10712:20:97",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string"
                                            },
                                            "typeName": {
                                                "id": 27509,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "10712:6:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_storage_ptr",
                                                    "typeString": "string"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 27513,
                                    "initialValue": {
                                        "expression": {
                                            "id": 27511,
                                            "name": "chain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27506,
                                            "src": "10735:5:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                "typeString": "struct StdChains.ChainData memory"
                                            }
                                        },
                                        "id": 27512,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "10741:6:97",
                                        "memberName": "rpcUrl",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 26849,
                                        "src": "10735:12:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "10712:35:97"
                                },
                                {
                                    "expression": {
                                        "id": 27518,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 27514,
                                                "name": "defaultRpcUrls",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 26868,
                                                "src": "10757:14:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                                                    "typeString": "mapping(string memory => string storage ref)"
                                                }
                                            },
                                            "id": 27516,
                                            "indexExpression": {
                                                "id": 27515,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 27503,
                                                "src": "10772:10:97",
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
                                            "src": "10757:26:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 27517,
                                            "name": "rpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27510,
                                            "src": "10786:6:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "10757:35:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 27519,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10757:35:97"
                                },
                                {
                                    "expression": {
                                        "id": 27524,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 27520,
                                                "name": "chain",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 27506,
                                                "src": "10802:5:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            },
                                            "id": 27522,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "10808:6:97",
                                            "memberName": "rpcUrl",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 26849,
                                            "src": "10802:12:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "",
                                            "id": 27523,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "string",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "10817:2:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                "typeString": "literal_string \"\""
                                            },
                                            "value": ""
                                        },
                                        "src": "10802:17:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "id": 27525,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10802:17:97"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 27527,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 27503,
                                                "src": "10838:10:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 27528,
                                                "name": "chain",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 27506,
                                                "src": "10850:5:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
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
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 27526,
                                            "name": "setChain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                27094,
                                                27115
                                            ],
                                            "referencedDeclaration": 27094,
                                            "src": "10829:8:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 27529,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10829:27:97",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 27530,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10829:27:97"
                                },
                                {
                                    "expression": {
                                        "id": 27535,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 27531,
                                                "name": "chain",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 27506,
                                                "src": "10866:5:97",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            },
                                            "id": 27533,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "10872:6:97",
                                            "memberName": "rpcUrl",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 26849,
                                            "src": "10866:12:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 27534,
                                            "name": "rpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 27510,
                                            "src": "10881:6:97",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "10866:21:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "id": 27536,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10866:21:97"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setChainWithDefaultRpcUrl",
                        "nameLocation": "10618:25:97",
                        "parameters": {
                            "id": 27507,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 27503,
                                    "mutability": "mutable",
                                    "name": "chainAlias",
                                    "nameLocation": "10658:10:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 27538,
                                    "src": "10644:24:97",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 27502,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10644:6:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 27506,
                                    "mutability": "mutable",
                                    "name": "chain",
                                    "nameLocation": "10687:5:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 27538,
                                    "src": "10670:22:97",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_ChainData_$26850_memory_ptr",
                                        "typeString": "struct StdChains.ChainData"
                                    },
                                    "typeName": {
                                        "id": 27505,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 27504,
                                            "name": "ChainData",
                                            "nameLocations": [
                                                "10670:9:97"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 26850,
                                            "src": "10670:9:97"
                                        },
                                        "referencedDeclaration": 26850,
                                        "src": "10670:9:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_ChainData_$26850_storage_ptr",
                                            "typeString": "struct StdChains.ChainData"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10643:50:97"
                        },
                        "returnParameters": {
                            "id": 27508,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10702:0:97"
                        },
                        "scope": 27539,
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
                    "id": 26824,
                    "nodeType": "StructuredDocumentation",
                    "src": "99:1799:97",
                    "text": " StdChains provides information about EVM compatible chains that can be used in scripts/tests.\n For each chain, the chain's name, chain ID, and a default RPC URL are provided. Chains are\n identified by their alias, which is the same as the alias in the `[rpc_endpoints]` section of\n the `foundry.toml` file. For best UX, ensure the alias in the `foundry.toml` file match the\n alias used in this contract, which can be found as the first argument to the\n `setChainWithDefaultRpcUrl` call in the `initializeStdChains` function.\n There are two main ways to use this contract:\n   1. Set a chain with `setChain(string memory chainAlias, ChainData memory chain)` or\n      `setChain(string memory chainAlias, Chain memory chain)`\n   2. Get a chain with `getChain(string memory chainAlias)` or `getChain(uint256 chainId)`.\n The first time either of those are used, chains are initialized with the default set of RPC URLs.\n This is done in `initializeStdChains`, which uses `setChainWithDefaultRpcUrl`. Defaults are recorded in\n `defaultRpcUrls`.\n The `setChain` function is straightforward, and it simply saves off the given chain data.\n The `getChain` methods use `getChainWithUpdatedRpcUrl` to return a chain. For example, let's say\n we want to retrieve the RPC URL for `mainnet`:\n   - If you have specified data with `setChain`, it will return that.\n   - If you have configured a mainnet RPC URL in `foundry.toml`, it will return the URL, provided it\n     is valid (e.g. a URL is specified, or an environment variable is given and exists).\n   - If neither of the above conditions is met, the default data is returned.\n Summarizing the above, the prioritization hierarchy is `setChain` -> `foundry.toml` -> environment variable -> defaults."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    27539
                ],
                "name": "StdChains",
                "nameLocation": "1917:9:97",
                "scope": 27540,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 97
};
