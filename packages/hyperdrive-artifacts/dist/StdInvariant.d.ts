export declare const StdInvariant: {
    readonly abi: readonly [{
        readonly type: "function";
        readonly name: "excludeArtifacts";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "excludedArtifacts_";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "excludeContracts";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "excludedContracts_";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "excludeSenders";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "excludedSenders_";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "targetArtifactSelectors";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "targetedArtifactSelectors_";
            readonly type: "tuple[]";
            readonly internalType: "struct StdInvariant.FuzzSelector[]";
            readonly components: readonly [{
                readonly name: "addr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "selectors";
                readonly type: "bytes4[]";
                readonly internalType: "bytes4[]";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "targetArtifacts";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "targetedArtifacts_";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "targetContracts";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "targetedContracts_";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "targetSelectors";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "targetedSelectors_";
            readonly type: "tuple[]";
            readonly internalType: "struct StdInvariant.FuzzSelector[]";
            readonly components: readonly [{
                readonly name: "addr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "selectors";
                readonly type: "bytes4[]";
                readonly internalType: "bytes4[]";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "targetSenders";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "targetedSenders_";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
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
        readonly id: 35463;
        readonly exportedSymbols: {
            readonly StdInvariant: readonly [35462];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:3043:155";
        readonly nodes: readonly [{
            readonly id: 35240;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:155";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".2", "<", "0.9", ".0"];
        }, {
            readonly id: 35241;
            readonly nodeType: "PragmaDirective";
            readonly src: "65:33:155";
            readonly nodes: readonly [];
            readonly literals: readonly ["experimental", "ABIEncoderV2"];
        }, {
            readonly id: 35462;
            readonly nodeType: "ContractDefinition";
            readonly src: "100:2974:155";
            readonly nodes: readonly [{
                readonly id: 35247;
                readonly nodeType: "StructDefinition";
                readonly src: "137:77:155";
                readonly nodes: readonly [];
                readonly canonicalName: "StdInvariant.FuzzSelector";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 35243;
                    readonly mutability: "mutable";
                    readonly name: "addr";
                    readonly nameLocation: "175:4:155";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 35247;
                    readonly src: "167:12:155";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 35242;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "167:7:155";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 35246;
                    readonly mutability: "mutable";
                    readonly name: "selectors";
                    readonly nameLocation: "198:9:155";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 35247;
                    readonly src: "189:18:155";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_bytes4_$dyn_storage_ptr";
                        readonly typeString: "bytes4[]";
                    };
                    readonly typeName: {
                        readonly baseType: {
                            readonly id: 35244;
                            readonly name: "bytes4";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "189:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes4";
                                readonly typeString: "bytes4";
                            };
                        };
                        readonly id: 35245;
                        readonly nodeType: "ArrayTypeName";
                        readonly src: "189:8:155";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes4_$dyn_storage_ptr";
                            readonly typeString: "bytes4[]";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "FuzzSelector";
                readonly nameLocation: "144:12:155";
                readonly scope: 35462;
                readonly visibility: "public";
            }, {
                readonly id: 35250;
                readonly nodeType: "VariableDeclaration";
                readonly src: "220:36:155";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_excludedContracts";
                readonly nameLocation: "238:18:155";
                readonly scope: 35462;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                    readonly typeString: "address[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 35248;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "220:7:155";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly id: 35249;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "220:9:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                        readonly typeString: "address[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 35253;
                readonly nodeType: "VariableDeclaration";
                readonly src: "262:34:155";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_excludedSenders";
                readonly nameLocation: "280:16:155";
                readonly scope: 35462;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                    readonly typeString: "address[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 35251;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "262:7:155";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly id: 35252;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "262:9:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                        readonly typeString: "address[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 35256;
                readonly nodeType: "VariableDeclaration";
                readonly src: "302:36:155";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_targetedContracts";
                readonly nameLocation: "320:18:155";
                readonly scope: 35462;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                    readonly typeString: "address[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 35254;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "302:7:155";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly id: 35255;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "302:9:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                        readonly typeString: "address[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 35259;
                readonly nodeType: "VariableDeclaration";
                readonly src: "344:34:155";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_targetedSenders";
                readonly nameLocation: "362:16:155";
                readonly scope: 35462;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                    readonly typeString: "address[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 35257;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "344:7:155";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly id: 35258;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "344:9:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                        readonly typeString: "address[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 35262;
                readonly nodeType: "VariableDeclaration";
                readonly src: "385:35:155";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_excludedArtifacts";
                readonly nameLocation: "402:18:155";
                readonly scope: 35462;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                    readonly typeString: "string[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 35260;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "385:6:155";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly id: 35261;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "385:8:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                        readonly typeString: "string[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 35265;
                readonly nodeType: "VariableDeclaration";
                readonly src: "426:35:155";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_targetedArtifacts";
                readonly nameLocation: "443:18:155";
                readonly scope: 35462;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                    readonly typeString: "string[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 35263;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "426:6:155";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly id: 35264;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "426:8:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                        readonly typeString: "string[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 35269;
                readonly nodeType: "VariableDeclaration";
                readonly src: "468:49:155";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_targetedArtifactSelectors";
                readonly nameLocation: "491:26:155";
                readonly scope: 35462;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35247_storage_$dyn_storage";
                    readonly typeString: "struct StdInvariant.FuzzSelector[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 35267;
                        readonly nodeType: "UserDefinedTypeName";
                        readonly pathNode: {
                            readonly id: 35266;
                            readonly name: "FuzzSelector";
                            readonly nameLocations: readonly ["468:12:155"];
                            readonly nodeType: "IdentifierPath";
                            readonly referencedDeclaration: 35247;
                            readonly src: "468:12:155";
                        };
                        readonly referencedDeclaration: 35247;
                        readonly src: "468:12:155";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_FuzzSelector_$35247_storage_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector";
                        };
                    };
                    readonly id: 35268;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "468:14:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35247_storage_$dyn_storage_ptr";
                        readonly typeString: "struct StdInvariant.FuzzSelector[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 35273;
                readonly nodeType: "VariableDeclaration";
                readonly src: "523:41:155";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_targetedSelectors";
                readonly nameLocation: "546:18:155";
                readonly scope: 35462;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35247_storage_$dyn_storage";
                    readonly typeString: "struct StdInvariant.FuzzSelector[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 35271;
                        readonly nodeType: "UserDefinedTypeName";
                        readonly pathNode: {
                            readonly id: 35270;
                            readonly name: "FuzzSelector";
                            readonly nameLocations: readonly ["523:12:155"];
                            readonly nodeType: "IdentifierPath";
                            readonly referencedDeclaration: 35247;
                            readonly src: "523:12:155";
                        };
                        readonly referencedDeclaration: 35247;
                        readonly src: "523:12:155";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_FuzzSelector_$35247_storage_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector";
                        };
                    };
                    readonly id: 35272;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "523:14:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35247_storage_$dyn_storage_ptr";
                        readonly typeString: "struct StdInvariant.FuzzSelector[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 35285;
                readonly nodeType: "FunctionDefinition";
                readonly src: "649:126:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35284;
                    readonly nodeType: "Block";
                    readonly src: "713:62:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35281;
                                readonly name: "newExcludedContract_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35275;
                                readonly src: "747:20:155";
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
                                    readonly id: 35278;
                                    readonly name: "_excludedContracts";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35250;
                                    readonly src: "723:18:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                        readonly typeString: "address[] storage ref";
                                    };
                                };
                                readonly id: 35280;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "742:4:155";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "723:23:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$";
                                    readonly typeString: "function (address[] storage pointer,address)";
                                };
                            };
                            readonly id: 35282;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "723:45:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35283;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "723:45:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeContract";
                readonly nameLocation: "658:15:155";
                readonly parameters: {
                    readonly id: 35276;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35275;
                        readonly mutability: "mutable";
                        readonly name: "newExcludedContract_";
                        readonly nameLocation: "682:20:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35285;
                        readonly src: "674:28:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 35274;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "674:7:155";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "673:30:155";
                };
                readonly returnParameters: {
                    readonly id: 35277;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "713:0:155";
                };
                readonly scope: 35462;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35297;
                readonly nodeType: "FunctionDefinition";
                readonly src: "781:118:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35296;
                    readonly nodeType: "Block";
                    readonly src: "841:58:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35293;
                                readonly name: "newExcludedSender_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35287;
                                readonly src: "873:18:155";
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
                                    readonly id: 35290;
                                    readonly name: "_excludedSenders";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35253;
                                    readonly src: "851:16:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                        readonly typeString: "address[] storage ref";
                                    };
                                };
                                readonly id: 35292;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "868:4:155";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "851:21:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$";
                                    readonly typeString: "function (address[] storage pointer,address)";
                                };
                            };
                            readonly id: 35294;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "851:41:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35295;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "851:41:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeSender";
                readonly nameLocation: "790:13:155";
                readonly parameters: {
                    readonly id: 35288;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35287;
                        readonly mutability: "mutable";
                        readonly name: "newExcludedSender_";
                        readonly nameLocation: "812:18:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35297;
                        readonly src: "804:26:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 35286;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "804:7:155";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "803:28:155";
                };
                readonly returnParameters: {
                    readonly id: 35289;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "841:0:155";
                };
                readonly scope: 35462;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35309;
                readonly nodeType: "FunctionDefinition";
                readonly src: "905:132:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35308;
                    readonly nodeType: "Block";
                    readonly src: "975:62:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35305;
                                readonly name: "newExcludedArtifact_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35299;
                                readonly src: "1009:20:155";
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
                                    readonly id: 35302;
                                    readonly name: "_excludedArtifacts";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35262;
                                    readonly src: "985:18:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                                        readonly typeString: "string storage ref[] storage ref";
                                    };
                                };
                                readonly id: 35304;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1004:4:155";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "985:23:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$";
                                    readonly typeString: "function (string storage ref[] storage pointer,string storage ref)";
                                };
                            };
                            readonly id: 35306;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "985:45:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35307;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "985:45:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeArtifact";
                readonly nameLocation: "914:15:155";
                readonly parameters: {
                    readonly id: 35300;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35299;
                        readonly mutability: "mutable";
                        readonly name: "newExcludedArtifact_";
                        readonly nameLocation: "944:20:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35309;
                        readonly src: "930:34:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35298;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "930:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "929:36:155";
                };
                readonly returnParameters: {
                    readonly id: 35301;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "975:0:155";
                };
                readonly scope: 35462;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35321;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1043:131:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35320;
                    readonly nodeType: "Block";
                    readonly src: "1112:62:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35317;
                                readonly name: "newTargetedArtifact_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35311;
                                readonly src: "1146:20:155";
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
                                    readonly id: 35314;
                                    readonly name: "_targetedArtifacts";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35265;
                                    readonly src: "1122:18:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                                        readonly typeString: "string storage ref[] storage ref";
                                    };
                                };
                                readonly id: 35316;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1141:4:155";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1122:23:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$";
                                    readonly typeString: "function (string storage ref[] storage pointer,string storage ref)";
                                };
                            };
                            readonly id: 35318;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1122:45:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35319;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1122:45:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetArtifact";
                readonly nameLocation: "1052:14:155";
                readonly parameters: {
                    readonly id: 35312;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35311;
                        readonly mutability: "mutable";
                        readonly name: "newTargetedArtifact_";
                        readonly nameLocation: "1081:20:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35321;
                        readonly src: "1067:34:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35310;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1067:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1066:36:155";
                };
                readonly returnParameters: {
                    readonly id: 35313;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1112:0:155";
                };
                readonly scope: 35462;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35334;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1180:169:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35333;
                    readonly nodeType: "Block";
                    readonly src: "1271:78:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35330;
                                readonly name: "newTargetedArtifactSelector_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35324;
                                readonly src: "1313:28:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$35247_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$35247_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory";
                                }];
                                readonly expression: {
                                    readonly id: 35327;
                                    readonly name: "_targetedArtifactSelectors";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35269;
                                    readonly src: "1281:26:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35247_storage_$dyn_storage";
                                        readonly typeString: "struct StdInvariant.FuzzSelector storage ref[] storage ref";
                                    };
                                };
                                readonly id: 35329;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1308:4:155";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1281:31:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$35247_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$35247_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$35247_storage_$dyn_storage_ptr_$";
                                    readonly typeString: "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)";
                                };
                            };
                            readonly id: 35331;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1281:61:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35332;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1281:61:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetArtifactSelector";
                readonly nameLocation: "1189:22:155";
                readonly parameters: {
                    readonly id: 35325;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35324;
                        readonly mutability: "mutable";
                        readonly name: "newTargetedArtifactSelector_";
                        readonly nameLocation: "1232:28:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35334;
                        readonly src: "1212:48:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_FuzzSelector_$35247_memory_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector";
                        };
                        readonly typeName: {
                            readonly id: 35323;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 35322;
                                readonly name: "FuzzSelector";
                                readonly nameLocations: readonly ["1212:12:155"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 35247;
                                readonly src: "1212:12:155";
                            };
                            readonly referencedDeclaration: 35247;
                            readonly src: "1212:12:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_FuzzSelector_$35247_storage_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1211:50:155";
                };
                readonly returnParameters: {
                    readonly id: 35326;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1271:0:155";
                };
                readonly scope: 35462;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35346;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1355:125:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35345;
                    readonly nodeType: "Block";
                    readonly src: "1418:62:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35342;
                                readonly name: "newTargetedContract_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35336;
                                readonly src: "1452:20:155";
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
                                    readonly id: 35339;
                                    readonly name: "_targetedContracts";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35256;
                                    readonly src: "1428:18:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                        readonly typeString: "address[] storage ref";
                                    };
                                };
                                readonly id: 35341;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1447:4:155";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1428:23:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$";
                                    readonly typeString: "function (address[] storage pointer,address)";
                                };
                            };
                            readonly id: 35343;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1428:45:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35344;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1428:45:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetContract";
                readonly nameLocation: "1364:14:155";
                readonly parameters: {
                    readonly id: 35337;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35336;
                        readonly mutability: "mutable";
                        readonly name: "newTargetedContract_";
                        readonly nameLocation: "1387:20:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35346;
                        readonly src: "1379:28:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 35335;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1379:7:155";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1378:30:155";
                };
                readonly returnParameters: {
                    readonly id: 35338;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1418:0:155";
                };
                readonly scope: 35462;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35359;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1486:137:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35358;
                    readonly nodeType: "Block";
                    readonly src: "1561:62:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35355;
                                readonly name: "newTargetedSelector_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35349;
                                readonly src: "1595:20:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$35247_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$35247_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory";
                                }];
                                readonly expression: {
                                    readonly id: 35352;
                                    readonly name: "_targetedSelectors";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35273;
                                    readonly src: "1571:18:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35247_storage_$dyn_storage";
                                        readonly typeString: "struct StdInvariant.FuzzSelector storage ref[] storage ref";
                                    };
                                };
                                readonly id: 35354;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1590:4:155";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1571:23:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$35247_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$35247_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$35247_storage_$dyn_storage_ptr_$";
                                    readonly typeString: "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)";
                                };
                            };
                            readonly id: 35356;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1571:45:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35357;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1571:45:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetSelector";
                readonly nameLocation: "1495:14:155";
                readonly parameters: {
                    readonly id: 35350;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35349;
                        readonly mutability: "mutable";
                        readonly name: "newTargetedSelector_";
                        readonly nameLocation: "1530:20:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35359;
                        readonly src: "1510:40:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_FuzzSelector_$35247_memory_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector";
                        };
                        readonly typeName: {
                            readonly id: 35348;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 35347;
                                readonly name: "FuzzSelector";
                                readonly nameLocations: readonly ["1510:12:155"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 35247;
                                readonly src: "1510:12:155";
                            };
                            readonly referencedDeclaration: 35247;
                            readonly src: "1510:12:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_FuzzSelector_$35247_storage_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1509:42:155";
                };
                readonly returnParameters: {
                    readonly id: 35351;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1561:0:155";
                };
                readonly scope: 35462;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35371;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1629:117:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35370;
                    readonly nodeType: "Block";
                    readonly src: "1688:58:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35367;
                                readonly name: "newTargetedSender_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35361;
                                readonly src: "1720:18:155";
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
                                    readonly id: 35364;
                                    readonly name: "_targetedSenders";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35259;
                                    readonly src: "1698:16:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                        readonly typeString: "address[] storage ref";
                                    };
                                };
                                readonly id: 35366;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1715:4:155";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1698:21:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$";
                                    readonly typeString: "function (address[] storage pointer,address)";
                                };
                            };
                            readonly id: 35368;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1698:41:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35369;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1698:41:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetSender";
                readonly nameLocation: "1638:12:155";
                readonly parameters: {
                    readonly id: 35362;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35361;
                        readonly mutability: "mutable";
                        readonly name: "newTargetedSender_";
                        readonly nameLocation: "1659:18:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35371;
                        readonly src: "1651:26:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 35360;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1651:7:155";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1650:28:155";
                };
                readonly returnParameters: {
                    readonly id: 35363;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1688:0:155";
                };
                readonly scope: 35462;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35382;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1875:141:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35381;
                    readonly nodeType: "Block";
                    readonly src: "1960:56:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 35379;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 35377;
                                readonly name: "excludedArtifacts_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35375;
                                readonly src: "1970:18:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "string memory[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 35378;
                                readonly name: "_excludedArtifacts";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35262;
                                readonly src: "1991:18:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                                    readonly typeString: "string storage ref[] storage ref";
                                };
                            };
                            readonly src: "1970:39:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "string memory[] memory";
                            };
                        };
                        readonly id: 35380;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1970:39:155";
                    }];
                };
                readonly functionSelector: "b5508aa9";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeArtifacts";
                readonly nameLocation: "1884:16:155";
                readonly parameters: {
                    readonly id: 35372;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1900:2:155";
                };
                readonly returnParameters: {
                    readonly id: 35376;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35375;
                        readonly mutability: "mutable";
                        readonly name: "excludedArtifacts_";
                        readonly nameLocation: "1940:18:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35382;
                        readonly src: "1924:34:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "string[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35373;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1924:6:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly id: 35374;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1924:8:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                                readonly typeString: "string[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1923:36:155";
                };
                readonly scope: 35462;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 35393;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2022:142:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35392;
                    readonly nodeType: "Block";
                    readonly src: "2108:56:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 35390;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 35388;
                                readonly name: "excludedContracts_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35386;
                                readonly src: "2118:18:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 35389;
                                readonly name: "_excludedContracts";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35250;
                                readonly src: "2139:18:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                    readonly typeString: "address[] storage ref";
                                };
                            };
                            readonly src: "2118:39:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                readonly typeString: "address[] memory";
                            };
                        };
                        readonly id: 35391;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2118:39:155";
                    }];
                };
                readonly functionSelector: "e20c9f71";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeContracts";
                readonly nameLocation: "2031:16:155";
                readonly parameters: {
                    readonly id: 35383;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2047:2:155";
                };
                readonly returnParameters: {
                    readonly id: 35387;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35386;
                        readonly mutability: "mutable";
                        readonly name: "excludedContracts_";
                        readonly nameLocation: "2088:18:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35393;
                        readonly src: "2071:35:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35384;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2071:7:155";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 35385;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2071:9:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2070:37:155";
                };
                readonly scope: 35462;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 35404;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2170:134:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35403;
                    readonly nodeType: "Block";
                    readonly src: "2252:52:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 35401;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 35399;
                                readonly name: "excludedSenders_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35397;
                                readonly src: "2262:16:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 35400;
                                readonly name: "_excludedSenders";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35253;
                                readonly src: "2281:16:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                    readonly typeString: "address[] storage ref";
                                };
                            };
                            readonly src: "2262:35:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                readonly typeString: "address[] memory";
                            };
                        };
                        readonly id: 35402;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2262:35:155";
                    }];
                };
                readonly functionSelector: "1ed7831c";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeSenders";
                readonly nameLocation: "2179:14:155";
                readonly parameters: {
                    readonly id: 35394;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2193:2:155";
                };
                readonly returnParameters: {
                    readonly id: 35398;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35397;
                        readonly mutability: "mutable";
                        readonly name: "excludedSenders_";
                        readonly nameLocation: "2234:16:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35404;
                        readonly src: "2217:33:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35395;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2217:7:155";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 35396;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2217:9:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2216:35:155";
                };
                readonly scope: 35462;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 35415;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2310:140:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35414;
                    readonly nodeType: "Block";
                    readonly src: "2394:56:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 35412;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 35410;
                                readonly name: "targetedArtifacts_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35408;
                                readonly src: "2404:18:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "string memory[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 35411;
                                readonly name: "_targetedArtifacts";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35265;
                                readonly src: "2425:18:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                                    readonly typeString: "string storage ref[] storage ref";
                                };
                            };
                            readonly src: "2404:39:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "string memory[] memory";
                            };
                        };
                        readonly id: 35413;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2404:39:155";
                    }];
                };
                readonly functionSelector: "85226c81";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetArtifacts";
                readonly nameLocation: "2319:15:155";
                readonly parameters: {
                    readonly id: 35405;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2334:2:155";
                };
                readonly returnParameters: {
                    readonly id: 35409;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35408;
                        readonly mutability: "mutable";
                        readonly name: "targetedArtifacts_";
                        readonly nameLocation: "2374:18:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35415;
                        readonly src: "2358:34:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "string[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35406;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2358:6:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly id: 35407;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2358:8:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                                readonly typeString: "string[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2357:36:155";
                };
                readonly scope: 35462;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 35427;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2456:178:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35426;
                    readonly nodeType: "Block";
                    readonly src: "2562:72:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 35424;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 35422;
                                readonly name: "targetedArtifactSelectors_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35420;
                                readonly src: "2572:26:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35247_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 35423;
                                readonly name: "_targetedArtifactSelectors";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35269;
                                readonly src: "2601:26:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35247_storage_$dyn_storage";
                                    readonly typeString: "struct StdInvariant.FuzzSelector storage ref[] storage ref";
                                };
                            };
                            readonly src: "2572:55:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35247_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector memory[] memory";
                            };
                        };
                        readonly id: 35425;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2572:55:155";
                    }];
                };
                readonly functionSelector: "66d9a9a0";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetArtifactSelectors";
                readonly nameLocation: "2465:23:155";
                readonly parameters: {
                    readonly id: 35416;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2488:2:155";
                };
                readonly returnParameters: {
                    readonly id: 35421;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35420;
                        readonly mutability: "mutable";
                        readonly name: "targetedArtifactSelectors_";
                        readonly nameLocation: "2534:26:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35427;
                        readonly src: "2512:48:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35247_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35418;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 35417;
                                    readonly name: "FuzzSelector";
                                    readonly nameLocations: readonly ["2512:12:155"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 35247;
                                    readonly src: "2512:12:155";
                                };
                                readonly referencedDeclaration: 35247;
                                readonly src: "2512:12:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$35247_storage_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector";
                                };
                            };
                            readonly id: 35419;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2512:14:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35247_storage_$dyn_storage_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2511:50:155";
                };
                readonly scope: 35462;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 35438;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2640:141:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35437;
                    readonly nodeType: "Block";
                    readonly src: "2725:56:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 35435;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 35433;
                                readonly name: "targetedContracts_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35431;
                                readonly src: "2735:18:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 35434;
                                readonly name: "_targetedContracts";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35256;
                                readonly src: "2756:18:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                    readonly typeString: "address[] storage ref";
                                };
                            };
                            readonly src: "2735:39:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                readonly typeString: "address[] memory";
                            };
                        };
                        readonly id: 35436;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2735:39:155";
                    }];
                };
                readonly functionSelector: "3f7286f4";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetContracts";
                readonly nameLocation: "2649:15:155";
                readonly parameters: {
                    readonly id: 35428;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2664:2:155";
                };
                readonly returnParameters: {
                    readonly id: 35432;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35431;
                        readonly mutability: "mutable";
                        readonly name: "targetedContracts_";
                        readonly nameLocation: "2705:18:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35438;
                        readonly src: "2688:35:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35429;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2688:7:155";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 35430;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2688:9:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2687:37:155";
                };
                readonly scope: 35462;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 35450;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2787:146:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35449;
                    readonly nodeType: "Block";
                    readonly src: "2877:56:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 35447;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 35445;
                                readonly name: "targetedSelectors_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35443;
                                readonly src: "2887:18:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35247_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 35446;
                                readonly name: "_targetedSelectors";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35273;
                                readonly src: "2908:18:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35247_storage_$dyn_storage";
                                    readonly typeString: "struct StdInvariant.FuzzSelector storage ref[] storage ref";
                                };
                            };
                            readonly src: "2887:39:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35247_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector memory[] memory";
                            };
                        };
                        readonly id: 35448;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2887:39:155";
                    }];
                };
                readonly functionSelector: "916a17c6";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetSelectors";
                readonly nameLocation: "2796:15:155";
                readonly parameters: {
                    readonly id: 35439;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2811:2:155";
                };
                readonly returnParameters: {
                    readonly id: 35444;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35443;
                        readonly mutability: "mutable";
                        readonly name: "targetedSelectors_";
                        readonly nameLocation: "2857:18:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35450;
                        readonly src: "2835:40:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35247_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35441;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 35440;
                                    readonly name: "FuzzSelector";
                                    readonly nameLocations: readonly ["2835:12:155"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 35247;
                                    readonly src: "2835:12:155";
                                };
                                readonly referencedDeclaration: 35247;
                                readonly src: "2835:12:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$35247_storage_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector";
                                };
                            };
                            readonly id: 35442;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2835:14:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$35247_storage_$dyn_storage_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2834:42:155";
                };
                readonly scope: 35462;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 35461;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2939:133:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35460;
                    readonly nodeType: "Block";
                    readonly src: "3020:52:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 35458;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 35456;
                                readonly name: "targetedSenders_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35454;
                                readonly src: "3030:16:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 35457;
                                readonly name: "_targetedSenders";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35259;
                                readonly src: "3049:16:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                    readonly typeString: "address[] storage ref";
                                };
                            };
                            readonly src: "3030:35:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                readonly typeString: "address[] memory";
                            };
                        };
                        readonly id: 35459;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3030:35:155";
                    }];
                };
                readonly functionSelector: "3e5e3c23";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetSenders";
                readonly nameLocation: "2948:13:155";
                readonly parameters: {
                    readonly id: 35451;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2961:2:155";
                };
                readonly returnParameters: {
                    readonly id: 35455;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35454;
                        readonly mutability: "mutable";
                        readonly name: "targetedSenders_";
                        readonly nameLocation: "3002:16:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35461;
                        readonly src: "2985:33:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35452;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2985:7:155";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 35453;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2985:9:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2984:35:155";
                };
                readonly scope: 35462;
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
            readonly linearizedBaseContracts: readonly [35462];
            readonly name: "StdInvariant";
            readonly nameLocation: "118:12:155";
            readonly scope: 35463;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 155;
};
//# sourceMappingURL=StdInvariant.d.ts.map