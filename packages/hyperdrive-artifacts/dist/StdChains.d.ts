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
        readonly id: 27540;
        readonly exportedSymbols: {
            readonly StdChains: readonly [27539];
            readonly VmSafe: readonly [36025];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:10885:97";
        readonly nodes: readonly [{
            readonly id: 26821;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:97";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".2", "<", "0.9", ".0"];
        }, {
            readonly id: 26823;
            readonly nodeType: "ImportDirective";
            readonly src: "65:32:97";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/Vm.sol";
            readonly file: "./Vm.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 27540;
            readonly sourceUnit: 36498;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 26822;
                    readonly name: "VmSafe";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 36025;
                    readonly src: "73:6:97";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 27539;
            readonly nodeType: "ContractDefinition";
            readonly src: "1899:9017:97";
            readonly nodes: readonly [{
                readonly id: 26841;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1933:92:97";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "vm";
                readonly nameLocation: "1957:2:97";
                readonly scope: 27539;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_VmSafe_$36025";
                    readonly typeString: "contract VmSafe";
                };
                readonly typeName: {
                    readonly id: 26826;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 26825;
                        readonly name: "VmSafe";
                        readonly nameLocations: readonly ["1933:6:97"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 36025;
                        readonly src: "1933:6:97";
                    };
                    readonly referencedDeclaration: 36025;
                    readonly src: "1933:6:97";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$36025";
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
                                        readonly id: 26835;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "2003:17:97";
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
                                        readonly id: 26834;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "1993:9:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 26836;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1993:28:97";
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
                                    readonly id: 26833;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "1985:7:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                        readonly typeString: "type(uint256)";
                                    };
                                    readonly typeName: {
                                        readonly id: 26832;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "1985:7:97";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 26837;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1985:37:97";
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
                                readonly id: 26831;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "1977:7:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_uint160_$";
                                    readonly typeString: "type(uint160)";
                                };
                                readonly typeName: {
                                    readonly id: 26830;
                                    readonly name: "uint160";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "1977:7:97";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 26838;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1977:46:97";
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
                            readonly id: 26829;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "1969:7:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 26828;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1969:7:97";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 26839;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "1969:55:97";
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
                        readonly id: 26827;
                        readonly name: "VmSafe";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 36025;
                        readonly src: "1962:6:97";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_type$_t_contract$_VmSafe_$36025_$";
                            readonly typeString: "type(contract VmSafe)";
                        };
                    };
                    readonly id: 26840;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "typeConversion";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "1962:63:97";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$36025";
                        readonly typeString: "contract VmSafe";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 26843;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2032:33:97";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "stdChainsInitialized";
                readonly nameLocation: "2045:20:97";
                readonly scope: 27539;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bool";
                    readonly typeString: "bool";
                };
                readonly typeName: {
                    readonly id: 26842;
                    readonly name: "bool";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "2032:4:97";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 26850;
                readonly nodeType: "StructDefinition";
                readonly src: "2072:93:97";
                readonly nodes: readonly [];
                readonly canonicalName: "StdChains.ChainData";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 26845;
                    readonly mutability: "mutable";
                    readonly name: "name";
                    readonly nameLocation: "2106:4:97";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 26850;
                    readonly src: "2099:11:97";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                    readonly typeName: {
                        readonly id: 26844;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2099:6:97";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 26847;
                    readonly mutability: "mutable";
                    readonly name: "chainId";
                    readonly nameLocation: "2128:7:97";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 26850;
                    readonly src: "2120:15:97";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 26846;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2120:7:97";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 26849;
                    readonly mutability: "mutable";
                    readonly name: "rpcUrl";
                    readonly nameLocation: "2152:6:97";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 26850;
                    readonly src: "2145:13:97";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                    readonly typeName: {
                        readonly id: 26848;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2145:6:97";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "ChainData";
                readonly nameLocation: "2079:9:97";
                readonly scope: 27539;
                readonly visibility: "public";
            }, {
                readonly id: 26859;
                readonly nodeType: "StructDefinition";
                readonly src: "2171:598:97";
                readonly nodes: readonly [];
                readonly canonicalName: "StdChains.Chain";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 26852;
                    readonly mutability: "mutable";
                    readonly name: "name";
                    readonly nameLocation: "2228:4:97";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 26859;
                    readonly src: "2221:11:97";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                    readonly typeName: {
                        readonly id: 26851;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2221:6:97";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 26854;
                    readonly mutability: "mutable";
                    readonly name: "chainId";
                    readonly nameLocation: "2283:7:97";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 26859;
                    readonly src: "2275:15:97";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 26853;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2275:7:97";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 26856;
                    readonly mutability: "mutable";
                    readonly name: "chainAlias";
                    readonly nameLocation: "2383:10:97";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 26859;
                    readonly src: "2376:17:97";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                    readonly typeName: {
                        readonly id: 26855;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2376:6:97";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 26858;
                    readonly mutability: "mutable";
                    readonly name: "rpcUrl";
                    readonly nameLocation: "2756:6:97";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 26859;
                    readonly src: "2749:13:97";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                    readonly typeName: {
                        readonly id: 26857;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2749:6:97";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "Chain";
                readonly nameLocation: "2178:5:97";
                readonly scope: 27539;
                readonly visibility: "public";
            }, {
                readonly id: 26864;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2873:39:97";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "chains";
                readonly nameLocation: "2906:6:97";
                readonly scope: 27539;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26859_storage_$";
                    readonly typeString: "mapping(string => struct StdChains.Chain)";
                };
                readonly typeName: {
                    readonly id: 26863;
                    readonly keyName: "";
                    readonly keyNameLocation: "-1:-1:-1";
                    readonly keyType: {
                        readonly id: 26860;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2881:6:97";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "2873:24:97";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26859_storage_$";
                        readonly typeString: "mapping(string => struct StdChains.Chain)";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 26862;
                        readonly nodeType: "UserDefinedTypeName";
                        readonly pathNode: {
                            readonly id: 26861;
                            readonly name: "Chain";
                            readonly nameLocations: readonly ["2891:5:97"];
                            readonly nodeType: "IdentifierPath";
                            readonly referencedDeclaration: 26859;
                            readonly src: "2891:5:97";
                        };
                        readonly referencedDeclaration: 26859;
                        readonly src: "2891:5:97";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Chain_$26859_storage_ptr";
                            readonly typeString: "struct StdChains.Chain";
                        };
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 26868;
                readonly nodeType: "VariableDeclaration";
                readonly src: "2978:48:97";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "defaultRpcUrls";
                readonly nameLocation: "3012:14:97";
                readonly scope: 27539;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_string_storage_$";
                    readonly typeString: "mapping(string => string)";
                };
                readonly typeName: {
                    readonly id: 26867;
                    readonly keyName: "";
                    readonly keyNameLocation: "-1:-1:-1";
                    readonly keyType: {
                        readonly id: 26865;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2986:6:97";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "2978:25:97";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_string_storage_$";
                        readonly typeString: "mapping(string => string)";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 26866;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "2996:6:97";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 26872;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3075:44:97";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "idToAlias";
                readonly nameLocation: "3110:9:97";
                readonly scope: 27539;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_string_storage_$";
                    readonly typeString: "mapping(uint256 => string)";
                };
                readonly typeName: {
                    readonly id: 26871;
                    readonly keyName: "";
                    readonly keyNameLocation: "-1:-1:-1";
                    readonly keyType: {
                        readonly id: 26869;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3083:7:97";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly nodeType: "Mapping";
                    readonly src: "3075:26:97";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_string_storage_$";
                        readonly typeString: "mapping(uint256 => string)";
                    };
                    readonly valueName: "";
                    readonly valueNameLocation: "-1:-1:-1";
                    readonly valueType: {
                        readonly id: 26870;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "3094:6:97";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 26875;
                readonly nodeType: "VariableDeclaration";
                readonly src: "3126:44:97";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "fallbackToDefaultRpcUrls";
                readonly nameLocation: "3139:24:97";
                readonly scope: 27539;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_bool";
                    readonly typeString: "bool";
                };
                readonly typeName: {
                    readonly id: 26873;
                    readonly name: "bool";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "3126:4:97";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                };
                readonly value: {
                    readonly hexValue: "74727565";
                    readonly id: 26874;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "bool";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "3166:4:97";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly value: "true";
                };
                readonly visibility: "private";
            }, {
                readonly id: 26927;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3255:524:97";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26926;
                    readonly nodeType: "Block";
                    readonly src: "3345:434:97";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 26890;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly arguments: readonly [{
                                            readonly id: 26886;
                                            readonly name: "chainAlias";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 26877;
                                            readonly src: "3369:10:97";
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
                                            readonly id: 26885;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "3363:5:97";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                readonly typeString: "type(bytes storage pointer)";
                                            };
                                            readonly typeName: {
                                                readonly id: 26884;
                                                readonly name: "bytes";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "3363:5:97";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 26887;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3363:17:97";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 26888;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3381:6:97";
                                    readonly memberName: "length";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "3363:24:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 26889;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "3391:1:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "3363:29:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "537464436861696e7320676574436861696e28737472696e67293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e";
                                readonly id: 26891;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3394:69:97";
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
                                readonly id: 26883;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "3355:7:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 26892;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3355:109:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26893;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3355:109:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 26894;
                                readonly name: "initializeStdChains";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27501;
                                readonly src: "3475:19:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 26895;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3475:21:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26896;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3475:21:97";
                    }, {
                        readonly expression: {
                            readonly id: 26901;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26897;
                                readonly name: "chain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26881;
                                readonly src: "3506:5:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly baseExpression: {
                                    readonly id: 26898;
                                    readonly name: "chains";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26864;
                                    readonly src: "3514:6:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26859_storage_$";
                                        readonly typeString: "mapping(string memory => struct StdChains.Chain storage ref)";
                                    };
                                };
                                readonly id: 26900;
                                readonly indexExpression: {
                                    readonly id: 26899;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26877;
                                    readonly src: "3521:10:97";
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
                                readonly src: "3514:18:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26859_storage";
                                    readonly typeString: "struct StdChains.Chain storage ref";
                                };
                            };
                            readonly src: "3506:26:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                readonly typeString: "struct StdChains.Chain memory";
                            };
                        };
                        readonly id: 26902;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3506:26:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 26907;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 26904;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26881;
                                        readonly src: "3563:5:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                            readonly typeString: "struct StdChains.Chain memory";
                                        };
                                    };
                                    readonly id: 26905;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3569:7:97";
                                    readonly memberName: "chainId";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 26854;
                                    readonly src: "3563:13:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 26906;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "3580:1:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "3563:18:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly hexValue: "537464436861696e7320676574436861696e28737472696e67293a20436861696e207769746820616c6961732022";
                                        readonly id: 26912;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "3619:49:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_be183459e9329da9bfc4a2fec17224f102b8a68c1139772e954a2d6fd9877e00";
                                            readonly typeString: "literal_string \"StdChains getChain(string): Chain with alias \"\"";
                                        };
                                        readonly value: "StdChains getChain(string): Chain with alias \"";
                                    }, {
                                        readonly id: 26913;
                                        readonly name: "chainAlias";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26877;
                                        readonly src: "3670:10:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        };
                                    }, {
                                        readonly hexValue: "22206e6f7420666f756e642e";
                                        readonly id: 26914;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "3682:15:97";
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
                                            readonly id: 26910;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "3602:3:97";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 26911;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3606:12:97";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "3602:16:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 26915;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3602:96:97";
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
                                    readonly id: 26909;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "3595:6:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                        readonly typeString: "type(string storage pointer)";
                                    };
                                    readonly typeName: {
                                        readonly id: 26908;
                                        readonly name: "string";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "3595:6:97";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 26916;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3595:104:97";
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
                                readonly id: 26903;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "3542:7:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 26917;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3542:167:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26918;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3542:167:97";
                    }, {
                        readonly expression: {
                            readonly id: 26924;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26919;
                                readonly name: "chain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26881;
                                readonly src: "3720:5:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 26921;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26877;
                                    readonly src: "3754:10:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly id: 26922;
                                    readonly name: "chain";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26881;
                                    readonly src: "3766:5:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                        readonly typeString: "struct StdChains.Chain memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    }, {
                                        readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                        readonly typeString: "struct StdChains.Chain memory";
                                    }];
                                    readonly id: 26920;
                                    readonly name: "getChainWithUpdatedRpcUrl";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 27309;
                                    readonly src: "3728:25:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$26859_memory_ptr_$returns$_t_struct$_Chain_$26859_memory_ptr_$";
                                        readonly typeString: "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)";
                                    };
                                };
                                readonly id: 26923;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3728:44:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly src: "3720:52:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                readonly typeString: "struct StdChains.Chain memory";
                            };
                        };
                        readonly id: 26925;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3720:52:97";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getChain";
                readonly nameLocation: "3264:8:97";
                readonly parameters: {
                    readonly id: 26878;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26877;
                        readonly mutability: "mutable";
                        readonly name: "chainAlias";
                        readonly nameLocation: "3287:10:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26927;
                        readonly src: "3273:24:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 26876;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3273:6:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3272:26:97";
                };
                readonly returnParameters: {
                    readonly id: 26882;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26881;
                        readonly mutability: "mutable";
                        readonly name: "chain";
                        readonly nameLocation: "3338:5:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26927;
                        readonly src: "3325:18:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                            readonly typeString: "struct StdChains.Chain";
                        };
                        readonly typeName: {
                            readonly id: 26880;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26879;
                                readonly name: "Chain";
                                readonly nameLocations: readonly ["3325:5:97"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 26859;
                                readonly src: "3325:5:97";
                            };
                            readonly referencedDeclaration: 26859;
                            readonly src: "3325:5:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26859_storage_ptr";
                                readonly typeString: "struct StdChains.Chain";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3324:20:97";
                };
                readonly scope: 27539;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 26984;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3785:541:97";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 26983;
                    readonly nodeType: "Block";
                    readonly src: "3866:460:97";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 26938;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 26936;
                                    readonly name: "chainId";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26929;
                                    readonly src: "3884:7:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 26937;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "3895:1:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "3884:12:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "537464436861696e7320676574436861696e2875696e74323536293a20436861696e2049442063616e6e6f7420626520302e";
                                readonly id: 26939;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3898:52:97";
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
                                readonly id: 26935;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "3876:7:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 26940;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3876:75:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26941;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3876:75:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 26942;
                                readonly name: "initializeStdChains";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27501;
                                readonly src: "3961:19:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 26943;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3961:21:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26944;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3961:21:97";
                    }, {
                        readonly assignments: readonly [26946];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 26946;
                            readonly mutability: "mutable";
                            readonly name: "chainAlias";
                            readonly nameLocation: "4006:10:97";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 26983;
                            readonly src: "3992:24:97";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string";
                            };
                            readonly typeName: {
                                readonly id: 26945;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3992:6:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 26950;
                        readonly initialValue: {
                            readonly baseExpression: {
                                readonly id: 26947;
                                readonly name: "idToAlias";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26872;
                                readonly src: "4019:9:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_string_storage_$";
                                    readonly typeString: "mapping(uint256 => string storage ref)";
                                };
                            };
                            readonly id: 26949;
                            readonly indexExpression: {
                                readonly id: 26948;
                                readonly name: "chainId";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26929;
                                readonly src: "4029:7:97";
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
                            readonly src: "4019:18:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage";
                                readonly typeString: "string storage ref";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3992:45:97";
                    }, {
                        readonly expression: {
                            readonly id: 26955;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26951;
                                readonly name: "chain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26933;
                                readonly src: "4048:5:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly baseExpression: {
                                    readonly id: 26952;
                                    readonly name: "chains";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26864;
                                    readonly src: "4056:6:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26859_storage_$";
                                        readonly typeString: "mapping(string memory => struct StdChains.Chain storage ref)";
                                    };
                                };
                                readonly id: 26954;
                                readonly indexExpression: {
                                    readonly id: 26953;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26946;
                                    readonly src: "4063:10:97";
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
                                readonly src: "4056:18:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26859_storage";
                                    readonly typeString: "struct StdChains.Chain storage ref";
                                };
                            };
                            readonly src: "4048:26:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                readonly typeString: "struct StdChains.Chain memory";
                            };
                        };
                        readonly id: 26956;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4048:26:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 26961;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 26958;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26933;
                                        readonly src: "4106:5:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                            readonly typeString: "struct StdChains.Chain memory";
                                        };
                                    };
                                    readonly id: 26959;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4112:7:97";
                                    readonly memberName: "chainId";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 26854;
                                    readonly src: "4106:13:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 26960;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4123:1:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "4106:18:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly hexValue: "537464436861696e7320676574436861696e2875696e74323536293a20436861696e207769746820494420";
                                        readonly id: 26966;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "4162:45:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_ce7b2cad45f1a6d0b9b7bb125e9a8742fce8fed7d742c83265d4a2da4caf457d";
                                            readonly typeString: "literal_string \"StdChains getChain(uint256): Chain with ID \"";
                                        };
                                        readonly value: "StdChains getChain(uint256): Chain with ID ";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly id: 26969;
                                            readonly name: "chainId";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 26929;
                                            readonly src: "4221:7:97";
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
                                                readonly id: 26967;
                                                readonly name: "vm";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 26841;
                                                readonly src: "4209:2:97";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_VmSafe_$36025";
                                                    readonly typeString: "contract VmSafe";
                                                };
                                            };
                                            readonly id: 26968;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4212:8:97";
                                            readonly memberName: "toString";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 35557;
                                            readonly src: "4209:11:97";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                                readonly typeString: "function (uint256) pure external returns (string memory)";
                                            };
                                        };
                                        readonly id: 26970;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4209:20:97";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        };
                                    }, {
                                        readonly hexValue: "206e6f7420666f756e642e";
                                        readonly id: 26971;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "4231:13:97";
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
                                            readonly id: 26964;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "4145:3:97";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 26965;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4149:12:97";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4145:16:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 26972;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4145:100:97";
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
                                    readonly id: 26963;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "4138:6:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                        readonly typeString: "type(string storage pointer)";
                                    };
                                    readonly typeName: {
                                        readonly id: 26962;
                                        readonly name: "string";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4138:6:97";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 26973;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4138:108:97";
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
                                readonly id: 26957;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "4085:7:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 26974;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4085:171:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 26975;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4085:171:97";
                    }, {
                        readonly expression: {
                            readonly id: 26981;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 26976;
                                readonly name: "chain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26933;
                                readonly src: "4267:5:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 26978;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26946;
                                    readonly src: "4301:10:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly id: 26979;
                                    readonly name: "chain";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26933;
                                    readonly src: "4313:5:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                        readonly typeString: "struct StdChains.Chain memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    }, {
                                        readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                        readonly typeString: "struct StdChains.Chain memory";
                                    }];
                                    readonly id: 26977;
                                    readonly name: "getChainWithUpdatedRpcUrl";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 27309;
                                    readonly src: "4275:25:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$26859_memory_ptr_$returns$_t_struct$_Chain_$26859_memory_ptr_$";
                                        readonly typeString: "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)";
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
                                readonly src: "4275:44:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly src: "4267:52:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                readonly typeString: "struct StdChains.Chain memory";
                            };
                        };
                        readonly id: 26982;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4267:52:97";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getChain";
                readonly nameLocation: "3794:8:97";
                readonly parameters: {
                    readonly id: 26930;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26929;
                        readonly mutability: "mutable";
                        readonly name: "chainId";
                        readonly nameLocation: "3811:7:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26984;
                        readonly src: "3803:15:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 26928;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3803:7:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3802:17:97";
                };
                readonly returnParameters: {
                    readonly id: 26934;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26933;
                        readonly mutability: "mutable";
                        readonly name: "chain";
                        readonly nameLocation: "3859:5:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 26984;
                        readonly src: "3846:18:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                            readonly typeString: "struct StdChains.Chain";
                        };
                        readonly typeName: {
                            readonly id: 26932;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26931;
                                readonly name: "Chain";
                                readonly nameLocations: readonly ["3846:5:97"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 26859;
                                readonly src: "3846:5:97";
                            };
                            readonly referencedDeclaration: 26859;
                            readonly src: "3846:5:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26859_storage_ptr";
                                readonly typeString: "struct StdChains.Chain";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3845:20:97";
                };
                readonly scope: 27539;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 27094;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4397:1173:97";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 27093;
                    readonly nodeType: "Block";
                    readonly src: "4482:1088:97";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 26999;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly arguments: readonly [{
                                            readonly id: 26995;
                                            readonly name: "chainAlias";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 26986;
                                            readonly src: "4519:10:97";
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
                                            readonly id: 26994;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "4513:5:97";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                readonly typeString: "type(bytes storage pointer)";
                                            };
                                            readonly typeName: {
                                                readonly id: 26993;
                                                readonly name: "bytes";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "4513:5:97";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 26996;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4513:17:97";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 26997;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4531:6:97";
                                    readonly memberName: "length";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "4513:24:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 26998;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4541:1:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "4513:29:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e";
                                readonly id: 27000;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4556:79:97";
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
                                readonly id: 26992;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "4492:7:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 27001;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4492:153:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27002;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4492:153:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 27007;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 27004;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26989;
                                        readonly src: "4664:5:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                            readonly typeString: "struct StdChains.ChainData memory";
                                        };
                                    };
                                    readonly id: 27005;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4670:7:97";
                                    readonly memberName: "chainId";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 26847;
                                    readonly src: "4664:13:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 27006;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4681:1:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "4664:18:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e2049442063616e6e6f7420626520302e";
                                readonly id: 27008;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4684:61:97";
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
                                readonly id: 27003;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "4656:7:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 27009;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4656:90:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27010;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4656:90:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 27011;
                                readonly name: "initializeStdChains";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27501;
                                readonly src: "4757:19:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 27012;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4757:21:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27013;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4757:21:97";
                    }, {
                        readonly assignments: readonly [27015];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 27015;
                            readonly mutability: "mutable";
                            readonly name: "foundAlias";
                            readonly nameLocation: "4802:10:97";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 27093;
                            readonly src: "4788:24:97";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string";
                            };
                            readonly typeName: {
                                readonly id: 27014;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4788:6:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 27020;
                        readonly initialValue: {
                            readonly baseExpression: {
                                readonly id: 27016;
                                readonly name: "idToAlias";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26872;
                                readonly src: "4815:9:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_mapping$_t_uint256_$_t_string_storage_$";
                                    readonly typeString: "mapping(uint256 => string storage ref)";
                                };
                            };
                            readonly id: 27019;
                            readonly indexExpression: {
                                readonly expression: {
                                    readonly id: 27017;
                                    readonly name: "chain";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26989;
                                    readonly src: "4825:5:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                        readonly typeString: "struct StdChains.ChainData memory";
                                    };
                                };
                                readonly id: 27018;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4831:7:97";
                                readonly memberName: "chainId";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 26847;
                                readonly src: "4825:13:97";
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
                            readonly src: "4815:24:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage";
                                readonly typeString: "string storage ref";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4788:51:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly id: 27042;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 27028;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly id: 27024;
                                                readonly name: "foundAlias";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 27015;
                                                readonly src: "4877:10:97";
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
                                                readonly id: 27023;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "4871:5:97";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                    readonly typeString: "type(bytes storage pointer)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 27022;
                                                    readonly name: "bytes";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "4871:5:97";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 27025;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4871:17:97";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes memory";
                                            };
                                        };
                                        readonly id: 27026;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4889:6:97";
                                        readonly memberName: "length";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4871:24:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "==";
                                    readonly rightExpression: {
                                        readonly hexValue: "30";
                                        readonly id: 27027;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "4899:1:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    };
                                    readonly src: "4871:29:97";
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
                                    readonly id: 27041;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 27032;
                                                readonly name: "foundAlias";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 27015;
                                                readonly src: "4920:10:97";
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
                                                readonly id: 27031;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "4914:5:97";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                    readonly typeString: "type(bytes storage pointer)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 27030;
                                                    readonly name: "bytes";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "4914:5:97";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 27033;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4914:17:97";
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
                                            readonly id: 27029;
                                            readonly name: "keccak256";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -8;
                                            readonly src: "4904:9:97";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                            };
                                        };
                                        readonly id: 27034;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4904:28:97";
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
                                                readonly id: 27038;
                                                readonly name: "chainAlias";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 26986;
                                                readonly src: "4952:10:97";
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
                                                readonly id: 27037;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "4946:5:97";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                    readonly typeString: "type(bytes storage pointer)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 27036;
                                                    readonly name: "bytes";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "4946:5:97";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 27039;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4946:17:97";
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
                                            readonly id: 27035;
                                            readonly name: "keccak256";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -8;
                                            readonly src: "4936:9:97";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                            };
                                        };
                                        readonly id: 27040;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4936:28:97";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes32";
                                            readonly typeString: "bytes32";
                                        };
                                    };
                                    readonly src: "4904:60:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly src: "4871:93:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly hexValue: "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e20494420";
                                        readonly id: 27047;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5040:49:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_2f5ddfff35cec202bbf760c515d7332e259c9b0c330efa0b2d03073b34906ba0";
                                            readonly typeString: "literal_string \"StdChains setChain(string,ChainData): Chain ID \"";
                                        };
                                        readonly value: "StdChains setChain(string,ChainData): Chain ID ";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly id: 27050;
                                                readonly name: "chain";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 26989;
                                                readonly src: "5123:5:97";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                                    readonly typeString: "struct StdChains.ChainData memory";
                                                };
                                            };
                                            readonly id: 27051;
                                            readonly isConstant: false;
                                            readonly isLValue: true;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5129:7:97";
                                            readonly memberName: "chainId";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 26847;
                                            readonly src: "5123:13:97";
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
                                                readonly id: 27048;
                                                readonly name: "vm";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 26841;
                                                readonly src: "5111:2:97";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_VmSafe_$36025";
                                                    readonly typeString: "contract VmSafe";
                                                };
                                            };
                                            readonly id: 27049;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5114:8:97";
                                            readonly memberName: "toString";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 35557;
                                            readonly src: "5111:11:97";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                                readonly typeString: "function (uint256) pure external returns (string memory)";
                                            };
                                        };
                                        readonly id: 27052;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5111:26:97";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        };
                                    }, {
                                        readonly hexValue: "20616c726561647920757365642062792022";
                                        readonly id: 27053;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5159:21:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_03dcc98944d744f10105f4b63a1d5b4f5b14493812e66201e5f21a3da2662077";
                                            readonly typeString: "literal_string \" already used by \"\"";
                                        };
                                        readonly value: " already used by \"";
                                    }, {
                                        readonly id: 27054;
                                        readonly name: "foundAlias";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 27015;
                                        readonly src: "5202:10:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_string_memory_ptr";
                                            readonly typeString: "string memory";
                                        };
                                    }, {
                                        readonly hexValue: "222e";
                                        readonly id: 27055;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "5234:5:97";
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
                                            readonly id: 27045;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "5002:3:97";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 27046;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5006:12:97";
                                        readonly memberName: "encodePacked";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "5002:16:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                            readonly typeString: "function () pure returns (bytes memory)";
                                        };
                                    };
                                    readonly id: 27056;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5002:255:97";
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
                                    readonly id: 27044;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "4978:6:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                        readonly typeString: "type(string storage pointer)";
                                    };
                                    readonly typeName: {
                                        readonly id: 27043;
                                        readonly name: "string";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4978:6:97";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 27057;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4978:293:97";
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
                                readonly id: 27021;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "4850:7:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 27058;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4850:431:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27059;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "4850:431:97";
                    }, {
                        readonly assignments: readonly [27061];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 27061;
                            readonly mutability: "mutable";
                            readonly name: "oldChainId";
                            readonly nameLocation: "5300:10:97";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 27093;
                            readonly src: "5292:18:97";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 27060;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5292:7:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 27066;
                        readonly initialValue: {
                            readonly expression: {
                                readonly baseExpression: {
                                    readonly id: 27062;
                                    readonly name: "chains";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26864;
                                    readonly src: "5313:6:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26859_storage_$";
                                        readonly typeString: "mapping(string memory => struct StdChains.Chain storage ref)";
                                    };
                                };
                                readonly id: 27064;
                                readonly indexExpression: {
                                    readonly id: 27063;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26986;
                                    readonly src: "5320:10:97";
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
                                readonly src: "5313:18:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26859_storage";
                                    readonly typeString: "struct StdChains.Chain storage ref";
                                };
                            };
                            readonly id: 27065;
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "5332:7:97";
                            readonly memberName: "chainId";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 26854;
                            readonly src: "5313:26:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5292:47:97";
                    }, {
                        readonly expression: {
                            readonly id: 27070;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "delete";
                            readonly prefix: true;
                            readonly src: "5349:28:97";
                            readonly subExpression: {
                                readonly baseExpression: {
                                    readonly id: 27067;
                                    readonly name: "idToAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26872;
                                    readonly src: "5356:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_string_storage_$";
                                        readonly typeString: "mapping(uint256 => string storage ref)";
                                    };
                                };
                                readonly id: 27069;
                                readonly indexExpression: {
                                    readonly id: 27068;
                                    readonly name: "oldChainId";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 27061;
                                    readonly src: "5366:10:97";
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
                                readonly src: "5356:21:97";
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
                        readonly id: 27071;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5349:28:97";
                    }, {
                        readonly expression: {
                            readonly id: 27084;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly id: 27072;
                                    readonly name: "chains";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26864;
                                    readonly src: "5388:6:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$26859_storage_$";
                                        readonly typeString: "mapping(string memory => struct StdChains.Chain storage ref)";
                                    };
                                };
                                readonly id: 27074;
                                readonly indexExpression: {
                                    readonly id: 27073;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26986;
                                    readonly src: "5395:10:97";
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
                                readonly src: "5388:18:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26859_storage";
                                    readonly typeString: "struct StdChains.Chain storage ref";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 27076;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26989;
                                        readonly src: "5434:5:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                            readonly typeString: "struct StdChains.ChainData memory";
                                        };
                                    };
                                    readonly id: 27077;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5440:4:97";
                                    readonly memberName: "name";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 26845;
                                    readonly src: "5434:10:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 27078;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26989;
                                        readonly src: "5455:5:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                            readonly typeString: "struct StdChains.ChainData memory";
                                        };
                                    };
                                    readonly id: 27079;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5461:7:97";
                                    readonly memberName: "chainId";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 26847;
                                    readonly src: "5455:13:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 27080;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26986;
                                    readonly src: "5482:10:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 27081;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26989;
                                        readonly src: "5502:5:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                            readonly typeString: "struct StdChains.ChainData memory";
                                        };
                                    };
                                    readonly id: 27082;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5508:6:97";
                                    readonly memberName: "rpcUrl";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 26849;
                                    readonly src: "5502:12:97";
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
                                    readonly id: 27075;
                                    readonly name: "Chain";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26859;
                                    readonly src: "5421:5:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_Chain_$26859_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.Chain storage pointer)";
                                    };
                                };
                                readonly id: 27083;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly ["5428:4:97", "5446:7:97", "5470:10:97", "5494:6:97"];
                                readonly names: readonly ["name", "chainId", "chainAlias", "rpcUrl"];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5421:95:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                    readonly typeString: "struct StdChains.Chain memory";
                                };
                            };
                            readonly src: "5388:128:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26859_storage";
                                readonly typeString: "struct StdChains.Chain storage ref";
                            };
                        };
                        readonly id: 27085;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5388:128:97";
                    }, {
                        readonly expression: {
                            readonly id: 27091;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly id: 27086;
                                    readonly name: "idToAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26872;
                                    readonly src: "5526:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_uint256_$_t_string_storage_$";
                                        readonly typeString: "mapping(uint256 => string storage ref)";
                                    };
                                };
                                readonly id: 27089;
                                readonly indexExpression: {
                                    readonly expression: {
                                        readonly id: 27087;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 26989;
                                        readonly src: "5536:5:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                            readonly typeString: "struct StdChains.ChainData memory";
                                        };
                                    };
                                    readonly id: 27088;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5542:7:97";
                                    readonly memberName: "chainId";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 26847;
                                    readonly src: "5536:13:97";
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
                                readonly src: "5526:24:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage";
                                    readonly typeString: "string storage ref";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 27090;
                                readonly name: "chainAlias";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26986;
                                readonly src: "5553:10:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            };
                            readonly src: "5526:37:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage";
                                readonly typeString: "string storage ref";
                            };
                        };
                        readonly id: 27092;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5526:37:97";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setChain";
                readonly nameLocation: "4406:8:97";
                readonly parameters: {
                    readonly id: 26990;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 26986;
                        readonly mutability: "mutable";
                        readonly name: "chainAlias";
                        readonly nameLocation: "4429:10:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 27094;
                        readonly src: "4415:24:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 26985;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4415:6:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 26989;
                        readonly mutability: "mutable";
                        readonly name: "chain";
                        readonly nameLocation: "4458:5:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 27094;
                        readonly src: "4441:22:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                            readonly typeString: "struct StdChains.ChainData";
                        };
                        readonly typeName: {
                            readonly id: 26988;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 26987;
                                readonly name: "ChainData";
                                readonly nameLocations: readonly ["4441:9:97"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 26850;
                                readonly src: "4441:9:97";
                            };
                            readonly referencedDeclaration: 26850;
                            readonly src: "4441:9:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_ChainData_$26850_storage_ptr";
                                readonly typeString: "struct StdChains.ChainData";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4414:50:97";
                };
                readonly returnParameters: {
                    readonly id: 26991;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4482:0:97";
                };
                readonly scope: 27539;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 27115;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5641:195:97";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 27114;
                    readonly nodeType: "Block";
                    readonly src: "5722:114:97";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 27103;
                                readonly name: "chainAlias";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27096;
                                readonly src: "5741:10:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 27105;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 27099;
                                        readonly src: "5770:5:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                            readonly typeString: "struct StdChains.Chain memory";
                                        };
                                    };
                                    readonly id: 27106;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5776:4:97";
                                    readonly memberName: "name";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 26852;
                                    readonly src: "5770:10:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 27107;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 27099;
                                        readonly src: "5791:5:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                            readonly typeString: "struct StdChains.Chain memory";
                                        };
                                    };
                                    readonly id: 27108;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5797:7:97";
                                    readonly memberName: "chainId";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 26854;
                                    readonly src: "5791:13:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 27109;
                                        readonly name: "chain";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 27099;
                                        readonly src: "5814:5:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                            readonly typeString: "struct StdChains.Chain memory";
                                        };
                                    };
                                    readonly id: 27110;
                                    readonly isConstant: false;
                                    readonly isLValue: true;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5820:6:97";
                                    readonly memberName: "rpcUrl";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 26858;
                                    readonly src: "5814:12:97";
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
                                    readonly id: 27104;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26850;
                                    readonly src: "5753:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26850_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27111;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly ["5764:4:97", "5782:7:97", "5806:6:97"];
                                readonly names: readonly ["name", "chainId", "rpcUrl"];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5753:75:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27102;
                                readonly name: "setChain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [27094, 27115];
                                readonly referencedDeclaration: 27094;
                                readonly src: "5732:8:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27112;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5732:97:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27113;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5732:97:97";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setChain";
                readonly nameLocation: "5650:8:97";
                readonly parameters: {
                    readonly id: 27100;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 27096;
                        readonly mutability: "mutable";
                        readonly name: "chainAlias";
                        readonly nameLocation: "5673:10:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 27115;
                        readonly src: "5659:24:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 27095;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5659:6:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 27099;
                        readonly mutability: "mutable";
                        readonly name: "chain";
                        readonly nameLocation: "5698:5:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 27115;
                        readonly src: "5685:18:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                            readonly typeString: "struct StdChains.Chain";
                        };
                        readonly typeName: {
                            readonly id: 27098;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 27097;
                                readonly name: "Chain";
                                readonly nameLocations: readonly ["5685:5:97"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 26859;
                                readonly src: "5685:5:97";
                            };
                            readonly referencedDeclaration: 26859;
                            readonly src: "5685:5:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26859_storage_ptr";
                                readonly typeString: "struct StdChains.Chain";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5658:46:97";
                };
                readonly returnParameters: {
                    readonly id: 27101;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5722:0:97";
                };
                readonly scope: 27539;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 27192;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5842:451:97";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 27191;
                    readonly nodeType: "Block";
                    readonly src: "5916:377:97";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [27123];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 27123;
                            readonly mutability: "mutable";
                            readonly name: "strb";
                            readonly nameLocation: "5939:4:97";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 27191;
                            readonly src: "5926:17:97";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 27122;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5926:5:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 27128;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 27126;
                                readonly name: "str";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27117;
                                readonly src: "5952:3:97";
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
                                readonly id: 27125;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "5946:5:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                    readonly typeString: "type(bytes storage pointer)";
                                };
                                readonly typeName: {
                                    readonly id: 27124;
                                    readonly name: "bytes";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "5946:5:97";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 27127;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5946:10:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5926:30:97";
                    }, {
                        readonly assignments: readonly [27130];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 27130;
                            readonly mutability: "mutable";
                            readonly name: "copy";
                            readonly nameLocation: "5979:4:97";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 27191;
                            readonly src: "5966:17:97";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 27129;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5966:5:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 27136;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 27133;
                                    readonly name: "strb";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 27123;
                                    readonly src: "5996:4:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly id: 27134;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6001:6:97";
                                readonly memberName: "length";
                                readonly nodeType: "MemberAccess";
                                readonly src: "5996:11:97";
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
                                readonly id: 27132;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "5986:9:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (uint256) pure returns (bytes memory)";
                                };
                                readonly typeName: {
                                    readonly id: 27131;
                                    readonly name: "bytes";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "5990:5:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_storage_ptr";
                                        readonly typeString: "bytes";
                                    };
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
                            readonly src: "5986:22:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5966:42:97";
                    }, {
                        readonly body: {
                            readonly id: 27184;
                            readonly nodeType: "Block";
                            readonly src: "6060:198:97";
                            readonly statements: readonly [{
                                readonly assignments: readonly [27149];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 27149;
                                    readonly mutability: "mutable";
                                    readonly name: "b";
                                    readonly nameLocation: "6081:1:97";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 27184;
                                    readonly src: "6074:8:97";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes1";
                                        readonly typeString: "bytes1";
                                    };
                                    readonly typeName: {
                                        readonly id: 27148;
                                        readonly name: "bytes1";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "6074:6:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 27153;
                                readonly initialValue: {
                                    readonly baseExpression: {
                                        readonly id: 27150;
                                        readonly name: "strb";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 27123;
                                        readonly src: "6085:4:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 27152;
                                    readonly indexExpression: {
                                        readonly id: 27151;
                                        readonly name: "i";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 27138;
                                        readonly src: "6090:1:97";
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
                                    readonly src: "6085:7:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes1";
                                        readonly typeString: "bytes1";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "6074:18:97";
                            }, {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly id: 27160;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_bytes1";
                                            readonly typeString: "bytes1";
                                        };
                                        readonly id: 27156;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 27154;
                                            readonly name: "b";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 27149;
                                            readonly src: "6110:1:97";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: ">=";
                                        readonly rightExpression: {
                                            readonly hexValue: "30783631";
                                            readonly id: 27155;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "6115:4:97";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_97_by_1";
                                                readonly typeString: "int_const 97";
                                            };
                                            readonly value: "0x61";
                                        };
                                        readonly src: "6110:9:97";
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
                                        readonly id: 27159;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly id: 27157;
                                            readonly name: "b";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 27149;
                                            readonly src: "6123:1:97";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "<=";
                                        readonly rightExpression: {
                                            readonly hexValue: "30783741";
                                            readonly id: 27158;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "6128:4:97";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_122_by_1";
                                                readonly typeString: "int_const 122";
                                            };
                                            readonly value: "0x7A";
                                        };
                                        readonly src: "6123:9:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "6110:22:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseBody: {
                                    readonly id: 27182;
                                    readonly nodeType: "Block";
                                    readonly src: "6204:44:97";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 27180;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly baseExpression: {
                                                    readonly id: 27176;
                                                    readonly name: "copy";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 27130;
                                                    readonly src: "6222:4:97";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                };
                                                readonly id: 27178;
                                                readonly indexExpression: {
                                                    readonly id: 27177;
                                                    readonly name: "i";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 27138;
                                                    readonly src: "6227:1:97";
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
                                                readonly src: "6222:7:97";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes1";
                                                    readonly typeString: "bytes1";
                                                };
                                            };
                                            readonly nodeType: "Assignment";
                                            readonly operator: "=";
                                            readonly rightHandSide: {
                                                readonly id: 27179;
                                                readonly name: "b";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 27149;
                                                readonly src: "6232:1:97";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes1";
                                                    readonly typeString: "bytes1";
                                                };
                                            };
                                            readonly src: "6222:11:97";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        };
                                        readonly id: 27181;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "6222:11:97";
                                    }];
                                };
                                readonly id: 27183;
                                readonly nodeType: "IfStatement";
                                readonly src: "6106:142:97";
                                readonly trueBody: {
                                    readonly id: 27175;
                                    readonly nodeType: "Block";
                                    readonly src: "6134:64:97";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly id: 27173;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftHandSide: {
                                                readonly baseExpression: {
                                                    readonly id: 27161;
                                                    readonly name: "copy";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 27130;
                                                    readonly src: "6152:4:97";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                };
                                                readonly id: 27163;
                                                readonly indexExpression: {
                                                    readonly id: 27162;
                                                    readonly name: "i";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 27138;
                                                    readonly src: "6157:1:97";
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
                                                readonly src: "6152:7:97";
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
                                                    readonly id: 27171;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly arguments: readonly [{
                                                            readonly id: 27168;
                                                            readonly name: "b";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 27149;
                                                            readonly src: "6175:1:97";
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
                                                            readonly id: 27167;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: true;
                                                            readonly lValueRequested: false;
                                                            readonly nodeType: "ElementaryTypeNameExpression";
                                                            readonly src: "6169:5:97";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_type$_t_uint8_$";
                                                                readonly typeString: "type(uint8)";
                                                            };
                                                            readonly typeName: {
                                                                readonly id: 27166;
                                                                readonly name: "uint8";
                                                                readonly nodeType: "ElementaryTypeName";
                                                                readonly src: "6169:5:97";
                                                                readonly typeDescriptions: {};
                                                            };
                                                        };
                                                        readonly id: 27169;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "typeConversion";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "6169:8:97";
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
                                                        readonly id: 27170;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "6180:2:97";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_rational_32_by_1";
                                                            readonly typeString: "int_const 32";
                                                        };
                                                        readonly value: "32";
                                                    };
                                                    readonly src: "6169:13:97";
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
                                                    readonly id: 27165;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "6162:6:97";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_bytes1_$";
                                                        readonly typeString: "type(bytes1)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 27164;
                                                        readonly name: "bytes1";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "6162:6:97";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 27172;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "6162:21:97";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes1";
                                                    readonly typeString: "bytes1";
                                                };
                                            };
                                            readonly src: "6152:31:97";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes1";
                                                readonly typeString: "bytes1";
                                            };
                                        };
                                        readonly id: 27174;
                                        readonly nodeType: "ExpressionStatement";
                                        readonly src: "6152:31:97";
                                    }];
                                };
                            }];
                        };
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 27144;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 27141;
                                readonly name: "i";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27138;
                                readonly src: "6038:1:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly expression: {
                                    readonly id: 27142;
                                    readonly name: "strb";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 27123;
                                    readonly src: "6042:4:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly id: 27143;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6047:6:97";
                                readonly memberName: "length";
                                readonly nodeType: "MemberAccess";
                                readonly src: "6042:11:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6038:15:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 27185;
                        readonly initializationExpression: {
                            readonly assignments: readonly [27138];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 27138;
                                readonly mutability: "mutable";
                                readonly name: "i";
                                readonly nameLocation: "6031:1:97";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 27185;
                                readonly src: "6023:9:97";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 27137;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "6023:7:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 27140;
                            readonly initialValue: {
                                readonly hexValue: "30";
                                readonly id: 27139;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6035:1:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "6023:13:97";
                        };
                        readonly loopExpression: {
                            readonly expression: {
                                readonly id: 27146;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "UnaryOperation";
                                readonly operator: "++";
                                readonly prefix: false;
                                readonly src: "6055:3:97";
                                readonly subExpression: {
                                    readonly id: 27145;
                                    readonly name: "i";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 27138;
                                    readonly src: "6055:1:97";
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
                            readonly id: 27147;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "6055:3:97";
                        };
                        readonly nodeType: "ForStatement";
                        readonly src: "6018:240:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 27188;
                                readonly name: "copy";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27130;
                                readonly src: "6281:4:97";
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
                                readonly id: 27187;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "6274:6:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                    readonly typeString: "type(string storage pointer)";
                                };
                                readonly typeName: {
                                    readonly id: 27186;
                                    readonly name: "string";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "6274:6:97";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 27189;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6274:12:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 27121;
                        readonly id: 27190;
                        readonly nodeType: "Return";
                        readonly src: "6267:19:97";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_toUpper";
                readonly nameLocation: "5851:8:97";
                readonly parameters: {
                    readonly id: 27118;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 27117;
                        readonly mutability: "mutable";
                        readonly name: "str";
                        readonly nameLocation: "5874:3:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 27192;
                        readonly src: "5860:17:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 27116;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5860:6:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5859:19:97";
                };
                readonly returnParameters: {
                    readonly id: 27121;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 27120;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 27192;
                        readonly src: "5901:13:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 27119;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5901:6:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5900:15:97";
                };
                readonly scope: 27539;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 27309;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6429:1218:97";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 27308;
                    readonly nodeType: "Block";
                    readonly src: "6541:1106:97";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 27210;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly expression: {
                                            readonly id: 27205;
                                            readonly name: "chain";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 27197;
                                            readonly src: "6561:5:97";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                                readonly typeString: "struct StdChains.Chain memory";
                                            };
                                        };
                                        readonly id: 27206;
                                        readonly isConstant: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6567:6:97";
                                        readonly memberName: "rpcUrl";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 26858;
                                        readonly src: "6561:12:97";
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
                                        readonly id: 27204;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "6555:5:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                            readonly typeString: "type(bytes storage pointer)";
                                        };
                                        readonly typeName: {
                                            readonly id: 27203;
                                            readonly name: "bytes";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "6555:5:97";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 27207;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6555:19:97";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly id: 27208;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6575:6:97";
                                readonly memberName: "length";
                                readonly nodeType: "MemberAccess";
                                readonly src: "6555:26:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 27209;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "6585:1:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "6555:31:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 27305;
                        readonly nodeType: "IfStatement";
                        readonly src: "6551:1068:97";
                        readonly trueBody: {
                            readonly id: 27304;
                            readonly nodeType: "Block";
                            readonly src: "6588:1031:97";
                            readonly statements: readonly [{
                                readonly clauses: readonly [{
                                    readonly block: {
                                        readonly id: 27224;
                                        readonly nodeType: "Block";
                                        readonly src: "6665:60:97";
                                        readonly statements: readonly [{
                                            readonly expression: {
                                                readonly id: 27222;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftHandSide: {
                                                    readonly expression: {
                                                        readonly id: 27218;
                                                        readonly name: "chain";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 27197;
                                                        readonly src: "6683:5:97";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                                            readonly typeString: "struct StdChains.Chain memory";
                                                        };
                                                    };
                                                    readonly id: 27220;
                                                    readonly isConstant: false;
                                                    readonly isLValue: true;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: true;
                                                    readonly memberLocation: "6689:6:97";
                                                    readonly memberName: "rpcUrl";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly referencedDeclaration: 26858;
                                                    readonly src: "6683:12:97";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_string_memory_ptr";
                                                        readonly typeString: "string memory";
                                                    };
                                                };
                                                readonly nodeType: "Assignment";
                                                readonly operator: "=";
                                                readonly rightHandSide: {
                                                    readonly id: 27221;
                                                    readonly name: "configRpcUrl";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 27216;
                                                    readonly src: "6698:12:97";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_string_memory_ptr";
                                                        readonly typeString: "string memory";
                                                    };
                                                };
                                                readonly src: "6683:27:97";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string memory";
                                                };
                                            };
                                            readonly id: 27223;
                                            readonly nodeType: "ExpressionStatement";
                                            readonly src: "6683:27:97";
                                        }];
                                    };
                                    readonly errorName: "";
                                    readonly id: 27225;
                                    readonly nodeType: "TryCatchClause";
                                    readonly parameters: {
                                        readonly id: 27217;
                                        readonly nodeType: "ParameterList";
                                        readonly parameters: readonly [{
                                            readonly constant: false;
                                            readonly id: 27216;
                                            readonly mutability: "mutable";
                                            readonly name: "configRpcUrl";
                                            readonly nameLocation: "6651:12:97";
                                            readonly nodeType: "VariableDeclaration";
                                            readonly scope: 27225;
                                            readonly src: "6637:26:97";
                                            readonly stateVariable: false;
                                            readonly storageLocation: "memory";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                readonly typeString: "string";
                                            };
                                            readonly typeName: {
                                                readonly id: 27215;
                                                readonly name: "string";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "6637:6:97";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_storage_ptr";
                                                    readonly typeString: "string";
                                                };
                                            };
                                            readonly visibility: "internal";
                                        }];
                                        readonly src: "6636:28:97";
                                    };
                                    readonly src: "6628:97:97";
                                }, {
                                    readonly block: {
                                        readonly id: 27301;
                                        readonly nodeType: "Block";
                                        readonly src: "6751:858:97";
                                        readonly statements: readonly [{
                                            readonly assignments: readonly [27230];
                                            readonly declarations: readonly [{
                                                readonly constant: false;
                                                readonly id: 27230;
                                                readonly mutability: "mutable";
                                                readonly name: "envName";
                                                readonly nameLocation: "6783:7:97";
                                                readonly nodeType: "VariableDeclaration";
                                                readonly scope: 27301;
                                                readonly src: "6769:21:97";
                                                readonly stateVariable: false;
                                                readonly storageLocation: "memory";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string";
                                                };
                                                readonly typeName: {
                                                    readonly id: 27229;
                                                    readonly name: "string";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "6769:6:97";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_string_storage_ptr";
                                                        readonly typeString: "string";
                                                    };
                                                };
                                                readonly visibility: "internal";
                                            }];
                                            readonly id: 27241;
                                            readonly initialValue: {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly arguments: readonly [{
                                                            readonly id: 27236;
                                                            readonly name: "chainAlias";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 27194;
                                                            readonly src: "6826:10:97";
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
                                                            readonly id: 27235;
                                                            readonly name: "_toUpper";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 27192;
                                                            readonly src: "6817:8:97";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                                                readonly typeString: "function (string memory) pure returns (string memory)";
                                                            };
                                                        };
                                                        readonly id: 27237;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "6817:20:97";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_string_memory_ptr";
                                                            readonly typeString: "string memory";
                                                        };
                                                    }, {
                                                        readonly hexValue: "5f5250435f55524c";
                                                        readonly id: 27238;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "string";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "6839:10:97";
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
                                                            readonly id: 27233;
                                                            readonly name: "abi";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -1;
                                                            readonly src: "6800:3:97";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_magic_abi";
                                                                readonly typeString: "abi";
                                                            };
                                                        };
                                                        readonly id: 27234;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "6804:12:97";
                                                        readonly memberName: "encodePacked";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly src: "6800:16:97";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                            readonly typeString: "function () pure returns (bytes memory)";
                                                        };
                                                    };
                                                    readonly id: 27239;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "functionCall";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "6800:50:97";
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
                                                    readonly id: 27232;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "6793:6:97";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                                        readonly typeString: "type(string storage pointer)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 27231;
                                                        readonly name: "string";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "6793:6:97";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 27240;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "6793:58:97";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                    readonly typeString: "string memory";
                                                };
                                            };
                                            readonly nodeType: "VariableDeclarationStatement";
                                            readonly src: "6769:82:97";
                                        }, {
                                            readonly condition: {
                                                readonly id: 27242;
                                                readonly name: "fallbackToDefaultRpcUrls";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 26875;
                                                readonly src: "6873:24:97";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bool";
                                                    readonly typeString: "bool";
                                                };
                                            };
                                            readonly falseBody: {
                                                readonly id: 27265;
                                                readonly nodeType: "Block";
                                                readonly src: "7006:77:97";
                                                readonly statements: readonly [{
                                                    readonly expression: {
                                                        readonly id: 27263;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly leftHandSide: {
                                                            readonly expression: {
                                                                readonly id: 27256;
                                                                readonly name: "chain";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 27197;
                                                                readonly src: "7028:5:97";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                                                    readonly typeString: "struct StdChains.Chain memory";
                                                                };
                                                            };
                                                            readonly id: 27258;
                                                            readonly isConstant: false;
                                                            readonly isLValue: true;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: true;
                                                            readonly memberLocation: "7034:6:97";
                                                            readonly memberName: "rpcUrl";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly referencedDeclaration: 26858;
                                                            readonly src: "7028:12:97";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                                readonly typeString: "string memory";
                                                            };
                                                        };
                                                        readonly nodeType: "Assignment";
                                                        readonly operator: "=";
                                                        readonly rightHandSide: {
                                                            readonly arguments: readonly [{
                                                                readonly id: 27261;
                                                                readonly name: "envName";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 27230;
                                                                readonly src: "7056:7:97";
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
                                                                    readonly id: 27259;
                                                                    readonly name: "vm";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: 26841;
                                                                    readonly src: "7043:2:97";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_contract$_VmSafe_$36025";
                                                                        readonly typeString: "contract VmSafe";
                                                                    };
                                                                };
                                                                readonly id: 27260;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly memberLocation: "7046:9:97";
                                                                readonly memberName: "envString";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly referencedDeclaration: 35101;
                                                                readonly src: "7043:12:97";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                                                    readonly typeString: "function (string memory) view external returns (string memory)";
                                                                };
                                                            };
                                                            readonly id: 27262;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly kind: "functionCall";
                                                            readonly lValueRequested: false;
                                                            readonly nameLocations: readonly [];
                                                            readonly names: readonly [];
                                                            readonly nodeType: "FunctionCall";
                                                            readonly src: "7043:21:97";
                                                            readonly tryCall: false;
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                                readonly typeString: "string memory";
                                                            };
                                                        };
                                                        readonly src: "7028:36:97";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_string_memory_ptr";
                                                            readonly typeString: "string memory";
                                                        };
                                                    };
                                                    readonly id: 27264;
                                                    readonly nodeType: "ExpressionStatement";
                                                    readonly src: "7028:36:97";
                                                }];
                                            };
                                            readonly id: 27266;
                                            readonly nodeType: "IfStatement";
                                            readonly src: "6869:214:97";
                                            readonly trueBody: {
                                                readonly id: 27255;
                                                readonly nodeType: "Block";
                                                readonly src: "6899:101:97";
                                                readonly statements: readonly [{
                                                    readonly expression: {
                                                        readonly id: 27253;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly leftHandSide: {
                                                            readonly expression: {
                                                                readonly id: 27243;
                                                                readonly name: "chain";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 27197;
                                                                readonly src: "6921:5:97";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                                                    readonly typeString: "struct StdChains.Chain memory";
                                                                };
                                                            };
                                                            readonly id: 27245;
                                                            readonly isConstant: false;
                                                            readonly isLValue: true;
                                                            readonly isPure: false;
                                                            readonly lValueRequested: true;
                                                            readonly memberLocation: "6927:6:97";
                                                            readonly memberName: "rpcUrl";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly referencedDeclaration: 26858;
                                                            readonly src: "6921:12:97";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                                readonly typeString: "string memory";
                                                            };
                                                        };
                                                        readonly nodeType: "Assignment";
                                                        readonly operator: "=";
                                                        readonly rightHandSide: {
                                                            readonly arguments: readonly [{
                                                                readonly id: 27248;
                                                                readonly name: "envName";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: 27230;
                                                                readonly src: "6945:7:97";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_string_memory_ptr";
                                                                    readonly typeString: "string memory";
                                                                };
                                                            }, {
                                                                readonly baseExpression: {
                                                                    readonly id: 27249;
                                                                    readonly name: "defaultRpcUrls";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: 26868;
                                                                    readonly src: "6954:14:97";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_string_storage_$";
                                                                        readonly typeString: "mapping(string memory => string storage ref)";
                                                                    };
                                                                };
                                                                readonly id: 27251;
                                                                readonly indexExpression: {
                                                                    readonly id: 27250;
                                                                    readonly name: "chainAlias";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: 27194;
                                                                    readonly src: "6969:10:97";
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
                                                                readonly src: "6954:26:97";
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
                                                                    readonly id: 27246;
                                                                    readonly name: "vm";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: 26841;
                                                                    readonly src: "6936:2:97";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_contract$_VmSafe_$36025";
                                                                        readonly typeString: "contract VmSafe";
                                                                    };
                                                                };
                                                                readonly id: 27247;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly memberLocation: "6939:5:97";
                                                                readonly memberName: "envOr";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly referencedDeclaration: 35232;
                                                                readonly src: "6936:8:97";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                                                    readonly typeString: "function (string memory,string memory) external returns (string memory)";
                                                                };
                                                            };
                                                            readonly id: 27252;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly kind: "functionCall";
                                                            readonly lValueRequested: false;
                                                            readonly nameLocations: readonly [];
                                                            readonly names: readonly [];
                                                            readonly nodeType: "FunctionCall";
                                                            readonly src: "6936:45:97";
                                                            readonly tryCall: false;
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_string_memory_ptr";
                                                                readonly typeString: "string memory";
                                                            };
                                                        };
                                                        readonly src: "6921:60:97";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_string_memory_ptr";
                                                            readonly typeString: "string memory";
                                                        };
                                                    };
                                                    readonly id: 27254;
                                                    readonly nodeType: "ExpressionStatement";
                                                    readonly src: "6921:60:97";
                                                }];
                                            };
                                        }, {
                                            readonly assignments: readonly [27268];
                                            readonly declarations: readonly [{
                                                readonly constant: false;
                                                readonly id: 27268;
                                                readonly mutability: "mutable";
                                                readonly name: "notFoundError";
                                                readonly nameLocation: "7175:13:97";
                                                readonly nodeType: "VariableDeclaration";
                                                readonly scope: 27301;
                                                readonly src: "7162:26:97";
                                                readonly stateVariable: false;
                                                readonly storageLocation: "memory";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes";
                                                };
                                                readonly typeName: {
                                                    readonly id: 27267;
                                                    readonly name: "bytes";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "7162:5:97";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_storage_ptr";
                                                        readonly typeString: "bytes";
                                                    };
                                                };
                                                readonly visibility: "internal";
                                            }];
                                            readonly id: 27281;
                                            readonly initialValue: {
                                                readonly arguments: readonly [{
                                                    readonly hexValue: "4368656174436f64654572726f72";
                                                    readonly id: 27271;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly kind: "string";
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "Literal";
                                                    readonly src: "7235:16:97";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_stringliteral_0bc445031644df03923eb2ab981d332f4354ceab11a95efce72a938e57beaadf";
                                                        readonly typeString: "literal_string \"CheatCodeError\"";
                                                    };
                                                    readonly value: "CheatCodeError";
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly arguments: readonly [{
                                                            readonly hexValue: "696e76616c6964207270632075726c20";
                                                            readonly id: 27276;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: true;
                                                            readonly kind: "string";
                                                            readonly lValueRequested: false;
                                                            readonly nodeType: "Literal";
                                                            readonly src: "7277:18:97";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_stringliteral_2baf3da7b122675739218e635e969f0d1b560b915d35635239551f70fe123eed";
                                                                readonly typeString: "literal_string \"invalid rpc url \"";
                                                            };
                                                            readonly value: "invalid rpc url ";
                                                        }, {
                                                            readonly id: 27277;
                                                            readonly name: "chainAlias";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 27194;
                                                            readonly src: "7297:10:97";
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
                                                                readonly id: 27274;
                                                                readonly name: "abi";
                                                                readonly nodeType: "Identifier";
                                                                readonly overloadedDeclarations: readonly [];
                                                                readonly referencedDeclaration: -1;
                                                                readonly src: "7260:3:97";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_magic_abi";
                                                                    readonly typeString: "abi";
                                                                };
                                                            };
                                                            readonly id: 27275;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: true;
                                                            readonly lValueRequested: false;
                                                            readonly memberLocation: "7264:12:97";
                                                            readonly memberName: "encodePacked";
                                                            readonly nodeType: "MemberAccess";
                                                            readonly src: "7260:16:97";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                                                readonly typeString: "function () pure returns (bytes memory)";
                                                            };
                                                        };
                                                        readonly id: 27278;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "7260:48:97";
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
                                                        readonly id: 27273;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "7253:6:97";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                                            readonly typeString: "type(string storage pointer)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 27272;
                                                            readonly name: "string";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "7253:6:97";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 27279;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "7253:56:97";
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
                                                        readonly id: 27269;
                                                        readonly name: "abi";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: -1;
                                                        readonly src: "7211:3:97";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_magic_abi";
                                                            readonly typeString: "abi";
                                                        };
                                                    };
                                                    readonly id: 27270;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly memberLocation: "7215:19:97";
                                                    readonly memberName: "encodeWithSignature";
                                                    readonly nodeType: "MemberAccess";
                                                    readonly src: "7211:23:97";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_function_abiencodewithsignature_pure$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                                        readonly typeString: "function (string memory) pure returns (bytes memory)";
                                                    };
                                                };
                                                readonly id: 27280;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "functionCall";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "7211:99:97";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            };
                                            readonly nodeType: "VariableDeclarationStatement";
                                            readonly src: "7162:148:97";
                                        }, {
                                            readonly condition: {
                                                readonly commonType: {
                                                    readonly typeIdentifier: "t_bool";
                                                    readonly typeString: "bool";
                                                };
                                                readonly id: 27297;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly leftExpression: {
                                                    readonly commonType: {
                                                        readonly typeIdentifier: "t_bytes32";
                                                        readonly typeString: "bytes32";
                                                    };
                                                    readonly id: 27288;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly arguments: readonly [{
                                                            readonly id: 27283;
                                                            readonly name: "notFoundError";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 27268;
                                                            readonly src: "7342:13:97";
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
                                                            readonly id: 27282;
                                                            readonly name: "keccak256";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -8;
                                                            readonly src: "7332:9:97";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                                readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                                            };
                                                        };
                                                        readonly id: 27284;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "7332:24:97";
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
                                                            readonly id: 27286;
                                                            readonly name: "err";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: 27227;
                                                            readonly src: "7370:3:97";
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
                                                            readonly id: 27285;
                                                            readonly name: "keccak256";
                                                            readonly nodeType: "Identifier";
                                                            readonly overloadedDeclarations: readonly [];
                                                            readonly referencedDeclaration: -8;
                                                            readonly src: "7360:9:97";
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                                                readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                                            };
                                                        };
                                                        readonly id: 27287;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly kind: "functionCall";
                                                        readonly lValueRequested: false;
                                                        readonly nameLocations: readonly [];
                                                        readonly names: readonly [];
                                                        readonly nodeType: "FunctionCall";
                                                        readonly src: "7360:14:97";
                                                        readonly tryCall: false;
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_bytes32";
                                                            readonly typeString: "bytes32";
                                                        };
                                                    };
                                                    readonly src: "7332:42:97";
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
                                                    readonly id: 27296;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly lValueRequested: false;
                                                    readonly leftExpression: {
                                                        readonly expression: {
                                                            readonly arguments: readonly [{
                                                                readonly expression: {
                                                                    readonly id: 27291;
                                                                    readonly name: "chain";
                                                                    readonly nodeType: "Identifier";
                                                                    readonly overloadedDeclarations: readonly [];
                                                                    readonly referencedDeclaration: 27197;
                                                                    readonly src: "7384:5:97";
                                                                    readonly typeDescriptions: {
                                                                        readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                                                        readonly typeString: "struct StdChains.Chain memory";
                                                                    };
                                                                };
                                                                readonly id: 27292;
                                                                readonly isConstant: false;
                                                                readonly isLValue: true;
                                                                readonly isPure: false;
                                                                readonly lValueRequested: false;
                                                                readonly memberLocation: "7390:6:97";
                                                                readonly memberName: "rpcUrl";
                                                                readonly nodeType: "MemberAccess";
                                                                readonly referencedDeclaration: 26858;
                                                                readonly src: "7384:12:97";
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
                                                                readonly id: 27290;
                                                                readonly isConstant: false;
                                                                readonly isLValue: false;
                                                                readonly isPure: true;
                                                                readonly lValueRequested: false;
                                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                                readonly src: "7378:5:97";
                                                                readonly typeDescriptions: {
                                                                    readonly typeIdentifier: "t_type$_t_bytes_storage_ptr_$";
                                                                    readonly typeString: "type(bytes storage pointer)";
                                                                };
                                                                readonly typeName: {
                                                                    readonly id: 27289;
                                                                    readonly name: "bytes";
                                                                    readonly nodeType: "ElementaryTypeName";
                                                                    readonly src: "7378:5:97";
                                                                    readonly typeDescriptions: {};
                                                                };
                                                            };
                                                            readonly id: 27293;
                                                            readonly isConstant: false;
                                                            readonly isLValue: false;
                                                            readonly isPure: false;
                                                            readonly kind: "typeConversion";
                                                            readonly lValueRequested: false;
                                                            readonly nameLocations: readonly [];
                                                            readonly names: readonly [];
                                                            readonly nodeType: "FunctionCall";
                                                            readonly src: "7378:19:97";
                                                            readonly tryCall: false;
                                                            readonly typeDescriptions: {
                                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                                readonly typeString: "bytes memory";
                                                            };
                                                        };
                                                        readonly id: 27294;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: false;
                                                        readonly lValueRequested: false;
                                                        readonly memberLocation: "7398:6:97";
                                                        readonly memberName: "length";
                                                        readonly nodeType: "MemberAccess";
                                                        readonly src: "7378:26:97";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_uint256";
                                                            readonly typeString: "uint256";
                                                        };
                                                    };
                                                    readonly nodeType: "BinaryOperation";
                                                    readonly operator: "==";
                                                    readonly rightExpression: {
                                                        readonly hexValue: "30";
                                                        readonly id: 27295;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly kind: "number";
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "Literal";
                                                        readonly src: "7408:1:97";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_rational_0_by_1";
                                                            readonly typeString: "int_const 0";
                                                        };
                                                        readonly value: "0";
                                                    };
                                                    readonly src: "7378:31:97";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bool";
                                                        readonly typeString: "bool";
                                                    };
                                                };
                                                readonly src: "7332:77:97";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bool";
                                                    readonly typeString: "bool";
                                                };
                                            };
                                            readonly id: 27300;
                                            readonly nodeType: "IfStatement";
                                            readonly src: "7328:267:97";
                                            readonly trueBody: {
                                                readonly id: 27299;
                                                readonly nodeType: "Block";
                                                readonly src: "7411:184:97";
                                                readonly statements: readonly [{
                                                    readonly AST: {
                                                        readonly nodeType: "YulBlock";
                                                        readonly src: "7497:80:97";
                                                        readonly statements: readonly [{
                                                            readonly expression: {
                                                                readonly arguments: readonly [{
                                                                    readonly arguments: readonly [{
                                                                        readonly kind: "number";
                                                                        readonly nodeType: "YulLiteral";
                                                                        readonly src: "7534:2:97";
                                                                        readonly type: "";
                                                                        readonly value: "32";
                                                                    }, {
                                                                        readonly name: "err";
                                                                        readonly nodeType: "YulIdentifier";
                                                                        readonly src: "7538:3:97";
                                                                    }];
                                                                    readonly functionName: {
                                                                        readonly name: "add";
                                                                        readonly nodeType: "YulIdentifier";
                                                                        readonly src: "7530:3:97";
                                                                    };
                                                                    readonly nodeType: "YulFunctionCall";
                                                                    readonly src: "7530:12:97";
                                                                }, {
                                                                    readonly arguments: readonly [{
                                                                        readonly name: "err";
                                                                        readonly nodeType: "YulIdentifier";
                                                                        readonly src: "7550:3:97";
                                                                    }];
                                                                    readonly functionName: {
                                                                        readonly name: "mload";
                                                                        readonly nodeType: "YulIdentifier";
                                                                        readonly src: "7544:5:97";
                                                                    };
                                                                    readonly nodeType: "YulFunctionCall";
                                                                    readonly src: "7544:10:97";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "revert";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "7523:6:97";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "7523:32:97";
                                                            };
                                                            readonly nodeType: "YulExpressionStatement";
                                                            readonly src: "7523:32:97";
                                                        }];
                                                    };
                                                    readonly documentation: "@solidity memory-safe-assembly";
                                                    readonly evmVersion: "paris";
                                                    readonly externalReferences: readonly [{
                                                        readonly declaration: 27227;
                                                        readonly isOffset: false;
                                                        readonly isSlot: false;
                                                        readonly src: "7538:3:97";
                                                        readonly valueSize: 1;
                                                    }, {
                                                        readonly declaration: 27227;
                                                        readonly isOffset: false;
                                                        readonly isSlot: false;
                                                        readonly src: "7550:3:97";
                                                        readonly valueSize: 1;
                                                    }];
                                                    readonly id: 27298;
                                                    readonly nodeType: "InlineAssembly";
                                                    readonly src: "7488:89:97";
                                                }];
                                            };
                                        }];
                                    };
                                    readonly errorName: "";
                                    readonly id: 27302;
                                    readonly nodeType: "TryCatchClause";
                                    readonly parameters: {
                                        readonly id: 27228;
                                        readonly nodeType: "ParameterList";
                                        readonly parameters: readonly [{
                                            readonly constant: false;
                                            readonly id: 27227;
                                            readonly mutability: "mutable";
                                            readonly name: "err";
                                            readonly nameLocation: "6746:3:97";
                                            readonly nodeType: "VariableDeclaration";
                                            readonly scope: 27302;
                                            readonly src: "6733:16:97";
                                            readonly stateVariable: false;
                                            readonly storageLocation: "memory";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                                readonly typeString: "bytes";
                                            };
                                            readonly typeName: {
                                                readonly id: 27226;
                                                readonly name: "bytes";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "6733:5:97";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                                    readonly typeString: "bytes";
                                                };
                                            };
                                            readonly visibility: "internal";
                                        }];
                                        readonly src: "6732:18:97";
                                    };
                                    readonly src: "6726:883:97";
                                }];
                                readonly externalCall: {
                                    readonly arguments: readonly [{
                                        readonly id: 27213;
                                        readonly name: "chainAlias";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 27194;
                                        readonly src: "6616:10:97";
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
                                            readonly id: 27211;
                                            readonly name: "vm";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 26841;
                                            readonly src: "6606:2:97";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_VmSafe_$36025";
                                                readonly typeString: "contract VmSafe";
                                            };
                                        };
                                        readonly id: 27212;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6609:6:97";
                                        readonly memberName: "rpcUrl";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 35986;
                                        readonly src: "6606:9:97";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                            readonly typeString: "function (string memory) view external returns (string memory)";
                                        };
                                    };
                                    readonly id: 27214;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6606:21:97";
                                    readonly tryCall: true;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                };
                                readonly id: 27303;
                                readonly nodeType: "TryStatement";
                                readonly src: "6602:1007:97";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 27306;
                            readonly name: "chain";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 27197;
                            readonly src: "7635:5:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                                readonly typeString: "struct StdChains.Chain memory";
                            };
                        };
                        readonly functionReturnParameters: 27202;
                        readonly id: 27307;
                        readonly nodeType: "Return";
                        readonly src: "7628:12:97";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getChainWithUpdatedRpcUrl";
                readonly nameLocation: "6438:25:97";
                readonly parameters: {
                    readonly id: 27198;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 27194;
                        readonly mutability: "mutable";
                        readonly name: "chainAlias";
                        readonly nameLocation: "6478:10:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 27309;
                        readonly src: "6464:24:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 27193;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6464:6:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 27197;
                        readonly mutability: "mutable";
                        readonly name: "chain";
                        readonly nameLocation: "6503:5:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 27309;
                        readonly src: "6490:18:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                            readonly typeString: "struct StdChains.Chain";
                        };
                        readonly typeName: {
                            readonly id: 27196;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 27195;
                                readonly name: "Chain";
                                readonly nameLocations: readonly ["6490:5:97"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 26859;
                                readonly src: "6490:5:97";
                            };
                            readonly referencedDeclaration: 26859;
                            readonly src: "6490:5:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26859_storage_ptr";
                                readonly typeString: "struct StdChains.Chain";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6463:46:97";
                };
                readonly returnParameters: {
                    readonly id: 27202;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 27201;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 27309;
                        readonly src: "6527:12:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_Chain_$26859_memory_ptr";
                            readonly typeString: "struct StdChains.Chain";
                        };
                        readonly typeName: {
                            readonly id: 27200;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 27199;
                                readonly name: "Chain";
                                readonly nameLocations: readonly ["6527:5:97"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 26859;
                                readonly src: "6527:5:97";
                            };
                            readonly referencedDeclaration: 26859;
                            readonly src: "6527:5:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_Chain_$26859_storage_ptr";
                                readonly typeString: "struct StdChains.Chain";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6526:14:97";
                };
                readonly scope: 27539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 27319;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7653:117:97";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 27318;
                    readonly nodeType: "Block";
                    readonly src: "7716:54:97";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 27316;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 27314;
                                readonly name: "fallbackToDefaultRpcUrls";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26875;
                                readonly src: "7726:24:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 27315;
                                readonly name: "useDefault";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27311;
                                readonly src: "7753:10:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "7726:37:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 27317;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "7726:37:97";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setFallbackToDefaultRpcUrls";
                readonly nameLocation: "7662:27:97";
                readonly parameters: {
                    readonly id: 27312;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 27311;
                        readonly mutability: "mutable";
                        readonly name: "useDefault";
                        readonly nameLocation: "7695:10:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 27319;
                        readonly src: "7690:15:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 27310;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7690:4:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7689:17:97";
                };
                readonly returnParameters: {
                    readonly id: 27313;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7716:0:97";
                };
                readonly scope: 27539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 27501;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7776:2751:97";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 27500;
                    readonly nodeType: "Block";
                    readonly src: "7815:2712:97";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly id: 27322;
                            readonly name: "stdChainsInitialized";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 26843;
                            readonly src: "7829:20:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 27324;
                        readonly nodeType: "IfStatement";
                        readonly src: "7825:33:97";
                        readonly trueBody: {
                            readonly functionReturnParameters: 27321;
                            readonly id: 27323;
                            readonly nodeType: "Return";
                            readonly src: "7851:7:97";
                        };
                    }, {
                        readonly expression: {
                            readonly id: 27327;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 27325;
                                readonly name: "stdChainsInitialized";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 26843;
                                readonly src: "7868:20:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly hexValue: "74727565";
                                readonly id: 27326;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "bool";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "7891:4:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly value: "true";
                            };
                            readonly src: "7868:27:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 27328;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "7868:27:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "616e76696c";
                                readonly id: 27330;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8018:7:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_a3d859b77cebfdf9da3b485434702c5090ff9e91b7b86c670ebb15f8a00eb72b";
                                    readonly typeString: "literal_string \"anvil\"";
                                };
                                readonly value: "anvil";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "416e76696c";
                                    readonly id: 27332;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8037:7:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_1ab1bd2f543bf53e1036abfe292a89809c7285bff756db6e274686afe6fb41b4";
                                        readonly typeString: "literal_string \"Anvil\"";
                                    };
                                    readonly value: "Anvil";
                                }, {
                                    readonly hexValue: "3331333337";
                                    readonly id: 27333;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8046:5:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_31337_by_1";
                                        readonly typeString: "int_const 31337";
                                    };
                                    readonly value: "31337";
                                }, {
                                    readonly hexValue: "687474703a2f2f3132372e302e302e313a38353435";
                                    readonly id: 27334;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8053:23:97";
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
                                    readonly id: 27331;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26850;
                                    readonly src: "8027:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26850_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27335;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8027:50:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_a3d859b77cebfdf9da3b485434702c5090ff9e91b7b86c670ebb15f8a00eb72b";
                                    readonly typeString: "literal_string \"anvil\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27329;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27538;
                                readonly src: "7992:25:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27336;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7992:86:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27337;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "7992:86:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6d61696e6e6574";
                                readonly id: 27339;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8127:9:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_7beafa94c8bfb8f1c1a43104a34f72c524268aafbfe83bff17485539345c66ff";
                                    readonly typeString: "literal_string \"mainnet\"";
                                };
                                readonly value: "mainnet";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4d61696e6e6574";
                                    readonly id: 27341;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8148:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_8d646f556e5d9d6f1edcf7a39b77f5ac253776eb34efcfd688aacbee518efc26";
                                        readonly typeString: "literal_string \"Mainnet\"";
                                    };
                                    readonly value: "Mainnet";
                                }, {
                                    readonly hexValue: "31";
                                    readonly id: 27342;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8159:1:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1_by_1";
                                        readonly typeString: "int_const 1";
                                    };
                                    readonly value: "1";
                                }, {
                                    readonly hexValue: "68747470733a2f2f6d61696e6e65742e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031";
                                    readonly id: 27343;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8162:63:97";
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
                                    readonly id: 27340;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26850;
                                    readonly src: "8138:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26850_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27344;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8138:88:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_7beafa94c8bfb8f1c1a43104a34f72c524268aafbfe83bff17485539345c66ff";
                                    readonly typeString: "literal_string \"mainnet\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27338;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27538;
                                readonly src: "8088:25:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27345;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8088:148:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27346;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8088:148:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "676f65726c69";
                                readonly id: 27348;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8285:8:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_e24dd81d18a6354d406364c0fc25f4237534cee10d0c3099c9c2a6aa50d7dd0a";
                                    readonly typeString: "literal_string \"goerli\"";
                                };
                                readonly value: "goerli";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "476f65726c69";
                                    readonly id: 27350;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8305:8:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_736fc55653a3415af498a1309898240f13c5e9e33098fa3cf9e5f2a200d14c3e";
                                        readonly typeString: "literal_string \"Goerli\"";
                                    };
                                    readonly value: "Goerli";
                                }, {
                                    readonly hexValue: "35";
                                    readonly id: 27351;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8315:1:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_5_by_1";
                                        readonly typeString: "int_const 5";
                                    };
                                    readonly value: "5";
                                }, {
                                    readonly hexValue: "68747470733a2f2f676f65726c692e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031";
                                    readonly id: 27352;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8318:62:97";
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
                                    readonly id: 27349;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26850;
                                    readonly src: "8295:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26850_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27353;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8295:86:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_e24dd81d18a6354d406364c0fc25f4237534cee10d0c3099c9c2a6aa50d7dd0a";
                                    readonly typeString: "literal_string \"goerli\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27347;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27538;
                                readonly src: "8246:25:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27354;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8246:145:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27355;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8246:145:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "7365706f6c6961";
                                readonly id: 27357;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8440:9:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_e1f58df0b51f34f4835aba989f0aa2f2e66218cab53207bafd3dbf37270bd39a";
                                    readonly typeString: "literal_string \"sepolia\"";
                                };
                                readonly value: "sepolia";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "5365706f6c6961";
                                    readonly id: 27359;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8461:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_a6b54cd124a84bb64f1808905ed95fb171a09730726f85e60eefcd47a4831b27";
                                        readonly typeString: "literal_string \"Sepolia\"";
                                    };
                                    readonly value: "Sepolia";
                                }, {
                                    readonly hexValue: "3131313535313131";
                                    readonly id: 27360;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8472:8:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_11155111_by_1";
                                        readonly typeString: "int_const 11155111";
                                    };
                                    readonly value: "11155111";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7365706f6c69612e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031";
                                    readonly id: 27361;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8482:63:97";
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
                                    readonly id: 27358;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26850;
                                    readonly src: "8451:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26850_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27362;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8451:95:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_e1f58df0b51f34f4835aba989f0aa2f2e66218cab53207bafd3dbf37270bd39a";
                                    readonly typeString: "literal_string \"sepolia\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27356;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27538;
                                readonly src: "8401:25:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27363;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8401:155:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27364;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8401:155:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6f7074696d69736d";
                                readonly id: 27366;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8592:10:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_09d0f27659ee556a8134fa56941e42400e672aecc2d4cfc61cdb0fcea4590e05";
                                    readonly typeString: "literal_string \"optimism\"";
                                };
                                readonly value: "optimism";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4f7074696d69736d";
                                    readonly id: 27368;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8614:10:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_f997187c3c319ef9e33fa05f852d1612b66e309dc48d97a4b6b39832090a3bec";
                                        readonly typeString: "literal_string \"Optimism\"";
                                    };
                                    readonly value: "Optimism";
                                }, {
                                    readonly hexValue: "3130";
                                    readonly id: 27369;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8626:2:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_10_by_1";
                                        readonly typeString: "int_const 10";
                                    };
                                    readonly value: "10";
                                }, {
                                    readonly hexValue: "68747470733a2f2f6d61696e6e65742e6f7074696d69736d2e696f";
                                    readonly id: 27370;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8630:29:97";
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
                                    readonly id: 27367;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26850;
                                    readonly src: "8604:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26850_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27371;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8604:56:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_09d0f27659ee556a8134fa56941e42400e672aecc2d4cfc61cdb0fcea4590e05";
                                    readonly typeString: "literal_string \"optimism\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27365;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27538;
                                readonly src: "8566:25:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27372;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8566:95:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27373;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8566:95:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6f7074696d69736d5f676f65726c69";
                                readonly id: 27375;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8697:17:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_ecf3b2cc678a701bfbf2329b12e6edf723c3043a32339c2eea2efb7c9533c09c";
                                    readonly typeString: "literal_string \"optimism_goerli\"";
                                };
                                readonly value: "optimism_goerli";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4f7074696d69736d20476f65726c69";
                                    readonly id: 27377;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8726:17:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_6271e061a2d4ce1b6e267081a40c4dca996efe738d092d650bcfa23669d2fd24";
                                        readonly typeString: "literal_string \"Optimism Goerli\"";
                                    };
                                    readonly value: "Optimism Goerli";
                                }, {
                                    readonly hexValue: "343230";
                                    readonly id: 27378;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8745:3:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_420_by_1";
                                        readonly typeString: "int_const 420";
                                    };
                                    readonly value: "420";
                                }, {
                                    readonly hexValue: "68747470733a2f2f676f65726c692e6f7074696d69736d2e696f";
                                    readonly id: 27379;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8750:28:97";
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
                                    readonly id: 27376;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26850;
                                    readonly src: "8716:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26850_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27380;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8716:63:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_ecf3b2cc678a701bfbf2329b12e6edf723c3043a32339c2eea2efb7c9533c09c";
                                    readonly typeString: "literal_string \"optimism_goerli\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27374;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27538;
                                readonly src: "8671:25:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27381;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8671:109:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27382;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8671:109:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "617262697472756d5f6f6e65";
                                readonly id: 27384;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8816:14:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_e4b44cea7839e0679ac5072602932da9b25ebfb3a9ac42625d9c583a7b6b2eb4";
                                    readonly typeString: "literal_string \"arbitrum_one\"";
                                };
                                readonly value: "arbitrum_one";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "417262697472756d204f6e65";
                                    readonly id: 27386;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8842:14:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_9e42b1aebd5463751aea2c5f6ee37505334a82b4085315a5f4b8b0f81d3b9004";
                                        readonly typeString: "literal_string \"Arbitrum One\"";
                                    };
                                    readonly value: "Arbitrum One";
                                }, {
                                    readonly hexValue: "3432313631";
                                    readonly id: 27387;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8858:5:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_42161_by_1";
                                        readonly typeString: "int_const 42161";
                                    };
                                    readonly value: "42161";
                                }, {
                                    readonly hexValue: "68747470733a2f2f617262312e617262697472756d2e696f2f727063";
                                    readonly id: 27388;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8865:30:97";
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
                                    readonly id: 27385;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26850;
                                    readonly src: "8832:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26850_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27389;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8832:64:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_e4b44cea7839e0679ac5072602932da9b25ebfb3a9ac42625d9c583a7b6b2eb4";
                                    readonly typeString: "literal_string \"arbitrum_one\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27383;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27538;
                                readonly src: "8790:25:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27390;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8790:107:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27391;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8790:107:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "617262697472756d5f6f6e655f676f65726c69";
                                readonly id: 27393;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8946:21:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_9c5068a3a5cdbd747f13200fdd6f590995f99bde231a5dcfa62a5f92af1dc3d4";
                                    readonly typeString: "literal_string \"arbitrum_one_goerli\"";
                                };
                                readonly value: "arbitrum_one_goerli";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "417262697472756d204f6e6520476f65726c69";
                                    readonly id: 27395;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8979:21:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_57f7b6894161eb541e81676f15adf1e65eee36bdcfd592f252d22d4394480f21";
                                        readonly typeString: "literal_string \"Arbitrum One Goerli\"";
                                    };
                                    readonly value: "Arbitrum One Goerli";
                                }, {
                                    readonly hexValue: "343231363133";
                                    readonly id: 27396;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9002:6:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_421613_by_1";
                                        readonly typeString: "int_const 421613";
                                    };
                                    readonly value: "421613";
                                }, {
                                    readonly hexValue: "68747470733a2f2f676f65726c692d726f6c6c75702e617262697472756d2e696f2f727063";
                                    readonly id: 27397;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9010:39:97";
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
                                    readonly id: 27394;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26850;
                                    readonly src: "8969:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26850_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27398;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8969:81:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_9c5068a3a5cdbd747f13200fdd6f590995f99bde231a5dcfa62a5f92af1dc3d4";
                                    readonly typeString: "literal_string \"arbitrum_one_goerli\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27392;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27538;
                                readonly src: "8907:25:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27399;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8907:153:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27400;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "8907:153:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "617262697472756d5f6e6f7661";
                                readonly id: 27402;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9096:15:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_9338ed1403277416ebb39d4e992ebf5c49e6dded5ec79963ea5fc261cbd7fdac";
                                    readonly typeString: "literal_string \"arbitrum_nova\"";
                                };
                                readonly value: "arbitrum_nova";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "417262697472756d204e6f7661";
                                    readonly id: 27404;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9123:15:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_25c77b7679bf463420c39c7728b9f65b6a8f1ae05b3335eb9e394b1b61bf8f21";
                                        readonly typeString: "literal_string \"Arbitrum Nova\"";
                                    };
                                    readonly value: "Arbitrum Nova";
                                }, {
                                    readonly hexValue: "3432313730";
                                    readonly id: 27405;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9140:5:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_42170_by_1";
                                        readonly typeString: "int_const 42170";
                                    };
                                    readonly value: "42170";
                                }, {
                                    readonly hexValue: "68747470733a2f2f6e6f76612e617262697472756d2e696f2f727063";
                                    readonly id: 27406;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9147:30:97";
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
                                    readonly id: 27403;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26850;
                                    readonly src: "9113:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26850_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27407;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9113:65:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_9338ed1403277416ebb39d4e992ebf5c49e6dded5ec79963ea5fc261cbd7fdac";
                                    readonly typeString: "literal_string \"arbitrum_nova\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27401;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27538;
                                readonly src: "9070:25:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27408;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9070:109:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27409;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9070:109:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "706f6c79676f6e";
                                readonly id: 27411;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9215:9:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_ac63fa1fe369e75c38d62f0f4d465b48b3cd5159f0fb416332899402031d1408";
                                    readonly typeString: "literal_string \"polygon\"";
                                };
                                readonly value: "polygon";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "506f6c79676f6e";
                                    readonly id: 27413;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9236:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_890af8db8ca1aa1e915857edbc2717639ebd8a22c786f9e0e776d6a1aacb5e71";
                                        readonly typeString: "literal_string \"Polygon\"";
                                    };
                                    readonly value: "Polygon";
                                }, {
                                    readonly hexValue: "313337";
                                    readonly id: 27414;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9247:3:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_137_by_1";
                                        readonly typeString: "int_const 137";
                                    };
                                    readonly value: "137";
                                }, {
                                    readonly hexValue: "68747470733a2f2f706f6c79676f6e2d7270632e636f6d";
                                    readonly id: 27415;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9252:25:97";
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
                                    readonly id: 27412;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26850;
                                    readonly src: "9226:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26850_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27416;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9226:52:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_ac63fa1fe369e75c38d62f0f4d465b48b3cd5159f0fb416332899402031d1408";
                                    readonly typeString: "literal_string \"polygon\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27410;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27538;
                                readonly src: "9189:25:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27417;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9189:90:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27418;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9189:90:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "706f6c79676f6e5f6d756d626169";
                                readonly id: 27420;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9328:16:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_a7308364e169f5f44de3933205a00d3632b7366702c91dff3452b4dbf6ed70f0";
                                    readonly typeString: "literal_string \"polygon_mumbai\"";
                                };
                                readonly value: "polygon_mumbai";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "506f6c79676f6e204d756d626169";
                                    readonly id: 27422;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9356:16:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_173b0df64039e25119e26da4408dbd53da69bf06543516209ecc66f21e0c9725";
                                        readonly typeString: "literal_string \"Polygon Mumbai\"";
                                    };
                                    readonly value: "Polygon Mumbai";
                                }, {
                                    readonly hexValue: "3830303031";
                                    readonly id: 27423;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9374:5:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_80001_by_1";
                                        readonly typeString: "int_const 80001";
                                    };
                                    readonly value: "80001";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7270632d6d756d6261692e6d61746963766967696c2e636f6d";
                                    readonly id: 27424;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9381:35:97";
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
                                    readonly id: 27421;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26850;
                                    readonly src: "9346:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26850_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27425;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9346:71:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_a7308364e169f5f44de3933205a00d3632b7366702c91dff3452b4dbf6ed70f0";
                                    readonly typeString: "literal_string \"polygon_mumbai\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27419;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27538;
                                readonly src: "9289:25:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27426;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9289:138:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27427;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9289:138:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6176616c616e636865";
                                readonly id: 27429;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9463:11:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_6e8b0d92516ee4289145e3b78cea58daac177b1c618beeedbc6cdabd388a6e55";
                                    readonly typeString: "literal_string \"avalanche\"";
                                };
                                readonly value: "avalanche";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4176616c616e636865";
                                    readonly id: 27431;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9486:11:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_6585177c3aba6cb7ffc0a37e831a958c4ee9278e4c62c7bdad7175ca09883c40";
                                        readonly typeString: "literal_string \"Avalanche\"";
                                    };
                                    readonly value: "Avalanche";
                                }, {
                                    readonly hexValue: "3433313134";
                                    readonly id: 27432;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9499:5:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_43114_by_1";
                                        readonly typeString: "int_const 43114";
                                    };
                                    readonly value: "43114";
                                }, {
                                    readonly hexValue: "68747470733a2f2f6170692e617661782e6e6574776f726b2f6578742f62632f432f727063";
                                    readonly id: 27433;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9506:39:97";
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
                                    readonly id: 27430;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26850;
                                    readonly src: "9476:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26850_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27434;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9476:70:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_6e8b0d92516ee4289145e3b78cea58daac177b1c618beeedbc6cdabd388a6e55";
                                    readonly typeString: "literal_string \"avalanche\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27428;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27538;
                                readonly src: "9437:25:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27435;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9437:110:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27436;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9437:110:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6176616c616e6368655f66756a69";
                                readonly id: 27438;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9596:16:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_a1920d2f80060f1c83444622c7eb5adf4484bed8a537b8d13eae53bd800aa692";
                                    readonly typeString: "literal_string \"avalanche_fuji\"";
                                };
                                readonly value: "avalanche_fuji";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4176616c616e6368652046756a69";
                                    readonly id: 27440;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9624:16:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_522b176494c651b1a4c5779e66ed19f885df62891abfb18fd5e45b69bdabe11b";
                                        readonly typeString: "literal_string \"Avalanche Fuji\"";
                                    };
                                    readonly value: "Avalanche Fuji";
                                }, {
                                    readonly hexValue: "3433313133";
                                    readonly id: 27441;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9642:5:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_43113_by_1";
                                        readonly typeString: "int_const 43113";
                                    };
                                    readonly value: "43113";
                                }, {
                                    readonly hexValue: "68747470733a2f2f6170692e617661782d746573742e6e6574776f726b2f6578742f62632f432f727063";
                                    readonly id: 27442;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9649:44:97";
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
                                    readonly id: 27439;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26850;
                                    readonly src: "9614:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26850_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27443;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9614:80:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_a1920d2f80060f1c83444622c7eb5adf4484bed8a537b8d13eae53bd800aa692";
                                    readonly typeString: "literal_string \"avalanche_fuji\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27437;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27538;
                                readonly src: "9557:25:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27444;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9557:147:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27445;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9557:147:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "626e625f736d6172745f636861696e";
                                readonly id: 27447;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9753:17:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_fa8b17ae9aa26749f5dc3a3bb333e0019db0c257f3541e870f73bb48b574361e";
                                    readonly typeString: "literal_string \"bnb_smart_chain\"";
                                };
                                readonly value: "bnb_smart_chain";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "424e4220536d61727420436861696e";
                                    readonly id: 27449;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9782:17:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_3606544ee65d30d7c7f7d6a1f6618e0d836299fa5b85b88d71a59535c6a1550f";
                                        readonly typeString: "literal_string \"BNB Smart Chain\"";
                                    };
                                    readonly value: "BNB Smart Chain";
                                }, {
                                    readonly hexValue: "3536";
                                    readonly id: 27450;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9801:2:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_56_by_1";
                                        readonly typeString: "int_const 56";
                                    };
                                    readonly value: "56";
                                }, {
                                    readonly hexValue: "68747470733a2f2f6273632d6461746173656564312e62696e616e63652e6f7267";
                                    readonly id: 27451;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9805:35:97";
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
                                    readonly id: 27448;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26850;
                                    readonly src: "9772:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26850_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27452;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9772:69:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_fa8b17ae9aa26749f5dc3a3bb333e0019db0c257f3541e870f73bb48b574361e";
                                    readonly typeString: "literal_string \"bnb_smart_chain\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27446;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27538;
                                readonly src: "9714:25:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27453;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9714:137:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27454;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9714:137:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "626e625f736d6172745f636861696e5f746573746e6574";
                                readonly id: 27456;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "9900:25:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_1813de9892ab9db3d0c3b0c3eed9c8b820fe0c7e205bed860e6e89f4d7f75f29";
                                    readonly typeString: "literal_string \"bnb_smart_chain_testnet\"";
                                };
                                readonly value: "bnb_smart_chain_testnet";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "424e4220536d61727420436861696e20546573746e6574";
                                    readonly id: 27458;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9949:25:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_3b1d88342c4ab079c9a8243ef8dfeb0bb41e1da5dc9fe62ca728dfe4ea21092c";
                                        readonly typeString: "literal_string \"BNB Smart Chain Testnet\"";
                                    };
                                    readonly value: "BNB Smart Chain Testnet";
                                }, {
                                    readonly hexValue: "3937";
                                    readonly id: 27459;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9976:2:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_97_by_1";
                                        readonly typeString: "int_const 97";
                                    };
                                    readonly value: "97";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7270632e616e6b722e636f6d2f6273635f746573746e65745f63686170656c";
                                    readonly id: 27460;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "9980:41:97";
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
                                    readonly id: 27457;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26850;
                                    readonly src: "9939:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26850_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27461;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9939:83:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_1813de9892ab9db3d0c3b0c3eed9c8b820fe0c7e205bed860e6e89f4d7f75f29";
                                    readonly typeString: "literal_string \"bnb_smart_chain_testnet\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27455;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27538;
                                readonly src: "9861:25:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27462;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9861:171:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27463;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "9861:171:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "676e6f7369735f636861696e";
                                readonly id: 27465;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10068:14:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_847b7ed4df59b2dfcdba377bf4ac481c502926169e9af948ee2dd45c0e6df595";
                                    readonly typeString: "literal_string \"gnosis_chain\"";
                                };
                                readonly value: "gnosis_chain";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "476e6f73697320436861696e";
                                    readonly id: 27467;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10094:14:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_9bfc6ae4a1f5d8ea33b4f631c2f7dfbfa7d613af42ef38137c06d4cd03619b02";
                                        readonly typeString: "literal_string \"Gnosis Chain\"";
                                    };
                                    readonly value: "Gnosis Chain";
                                }, {
                                    readonly hexValue: "313030";
                                    readonly id: 27468;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10110:3:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_100_by_1";
                                        readonly typeString: "int_const 100";
                                    };
                                    readonly value: "100";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7270632e676e6f736973636861696e2e636f6d";
                                    readonly id: 27469;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10115:29:97";
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
                                    readonly id: 27466;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26850;
                                    readonly src: "10084:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26850_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27470;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10084:61:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_847b7ed4df59b2dfcdba377bf4ac481c502926169e9af948ee2dd45c0e6df595";
                                    readonly typeString: "literal_string \"gnosis_chain\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27464;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27538;
                                readonly src: "10042:25:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27471;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10042:104:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27472;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10042:104:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6d6f6f6e6265616d";
                                readonly id: 27474;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10182:10:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_26aaddd9933ae745bc6e39b5e8962c0d0eef85597e0bdcb35ce7e0d96b84735d";
                                    readonly typeString: "literal_string \"moonbeam\"";
                                };
                                readonly value: "moonbeam";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4d6f6f6e6265616d";
                                    readonly id: 27476;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10204:10:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_99a49606e97aa9d58789783bd4cdfcc3ab4072167b449d1e303cb1135216531b";
                                        readonly typeString: "literal_string \"Moonbeam\"";
                                    };
                                    readonly value: "Moonbeam";
                                }, {
                                    readonly hexValue: "31323834";
                                    readonly id: 27477;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10216:4:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1284_by_1";
                                        readonly typeString: "int_const 1284";
                                    };
                                    readonly value: "1284";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7270632e6170692e6d6f6f6e6265616d2e6e6574776f726b";
                                    readonly id: 27478;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10222:34:97";
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
                                    readonly id: 27475;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26850;
                                    readonly src: "10194:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26850_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27479;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10194:63:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_26aaddd9933ae745bc6e39b5e8962c0d0eef85597e0bdcb35ce7e0d96b84735d";
                                    readonly typeString: "literal_string \"moonbeam\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27473;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27538;
                                readonly src: "10156:25:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27480;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10156:102:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27481;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10156:102:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6d6f6f6e7269766572";
                                readonly id: 27483;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10307:11:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_2eb4cae4af32e190d8881d6d0a59016ff55092d3a70bcf6b321432516acfd74a";
                                    readonly typeString: "literal_string \"moonriver\"";
                                };
                                readonly value: "moonriver";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4d6f6f6e7269766572";
                                    readonly id: 27485;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10330:11:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_65d5ad77d0dd38eb7219d1087db2cb9c2440e3f70be3ee1567aa2329d21dad8a";
                                        readonly typeString: "literal_string \"Moonriver\"";
                                    };
                                    readonly value: "Moonriver";
                                }, {
                                    readonly hexValue: "31323835";
                                    readonly id: 27486;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10343:4:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1285_by_1";
                                        readonly typeString: "int_const 1285";
                                    };
                                    readonly value: "1285";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7270632e6170692e6d6f6f6e72697665722e6d6f6f6e6265616d2e6e6574776f726b";
                                    readonly id: 27487;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10349:44:97";
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
                                    readonly id: 27484;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26850;
                                    readonly src: "10320:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26850_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27488;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10320:74:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_2eb4cae4af32e190d8881d6d0a59016ff55092d3a70bcf6b321432516acfd74a";
                                    readonly typeString: "literal_string \"moonriver\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27482;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27538;
                                readonly src: "10268:25:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27489;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10268:136:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27490;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10268:136:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly hexValue: "6d6f6f6e62617365";
                                readonly id: 27492;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10440:10:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_ccd05eb377a4954d8471e48341881dadc4d2a36094f09ce309d35b3b6204f44e";
                                    readonly typeString: "literal_string \"moonbase\"";
                                };
                                readonly value: "moonbase";
                            }, {
                                readonly arguments: readonly [{
                                    readonly hexValue: "4d6f6f6e62617365";
                                    readonly id: 27494;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10462:10:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_stringliteral_6f3c53069778183912da77a05fe67c3d6edb208ffdf1ca0161d51543035e3c68";
                                        readonly typeString: "literal_string \"Moonbase\"";
                                    };
                                    readonly value: "Moonbase";
                                }, {
                                    readonly hexValue: "31323837";
                                    readonly id: 27495;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10474:4:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1287_by_1";
                                        readonly typeString: "int_const 1287";
                                    };
                                    readonly value: "1287";
                                }, {
                                    readonly hexValue: "68747470733a2f2f7270632e746573746e65742e6d6f6f6e6265616d2e6e6574776f726b";
                                    readonly id: 27496;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "string";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10480:38:97";
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
                                    readonly id: 27493;
                                    readonly name: "ChainData";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26850;
                                    readonly src: "10452:9:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_struct$_ChainData_$26850_storage_ptr_$";
                                        readonly typeString: "type(struct StdChains.ChainData storage pointer)";
                                    };
                                };
                                readonly id: 27497;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "structConstructorCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10452:67:97";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_ccd05eb377a4954d8471e48341881dadc4d2a36094f09ce309d35b3b6204f44e";
                                    readonly typeString: "literal_string \"moonbase\"";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27491;
                                readonly name: "setChainWithDefaultRpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27538;
                                readonly src: "10414:25:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27498;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10414:106:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27499;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10414:106:97";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "initializeStdChains";
                readonly nameLocation: "7785:19:97";
                readonly parameters: {
                    readonly id: 27320;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7804:2:97";
                };
                readonly returnParameters: {
                    readonly id: 27321;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7815:0:97";
                };
                readonly scope: 27539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 27538;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10609:305:97";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 27537;
                    readonly nodeType: "Block";
                    readonly src: "10702:212:97";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [27510];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 27510;
                            readonly mutability: "mutable";
                            readonly name: "rpcUrl";
                            readonly nameLocation: "10726:6:97";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 27537;
                            readonly src: "10712:20:97";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string";
                            };
                            readonly typeName: {
                                readonly id: 27509;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "10712:6:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 27513;
                        readonly initialValue: {
                            readonly expression: {
                                readonly id: 27511;
                                readonly name: "chain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27506;
                                readonly src: "10735:5:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            };
                            readonly id: 27512;
                            readonly isConstant: false;
                            readonly isLValue: true;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "10741:6:97";
                            readonly memberName: "rpcUrl";
                            readonly nodeType: "MemberAccess";
                            readonly referencedDeclaration: 26849;
                            readonly src: "10735:12:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "10712:35:97";
                    }, {
                        readonly expression: {
                            readonly id: 27518;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly baseExpression: {
                                    readonly id: 27514;
                                    readonly name: "defaultRpcUrls";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 26868;
                                    readonly src: "10757:14:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_mapping$_t_string_memory_ptr_$_t_string_storage_$";
                                        readonly typeString: "mapping(string memory => string storage ref)";
                                    };
                                };
                                readonly id: 27516;
                                readonly indexExpression: {
                                    readonly id: 27515;
                                    readonly name: "chainAlias";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 27503;
                                    readonly src: "10772:10:97";
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
                                readonly src: "10757:26:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage";
                                    readonly typeString: "string storage ref";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 27517;
                                readonly name: "rpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27510;
                                readonly src: "10786:6:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            };
                            readonly src: "10757:35:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage";
                                readonly typeString: "string storage ref";
                            };
                        };
                        readonly id: 27519;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10757:35:97";
                    }, {
                        readonly expression: {
                            readonly id: 27524;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 27520;
                                    readonly name: "chain";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 27506;
                                    readonly src: "10802:5:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                        readonly typeString: "struct StdChains.ChainData memory";
                                    };
                                };
                                readonly id: 27522;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "10808:6:97";
                                readonly memberName: "rpcUrl";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 26849;
                                readonly src: "10802:12:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly hexValue: "";
                                readonly id: 27523;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10817:2:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                    readonly typeString: "literal_string \"\"";
                                };
                                readonly value: "";
                            };
                            readonly src: "10802:17:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly id: 27525;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10802:17:97";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 27527;
                                readonly name: "chainAlias";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27503;
                                readonly src: "10838:10:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 27528;
                                readonly name: "chain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27506;
                                readonly src: "10850:5:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                    readonly typeString: "struct StdChains.ChainData memory";
                                }];
                                readonly id: 27526;
                                readonly name: "setChain";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [27094, 27115];
                                readonly referencedDeclaration: 27094;
                                readonly src: "10829:8:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$26850_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,struct StdChains.ChainData memory)";
                                };
                            };
                            readonly id: 27529;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10829:27:97";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 27530;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10829:27:97";
                    }, {
                        readonly expression: {
                            readonly id: 27535;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 27531;
                                    readonly name: "chain";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 27506;
                                    readonly src: "10866:5:97";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                                        readonly typeString: "struct StdChains.ChainData memory";
                                    };
                                };
                                readonly id: 27533;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "10872:6:97";
                                readonly memberName: "rpcUrl";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 26849;
                                readonly src: "10866:12:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 27534;
                                readonly name: "rpcUrl";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 27510;
                                readonly src: "10881:6:97";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            };
                            readonly src: "10866:21:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly id: 27536;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10866:21:97";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setChainWithDefaultRpcUrl";
                readonly nameLocation: "10618:25:97";
                readonly parameters: {
                    readonly id: 27507;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 27503;
                        readonly mutability: "mutable";
                        readonly name: "chainAlias";
                        readonly nameLocation: "10658:10:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 27538;
                        readonly src: "10644:24:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 27502;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10644:6:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 27506;
                        readonly mutability: "mutable";
                        readonly name: "chain";
                        readonly nameLocation: "10687:5:97";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 27538;
                        readonly src: "10670:22:97";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_ChainData_$26850_memory_ptr";
                            readonly typeString: "struct StdChains.ChainData";
                        };
                        readonly typeName: {
                            readonly id: 27505;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 27504;
                                readonly name: "ChainData";
                                readonly nameLocations: readonly ["10670:9:97"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 26850;
                                readonly src: "10670:9:97";
                            };
                            readonly referencedDeclaration: 26850;
                            readonly src: "10670:9:97";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_ChainData_$26850_storage_ptr";
                                readonly typeString: "struct StdChains.ChainData";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10643:50:97";
                };
                readonly returnParameters: {
                    readonly id: 27508;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10702:0:97";
                };
                readonly scope: 27539;
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
                readonly id: 26824;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "99:1799:97";
                readonly text: " StdChains provides information about EVM compatible chains that can be used in scripts/tests.\n For each chain, the chain's name, chain ID, and a default RPC URL are provided. Chains are\n identified by their alias, which is the same as the alias in the `[rpc_endpoints]` section of\n the `foundry.toml` file. For best UX, ensure the alias in the `foundry.toml` file match the\n alias used in this contract, which can be found as the first argument to the\n `setChainWithDefaultRpcUrl` call in the `initializeStdChains` function.\n There are two main ways to use this contract:\n   1. Set a chain with `setChain(string memory chainAlias, ChainData memory chain)` or\n      `setChain(string memory chainAlias, Chain memory chain)`\n   2. Get a chain with `getChain(string memory chainAlias)` or `getChain(uint256 chainId)`.\n The first time either of those are used, chains are initialized with the default set of RPC URLs.\n This is done in `initializeStdChains`, which uses `setChainWithDefaultRpcUrl`. Defaults are recorded in\n `defaultRpcUrls`.\n The `setChain` function is straightforward, and it simply saves off the given chain data.\n The `getChain` methods use `getChainWithUpdatedRpcUrl` to return a chain. For example, let's say\n we want to retrieve the RPC URL for `mainnet`:\n   - If you have specified data with `setChain`, it will return that.\n   - If you have configured a mainnet RPC URL in `foundry.toml`, it will return the URL, provided it\n     is valid (e.g. a URL is specified, or an environment variable is given and exists).\n   - If neither of the above conditions is met, the default data is returned.\n Summarizing the above, the prioritization hierarchy is `setChain` -> `foundry.toml` -> environment variable -> defaults.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [27539];
            readonly name: "StdChains";
            readonly nameLocation: "1917:9:97";
            readonly scope: 27540;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 97;
};
//# sourceMappingURL=StdChains.d.ts.map