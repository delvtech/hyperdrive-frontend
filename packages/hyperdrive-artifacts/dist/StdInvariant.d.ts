export declare const StdInvariant: {
    readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "excludeArtifacts";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "excludedArtifacts_";
            readonly type: "string[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "excludeContracts";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "excludedContracts_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "excludeSenders";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "excludedSenders_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "targetArtifactSelectors";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "addr";
                readonly type: "address";
            }, {
                readonly internalType: "bytes4[]";
                readonly name: "selectors";
                readonly type: "bytes4[]";
            }];
            readonly internalType: "struct StdInvariant.FuzzSelector[]";
            readonly name: "targetedArtifactSelectors_";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "targetArtifacts";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "targetedArtifacts_";
            readonly type: "string[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "targetContracts";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "targetedContracts_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "targetSelectors";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "addr";
                readonly type: "address";
            }, {
                readonly internalType: "bytes4[]";
                readonly name: "selectors";
                readonly type: "bytes4[]";
            }];
            readonly internalType: "struct StdInvariant.FuzzSelector[]";
            readonly name: "targetedSelectors_";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "targetSenders";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "targetedSenders_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
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
    readonly methodIdentifiers: {
        readonly "excludeArtifacts()": "b5508aa9";
        readonly "excludeContracts()": "e20c9f71";
        readonly "excludeSenders()": "1ed7831c";
        readonly "targetArtifactSelectors()": "66d9a9a0";
        readonly "targetArtifacts()": "85226c81";
        readonly "targetContracts()": "3f7286f4";
        readonly "targetSelectors()": "916a17c6";
        readonly "targetSenders()": "3e5e3c23";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"excludeArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"excludedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifactSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedArtifactSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"targetedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdInvariant.sol\":\"StdInvariant\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdInvariant.sol\":{\"keccak256\":\"0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c\",\"dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "excludeArtifacts";
                readonly outputs: readonly [{
                    readonly internalType: "string[]";
                    readonly name: "excludedArtifacts_";
                    readonly type: "string[]";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "excludeContracts";
                readonly outputs: readonly [{
                    readonly internalType: "address[]";
                    readonly name: "excludedContracts_";
                    readonly type: "address[]";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "excludeSenders";
                readonly outputs: readonly [{
                    readonly internalType: "address[]";
                    readonly name: "excludedSenders_";
                    readonly type: "address[]";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "targetArtifactSelectors";
                readonly outputs: readonly [{
                    readonly internalType: "struct StdInvariant.FuzzSelector[]";
                    readonly name: "targetedArtifactSelectors_";
                    readonly type: "tuple[]";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "addr";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4[]";
                        readonly name: "selectors";
                        readonly type: "bytes4[]";
                    }];
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "targetArtifacts";
                readonly outputs: readonly [{
                    readonly internalType: "string[]";
                    readonly name: "targetedArtifacts_";
                    readonly type: "string[]";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "targetContracts";
                readonly outputs: readonly [{
                    readonly internalType: "address[]";
                    readonly name: "targetedContracts_";
                    readonly type: "address[]";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "targetSelectors";
                readonly outputs: readonly [{
                    readonly internalType: "struct StdInvariant.FuzzSelector[]";
                    readonly name: "targetedSelectors_";
                    readonly type: "tuple[]";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "addr";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4[]";
                        readonly name: "selectors";
                        readonly type: "bytes4[]";
                    }];
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "targetSenders";
                readonly outputs: readonly [{
                    readonly internalType: "address[]";
                    readonly name: "targetedSenders_";
                    readonly type: "address[]";
                }];
            }];
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
                readonly "lib/forge-std/src/StdInvariant.sol": "StdInvariant";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/forge-std/src/StdInvariant.sol": {
                readonly keccak256: "0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1";
                readonly urls: readonly ["bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c", "dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/forge-std/src/StdInvariant.sol";
        readonly id: 35285;
        readonly exportedSymbols: {
            readonly StdInvariant: readonly [35284];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:3043:151";
        readonly nodes: readonly [{
            readonly id: 35062;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:151";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".2", "<", "0.9", ".0"];
        }, {
            readonly id: 35063;
            readonly nodeType: "PragmaDirective";
            readonly src: "65:33:151";
            readonly nodes: readonly [];
            readonly literals: readonly ["experimental", "ABIEncoderV2"];
        }, {
            readonly id: 35284;
            readonly nodeType: "ContractDefinition";
            readonly src: "100:2974:151";
            readonly nodes: readonly [{
                readonly id: 35069;
                readonly nodeType: "StructDefinition";
                readonly src: "137:77:151";
                readonly nodes: readonly [];
                readonly canonicalName: "StdInvariant.FuzzSelector";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 35065;
                    readonly mutability: "mutable";
                    readonly name: "addr";
                    readonly nameLocation: "175:4:151";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 35069;
                    readonly src: "167:12:151";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 35064;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "167:7:151";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 35068;
                    readonly mutability: "mutable";
                    readonly name: "selectors";
                    readonly nameLocation: "198:9:151";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 35069;
                    readonly src: "189:18:151";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_bytes4_$dyn_storage_ptr";
                        readonly typeString: "bytes4[]";
                    };
                    readonly typeName: {
                        readonly baseType: {
                            readonly id: 35066;
                            readonly name: "bytes4";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "189:6:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes4";
                                readonly typeString: "bytes4";
                            };
                        };
                        readonly id: 35067;
                        readonly nodeType: "ArrayTypeName";
                        readonly src: "189:8:151";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes4_$dyn_storage_ptr";
                            readonly typeString: "bytes4[]";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "FuzzSelector";
                readonly nameLocation: "144:12:151";
                readonly scope: 35284;
                readonly visibility: "public";
            }, {
                readonly id: 35072;
                readonly nodeType: "VariableDeclaration";
                readonly src: "220:36:151";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_excludedContracts";
                readonly nameLocation: "238:18:151";
                readonly scope: 35284;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                    readonly typeString: "address[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 35070;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "220:7:151";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly id: 35071;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "220:9:151";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                        readonly typeString: "address[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 35075;
                readonly nodeType: "VariableDeclaration";
                readonly src: "262:34:151";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_excludedSenders";
                readonly nameLocation: "280:16:151";
                readonly scope: 35284;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                    readonly typeString: "address[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 35073;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "262:7:151";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly id: 35074;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "262:9:151";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                        readonly typeString: "address[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 35078;
                readonly nodeType: "VariableDeclaration";
                readonly src: "302:36:151";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_targetedContracts";
                readonly nameLocation: "320:18:151";
                readonly scope: 35284;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                    readonly typeString: "address[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 35076;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "302:7:151";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly id: 35077;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "302:9:151";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                        readonly typeString: "address[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 35081;
                readonly nodeType: "VariableDeclaration";
                readonly src: "344:34:151";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_targetedSenders";
                readonly nameLocation: "362:16:151";
                readonly scope: 35284;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                    readonly typeString: "address[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 35079;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "344:7:151";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly id: 35080;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "344:9:151";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                        readonly typeString: "address[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 35084;
                readonly nodeType: "VariableDeclaration";
                readonly src: "385:35:151";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_excludedArtifacts";
                readonly nameLocation: "402:18:151";
                readonly scope: 35284;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                    readonly typeString: "string[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 35082;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "385:6:151";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly id: 35083;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "385:8:151";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                        readonly typeString: "string[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 35087;
                readonly nodeType: "VariableDeclaration";
                readonly src: "426:35:151";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_targetedArtifacts";
                readonly nameLocation: "443:18:151";
                readonly scope: 35284;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                    readonly typeString: "string[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 35085;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "426:6:151";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly id: 35086;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "426:8:151";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                        readonly typeString: "string[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 35091;
                readonly nodeType: "VariableDeclaration";
                readonly src: "468:49:151";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_targetedArtifactSelectors";
                readonly nameLocation: "491:26:151";
                readonly scope: 35284;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage";
                    readonly typeString: "struct StdInvariant.FuzzSelector[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 35089;
                        readonly nodeType: "UserDefinedTypeName";
                        readonly pathNode: {
                            readonly id: 35088;
                            readonly name: "FuzzSelector";
                            readonly nameLocations: readonly ["468:12:151"];
                            readonly nodeType: "IdentifierPath";
                            readonly referencedDeclaration: 35069;
                            readonly src: "468:12:151";
                        };
                        readonly referencedDeclaration: 35069;
                        readonly src: "468:12:151";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_FuzzSelector_$35069_storage_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector";
                        };
                    };
                    readonly id: 35090;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "468:14:151";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage_ptr";
                        readonly typeString: "struct StdInvariant.FuzzSelector[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 35095;
                readonly nodeType: "VariableDeclaration";
                readonly src: "523:41:151";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_targetedSelectors";
                readonly nameLocation: "546:18:151";
                readonly scope: 35284;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage";
                    readonly typeString: "struct StdInvariant.FuzzSelector[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 35093;
                        readonly nodeType: "UserDefinedTypeName";
                        readonly pathNode: {
                            readonly id: 35092;
                            readonly name: "FuzzSelector";
                            readonly nameLocations: readonly ["523:12:151"];
                            readonly nodeType: "IdentifierPath";
                            readonly referencedDeclaration: 35069;
                            readonly src: "523:12:151";
                        };
                        readonly referencedDeclaration: 35069;
                        readonly src: "523:12:151";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_FuzzSelector_$35069_storage_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector";
                        };
                    };
                    readonly id: 35094;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "523:14:151";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage_ptr";
                        readonly typeString: "struct StdInvariant.FuzzSelector[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 35107;
                readonly nodeType: "FunctionDefinition";
                readonly src: "649:126:151";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35106;
                    readonly nodeType: "Block";
                    readonly src: "713:62:151";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35103;
                                readonly name: "newExcludedContract_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35097;
                                readonly src: "747:20:151";
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
                                readonly expression: {
                                    readonly id: 35100;
                                    readonly name: "_excludedContracts";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35072;
                                    readonly src: "723:18:151";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                        readonly typeString: "address[] storage ref";
                                    };
                                };
                                readonly id: 35102;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "742:4:151";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "723:23:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$";
                                    readonly typeString: "function (address[] storage pointer,address)";
                                };
                            };
                            readonly id: 35104;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "723:45:151";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35105;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "723:45:151";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeContract";
                readonly nameLocation: "658:15:151";
                readonly parameters: {
                    readonly id: 35098;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35097;
                        readonly mutability: "mutable";
                        readonly name: "newExcludedContract_";
                        readonly nameLocation: "682:20:151";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35107;
                        readonly src: "674:28:151";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 35096;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "674:7:151";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "673:30:151";
                };
                readonly returnParameters: {
                    readonly id: 35099;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "713:0:151";
                };
                readonly scope: 35284;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35119;
                readonly nodeType: "FunctionDefinition";
                readonly src: "781:118:151";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35118;
                    readonly nodeType: "Block";
                    readonly src: "841:58:151";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35115;
                                readonly name: "newExcludedSender_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35109;
                                readonly src: "873:18:151";
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
                                readonly expression: {
                                    readonly id: 35112;
                                    readonly name: "_excludedSenders";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35075;
                                    readonly src: "851:16:151";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                        readonly typeString: "address[] storage ref";
                                    };
                                };
                                readonly id: 35114;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "868:4:151";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "851:21:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$";
                                    readonly typeString: "function (address[] storage pointer,address)";
                                };
                            };
                            readonly id: 35116;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "851:41:151";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35117;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "851:41:151";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeSender";
                readonly nameLocation: "790:13:151";
                readonly parameters: {
                    readonly id: 35110;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35109;
                        readonly mutability: "mutable";
                        readonly name: "newExcludedSender_";
                        readonly nameLocation: "812:18:151";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35119;
                        readonly src: "804:26:151";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 35108;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "804:7:151";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "803:28:151";
                };
                readonly returnParameters: {
                    readonly id: 35111;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "841:0:151";
                };
                readonly scope: 35284;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35131;
                readonly nodeType: "FunctionDefinition";
                readonly src: "905:132:151";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35130;
                    readonly nodeType: "Block";
                    readonly src: "975:62:151";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35127;
                                readonly name: "newExcludedArtifact_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35121;
                                readonly src: "1009:20:151";
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
                                    readonly id: 35124;
                                    readonly name: "_excludedArtifacts";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35084;
                                    readonly src: "985:18:151";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                                        readonly typeString: "string storage ref[] storage ref";
                                    };
                                };
                                readonly id: 35126;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1004:4:151";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "985:23:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$";
                                    readonly typeString: "function (string storage ref[] storage pointer,string storage ref)";
                                };
                            };
                            readonly id: 35128;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "985:45:151";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35129;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "985:45:151";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeArtifact";
                readonly nameLocation: "914:15:151";
                readonly parameters: {
                    readonly id: 35122;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35121;
                        readonly mutability: "mutable";
                        readonly name: "newExcludedArtifact_";
                        readonly nameLocation: "944:20:151";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35131;
                        readonly src: "930:34:151";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35120;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "930:6:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "929:36:151";
                };
                readonly returnParameters: {
                    readonly id: 35123;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "975:0:151";
                };
                readonly scope: 35284;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35143;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1043:131:151";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35142;
                    readonly nodeType: "Block";
                    readonly src: "1112:62:151";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35139;
                                readonly name: "newTargetedArtifact_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35133;
                                readonly src: "1146:20:151";
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
                                    readonly id: 35136;
                                    readonly name: "_targetedArtifacts";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35087;
                                    readonly src: "1122:18:151";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                                        readonly typeString: "string storage ref[] storage ref";
                                    };
                                };
                                readonly id: 35138;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1141:4:151";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1122:23:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$";
                                    readonly typeString: "function (string storage ref[] storage pointer,string storage ref)";
                                };
                            };
                            readonly id: 35140;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1122:45:151";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35141;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1122:45:151";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetArtifact";
                readonly nameLocation: "1052:14:151";
                readonly parameters: {
                    readonly id: 35134;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35133;
                        readonly mutability: "mutable";
                        readonly name: "newTargetedArtifact_";
                        readonly nameLocation: "1081:20:151";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35143;
                        readonly src: "1067:34:151";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35132;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1067:6:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1066:36:151";
                };
                readonly returnParameters: {
                    readonly id: 35135;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1112:0:151";
                };
                readonly scope: 35284;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35156;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1180:169:151";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35155;
                    readonly nodeType: "Block";
                    readonly src: "1271:78:151";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35152;
                                readonly name: "newTargetedArtifactSelector_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35146;
                                readonly src: "1313:28:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$35069_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$35069_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory";
                                }];
                                readonly expression: {
                                    readonly id: 35149;
                                    readonly name: "_targetedArtifactSelectors";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35091;
                                    readonly src: "1281:26:151";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage";
                                        readonly typeString: "struct StdInvariant.FuzzSelector storage ref[] storage ref";
                                    };
                                };
                                readonly id: 35151;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1308:4:151";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1281:31:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$35069_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage_ptr_$";
                                    readonly typeString: "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)";
                                };
                            };
                            readonly id: 35153;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1281:61:151";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35154;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1281:61:151";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetArtifactSelector";
                readonly nameLocation: "1189:22:151";
                readonly parameters: {
                    readonly id: 35147;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35146;
                        readonly mutability: "mutable";
                        readonly name: "newTargetedArtifactSelector_";
                        readonly nameLocation: "1232:28:151";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35156;
                        readonly src: "1212:48:151";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_FuzzSelector_$35069_memory_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector";
                        };
                        readonly typeName: {
                            readonly id: 35145;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 35144;
                                readonly name: "FuzzSelector";
                                readonly nameLocations: readonly ["1212:12:151"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 35069;
                                readonly src: "1212:12:151";
                            };
                            readonly referencedDeclaration: 35069;
                            readonly src: "1212:12:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_FuzzSelector_$35069_storage_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1211:50:151";
                };
                readonly returnParameters: {
                    readonly id: 35148;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1271:0:151";
                };
                readonly scope: 35284;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35168;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1355:125:151";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35167;
                    readonly nodeType: "Block";
                    readonly src: "1418:62:151";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35164;
                                readonly name: "newTargetedContract_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35158;
                                readonly src: "1452:20:151";
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
                                readonly expression: {
                                    readonly id: 35161;
                                    readonly name: "_targetedContracts";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35078;
                                    readonly src: "1428:18:151";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                        readonly typeString: "address[] storage ref";
                                    };
                                };
                                readonly id: 35163;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1447:4:151";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1428:23:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$";
                                    readonly typeString: "function (address[] storage pointer,address)";
                                };
                            };
                            readonly id: 35165;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1428:45:151";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35166;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1428:45:151";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetContract";
                readonly nameLocation: "1364:14:151";
                readonly parameters: {
                    readonly id: 35159;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35158;
                        readonly mutability: "mutable";
                        readonly name: "newTargetedContract_";
                        readonly nameLocation: "1387:20:151";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35168;
                        readonly src: "1379:28:151";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 35157;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1379:7:151";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1378:30:151";
                };
                readonly returnParameters: {
                    readonly id: 35160;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1418:0:151";
                };
                readonly scope: 35284;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35181;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1486:137:151";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35180;
                    readonly nodeType: "Block";
                    readonly src: "1561:62:151";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35177;
                                readonly name: "newTargetedSelector_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35171;
                                readonly src: "1595:20:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$35069_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$35069_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory";
                                }];
                                readonly expression: {
                                    readonly id: 35174;
                                    readonly name: "_targetedSelectors";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35095;
                                    readonly src: "1571:18:151";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage";
                                        readonly typeString: "struct StdInvariant.FuzzSelector storage ref[] storage ref";
                                    };
                                };
                                readonly id: 35176;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1590:4:151";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1571:23:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$35069_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage_ptr_$";
                                    readonly typeString: "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)";
                                };
                            };
                            readonly id: 35178;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1571:45:151";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35179;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1571:45:151";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetSelector";
                readonly nameLocation: "1495:14:151";
                readonly parameters: {
                    readonly id: 35172;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35171;
                        readonly mutability: "mutable";
                        readonly name: "newTargetedSelector_";
                        readonly nameLocation: "1530:20:151";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35181;
                        readonly src: "1510:40:151";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_FuzzSelector_$35069_memory_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector";
                        };
                        readonly typeName: {
                            readonly id: 35170;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 35169;
                                readonly name: "FuzzSelector";
                                readonly nameLocations: readonly ["1510:12:151"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 35069;
                                readonly src: "1510:12:151";
                            };
                            readonly referencedDeclaration: 35069;
                            readonly src: "1510:12:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_FuzzSelector_$35069_storage_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1509:42:151";
                };
                readonly returnParameters: {
                    readonly id: 35173;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1561:0:151";
                };
                readonly scope: 35284;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35193;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1629:117:151";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35192;
                    readonly nodeType: "Block";
                    readonly src: "1688:58:151";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35189;
                                readonly name: "newTargetedSender_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35183;
                                readonly src: "1720:18:151";
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
                                readonly expression: {
                                    readonly id: 35186;
                                    readonly name: "_targetedSenders";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35081;
                                    readonly src: "1698:16:151";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                        readonly typeString: "address[] storage ref";
                                    };
                                };
                                readonly id: 35188;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1715:4:151";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1698:21:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$";
                                    readonly typeString: "function (address[] storage pointer,address)";
                                };
                            };
                            readonly id: 35190;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1698:41:151";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35191;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1698:41:151";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetSender";
                readonly nameLocation: "1638:12:151";
                readonly parameters: {
                    readonly id: 35184;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35183;
                        readonly mutability: "mutable";
                        readonly name: "newTargetedSender_";
                        readonly nameLocation: "1659:18:151";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35193;
                        readonly src: "1651:26:151";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 35182;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1651:7:151";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1650:28:151";
                };
                readonly returnParameters: {
                    readonly id: 35185;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1688:0:151";
                };
                readonly scope: 35284;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35204;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1875:141:151";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35203;
                    readonly nodeType: "Block";
                    readonly src: "1960:56:151";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 35201;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 35199;
                                readonly name: "excludedArtifacts_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35197;
                                readonly src: "1970:18:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "string memory[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 35200;
                                readonly name: "_excludedArtifacts";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35084;
                                readonly src: "1991:18:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                                    readonly typeString: "string storage ref[] storage ref";
                                };
                            };
                            readonly src: "1970:39:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "string memory[] memory";
                            };
                        };
                        readonly id: 35202;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1970:39:151";
                    }];
                };
                readonly functionSelector: "b5508aa9";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeArtifacts";
                readonly nameLocation: "1884:16:151";
                readonly parameters: {
                    readonly id: 35194;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1900:2:151";
                };
                readonly returnParameters: {
                    readonly id: 35198;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35197;
                        readonly mutability: "mutable";
                        readonly name: "excludedArtifacts_";
                        readonly nameLocation: "1940:18:151";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35204;
                        readonly src: "1924:34:151";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "string[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35195;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1924:6:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly id: 35196;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1924:8:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                                readonly typeString: "string[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1923:36:151";
                };
                readonly scope: 35284;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 35215;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2022:142:151";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35214;
                    readonly nodeType: "Block";
                    readonly src: "2108:56:151";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 35212;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 35210;
                                readonly name: "excludedContracts_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35208;
                                readonly src: "2118:18:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 35211;
                                readonly name: "_excludedContracts";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35072;
                                readonly src: "2139:18:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                    readonly typeString: "address[] storage ref";
                                };
                            };
                            readonly src: "2118:39:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                readonly typeString: "address[] memory";
                            };
                        };
                        readonly id: 35213;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2118:39:151";
                    }];
                };
                readonly functionSelector: "e20c9f71";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeContracts";
                readonly nameLocation: "2031:16:151";
                readonly parameters: {
                    readonly id: 35205;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2047:2:151";
                };
                readonly returnParameters: {
                    readonly id: 35209;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35208;
                        readonly mutability: "mutable";
                        readonly name: "excludedContracts_";
                        readonly nameLocation: "2088:18:151";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35215;
                        readonly src: "2071:35:151";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35206;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2071:7:151";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 35207;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2071:9:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2070:37:151";
                };
                readonly scope: 35284;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 35226;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2170:134:151";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35225;
                    readonly nodeType: "Block";
                    readonly src: "2252:52:151";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 35223;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 35221;
                                readonly name: "excludedSenders_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35219;
                                readonly src: "2262:16:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 35222;
                                readonly name: "_excludedSenders";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35075;
                                readonly src: "2281:16:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                    readonly typeString: "address[] storage ref";
                                };
                            };
                            readonly src: "2262:35:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                readonly typeString: "address[] memory";
                            };
                        };
                        readonly id: 35224;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2262:35:151";
                    }];
                };
                readonly functionSelector: "1ed7831c";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeSenders";
                readonly nameLocation: "2179:14:151";
                readonly parameters: {
                    readonly id: 35216;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2193:2:151";
                };
                readonly returnParameters: {
                    readonly id: 35220;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35219;
                        readonly mutability: "mutable";
                        readonly name: "excludedSenders_";
                        readonly nameLocation: "2234:16:151";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35226;
                        readonly src: "2217:33:151";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35217;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2217:7:151";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 35218;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2217:9:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2216:35:151";
                };
                readonly scope: 35284;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 35237;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2310:140:151";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35236;
                    readonly nodeType: "Block";
                    readonly src: "2394:56:151";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 35234;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 35232;
                                readonly name: "targetedArtifacts_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35230;
                                readonly src: "2404:18:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "string memory[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 35233;
                                readonly name: "_targetedArtifacts";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35087;
                                readonly src: "2425:18:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                                    readonly typeString: "string storage ref[] storage ref";
                                };
                            };
                            readonly src: "2404:39:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "string memory[] memory";
                            };
                        };
                        readonly id: 35235;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2404:39:151";
                    }];
                };
                readonly functionSelector: "85226c81";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetArtifacts";
                readonly nameLocation: "2319:15:151";
                readonly parameters: {
                    readonly id: 35227;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2334:2:151";
                };
                readonly returnParameters: {
                    readonly id: 35231;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35230;
                        readonly mutability: "mutable";
                        readonly name: "targetedArtifacts_";
                        readonly nameLocation: "2374:18:151";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35237;
                        readonly src: "2358:34:151";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "string[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35228;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2358:6:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly id: 35229;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2358:8:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                                readonly typeString: "string[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2357:36:151";
                };
                readonly scope: 35284;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 35249;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2456:178:151";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35248;
                    readonly nodeType: "Block";
                    readonly src: "2562:72:151";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 35246;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 35244;
                                readonly name: "targetedArtifactSelectors_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35242;
                                readonly src: "2572:26:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35069_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 35245;
                                readonly name: "_targetedArtifactSelectors";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35091;
                                readonly src: "2601:26:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage";
                                    readonly typeString: "struct StdInvariant.FuzzSelector storage ref[] storage ref";
                                };
                            };
                            readonly src: "2572:55:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35069_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector memory[] memory";
                            };
                        };
                        readonly id: 35247;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2572:55:151";
                    }];
                };
                readonly functionSelector: "66d9a9a0";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetArtifactSelectors";
                readonly nameLocation: "2465:23:151";
                readonly parameters: {
                    readonly id: 35238;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2488:2:151";
                };
                readonly returnParameters: {
                    readonly id: 35243;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35242;
                        readonly mutability: "mutable";
                        readonly name: "targetedArtifactSelectors_";
                        readonly nameLocation: "2534:26:151";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35249;
                        readonly src: "2512:48:151";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35069_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35240;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 35239;
                                    readonly name: "FuzzSelector";
                                    readonly nameLocations: readonly ["2512:12:151"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 35069;
                                    readonly src: "2512:12:151";
                                };
                                readonly referencedDeclaration: 35069;
                                readonly src: "2512:12:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$35069_storage_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector";
                                };
                            };
                            readonly id: 35241;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2512:14:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2511:50:151";
                };
                readonly scope: 35284;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 35260;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2640:141:151";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35259;
                    readonly nodeType: "Block";
                    readonly src: "2725:56:151";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 35257;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 35255;
                                readonly name: "targetedContracts_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35253;
                                readonly src: "2735:18:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 35256;
                                readonly name: "_targetedContracts";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35078;
                                readonly src: "2756:18:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                    readonly typeString: "address[] storage ref";
                                };
                            };
                            readonly src: "2735:39:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                readonly typeString: "address[] memory";
                            };
                        };
                        readonly id: 35258;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2735:39:151";
                    }];
                };
                readonly functionSelector: "3f7286f4";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetContracts";
                readonly nameLocation: "2649:15:151";
                readonly parameters: {
                    readonly id: 35250;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2664:2:151";
                };
                readonly returnParameters: {
                    readonly id: 35254;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35253;
                        readonly mutability: "mutable";
                        readonly name: "targetedContracts_";
                        readonly nameLocation: "2705:18:151";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35260;
                        readonly src: "2688:35:151";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35251;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2688:7:151";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 35252;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2688:9:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2687:37:151";
                };
                readonly scope: 35284;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 35272;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2787:146:151";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35271;
                    readonly nodeType: "Block";
                    readonly src: "2877:56:151";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 35269;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 35267;
                                readonly name: "targetedSelectors_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35265;
                                readonly src: "2887:18:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35069_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 35268;
                                readonly name: "_targetedSelectors";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35095;
                                readonly src: "2908:18:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage";
                                    readonly typeString: "struct StdInvariant.FuzzSelector storage ref[] storage ref";
                                };
                            };
                            readonly src: "2887:39:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35069_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector memory[] memory";
                            };
                        };
                        readonly id: 35270;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2887:39:151";
                    }];
                };
                readonly functionSelector: "916a17c6";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetSelectors";
                readonly nameLocation: "2796:15:151";
                readonly parameters: {
                    readonly id: 35261;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2811:2:151";
                };
                readonly returnParameters: {
                    readonly id: 35266;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35265;
                        readonly mutability: "mutable";
                        readonly name: "targetedSelectors_";
                        readonly nameLocation: "2857:18:151";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35272;
                        readonly src: "2835:40:151";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35069_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35263;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 35262;
                                    readonly name: "FuzzSelector";
                                    readonly nameLocations: readonly ["2835:12:151"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 35069;
                                    readonly src: "2835:12:151";
                                };
                                readonly referencedDeclaration: 35069;
                                readonly src: "2835:12:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$35069_storage_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector";
                                };
                            };
                            readonly id: 35264;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2835:14:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2834:42:151";
                };
                readonly scope: 35284;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 35283;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2939:133:151";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35282;
                    readonly nodeType: "Block";
                    readonly src: "3020:52:151";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 35280;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 35278;
                                readonly name: "targetedSenders_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35276;
                                readonly src: "3030:16:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 35279;
                                readonly name: "_targetedSenders";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35081;
                                readonly src: "3049:16:151";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                    readonly typeString: "address[] storage ref";
                                };
                            };
                            readonly src: "3030:35:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                readonly typeString: "address[] memory";
                            };
                        };
                        readonly id: 35281;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3030:35:151";
                    }];
                };
                readonly functionSelector: "3e5e3c23";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetSenders";
                readonly nameLocation: "2948:13:151";
                readonly parameters: {
                    readonly id: 35273;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2961:2:151";
                };
                readonly returnParameters: {
                    readonly id: 35277;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35276;
                        readonly mutability: "mutable";
                        readonly name: "targetedSenders_";
                        readonly nameLocation: "3002:16:151";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35283;
                        readonly src: "2985:33:151";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35274;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2985:7:151";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 35275;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2985:9:151";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2984:35:151";
                };
                readonly scope: 35284;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [];
            readonly canonicalName: "StdInvariant";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [35284];
            readonly name: "StdInvariant";
            readonly nameLocation: "118:12:151";
            readonly scope: 35285;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 151;
};
//# sourceMappingURL=StdInvariant.d.ts.map