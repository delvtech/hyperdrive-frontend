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
        readonly id: 32355;
        readonly exportedSymbols: {
            readonly StdChains: readonly [32354];
            readonly VmSafe: readonly [40840];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:10885:152";
        readonly nodes: readonly [{
            readonly id: 31636;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:152";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".2", "<", "0.9", ".0"];
        }, {
            readonly id: 31638;
            readonly nodeType: "ImportDirective";
            readonly src: "65:32:152";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/Vm.sol";
            readonly file: "./Vm.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 32355;
            readonly sourceUnit: 41313;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 31637;
                    readonly name: "VmSafe";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 40840;
                    readonly src: "73:6:152";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 32354;
            readonly nodeType: "ContractDefinition";
            readonly src: "1899:9017:152";
            readonly nodes: readonly [{
                readonly id: 31656;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1933:92:152";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "vm";
                readonly nameLocation: "1957:2:152";
                readonly scope: 32354;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_VmSafe_$40840";
                    readonly typeString: "contract VmSafe";
                };
                readonly typeName: {
                    readonly id: 31641;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 31640;
                        readonly name: "VmSafe";
                        readonly nameLocations: readonly ["1933:6:152"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 40840;
                        readonly src: "1933:6:152";
                    };
                    readonly referencedDeclaration: 40840;
                    readonly src: "1933:6:152";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$40840";
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
                                        readonly id: 31650;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "2003:17:152";
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
                                        readonly id: 31649;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "1993:9:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 31651;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1993:28:152";
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
                                    readonly id: 31648;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "1985:7:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                        readonly typeString: "type(uint256)";
                                    };
                                    readonly typeName: {
                                        readonly id: 31647;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "1985:7:152";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 31652;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1985:37:152";
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
                                readonly id: 31646;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "1977:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_uint160_$";
                                    readonly typeString: "type(uint160)";
                                };
                                readonly typeName: {
                                    readonly id: 31645;
                                    readonly name: "uint160";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "1977:7:152";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 31653;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1977:46:152";
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
                            readonly id: 31644;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "1969:7:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 31643;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1969:7:152";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 31654;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "1969:55:152";
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
                        readonly id: 31642;
                        readonly name: "VmSafe";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 40840;
                        readonly src: "1962:6:152";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_type$_t_contract$_VmSafe_$40840_$";
                            readonly typeString: "type(contract VmSafe)";
                        };
                    };
                    readonly id: 31655;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "typeConversion";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "1962:63:152";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$40840";
                        readonly typeString: "contract VmSafe";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 31658;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2032:33:152";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "stdChainsInitialized";
                readonly nameLocation: "2045:20:152";
                readonly scope: 32354;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bool";
                    readonly typeString: "bool";
                };
                readonly typeName: {
                    readonly id: 31657;
                    readonly name: "bool";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "2032:4:152";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 31665;
                readonly nodeType: "StructDefinition";
                readonly src: "2072:93:152";
                readonly nodes: readonly [];
                readonly canonicalName: "StdChains.ChainData";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 31660;
                    readonly mutability: "mutable";
                    readonly name: "name";
                    readonly nameLocation: "2106:4:152";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 31665;
                    readonly src: "2099:11:152";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                    readonly typeName: {
                        readonly id: 31659;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2099:6:152";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 31662;
                    readonly mutability: "mutable";
                    readonly name: "chainId";
                    readonly nameLocation: "2128:7:152";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 31665;
                    readonly src: "2120:15:152";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 31661;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2120:7:152";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 31664;
                    readonly mutability: "mutable";
                    readonly name: "rpcUrl";
                    readonly nameLocation: "2152:6:152";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 31665;
                    readonly src: "2145:13:152";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                    readonly typeName: {
                        readonly id: 31663;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2145:6:152";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "ChainData";
                readonly nameLocation: "2079:9:152";
                readonly scope: 32354;
                readonly visibility: "public";
            }, {
                readonly id: 31674;
                readonly nodeType: "StructDefinition";
                readonly src: "2171:598:152";
                readonly nodes: readonly [];
                readonly canonicalName: "StdChains.Chain";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 31667;
                    readonly mutability: "mutable";
                    readonly name: "name";
                    readonly nameLocation: "2228:4:152";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 31674;
                    readonly src: "2221:11:152";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                    readonly typeName: {
                        readonly id: 31666;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2221:6:152";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 31669;
                    readonly mutability: "mutable";
                    readonly name: "chainId";
                    readonly nameLocation: "2283:7:152";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 31674;
                    readonly src: "2275:15:152";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 31668;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2275:7:152";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 31671;
                    readonly mutability: "mutable";
                    readonly name: "chainAlias";
                    readonly nameLocation: "2383:10:152";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 31674;
                    readonly src: "2376:17:152";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                    readonly typeName: {
                        readonly id: 31670;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2376:6:152";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 31673;
                    readonly mutability: "mutable";
                    readonly name: "rpcUrl";
                    readonly nameLocation: "2756:6:152";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 31674;
                    readonly src: "2749:13:152";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                    readonly typeName: {
                        readonly id: 31672;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2749:6:152";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Chain";
                readonly nameLocation: "2178:5:152";
                readonly scope: 32354;
                readonly visibility: "public";
            }, {
                readonly id: 31679;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2873:39:152";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "chains";
                readonly nameLocation: "2906:6:152";
                readonly scope: 32354;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$31674_storage_$";
                    readonly typeString: "mapping(string => struct StdChains.Chain)";
                };
                readonly typeName: {
                    readonly id: 31678;
                    readonly keyName: "";
                    readonly keyNameLocation: "-1:-1:-1";
                    readonly keyType: {
                        readonly id: 31675;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2881:6:152";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "2873:24:152";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$31674_storage_$";
                        readonly typeString: "mapping(string => struct StdChains.Chain)";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 31677;
                        readonly nodeType: "UserDefinedTypeName";
                        readonly pathNode: {
                            readonly id: 31676;
                            readonly name: "Chain";
                            readonly nameLocations: readonly ["2891:5:152"];
                            readonly nodeType: "IdentifierPath";
                            readonly referencedDeclaration: 31674;
                            readonly src: "2891:5:152";
                        };
                        readonly referencedDeclaration: 31674;
                        readonly src: "2891:5:152";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Chain_$31674_storage_ptr";
                            readonly typeString: "struct StdChains.Chain";
                        };
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 31683;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2978:48:152";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "defaultRpcUrls";
                readonly nameLocation: "3012:14:152";
                readonly scope: 32354;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_string_storage_$";
                    readonly typeString: "mapping(string => string)";
                };
                readonly typeName: {
                    readonly id: 31682;
                    readonly keyName: "";
                    readonly keyNameLocation: "-1:-1:-1";
                    readonly keyType: {
                        readonly id: 31680;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2986:6:152";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "2978:25:152";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_string_storage_$";
                        readonly typeString: "mapping(string => string)";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 31681;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2996:6:152";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 31687;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3075:44:152";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "idToAlias";
                readonly nameLocation: "3110:9:152";
                readonly scope: 32354;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_string_storage_$";
                    readonly typeString: "mapping(uint256 => string)";
                };
                readonly typeName: {
                    readonly id: 31686;
                    readonly keyName: "";
                    readonly keyNameLocation: "-1:-1:-1";
                    readonly keyType: {
                        readonly id: 31684;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3083:7:152";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "3075:26:152";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_string_storage_$";
                        readonly typeString: "mapping(uint256 => string)";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 31685;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3094:6:152";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 31690;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3126:44:152";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "fallbackToDefaultRpcUrls";
                readonly nameLocation: "3139:24:152";
                readonly scope: 32354;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bool";
                    readonly typeString: "bool";
                };
                readonly typeName: {
                    readonly id: 31688;
                    readonly name: "bool";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "3126:4:152";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                };
                readonly value: {
                    readonly hexValue: "74727565";
                    readonly id: 31689;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "bool";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "3166:4:152";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly value: "true";
                };
                readonly visibility: "private";
            }, {
                readonly id: 31742;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3255:524:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 31741;
                    readonly nodeType: "Block";
                    readonly src: "3345:434:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 31705;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly arguments: readonly [{
                                            readonly id: 31701;
                                            readonly name: "chainAlias";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 31692;
                                            readonly src: "3369:10:152";
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
                                            readonly id: 31700;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "3363:5:152";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                readonly typeString: "type(bytes storage pointer)";
                                            };
                                            readonly typeName: {
                                                readonly id: 31699;
                                                readonly name: "bytes";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "3363:5:152";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 31702;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3363:17:152";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 31703;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3381:6:152";
                                    readonly memberName: "length";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "3363:24:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 31704;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "3391:1:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "3363:29:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "537464436861696e7320676574436861696e28737472696e67293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e";
                                readonly id: 31706;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3394:69:152";
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
                                readonly id: 31698;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "3355:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 31707;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3355:109:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 31708;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3355:109:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 31709;
                                readonly name: "initializeStdChains";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32316;
                                readonly src: "3475:19:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 31710;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3475:21:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 31711;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3475:21:152";
                    }, {
                        readonly expression: {
                            readonly id: 31716;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 31712;
                                readonly name: "chain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 31696;
                                readonly src: "3506:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly baseExpression: {
                                    readonly id: 31713;
                                    readonly name: "chains";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31679;
                                    readonly src: "3514:6:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$31674_storage_$";
                                        readonly typeString: "mapping(string memory => struct StdChains.Chain storage ref)";
                                    };
                                };
                                readonly id: 31715;
                                readonly indexExpression: {
                                    readonly id: 31714;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31692;
                                    readonly src: "3521:10:152";
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
                                readonly src: "3514:18:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$31674_storage";
                                    readonly typeString: "struct StdChains.Chain storage ref";
                                };
                            };
                            readonly src: "3506:26:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                readonly typeString: "struct StdChains.Chain memory";
                            };
                        };
                        readonly id: 31717;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3506:26:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 31722;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 31719;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 31696;
                                        readonly src: "3563:5:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                            readonly typeString: "struct StdChains.Chain memory";
                                        };
                                    };
                                    readonly id: 31720;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3569:7:152";
                                    readonly memberName: "chainId";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 31669;
                                    readonly src: "3563:13:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 31721;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "3580:1:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "3563:18:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly hexValue: "537464436861696e7320676574436861696e28737472696e67293a20436861696e207769746820616c6961732022";
                                        readonly id: 31727;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "3619:49:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_be183459e9329da9bfc4a2fec17224f102b8a68c1139772e954a2d6fd9877e00";
                                            readonly typeString: "literal_string \"StdChains getChain(string): Chain with alias \"\"";
                                        };
                                        readonly value: "StdChains getChain(string): Chain with alias \"";
                                    }, {
                                        readonly id: 31728;
                                        readonly name: "chainAlias";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 31692;
                                        readonly src: "3670:10:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        };
                                    }, {
                                        readonly hexValue: "22206e6f7420666f756e642e";
                                        readonly id: 31729;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "3682:15:152";
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
                                            readonly id: 31725;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "3602:3:152";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 31726;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3606:12:152";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "3602:16:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 31730;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3602:96:152";
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
                                    readonly id: 31724;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "3595:6:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                        readonly typeString: "type(string storage pointer)";
                                    };
                                    readonly typeName: {
                                        readonly id: 31723;
                                        readonly name: "string";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "3595:6:152";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 31731;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3595:104:152";
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
                                readonly id: 31718;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "3542:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 31732;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3542:167:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 31733;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3542:167:152";
                    }, {
                        readonly expression: {
                            readonly id: 31739;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 31734;
                                readonly name: "chain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 31696;
                                readonly src: "3720:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 31736;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31692;
                                    readonly src: "3754:10:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly id: 31737;
                                    readonly name: "chain";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31696;
                                    readonly src: "3766:5:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                        readonly typeString: "struct StdChains.Chain memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    }, {
                                        readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                        readonly typeString: "struct StdChains.Chain memory";
                                    }];
                                    readonly id: 31735;
                                    readonly name: "getChainWithUpdatedRpcUrl";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 32124;
                                    readonly src: "3728:25:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$31674_memory_ptr_$returns$_t_struct$_Chain_$31674_memory_ptr_$";
                                        readonly typeString: "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)";
                                    };
                                };
                                readonly id: 31738;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3728:44:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly src: "3720:52:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                readonly typeString: "struct StdChains.Chain memory";
                            };
                        };
                        readonly id: 31740;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3720:52:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getChain";
                readonly nameLocation: "3264:8:152";
                readonly parameters: {
                    readonly id: 31693;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 31692;
                        readonly mutability: "mutable";
                        readonly name: "chainAlias";
                        readonly nameLocation: "3287:10:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 31742;
                        readonly src: "3273:24:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 31691;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3273:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3272:26:152";
                };
                readonly returnParameters: {
                    readonly id: 31697;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 31696;
                        readonly mutability: "mutable";
                        readonly name: "chain";
                        readonly nameLocation: "3338:5:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 31742;
                        readonly src: "3325:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                            readonly typeString: "struct StdChains.Chain";
                        };
                        readonly typeName: {
                            readonly id: 31695;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 31694;
                                readonly name: "Chain";
                                readonly nameLocations: readonly ["3325:5:152"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 31674;
                                readonly src: "3325:5:152";
                            };
                            readonly referencedDeclaration: 31674;
                            readonly src: "3325:5:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$31674_storage_ptr";
                                readonly typeString: "struct StdChains.Chain";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3324:20:152";
                };
                readonly scope: 32354;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 31799;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3785:541:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 31798;
                    readonly nodeType: "Block";
                    readonly src: "3866:460:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 31753;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 31751;
                                    readonly name: "chainId";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31744;
                                    readonly src: "3884:7:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 31752;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "3895:1:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "3884:12:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "537464436861696e7320676574436861696e2875696e74323536293a20436861696e2049442063616e6e6f7420626520302e";
                                readonly id: 31754;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3898:52:152";
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
                                readonly id: 31750;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "3876:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 31755;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3876:75:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 31756;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3876:75:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 31757;
                                readonly name: "initializeStdChains";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32316;
                                readonly src: "3961:19:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 31758;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3961:21:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 31759;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3961:21:152";
                    }, {
                        readonly assignments: readonly [31761];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 31761;
                            readonly mutability: "mutable";
                            readonly name: "chainAlias";
                            readonly nameLocation: "4006:10:152";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 31798;
                            readonly src: "3992:24:152";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string";
                            };
                            readonly typeName: {
                                readonly id: 31760;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3992:6:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 31765;
                        readonly initialValue: {
                            readonly baseExpression: {
                                readonly id: 31762;
                                readonly name: "idToAlias";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 31687;
                                readonly src: "4019:9:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_string_storage_$";
                                    readonly typeString: "mapping(uint256 => string storage ref)";
                                };
                            };
                            readonly id: 31764;
                            readonly indexExpression: {
                                readonly id: 31763;
                                readonly name: "chainId";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 31744;
                                readonly src: "4029:7:152";
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
                            readonly src: "4019:18:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage";
                                readonly typeString: "string storage ref";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3992:45:152";
                    }, {
                        readonly expression: {
                            readonly id: 31770;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 31766;
                                readonly name: "chain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 31748;
                                readonly src: "4048:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly baseExpression: {
                                    readonly id: 31767;
                                    readonly name: "chains";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31679;
                                    readonly src: "4056:6:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$31674_storage_$";
                                        readonly typeString: "mapping(string memory => struct StdChains.Chain storage ref)";
                                    };
                                };
                                readonly id: 31769;
                                readonly indexExpression: {
                                    readonly id: 31768;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31761;
                                    readonly src: "4063:10:152";
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
                                readonly src: "4056:18:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$31674_storage";
                                    readonly typeString: "struct StdChains.Chain storage ref";
                                };
                            };
                            readonly src: "4048:26:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                readonly typeString: "struct StdChains.Chain memory";
                            };
                        };
                        readonly id: 31771;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4048:26:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 31776;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 31773;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 31748;
                                        readonly src: "4106:5:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                            readonly typeString: "struct StdChains.Chain memory";
                                        };
                                    };
                                    readonly id: 31774;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4112:7:152";
                                    readonly memberName: "chainId";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 31669;
                                    readonly src: "4106:13:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 31775;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4123:1:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "4106:18:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly hexValue: "537464436861696e7320676574436861696e2875696e74323536293a20436861696e207769746820494420";
                                        readonly id: 31781;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "4162:45:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_ce7b2cad45f1a6d0b9b7bb125e9a8742fce8fed7d742c83265d4a2da4caf457d";
                                            readonly typeString: "literal_string \"StdChains getChain(uint256): Chain with ID \"";
                                        };
                                        readonly value: "StdChains getChain(uint256): Chain with ID ";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly id: 31784;
                                            readonly name: "chainId";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 31744;
                                            readonly src: "4221:7:152";
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
                                                readonly id: 31782;
                                                readonly name: "vm";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 31656;
                                                readonly src: "4209:2:152";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_VmSafe_$40840";
                                                    readonly typeString: "contract VmSafe";
                                                };
                                            };
                                            readonly id: 31783;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4212:8:152";
                                            readonly memberName: "toString";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 40372;
                                            readonly src: "4209:11:152";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                                readonly typeString: "function (uint256) pure external returns (string memory)";
                                            };
                                        };
                                        readonly id: 31785;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4209:20:152";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        };
                                    }, {
                                        readonly hexValue: "206e6f7420666f756e642e";
                                        readonly id: 31786;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "4231:13:152";
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
                                            readonly id: 31779;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "4145:3:152";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 31780;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4149:12:152";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4145:16:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 31787;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4145:100:152";
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
                                    readonly id: 31778;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "4138:6:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                        readonly typeString: "type(string storage pointer)";
                                    };
                                    readonly typeName: {
                                        readonly id: 31777;
                                        readonly name: "string";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4138:6:152";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 31788;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4138:108:152";
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
                                readonly id: 31772;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "4085:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 31789;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4085:171:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 31790;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4085:171:152";
                    }, {
                        readonly expression: {
                            readonly id: 31796;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 31791;
                                readonly name: "chain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 31748;
                                readonly src: "4267:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 31793;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31761;
                                    readonly src: "4301:10:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly id: 31794;
                                    readonly name: "chain";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31748;
                                    readonly src: "4313:5:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                        readonly typeString: "struct StdChains.Chain memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    }, {
                                        readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                        readonly typeString: "struct StdChains.Chain memory";
                                    }];
                                    readonly id: 31792;
                                    readonly name: "getChainWithUpdatedRpcUrl";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 32124;
                                    readonly src: "4275:25:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$31674_memory_ptr_$returns$_t_struct$_Chain_$31674_memory_ptr_$";
                                        readonly typeString: "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)";
                                    };
                                };
                                readonly id: 31795;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4275:44:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly src: "4267:52:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                readonly typeString: "struct StdChains.Chain memory";
                            };
                        };
                        readonly id: 31797;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4267:52:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getChain";
                readonly nameLocation: "3794:8:152";
                readonly parameters: {
                    readonly id: 31745;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 31744;
                        readonly mutability: "mutable";
                        readonly name: "chainId";
                        readonly nameLocation: "3811:7:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 31799;
                        readonly src: "3803:15:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 31743;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3803:7:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3802:17:152";
                };
                readonly returnParameters: {
                    readonly id: 31749;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 31748;
                        readonly mutability: "mutable";
                        readonly name: "chain";
                        readonly nameLocation: "3859:5:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 31799;
                        readonly src: "3846:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                            readonly typeString: "struct StdChains.Chain";
                        };
                        readonly typeName: {
                            readonly id: 31747;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 31746;
                                readonly name: "Chain";
                                readonly nameLocations: readonly ["3846:5:152"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 31674;
                                readonly src: "3846:5:152";
                            };
                            readonly referencedDeclaration: 31674;
                            readonly src: "3846:5:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$31674_storage_ptr";
                                readonly typeString: "struct StdChains.Chain";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3845:20:152";
                };
                readonly scope: 32354;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 31909;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4397:1173:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 31908;
                    readonly nodeType: "Block";
                    readonly src: "4482:1088:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 31814;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly arguments: readonly [{
                                            readonly id: 31810;
                                            readonly name: "chainAlias";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 31801;
                                            readonly src: "4519:10:152";
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
                                            readonly id: 31809;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "4513:5:152";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                readonly typeString: "type(bytes storage pointer)";
                                            };
                                            readonly typeName: {
                                                readonly id: 31808;
                                                readonly name: "bytes";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "4513:5:152";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 31811;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4513:17:152";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 31812;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4531:6:152";
                                    readonly memberName: "length";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "4513:24:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 31813;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4541:1:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "4513:29:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e";
                                readonly id: 31815;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4556:79:152";
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
                                readonly id: 31807;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "4492:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 31816;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4492:153:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 31817;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4492:153:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 31822;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 31819;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 31804;
                                        readonly src: "4664:5:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                            readonly typeString: "struct StdChains.ChainData memory";
                                        };
                                    };
                                    readonly id: 31820;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4670:7:152";
                                    readonly memberName: "chainId";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 31662;
                                    readonly src: "4664:13:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 31821;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4681:1:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "4664:18:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e2049442063616e6e6f7420626520302e";
                                readonly id: 31823;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4684:61:152";
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
                                readonly id: 31818;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "4656:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 31824;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4656:90:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 31825;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4656:90:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 31826;
                                readonly name: "initializeStdChains";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32316;
                                readonly src: "4757:19:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 31827;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4757:21:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 31828;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4757:21:152";
                    }, {
                        readonly assignments: readonly [31830];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 31830;
                            readonly mutability: "mutable";
                            readonly name: "foundAlias";
                            readonly nameLocation: "4802:10:152";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 31908;
                            readonly src: "4788:24:152";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string";
                            };
                            readonly typeName: {
                                readonly id: 31829;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4788:6:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 31835;
                        readonly initialValue: {
                            readonly baseExpression: {
                                readonly id: 31831;
                                readonly name: "idToAlias";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 31687;
                                readonly src: "4815:9:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_string_storage_$";
                                    readonly typeString: "mapping(uint256 => string storage ref)";
                                };
                            };
                            readonly id: 31834;
                            readonly indexExpression: {
                                readonly expression: {
                                    readonly id: 31832;
                                    readonly name: "chain";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31804;
                                    readonly src: "4825:5:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                        readonly typeString: "struct StdChains.ChainData memory";
                                    };
                                };
                                readonly id: 31833;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4831:7:152";
                                readonly memberName: "chainId";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 31662;
                                readonly src: "4825:13:152";
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
                            readonly src: "4815:24:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage";
                                readonly typeString: "string storage ref";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4788:51:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly id: 31857;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 31843;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly id: 31839;
                                                readonly name: "foundAlias";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 31830;
                                                readonly src: "4877:10:152";
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
                                                readonly id: 31838;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "4871:5:152";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                    readonly typeString: "type(bytes storage pointer)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 31837;
                                                    readonly name: "bytes";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "4871:5:152";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 31840;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4871:17:152";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        };
                                        readonly id: 31841;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4889:6:152";
                                        readonly memberName: "length";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4871:24:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "==";
                                    readonly rightExpression: {
                                        readonly hexValue: "30";
                                        readonly id: 31842;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "4899:1:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    };
                                    readonly src: "4871:29:152";
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
                                    readonly id: 31856;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 31847;
                                                readonly name: "foundAlias";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 31830;
                                                readonly src: "4920:10:152";
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
                                                readonly id: 31846;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "4914:5:152";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                    readonly typeString: "type(bytes storage pointer)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 31845;
                                                    readonly name: "bytes";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "4914:5:152";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 31848;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4914:17:152";
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
                                            readonly id: 31844;
                                            readonly name: "keccak256";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -8;
                                            readonly src: "4904:9:152";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                            };
                                        };
                                        readonly id: 31849;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4904:28:152";
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
                                                readonly id: 31853;
                                                readonly name: "chainAlias";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 31801;
                                                readonly src: "4952:10:152";
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
                                                readonly id: 31852;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "4946:5:152";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                    readonly typeString: "type(bytes storage pointer)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 31851;
                                                    readonly name: "bytes";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "4946:5:152";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 31854;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4946:17:152";
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
                                            readonly id: 31850;
                                            readonly name: "keccak256";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -8;
                                            readonly src: "4936:9:152";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                            };
                                        };
                                        readonly id: 31855;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4936:28:152";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "4904:60:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly src: "4871:93:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly hexValue: "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e20494420";
                                        readonly id: 31862;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5040:49:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_2f5ddfff35cec202bbf760c515d7332e259c9b0c330efa0b2d03073b34906ba0";
                                            readonly typeString: "literal_string \"StdChains setChain(string,ChainData): Chain ID \"";
                                        };
                                        readonly value: "StdChains setChain(string,ChainData): Chain ID ";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly id: 31865;
                                                readonly name: "chain";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 31804;
                                                readonly src: "5123:5:152";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                                    readonly typeString: "struct StdChains.ChainData memory";
                                                };
                                            };
                                            readonly id: 31866;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5129:7:152";
                                            readonly memberName: "chainId";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 31662;
                                            readonly src: "5123:13:152";
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
                                                readonly id: 31863;
                                                readonly name: "vm";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 31656;
                                                readonly src: "5111:2:152";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_VmSafe_$40840";
                                                    readonly typeString: "contract VmSafe";
                                                };
                                            };
                                            readonly id: 31864;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5114:8:152";
                                            readonly memberName: "toString";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 40372;
                                            readonly src: "5111:11:152";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                                readonly typeString: "function (uint256) pure external returns (string memory)";
                                            };
                                        };
                                        readonly id: 31867;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5111:26:152";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        };
                                    }, {
                                        readonly hexValue: "20616c726561647920757365642062792022";
                                        readonly id: 31868;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5159:21:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_03dcc98944d744f10105f4b63a1d5b4f5b14493812e66201e5f21a3da2662077";
                                            readonly typeString: "literal_string \" already used by \"\"";
                                        };
                                        readonly value: " already used by \"";
                                    }, {
                                        readonly id: 31869;
                                        readonly name: "foundAlias";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 31830;
                                        readonly src: "5202:10:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        };
                                    }, {
                                        readonly hexValue: "222e";
                                        readonly id: 31870;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5234:5:152";
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
                                            readonly id: 31860;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "5002:3:152";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 31861;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5006:12:152";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "5002:16:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 31871;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5002:255:152";
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
                                    readonly id: 31859;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "4978:6:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                        readonly typeString: "type(string storage pointer)";
                                    };
                                    readonly typeName: {
                                        readonly id: 31858;
                                        readonly name: "string";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4978:6:152";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 31872;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4978:293:152";
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
                                readonly id: 31836;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "4850:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 31873;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4850:431:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 31874;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4850:431:152";
                    }, {
                        readonly assignments: readonly [31876];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 31876;
                            readonly mutability: "mutable";
                            readonly name: "oldChainId";
                            readonly nameLocation: "5300:10:152";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 31908;
                            readonly src: "5292:18:152";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 31875;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5292:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 31881;
                        readonly initialValue: {
                            readonly expression: {
                                readonly baseExpression: {
                                    readonly id: 31877;
                                    readonly name: "chains";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31679;
                                    readonly src: "5313:6:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$31674_storage_$";
                                        readonly typeString: "mapping(string memory => struct StdChains.Chain storage ref)";
                                    };
                                };
                                readonly id: 31879;
                                readonly indexExpression: {
                                    readonly id: 31878;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31801;
                                    readonly src: "5320:10:152";
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
                                readonly src: "5313:18:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$31674_storage";
                                    readonly typeString: "struct StdChains.Chain storage ref";
                                };
                            };
                            readonly id: 31880;
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "5332:7:152";
                            readonly memberName: "chainId";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 31669;
                            readonly src: "5313:26:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5292:47:152";
                    }, {
                        readonly expression: {
                            readonly id: 31885;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "delete";
                            readonly prefix: true;
                            readonly src: "5349:28:152";
                            readonly subExpression: {
                                readonly baseExpression: {
                                    readonly id: 31882;
                                    readonly name: "idToAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31687;
                                    readonly src: "5356:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_string_storage_$";
                                        readonly typeString: "mapping(uint256 => string storage ref)";
                                    };
                                };
                                readonly id: 31884;
                                readonly indexExpression: {
                                    readonly id: 31883;
                                    readonly name: "oldChainId";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31876;
                                    readonly src: "5366:10:152";
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
                                readonly src: "5356:21:152";
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
                        readonly id: 31886;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5349:28:152";
                    }, {
                        readonly expression: {
                            readonly id: 31899;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly id: 31887;
                                    readonly name: "chains";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31679;
                                    readonly src: "5388:6:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$31674_storage_$";
                                        readonly typeString: "mapping(string memory => struct StdChains.Chain storage ref)";
                                    };
                                };
                                readonly id: 31889;
                                readonly indexExpression: {
                                    readonly id: 31888;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31801;
                                    readonly src: "5395:10:152";
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
                                readonly src: "5388:18:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$31674_storage";
                                    readonly typeString: "struct StdChains.Chain storage ref";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 31891;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 31804;
                                        readonly src: "5434:5:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                            readonly typeString: "struct StdChains.ChainData memory";
                                        };
                                    };
                                    readonly id: 31892;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5440:4:152";
                                    readonly memberName: "name";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 31660;
                                    readonly src: "5434:10:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 31893;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 31804;
                                        readonly src: "5455:5:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                            readonly typeString: "struct StdChains.ChainData memory";
                                        };
                                    };
                                    readonly id: 31894;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5461:7:152";
                                    readonly memberName: "chainId";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 31662;
                                    readonly src: "5455:13:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 31895;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31801;
                                    readonly src: "5482:10:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 31896;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 31804;
                                        readonly src: "5502:5:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                            readonly typeString: "struct StdChains.ChainData memory";
                                        };
                                    };
                                    readonly id: 31897;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5508:6:152";
                                    readonly memberName: "rpcUrl";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 31664;
                                    readonly src: "5502:12:152";
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
                                    readonly id: 31890;
                                    readonly name: "Chain";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31674;
                                    readonly src: "5421:5:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_Chain_$31674_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.Chain storage pointer)";
                                    };
                                };
                                readonly id: 31898;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly ["5428:4:152", "5446:7:152", "5470:10:152", "5494:6:152"];
                                readonly names: readonly ["name", "chainId", "chainAlias", "rpcUrl"];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5421:95:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly src: "5388:128:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$31674_storage";
                                readonly typeString: "struct StdChains.Chain storage ref";
                            };
                        };
                        readonly id: 31900;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5388:128:152";
                    }, {
                        readonly expression: {
                            readonly id: 31906;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly id: 31901;
                                    readonly name: "idToAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31687;
                                    readonly src: "5526:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_string_storage_$";
                                        readonly typeString: "mapping(uint256 => string storage ref)";
                                    };
                                };
                                readonly id: 31904;
                                readonly indexExpression: {
                                    readonly expression: {
                                        readonly id: 31902;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 31804;
                                        readonly src: "5536:5:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                            readonly typeString: "struct StdChains.ChainData memory";
                                        };
                                    };
                                    readonly id: 31903;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5542:7:152";
                                    readonly memberName: "chainId";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 31662;
                                    readonly src: "5536:13:152";
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
                                readonly src: "5526:24:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage";
                                    readonly typeString: "string storage ref";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 31905;
                                readonly name: "chainAlias";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 31801;
                                readonly src: "5553:10:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            };
                            readonly src: "5526:37:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage";
                                readonly typeString: "string storage ref";
                            };
                        };
                        readonly id: 31907;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5526:37:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setChain";
                readonly nameLocation: "4406:8:152";
                readonly parameters: {
                    readonly id: 31805;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 31801;
                        readonly mutability: "mutable";
                        readonly name: "chainAlias";
                        readonly nameLocation: "4429:10:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 31909;
                        readonly src: "4415:24:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 31800;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4415:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 31804;
                        readonly mutability: "mutable";
                        readonly name: "chain";
                        readonly nameLocation: "4458:5:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 31909;
                        readonly src: "4441:22:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                            readonly typeString: "struct StdChains.ChainData";
                        };
                        readonly typeName: {
                            readonly id: 31803;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 31802;
                                readonly name: "ChainData";
                                readonly nameLocations: readonly ["4441:9:152"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 31665;
                                readonly src: "4441:9:152";
                            };
                            readonly referencedDeclaration: 31665;
                            readonly src: "4441:9:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_ChainData_$31665_storage_ptr";
                                readonly typeString: "struct StdChains.ChainData";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4414:50:152";
                };
                readonly returnParameters: {
                    readonly id: 31806;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4482:0:152";
                };
                readonly scope: 32354;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 31930;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5641:195:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 31929;
                    readonly nodeType: "Block";
                    readonly src: "5722:114:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 31918;
                                readonly name: "chainAlias";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 31911;
                                readonly src: "5741:10:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 31920;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 31914;
                                        readonly src: "5770:5:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                            readonly typeString: "struct StdChains.Chain memory";
                                        };
                                    };
                                    readonly id: 31921;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5776:4:152";
                                    readonly memberName: "name";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 31667;
                                    readonly src: "5770:10:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 31922;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 31914;
                                        readonly src: "5791:5:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                            readonly typeString: "struct StdChains.Chain memory";
                                        };
                                    };
                                    readonly id: 31923;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5797:7:152";
                                    readonly memberName: "chainId";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 31669;
                                    readonly src: "5791:13:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 31924;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 31914;
                                        readonly src: "5814:5:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                            readonly typeString: "struct StdChains.Chain memory";
                                        };
                                    };
                                    readonly id: 31925;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5820:6:152";
                                    readonly memberName: "rpcUrl";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 31673;
                                    readonly src: "5814:12:152";
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
                                    readonly id: 31919;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31665;
                                    readonly src: "5753:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$31665_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 31926;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly ["5764:4:152", "5782:7:152", "5806:6:152"];
                                readonly names: readonly ["name", "chainId", "rpcUrl"];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5753:75:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 31917;
                                readonly name: "setChain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [31909, 31930];
                                readonly referencedDeclaration: 31909;
                                readonly src: "5732:8:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 31927;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5732:97:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 31928;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5732:97:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setChain";
                readonly nameLocation: "5650:8:152";
                readonly parameters: {
                    readonly id: 31915;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 31911;
                        readonly mutability: "mutable";
                        readonly name: "chainAlias";
                        readonly nameLocation: "5673:10:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 31930;
                        readonly src: "5659:24:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 31910;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5659:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 31914;
                        readonly mutability: "mutable";
                        readonly name: "chain";
                        readonly nameLocation: "5698:5:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 31930;
                        readonly src: "5685:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                            readonly typeString: "struct StdChains.Chain";
                        };
                        readonly typeName: {
                            readonly id: 31913;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 31912;
                                readonly name: "Chain";
                                readonly nameLocations: readonly ["5685:5:152"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 31674;
                                readonly src: "5685:5:152";
                            };
                            readonly referencedDeclaration: 31674;
                            readonly src: "5685:5:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$31674_storage_ptr";
                                readonly typeString: "struct StdChains.Chain";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5658:46:152";
                };
                readonly returnParameters: {
                    readonly id: 31916;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5722:0:152";
                };
                readonly scope: 32354;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 32007;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5842:451:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 32006;
                    readonly nodeType: "Block";
                    readonly src: "5916:377:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [31938];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 31938;
                            readonly mutability: "mutable";
                            readonly name: "strb";
                            readonly nameLocation: "5939:4:152";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 32006;
                            readonly src: "5926:17:152";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 31937;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5926:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 31943;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 31941;
                                readonly name: "str";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 31932;
                                readonly src: "5952:3:152";
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
                                readonly id: 31940;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "5946:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                    readonly typeString: "type(bytes storage pointer)";
                                };
                                readonly typeName: {
                                    readonly id: 31939;
                                    readonly name: "bytes";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "5946:5:152";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 31942;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5946:10:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5926:30:152";
                    }, {
                        readonly assignments: readonly [31945];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 31945;
                            readonly mutability: "mutable";
                            readonly name: "copy";
                            readonly nameLocation: "5979:4:152";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 32006;
                            readonly src: "5966:17:152";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 31944;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5966:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 31951;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 31948;
                                    readonly name: "strb";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31938;
                                    readonly src: "5996:4:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly id: 31949;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6001:6:152";
                                readonly memberName: "length";
                                readonly nodeType: "MemberAccess";
                                readonly src: "5996:11:152";
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
                                readonly id: 31947;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "5986:9:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (uint256) pure returns (bytes memory)";
                                };
                                readonly typeName: {
                                    readonly id: 31946;
                                    readonly name: "bytes";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "5990:5:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_storage_ptr";
                                        readonly typeString: "bytes";
                                    };
                                };
                            };
                            readonly id: 31950;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5986:22:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5966:42:152";
                    }, {
                        readonly body: {
                            readonly id: 31999;
                            readonly nodeType: "Block";
                            readonly src: "6060:198:152";
                            readonly statements: readonly [{
                                readonly assignments: readonly [31964];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 31964;
                                    readonly mutability: "mutable";
                                    readonly name: "b";
                                    readonly nameLocation: "6081:1:152";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 31999;
                                    readonly src: "6074:8:152";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes1";
                                        readonly typeString: "bytes1";
                                    };
                                    readonly typeName: {
                                        readonly id: 31963;
                                        readonly name: "bytes1";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "6074:6:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 31968;
                                readonly initialValue: {
                                    readonly baseExpression: {
                                        readonly id: 31965;
                                        readonly name: "strb";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 31938;
                                        readonly src: "6085:4:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 31967;
                                    readonly indexExpression: {
                                        readonly id: 31966;
                                        readonly name: "i";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 31953;
                                        readonly src: "6090:1:152";
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
                                    readonly src: "6085:7:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes1";
                                        readonly typeString: "bytes1";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "6074:18:152";
                            }, {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly id: 31975;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        };
                                        readonly id: 31971;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 31969;
                                            readonly name: "b";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 31964;
                                            readonly src: "6110:1:152";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: ">=";
                                        readonly rightExpression: {
                                            readonly hexValue: "30783631";
                                            readonly id: 31970;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "6115:4:152";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_97_by_1";
                                                readonly typeString: "int_const 97";
                                            };
                                            readonly value: "0x61";
                                        };
                                        readonly src: "6110:9:152";
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
                                        readonly id: 31974;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 31972;
                                            readonly name: "b";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 31964;
                                            readonly src: "6123:1:152";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "<=";
                                        readonly rightExpression: {
                                            readonly hexValue: "30783741";
                                            readonly id: 31973;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "6128:4:152";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_122_by_1";
                                                readonly typeString: "int_const 122";
                                            };
                                            readonly value: "0x7A";
                                        };
                                        readonly src: "6123:9:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "6110:22:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseBody: {
                                    readonly id: 31997;
                                    readonly nodeType: "Block";
                                    readonly src: "6204:44:152";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 31995;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly baseExpression: {
                                                    readonly id: 31991;
                                                    readonly name: "copy";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 31945;
                                                    readonly src: "6222:4:152";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                };
                                                readonly id: 31993;
                                                readonly indexExpression: {
                                                    readonly id: 31992;
                                                    readonly name: "i";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 31953;
                                                    readonly src: "6227:1:152";
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
                                                readonly src: "6222:7:152";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes1";
                                                    readonly typeString: "bytes1";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly id: 31994;
                                                readonly name: "b";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 31964;
                                                readonly src: "6232:1:152";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes1";
                                                    readonly typeString: "bytes1";
                                                };
                                            };
                                            readonly src: "6222:11:152";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        };
                                        readonly id: 31996;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "6222:11:152";
                                    }];
                                };
                                readonly id: 31998;
                                readonly nodeType: "IfStatement";
                                readonly src: "6106:142:152";
                                readonly trueBody: {
                                    readonly id: 31990;
                                    readonly nodeType: "Block";
                                    readonly src: "6134:64:152";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 31988;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly baseExpression: {
                                                    readonly id: 31976;
                                                    readonly name: "copy";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 31945;
                                                    readonly src: "6152:4:152";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                };
                                                readonly id: 31978;
                                                readonly indexExpression: {
                                                    readonly id: 31977;
                                                    readonly name: "i";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 31953;
                                                    readonly src: "6157:1:152";
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
                                                readonly src: "6152:7:152";
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
                                                    readonly id: 31986;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly arguments: readonly [{
                                                            readonly id: 31983;
                                                            readonly name: "b";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 31964;
                                                            readonly src: "6175:1:152";
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
                                                            readonly id: 31982;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: true;
                                                            readonly lValueRequested: false;
                                                            readonly nodeType: "ElementaryTypeNameExpression";
                                                            readonly src: "6169:5:152";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_type$_t_uint8_$";
                                                                readonly typeString: "type(uint8)";
                                                            };
                                                            readonly typeName: {
                                                                readonly id: 31981;
                                                                readonly name: "uint8";
                                                                readonly nodeType: "ElementaryTypeName";
                                                                readonly src: "6169:5:152";
                                                                readonly typeDescriptions: {};
                                                            };
                                                        };
                                                        readonly id: 31984;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "typeConversion";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "6169:8:152";
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
                                                        readonly id: 31985;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "6180:2:152";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_rational_32_by_1";
                                                            readonly typeString: "int_const 32";
                                                        };
                                                        readonly value: "32";
                                                    };
                                                    readonly src: "6169:13:152";
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
                                                    readonly id: 31980;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "6162:6:152";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                        readonly typeString: "type(bytes1)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 31979;
                                                        readonly name: "bytes1";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "6162:6:152";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 31987;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "6162:21:152";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes1";
                                                    readonly typeString: "bytes1";
                                                };
                                            };
                                            readonly src: "6152:31:152";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        };
                                        readonly id: 31989;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "6152:31:152";
                                    }];
                                };
                            }];
                        };
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 31959;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 31956;
                                readonly name: "i";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 31953;
                                readonly src: "6038:1:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly expression: {
                                    readonly id: 31957;
                                    readonly name: "strb";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31938;
                                    readonly src: "6042:4:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly id: 31958;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6047:6:152";
                                readonly memberName: "length";
                                readonly nodeType: "MemberAccess";
                                readonly src: "6042:11:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6038:15:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 32000;
                        readonly initializationExpression: {
                            readonly assignments: readonly [31953];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 31953;
                                readonly mutability: "mutable";
                                readonly name: "i";
                                readonly nameLocation: "6031:1:152";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 32000;
                                readonly src: "6023:9:152";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 31952;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "6023:7:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 31955;
                            readonly initialValue: {
                                readonly hexValue: "30";
                                readonly id: 31954;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6035:1:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "6023:13:152";
                        };
                        readonly loopExpression: {
                            readonly expression: {
                                readonly id: 31961;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "UnaryOperation";
                                readonly operator: "++";
                                readonly prefix: false;
                                readonly src: "6055:3:152";
                                readonly subExpression: {
                                    readonly id: 31960;
                                    readonly name: "i";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31953;
                                    readonly src: "6055:1:152";
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
                            readonly id: 31962;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "6055:3:152";
                        };
                        readonly nodeType: "ForStatement";
                        readonly src: "6018:240:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 32003;
                                readonly name: "copy";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 31945;
                                readonly src: "6281:4:152";
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
                                readonly id: 32002;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "6274:6:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                    readonly typeString: "type(string storage pointer)";
                                };
                                readonly typeName: {
                                    readonly id: 32001;
                                    readonly name: "string";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "6274:6:152";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 32004;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6274:12:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 31936;
                        readonly id: 32005;
                        readonly nodeType: "Return";
                        readonly src: "6267:19:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_toUpper";
                readonly nameLocation: "5851:8:152";
                readonly parameters: {
                    readonly id: 31933;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 31932;
                        readonly mutability: "mutable";
                        readonly name: "str";
                        readonly nameLocation: "5874:3:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 32007;
                        readonly src: "5860:17:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 31931;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5860:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5859:19:152";
                };
                readonly returnParameters: {
                    readonly id: 31936;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 31935;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 32007;
                        readonly src: "5901:13:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 31934;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5901:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5900:15:152";
                };
                readonly scope: 32354;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 32124;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6429:1218:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 32123;
                    readonly nodeType: "Block";
                    readonly src: "6541:1106:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 32025;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly expression: {
                                            readonly id: 32020;
                                            readonly name: "chain";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 32012;
                                            readonly src: "6561:5:152";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                                readonly typeString: "struct StdChains.Chain memory";
                                            };
                                        };
                                        readonly id: 32021;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6567:6:152";
                                        readonly memberName: "rpcUrl";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 31673;
                                        readonly src: "6561:12:152";
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
                                        readonly id: 32019;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "6555:5:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                            readonly typeString: "type(bytes storage pointer)";
                                        };
                                        readonly typeName: {
                                            readonly id: 32018;
                                            readonly name: "bytes";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "6555:5:152";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 32022;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6555:19:152";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly id: 32023;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6575:6:152";
                                readonly memberName: "length";
                                readonly nodeType: "MemberAccess";
                                readonly src: "6555:26:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 32024;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6585:1:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "6555:31:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 32120;
                        readonly nodeType: "IfStatement";
                        readonly src: "6551:1068:152";
                        readonly trueBody: {
                            readonly id: 32119;
                            readonly nodeType: "Block";
                            readonly src: "6588:1031:152";
                            readonly statements: readonly [{
                                readonly clauses: readonly [{
                                    readonly block: {
                                        readonly id: 32039;
                                        readonly nodeType: "Block";
                                        readonly src: "6665:60:152";
                                        readonly statements: readonly [{
                                            readonly expression: {
                                                readonly id: 32037;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftHandSide: {
                                                    readonly expression: {
                                                        readonly id: 32033;
                                                        readonly name: "chain";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 32012;
                                                        readonly src: "6683:5:152";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                                            readonly typeString: "struct StdChains.Chain memory";
                                                        };
                                                    };
                                                    readonly id: 32035;
                                                    readonly isConstant: false;
                                                    readonly isLValue: true;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: true;
                                                    readonly memberLocation: "6689:6:152";
                                                    readonly memberName: "rpcUrl";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 31673;
                                                    readonly src: "6683:12:152";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_string_memory_ptr";
                                                        readonly typeString: "string memory";
                                                    };
                                                };
                                                readonly nodeType: "Assignment";
                                                readonly operator: "=";
                                                readonly rightHandSide: {
                                                    readonly id: 32036;
                                                    readonly name: "configRpcUrl";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 32031;
                                                    readonly src: "6698:12:152";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_string_memory_ptr";
                                                        readonly typeString: "string memory";
                                                    };
                                                };
                                                readonly src: "6683:27:152";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string memory";
                                                };
                                            };
                                            readonly id: 32038;
                                            readonly nodeType: "ExpressionStatement";
                                            readonly src: "6683:27:152";
                                        }];
                                    };
                                    readonly errorName: "";
                                    readonly id: 32040;
                                    readonly nodeType: "TryCatchClause";
                                    readonly parameters: {
                                        readonly id: 32032;
                                        readonly nodeType: "ParameterList";
                                        readonly parameters: readonly [{
                                            readonly constant: false;
                                            readonly id: 32031;
                                            readonly mutability: "mutable";
                                            readonly name: "configRpcUrl";
                                            readonly nameLocation: "6651:12:152";
                                            readonly nodeType: "VariableDeclaration";
                                            readonly scope: 32040;
                                            readonly src: "6637:26:152";
                                            readonly stateVariable: false;
                                            readonly storageLocation: "memory";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                readonly typeString: "string";
                                            };
                                            readonly typeName: {
                                                readonly id: 32030;
                                                readonly name: "string";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "6637:6:152";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_storage_ptr";
                                                    readonly typeString: "string";
                                                };
                                            };
                                            readonly visibility: "internal";
                                        }];
                                        readonly src: "6636:28:152";
                                    };
                                    readonly src: "6628:97:152";
                                }, {
                                    readonly block: {
                                        readonly id: 32116;
                                        readonly nodeType: "Block";
                                        readonly src: "6751:858:152";
                                        readonly statements: readonly [{
                                            readonly assignments: readonly [32045];
                                            readonly declarations: readonly [{
                                                readonly constant: false;
                                                readonly id: 32045;
                                                readonly mutability: "mutable";
                                                readonly name: "envName";
                                                readonly nameLocation: "6783:7:152";
                                                readonly nodeType: "VariableDeclaration";
                                                readonly scope: 32116;
                                                readonly src: "6769:21:152";
                                                readonly stateVariable: false;
                                                readonly storageLocation: "memory";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string";
                                                };
                                                readonly typeName: {
                                                    readonly id: 32044;
                                                    readonly name: "string";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6769:6:152";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_string_storage_ptr";
                                                        readonly typeString: "string";
                                                    };
                                                };
                                                readonly visibility: "internal";
                                            }];
                                            readonly id: 32056;
                                            readonly initialValue: {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly arguments: readonly [{
                                                            readonly id: 32051;
                                                            readonly name: "chainAlias";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 32009;
                                                            readonly src: "6826:10:152";
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
                                                            readonly id: 32050;
                                                            readonly name: "_toUpper";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 32007;
                                                            readonly src: "6817:8:152";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                                                readonly typeString: "function (string memory) pure returns (string memory)";
                                                            };
                                                        };
                                                        readonly id: 32052;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "6817:20:152";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_string_memory_ptr";
                                                            readonly typeString: "string memory";
                                                        };
                                                    }, {
                                                        readonly hexValue: "5f5250435f55524c";
                                                        readonly id: 32053;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "string";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "6839:10:152";
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
                                                            readonly id: 32048;
                                                            readonly name: "abi";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -1;
                                                            readonly src: "6800:3:152";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_magic_abi";
                                                                readonly typeString: "abi";
                                                            };
                                                        };
                                                        readonly id: 32049;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "6804:12:152";
                                                        readonly memberName: "encodePacked";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly src: "6800:16:152";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                            readonly typeString: "function () pure returns (bytes memory)";
                                                        };
                                                    };
                                                    readonly id: 32054;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "6800:50:152";
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
                                                    readonly id: 32047;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "6793:6:152";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                                        readonly typeString: "type(string storage pointer)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 32046;
                                                        readonly name: "string";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "6793:6:152";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 32055;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "6793:58:152";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string memory";
                                                };
                                            };
                                            readonly nodeType: "VariableDeclarationStatement";
                                            readonly src: "6769:82:152";
                                        }, {
                                            readonly condition: {
                                                readonly id: 32057;
                                                readonly name: "fallbackToDefaultRpcUrls";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 31690;
                                                readonly src: "6873:24:152";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bool";
                                                    readonly typeString: "bool";
                                                };
                                            };
                                            readonly falseBody: {
                                                readonly id: 32080;
                                                readonly nodeType: "Block";
                                                readonly src: "7006:77:152";
                                                readonly statements: readonly [{
                                                    readonly expression: {
                                                        readonly id: 32078;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly leftHandSide: {
                                                            readonly expression: {
                                                                readonly id: 32071;
                                                                readonly name: "chain";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 32012;
                                                                readonly src: "7028:5:152";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                                                    readonly typeString: "struct StdChains.Chain memory";
                                                                };
                                                            };
                                                            readonly id: 32073;
                                                            readonly isConstant: false;
                                                            readonly isLValue: true;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: true;
                                                            readonly memberLocation: "7034:6:152";
                                                            readonly memberName: "rpcUrl";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly referencedDeclaration: 31673;
                                                            readonly src: "7028:12:152";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                                readonly typeString: "string memory";
                                                            };
                                                        };
                                                        readonly nodeType: "Assignment";
                                                        readonly operator: "=";
                                                        readonly rightHandSide: {
                                                            readonly arguments: readonly [{
                                                                readonly id: 32076;
                                                                readonly name: "envName";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 32045;
                                                                readonly src: "7056:7:152";
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
                                                                    readonly id: 32074;
                                                                    readonly name: "vm";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: 31656;
                                                                    readonly src: "7043:2:152";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_contract$_VmSafe_$40840";
                                                                        readonly typeString: "contract VmSafe";
                                                                    };
                                                                };
                                                                readonly id: 32075;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly memberLocation: "7046:9:152";
                                                                readonly memberName: "envString";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly referencedDeclaration: 39916;
                                                                readonly src: "7043:12:152";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                                                    readonly typeString: "function (string memory) view external returns (string memory)";
                                                                };
                                                            };
                                                            readonly id: 32077;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly kind: "functionCall";
                                                            readonly lValueRequested: false;
                                                            readonly nameLocations: readonly [];
                                                            readonly names: readonly [];
                                                            readonly nodeType: "FunctionCall";
                                                            readonly src: "7043:21:152";
                                                            readonly tryCall: false;
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                                readonly typeString: "string memory";
                                                            };
                                                        };
                                                        readonly src: "7028:36:152";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_string_memory_ptr";
                                                            readonly typeString: "string memory";
                                                        };
                                                    };
                                                    readonly id: 32079;
                                                    readonly nodeType: "ExpressionStatement";
                                                    readonly src: "7028:36:152";
                                                }];
                                            };
                                            readonly id: 32081;
                                            readonly nodeType: "IfStatement";
                                            readonly src: "6869:214:152";
                                            readonly trueBody: {
                                                readonly id: 32070;
                                                readonly nodeType: "Block";
                                                readonly src: "6899:101:152";
                                                readonly statements: readonly [{
                                                    readonly expression: {
                                                        readonly id: 32068;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly leftHandSide: {
                                                            readonly expression: {
                                                                readonly id: 32058;
                                                                readonly name: "chain";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 32012;
                                                                readonly src: "6921:5:152";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                                                    readonly typeString: "struct StdChains.Chain memory";
                                                                };
                                                            };
                                                            readonly id: 32060;
                                                            readonly isConstant: false;
                                                            readonly isLValue: true;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: true;
                                                            readonly memberLocation: "6927:6:152";
                                                            readonly memberName: "rpcUrl";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly referencedDeclaration: 31673;
                                                            readonly src: "6921:12:152";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                                readonly typeString: "string memory";
                                                            };
                                                        };
                                                        readonly nodeType: "Assignment";
                                                        readonly operator: "=";
                                                        readonly rightHandSide: {
                                                            readonly arguments: readonly [{
                                                                readonly id: 32063;
                                                                readonly name: "envName";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 32045;
                                                                readonly src: "6945:7:152";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                                    readonly typeString: "string memory";
                                                                };
                                                            }, {
                                                                readonly baseExpression: {
                                                                    readonly id: 32064;
                                                                    readonly name: "defaultRpcUrls";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: 31683;
                                                                    readonly src: "6954:14:152";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_string_storage_$";
                                                                        readonly typeString: "mapping(string memory => string storage ref)";
                                                                    };
                                                                };
                                                                readonly id: 32066;
                                                                readonly indexExpression: {
                                                                    readonly id: 32065;
                                                                    readonly name: "chainAlias";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: 32009;
                                                                    readonly src: "6969:10:152";
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
                                                                readonly src: "6954:26:152";
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
                                                                    readonly id: 32061;
                                                                    readonly name: "vm";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: 31656;
                                                                    readonly src: "6936:2:152";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_contract$_VmSafe_$40840";
                                                                        readonly typeString: "contract VmSafe";
                                                                    };
                                                                };
                                                                readonly id: 32062;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly memberLocation: "6939:5:152";
                                                                readonly memberName: "envOr";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly referencedDeclaration: 40047;
                                                                readonly src: "6936:8:152";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                                                    readonly typeString: "function (string memory,string memory) external returns (string memory)";
                                                                };
                                                            };
                                                            readonly id: 32067;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly kind: "functionCall";
                                                            readonly lValueRequested: false;
                                                            readonly nameLocations: readonly [];
                                                            readonly names: readonly [];
                                                            readonly nodeType: "FunctionCall";
                                                            readonly src: "6936:45:152";
                                                            readonly tryCall: false;
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                                readonly typeString: "string memory";
                                                            };
                                                        };
                                                        readonly src: "6921:60:152";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_string_memory_ptr";
                                                            readonly typeString: "string memory";
                                                        };
                                                    };
                                                    readonly id: 32069;
                                                    readonly nodeType: "ExpressionStatement";
                                                    readonly src: "6921:60:152";
                                                }];
                                            };
                                        }, {
                                            readonly assignments: readonly [32083];
                                            readonly declarations: readonly [{
                                                readonly constant: false;
                                                readonly id: 32083;
                                                readonly mutability: "mutable";
                                                readonly name: "notFoundError";
                                                readonly nameLocation: "7175:13:152";
                                                readonly nodeType: "VariableDeclaration";
                                                readonly scope: 32116;
                                                readonly src: "7162:26:152";
                                                readonly stateVariable: false;
                                                readonly storageLocation: "memory";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes";
                                                };
                                                readonly typeName: {
                                                    readonly id: 32082;
                                                    readonly name: "bytes";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "7162:5:152";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_storage_ptr";
                                                        readonly typeString: "bytes";
                                                    };
                                                };
                                                readonly visibility: "internal";
                                            }];
                                            readonly id: 32096;
                                            readonly initialValue: {
                                                readonly arguments: readonly [{
                                                    readonly hexValue: "4368656174436f64654572726f72";
                                                    readonly id: 32086;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "string";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "7235:16:152";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_stringliteral_0bc445031644df03923eb2ab981d332f4354ceab11a95efce72a938e57beaadf";
                                                        readonly typeString: "literal_string \"CheatCodeError\"";
                                                    };
                                                    readonly value: "CheatCodeError";
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly arguments: readonly [{
                                                            readonly hexValue: "696e76616c6964207270632075726c20";
                                                            readonly id: 32091;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: true;
                                                            readonly kind: "string";
                                                            readonly lValueRequested: false;
                                                            readonly nodeType: "Literal";
                                                            readonly src: "7277:18:152";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_stringliteral_2baf3da7b122675739218e635e969f0d1b560b915d35635239551f70fe123eed";
                                                                readonly typeString: "literal_string \"invalid rpc url \"";
                                                            };
                                                            readonly value: "invalid rpc url ";
                                                        }, {
                                                            readonly id: 32092;
                                                            readonly name: "chainAlias";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 32009;
                                                            readonly src: "7297:10:152";
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
                                                                readonly id: 32089;
                                                                readonly name: "abi";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: -1;
                                                                readonly src: "7260:3:152";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_magic_abi";
                                                                    readonly typeString: "abi";
                                                                };
                                                            };
                                                            readonly id: 32090;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: true;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "7264:12:152";
                                                            readonly memberName: "encodePacked";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly src: "7260:16:152";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                                readonly typeString: "function () pure returns (bytes memory)";
                                                            };
                                                        };
                                                        readonly id: 32093;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "7260:48:152";
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
                                                        readonly id: 32088;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "7253:6:152";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                                            readonly typeString: "type(string storage pointer)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 32087;
                                                            readonly name: "string";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "7253:6:152";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 32094;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "7253:56:152";
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
                                                        readonly id: 32084;
                                                        readonly name: "abi";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -1;
                                                        readonly src: "7211:3:152";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_abi";
                                                            readonly typeString: "abi";
                                                        };
                                                    };
                                                    readonly id: 32085;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "7215:19:152";
                                                    readonly memberName: "encodeWithSignature";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "7211:23:152";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_abiencodewithsignature_pure$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                                        readonly typeString: "function (string memory) pure returns (bytes memory)";
                                                    };
                                                };
                                                readonly id: 32095;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "7211:99:152";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            };
                                            readonly nodeType: "VariableDeclarationStatement";
                                            readonly src: "7162:148:152";
                                        }, {
                                            readonly condition: {
                                                readonly commonType: {
                                                    readonly typeIdentifier: "t_bool";
                                                    readonly typeString: "bool";
                                                };
                                                readonly id: 32112;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftExpression: {
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    };
                                                    readonly id: 32103;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly arguments: readonly [{
                                                            readonly id: 32098;
                                                            readonly name: "notFoundError";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 32083;
                                                            readonly src: "7342:13:152";
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
                                                            readonly id: 32097;
                                                            readonly name: "keccak256";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -8;
                                                            readonly src: "7332:9:152";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                                readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                                            };
                                                        };
                                                        readonly id: 32099;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "7332:24:152";
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
                                                            readonly id: 32101;
                                                            readonly name: "err";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 32042;
                                                            readonly src: "7370:3:152";
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
                                                            readonly id: 32100;
                                                            readonly name: "keccak256";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -8;
                                                            readonly src: "7360:9:152";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                                readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                                            };
                                                        };
                                                        readonly id: 32102;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "7360:14:152";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_bytes32";
                                                            readonly typeString: "bytes32";
                                                        };
                                                    };
                                                    readonly src: "7332:42:152";
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
                                                    readonly id: 32111;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly expression: {
                                                            readonly arguments: readonly [{
                                                                readonly expression: {
                                                                    readonly id: 32106;
                                                                    readonly name: "chain";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: 32012;
                                                                    readonly src: "7384:5:152";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                                                        readonly typeString: "struct StdChains.Chain memory";
                                                                    };
                                                                };
                                                                readonly id: 32107;
                                                                readonly isConstant: false;
                                                                readonly isLValue: true;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly memberLocation: "7390:6:152";
                                                                readonly memberName: "rpcUrl";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly referencedDeclaration: 31673;
                                                                readonly src: "7384:12:152";
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
                                                                readonly id: 32105;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: true;
                                                                readonly lValueRequested: false;
                                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                                readonly src: "7378:5:152";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                                    readonly typeString: "type(bytes storage pointer)";
                                                                };
                                                                readonly typeName: {
                                                                    readonly id: 32104;
                                                                    readonly name: "bytes";
                                                                    readonly nodeType: "ElementaryTypeName";
                                                                    readonly src: "7378:5:152";
                                                                    readonly typeDescriptions: {};
                                                                };
                                                            };
                                                            readonly id: 32108;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly kind: "typeConversion";
                                                            readonly lValueRequested: false;
                                                            readonly nameLocations: readonly [];
                                                            readonly names: readonly [];
                                                            readonly nodeType: "FunctionCall";
                                                            readonly src: "7378:19:152";
                                                            readonly tryCall: false;
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                                readonly typeString: "bytes memory";
                                                            };
                                                        };
                                                        readonly id: 32109;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "7398:6:152";
                                                        readonly memberName: "length";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly src: "7378:26:152";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "==";
                                                    readonly rightExpression: {
                                                        readonly hexValue: "30";
                                                        readonly id: 32110;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "7408:1:152";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_rational_0_by_1";
                                                            readonly typeString: "int_const 0";
                                                        };
                                                        readonly value: "0";
                                                    };
                                                    readonly src: "7378:31:152";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bool";
                                                        readonly typeString: "bool";
                                                    };
                                                };
                                                readonly src: "7332:77:152";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bool";
                                                    readonly typeString: "bool";
                                                };
                                            };
                                            readonly id: 32115;
                                            readonly nodeType: "IfStatement";
                                            readonly src: "7328:267:152";
                                            readonly trueBody: {
                                                readonly id: 32114;
                                                readonly nodeType: "Block";
                                                readonly src: "7411:184:152";
                                                readonly statements: readonly [{
                                                    readonly AST: {
                                                        readonly nodeType: "YulBlock";
                                                        readonly src: "7497:80:152";
                                                        readonly statements: readonly [{
                                                            readonly expression: {
                                                                readonly arguments: readonly [{
                                                                    readonly arguments: readonly [{
                                                                        readonly kind: "number";
                                                                        readonly nodeType: "YulLiteral";
                                                                        readonly src: "7534:2:152";
                                                                        readonly type: "";
                                                                        readonly value: "32";
                                                                    }, {
                                                                        readonly name: "err";
                                                                        readonly nodeType: "YulIdentifier";
                                                                        readonly src: "7538:3:152";
                                                                    }];
                                                                    readonly functionName: {
                                                                        readonly name: "add";
                                                                        readonly nodeType: "YulIdentifier";
                                                                        readonly src: "7530:3:152";
                                                                    };
                                                                    readonly nodeType: "YulFunctionCall";
                                                                    readonly src: "7530:12:152";
                                                                }, {
                                                                    readonly arguments: readonly [{
                                                                        readonly name: "err";
                                                                        readonly nodeType: "YulIdentifier";
                                                                        readonly src: "7550:3:152";
                                                                    }];
                                                                    readonly functionName: {
                                                                        readonly name: "mload";
                                                                        readonly nodeType: "YulIdentifier";
                                                                        readonly src: "7544:5:152";
                                                                    };
                                                                    readonly nodeType: "YulFunctionCall";
                                                                    readonly src: "7544:10:152";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "revert";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "7523:6:152";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "7523:32:152";
                                                            };
                                                            readonly nodeType: "YulExpressionStatement";
                                                            readonly src: "7523:32:152";
                                                        }];
                                                    };
                                                    readonly documentation: "@solidity memory-safe-assembly";
                                                    readonly evmVersion: "paris";
                                                    readonly externalReferences: readonly [{
                                                        readonly declaration: 32042;
                                                        readonly isOffset: false;
                                                        readonly isSlot: false;
                                                        readonly src: "7538:3:152";
                                                        readonly valueSize: 1;
                                                    }, {
                                                        readonly declaration: 32042;
                                                        readonly isOffset: false;
                                                        readonly isSlot: false;
                                                        readonly src: "7550:3:152";
                                                        readonly valueSize: 1;
                                                    }];
                                                    readonly id: 32113;
                                                    readonly nodeType: "InlineAssembly";
                                                    readonly src: "7488:89:152";
                                                }];
                                            };
                                        }];
                                    };
                                    readonly errorName: "";
                                    readonly id: 32117;
                                    readonly nodeType: "TryCatchClause";
                                    readonly parameters: {
                                        readonly id: 32043;
                                        readonly nodeType: "ParameterList";
                                        readonly parameters: readonly [{
                                            readonly constant: false;
                                            readonly id: 32042;
                                            readonly mutability: "mutable";
                                            readonly name: "err";
                                            readonly nameLocation: "6746:3:152";
                                            readonly nodeType: "VariableDeclaration";
                                            readonly scope: 32117;
                                            readonly src: "6733:16:152";
                                            readonly stateVariable: false;
                                            readonly storageLocation: "memory";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes";
                                            };
                                            readonly typeName: {
                                                readonly id: 32041;
                                                readonly name: "bytes";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "6733:5:152";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                                    readonly typeString: "bytes";
                                                };
                                            };
                                            readonly visibility: "internal";
                                        }];
                                        readonly src: "6732:18:152";
                                    };
                                    readonly src: "6726:883:152";
                                }];
                                readonly externalCall: {
                                    readonly arguments: readonly [{
                                        readonly id: 32028;
                                        readonly name: "chainAlias";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 32009;
                                        readonly src: "6616:10:152";
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
                                            readonly id: 32026;
                                            readonly name: "vm";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 31656;
                                            readonly src: "6606:2:152";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_VmSafe_$40840";
                                                readonly typeString: "contract VmSafe";
                                            };
                                        };
                                        readonly id: 32027;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6609:6:152";
                                        readonly memberName: "rpcUrl";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 40801;
                                        readonly src: "6606:9:152";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                            readonly typeString: "function (string memory) view external returns (string memory)";
                                        };
                                    };
                                    readonly id: 32029;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6606:21:152";
                                    readonly tryCall: true;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                };
                                readonly id: 32118;
                                readonly nodeType: "TryStatement";
                                readonly src: "6602:1007:152";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 32121;
                            readonly name: "chain";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 32012;
                            readonly src: "7635:5:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                                readonly typeString: "struct StdChains.Chain memory";
                            };
                        };
                        readonly functionReturnParameters: 32017;
                        readonly id: 32122;
                        readonly nodeType: "Return";
                        readonly src: "7628:12:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getChainWithUpdatedRpcUrl";
                readonly nameLocation: "6438:25:152";
                readonly parameters: {
                    readonly id: 32013;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 32009;
                        readonly mutability: "mutable";
                        readonly name: "chainAlias";
                        readonly nameLocation: "6478:10:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 32124;
                        readonly src: "6464:24:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 32008;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6464:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 32012;
                        readonly mutability: "mutable";
                        readonly name: "chain";
                        readonly nameLocation: "6503:5:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 32124;
                        readonly src: "6490:18:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                            readonly typeString: "struct StdChains.Chain";
                        };
                        readonly typeName: {
                            readonly id: 32011;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 32010;
                                readonly name: "Chain";
                                readonly nameLocations: readonly ["6490:5:152"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 31674;
                                readonly src: "6490:5:152";
                            };
                            readonly referencedDeclaration: 31674;
                            readonly src: "6490:5:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$31674_storage_ptr";
                                readonly typeString: "struct StdChains.Chain";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6463:46:152";
                };
                readonly returnParameters: {
                    readonly id: 32017;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 32016;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 32124;
                        readonly src: "6527:12:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Chain_$31674_memory_ptr";
                            readonly typeString: "struct StdChains.Chain";
                        };
                        readonly typeName: {
                            readonly id: 32015;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 32014;
                                readonly name: "Chain";
                                readonly nameLocations: readonly ["6527:5:152"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 31674;
                                readonly src: "6527:5:152";
                            };
                            readonly referencedDeclaration: 31674;
                            readonly src: "6527:5:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$31674_storage_ptr";
                                readonly typeString: "struct StdChains.Chain";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6526:14:152";
                };
                readonly scope: 32354;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 32134;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7653:117:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 32133;
                    readonly nodeType: "Block";
                    readonly src: "7716:54:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 32131;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 32129;
                                readonly name: "fallbackToDefaultRpcUrls";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 31690;
                                readonly src: "7726:24:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 32130;
                                readonly name: "useDefault";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32126;
                                readonly src: "7753:10:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "7726:37:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 32132;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "7726:37:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setFallbackToDefaultRpcUrls";
                readonly nameLocation: "7662:27:152";
                readonly parameters: {
                    readonly id: 32127;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 32126;
                        readonly mutability: "mutable";
                        readonly name: "useDefault";
                        readonly nameLocation: "7695:10:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 32134;
                        readonly src: "7690:15:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 32125;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7690:4:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7689:17:152";
                };
                readonly returnParameters: {
                    readonly id: 32128;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7716:0:152";
                };
                readonly scope: 32354;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 32316;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7776:2751:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 32315;
                    readonly nodeType: "Block";
                    readonly src: "7815:2712:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly id: 32137;
                            readonly name: "stdChainsInitialized";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 31658;
                            readonly src: "7829:20:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 32139;
                        readonly nodeType: "IfStatement";
                        readonly src: "7825:33:152";
                        readonly trueBody: {
                            readonly functionReturnParameters: 32136;
                            readonly id: 32138;
                            readonly nodeType: "Return";
                            readonly src: "7851:7:152";
                        };
                    }, {
                        readonly expression: {
                            readonly id: 32142;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 32140;
                                readonly name: "stdChainsInitialized";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 31658;
                                readonly src: "7868:20:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly hexValue: "74727565";
                                readonly id: 32141;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "bool";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "7891:4:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly value: "true";
                            };
                            readonly src: "7868:27:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 32143;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "7868:27:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "616e76696c";
                                readonly id: 32145;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8018:7:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_a3d859b77cebfdf9da3b485434702c5090ff9e91b7b86c670ebb15f8a00eb72b";
                                    readonly typeString: "literal_string \"anvil\"";
                                };
                                readonly value: "anvil";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "416e76696c";
                                    readonly id: 32147;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8037:7:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_1ab1bd2f543bf53e1036abfe292a89809c7285bff756db6e274686afe6fb41b4";
                                        readonly typeString: "literal_string \"Anvil\"";
                                    };
                                    readonly value: "Anvil";
                                }, {
                                    readonly hexValue: "3331333337";
                                    readonly id: 32148;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8046:5:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_31337_by_1";
                                        readonly typeString: "int_const 31337";
                                    };
                                    readonly value: "31337";
                                }, {
                                    readonly hexValue: "687474703a2f2f3132372e302e302e313a38353435";
                                    readonly id: 32149;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8053:23:152";
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
                                    readonly id: 32146;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31665;
                                    readonly src: "8027:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$31665_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 32150;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8027:50:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_a3d859b77cebfdf9da3b485434702c5090ff9e91b7b86c670ebb15f8a00eb72b";
                                    readonly typeString: "literal_string \"anvil\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 32144;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32353;
                                readonly src: "7992:25:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 32151;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7992:86:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 32152;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "7992:86:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6d61696e6e6574";
                                readonly id: 32154;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8127:9:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_7beafa94c8bfb8f1c1a43104a34f72c524268aafbfe83bff17485539345c66ff";
                                    readonly typeString: "literal_string \"mainnet\"";
                                };
                                readonly value: "mainnet";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4d61696e6e6574";
                                    readonly id: 32156;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8148:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_8d646f556e5d9d6f1edcf7a39b77f5ac253776eb34efcfd688aacbee518efc26";
                                        readonly typeString: "literal_string \"Mainnet\"";
                                    };
                                    readonly value: "Mainnet";
                                }, {
                                    readonly hexValue: "31";
                                    readonly id: 32157;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8159:1:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1_by_1";
                                        readonly typeString: "int_const 1";
                                    };
                                    readonly value: "1";
                                }, {
                                    readonly hexValue: "68747470733a2f2f6d61696e6e65742e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031";
                                    readonly id: 32158;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8162:63:152";
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
                                    readonly id: 32155;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31665;
                                    readonly src: "8138:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$31665_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 32159;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8138:88:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_7beafa94c8bfb8f1c1a43104a34f72c524268aafbfe83bff17485539345c66ff";
                                    readonly typeString: "literal_string \"mainnet\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 32153;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32353;
                                readonly src: "8088:25:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 32160;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8088:148:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 32161;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8088:148:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "676f65726c69";
                                readonly id: 32163;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8285:8:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_e24dd81d18a6354d406364c0fc25f4237534cee10d0c3099c9c2a6aa50d7dd0a";
                                    readonly typeString: "literal_string \"goerli\"";
                                };
                                readonly value: "goerli";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "476f65726c69";
                                    readonly id: 32165;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8305:8:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_736fc55653a3415af498a1309898240f13c5e9e33098fa3cf9e5f2a200d14c3e";
                                        readonly typeString: "literal_string \"Goerli\"";
                                    };
                                    readonly value: "Goerli";
                                }, {
                                    readonly hexValue: "35";
                                    readonly id: 32166;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8315:1:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_5_by_1";
                                        readonly typeString: "int_const 5";
                                    };
                                    readonly value: "5";
                                }, {
                                    readonly hexValue: "68747470733a2f2f676f65726c692e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031";
                                    readonly id: 32167;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8318:62:152";
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
                                    readonly id: 32164;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31665;
                                    readonly src: "8295:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$31665_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 32168;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8295:86:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_e24dd81d18a6354d406364c0fc25f4237534cee10d0c3099c9c2a6aa50d7dd0a";
                                    readonly typeString: "literal_string \"goerli\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 32162;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32353;
                                readonly src: "8246:25:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 32169;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8246:145:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 32170;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8246:145:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "7365706f6c6961";
                                readonly id: 32172;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8440:9:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_e1f58df0b51f34f4835aba989f0aa2f2e66218cab53207bafd3dbf37270bd39a";
                                    readonly typeString: "literal_string \"sepolia\"";
                                };
                                readonly value: "sepolia";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "5365706f6c6961";
                                    readonly id: 32174;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8461:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_a6b54cd124a84bb64f1808905ed95fb171a09730726f85e60eefcd47a4831b27";
                                        readonly typeString: "literal_string \"Sepolia\"";
                                    };
                                    readonly value: "Sepolia";
                                }, {
                                    readonly hexValue: "3131313535313131";
                                    readonly id: 32175;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8472:8:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_11155111_by_1";
                                        readonly typeString: "int_const 11155111";
                                    };
                                    readonly value: "11155111";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7365706f6c69612e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031";
                                    readonly id: 32176;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8482:63:152";
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
                                    readonly id: 32173;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31665;
                                    readonly src: "8451:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$31665_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 32177;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8451:95:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_e1f58df0b51f34f4835aba989f0aa2f2e66218cab53207bafd3dbf37270bd39a";
                                    readonly typeString: "literal_string \"sepolia\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 32171;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32353;
                                readonly src: "8401:25:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 32178;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8401:155:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 32179;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8401:155:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6f7074696d69736d";
                                readonly id: 32181;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8592:10:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_09d0f27659ee556a8134fa56941e42400e672aecc2d4cfc61cdb0fcea4590e05";
                                    readonly typeString: "literal_string \"optimism\"";
                                };
                                readonly value: "optimism";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4f7074696d69736d";
                                    readonly id: 32183;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8614:10:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_f997187c3c319ef9e33fa05f852d1612b66e309dc48d97a4b6b39832090a3bec";
                                        readonly typeString: "literal_string \"Optimism\"";
                                    };
                                    readonly value: "Optimism";
                                }, {
                                    readonly hexValue: "3130";
                                    readonly id: 32184;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8626:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_10_by_1";
                                        readonly typeString: "int_const 10";
                                    };
                                    readonly value: "10";
                                }, {
                                    readonly hexValue: "68747470733a2f2f6d61696e6e65742e6f7074696d69736d2e696f";
                                    readonly id: 32185;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8630:29:152";
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
                                    readonly id: 32182;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31665;
                                    readonly src: "8604:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$31665_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 32186;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8604:56:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_09d0f27659ee556a8134fa56941e42400e672aecc2d4cfc61cdb0fcea4590e05";
                                    readonly typeString: "literal_string \"optimism\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 32180;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32353;
                                readonly src: "8566:25:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 32187;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8566:95:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 32188;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8566:95:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6f7074696d69736d5f676f65726c69";
                                readonly id: 32190;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8697:17:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_ecf3b2cc678a701bfbf2329b12e6edf723c3043a32339c2eea2efb7c9533c09c";
                                    readonly typeString: "literal_string \"optimism_goerli\"";
                                };
                                readonly value: "optimism_goerli";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4f7074696d69736d20476f65726c69";
                                    readonly id: 32192;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8726:17:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_6271e061a2d4ce1b6e267081a40c4dca996efe738d092d650bcfa23669d2fd24";
                                        readonly typeString: "literal_string \"Optimism Goerli\"";
                                    };
                                    readonly value: "Optimism Goerli";
                                }, {
                                    readonly hexValue: "343230";
                                    readonly id: 32193;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8745:3:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_420_by_1";
                                        readonly typeString: "int_const 420";
                                    };
                                    readonly value: "420";
                                }, {
                                    readonly hexValue: "68747470733a2f2f676f65726c692e6f7074696d69736d2e696f";
                                    readonly id: 32194;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8750:28:152";
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
                                    readonly id: 32191;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31665;
                                    readonly src: "8716:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$31665_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 32195;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8716:63:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_ecf3b2cc678a701bfbf2329b12e6edf723c3043a32339c2eea2efb7c9533c09c";
                                    readonly typeString: "literal_string \"optimism_goerli\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 32189;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32353;
                                readonly src: "8671:25:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 32196;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8671:109:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 32197;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8671:109:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "617262697472756d5f6f6e65";
                                readonly id: 32199;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8816:14:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_e4b44cea7839e0679ac5072602932da9b25ebfb3a9ac42625d9c583a7b6b2eb4";
                                    readonly typeString: "literal_string \"arbitrum_one\"";
                                };
                                readonly value: "arbitrum_one";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "417262697472756d204f6e65";
                                    readonly id: 32201;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8842:14:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_9e42b1aebd5463751aea2c5f6ee37505334a82b4085315a5f4b8b0f81d3b9004";
                                        readonly typeString: "literal_string \"Arbitrum One\"";
                                    };
                                    readonly value: "Arbitrum One";
                                }, {
                                    readonly hexValue: "3432313631";
                                    readonly id: 32202;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8858:5:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_42161_by_1";
                                        readonly typeString: "int_const 42161";
                                    };
                                    readonly value: "42161";
                                }, {
                                    readonly hexValue: "68747470733a2f2f617262312e617262697472756d2e696f2f727063";
                                    readonly id: 32203;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8865:30:152";
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
                                    readonly id: 32200;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31665;
                                    readonly src: "8832:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$31665_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 32204;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8832:64:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_e4b44cea7839e0679ac5072602932da9b25ebfb3a9ac42625d9c583a7b6b2eb4";
                                    readonly typeString: "literal_string \"arbitrum_one\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 32198;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32353;
                                readonly src: "8790:25:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 32205;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8790:107:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 32206;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8790:107:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "617262697472756d5f6f6e655f676f65726c69";
                                readonly id: 32208;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8946:21:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_9c5068a3a5cdbd747f13200fdd6f590995f99bde231a5dcfa62a5f92af1dc3d4";
                                    readonly typeString: "literal_string \"arbitrum_one_goerli\"";
                                };
                                readonly value: "arbitrum_one_goerli";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "417262697472756d204f6e6520476f65726c69";
                                    readonly id: 32210;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8979:21:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_57f7b6894161eb541e81676f15adf1e65eee36bdcfd592f252d22d4394480f21";
                                        readonly typeString: "literal_string \"Arbitrum One Goerli\"";
                                    };
                                    readonly value: "Arbitrum One Goerli";
                                }, {
                                    readonly hexValue: "343231363133";
                                    readonly id: 32211;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9002:6:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_421613_by_1";
                                        readonly typeString: "int_const 421613";
                                    };
                                    readonly value: "421613";
                                }, {
                                    readonly hexValue: "68747470733a2f2f676f65726c692d726f6c6c75702e617262697472756d2e696f2f727063";
                                    readonly id: 32212;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9010:39:152";
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
                                    readonly id: 32209;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31665;
                                    readonly src: "8969:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$31665_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 32213;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8969:81:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_9c5068a3a5cdbd747f13200fdd6f590995f99bde231a5dcfa62a5f92af1dc3d4";
                                    readonly typeString: "literal_string \"arbitrum_one_goerli\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 32207;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32353;
                                readonly src: "8907:25:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 32214;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8907:153:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 32215;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8907:153:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "617262697472756d5f6e6f7661";
                                readonly id: 32217;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9096:15:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_9338ed1403277416ebb39d4e992ebf5c49e6dded5ec79963ea5fc261cbd7fdac";
                                    readonly typeString: "literal_string \"arbitrum_nova\"";
                                };
                                readonly value: "arbitrum_nova";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "417262697472756d204e6f7661";
                                    readonly id: 32219;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9123:15:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_25c77b7679bf463420c39c7728b9f65b6a8f1ae05b3335eb9e394b1b61bf8f21";
                                        readonly typeString: "literal_string \"Arbitrum Nova\"";
                                    };
                                    readonly value: "Arbitrum Nova";
                                }, {
                                    readonly hexValue: "3432313730";
                                    readonly id: 32220;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9140:5:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_42170_by_1";
                                        readonly typeString: "int_const 42170";
                                    };
                                    readonly value: "42170";
                                }, {
                                    readonly hexValue: "68747470733a2f2f6e6f76612e617262697472756d2e696f2f727063";
                                    readonly id: 32221;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9147:30:152";
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
                                    readonly id: 32218;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31665;
                                    readonly src: "9113:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$31665_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 32222;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9113:65:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_9338ed1403277416ebb39d4e992ebf5c49e6dded5ec79963ea5fc261cbd7fdac";
                                    readonly typeString: "literal_string \"arbitrum_nova\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 32216;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32353;
                                readonly src: "9070:25:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 32223;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9070:109:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 32224;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9070:109:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "706f6c79676f6e";
                                readonly id: 32226;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9215:9:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_ac63fa1fe369e75c38d62f0f4d465b48b3cd5159f0fb416332899402031d1408";
                                    readonly typeString: "literal_string \"polygon\"";
                                };
                                readonly value: "polygon";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "506f6c79676f6e";
                                    readonly id: 32228;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9236:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_890af8db8ca1aa1e915857edbc2717639ebd8a22c786f9e0e776d6a1aacb5e71";
                                        readonly typeString: "literal_string \"Polygon\"";
                                    };
                                    readonly value: "Polygon";
                                }, {
                                    readonly hexValue: "313337";
                                    readonly id: 32229;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9247:3:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_137_by_1";
                                        readonly typeString: "int_const 137";
                                    };
                                    readonly value: "137";
                                }, {
                                    readonly hexValue: "68747470733a2f2f706f6c79676f6e2d7270632e636f6d";
                                    readonly id: 32230;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9252:25:152";
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
                                    readonly id: 32227;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31665;
                                    readonly src: "9226:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$31665_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 32231;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9226:52:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_ac63fa1fe369e75c38d62f0f4d465b48b3cd5159f0fb416332899402031d1408";
                                    readonly typeString: "literal_string \"polygon\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 32225;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32353;
                                readonly src: "9189:25:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 32232;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9189:90:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 32233;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9189:90:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "706f6c79676f6e5f6d756d626169";
                                readonly id: 32235;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9328:16:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_a7308364e169f5f44de3933205a00d3632b7366702c91dff3452b4dbf6ed70f0";
                                    readonly typeString: "literal_string \"polygon_mumbai\"";
                                };
                                readonly value: "polygon_mumbai";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "506f6c79676f6e204d756d626169";
                                    readonly id: 32237;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9356:16:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_173b0df64039e25119e26da4408dbd53da69bf06543516209ecc66f21e0c9725";
                                        readonly typeString: "literal_string \"Polygon Mumbai\"";
                                    };
                                    readonly value: "Polygon Mumbai";
                                }, {
                                    readonly hexValue: "3830303031";
                                    readonly id: 32238;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9374:5:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_80001_by_1";
                                        readonly typeString: "int_const 80001";
                                    };
                                    readonly value: "80001";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7270632d6d756d6261692e6d61746963766967696c2e636f6d";
                                    readonly id: 32239;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9381:35:152";
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
                                    readonly id: 32236;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31665;
                                    readonly src: "9346:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$31665_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 32240;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9346:71:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_a7308364e169f5f44de3933205a00d3632b7366702c91dff3452b4dbf6ed70f0";
                                    readonly typeString: "literal_string \"polygon_mumbai\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 32234;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32353;
                                readonly src: "9289:25:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 32241;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9289:138:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 32242;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9289:138:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6176616c616e636865";
                                readonly id: 32244;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9463:11:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_6e8b0d92516ee4289145e3b78cea58daac177b1c618beeedbc6cdabd388a6e55";
                                    readonly typeString: "literal_string \"avalanche\"";
                                };
                                readonly value: "avalanche";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4176616c616e636865";
                                    readonly id: 32246;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9486:11:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_6585177c3aba6cb7ffc0a37e831a958c4ee9278e4c62c7bdad7175ca09883c40";
                                        readonly typeString: "literal_string \"Avalanche\"";
                                    };
                                    readonly value: "Avalanche";
                                }, {
                                    readonly hexValue: "3433313134";
                                    readonly id: 32247;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9499:5:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_43114_by_1";
                                        readonly typeString: "int_const 43114";
                                    };
                                    readonly value: "43114";
                                }, {
                                    readonly hexValue: "68747470733a2f2f6170692e617661782e6e6574776f726b2f6578742f62632f432f727063";
                                    readonly id: 32248;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9506:39:152";
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
                                    readonly id: 32245;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31665;
                                    readonly src: "9476:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$31665_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 32249;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9476:70:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_6e8b0d92516ee4289145e3b78cea58daac177b1c618beeedbc6cdabd388a6e55";
                                    readonly typeString: "literal_string \"avalanche\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 32243;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32353;
                                readonly src: "9437:25:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 32250;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9437:110:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 32251;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9437:110:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6176616c616e6368655f66756a69";
                                readonly id: 32253;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9596:16:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_a1920d2f80060f1c83444622c7eb5adf4484bed8a537b8d13eae53bd800aa692";
                                    readonly typeString: "literal_string \"avalanche_fuji\"";
                                };
                                readonly value: "avalanche_fuji";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4176616c616e6368652046756a69";
                                    readonly id: 32255;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9624:16:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_522b176494c651b1a4c5779e66ed19f885df62891abfb18fd5e45b69bdabe11b";
                                        readonly typeString: "literal_string \"Avalanche Fuji\"";
                                    };
                                    readonly value: "Avalanche Fuji";
                                }, {
                                    readonly hexValue: "3433313133";
                                    readonly id: 32256;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9642:5:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_43113_by_1";
                                        readonly typeString: "int_const 43113";
                                    };
                                    readonly value: "43113";
                                }, {
                                    readonly hexValue: "68747470733a2f2f6170692e617661782d746573742e6e6574776f726b2f6578742f62632f432f727063";
                                    readonly id: 32257;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9649:44:152";
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
                                    readonly id: 32254;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31665;
                                    readonly src: "9614:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$31665_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 32258;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9614:80:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_a1920d2f80060f1c83444622c7eb5adf4484bed8a537b8d13eae53bd800aa692";
                                    readonly typeString: "literal_string \"avalanche_fuji\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 32252;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32353;
                                readonly src: "9557:25:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 32259;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9557:147:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 32260;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9557:147:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "626e625f736d6172745f636861696e";
                                readonly id: 32262;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9753:17:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_fa8b17ae9aa26749f5dc3a3bb333e0019db0c257f3541e870f73bb48b574361e";
                                    readonly typeString: "literal_string \"bnb_smart_chain\"";
                                };
                                readonly value: "bnb_smart_chain";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "424e4220536d61727420436861696e";
                                    readonly id: 32264;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9782:17:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_3606544ee65d30d7c7f7d6a1f6618e0d836299fa5b85b88d71a59535c6a1550f";
                                        readonly typeString: "literal_string \"BNB Smart Chain\"";
                                    };
                                    readonly value: "BNB Smart Chain";
                                }, {
                                    readonly hexValue: "3536";
                                    readonly id: 32265;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9801:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_56_by_1";
                                        readonly typeString: "int_const 56";
                                    };
                                    readonly value: "56";
                                }, {
                                    readonly hexValue: "68747470733a2f2f6273632d6461746173656564312e62696e616e63652e6f7267";
                                    readonly id: 32266;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9805:35:152";
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
                                    readonly id: 32263;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31665;
                                    readonly src: "9772:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$31665_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 32267;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9772:69:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_fa8b17ae9aa26749f5dc3a3bb333e0019db0c257f3541e870f73bb48b574361e";
                                    readonly typeString: "literal_string \"bnb_smart_chain\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 32261;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32353;
                                readonly src: "9714:25:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 32268;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9714:137:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 32269;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9714:137:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "626e625f736d6172745f636861696e5f746573746e6574";
                                readonly id: 32271;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9900:25:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_1813de9892ab9db3d0c3b0c3eed9c8b820fe0c7e205bed860e6e89f4d7f75f29";
                                    readonly typeString: "literal_string \"bnb_smart_chain_testnet\"";
                                };
                                readonly value: "bnb_smart_chain_testnet";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "424e4220536d61727420436861696e20546573746e6574";
                                    readonly id: 32273;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9949:25:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_3b1d88342c4ab079c9a8243ef8dfeb0bb41e1da5dc9fe62ca728dfe4ea21092c";
                                        readonly typeString: "literal_string \"BNB Smart Chain Testnet\"";
                                    };
                                    readonly value: "BNB Smart Chain Testnet";
                                }, {
                                    readonly hexValue: "3937";
                                    readonly id: 32274;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9976:2:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_97_by_1";
                                        readonly typeString: "int_const 97";
                                    };
                                    readonly value: "97";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7270632e616e6b722e636f6d2f6273635f746573746e65745f63686170656c";
                                    readonly id: 32275;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9980:41:152";
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
                                    readonly id: 32272;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31665;
                                    readonly src: "9939:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$31665_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 32276;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9939:83:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_1813de9892ab9db3d0c3b0c3eed9c8b820fe0c7e205bed860e6e89f4d7f75f29";
                                    readonly typeString: "literal_string \"bnb_smart_chain_testnet\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 32270;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32353;
                                readonly src: "9861:25:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 32277;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9861:171:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 32278;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9861:171:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "676e6f7369735f636861696e";
                                readonly id: 32280;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10068:14:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_847b7ed4df59b2dfcdba377bf4ac481c502926169e9af948ee2dd45c0e6df595";
                                    readonly typeString: "literal_string \"gnosis_chain\"";
                                };
                                readonly value: "gnosis_chain";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "476e6f73697320436861696e";
                                    readonly id: 32282;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10094:14:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_9bfc6ae4a1f5d8ea33b4f631c2f7dfbfa7d613af42ef38137c06d4cd03619b02";
                                        readonly typeString: "literal_string \"Gnosis Chain\"";
                                    };
                                    readonly value: "Gnosis Chain";
                                }, {
                                    readonly hexValue: "313030";
                                    readonly id: 32283;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10110:3:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_100_by_1";
                                        readonly typeString: "int_const 100";
                                    };
                                    readonly value: "100";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7270632e676e6f736973636861696e2e636f6d";
                                    readonly id: 32284;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10115:29:152";
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
                                    readonly id: 32281;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31665;
                                    readonly src: "10084:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$31665_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 32285;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10084:61:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_847b7ed4df59b2dfcdba377bf4ac481c502926169e9af948ee2dd45c0e6df595";
                                    readonly typeString: "literal_string \"gnosis_chain\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 32279;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32353;
                                readonly src: "10042:25:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 32286;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10042:104:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 32287;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10042:104:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6d6f6f6e6265616d";
                                readonly id: 32289;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10182:10:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_26aaddd9933ae745bc6e39b5e8962c0d0eef85597e0bdcb35ce7e0d96b84735d";
                                    readonly typeString: "literal_string \"moonbeam\"";
                                };
                                readonly value: "moonbeam";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4d6f6f6e6265616d";
                                    readonly id: 32291;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10204:10:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_99a49606e97aa9d58789783bd4cdfcc3ab4072167b449d1e303cb1135216531b";
                                        readonly typeString: "literal_string \"Moonbeam\"";
                                    };
                                    readonly value: "Moonbeam";
                                }, {
                                    readonly hexValue: "31323834";
                                    readonly id: 32292;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10216:4:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1284_by_1";
                                        readonly typeString: "int_const 1284";
                                    };
                                    readonly value: "1284";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7270632e6170692e6d6f6f6e6265616d2e6e6574776f726b";
                                    readonly id: 32293;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10222:34:152";
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
                                    readonly id: 32290;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31665;
                                    readonly src: "10194:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$31665_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 32294;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10194:63:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_26aaddd9933ae745bc6e39b5e8962c0d0eef85597e0bdcb35ce7e0d96b84735d";
                                    readonly typeString: "literal_string \"moonbeam\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 32288;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32353;
                                readonly src: "10156:25:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 32295;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10156:102:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 32296;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10156:102:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6d6f6f6e7269766572";
                                readonly id: 32298;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10307:11:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_2eb4cae4af32e190d8881d6d0a59016ff55092d3a70bcf6b321432516acfd74a";
                                    readonly typeString: "literal_string \"moonriver\"";
                                };
                                readonly value: "moonriver";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4d6f6f6e7269766572";
                                    readonly id: 32300;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10330:11:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_65d5ad77d0dd38eb7219d1087db2cb9c2440e3f70be3ee1567aa2329d21dad8a";
                                        readonly typeString: "literal_string \"Moonriver\"";
                                    };
                                    readonly value: "Moonriver";
                                }, {
                                    readonly hexValue: "31323835";
                                    readonly id: 32301;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10343:4:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1285_by_1";
                                        readonly typeString: "int_const 1285";
                                    };
                                    readonly value: "1285";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7270632e6170692e6d6f6f6e72697665722e6d6f6f6e6265616d2e6e6574776f726b";
                                    readonly id: 32302;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10349:44:152";
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
                                    readonly id: 32299;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31665;
                                    readonly src: "10320:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$31665_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 32303;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10320:74:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_2eb4cae4af32e190d8881d6d0a59016ff55092d3a70bcf6b321432516acfd74a";
                                    readonly typeString: "literal_string \"moonriver\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 32297;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32353;
                                readonly src: "10268:25:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 32304;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10268:136:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 32305;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10268:136:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6d6f6f6e62617365";
                                readonly id: 32307;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10440:10:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_ccd05eb377a4954d8471e48341881dadc4d2a36094f09ce309d35b3b6204f44e";
                                    readonly typeString: "literal_string \"moonbase\"";
                                };
                                readonly value: "moonbase";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4d6f6f6e62617365";
                                    readonly id: 32309;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10462:10:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_6f3c53069778183912da77a05fe67c3d6edb208ffdf1ca0161d51543035e3c68";
                                        readonly typeString: "literal_string \"Moonbase\"";
                                    };
                                    readonly value: "Moonbase";
                                }, {
                                    readonly hexValue: "31323837";
                                    readonly id: 32310;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10474:4:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1287_by_1";
                                        readonly typeString: "int_const 1287";
                                    };
                                    readonly value: "1287";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7270632e746573746e65742e6d6f6f6e6265616d2e6e6574776f726b";
                                    readonly id: 32311;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10480:38:152";
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
                                    readonly id: 32308;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31665;
                                    readonly src: "10452:9:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$31665_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 32312;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10452:67:152";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_ccd05eb377a4954d8471e48341881dadc4d2a36094f09ce309d35b3b6204f44e";
                                    readonly typeString: "literal_string \"moonbase\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 32306;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32353;
                                readonly src: "10414:25:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 32313;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10414:106:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 32314;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10414:106:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "initializeStdChains";
                readonly nameLocation: "7785:19:152";
                readonly parameters: {
                    readonly id: 32135;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7804:2:152";
                };
                readonly returnParameters: {
                    readonly id: 32136;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7815:0:152";
                };
                readonly scope: 32354;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 32353;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10609:305:152";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 32352;
                    readonly nodeType: "Block";
                    readonly src: "10702:212:152";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [32325];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 32325;
                            readonly mutability: "mutable";
                            readonly name: "rpcUrl";
                            readonly nameLocation: "10726:6:152";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 32352;
                            readonly src: "10712:20:152";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string";
                            };
                            readonly typeName: {
                                readonly id: 32324;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "10712:6:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 32328;
                        readonly initialValue: {
                            readonly expression: {
                                readonly id: 32326;
                                readonly name: "chain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32321;
                                readonly src: "10735:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            };
                            readonly id: 32327;
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "10741:6:152";
                            readonly memberName: "rpcUrl";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 31664;
                            readonly src: "10735:12:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "10712:35:152";
                    }, {
                        readonly expression: {
                            readonly id: 32333;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly id: 32329;
                                    readonly name: "defaultRpcUrls";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 31683;
                                    readonly src: "10757:14:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_string_storage_$";
                                        readonly typeString: "mapping(string memory => string storage ref)";
                                    };
                                };
                                readonly id: 32331;
                                readonly indexExpression: {
                                    readonly id: 32330;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 32318;
                                    readonly src: "10772:10:152";
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
                                readonly src: "10757:26:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage";
                                    readonly typeString: "string storage ref";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 32332;
                                readonly name: "rpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32325;
                                readonly src: "10786:6:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            };
                            readonly src: "10757:35:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage";
                                readonly typeString: "string storage ref";
                            };
                        };
                        readonly id: 32334;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10757:35:152";
                    }, {
                        readonly expression: {
                            readonly id: 32339;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 32335;
                                    readonly name: "chain";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 32321;
                                    readonly src: "10802:5:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                        readonly typeString: "struct StdChains.ChainData memory";
                                    };
                                };
                                readonly id: 32337;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "10808:6:152";
                                readonly memberName: "rpcUrl";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 31664;
                                readonly src: "10802:12:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly hexValue: "";
                                readonly id: 32338;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10817:2:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                    readonly typeString: "literal_string \"\"";
                                };
                                readonly value: "";
                            };
                            readonly src: "10802:17:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly id: 32340;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10802:17:152";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 32342;
                                readonly name: "chainAlias";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32318;
                                readonly src: "10838:10:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 32343;
                                readonly name: "chain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32321;
                                readonly src: "10850:5:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 32341;
                                readonly name: "setChain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [31909, 31930];
                                readonly referencedDeclaration: 31909;
                                readonly src: "10829:8:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31665_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 32344;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10829:27:152";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 32345;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10829:27:152";
                    }, {
                        readonly expression: {
                            readonly id: 32350;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 32346;
                                    readonly name: "chain";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 32321;
                                    readonly src: "10866:5:152";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                                        readonly typeString: "struct StdChains.ChainData memory";
                                    };
                                };
                                readonly id: 32348;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "10872:6:152";
                                readonly memberName: "rpcUrl";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 31664;
                                readonly src: "10866:12:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 32349;
                                readonly name: "rpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 32325;
                                readonly src: "10881:6:152";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            };
                            readonly src: "10866:21:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly id: 32351;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10866:21:152";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setChainWithDefaultRpcUrl";
                readonly nameLocation: "10618:25:152";
                readonly parameters: {
                    readonly id: 32322;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 32318;
                        readonly mutability: "mutable";
                        readonly name: "chainAlias";
                        readonly nameLocation: "10658:10:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 32353;
                        readonly src: "10644:24:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 32317;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10644:6:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 32321;
                        readonly mutability: "mutable";
                        readonly name: "chain";
                        readonly nameLocation: "10687:5:152";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 32353;
                        readonly src: "10670:22:152";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_ChainData_$31665_memory_ptr";
                            readonly typeString: "struct StdChains.ChainData";
                        };
                        readonly typeName: {
                            readonly id: 32320;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 32319;
                                readonly name: "ChainData";
                                readonly nameLocations: readonly ["10670:9:152"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 31665;
                                readonly src: "10670:9:152";
                            };
                            readonly referencedDeclaration: 31665;
                            readonly src: "10670:9:152";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_ChainData_$31665_storage_ptr";
                                readonly typeString: "struct StdChains.ChainData";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10643:50:152";
                };
                readonly returnParameters: {
                    readonly id: 32323;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10702:0:152";
                };
                readonly scope: 32354;
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
                readonly id: 31639;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "99:1799:152";
                readonly text: " StdChains provides information about EVM compatible chains that can be used in scripts/tests.\n For each chain, the chain's name, chain ID, and a default RPC URL are provided. Chains are\n identified by their alias, which is the same as the alias in the `[rpc_endpoints]` section of\n the `foundry.toml` file. For best UX, ensure the alias in the `foundry.toml` file match the\n alias used in this contract, which can be found as the first argument to the\n `setChainWithDefaultRpcUrl` call in the `initializeStdChains` function.\n There are two main ways to use this contract:\n   1. Set a chain with `setChain(string memory chainAlias, ChainData memory chain)` or\n      `setChain(string memory chainAlias, Chain memory chain)`\n   2. Get a chain with `getChain(string memory chainAlias)` or `getChain(uint256 chainId)`.\n The first time either of those are used, chains are initialized with the default set of RPC URLs.\n This is done in `initializeStdChains`, which uses `setChainWithDefaultRpcUrl`. Defaults are recorded in\n `defaultRpcUrls`.\n The `setChain` function is straightforward, and it simply saves off the given chain data.\n The `getChain` methods use `getChainWithUpdatedRpcUrl` to return a chain. For example, let's say\n we want to retrieve the RPC URL for `mainnet`:\n   - If you have specified data with `setChain`, it will return that.\n   - If you have configured a mainnet RPC URL in `foundry.toml`, it will return the URL, provided it\n     is valid (e.g. a URL is specified, or an environment variable is given and exists).\n   - If neither of the above conditions is met, the default data is returned.\n Summarizing the above, the prioritization hierarchy is `setChain` -> `foundry.toml` -> environment variable -> defaults.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [32354];
            readonly name: "StdChains";
            readonly nameLocation: "1917:9:152";
            readonly scope: 32355;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 152;
};
//# sourceMappingURL=StdChains.d.ts.map