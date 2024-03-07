export declare const StdChains: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x";
        readonly sourceMap: "";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x";
        readonly sourceMap: "";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"StdChains provides information about EVM compatible chains that can be used in scripts/tests. For each chain, the chain's name, chain ID, and a default RPC URL are provided. Chains are identified by their alias, which is the same as the alias in the `[rpc_endpoints]` section of the `foundry.toml` file. For best UX, ensure the alias in the `foundry.toml` file match the alias used in this contract, which can be found as the first argument to the `setChainWithDefaultRpcUrl` call in the `initializeStdChains` function. There are two main ways to use this contract:   1. Set a chain with `setChain(string memory chainAlias, ChainData memory chain)` or      `setChain(string memory chainAlias, Chain memory chain)`   2. Get a chain with `getChain(string memory chainAlias)` or `getChain(uint256 chainId)`. The first time either of those are used, chains are initialized with the default set of RPC URLs. This is done in `initializeStdChains`, which uses `setChainWithDefaultRpcUrl`. Defaults are recorded in `defaultRpcUrls`. The `setChain` function is straightforward, and it simply saves off the given chain data. The `getChain` methods use `getChainWithUpdatedRpcUrl` to return a chain. For example, let's say we want to retrieve the RPC URL for `mainnet`:   - If you have specified data with `setChain`, it will return that.   - If you have configured a mainnet RPC URL in `foundry.toml`, it will return the URL, provided it     is valid (e.g. a URL is specified, or an environment variable is given and exists).   - If neither of the above conditions is met, the default data is returned. Summarizing the above, the prioritization hierarchy is `setChain` -> `foundry.toml` -> environment variable -> defaults.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdChains.sol\":\"StdChains\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdChains.sol\":{\"keccak256\":\"0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4\",\"dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {};
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {};
                readonly version: 1;
            };
        };
        readonly settings: {
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "lib/forge-std/src/StdChains.sol": "StdChains";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/forge-std/src/StdChains.sol": {
                readonly keccak256: "0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d";
                readonly urls: readonly ["bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4", "dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/Vm.sol": {
                readonly keccak256: "0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4";
                readonly urls: readonly ["bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241", "dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/forge-std/src/StdChains.sol";
        readonly id: 27240;
        readonly exportedSymbols: {
            readonly StdChains: readonly [27239];
            readonly VmSafe: readonly [35725];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:10885:98";
        readonly nodes: readonly [{
            readonly id: 26521;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:98";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".2", "<", "0.9", ".0"];
        }, {
            readonly id: 26523;
            readonly nodeType: "ImportDirective";
            readonly src: "65:32:98";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/Vm.sol";
            readonly file: "./Vm.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 27240;
            readonly sourceUnit: 36198;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26522;
                    readonly name: "VmSafe";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 35725;
                    readonly src: "73:6:98";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 27239;
            readonly nodeType: "ContractDefinition";
            readonly src: "1899:9017:98";
            readonly nodes: readonly [{
                readonly id: 26541;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1933:92:98";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "vm";
                readonly nameLocation: "1957:2:98";
                readonly scope: 27239;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_VmSafe_$35725";
                    readonly typeString: "contract VmSafe";
                };
                readonly typeName: {
                    readonly id: 26526;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 26525;
                        readonly name: "VmSafe";
                        readonly nameLocations: readonly ["1933:6:98"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 35725;
                        readonly src: "1933:6:98";
                    };
                    readonly referencedDeclaration: 35725;
                    readonly src: "1933:6:98";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$35725";
                        readonly typeString: "contract VmSafe";
                    };
                };
                readonly value: {
                    readonly arguments: readonly [{
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly hexValue: "6865766d20636865617420636f6465";
                                        readonly id: 26535;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "2003:17:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d";
                                            readonly typeString: "literal_string \"hevm cheat code\"";
                                        };
                                        readonly value: "hevm cheat code";
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_stringliteral_885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d";
                                            readonly typeString: "literal_string \"hevm cheat code\"";
                                        }];
                                        readonly id: 26534;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "1993:9:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 26536;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1993:28:98";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    }];
                                    readonly id: 26533;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "1985:7:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                        readonly typeString: "type(uint256)";
                                    };
                                    readonly typeName: {
                                        readonly id: 26532;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "1985:7:98";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 26537;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1985:37:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 26531;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "1977:7:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_uint160_$";
                                    readonly typeString: "type(uint160)";
                                };
                                readonly typeName: {
                                    readonly id: 26530;
                                    readonly name: "uint160";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "1977:7:98";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 26538;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1977:46:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint160";
                                readonly typeString: "uint160";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_uint160";
                                readonly typeString: "uint160";
                            }];
                            readonly id: 26529;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "1969:7:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 26528;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1969:7:98";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 26539;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "1969:55:98";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }];
                    readonly expression: {
                        readonly argumentTypes: readonly [{
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        }];
                        readonly id: 26527;
                        readonly name: "VmSafe";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 35725;
                        readonly src: "1962:6:98";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_type$_t_contract$_VmSafe_$35725_$";
                            readonly typeString: "type(contract VmSafe)";
                        };
                    };
                    readonly id: 26540;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "typeConversion";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "1962:63:98";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$35725";
                        readonly typeString: "contract VmSafe";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 26543;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2032:33:98";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "stdChainsInitialized";
                readonly nameLocation: "2045:20:98";
                readonly scope: 27239;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bool";
                    readonly typeString: "bool";
                };
                readonly typeName: {
                    readonly id: 26542;
                    readonly name: "bool";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "2032:4:98";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 26550;
                readonly nodeType: "StructDefinition";
                readonly src: "2072:93:98";
                readonly nodes: readonly [];
                readonly canonicalName: "StdChains.ChainData";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 26545;
                    readonly mutability: "mutable";
                    readonly name: "name";
                    readonly nameLocation: "2106:4:98";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 26550;
                    readonly src: "2099:11:98";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                    readonly typeName: {
                        readonly id: 26544;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2099:6:98";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 26547;
                    readonly mutability: "mutable";
                    readonly name: "chainId";
                    readonly nameLocation: "2128:7:98";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 26550;
                    readonly src: "2120:15:98";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 26546;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2120:7:98";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 26549;
                    readonly mutability: "mutable";
                    readonly name: "rpcUrl";
                    readonly nameLocation: "2152:6:98";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 26550;
                    readonly src: "2145:13:98";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                    readonly typeName: {
                        readonly id: 26548;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2145:6:98";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "ChainData";
                readonly nameLocation: "2079:9:98";
                readonly scope: 27239;
                readonly visibility: "public";
            }, {
                readonly id: 26559;
                readonly nodeType: "StructDefinition";
                readonly src: "2171:598:98";
                readonly nodes: readonly [];
                readonly canonicalName: "StdChains.Chain";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 26552;
                    readonly mutability: "mutable";
                    readonly name: "name";
                    readonly nameLocation: "2228:4:98";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 26559;
                    readonly src: "2221:11:98";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                    readonly typeName: {
                        readonly id: 26551;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2221:6:98";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 26554;
                    readonly mutability: "mutable";
                    readonly name: "chainId";
                    readonly nameLocation: "2283:7:98";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 26559;
                    readonly src: "2275:15:98";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 26553;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2275:7:98";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 26556;
                    readonly mutability: "mutable";
                    readonly name: "chainAlias";
                    readonly nameLocation: "2383:10:98";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 26559;
                    readonly src: "2376:17:98";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                    readonly typeName: {
                        readonly id: 26555;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2376:6:98";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 26558;
                    readonly mutability: "mutable";
                    readonly name: "rpcUrl";
                    readonly nameLocation: "2756:6:98";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 26559;
                    readonly src: "2749:13:98";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                    readonly typeName: {
                        readonly id: 26557;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2749:6:98";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Chain";
                readonly nameLocation: "2178:5:98";
                readonly scope: 27239;
                readonly visibility: "public";
            }, {
                readonly id: 26564;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2873:39:98";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "chains";
                readonly nameLocation: "2906:6:98";
                readonly scope: 27239;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26559_storage_$";
                    readonly typeString: "mapping(string => struct StdChains.Chain)";
                };
                readonly typeName: {
                    readonly id: 26563;
                    readonly keyName: "";
                    readonly keyNameLocation: "-1:-1:-1";
                    readonly keyType: {
                        readonly id: 26560;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2881:6:98";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "2873:24:98";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26559_storage_$";
                        readonly typeString: "mapping(string => struct StdChains.Chain)";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 26562;
                        readonly nodeType: "UserDefinedTypeName";
                        readonly pathNode: {
                            readonly id: 26561;
                            readonly name: "Chain";
                            readonly nameLocations: readonly ["2891:5:98"];
                            readonly nodeType: "IdentifierPath";
                            readonly referencedDeclaration: 26559;
                            readonly src: "2891:5:98";
                        };
                        readonly referencedDeclaration: 26559;
                        readonly src: "2891:5:98";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Chain_$26559_storage_ptr";
                            readonly typeString: "struct StdChains.Chain";
                        };
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 26568;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2978:48:98";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "defaultRpcUrls";
                readonly nameLocation: "3012:14:98";
                readonly scope: 27239;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_string_storage_$";
                    readonly typeString: "mapping(string => string)";
                };
                readonly typeName: {
                    readonly id: 26567;
                    readonly keyName: "";
                    readonly keyNameLocation: "-1:-1:-1";
                    readonly keyType: {
                        readonly id: 26565;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2986:6:98";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "2978:25:98";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_string_storage_$";
                        readonly typeString: "mapping(string => string)";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 26566;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2996:6:98";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 26572;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3075:44:98";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "idToAlias";
                readonly nameLocation: "3110:9:98";
                readonly scope: 27239;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_string_storage_$";
                    readonly typeString: "mapping(uint256 => string)";
                };
                readonly typeName: {
                    readonly id: 26571;
                    readonly keyName: "";
                    readonly keyNameLocation: "-1:-1:-1";
                    readonly keyType: {
                        readonly id: 26569;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3083:7:98";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "3075:26:98";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_string_storage_$";
                        readonly typeString: "mapping(uint256 => string)";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 26570;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3094:6:98";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 26575;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3126:44:98";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "fallbackToDefaultRpcUrls";
                readonly nameLocation: "3139:24:98";
                readonly scope: 27239;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bool";
                    readonly typeString: "bool";
                };
                readonly typeName: {
                    readonly id: 26573;
                    readonly name: "bool";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "3126:4:98";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                };
                readonly value: {
                    readonly hexValue: "74727565";
                    readonly id: 26574;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "bool";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "3166:4:98";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly value: "true";
                };
                readonly visibility: "private";
            }, {
                readonly id: 26627;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3255:524:98";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26626;
                    readonly nodeType: "Block";
                    readonly src: "3345:434:98";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 26590;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly arguments: readonly [{
                                            readonly id: 26586;
                                            readonly name: "chainAlias";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 26577;
                                            readonly src: "3369:10:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                readonly typeString: "string memory";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                readonly typeString: "string memory";
                                            }];
                                            readonly id: 26585;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "3363:5:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                readonly typeString: "type(bytes storage pointer)";
                                            };
                                            readonly typeName: {
                                                readonly id: 26584;
                                                readonly name: "bytes";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "3363:5:98";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 26587;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3363:17:98";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 26588;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3381:6:98";
                                    readonly memberName: "length";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "3363:24:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 26589;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "3391:1:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "3363:29:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "537464436861696e7320676574436861696e28737472696e67293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e";
                                readonly id: 26591;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3394:69:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_3d920aad82cc068f1a73b0fb2c703d0169baa46c8c67097012e1aca0cc8c8b70";
                                    readonly typeString: "literal_string \"StdChains getChain(string): Chain alias cannot be the empty string.\"";
                                };
                                readonly value: "StdChains getChain(string): Chain alias cannot be the empty string.";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_3d920aad82cc068f1a73b0fb2c703d0169baa46c8c67097012e1aca0cc8c8b70";
                                    readonly typeString: "literal_string \"StdChains getChain(string): Chain alias cannot be the empty string.\"";
                                }];
                                readonly id: 26583;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "3355:7:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 26592;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3355:109:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26593;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3355:109:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 26594;
                                readonly name: "initializeStdChains";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27201;
                                readonly src: "3475:19:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 26595;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3475:21:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26596;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3475:21:98";
                    }, {
                        readonly expression: {
                            readonly id: 26601;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26597;
                                readonly name: "chain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26581;
                                readonly src: "3506:5:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly baseExpression: {
                                    readonly id: 26598;
                                    readonly name: "chains";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26564;
                                    readonly src: "3514:6:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26559_storage_$";
                                        readonly typeString: "mapping(string memory => struct StdChains.Chain storage ref)";
                                    };
                                };
                                readonly id: 26600;
                                readonly indexExpression: {
                                    readonly id: 26599;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26577;
                                    readonly src: "3521:10:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "IndexAccess";
                                readonly src: "3514:18:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26559_storage";
                                    readonly typeString: "struct StdChains.Chain storage ref";
                                };
                            };
                            readonly src: "3506:26:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                readonly typeString: "struct StdChains.Chain memory";
                            };
                        };
                        readonly id: 26602;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3506:26:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 26607;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 26604;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26581;
                                        readonly src: "3563:5:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                            readonly typeString: "struct StdChains.Chain memory";
                                        };
                                    };
                                    readonly id: 26605;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3569:7:98";
                                    readonly memberName: "chainId";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 26554;
                                    readonly src: "3563:13:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 26606;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "3580:1:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "3563:18:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly hexValue: "537464436861696e7320676574436861696e28737472696e67293a20436861696e207769746820616c6961732022";
                                        readonly id: 26612;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "3619:49:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_be183459e9329da9bfc4a2fec17224f102b8a68c1139772e954a2d6fd9877e00";
                                            readonly typeString: "literal_string \"StdChains getChain(string): Chain with alias \"\"";
                                        };
                                        readonly value: "StdChains getChain(string): Chain with alias \"";
                                    }, {
                                        readonly id: 26613;
                                        readonly name: "chainAlias";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26577;
                                        readonly src: "3670:10:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        };
                                    }, {
                                        readonly hexValue: "22206e6f7420666f756e642e";
                                        readonly id: 26614;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "3682:15:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_be956cec6682d51b49f30c9beff2857436402411b7eee4082594e44819bcd397";
                                            readonly typeString: "literal_string \"\" not found.\"";
                                        };
                                        readonly value: "\" not found.";
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_stringliteral_be183459e9329da9bfc4a2fec17224f102b8a68c1139772e954a2d6fd9877e00";
                                            readonly typeString: "literal_string \"StdChains getChain(string): Chain with alias \"\"";
                                        }, {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        }, {
                                            readonly typeIdentifier: "t_stringliteral_be956cec6682d51b49f30c9beff2857436402411b7eee4082594e44819bcd397";
                                            readonly typeString: "literal_string \"\" not found.\"";
                                        }];
                                        readonly expression: {
                                            readonly id: 26610;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "3602:3:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 26611;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3606:12:98";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "3602:16:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 26615;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3602:96:98";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly id: 26609;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "3595:6:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                        readonly typeString: "type(string storage pointer)";
                                    };
                                    readonly typeName: {
                                        readonly id: 26608;
                                        readonly name: "string";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "3595:6:98";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 26616;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3595:104:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly id: 26603;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "3542:7:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 26617;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3542:167:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26618;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3542:167:98";
                    }, {
                        readonly expression: {
                            readonly id: 26624;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26619;
                                readonly name: "chain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26581;
                                readonly src: "3720:5:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 26621;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26577;
                                    readonly src: "3754:10:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly id: 26622;
                                    readonly name: "chain";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26581;
                                    readonly src: "3766:5:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                        readonly typeString: "struct StdChains.Chain memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    }, {
                                        readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                        readonly typeString: "struct StdChains.Chain memory";
                                    }];
                                    readonly id: 26620;
                                    readonly name: "getChainWithUpdatedRpcUrl";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 27009;
                                    readonly src: "3728:25:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$26559_memory_ptr_$returns$_t_struct$_Chain_$26559_memory_ptr_$";
                                        readonly typeString: "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)";
                                    };
                                };
                                readonly id: 26623;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3728:44:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly src: "3720:52:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                readonly typeString: "struct StdChains.Chain memory";
                            };
                        };
                        readonly id: 26625;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3720:52:98";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getChain";
                readonly nameLocation: "3264:8:98";
                readonly parameters: {
                    readonly id: 26578;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26577;
                        readonly mutability: "mutable";
                        readonly name: "chainAlias";
                        readonly nameLocation: "3287:10:98";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26627;
                        readonly src: "3273:24:98";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 26576;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3273:6:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3272:26:98";
                };
                readonly returnParameters: {
                    readonly id: 26582;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26581;
                        readonly mutability: "mutable";
                        readonly name: "chain";
                        readonly nameLocation: "3338:5:98";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26627;
                        readonly src: "3325:18:98";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                            readonly typeString: "struct StdChains.Chain";
                        };
                        readonly typeName: {
                            readonly id: 26580;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26579;
                                readonly name: "Chain";
                                readonly nameLocations: readonly ["3325:5:98"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 26559;
                                readonly src: "3325:5:98";
                            };
                            readonly referencedDeclaration: 26559;
                            readonly src: "3325:5:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26559_storage_ptr";
                                readonly typeString: "struct StdChains.Chain";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3324:20:98";
                };
                readonly scope: 27239;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 26684;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3785:541:98";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26683;
                    readonly nodeType: "Block";
                    readonly src: "3866:460:98";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 26638;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 26636;
                                    readonly name: "chainId";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26629;
                                    readonly src: "3884:7:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 26637;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "3895:1:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "3884:12:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "537464436861696e7320676574436861696e2875696e74323536293a20436861696e2049442063616e6e6f7420626520302e";
                                readonly id: 26639;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3898:52:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_64f1cd082b277ed92a70b6890cc1e3b6ebd77bc6c9299e7ce82305de04926a4a";
                                    readonly typeString: "literal_string \"StdChains getChain(uint256): Chain ID cannot be 0.\"";
                                };
                                readonly value: "StdChains getChain(uint256): Chain ID cannot be 0.";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_64f1cd082b277ed92a70b6890cc1e3b6ebd77bc6c9299e7ce82305de04926a4a";
                                    readonly typeString: "literal_string \"StdChains getChain(uint256): Chain ID cannot be 0.\"";
                                }];
                                readonly id: 26635;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "3876:7:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 26640;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3876:75:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26641;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3876:75:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 26642;
                                readonly name: "initializeStdChains";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27201;
                                readonly src: "3961:19:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 26643;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3961:21:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26644;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3961:21:98";
                    }, {
                        readonly assignments: readonly [26646];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26646;
                            readonly mutability: "mutable";
                            readonly name: "chainAlias";
                            readonly nameLocation: "4006:10:98";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26683;
                            readonly src: "3992:24:98";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string";
                            };
                            readonly typeName: {
                                readonly id: 26645;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3992:6:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26650;
                        readonly initialValue: {
                            readonly baseExpression: {
                                readonly id: 26647;
                                readonly name: "idToAlias";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26572;
                                readonly src: "4019:9:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_string_storage_$";
                                    readonly typeString: "mapping(uint256 => string storage ref)";
                                };
                            };
                            readonly id: 26649;
                            readonly indexExpression: {
                                readonly id: 26648;
                                readonly name: "chainId";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26629;
                                readonly src: "4029:7:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "IndexAccess";
                            readonly src: "4019:18:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage";
                                readonly typeString: "string storage ref";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3992:45:98";
                    }, {
                        readonly expression: {
                            readonly id: 26655;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26651;
                                readonly name: "chain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26633;
                                readonly src: "4048:5:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly baseExpression: {
                                    readonly id: 26652;
                                    readonly name: "chains";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26564;
                                    readonly src: "4056:6:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26559_storage_$";
                                        readonly typeString: "mapping(string memory => struct StdChains.Chain storage ref)";
                                    };
                                };
                                readonly id: 26654;
                                readonly indexExpression: {
                                    readonly id: 26653;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26646;
                                    readonly src: "4063:10:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "IndexAccess";
                                readonly src: "4056:18:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26559_storage";
                                    readonly typeString: "struct StdChains.Chain storage ref";
                                };
                            };
                            readonly src: "4048:26:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                readonly typeString: "struct StdChains.Chain memory";
                            };
                        };
                        readonly id: 26656;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4048:26:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 26661;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 26658;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26633;
                                        readonly src: "4106:5:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                            readonly typeString: "struct StdChains.Chain memory";
                                        };
                                    };
                                    readonly id: 26659;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4112:7:98";
                                    readonly memberName: "chainId";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 26554;
                                    readonly src: "4106:13:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 26660;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4123:1:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "4106:18:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly hexValue: "537464436861696e7320676574436861696e2875696e74323536293a20436861696e207769746820494420";
                                        readonly id: 26666;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "4162:45:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_ce7b2cad45f1a6d0b9b7bb125e9a8742fce8fed7d742c83265d4a2da4caf457d";
                                            readonly typeString: "literal_string \"StdChains getChain(uint256): Chain with ID \"";
                                        };
                                        readonly value: "StdChains getChain(uint256): Chain with ID ";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly id: 26669;
                                            readonly name: "chainId";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 26629;
                                            readonly src: "4221:7:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly id: 26667;
                                                readonly name: "vm";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 26541;
                                                readonly src: "4209:2:98";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_VmSafe_$35725";
                                                    readonly typeString: "contract VmSafe";
                                                };
                                            };
                                            readonly id: 26668;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4212:8:98";
                                            readonly memberName: "toString";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 35257;
                                            readonly src: "4209:11:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                                readonly typeString: "function (uint256) pure external returns (string memory)";
                                            };
                                        };
                                        readonly id: 26670;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4209:20:98";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        };
                                    }, {
                                        readonly hexValue: "206e6f7420666f756e642e";
                                        readonly id: 26671;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "4231:13:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_f310d2efb88747fac959fa7567a0a1a161dd43a77ba9af074f6191cf5bcf4f8b";
                                            readonly typeString: "literal_string \" not found.\"";
                                        };
                                        readonly value: " not found.";
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_stringliteral_ce7b2cad45f1a6d0b9b7bb125e9a8742fce8fed7d742c83265d4a2da4caf457d";
                                            readonly typeString: "literal_string \"StdChains getChain(uint256): Chain with ID \"";
                                        }, {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        }, {
                                            readonly typeIdentifier: "t_stringliteral_f310d2efb88747fac959fa7567a0a1a161dd43a77ba9af074f6191cf5bcf4f8b";
                                            readonly typeString: "literal_string \" not found.\"";
                                        }];
                                        readonly expression: {
                                            readonly id: 26664;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "4145:3:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 26665;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4149:12:98";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4145:16:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 26672;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4145:100:98";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly id: 26663;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "4138:6:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                        readonly typeString: "type(string storage pointer)";
                                    };
                                    readonly typeName: {
                                        readonly id: 26662;
                                        readonly name: "string";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4138:6:98";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 26673;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4138:108:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly id: 26657;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "4085:7:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 26674;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4085:171:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26675;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4085:171:98";
                    }, {
                        readonly expression: {
                            readonly id: 26681;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26676;
                                readonly name: "chain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26633;
                                readonly src: "4267:5:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 26678;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26646;
                                    readonly src: "4301:10:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly id: 26679;
                                    readonly name: "chain";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26633;
                                    readonly src: "4313:5:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                        readonly typeString: "struct StdChains.Chain memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    }, {
                                        readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                        readonly typeString: "struct StdChains.Chain memory";
                                    }];
                                    readonly id: 26677;
                                    readonly name: "getChainWithUpdatedRpcUrl";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 27009;
                                    readonly src: "4275:25:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$26559_memory_ptr_$returns$_t_struct$_Chain_$26559_memory_ptr_$";
                                        readonly typeString: "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)";
                                    };
                                };
                                readonly id: 26680;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4275:44:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly src: "4267:52:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                readonly typeString: "struct StdChains.Chain memory";
                            };
                        };
                        readonly id: 26682;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4267:52:98";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getChain";
                readonly nameLocation: "3794:8:98";
                readonly parameters: {
                    readonly id: 26630;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26629;
                        readonly mutability: "mutable";
                        readonly name: "chainId";
                        readonly nameLocation: "3811:7:98";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26684;
                        readonly src: "3803:15:98";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26628;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3803:7:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3802:17:98";
                };
                readonly returnParameters: {
                    readonly id: 26634;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26633;
                        readonly mutability: "mutable";
                        readonly name: "chain";
                        readonly nameLocation: "3859:5:98";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26684;
                        readonly src: "3846:18:98";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                            readonly typeString: "struct StdChains.Chain";
                        };
                        readonly typeName: {
                            readonly id: 26632;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26631;
                                readonly name: "Chain";
                                readonly nameLocations: readonly ["3846:5:98"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 26559;
                                readonly src: "3846:5:98";
                            };
                            readonly referencedDeclaration: 26559;
                            readonly src: "3846:5:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26559_storage_ptr";
                                readonly typeString: "struct StdChains.Chain";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3845:20:98";
                };
                readonly scope: 27239;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 26794;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4397:1173:98";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26793;
                    readonly nodeType: "Block";
                    readonly src: "4482:1088:98";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 26699;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly arguments: readonly [{
                                            readonly id: 26695;
                                            readonly name: "chainAlias";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 26686;
                                            readonly src: "4519:10:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                readonly typeString: "string memory";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                readonly typeString: "string memory";
                                            }];
                                            readonly id: 26694;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "4513:5:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                readonly typeString: "type(bytes storage pointer)";
                                            };
                                            readonly typeName: {
                                                readonly id: 26693;
                                                readonly name: "bytes";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "4513:5:98";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 26696;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4513:17:98";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 26697;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4531:6:98";
                                    readonly memberName: "length";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "4513:24:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 26698;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4541:1:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "4513:29:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e";
                                readonly id: 26700;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4556:79:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_30b2334ec57cbeeece39c6405e10d3437560135ecd84835d6b9144db1d575354";
                                    readonly typeString: "literal_string \"StdChains setChain(string,ChainData): Chain alias cannot be the empty string.\"";
                                };
                                readonly value: "StdChains setChain(string,ChainData): Chain alias cannot be the empty string.";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_30b2334ec57cbeeece39c6405e10d3437560135ecd84835d6b9144db1d575354";
                                    readonly typeString: "literal_string \"StdChains setChain(string,ChainData): Chain alias cannot be the empty string.\"";
                                }];
                                readonly id: 26692;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "4492:7:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 26701;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4492:153:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26702;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4492:153:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 26707;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 26704;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26689;
                                        readonly src: "4664:5:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                            readonly typeString: "struct StdChains.ChainData memory";
                                        };
                                    };
                                    readonly id: 26705;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4670:7:98";
                                    readonly memberName: "chainId";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 26547;
                                    readonly src: "4664:13:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 26706;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4681:1:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "4664:18:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e2049442063616e6e6f7420626520302e";
                                readonly id: 26708;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4684:61:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_ab0ba8dace83d80dc1941286e8d0551223497db1b420e58abff2f3db2ad3fbf4";
                                    readonly typeString: "literal_string \"StdChains setChain(string,ChainData): Chain ID cannot be 0.\"";
                                };
                                readonly value: "StdChains setChain(string,ChainData): Chain ID cannot be 0.";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_ab0ba8dace83d80dc1941286e8d0551223497db1b420e58abff2f3db2ad3fbf4";
                                    readonly typeString: "literal_string \"StdChains setChain(string,ChainData): Chain ID cannot be 0.\"";
                                }];
                                readonly id: 26703;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "4656:7:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 26709;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4656:90:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26710;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4656:90:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 26711;
                                readonly name: "initializeStdChains";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27201;
                                readonly src: "4757:19:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 26712;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4757:21:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26713;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4757:21:98";
                    }, {
                        readonly assignments: readonly [26715];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26715;
                            readonly mutability: "mutable";
                            readonly name: "foundAlias";
                            readonly nameLocation: "4802:10:98";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26793;
                            readonly src: "4788:24:98";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string";
                            };
                            readonly typeName: {
                                readonly id: 26714;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4788:6:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26720;
                        readonly initialValue: {
                            readonly baseExpression: {
                                readonly id: 26716;
                                readonly name: "idToAlias";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26572;
                                readonly src: "4815:9:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_string_storage_$";
                                    readonly typeString: "mapping(uint256 => string storage ref)";
                                };
                            };
                            readonly id: 26719;
                            readonly indexExpression: {
                                readonly expression: {
                                    readonly id: 26717;
                                    readonly name: "chain";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26689;
                                    readonly src: "4825:5:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                        readonly typeString: "struct StdChains.ChainData memory";
                                    };
                                };
                                readonly id: 26718;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4831:7:98";
                                readonly memberName: "chainId";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 26547;
                                readonly src: "4825:13:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "IndexAccess";
                            readonly src: "4815:24:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage";
                                readonly typeString: "string storage ref";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4788:51:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly id: 26742;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 26728;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly id: 26724;
                                                readonly name: "foundAlias";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 26715;
                                                readonly src: "4877:10:98";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string memory";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string memory";
                                                }];
                                                readonly id: 26723;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "4871:5:98";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                    readonly typeString: "type(bytes storage pointer)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 26722;
                                                    readonly name: "bytes";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "4871:5:98";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 26725;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4871:17:98";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        };
                                        readonly id: 26726;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4889:6:98";
                                        readonly memberName: "length";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4871:24:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "==";
                                    readonly rightExpression: {
                                        readonly hexValue: "30";
                                        readonly id: 26727;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "4899:1:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    };
                                    readonly src: "4871:29:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "||";
                                readonly rightExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                    readonly id: 26741;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 26732;
                                                readonly name: "foundAlias";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 26715;
                                                readonly src: "4920:10:98";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string memory";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string memory";
                                                }];
                                                readonly id: 26731;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "4914:5:98";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                    readonly typeString: "type(bytes storage pointer)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 26730;
                                                    readonly name: "bytes";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "4914:5:98";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 26733;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4914:17:98";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            }];
                                            readonly id: 26729;
                                            readonly name: "keccak256";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -8;
                                            readonly src: "4904:9:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                            };
                                        };
                                        readonly id: 26734;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4904:28:98";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "==";
                                    readonly rightExpression: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 26738;
                                                readonly name: "chainAlias";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 26686;
                                                readonly src: "4952:10:98";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string memory";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string memory";
                                                }];
                                                readonly id: 26737;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "4946:5:98";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                    readonly typeString: "type(bytes storage pointer)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 26736;
                                                    readonly name: "bytes";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "4946:5:98";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 26739;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4946:17:98";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            }];
                                            readonly id: 26735;
                                            readonly name: "keccak256";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -8;
                                            readonly src: "4936:9:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                            };
                                        };
                                        readonly id: 26740;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4936:28:98";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "4904:60:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly src: "4871:93:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly hexValue: "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e20494420";
                                        readonly id: 26747;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5040:49:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_2f5ddfff35cec202bbf760c515d7332e259c9b0c330efa0b2d03073b34906ba0";
                                            readonly typeString: "literal_string \"StdChains setChain(string,ChainData): Chain ID \"";
                                        };
                                        readonly value: "StdChains setChain(string,ChainData): Chain ID ";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly id: 26750;
                                                readonly name: "chain";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 26689;
                                                readonly src: "5123:5:98";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                                    readonly typeString: "struct StdChains.ChainData memory";
                                                };
                                            };
                                            readonly id: 26751;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5129:7:98";
                                            readonly memberName: "chainId";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 26547;
                                            readonly src: "5123:13:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly id: 26748;
                                                readonly name: "vm";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 26541;
                                                readonly src: "5111:2:98";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_VmSafe_$35725";
                                                    readonly typeString: "contract VmSafe";
                                                };
                                            };
                                            readonly id: 26749;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5114:8:98";
                                            readonly memberName: "toString";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 35257;
                                            readonly src: "5111:11:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                                readonly typeString: "function (uint256) pure external returns (string memory)";
                                            };
                                        };
                                        readonly id: 26752;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5111:26:98";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        };
                                    }, {
                                        readonly hexValue: "20616c726561647920757365642062792022";
                                        readonly id: 26753;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5159:21:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_03dcc98944d744f10105f4b63a1d5b4f5b14493812e66201e5f21a3da2662077";
                                            readonly typeString: "literal_string \" already used by \"\"";
                                        };
                                        readonly value: " already used by \"";
                                    }, {
                                        readonly id: 26754;
                                        readonly name: "foundAlias";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26715;
                                        readonly src: "5202:10:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        };
                                    }, {
                                        readonly hexValue: "222e";
                                        readonly id: 26755;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5234:5:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_cb54fc3dbdac1cb7b87378fdaddeb9e7549db2a108b5270efaa4bcd576270193";
                                            readonly typeString: "literal_string \"\".\"";
                                        };
                                        readonly value: "\".";
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_stringliteral_2f5ddfff35cec202bbf760c515d7332e259c9b0c330efa0b2d03073b34906ba0";
                                            readonly typeString: "literal_string \"StdChains setChain(string,ChainData): Chain ID \"";
                                        }, {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        }, {
                                            readonly typeIdentifier: "t_stringliteral_03dcc98944d744f10105f4b63a1d5b4f5b14493812e66201e5f21a3da2662077";
                                            readonly typeString: "literal_string \" already used by \"\"";
                                        }, {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        }, {
                                            readonly typeIdentifier: "t_stringliteral_cb54fc3dbdac1cb7b87378fdaddeb9e7549db2a108b5270efaa4bcd576270193";
                                            readonly typeString: "literal_string \"\".\"";
                                        }];
                                        readonly expression: {
                                            readonly id: 26745;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "5002:3:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 26746;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5006:12:98";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "5002:16:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 26756;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5002:255:98";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly id: 26744;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "4978:6:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                        readonly typeString: "type(string storage pointer)";
                                    };
                                    readonly typeName: {
                                        readonly id: 26743;
                                        readonly name: "string";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4978:6:98";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 26757;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4978:293:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly id: 26721;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "4850:7:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 26758;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4850:431:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26759;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4850:431:98";
                    }, {
                        readonly assignments: readonly [26761];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26761;
                            readonly mutability: "mutable";
                            readonly name: "oldChainId";
                            readonly nameLocation: "5300:10:98";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26793;
                            readonly src: "5292:18:98";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 26760;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5292:7:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26766;
                        readonly initialValue: {
                            readonly expression: {
                                readonly baseExpression: {
                                    readonly id: 26762;
                                    readonly name: "chains";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26564;
                                    readonly src: "5313:6:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26559_storage_$";
                                        readonly typeString: "mapping(string memory => struct StdChains.Chain storage ref)";
                                    };
                                };
                                readonly id: 26764;
                                readonly indexExpression: {
                                    readonly id: 26763;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26686;
                                    readonly src: "5320:10:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "IndexAccess";
                                readonly src: "5313:18:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26559_storage";
                                    readonly typeString: "struct StdChains.Chain storage ref";
                                };
                            };
                            readonly id: 26765;
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "5332:7:98";
                            readonly memberName: "chainId";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 26554;
                            readonly src: "5313:26:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5292:47:98";
                    }, {
                        readonly expression: {
                            readonly id: 26770;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "delete";
                            readonly prefix: true;
                            readonly src: "5349:28:98";
                            readonly subExpression: {
                                readonly baseExpression: {
                                    readonly id: 26767;
                                    readonly name: "idToAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26572;
                                    readonly src: "5356:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_string_storage_$";
                                        readonly typeString: "mapping(uint256 => string storage ref)";
                                    };
                                };
                                readonly id: 26769;
                                readonly indexExpression: {
                                    readonly id: 26768;
                                    readonly name: "oldChainId";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26761;
                                    readonly src: "5366:10:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "IndexAccess";
                                readonly src: "5356:21:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage";
                                    readonly typeString: "string storage ref";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26771;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5349:28:98";
                    }, {
                        readonly expression: {
                            readonly id: 26784;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly id: 26772;
                                    readonly name: "chains";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26564;
                                    readonly src: "5388:6:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26559_storage_$";
                                        readonly typeString: "mapping(string memory => struct StdChains.Chain storage ref)";
                                    };
                                };
                                readonly id: 26774;
                                readonly indexExpression: {
                                    readonly id: 26773;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26686;
                                    readonly src: "5395:10:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "IndexAccess";
                                readonly src: "5388:18:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26559_storage";
                                    readonly typeString: "struct StdChains.Chain storage ref";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 26776;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26689;
                                        readonly src: "5434:5:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                            readonly typeString: "struct StdChains.ChainData memory";
                                        };
                                    };
                                    readonly id: 26777;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5440:4:98";
                                    readonly memberName: "name";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 26545;
                                    readonly src: "5434:10:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 26778;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26689;
                                        readonly src: "5455:5:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                            readonly typeString: "struct StdChains.ChainData memory";
                                        };
                                    };
                                    readonly id: 26779;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5461:7:98";
                                    readonly memberName: "chainId";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 26547;
                                    readonly src: "5455:13:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 26780;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26686;
                                    readonly src: "5482:10:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 26781;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26689;
                                        readonly src: "5502:5:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                            readonly typeString: "struct StdChains.ChainData memory";
                                        };
                                    };
                                    readonly id: 26782;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5508:6:98";
                                    readonly memberName: "rpcUrl";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 26549;
                                    readonly src: "5502:12:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    }, {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    }];
                                    readonly id: 26775;
                                    readonly name: "Chain";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26559;
                                    readonly src: "5421:5:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_Chain_$26559_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.Chain storage pointer)";
                                    };
                                };
                                readonly id: 26783;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly ["5428:4:98", "5446:7:98", "5470:10:98", "5494:6:98"];
                                readonly names: readonly ["name", "chainId", "chainAlias", "rpcUrl"];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5421:95:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly src: "5388:128:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26559_storage";
                                readonly typeString: "struct StdChains.Chain storage ref";
                            };
                        };
                        readonly id: 26785;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5388:128:98";
                    }, {
                        readonly expression: {
                            readonly id: 26791;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly id: 26786;
                                    readonly name: "idToAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26572;
                                    readonly src: "5526:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_string_storage_$";
                                        readonly typeString: "mapping(uint256 => string storage ref)";
                                    };
                                };
                                readonly id: 26789;
                                readonly indexExpression: {
                                    readonly expression: {
                                        readonly id: 26787;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26689;
                                        readonly src: "5536:5:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                            readonly typeString: "struct StdChains.ChainData memory";
                                        };
                                    };
                                    readonly id: 26788;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5542:7:98";
                                    readonly memberName: "chainId";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 26547;
                                    readonly src: "5536:13:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "IndexAccess";
                                readonly src: "5526:24:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage";
                                    readonly typeString: "string storage ref";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 26790;
                                readonly name: "chainAlias";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26686;
                                readonly src: "5553:10:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            };
                            readonly src: "5526:37:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage";
                                readonly typeString: "string storage ref";
                            };
                        };
                        readonly id: 26792;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5526:37:98";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setChain";
                readonly nameLocation: "4406:8:98";
                readonly parameters: {
                    readonly id: 26690;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26686;
                        readonly mutability: "mutable";
                        readonly name: "chainAlias";
                        readonly nameLocation: "4429:10:98";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26794;
                        readonly src: "4415:24:98";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 26685;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4415:6:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26689;
                        readonly mutability: "mutable";
                        readonly name: "chain";
                        readonly nameLocation: "4458:5:98";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26794;
                        readonly src: "4441:22:98";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                            readonly typeString: "struct StdChains.ChainData";
                        };
                        readonly typeName: {
                            readonly id: 26688;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26687;
                                readonly name: "ChainData";
                                readonly nameLocations: readonly ["4441:9:98"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 26550;
                                readonly src: "4441:9:98";
                            };
                            readonly referencedDeclaration: 26550;
                            readonly src: "4441:9:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_ChainData_$26550_storage_ptr";
                                readonly typeString: "struct StdChains.ChainData";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4414:50:98";
                };
                readonly returnParameters: {
                    readonly id: 26691;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4482:0:98";
                };
                readonly scope: 27239;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 26815;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5641:195:98";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26814;
                    readonly nodeType: "Block";
                    readonly src: "5722:114:98";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26803;
                                readonly name: "chainAlias";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26796;
                                readonly src: "5741:10:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 26805;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26799;
                                        readonly src: "5770:5:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                            readonly typeString: "struct StdChains.Chain memory";
                                        };
                                    };
                                    readonly id: 26806;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5776:4:98";
                                    readonly memberName: "name";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 26552;
                                    readonly src: "5770:10:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 26807;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26799;
                                        readonly src: "5791:5:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                            readonly typeString: "struct StdChains.Chain memory";
                                        };
                                    };
                                    readonly id: 26808;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5797:7:98";
                                    readonly memberName: "chainId";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 26554;
                                    readonly src: "5791:13:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 26809;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26799;
                                        readonly src: "5814:5:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                            readonly typeString: "struct StdChains.Chain memory";
                                        };
                                    };
                                    readonly id: 26810;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5820:6:98";
                                    readonly memberName: "rpcUrl";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 26558;
                                    readonly src: "5814:12:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    }];
                                    readonly id: 26804;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26550;
                                    readonly src: "5753:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26550_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 26811;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly ["5764:4:98", "5782:7:98", "5806:6:98"];
                                readonly names: readonly ["name", "chainId", "rpcUrl"];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5753:75:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 26802;
                                readonly name: "setChain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [26794, 26815];
                                readonly referencedDeclaration: 26794;
                                readonly src: "5732:8:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 26812;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5732:97:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26813;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5732:97:98";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setChain";
                readonly nameLocation: "5650:8:98";
                readonly parameters: {
                    readonly id: 26800;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26796;
                        readonly mutability: "mutable";
                        readonly name: "chainAlias";
                        readonly nameLocation: "5673:10:98";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26815;
                        readonly src: "5659:24:98";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 26795;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5659:6:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26799;
                        readonly mutability: "mutable";
                        readonly name: "chain";
                        readonly nameLocation: "5698:5:98";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26815;
                        readonly src: "5685:18:98";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                            readonly typeString: "struct StdChains.Chain";
                        };
                        readonly typeName: {
                            readonly id: 26798;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26797;
                                readonly name: "Chain";
                                readonly nameLocations: readonly ["5685:5:98"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 26559;
                                readonly src: "5685:5:98";
                            };
                            readonly referencedDeclaration: 26559;
                            readonly src: "5685:5:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26559_storage_ptr";
                                readonly typeString: "struct StdChains.Chain";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5658:46:98";
                };
                readonly returnParameters: {
                    readonly id: 26801;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5722:0:98";
                };
                readonly scope: 27239;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 26892;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5842:451:98";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26891;
                    readonly nodeType: "Block";
                    readonly src: "5916:377:98";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [26823];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26823;
                            readonly mutability: "mutable";
                            readonly name: "strb";
                            readonly nameLocation: "5939:4:98";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26891;
                            readonly src: "5926:17:98";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 26822;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5926:5:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26828;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 26826;
                                readonly name: "str";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26817;
                                readonly src: "5952:3:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly id: 26825;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "5946:5:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                    readonly typeString: "type(bytes storage pointer)";
                                };
                                readonly typeName: {
                                    readonly id: 26824;
                                    readonly name: "bytes";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "5946:5:98";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 26827;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5946:10:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5926:30:98";
                    }, {
                        readonly assignments: readonly [26830];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26830;
                            readonly mutability: "mutable";
                            readonly name: "copy";
                            readonly nameLocation: "5979:4:98";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26891;
                            readonly src: "5966:17:98";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 26829;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5966:5:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26836;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 26833;
                                    readonly name: "strb";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26823;
                                    readonly src: "5996:4:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly id: 26834;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6001:6:98";
                                readonly memberName: "length";
                                readonly nodeType: "MemberAccess";
                                readonly src: "5996:11:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 26832;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "5986:9:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (uint256) pure returns (bytes memory)";
                                };
                                readonly typeName: {
                                    readonly id: 26831;
                                    readonly name: "bytes";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "5990:5:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_storage_ptr";
                                        readonly typeString: "bytes";
                                    };
                                };
                            };
                            readonly id: 26835;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5986:22:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5966:42:98";
                    }, {
                        readonly body: {
                            readonly id: 26884;
                            readonly nodeType: "Block";
                            readonly src: "6060:198:98";
                            readonly statements: readonly [{
                                readonly assignments: readonly [26849];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 26849;
                                    readonly mutability: "mutable";
                                    readonly name: "b";
                                    readonly nameLocation: "6081:1:98";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 26884;
                                    readonly src: "6074:8:98";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes1";
                                        readonly typeString: "bytes1";
                                    };
                                    readonly typeName: {
                                        readonly id: 26848;
                                        readonly name: "bytes1";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "6074:6:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 26853;
                                readonly initialValue: {
                                    readonly baseExpression: {
                                        readonly id: 26850;
                                        readonly name: "strb";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26823;
                                        readonly src: "6085:4:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 26852;
                                    readonly indexExpression: {
                                        readonly id: 26851;
                                        readonly name: "i";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26838;
                                        readonly src: "6090:1:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "IndexAccess";
                                    readonly src: "6085:7:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes1";
                                        readonly typeString: "bytes1";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "6074:18:98";
                            }, {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly id: 26860;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        };
                                        readonly id: 26856;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 26854;
                                            readonly name: "b";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 26849;
                                            readonly src: "6110:1:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: ">=";
                                        readonly rightExpression: {
                                            readonly hexValue: "30783631";
                                            readonly id: 26855;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "6115:4:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_97_by_1";
                                                readonly typeString: "int_const 97";
                                            };
                                            readonly value: "0x61";
                                        };
                                        readonly src: "6110:9:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "&&";
                                    readonly rightExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        };
                                        readonly id: 26859;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 26857;
                                            readonly name: "b";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 26849;
                                            readonly src: "6123:1:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "<=";
                                        readonly rightExpression: {
                                            readonly hexValue: "30783741";
                                            readonly id: 26858;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "6128:4:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_122_by_1";
                                                readonly typeString: "int_const 122";
                                            };
                                            readonly value: "0x7A";
                                        };
                                        readonly src: "6123:9:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "6110:22:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseBody: {
                                    readonly id: 26882;
                                    readonly nodeType: "Block";
                                    readonly src: "6204:44:98";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 26880;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly baseExpression: {
                                                    readonly id: 26876;
                                                    readonly name: "copy";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 26830;
                                                    readonly src: "6222:4:98";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                };
                                                readonly id: 26878;
                                                readonly indexExpression: {
                                                    readonly id: 26877;
                                                    readonly name: "i";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 26838;
                                                    readonly src: "6227:1:98";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: true;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "6222:7:98";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes1";
                                                    readonly typeString: "bytes1";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly id: 26879;
                                                readonly name: "b";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 26849;
                                                readonly src: "6232:1:98";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes1";
                                                    readonly typeString: "bytes1";
                                                };
                                            };
                                            readonly src: "6222:11:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        };
                                        readonly id: 26881;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "6222:11:98";
                                    }];
                                };
                                readonly id: 26883;
                                readonly nodeType: "IfStatement";
                                readonly src: "6106:142:98";
                                readonly trueBody: {
                                    readonly id: 26875;
                                    readonly nodeType: "Block";
                                    readonly src: "6134:64:98";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 26873;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly baseExpression: {
                                                    readonly id: 26861;
                                                    readonly name: "copy";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 26830;
                                                    readonly src: "6152:4:98";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                };
                                                readonly id: 26863;
                                                readonly indexExpression: {
                                                    readonly id: 26862;
                                                    readonly name: "i";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 26838;
                                                    readonly src: "6157:1:98";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                };
                                                readonly isConstant: false;
                                                readonly isLValue: true;
                                                readonly isPure: false;
                                                readonly lValueRequested: true;
                                                readonly nodeType: "IndexAccess";
                                                readonly src: "6152:7:98";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes1";
                                                    readonly typeString: "bytes1";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly arguments: readonly [{
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_uint8";
                                                        readonly typeString: "uint8";
                                                    };
                                                    readonly id: 26871;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly arguments: readonly [{
                                                            readonly id: 26868;
                                                            readonly name: "b";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 26849;
                                                            readonly src: "6175:1:98";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_bytes1";
                                                                readonly typeString: "bytes1";
                                                            };
                                                        }];
                                                        readonly expression: {
                                                            readonly argumentTypes: readonly [{
                                                                readonly typeIdentifier: "t_bytes1";
                                                                readonly typeString: "bytes1";
                                                            }];
                                                            readonly id: 26867;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: true;
                                                            readonly lValueRequested: false;
                                                            readonly nodeType: "ElementaryTypeNameExpression";
                                                            readonly src: "6169:5:98";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_type$_t_uint8_$";
                                                                readonly typeString: "type(uint8)";
                                                            };
                                                            readonly typeName: {
                                                                readonly id: 26866;
                                                                readonly name: "uint8";
                                                                readonly nodeType: "ElementaryTypeName";
                                                                readonly src: "6169:5:98";
                                                                readonly typeDescriptions: {};
                                                            };
                                                        };
                                                        readonly id: 26869;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "typeConversion";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "6169:8:98";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint8";
                                                            readonly typeString: "uint8";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "-";
                                                    readonly rightExpression: {
                                                        readonly hexValue: "3332";
                                                        readonly id: 26870;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "6180:2:98";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_rational_32_by_1";
                                                            readonly typeString: "int_const 32";
                                                        };
                                                        readonly value: "32";
                                                    };
                                                    readonly src: "6169:13:98";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_uint8";
                                                        readonly typeString: "uint8";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_uint8";
                                                        readonly typeString: "uint8";
                                                    }];
                                                    readonly id: 26865;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "6162:6:98";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                        readonly typeString: "type(bytes1)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 26864;
                                                        readonly name: "bytes1";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "6162:6:98";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 26872;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "6162:21:98";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes1";
                                                    readonly typeString: "bytes1";
                                                };
                                            };
                                            readonly src: "6152:31:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        };
                                        readonly id: 26874;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "6152:31:98";
                                    }];
                                };
                            }];
                        };
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 26844;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 26841;
                                readonly name: "i";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26838;
                                readonly src: "6038:1:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly expression: {
                                    readonly id: 26842;
                                    readonly name: "strb";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26823;
                                    readonly src: "6042:4:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly id: 26843;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6047:6:98";
                                readonly memberName: "length";
                                readonly nodeType: "MemberAccess";
                                readonly src: "6042:11:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6038:15:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 26885;
                        readonly initializationExpression: {
                            readonly assignments: readonly [26838];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 26838;
                                readonly mutability: "mutable";
                                readonly name: "i";
                                readonly nameLocation: "6031:1:98";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 26885;
                                readonly src: "6023:9:98";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 26837;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "6023:7:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 26840;
                            readonly initialValue: {
                                readonly hexValue: "30";
                                readonly id: 26839;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6035:1:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "6023:13:98";
                        };
                        readonly loopExpression: {
                            readonly expression: {
                                readonly id: 26846;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "UnaryOperation";
                                readonly operator: "++";
                                readonly prefix: false;
                                readonly src: "6055:3:98";
                                readonly subExpression: {
                                    readonly id: 26845;
                                    readonly name: "i";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26838;
                                    readonly src: "6055:1:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 26847;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "6055:3:98";
                        };
                        readonly nodeType: "ForStatement";
                        readonly src: "6018:240:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 26888;
                                readonly name: "copy";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26830;
                                readonly src: "6281:4:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly id: 26887;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "6274:6:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                    readonly typeString: "type(string storage pointer)";
                                };
                                readonly typeName: {
                                    readonly id: 26886;
                                    readonly name: "string";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "6274:6:98";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 26889;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6274:12:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 26821;
                        readonly id: 26890;
                        readonly nodeType: "Return";
                        readonly src: "6267:19:98";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_toUpper";
                readonly nameLocation: "5851:8:98";
                readonly parameters: {
                    readonly id: 26818;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26817;
                        readonly mutability: "mutable";
                        readonly name: "str";
                        readonly nameLocation: "5874:3:98";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26892;
                        readonly src: "5860:17:98";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 26816;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5860:6:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5859:19:98";
                };
                readonly returnParameters: {
                    readonly id: 26821;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26820;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26892;
                        readonly src: "5901:13:98";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 26819;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5901:6:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5900:15:98";
                };
                readonly scope: 27239;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 27009;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6429:1218:98";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 27008;
                    readonly nodeType: "Block";
                    readonly src: "6541:1106:98";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 26910;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly expression: {
                                            readonly id: 26905;
                                            readonly name: "chain";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 26897;
                                            readonly src: "6561:5:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                                readonly typeString: "struct StdChains.Chain memory";
                                            };
                                        };
                                        readonly id: 26906;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6567:6:98";
                                        readonly memberName: "rpcUrl";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 26558;
                                        readonly src: "6561:12:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        }];
                                        readonly id: 26904;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "6555:5:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                            readonly typeString: "type(bytes storage pointer)";
                                        };
                                        readonly typeName: {
                                            readonly id: 26903;
                                            readonly name: "bytes";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "6555:5:98";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 26907;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6555:19:98";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly id: 26908;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6575:6:98";
                                readonly memberName: "length";
                                readonly nodeType: "MemberAccess";
                                readonly src: "6555:26:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 26909;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6585:1:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "6555:31:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 27005;
                        readonly nodeType: "IfStatement";
                        readonly src: "6551:1068:98";
                        readonly trueBody: {
                            readonly id: 27004;
                            readonly nodeType: "Block";
                            readonly src: "6588:1031:98";
                            readonly statements: readonly [{
                                readonly clauses: readonly [{
                                    readonly block: {
                                        readonly id: 26924;
                                        readonly nodeType: "Block";
                                        readonly src: "6665:60:98";
                                        readonly statements: readonly [{
                                            readonly expression: {
                                                readonly id: 26922;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftHandSide: {
                                                    readonly expression: {
                                                        readonly id: 26918;
                                                        readonly name: "chain";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 26897;
                                                        readonly src: "6683:5:98";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                                            readonly typeString: "struct StdChains.Chain memory";
                                                        };
                                                    };
                                                    readonly id: 26920;
                                                    readonly isConstant: false;
                                                    readonly isLValue: true;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: true;
                                                    readonly memberLocation: "6689:6:98";
                                                    readonly memberName: "rpcUrl";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 26558;
                                                    readonly src: "6683:12:98";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_string_memory_ptr";
                                                        readonly typeString: "string memory";
                                                    };
                                                };
                                                readonly nodeType: "Assignment";
                                                readonly operator: "=";
                                                readonly rightHandSide: {
                                                    readonly id: 26921;
                                                    readonly name: "configRpcUrl";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 26916;
                                                    readonly src: "6698:12:98";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_string_memory_ptr";
                                                        readonly typeString: "string memory";
                                                    };
                                                };
                                                readonly src: "6683:27:98";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string memory";
                                                };
                                            };
                                            readonly id: 26923;
                                            readonly nodeType: "ExpressionStatement";
                                            readonly src: "6683:27:98";
                                        }];
                                    };
                                    readonly errorName: "";
                                    readonly id: 26925;
                                    readonly nodeType: "TryCatchClause";
                                    readonly parameters: {
                                        readonly id: 26917;
                                        readonly nodeType: "ParameterList";
                                        readonly parameters: readonly [{
                                            readonly constant: false;
                                            readonly id: 26916;
                                            readonly mutability: "mutable";
                                            readonly name: "configRpcUrl";
                                            readonly nameLocation: "6651:12:98";
                                            readonly nodeType: "VariableDeclaration";
                                            readonly scope: 26925;
                                            readonly src: "6637:26:98";
                                            readonly stateVariable: false;
                                            readonly storageLocation: "memory";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                readonly typeString: "string";
                                            };
                                            readonly typeName: {
                                                readonly id: 26915;
                                                readonly name: "string";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "6637:6:98";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_storage_ptr";
                                                    readonly typeString: "string";
                                                };
                                            };
                                            readonly visibility: "internal";
                                        }];
                                        readonly src: "6636:28:98";
                                    };
                                    readonly src: "6628:97:98";
                                }, {
                                    readonly block: {
                                        readonly id: 27001;
                                        readonly nodeType: "Block";
                                        readonly src: "6751:858:98";
                                        readonly statements: readonly [{
                                            readonly assignments: readonly [26930];
                                            readonly declarations: readonly [{
                                                readonly constant: false;
                                                readonly id: 26930;
                                                readonly mutability: "mutable";
                                                readonly name: "envName";
                                                readonly nameLocation: "6783:7:98";
                                                readonly nodeType: "VariableDeclaration";
                                                readonly scope: 27001;
                                                readonly src: "6769:21:98";
                                                readonly stateVariable: false;
                                                readonly storageLocation: "memory";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string";
                                                };
                                                readonly typeName: {
                                                    readonly id: 26929;
                                                    readonly name: "string";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6769:6:98";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_string_storage_ptr";
                                                        readonly typeString: "string";
                                                    };
                                                };
                                                readonly visibility: "internal";
                                            }];
                                            readonly id: 26941;
                                            readonly initialValue: {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly arguments: readonly [{
                                                            readonly id: 26936;
                                                            readonly name: "chainAlias";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 26894;
                                                            readonly src: "6826:10:98";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                                readonly typeString: "string memory";
                                                            };
                                                        }];
                                                        readonly expression: {
                                                            readonly argumentTypes: readonly [{
                                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                                readonly typeString: "string memory";
                                                            }];
                                                            readonly id: 26935;
                                                            readonly name: "_toUpper";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 26892;
                                                            readonly src: "6817:8:98";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                                                readonly typeString: "function (string memory) pure returns (string memory)";
                                                            };
                                                        };
                                                        readonly id: 26937;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "6817:20:98";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_string_memory_ptr";
                                                            readonly typeString: "string memory";
                                                        };
                                                    }, {
                                                        readonly hexValue: "5f5250435f55524c";
                                                        readonly id: 26938;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "string";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "6839:10:98";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_stringliteral_2186fe596dea1a615b7a1cb43899fd18c5b434aa29c8de36d4b8fcc67e3d6ad9";
                                                            readonly typeString: "literal_string \"_RPC_URL\"";
                                                        };
                                                        readonly value: "_RPC_URL";
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_string_memory_ptr";
                                                            readonly typeString: "string memory";
                                                        }, {
                                                            readonly typeIdentifier: "t_stringliteral_2186fe596dea1a615b7a1cb43899fd18c5b434aa29c8de36d4b8fcc67e3d6ad9";
                                                            readonly typeString: "literal_string \"_RPC_URL\"";
                                                        }];
                                                        readonly expression: {
                                                            readonly id: 26933;
                                                            readonly name: "abi";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -1;
                                                            readonly src: "6800:3:98";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_magic_abi";
                                                                readonly typeString: "abi";
                                                            };
                                                        };
                                                        readonly id: 26934;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "6804:12:98";
                                                        readonly memberName: "encodePacked";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly src: "6800:16:98";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                            readonly typeString: "function () pure returns (bytes memory)";
                                                        };
                                                    };
                                                    readonly id: 26939;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "6800:50:98";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    }];
                                                    readonly id: 26932;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "6793:6:98";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                                        readonly typeString: "type(string storage pointer)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 26931;
                                                        readonly name: "string";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "6793:6:98";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 26940;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "6793:58:98";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string memory";
                                                };
                                            };
                                            readonly nodeType: "VariableDeclarationStatement";
                                            readonly src: "6769:82:98";
                                        }, {
                                            readonly condition: {
                                                readonly id: 26942;
                                                readonly name: "fallbackToDefaultRpcUrls";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 26575;
                                                readonly src: "6873:24:98";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bool";
                                                    readonly typeString: "bool";
                                                };
                                            };
                                            readonly falseBody: {
                                                readonly id: 26965;
                                                readonly nodeType: "Block";
                                                readonly src: "7006:77:98";
                                                readonly statements: readonly [{
                                                    readonly expression: {
                                                        readonly id: 26963;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly leftHandSide: {
                                                            readonly expression: {
                                                                readonly id: 26956;
                                                                readonly name: "chain";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 26897;
                                                                readonly src: "7028:5:98";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                                                    readonly typeString: "struct StdChains.Chain memory";
                                                                };
                                                            };
                                                            readonly id: 26958;
                                                            readonly isConstant: false;
                                                            readonly isLValue: true;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: true;
                                                            readonly memberLocation: "7034:6:98";
                                                            readonly memberName: "rpcUrl";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly referencedDeclaration: 26558;
                                                            readonly src: "7028:12:98";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                                readonly typeString: "string memory";
                                                            };
                                                        };
                                                        readonly nodeType: "Assignment";
                                                        readonly operator: "=";
                                                        readonly rightHandSide: {
                                                            readonly arguments: readonly [{
                                                                readonly id: 26961;
                                                                readonly name: "envName";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 26930;
                                                                readonly src: "7056:7:98";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                                    readonly typeString: "string memory";
                                                                };
                                                            }];
                                                            readonly expression: {
                                                                readonly argumentTypes: readonly [{
                                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                                    readonly typeString: "string memory";
                                                                }];
                                                                readonly expression: {
                                                                    readonly id: 26959;
                                                                    readonly name: "vm";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: 26541;
                                                                    readonly src: "7043:2:98";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_contract$_VmSafe_$35725";
                                                                        readonly typeString: "contract VmSafe";
                                                                    };
                                                                };
                                                                readonly id: 26960;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly memberLocation: "7046:9:98";
                                                                readonly memberName: "envString";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly referencedDeclaration: 34801;
                                                                readonly src: "7043:12:98";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                                                    readonly typeString: "function (string memory) view external returns (string memory)";
                                                                };
                                                            };
                                                            readonly id: 26962;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly kind: "functionCall";
                                                            readonly lValueRequested: false;
                                                            readonly nameLocations: readonly [];
                                                            readonly names: readonly [];
                                                            readonly nodeType: "FunctionCall";
                                                            readonly src: "7043:21:98";
                                                            readonly tryCall: false;
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                                readonly typeString: "string memory";
                                                            };
                                                        };
                                                        readonly src: "7028:36:98";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_string_memory_ptr";
                                                            readonly typeString: "string memory";
                                                        };
                                                    };
                                                    readonly id: 26964;
                                                    readonly nodeType: "ExpressionStatement";
                                                    readonly src: "7028:36:98";
                                                }];
                                            };
                                            readonly id: 26966;
                                            readonly nodeType: "IfStatement";
                                            readonly src: "6869:214:98";
                                            readonly trueBody: {
                                                readonly id: 26955;
                                                readonly nodeType: "Block";
                                                readonly src: "6899:101:98";
                                                readonly statements: readonly [{
                                                    readonly expression: {
                                                        readonly id: 26953;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly leftHandSide: {
                                                            readonly expression: {
                                                                readonly id: 26943;
                                                                readonly name: "chain";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 26897;
                                                                readonly src: "6921:5:98";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                                                    readonly typeString: "struct StdChains.Chain memory";
                                                                };
                                                            };
                                                            readonly id: 26945;
                                                            readonly isConstant: false;
                                                            readonly isLValue: true;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: true;
                                                            readonly memberLocation: "6927:6:98";
                                                            readonly memberName: "rpcUrl";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly referencedDeclaration: 26558;
                                                            readonly src: "6921:12:98";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                                readonly typeString: "string memory";
                                                            };
                                                        };
                                                        readonly nodeType: "Assignment";
                                                        readonly operator: "=";
                                                        readonly rightHandSide: {
                                                            readonly arguments: readonly [{
                                                                readonly id: 26948;
                                                                readonly name: "envName";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 26930;
                                                                readonly src: "6945:7:98";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                                    readonly typeString: "string memory";
                                                                };
                                                            }, {
                                                                readonly baseExpression: {
                                                                    readonly id: 26949;
                                                                    readonly name: "defaultRpcUrls";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: 26568;
                                                                    readonly src: "6954:14:98";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_string_storage_$";
                                                                        readonly typeString: "mapping(string memory => string storage ref)";
                                                                    };
                                                                };
                                                                readonly id: 26951;
                                                                readonly indexExpression: {
                                                                    readonly id: 26950;
                                                                    readonly name: "chainAlias";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: 26894;
                                                                    readonly src: "6969:10:98";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_string_memory_ptr";
                                                                        readonly typeString: "string memory";
                                                                    };
                                                                };
                                                                readonly isConstant: false;
                                                                readonly isLValue: true;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly nodeType: "IndexAccess";
                                                                readonly src: "6954:26:98";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_string_storage";
                                                                    readonly typeString: "string storage ref";
                                                                };
                                                            }];
                                                            readonly expression: {
                                                                readonly argumentTypes: readonly [{
                                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                                    readonly typeString: "string memory";
                                                                }, {
                                                                    readonly typeIdentifier: "t_string_storage";
                                                                    readonly typeString: "string storage ref";
                                                                }];
                                                                readonly expression: {
                                                                    readonly id: 26946;
                                                                    readonly name: "vm";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: 26541;
                                                                    readonly src: "6936:2:98";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_contract$_VmSafe_$35725";
                                                                        readonly typeString: "contract VmSafe";
                                                                    };
                                                                };
                                                                readonly id: 26947;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly memberLocation: "6939:5:98";
                                                                readonly memberName: "envOr";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly referencedDeclaration: 34932;
                                                                readonly src: "6936:8:98";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                                                    readonly typeString: "function (string memory,string memory) external returns (string memory)";
                                                                };
                                                            };
                                                            readonly id: 26952;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly kind: "functionCall";
                                                            readonly lValueRequested: false;
                                                            readonly nameLocations: readonly [];
                                                            readonly names: readonly [];
                                                            readonly nodeType: "FunctionCall";
                                                            readonly src: "6936:45:98";
                                                            readonly tryCall: false;
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                                readonly typeString: "string memory";
                                                            };
                                                        };
                                                        readonly src: "6921:60:98";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_string_memory_ptr";
                                                            readonly typeString: "string memory";
                                                        };
                                                    };
                                                    readonly id: 26954;
                                                    readonly nodeType: "ExpressionStatement";
                                                    readonly src: "6921:60:98";
                                                }];
                                            };
                                        }, {
                                            readonly assignments: readonly [26968];
                                            readonly declarations: readonly [{
                                                readonly constant: false;
                                                readonly id: 26968;
                                                readonly mutability: "mutable";
                                                readonly name: "notFoundError";
                                                readonly nameLocation: "7175:13:98";
                                                readonly nodeType: "VariableDeclaration";
                                                readonly scope: 27001;
                                                readonly src: "7162:26:98";
                                                readonly stateVariable: false;
                                                readonly storageLocation: "memory";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes";
                                                };
                                                readonly typeName: {
                                                    readonly id: 26967;
                                                    readonly name: "bytes";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "7162:5:98";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_storage_ptr";
                                                        readonly typeString: "bytes";
                                                    };
                                                };
                                                readonly visibility: "internal";
                                            }];
                                            readonly id: 26981;
                                            readonly initialValue: {
                                                readonly arguments: readonly [{
                                                    readonly hexValue: "4368656174436f64654572726f72";
                                                    readonly id: 26971;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "string";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "7235:16:98";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_stringliteral_0bc445031644df03923eb2ab981d332f4354ceab11a95efce72a938e57beaadf";
                                                        readonly typeString: "literal_string \"CheatCodeError\"";
                                                    };
                                                    readonly value: "CheatCodeError";
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly arguments: readonly [{
                                                            readonly hexValue: "696e76616c6964207270632075726c20";
                                                            readonly id: 26976;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: true;
                                                            readonly kind: "string";
                                                            readonly lValueRequested: false;
                                                            readonly nodeType: "Literal";
                                                            readonly src: "7277:18:98";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_stringliteral_2baf3da7b122675739218e635e969f0d1b560b915d35635239551f70fe123eed";
                                                                readonly typeString: "literal_string \"invalid rpc url \"";
                                                            };
                                                            readonly value: "invalid rpc url ";
                                                        }, {
                                                            readonly id: 26977;
                                                            readonly name: "chainAlias";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 26894;
                                                            readonly src: "7297:10:98";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                                readonly typeString: "string memory";
                                                            };
                                                        }];
                                                        readonly expression: {
                                                            readonly argumentTypes: readonly [{
                                                                readonly typeIdentifier: "t_stringliteral_2baf3da7b122675739218e635e969f0d1b560b915d35635239551f70fe123eed";
                                                                readonly typeString: "literal_string \"invalid rpc url \"";
                                                            }, {
                                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                                readonly typeString: "string memory";
                                                            }];
                                                            readonly expression: {
                                                                readonly id: 26974;
                                                                readonly name: "abi";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: -1;
                                                                readonly src: "7260:3:98";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_magic_abi";
                                                                    readonly typeString: "abi";
                                                                };
                                                            };
                                                            readonly id: 26975;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: true;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "7264:12:98";
                                                            readonly memberName: "encodePacked";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly src: "7260:16:98";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                                readonly typeString: "function () pure returns (bytes memory)";
                                                            };
                                                        };
                                                        readonly id: 26978;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "7260:48:98";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                                            readonly typeString: "bytes memory";
                                                        };
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                                            readonly typeString: "bytes memory";
                                                        }];
                                                        readonly id: 26973;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "7253:6:98";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                                            readonly typeString: "type(string storage pointer)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 26972;
                                                            readonly name: "string";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "7253:6:98";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 26979;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "7253:56:98";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_string_memory_ptr";
                                                        readonly typeString: "string memory";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_stringliteral_0bc445031644df03923eb2ab981d332f4354ceab11a95efce72a938e57beaadf";
                                                        readonly typeString: "literal_string \"CheatCodeError\"";
                                                    }, {
                                                        readonly typeIdentifier: "t_string_memory_ptr";
                                                        readonly typeString: "string memory";
                                                    }];
                                                    readonly expression: {
                                                        readonly id: 26969;
                                                        readonly name: "abi";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -1;
                                                        readonly src: "7211:3:98";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_abi";
                                                            readonly typeString: "abi";
                                                        };
                                                    };
                                                    readonly id: 26970;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "7215:19:98";
                                                    readonly memberName: "encodeWithSignature";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "7211:23:98";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_abiencodewithsignature_pure$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                                        readonly typeString: "function (string memory) pure returns (bytes memory)";
                                                    };
                                                };
                                                readonly id: 26980;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "7211:99:98";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            };
                                            readonly nodeType: "VariableDeclarationStatement";
                                            readonly src: "7162:148:98";
                                        }, {
                                            readonly condition: {
                                                readonly commonType: {
                                                    readonly typeIdentifier: "t_bool";
                                                    readonly typeString: "bool";
                                                };
                                                readonly id: 26997;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftExpression: {
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    };
                                                    readonly id: 26988;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly arguments: readonly [{
                                                            readonly id: 26983;
                                                            readonly name: "notFoundError";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 26968;
                                                            readonly src: "7342:13:98";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                                readonly typeString: "bytes memory";
                                                            };
                                                        }];
                                                        readonly expression: {
                                                            readonly argumentTypes: readonly [{
                                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                                readonly typeString: "bytes memory";
                                                            }];
                                                            readonly id: 26982;
                                                            readonly name: "keccak256";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -8;
                                                            readonly src: "7332:9:98";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                                readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                                            };
                                                        };
                                                        readonly id: 26984;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "7332:24:98";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_bytes32";
                                                            readonly typeString: "bytes32";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "!=";
                                                    readonly rightExpression: {
                                                        readonly arguments: readonly [{
                                                            readonly id: 26986;
                                                            readonly name: "err";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 26927;
                                                            readonly src: "7370:3:98";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                                readonly typeString: "bytes memory";
                                                            };
                                                        }];
                                                        readonly expression: {
                                                            readonly argumentTypes: readonly [{
                                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                                readonly typeString: "bytes memory";
                                                            }];
                                                            readonly id: 26985;
                                                            readonly name: "keccak256";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -8;
                                                            readonly src: "7360:9:98";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                                readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                                            };
                                                        };
                                                        readonly id: 26987;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "7360:14:98";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_bytes32";
                                                            readonly typeString: "bytes32";
                                                        };
                                                    };
                                                    readonly src: "7332:42:98";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bool";
                                                        readonly typeString: "bool";
                                                    };
                                                };
                                                readonly nodeType: "BinaryOperation";
                                                readonly operator: "||";
                                                readonly rightExpression: {
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_uint256";
                                                        readonly typeString: "uint256";
                                                    };
                                                    readonly id: 26996;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly expression: {
                                                            readonly arguments: readonly [{
                                                                readonly expression: {
                                                                    readonly id: 26991;
                                                                    readonly name: "chain";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: 26897;
                                                                    readonly src: "7384:5:98";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                                                        readonly typeString: "struct StdChains.Chain memory";
                                                                    };
                                                                };
                                                                readonly id: 26992;
                                                                readonly isConstant: false;
                                                                readonly isLValue: true;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly memberLocation: "7390:6:98";
                                                                readonly memberName: "rpcUrl";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly referencedDeclaration: 26558;
                                                                readonly src: "7384:12:98";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                                    readonly typeString: "string memory";
                                                                };
                                                            }];
                                                            readonly expression: {
                                                                readonly argumentTypes: readonly [{
                                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                                    readonly typeString: "string memory";
                                                                }];
                                                                readonly id: 26990;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: true;
                                                                readonly lValueRequested: false;
                                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                                readonly src: "7378:5:98";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                                    readonly typeString: "type(bytes storage pointer)";
                                                                };
                                                                readonly typeName: {
                                                                    readonly id: 26989;
                                                                    readonly name: "bytes";
                                                                    readonly nodeType: "ElementaryTypeName";
                                                                    readonly src: "7378:5:98";
                                                                    readonly typeDescriptions: {};
                                                                };
                                                            };
                                                            readonly id: 26993;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly kind: "typeConversion";
                                                            readonly lValueRequested: false;
                                                            readonly nameLocations: readonly [];
                                                            readonly names: readonly [];
                                                            readonly nodeType: "FunctionCall";
                                                            readonly src: "7378:19:98";
                                                            readonly tryCall: false;
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                                readonly typeString: "bytes memory";
                                                            };
                                                        };
                                                        readonly id: 26994;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "7398:6:98";
                                                        readonly memberName: "length";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly src: "7378:26:98";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "==";
                                                    readonly rightExpression: {
                                                        readonly hexValue: "30";
                                                        readonly id: 26995;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "7408:1:98";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_rational_0_by_1";
                                                            readonly typeString: "int_const 0";
                                                        };
                                                        readonly value: "0";
                                                    };
                                                    readonly src: "7378:31:98";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bool";
                                                        readonly typeString: "bool";
                                                    };
                                                };
                                                readonly src: "7332:77:98";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bool";
                                                    readonly typeString: "bool";
                                                };
                                            };
                                            readonly id: 27000;
                                            readonly nodeType: "IfStatement";
                                            readonly src: "7328:267:98";
                                            readonly trueBody: {
                                                readonly id: 26999;
                                                readonly nodeType: "Block";
                                                readonly src: "7411:184:98";
                                                readonly statements: readonly [{
                                                    readonly AST: {
                                                        readonly nodeType: "YulBlock";
                                                        readonly src: "7497:80:98";
                                                        readonly statements: readonly [{
                                                            readonly expression: {
                                                                readonly arguments: readonly [{
                                                                    readonly arguments: readonly [{
                                                                        readonly kind: "number";
                                                                        readonly nodeType: "YulLiteral";
                                                                        readonly src: "7534:2:98";
                                                                        readonly type: "";
                                                                        readonly value: "32";
                                                                    }, {
                                                                        readonly name: "err";
                                                                        readonly nodeType: "YulIdentifier";
                                                                        readonly src: "7538:3:98";
                                                                    }];
                                                                    readonly functionName: {
                                                                        readonly name: "add";
                                                                        readonly nodeType: "YulIdentifier";
                                                                        readonly src: "7530:3:98";
                                                                    };
                                                                    readonly nodeType: "YulFunctionCall";
                                                                    readonly src: "7530:12:98";
                                                                }, {
                                                                    readonly arguments: readonly [{
                                                                        readonly name: "err";
                                                                        readonly nodeType: "YulIdentifier";
                                                                        readonly src: "7550:3:98";
                                                                    }];
                                                                    readonly functionName: {
                                                                        readonly name: "mload";
                                                                        readonly nodeType: "YulIdentifier";
                                                                        readonly src: "7544:5:98";
                                                                    };
                                                                    readonly nodeType: "YulFunctionCall";
                                                                    readonly src: "7544:10:98";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "revert";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "7523:6:98";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "7523:32:98";
                                                            };
                                                            readonly nodeType: "YulExpressionStatement";
                                                            readonly src: "7523:32:98";
                                                        }];
                                                    };
                                                    readonly documentation: "@solidity memory-safe-assembly";
                                                    readonly evmVersion: "paris";
                                                    readonly externalReferences: readonly [{
                                                        readonly declaration: 26927;
                                                        readonly isOffset: false;
                                                        readonly isSlot: false;
                                                        readonly src: "7538:3:98";
                                                        readonly valueSize: 1;
                                                    }, {
                                                        readonly declaration: 26927;
                                                        readonly isOffset: false;
                                                        readonly isSlot: false;
                                                        readonly src: "7550:3:98";
                                                        readonly valueSize: 1;
                                                    }];
                                                    readonly id: 26998;
                                                    readonly nodeType: "InlineAssembly";
                                                    readonly src: "7488:89:98";
                                                }];
                                            };
                                        }];
                                    };
                                    readonly errorName: "";
                                    readonly id: 27002;
                                    readonly nodeType: "TryCatchClause";
                                    readonly parameters: {
                                        readonly id: 26928;
                                        readonly nodeType: "ParameterList";
                                        readonly parameters: readonly [{
                                            readonly constant: false;
                                            readonly id: 26927;
                                            readonly mutability: "mutable";
                                            readonly name: "err";
                                            readonly nameLocation: "6746:3:98";
                                            readonly nodeType: "VariableDeclaration";
                                            readonly scope: 27002;
                                            readonly src: "6733:16:98";
                                            readonly stateVariable: false;
                                            readonly storageLocation: "memory";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes";
                                            };
                                            readonly typeName: {
                                                readonly id: 26926;
                                                readonly name: "bytes";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "6733:5:98";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                                    readonly typeString: "bytes";
                                                };
                                            };
                                            readonly visibility: "internal";
                                        }];
                                        readonly src: "6732:18:98";
                                    };
                                    readonly src: "6726:883:98";
                                }];
                                readonly externalCall: {
                                    readonly arguments: readonly [{
                                        readonly id: 26913;
                                        readonly name: "chainAlias";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26894;
                                        readonly src: "6616:10:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        }];
                                        readonly expression: {
                                            readonly id: 26911;
                                            readonly name: "vm";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 26541;
                                            readonly src: "6606:2:98";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_VmSafe_$35725";
                                                readonly typeString: "contract VmSafe";
                                            };
                                        };
                                        readonly id: 26912;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6609:6:98";
                                        readonly memberName: "rpcUrl";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 35686;
                                        readonly src: "6606:9:98";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                            readonly typeString: "function (string memory) view external returns (string memory)";
                                        };
                                    };
                                    readonly id: 26914;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6606:21:98";
                                    readonly tryCall: true;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                };
                                readonly id: 27003;
                                readonly nodeType: "TryStatement";
                                readonly src: "6602:1007:98";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 27006;
                            readonly name: "chain";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 26897;
                            readonly src: "7635:5:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                                readonly typeString: "struct StdChains.Chain memory";
                            };
                        };
                        readonly functionReturnParameters: 26902;
                        readonly id: 27007;
                        readonly nodeType: "Return";
                        readonly src: "7628:12:98";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getChainWithUpdatedRpcUrl";
                readonly nameLocation: "6438:25:98";
                readonly parameters: {
                    readonly id: 26898;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26894;
                        readonly mutability: "mutable";
                        readonly name: "chainAlias";
                        readonly nameLocation: "6478:10:98";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 27009;
                        readonly src: "6464:24:98";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 26893;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6464:6:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26897;
                        readonly mutability: "mutable";
                        readonly name: "chain";
                        readonly nameLocation: "6503:5:98";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 27009;
                        readonly src: "6490:18:98";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                            readonly typeString: "struct StdChains.Chain";
                        };
                        readonly typeName: {
                            readonly id: 26896;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26895;
                                readonly name: "Chain";
                                readonly nameLocations: readonly ["6490:5:98"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 26559;
                                readonly src: "6490:5:98";
                            };
                            readonly referencedDeclaration: 26559;
                            readonly src: "6490:5:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26559_storage_ptr";
                                readonly typeString: "struct StdChains.Chain";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6463:46:98";
                };
                readonly returnParameters: {
                    readonly id: 26902;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26901;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 27009;
                        readonly src: "6527:12:98";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Chain_$26559_memory_ptr";
                            readonly typeString: "struct StdChains.Chain";
                        };
                        readonly typeName: {
                            readonly id: 26900;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26899;
                                readonly name: "Chain";
                                readonly nameLocations: readonly ["6527:5:98"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 26559;
                                readonly src: "6527:5:98";
                            };
                            readonly referencedDeclaration: 26559;
                            readonly src: "6527:5:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26559_storage_ptr";
                                readonly typeString: "struct StdChains.Chain";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6526:14:98";
                };
                readonly scope: 27239;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 27019;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7653:117:98";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 27018;
                    readonly nodeType: "Block";
                    readonly src: "7716:54:98";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 27016;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 27014;
                                readonly name: "fallbackToDefaultRpcUrls";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26575;
                                readonly src: "7726:24:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 27015;
                                readonly name: "useDefault";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27011;
                                readonly src: "7753:10:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "7726:37:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 27017;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "7726:37:98";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setFallbackToDefaultRpcUrls";
                readonly nameLocation: "7662:27:98";
                readonly parameters: {
                    readonly id: 27012;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 27011;
                        readonly mutability: "mutable";
                        readonly name: "useDefault";
                        readonly nameLocation: "7695:10:98";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 27019;
                        readonly src: "7690:15:98";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 27010;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7690:4:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7689:17:98";
                };
                readonly returnParameters: {
                    readonly id: 27013;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7716:0:98";
                };
                readonly scope: 27239;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 27201;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7776:2751:98";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 27200;
                    readonly nodeType: "Block";
                    readonly src: "7815:2712:98";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly id: 27022;
                            readonly name: "stdChainsInitialized";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 26543;
                            readonly src: "7829:20:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 27024;
                        readonly nodeType: "IfStatement";
                        readonly src: "7825:33:98";
                        readonly trueBody: {
                            readonly functionReturnParameters: 27021;
                            readonly id: 27023;
                            readonly nodeType: "Return";
                            readonly src: "7851:7:98";
                        };
                    }, {
                        readonly expression: {
                            readonly id: 27027;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 27025;
                                readonly name: "stdChainsInitialized";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26543;
                                readonly src: "7868:20:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly hexValue: "74727565";
                                readonly id: 27026;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "bool";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "7891:4:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly value: "true";
                            };
                            readonly src: "7868:27:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 27028;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "7868:27:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "616e76696c";
                                readonly id: 27030;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8018:7:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_a3d859b77cebfdf9da3b485434702c5090ff9e91b7b86c670ebb15f8a00eb72b";
                                    readonly typeString: "literal_string \"anvil\"";
                                };
                                readonly value: "anvil";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "416e76696c";
                                    readonly id: 27032;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8037:7:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_1ab1bd2f543bf53e1036abfe292a89809c7285bff756db6e274686afe6fb41b4";
                                        readonly typeString: "literal_string \"Anvil\"";
                                    };
                                    readonly value: "Anvil";
                                }, {
                                    readonly hexValue: "3331333337";
                                    readonly id: 27033;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8046:5:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_31337_by_1";
                                        readonly typeString: "int_const 31337";
                                    };
                                    readonly value: "31337";
                                }, {
                                    readonly hexValue: "687474703a2f2f3132372e302e302e313a38353435";
                                    readonly id: 27034;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8053:23:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_308a18cf3d9de3b161a842ef1e873581d7b16a5d4ea08170e123f95d25f33fe0";
                                        readonly typeString: "literal_string \"http://127.0.0.1:8545\"";
                                    };
                                    readonly value: "http://127.0.0.1:8545";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_1ab1bd2f543bf53e1036abfe292a89809c7285bff756db6e274686afe6fb41b4";
                                        readonly typeString: "literal_string \"Anvil\"";
                                    }, {
                                        readonly typeIdentifier: "t_rational_31337_by_1";
                                        readonly typeString: "int_const 31337";
                                    }, {
                                        readonly typeIdentifier: "t_stringliteral_308a18cf3d9de3b161a842ef1e873581d7b16a5d4ea08170e123f95d25f33fe0";
                                        readonly typeString: "literal_string \"http://127.0.0.1:8545\"";
                                    }];
                                    readonly id: 27031;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26550;
                                    readonly src: "8027:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26550_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27035;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8027:50:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_a3d859b77cebfdf9da3b485434702c5090ff9e91b7b86c670ebb15f8a00eb72b";
                                    readonly typeString: "literal_string \"anvil\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27029;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27238;
                                readonly src: "7992:25:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27036;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7992:86:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27037;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "7992:86:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6d61696e6e6574";
                                readonly id: 27039;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8127:9:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_7beafa94c8bfb8f1c1a43104a34f72c524268aafbfe83bff17485539345c66ff";
                                    readonly typeString: "literal_string \"mainnet\"";
                                };
                                readonly value: "mainnet";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4d61696e6e6574";
                                    readonly id: 27041;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8148:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_8d646f556e5d9d6f1edcf7a39b77f5ac253776eb34efcfd688aacbee518efc26";
                                        readonly typeString: "literal_string \"Mainnet\"";
                                    };
                                    readonly value: "Mainnet";
                                }, {
                                    readonly hexValue: "31";
                                    readonly id: 27042;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8159:1:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1_by_1";
                                        readonly typeString: "int_const 1";
                                    };
                                    readonly value: "1";
                                }, {
                                    readonly hexValue: "68747470733a2f2f6d61696e6e65742e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031";
                                    readonly id: 27043;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8162:63:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_1373fea4c12f646a43ebc6d1ea0e596114d1b5b436526018c86d996c7250aef0";
                                        readonly typeString: "literal_string \"https://mainnet.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001\"";
                                    };
                                    readonly value: "https://mainnet.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_8d646f556e5d9d6f1edcf7a39b77f5ac253776eb34efcfd688aacbee518efc26";
                                        readonly typeString: "literal_string \"Mainnet\"";
                                    }, {
                                        readonly typeIdentifier: "t_rational_1_by_1";
                                        readonly typeString: "int_const 1";
                                    }, {
                                        readonly typeIdentifier: "t_stringliteral_1373fea4c12f646a43ebc6d1ea0e596114d1b5b436526018c86d996c7250aef0";
                                        readonly typeString: "literal_string \"https://mainnet.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001\"";
                                    }];
                                    readonly id: 27040;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26550;
                                    readonly src: "8138:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26550_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27044;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8138:88:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_7beafa94c8bfb8f1c1a43104a34f72c524268aafbfe83bff17485539345c66ff";
                                    readonly typeString: "literal_string \"mainnet\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27038;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27238;
                                readonly src: "8088:25:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27045;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8088:148:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27046;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8088:148:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "676f65726c69";
                                readonly id: 27048;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8285:8:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_e24dd81d18a6354d406364c0fc25f4237534cee10d0c3099c9c2a6aa50d7dd0a";
                                    readonly typeString: "literal_string \"goerli\"";
                                };
                                readonly value: "goerli";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "476f65726c69";
                                    readonly id: 27050;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8305:8:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_736fc55653a3415af498a1309898240f13c5e9e33098fa3cf9e5f2a200d14c3e";
                                        readonly typeString: "literal_string \"Goerli\"";
                                    };
                                    readonly value: "Goerli";
                                }, {
                                    readonly hexValue: "35";
                                    readonly id: 27051;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8315:1:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_5_by_1";
                                        readonly typeString: "int_const 5";
                                    };
                                    readonly value: "5";
                                }, {
                                    readonly hexValue: "68747470733a2f2f676f65726c692e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031";
                                    readonly id: 27052;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8318:62:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_eb46d1ff6486ad38c99bfbe75b668c3e422a65114b7e15a3a7eeca36edb48a42";
                                        readonly typeString: "literal_string \"https://goerli.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001\"";
                                    };
                                    readonly value: "https://goerli.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_736fc55653a3415af498a1309898240f13c5e9e33098fa3cf9e5f2a200d14c3e";
                                        readonly typeString: "literal_string \"Goerli\"";
                                    }, {
                                        readonly typeIdentifier: "t_rational_5_by_1";
                                        readonly typeString: "int_const 5";
                                    }, {
                                        readonly typeIdentifier: "t_stringliteral_eb46d1ff6486ad38c99bfbe75b668c3e422a65114b7e15a3a7eeca36edb48a42";
                                        readonly typeString: "literal_string \"https://goerli.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001\"";
                                    }];
                                    readonly id: 27049;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26550;
                                    readonly src: "8295:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26550_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27053;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8295:86:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_e24dd81d18a6354d406364c0fc25f4237534cee10d0c3099c9c2a6aa50d7dd0a";
                                    readonly typeString: "literal_string \"goerli\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27047;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27238;
                                readonly src: "8246:25:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27054;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8246:145:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27055;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8246:145:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "7365706f6c6961";
                                readonly id: 27057;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8440:9:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_e1f58df0b51f34f4835aba989f0aa2f2e66218cab53207bafd3dbf37270bd39a";
                                    readonly typeString: "literal_string \"sepolia\"";
                                };
                                readonly value: "sepolia";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "5365706f6c6961";
                                    readonly id: 27059;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8461:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_a6b54cd124a84bb64f1808905ed95fb171a09730726f85e60eefcd47a4831b27";
                                        readonly typeString: "literal_string \"Sepolia\"";
                                    };
                                    readonly value: "Sepolia";
                                }, {
                                    readonly hexValue: "3131313535313131";
                                    readonly id: 27060;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8472:8:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_11155111_by_1";
                                        readonly typeString: "int_const 11155111";
                                    };
                                    readonly value: "11155111";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7365706f6c69612e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031";
                                    readonly id: 27061;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8482:63:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_167447379e730a7d89231aec25edd721d4e0b02c818e31467228ef4a7c09810f";
                                        readonly typeString: "literal_string \"https://sepolia.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001\"";
                                    };
                                    readonly value: "https://sepolia.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_a6b54cd124a84bb64f1808905ed95fb171a09730726f85e60eefcd47a4831b27";
                                        readonly typeString: "literal_string \"Sepolia\"";
                                    }, {
                                        readonly typeIdentifier: "t_rational_11155111_by_1";
                                        readonly typeString: "int_const 11155111";
                                    }, {
                                        readonly typeIdentifier: "t_stringliteral_167447379e730a7d89231aec25edd721d4e0b02c818e31467228ef4a7c09810f";
                                        readonly typeString: "literal_string \"https://sepolia.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001\"";
                                    }];
                                    readonly id: 27058;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26550;
                                    readonly src: "8451:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26550_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27062;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8451:95:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_e1f58df0b51f34f4835aba989f0aa2f2e66218cab53207bafd3dbf37270bd39a";
                                    readonly typeString: "literal_string \"sepolia\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27056;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27238;
                                readonly src: "8401:25:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27063;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8401:155:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27064;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8401:155:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6f7074696d69736d";
                                readonly id: 27066;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8592:10:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_09d0f27659ee556a8134fa56941e42400e672aecc2d4cfc61cdb0fcea4590e05";
                                    readonly typeString: "literal_string \"optimism\"";
                                };
                                readonly value: "optimism";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4f7074696d69736d";
                                    readonly id: 27068;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8614:10:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_f997187c3c319ef9e33fa05f852d1612b66e309dc48d97a4b6b39832090a3bec";
                                        readonly typeString: "literal_string \"Optimism\"";
                                    };
                                    readonly value: "Optimism";
                                }, {
                                    readonly hexValue: "3130";
                                    readonly id: 27069;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8626:2:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_10_by_1";
                                        readonly typeString: "int_const 10";
                                    };
                                    readonly value: "10";
                                }, {
                                    readonly hexValue: "68747470733a2f2f6d61696e6e65742e6f7074696d69736d2e696f";
                                    readonly id: 27070;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8630:29:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_38b9211512154272cdc8d9677b3720aef06041b8d31b5e68a6ffc7a4bb22d93e";
                                        readonly typeString: "literal_string \"https://mainnet.optimism.io\"";
                                    };
                                    readonly value: "https://mainnet.optimism.io";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_f997187c3c319ef9e33fa05f852d1612b66e309dc48d97a4b6b39832090a3bec";
                                        readonly typeString: "literal_string \"Optimism\"";
                                    }, {
                                        readonly typeIdentifier: "t_rational_10_by_1";
                                        readonly typeString: "int_const 10";
                                    }, {
                                        readonly typeIdentifier: "t_stringliteral_38b9211512154272cdc8d9677b3720aef06041b8d31b5e68a6ffc7a4bb22d93e";
                                        readonly typeString: "literal_string \"https://mainnet.optimism.io\"";
                                    }];
                                    readonly id: 27067;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26550;
                                    readonly src: "8604:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26550_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27071;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8604:56:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_09d0f27659ee556a8134fa56941e42400e672aecc2d4cfc61cdb0fcea4590e05";
                                    readonly typeString: "literal_string \"optimism\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27065;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27238;
                                readonly src: "8566:25:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27072;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8566:95:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27073;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8566:95:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6f7074696d69736d5f676f65726c69";
                                readonly id: 27075;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8697:17:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_ecf3b2cc678a701bfbf2329b12e6edf723c3043a32339c2eea2efb7c9533c09c";
                                    readonly typeString: "literal_string \"optimism_goerli\"";
                                };
                                readonly value: "optimism_goerli";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4f7074696d69736d20476f65726c69";
                                    readonly id: 27077;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8726:17:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_6271e061a2d4ce1b6e267081a40c4dca996efe738d092d650bcfa23669d2fd24";
                                        readonly typeString: "literal_string \"Optimism Goerli\"";
                                    };
                                    readonly value: "Optimism Goerli";
                                }, {
                                    readonly hexValue: "343230";
                                    readonly id: 27078;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8745:3:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_420_by_1";
                                        readonly typeString: "int_const 420";
                                    };
                                    readonly value: "420";
                                }, {
                                    readonly hexValue: "68747470733a2f2f676f65726c692e6f7074696d69736d2e696f";
                                    readonly id: 27079;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8750:28:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_ef3dbe59ba72d73e51c1959c67c0485880270dce59b4642a5dff6497ea5e55ad";
                                        readonly typeString: "literal_string \"https://goerli.optimism.io\"";
                                    };
                                    readonly value: "https://goerli.optimism.io";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_6271e061a2d4ce1b6e267081a40c4dca996efe738d092d650bcfa23669d2fd24";
                                        readonly typeString: "literal_string \"Optimism Goerli\"";
                                    }, {
                                        readonly typeIdentifier: "t_rational_420_by_1";
                                        readonly typeString: "int_const 420";
                                    }, {
                                        readonly typeIdentifier: "t_stringliteral_ef3dbe59ba72d73e51c1959c67c0485880270dce59b4642a5dff6497ea5e55ad";
                                        readonly typeString: "literal_string \"https://goerli.optimism.io\"";
                                    }];
                                    readonly id: 27076;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26550;
                                    readonly src: "8716:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26550_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27080;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8716:63:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_ecf3b2cc678a701bfbf2329b12e6edf723c3043a32339c2eea2efb7c9533c09c";
                                    readonly typeString: "literal_string \"optimism_goerli\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27074;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27238;
                                readonly src: "8671:25:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27081;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8671:109:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27082;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8671:109:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "617262697472756d5f6f6e65";
                                readonly id: 27084;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8816:14:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_e4b44cea7839e0679ac5072602932da9b25ebfb3a9ac42625d9c583a7b6b2eb4";
                                    readonly typeString: "literal_string \"arbitrum_one\"";
                                };
                                readonly value: "arbitrum_one";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "417262697472756d204f6e65";
                                    readonly id: 27086;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8842:14:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_9e42b1aebd5463751aea2c5f6ee37505334a82b4085315a5f4b8b0f81d3b9004";
                                        readonly typeString: "literal_string \"Arbitrum One\"";
                                    };
                                    readonly value: "Arbitrum One";
                                }, {
                                    readonly hexValue: "3432313631";
                                    readonly id: 27087;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8858:5:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_42161_by_1";
                                        readonly typeString: "int_const 42161";
                                    };
                                    readonly value: "42161";
                                }, {
                                    readonly hexValue: "68747470733a2f2f617262312e617262697472756d2e696f2f727063";
                                    readonly id: 27088;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8865:30:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_ff28c1a1bf3c117d5956efad529d0ee22dcfc0fe5cbf5a03e0bdfcc3c6cac126";
                                        readonly typeString: "literal_string \"https://arb1.arbitrum.io/rpc\"";
                                    };
                                    readonly value: "https://arb1.arbitrum.io/rpc";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_9e42b1aebd5463751aea2c5f6ee37505334a82b4085315a5f4b8b0f81d3b9004";
                                        readonly typeString: "literal_string \"Arbitrum One\"";
                                    }, {
                                        readonly typeIdentifier: "t_rational_42161_by_1";
                                        readonly typeString: "int_const 42161";
                                    }, {
                                        readonly typeIdentifier: "t_stringliteral_ff28c1a1bf3c117d5956efad529d0ee22dcfc0fe5cbf5a03e0bdfcc3c6cac126";
                                        readonly typeString: "literal_string \"https://arb1.arbitrum.io/rpc\"";
                                    }];
                                    readonly id: 27085;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26550;
                                    readonly src: "8832:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26550_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27089;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8832:64:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_e4b44cea7839e0679ac5072602932da9b25ebfb3a9ac42625d9c583a7b6b2eb4";
                                    readonly typeString: "literal_string \"arbitrum_one\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27083;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27238;
                                readonly src: "8790:25:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27090;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8790:107:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27091;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8790:107:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "617262697472756d5f6f6e655f676f65726c69";
                                readonly id: 27093;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8946:21:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_9c5068a3a5cdbd747f13200fdd6f590995f99bde231a5dcfa62a5f92af1dc3d4";
                                    readonly typeString: "literal_string \"arbitrum_one_goerli\"";
                                };
                                readonly value: "arbitrum_one_goerli";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "417262697472756d204f6e6520476f65726c69";
                                    readonly id: 27095;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8979:21:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_57f7b6894161eb541e81676f15adf1e65eee36bdcfd592f252d22d4394480f21";
                                        readonly typeString: "literal_string \"Arbitrum One Goerli\"";
                                    };
                                    readonly value: "Arbitrum One Goerli";
                                }, {
                                    readonly hexValue: "343231363133";
                                    readonly id: 27096;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9002:6:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_421613_by_1";
                                        readonly typeString: "int_const 421613";
                                    };
                                    readonly value: "421613";
                                }, {
                                    readonly hexValue: "68747470733a2f2f676f65726c692d726f6c6c75702e617262697472756d2e696f2f727063";
                                    readonly id: 27097;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9010:39:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_d65fa49ed6bf0763184aace821262295f8ad23c20b74cd1f836fe5e06f5dd8ea";
                                        readonly typeString: "literal_string \"https://goerli-rollup.arbitrum.io/rpc\"";
                                    };
                                    readonly value: "https://goerli-rollup.arbitrum.io/rpc";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_57f7b6894161eb541e81676f15adf1e65eee36bdcfd592f252d22d4394480f21";
                                        readonly typeString: "literal_string \"Arbitrum One Goerli\"";
                                    }, {
                                        readonly typeIdentifier: "t_rational_421613_by_1";
                                        readonly typeString: "int_const 421613";
                                    }, {
                                        readonly typeIdentifier: "t_stringliteral_d65fa49ed6bf0763184aace821262295f8ad23c20b74cd1f836fe5e06f5dd8ea";
                                        readonly typeString: "literal_string \"https://goerli-rollup.arbitrum.io/rpc\"";
                                    }];
                                    readonly id: 27094;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26550;
                                    readonly src: "8969:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26550_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27098;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8969:81:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_9c5068a3a5cdbd747f13200fdd6f590995f99bde231a5dcfa62a5f92af1dc3d4";
                                    readonly typeString: "literal_string \"arbitrum_one_goerli\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27092;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27238;
                                readonly src: "8907:25:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27099;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8907:153:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27100;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8907:153:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "617262697472756d5f6e6f7661";
                                readonly id: 27102;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9096:15:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_9338ed1403277416ebb39d4e992ebf5c49e6dded5ec79963ea5fc261cbd7fdac";
                                    readonly typeString: "literal_string \"arbitrum_nova\"";
                                };
                                readonly value: "arbitrum_nova";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "417262697472756d204e6f7661";
                                    readonly id: 27104;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9123:15:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_25c77b7679bf463420c39c7728b9f65b6a8f1ae05b3335eb9e394b1b61bf8f21";
                                        readonly typeString: "literal_string \"Arbitrum Nova\"";
                                    };
                                    readonly value: "Arbitrum Nova";
                                }, {
                                    readonly hexValue: "3432313730";
                                    readonly id: 27105;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9140:5:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_42170_by_1";
                                        readonly typeString: "int_const 42170";
                                    };
                                    readonly value: "42170";
                                }, {
                                    readonly hexValue: "68747470733a2f2f6e6f76612e617262697472756d2e696f2f727063";
                                    readonly id: 27106;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9147:30:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_a77f0a686c95785c75ada33247e30dc9ac80330a7f8eb521bebdf48f492ee4ac";
                                        readonly typeString: "literal_string \"https://nova.arbitrum.io/rpc\"";
                                    };
                                    readonly value: "https://nova.arbitrum.io/rpc";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_25c77b7679bf463420c39c7728b9f65b6a8f1ae05b3335eb9e394b1b61bf8f21";
                                        readonly typeString: "literal_string \"Arbitrum Nova\"";
                                    }, {
                                        readonly typeIdentifier: "t_rational_42170_by_1";
                                        readonly typeString: "int_const 42170";
                                    }, {
                                        readonly typeIdentifier: "t_stringliteral_a77f0a686c95785c75ada33247e30dc9ac80330a7f8eb521bebdf48f492ee4ac";
                                        readonly typeString: "literal_string \"https://nova.arbitrum.io/rpc\"";
                                    }];
                                    readonly id: 27103;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26550;
                                    readonly src: "9113:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26550_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27107;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9113:65:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_9338ed1403277416ebb39d4e992ebf5c49e6dded5ec79963ea5fc261cbd7fdac";
                                    readonly typeString: "literal_string \"arbitrum_nova\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27101;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27238;
                                readonly src: "9070:25:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27108;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9070:109:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27109;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9070:109:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "706f6c79676f6e";
                                readonly id: 27111;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9215:9:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_ac63fa1fe369e75c38d62f0f4d465b48b3cd5159f0fb416332899402031d1408";
                                    readonly typeString: "literal_string \"polygon\"";
                                };
                                readonly value: "polygon";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "506f6c79676f6e";
                                    readonly id: 27113;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9236:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_890af8db8ca1aa1e915857edbc2717639ebd8a22c786f9e0e776d6a1aacb5e71";
                                        readonly typeString: "literal_string \"Polygon\"";
                                    };
                                    readonly value: "Polygon";
                                }, {
                                    readonly hexValue: "313337";
                                    readonly id: 27114;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9247:3:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_137_by_1";
                                        readonly typeString: "int_const 137";
                                    };
                                    readonly value: "137";
                                }, {
                                    readonly hexValue: "68747470733a2f2f706f6c79676f6e2d7270632e636f6d";
                                    readonly id: 27115;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9252:25:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_fda46ab670b83929623b4aa9bcfa97ff7b7376fa90a24a450a8561482232c5c0";
                                        readonly typeString: "literal_string \"https://polygon-rpc.com\"";
                                    };
                                    readonly value: "https://polygon-rpc.com";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_890af8db8ca1aa1e915857edbc2717639ebd8a22c786f9e0e776d6a1aacb5e71";
                                        readonly typeString: "literal_string \"Polygon\"";
                                    }, {
                                        readonly typeIdentifier: "t_rational_137_by_1";
                                        readonly typeString: "int_const 137";
                                    }, {
                                        readonly typeIdentifier: "t_stringliteral_fda46ab670b83929623b4aa9bcfa97ff7b7376fa90a24a450a8561482232c5c0";
                                        readonly typeString: "literal_string \"https://polygon-rpc.com\"";
                                    }];
                                    readonly id: 27112;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26550;
                                    readonly src: "9226:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26550_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27116;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9226:52:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_ac63fa1fe369e75c38d62f0f4d465b48b3cd5159f0fb416332899402031d1408";
                                    readonly typeString: "literal_string \"polygon\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27110;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27238;
                                readonly src: "9189:25:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27117;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9189:90:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27118;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9189:90:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "706f6c79676f6e5f6d756d626169";
                                readonly id: 27120;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9328:16:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_a7308364e169f5f44de3933205a00d3632b7366702c91dff3452b4dbf6ed70f0";
                                    readonly typeString: "literal_string \"polygon_mumbai\"";
                                };
                                readonly value: "polygon_mumbai";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "506f6c79676f6e204d756d626169";
                                    readonly id: 27122;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9356:16:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_173b0df64039e25119e26da4408dbd53da69bf06543516209ecc66f21e0c9725";
                                        readonly typeString: "literal_string \"Polygon Mumbai\"";
                                    };
                                    readonly value: "Polygon Mumbai";
                                }, {
                                    readonly hexValue: "3830303031";
                                    readonly id: 27123;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9374:5:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_80001_by_1";
                                        readonly typeString: "int_const 80001";
                                    };
                                    readonly value: "80001";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7270632d6d756d6261692e6d61746963766967696c2e636f6d";
                                    readonly id: 27124;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9381:35:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_73b526a6131ddfd959c21485254bd24a6ab94de746e87b78a515c1d42c7ee121";
                                        readonly typeString: "literal_string \"https://rpc-mumbai.maticvigil.com\"";
                                    };
                                    readonly value: "https://rpc-mumbai.maticvigil.com";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_173b0df64039e25119e26da4408dbd53da69bf06543516209ecc66f21e0c9725";
                                        readonly typeString: "literal_string \"Polygon Mumbai\"";
                                    }, {
                                        readonly typeIdentifier: "t_rational_80001_by_1";
                                        readonly typeString: "int_const 80001";
                                    }, {
                                        readonly typeIdentifier: "t_stringliteral_73b526a6131ddfd959c21485254bd24a6ab94de746e87b78a515c1d42c7ee121";
                                        readonly typeString: "literal_string \"https://rpc-mumbai.maticvigil.com\"";
                                    }];
                                    readonly id: 27121;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26550;
                                    readonly src: "9346:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26550_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27125;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9346:71:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_a7308364e169f5f44de3933205a00d3632b7366702c91dff3452b4dbf6ed70f0";
                                    readonly typeString: "literal_string \"polygon_mumbai\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27119;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27238;
                                readonly src: "9289:25:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27126;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9289:138:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27127;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9289:138:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6176616c616e636865";
                                readonly id: 27129;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9463:11:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_6e8b0d92516ee4289145e3b78cea58daac177b1c618beeedbc6cdabd388a6e55";
                                    readonly typeString: "literal_string \"avalanche\"";
                                };
                                readonly value: "avalanche";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4176616c616e636865";
                                    readonly id: 27131;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9486:11:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_6585177c3aba6cb7ffc0a37e831a958c4ee9278e4c62c7bdad7175ca09883c40";
                                        readonly typeString: "literal_string \"Avalanche\"";
                                    };
                                    readonly value: "Avalanche";
                                }, {
                                    readonly hexValue: "3433313134";
                                    readonly id: 27132;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9499:5:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_43114_by_1";
                                        readonly typeString: "int_const 43114";
                                    };
                                    readonly value: "43114";
                                }, {
                                    readonly hexValue: "68747470733a2f2f6170692e617661782e6e6574776f726b2f6578742f62632f432f727063";
                                    readonly id: 27133;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9506:39:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_429365eac47ed6b261c38927d854e528b743fc5a678b1b4ba631c511f305886a";
                                        readonly typeString: "literal_string \"https://api.avax.network/ext/bc/C/rpc\"";
                                    };
                                    readonly value: "https://api.avax.network/ext/bc/C/rpc";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_6585177c3aba6cb7ffc0a37e831a958c4ee9278e4c62c7bdad7175ca09883c40";
                                        readonly typeString: "literal_string \"Avalanche\"";
                                    }, {
                                        readonly typeIdentifier: "t_rational_43114_by_1";
                                        readonly typeString: "int_const 43114";
                                    }, {
                                        readonly typeIdentifier: "t_stringliteral_429365eac47ed6b261c38927d854e528b743fc5a678b1b4ba631c511f305886a";
                                        readonly typeString: "literal_string \"https://api.avax.network/ext/bc/C/rpc\"";
                                    }];
                                    readonly id: 27130;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26550;
                                    readonly src: "9476:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26550_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27134;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9476:70:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_6e8b0d92516ee4289145e3b78cea58daac177b1c618beeedbc6cdabd388a6e55";
                                    readonly typeString: "literal_string \"avalanche\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27128;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27238;
                                readonly src: "9437:25:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27135;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9437:110:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27136;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9437:110:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6176616c616e6368655f66756a69";
                                readonly id: 27138;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9596:16:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_a1920d2f80060f1c83444622c7eb5adf4484bed8a537b8d13eae53bd800aa692";
                                    readonly typeString: "literal_string \"avalanche_fuji\"";
                                };
                                readonly value: "avalanche_fuji";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4176616c616e6368652046756a69";
                                    readonly id: 27140;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9624:16:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_522b176494c651b1a4c5779e66ed19f885df62891abfb18fd5e45b69bdabe11b";
                                        readonly typeString: "literal_string \"Avalanche Fuji\"";
                                    };
                                    readonly value: "Avalanche Fuji";
                                }, {
                                    readonly hexValue: "3433313133";
                                    readonly id: 27141;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9642:5:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_43113_by_1";
                                        readonly typeString: "int_const 43113";
                                    };
                                    readonly value: "43113";
                                }, {
                                    readonly hexValue: "68747470733a2f2f6170692e617661782d746573742e6e6574776f726b2f6578742f62632f432f727063";
                                    readonly id: 27142;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9649:44:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_d6621ea822eabf6c190358ea82de0c52d3503dcce8117b3366a8a3bd96eb422d";
                                        readonly typeString: "literal_string \"https://api.avax-test.network/ext/bc/C/rpc\"";
                                    };
                                    readonly value: "https://api.avax-test.network/ext/bc/C/rpc";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_522b176494c651b1a4c5779e66ed19f885df62891abfb18fd5e45b69bdabe11b";
                                        readonly typeString: "literal_string \"Avalanche Fuji\"";
                                    }, {
                                        readonly typeIdentifier: "t_rational_43113_by_1";
                                        readonly typeString: "int_const 43113";
                                    }, {
                                        readonly typeIdentifier: "t_stringliteral_d6621ea822eabf6c190358ea82de0c52d3503dcce8117b3366a8a3bd96eb422d";
                                        readonly typeString: "literal_string \"https://api.avax-test.network/ext/bc/C/rpc\"";
                                    }];
                                    readonly id: 27139;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26550;
                                    readonly src: "9614:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26550_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27143;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9614:80:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_a1920d2f80060f1c83444622c7eb5adf4484bed8a537b8d13eae53bd800aa692";
                                    readonly typeString: "literal_string \"avalanche_fuji\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27137;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27238;
                                readonly src: "9557:25:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27144;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9557:147:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27145;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9557:147:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "626e625f736d6172745f636861696e";
                                readonly id: 27147;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9753:17:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_fa8b17ae9aa26749f5dc3a3bb333e0019db0c257f3541e870f73bb48b574361e";
                                    readonly typeString: "literal_string \"bnb_smart_chain\"";
                                };
                                readonly value: "bnb_smart_chain";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "424e4220536d61727420436861696e";
                                    readonly id: 27149;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9782:17:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_3606544ee65d30d7c7f7d6a1f6618e0d836299fa5b85b88d71a59535c6a1550f";
                                        readonly typeString: "literal_string \"BNB Smart Chain\"";
                                    };
                                    readonly value: "BNB Smart Chain";
                                }, {
                                    readonly hexValue: "3536";
                                    readonly id: 27150;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9801:2:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_56_by_1";
                                        readonly typeString: "int_const 56";
                                    };
                                    readonly value: "56";
                                }, {
                                    readonly hexValue: "68747470733a2f2f6273632d6461746173656564312e62696e616e63652e6f7267";
                                    readonly id: 27151;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9805:35:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_e2b4215bd50ab260c8c9f18e36ea07b1f952450853bcf024123d5767a40d4719";
                                        readonly typeString: "literal_string \"https://bsc-dataseed1.binance.org\"";
                                    };
                                    readonly value: "https://bsc-dataseed1.binance.org";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_3606544ee65d30d7c7f7d6a1f6618e0d836299fa5b85b88d71a59535c6a1550f";
                                        readonly typeString: "literal_string \"BNB Smart Chain\"";
                                    }, {
                                        readonly typeIdentifier: "t_rational_56_by_1";
                                        readonly typeString: "int_const 56";
                                    }, {
                                        readonly typeIdentifier: "t_stringliteral_e2b4215bd50ab260c8c9f18e36ea07b1f952450853bcf024123d5767a40d4719";
                                        readonly typeString: "literal_string \"https://bsc-dataseed1.binance.org\"";
                                    }];
                                    readonly id: 27148;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26550;
                                    readonly src: "9772:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26550_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27152;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9772:69:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_fa8b17ae9aa26749f5dc3a3bb333e0019db0c257f3541e870f73bb48b574361e";
                                    readonly typeString: "literal_string \"bnb_smart_chain\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27146;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27238;
                                readonly src: "9714:25:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27153;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9714:137:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27154;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9714:137:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "626e625f736d6172745f636861696e5f746573746e6574";
                                readonly id: 27156;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9900:25:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_1813de9892ab9db3d0c3b0c3eed9c8b820fe0c7e205bed860e6e89f4d7f75f29";
                                    readonly typeString: "literal_string \"bnb_smart_chain_testnet\"";
                                };
                                readonly value: "bnb_smart_chain_testnet";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "424e4220536d61727420436861696e20546573746e6574";
                                    readonly id: 27158;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9949:25:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_3b1d88342c4ab079c9a8243ef8dfeb0bb41e1da5dc9fe62ca728dfe4ea21092c";
                                        readonly typeString: "literal_string \"BNB Smart Chain Testnet\"";
                                    };
                                    readonly value: "BNB Smart Chain Testnet";
                                }, {
                                    readonly hexValue: "3937";
                                    readonly id: 27159;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9976:2:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_97_by_1";
                                        readonly typeString: "int_const 97";
                                    };
                                    readonly value: "97";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7270632e616e6b722e636f6d2f6273635f746573746e65745f63686170656c";
                                    readonly id: 27160;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9980:41:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_6660930de41ed298fb6a2348f33b08e5736a3823e6ffb86942097b237e075960";
                                        readonly typeString: "literal_string \"https://rpc.ankr.com/bsc_testnet_chapel\"";
                                    };
                                    readonly value: "https://rpc.ankr.com/bsc_testnet_chapel";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_3b1d88342c4ab079c9a8243ef8dfeb0bb41e1da5dc9fe62ca728dfe4ea21092c";
                                        readonly typeString: "literal_string \"BNB Smart Chain Testnet\"";
                                    }, {
                                        readonly typeIdentifier: "t_rational_97_by_1";
                                        readonly typeString: "int_const 97";
                                    }, {
                                        readonly typeIdentifier: "t_stringliteral_6660930de41ed298fb6a2348f33b08e5736a3823e6ffb86942097b237e075960";
                                        readonly typeString: "literal_string \"https://rpc.ankr.com/bsc_testnet_chapel\"";
                                    }];
                                    readonly id: 27157;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26550;
                                    readonly src: "9939:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26550_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27161;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9939:83:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_1813de9892ab9db3d0c3b0c3eed9c8b820fe0c7e205bed860e6e89f4d7f75f29";
                                    readonly typeString: "literal_string \"bnb_smart_chain_testnet\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27155;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27238;
                                readonly src: "9861:25:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27162;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9861:171:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27163;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9861:171:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "676e6f7369735f636861696e";
                                readonly id: 27165;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10068:14:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_847b7ed4df59b2dfcdba377bf4ac481c502926169e9af948ee2dd45c0e6df595";
                                    readonly typeString: "literal_string \"gnosis_chain\"";
                                };
                                readonly value: "gnosis_chain";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "476e6f73697320436861696e";
                                    readonly id: 27167;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10094:14:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_9bfc6ae4a1f5d8ea33b4f631c2f7dfbfa7d613af42ef38137c06d4cd03619b02";
                                        readonly typeString: "literal_string \"Gnosis Chain\"";
                                    };
                                    readonly value: "Gnosis Chain";
                                }, {
                                    readonly hexValue: "313030";
                                    readonly id: 27168;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10110:3:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_100_by_1";
                                        readonly typeString: "int_const 100";
                                    };
                                    readonly value: "100";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7270632e676e6f736973636861696e2e636f6d";
                                    readonly id: 27169;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10115:29:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_127e02590d58e22164456f76136047039faabc2ca27eb41939081a3e775b50df";
                                        readonly typeString: "literal_string \"https://rpc.gnosischain.com\"";
                                    };
                                    readonly value: "https://rpc.gnosischain.com";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_9bfc6ae4a1f5d8ea33b4f631c2f7dfbfa7d613af42ef38137c06d4cd03619b02";
                                        readonly typeString: "literal_string \"Gnosis Chain\"";
                                    }, {
                                        readonly typeIdentifier: "t_rational_100_by_1";
                                        readonly typeString: "int_const 100";
                                    }, {
                                        readonly typeIdentifier: "t_stringliteral_127e02590d58e22164456f76136047039faabc2ca27eb41939081a3e775b50df";
                                        readonly typeString: "literal_string \"https://rpc.gnosischain.com\"";
                                    }];
                                    readonly id: 27166;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26550;
                                    readonly src: "10084:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26550_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27170;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10084:61:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_847b7ed4df59b2dfcdba377bf4ac481c502926169e9af948ee2dd45c0e6df595";
                                    readonly typeString: "literal_string \"gnosis_chain\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27164;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27238;
                                readonly src: "10042:25:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27171;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10042:104:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27172;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10042:104:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6d6f6f6e6265616d";
                                readonly id: 27174;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10182:10:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_26aaddd9933ae745bc6e39b5e8962c0d0eef85597e0bdcb35ce7e0d96b84735d";
                                    readonly typeString: "literal_string \"moonbeam\"";
                                };
                                readonly value: "moonbeam";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4d6f6f6e6265616d";
                                    readonly id: 27176;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10204:10:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_99a49606e97aa9d58789783bd4cdfcc3ab4072167b449d1e303cb1135216531b";
                                        readonly typeString: "literal_string \"Moonbeam\"";
                                    };
                                    readonly value: "Moonbeam";
                                }, {
                                    readonly hexValue: "31323834";
                                    readonly id: 27177;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10216:4:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1284_by_1";
                                        readonly typeString: "int_const 1284";
                                    };
                                    readonly value: "1284";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7270632e6170692e6d6f6f6e6265616d2e6e6574776f726b";
                                    readonly id: 27178;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10222:34:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_cf5d37a68a82777d3f0adcdf64b39d98f1e820688e4ced698cd753bbd1e32191";
                                        readonly typeString: "literal_string \"https://rpc.api.moonbeam.network\"";
                                    };
                                    readonly value: "https://rpc.api.moonbeam.network";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_99a49606e97aa9d58789783bd4cdfcc3ab4072167b449d1e303cb1135216531b";
                                        readonly typeString: "literal_string \"Moonbeam\"";
                                    }, {
                                        readonly typeIdentifier: "t_rational_1284_by_1";
                                        readonly typeString: "int_const 1284";
                                    }, {
                                        readonly typeIdentifier: "t_stringliteral_cf5d37a68a82777d3f0adcdf64b39d98f1e820688e4ced698cd753bbd1e32191";
                                        readonly typeString: "literal_string \"https://rpc.api.moonbeam.network\"";
                                    }];
                                    readonly id: 27175;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26550;
                                    readonly src: "10194:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26550_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27179;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10194:63:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_26aaddd9933ae745bc6e39b5e8962c0d0eef85597e0bdcb35ce7e0d96b84735d";
                                    readonly typeString: "literal_string \"moonbeam\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27173;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27238;
                                readonly src: "10156:25:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27180;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10156:102:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27181;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10156:102:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6d6f6f6e7269766572";
                                readonly id: 27183;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10307:11:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_2eb4cae4af32e190d8881d6d0a59016ff55092d3a70bcf6b321432516acfd74a";
                                    readonly typeString: "literal_string \"moonriver\"";
                                };
                                readonly value: "moonriver";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4d6f6f6e7269766572";
                                    readonly id: 27185;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10330:11:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_65d5ad77d0dd38eb7219d1087db2cb9c2440e3f70be3ee1567aa2329d21dad8a";
                                        readonly typeString: "literal_string \"Moonriver\"";
                                    };
                                    readonly value: "Moonriver";
                                }, {
                                    readonly hexValue: "31323835";
                                    readonly id: 27186;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10343:4:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1285_by_1";
                                        readonly typeString: "int_const 1285";
                                    };
                                    readonly value: "1285";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7270632e6170692e6d6f6f6e72697665722e6d6f6f6e6265616d2e6e6574776f726b";
                                    readonly id: 27187;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10349:44:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_cdf0715ef9b420dea4501d55a4c023de5bc6e2be267c3e3ec8345021a77f3e46";
                                        readonly typeString: "literal_string \"https://rpc.api.moonriver.moonbeam.network\"";
                                    };
                                    readonly value: "https://rpc.api.moonriver.moonbeam.network";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_65d5ad77d0dd38eb7219d1087db2cb9c2440e3f70be3ee1567aa2329d21dad8a";
                                        readonly typeString: "literal_string \"Moonriver\"";
                                    }, {
                                        readonly typeIdentifier: "t_rational_1285_by_1";
                                        readonly typeString: "int_const 1285";
                                    }, {
                                        readonly typeIdentifier: "t_stringliteral_cdf0715ef9b420dea4501d55a4c023de5bc6e2be267c3e3ec8345021a77f3e46";
                                        readonly typeString: "literal_string \"https://rpc.api.moonriver.moonbeam.network\"";
                                    }];
                                    readonly id: 27184;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26550;
                                    readonly src: "10320:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26550_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27188;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10320:74:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_2eb4cae4af32e190d8881d6d0a59016ff55092d3a70bcf6b321432516acfd74a";
                                    readonly typeString: "literal_string \"moonriver\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27182;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27238;
                                readonly src: "10268:25:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27189;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10268:136:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27190;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10268:136:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6d6f6f6e62617365";
                                readonly id: 27192;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10440:10:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_ccd05eb377a4954d8471e48341881dadc4d2a36094f09ce309d35b3b6204f44e";
                                    readonly typeString: "literal_string \"moonbase\"";
                                };
                                readonly value: "moonbase";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4d6f6f6e62617365";
                                    readonly id: 27194;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10462:10:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_6f3c53069778183912da77a05fe67c3d6edb208ffdf1ca0161d51543035e3c68";
                                        readonly typeString: "literal_string \"Moonbase\"";
                                    };
                                    readonly value: "Moonbase";
                                }, {
                                    readonly hexValue: "31323837";
                                    readonly id: 27195;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10474:4:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1287_by_1";
                                        readonly typeString: "int_const 1287";
                                    };
                                    readonly value: "1287";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7270632e746573746e65742e6d6f6f6e6265616d2e6e6574776f726b";
                                    readonly id: 27196;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10480:38:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_611da7a50d9bf940412b47209c78030562dd2047afcf97dad69e15217355b585";
                                        readonly typeString: "literal_string \"https://rpc.testnet.moonbeam.network\"";
                                    };
                                    readonly value: "https://rpc.testnet.moonbeam.network";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_6f3c53069778183912da77a05fe67c3d6edb208ffdf1ca0161d51543035e3c68";
                                        readonly typeString: "literal_string \"Moonbase\"";
                                    }, {
                                        readonly typeIdentifier: "t_rational_1287_by_1";
                                        readonly typeString: "int_const 1287";
                                    }, {
                                        readonly typeIdentifier: "t_stringliteral_611da7a50d9bf940412b47209c78030562dd2047afcf97dad69e15217355b585";
                                        readonly typeString: "literal_string \"https://rpc.testnet.moonbeam.network\"";
                                    }];
                                    readonly id: 27193;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26550;
                                    readonly src: "10452:9:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26550_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27197;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10452:67:98";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_ccd05eb377a4954d8471e48341881dadc4d2a36094f09ce309d35b3b6204f44e";
                                    readonly typeString: "literal_string \"moonbase\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27191;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27238;
                                readonly src: "10414:25:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27198;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10414:106:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27199;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10414:106:98";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "initializeStdChains";
                readonly nameLocation: "7785:19:98";
                readonly parameters: {
                    readonly id: 27020;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7804:2:98";
                };
                readonly returnParameters: {
                    readonly id: 27021;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7815:0:98";
                };
                readonly scope: 27239;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 27238;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10609:305:98";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 27237;
                    readonly nodeType: "Block";
                    readonly src: "10702:212:98";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [27210];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 27210;
                            readonly mutability: "mutable";
                            readonly name: "rpcUrl";
                            readonly nameLocation: "10726:6:98";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 27237;
                            readonly src: "10712:20:98";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string";
                            };
                            readonly typeName: {
                                readonly id: 27209;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "10712:6:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 27213;
                        readonly initialValue: {
                            readonly expression: {
                                readonly id: 27211;
                                readonly name: "chain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27206;
                                readonly src: "10735:5:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            };
                            readonly id: 27212;
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "10741:6:98";
                            readonly memberName: "rpcUrl";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 26549;
                            readonly src: "10735:12:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "10712:35:98";
                    }, {
                        readonly expression: {
                            readonly id: 27218;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly id: 27214;
                                    readonly name: "defaultRpcUrls";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26568;
                                    readonly src: "10757:14:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_string_storage_$";
                                        readonly typeString: "mapping(string memory => string storage ref)";
                                    };
                                };
                                readonly id: 27216;
                                readonly indexExpression: {
                                    readonly id: 27215;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 27203;
                                    readonly src: "10772:10:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                };
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "IndexAccess";
                                readonly src: "10757:26:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage";
                                    readonly typeString: "string storage ref";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 27217;
                                readonly name: "rpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27210;
                                readonly src: "10786:6:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            };
                            readonly src: "10757:35:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage";
                                readonly typeString: "string storage ref";
                            };
                        };
                        readonly id: 27219;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10757:35:98";
                    }, {
                        readonly expression: {
                            readonly id: 27224;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 27220;
                                    readonly name: "chain";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 27206;
                                    readonly src: "10802:5:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                        readonly typeString: "struct StdChains.ChainData memory";
                                    };
                                };
                                readonly id: 27222;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "10808:6:98";
                                readonly memberName: "rpcUrl";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 26549;
                                readonly src: "10802:12:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly hexValue: "";
                                readonly id: 27223;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10817:2:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                    readonly typeString: "literal_string \"\"";
                                };
                                readonly value: "";
                            };
                            readonly src: "10802:17:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly id: 27225;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10802:17:98";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 27227;
                                readonly name: "chainAlias";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27203;
                                readonly src: "10838:10:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 27228;
                                readonly name: "chain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27206;
                                readonly src: "10850:5:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27226;
                                readonly name: "setChain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [26794, 26815];
                                readonly referencedDeclaration: 26794;
                                readonly src: "10829:8:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26550_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27229;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10829:27:98";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27230;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10829:27:98";
                    }, {
                        readonly expression: {
                            readonly id: 27235;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 27231;
                                    readonly name: "chain";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 27206;
                                    readonly src: "10866:5:98";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                                        readonly typeString: "struct StdChains.ChainData memory";
                                    };
                                };
                                readonly id: 27233;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "10872:6:98";
                                readonly memberName: "rpcUrl";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 26549;
                                readonly src: "10866:12:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 27234;
                                readonly name: "rpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27210;
                                readonly src: "10881:6:98";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            };
                            readonly src: "10866:21:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly id: 27236;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10866:21:98";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setChainWithDefaultRpcUrl";
                readonly nameLocation: "10618:25:98";
                readonly parameters: {
                    readonly id: 27207;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 27203;
                        readonly mutability: "mutable";
                        readonly name: "chainAlias";
                        readonly nameLocation: "10658:10:98";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 27238;
                        readonly src: "10644:24:98";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 27202;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10644:6:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 27206;
                        readonly mutability: "mutable";
                        readonly name: "chain";
                        readonly nameLocation: "10687:5:98";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 27238;
                        readonly src: "10670:22:98";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_ChainData_$26550_memory_ptr";
                            readonly typeString: "struct StdChains.ChainData";
                        };
                        readonly typeName: {
                            readonly id: 27205;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 27204;
                                readonly name: "ChainData";
                                readonly nameLocations: readonly ["10670:9:98"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 26550;
                                readonly src: "10670:9:98";
                            };
                            readonly referencedDeclaration: 26550;
                            readonly src: "10670:9:98";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_ChainData_$26550_storage_ptr";
                                readonly typeString: "struct StdChains.ChainData";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10643:50:98";
                };
                readonly returnParameters: {
                    readonly id: 27208;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10702:0:98";
                };
                readonly scope: 27239;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "private";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [];
            readonly canonicalName: "StdChains";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 26524;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "99:1799:98";
                readonly text: " StdChains provides information about EVM compatible chains that can be used in scripts/tests.\n For each chain, the chain's name, chain ID, and a default RPC URL are provided. Chains are\n identified by their alias, which is the same as the alias in the `[rpc_endpoints]` section of\n the `foundry.toml` file. For best UX, ensure the alias in the `foundry.toml` file match the\n alias used in this contract, which can be found as the first argument to the\n `setChainWithDefaultRpcUrl` call in the `initializeStdChains` function.\n There are two main ways to use this contract:\n   1. Set a chain with `setChain(string memory chainAlias, ChainData memory chain)` or\n      `setChain(string memory chainAlias, Chain memory chain)`\n   2. Get a chain with `getChain(string memory chainAlias)` or `getChain(uint256 chainId)`.\n The first time either of those are used, chains are initialized with the default set of RPC URLs.\n This is done in `initializeStdChains`, which uses `setChainWithDefaultRpcUrl`. Defaults are recorded in\n `defaultRpcUrls`.\n The `setChain` function is straightforward, and it simply saves off the given chain data.\n The `getChain` methods use `getChainWithUpdatedRpcUrl` to return a chain. For example, let's say\n we want to retrieve the RPC URL for `mainnet`:\n   - If you have specified data with `setChain`, it will return that.\n   - If you have configured a mainnet RPC URL in `foundry.toml`, it will return the URL, provided it\n     is valid (e.g. a URL is specified, or an environment variable is given and exists).\n   - If neither of the above conditions is met, the default data is returned.\n Summarizing the above, the prioritization hierarchy is `setChain` -> `foundry.toml` -> environment variable -> defaults.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [27239];
            readonly name: "StdChains";
            readonly nameLocation: "1917:9:98";
            readonly scope: 27240;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 98;
};
//# sourceMappingURL=StdChains.d.ts.map