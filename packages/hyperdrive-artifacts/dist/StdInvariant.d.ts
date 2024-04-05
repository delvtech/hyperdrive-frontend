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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"excludeArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"excludedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifactSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedArtifactSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"targetedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdInvariant.sol\":\"StdInvariant\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdInvariant.sol\":{\"keccak256\":\"0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c\",\"dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss\"]}},\"version\":1}";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
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
        readonly id: 34855;
        readonly exportedSymbols: {
            readonly StdInvariant: readonly [34854];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:3043:149";
        readonly nodes: readonly [{
            readonly id: 34632;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:149";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".2", "<", "0.9", ".0"];
        }, {
            readonly id: 34633;
            readonly nodeType: "PragmaDirective";
            readonly src: "65:33:149";
            readonly nodes: readonly [];
            readonly literals: readonly ["experimental", "ABIEncoderV2"];
        }, {
            readonly id: 34854;
            readonly nodeType: "ContractDefinition";
            readonly src: "100:2974:149";
            readonly nodes: readonly [{
                readonly id: 34639;
                readonly nodeType: "StructDefinition";
                readonly src: "137:77:149";
                readonly nodes: readonly [];
                readonly canonicalName: "StdInvariant.FuzzSelector";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 34635;
                    readonly mutability: "mutable";
                    readonly name: "addr";
                    readonly nameLocation: "175:4:149";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 34639;
                    readonly src: "167:12:149";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 34634;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "167:7:149";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 34638;
                    readonly mutability: "mutable";
                    readonly name: "selectors";
                    readonly nameLocation: "198:9:149";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 34639;
                    readonly src: "189:18:149";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_bytes4_$dyn_storage_ptr";
                        readonly typeString: "bytes4[]";
                    };
                    readonly typeName: {
                        readonly baseType: {
                            readonly id: 34636;
                            readonly name: "bytes4";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "189:6:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes4";
                                readonly typeString: "bytes4";
                            };
                        };
                        readonly id: 34637;
                        readonly nodeType: "ArrayTypeName";
                        readonly src: "189:8:149";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes4_$dyn_storage_ptr";
                            readonly typeString: "bytes4[]";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "FuzzSelector";
                readonly nameLocation: "144:12:149";
                readonly scope: 34854;
                readonly visibility: "public";
            }, {
                readonly id: 34642;
                readonly nodeType: "VariableDeclaration";
                readonly src: "220:36:149";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_excludedContracts";
                readonly nameLocation: "238:18:149";
                readonly scope: 34854;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                    readonly typeString: "address[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 34640;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "220:7:149";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly id: 34641;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "220:9:149";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                        readonly typeString: "address[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 34645;
                readonly nodeType: "VariableDeclaration";
                readonly src: "262:34:149";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_excludedSenders";
                readonly nameLocation: "280:16:149";
                readonly scope: 34854;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                    readonly typeString: "address[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 34643;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "262:7:149";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly id: 34644;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "262:9:149";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                        readonly typeString: "address[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 34648;
                readonly nodeType: "VariableDeclaration";
                readonly src: "302:36:149";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_targetedContracts";
                readonly nameLocation: "320:18:149";
                readonly scope: 34854;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                    readonly typeString: "address[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 34646;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "302:7:149";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly id: 34647;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "302:9:149";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                        readonly typeString: "address[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 34651;
                readonly nodeType: "VariableDeclaration";
                readonly src: "344:34:149";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_targetedSenders";
                readonly nameLocation: "362:16:149";
                readonly scope: 34854;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                    readonly typeString: "address[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 34649;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "344:7:149";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly id: 34650;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "344:9:149";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                        readonly typeString: "address[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 34654;
                readonly nodeType: "VariableDeclaration";
                readonly src: "385:35:149";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_excludedArtifacts";
                readonly nameLocation: "402:18:149";
                readonly scope: 34854;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                    readonly typeString: "string[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 34652;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "385:6:149";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly id: 34653;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "385:8:149";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                        readonly typeString: "string[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 34657;
                readonly nodeType: "VariableDeclaration";
                readonly src: "426:35:149";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_targetedArtifacts";
                readonly nameLocation: "443:18:149";
                readonly scope: 34854;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                    readonly typeString: "string[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 34655;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "426:6:149";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly id: 34656;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "426:8:149";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                        readonly typeString: "string[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 34661;
                readonly nodeType: "VariableDeclaration";
                readonly src: "468:49:149";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_targetedArtifactSelectors";
                readonly nameLocation: "491:26:149";
                readonly scope: 34854;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$34639_storage_$dyn_storage";
                    readonly typeString: "struct StdInvariant.FuzzSelector[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 34659;
                        readonly nodeType: "UserDefinedTypeName";
                        readonly pathNode: {
                            readonly id: 34658;
                            readonly name: "FuzzSelector";
                            readonly nameLocations: readonly ["468:12:149"];
                            readonly nodeType: "IdentifierPath";
                            readonly referencedDeclaration: 34639;
                            readonly src: "468:12:149";
                        };
                        readonly referencedDeclaration: 34639;
                        readonly src: "468:12:149";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_FuzzSelector_$34639_storage_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector";
                        };
                    };
                    readonly id: 34660;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "468:14:149";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$34639_storage_$dyn_storage_ptr";
                        readonly typeString: "struct StdInvariant.FuzzSelector[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 34665;
                readonly nodeType: "VariableDeclaration";
                readonly src: "523:41:149";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_targetedSelectors";
                readonly nameLocation: "546:18:149";
                readonly scope: 34854;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$34639_storage_$dyn_storage";
                    readonly typeString: "struct StdInvariant.FuzzSelector[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 34663;
                        readonly nodeType: "UserDefinedTypeName";
                        readonly pathNode: {
                            readonly id: 34662;
                            readonly name: "FuzzSelector";
                            readonly nameLocations: readonly ["523:12:149"];
                            readonly nodeType: "IdentifierPath";
                            readonly referencedDeclaration: 34639;
                            readonly src: "523:12:149";
                        };
                        readonly referencedDeclaration: 34639;
                        readonly src: "523:12:149";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_FuzzSelector_$34639_storage_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector";
                        };
                    };
                    readonly id: 34664;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "523:14:149";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$34639_storage_$dyn_storage_ptr";
                        readonly typeString: "struct StdInvariant.FuzzSelector[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 34677;
                readonly nodeType: "FunctionDefinition";
                readonly src: "649:126:149";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34676;
                    readonly nodeType: "Block";
                    readonly src: "713:62:149";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 34673;
                                readonly name: "newExcludedContract_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34667;
                                readonly src: "747:20:149";
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
                                    readonly id: 34670;
                                    readonly name: "_excludedContracts";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34642;
                                    readonly src: "723:18:149";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                        readonly typeString: "address[] storage ref";
                                    };
                                };
                                readonly id: 34672;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "742:4:149";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "723:23:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$";
                                    readonly typeString: "function (address[] storage pointer,address)";
                                };
                            };
                            readonly id: 34674;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "723:45:149";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 34675;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "723:45:149";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeContract";
                readonly nameLocation: "658:15:149";
                readonly parameters: {
                    readonly id: 34668;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34667;
                        readonly mutability: "mutable";
                        readonly name: "newExcludedContract_";
                        readonly nameLocation: "682:20:149";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34677;
                        readonly src: "674:28:149";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 34666;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "674:7:149";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "673:30:149";
                };
                readonly returnParameters: {
                    readonly id: 34669;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "713:0:149";
                };
                readonly scope: 34854;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 34689;
                readonly nodeType: "FunctionDefinition";
                readonly src: "781:118:149";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34688;
                    readonly nodeType: "Block";
                    readonly src: "841:58:149";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 34685;
                                readonly name: "newExcludedSender_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34679;
                                readonly src: "873:18:149";
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
                                    readonly id: 34682;
                                    readonly name: "_excludedSenders";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34645;
                                    readonly src: "851:16:149";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                        readonly typeString: "address[] storage ref";
                                    };
                                };
                                readonly id: 34684;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "868:4:149";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "851:21:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$";
                                    readonly typeString: "function (address[] storage pointer,address)";
                                };
                            };
                            readonly id: 34686;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "851:41:149";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 34687;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "851:41:149";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeSender";
                readonly nameLocation: "790:13:149";
                readonly parameters: {
                    readonly id: 34680;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34679;
                        readonly mutability: "mutable";
                        readonly name: "newExcludedSender_";
                        readonly nameLocation: "812:18:149";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34689;
                        readonly src: "804:26:149";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 34678;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "804:7:149";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "803:28:149";
                };
                readonly returnParameters: {
                    readonly id: 34681;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "841:0:149";
                };
                readonly scope: 34854;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 34701;
                readonly nodeType: "FunctionDefinition";
                readonly src: "905:132:149";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34700;
                    readonly nodeType: "Block";
                    readonly src: "975:62:149";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 34697;
                                readonly name: "newExcludedArtifact_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34691;
                                readonly src: "1009:20:149";
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
                                    readonly id: 34694;
                                    readonly name: "_excludedArtifacts";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34654;
                                    readonly src: "985:18:149";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                                        readonly typeString: "string storage ref[] storage ref";
                                    };
                                };
                                readonly id: 34696;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1004:4:149";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "985:23:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$";
                                    readonly typeString: "function (string storage ref[] storage pointer,string storage ref)";
                                };
                            };
                            readonly id: 34698;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "985:45:149";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 34699;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "985:45:149";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeArtifact";
                readonly nameLocation: "914:15:149";
                readonly parameters: {
                    readonly id: 34692;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34691;
                        readonly mutability: "mutable";
                        readonly name: "newExcludedArtifact_";
                        readonly nameLocation: "944:20:149";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34701;
                        readonly src: "930:34:149";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34690;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "930:6:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "929:36:149";
                };
                readonly returnParameters: {
                    readonly id: 34693;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "975:0:149";
                };
                readonly scope: 34854;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 34713;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1043:131:149";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34712;
                    readonly nodeType: "Block";
                    readonly src: "1112:62:149";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 34709;
                                readonly name: "newTargetedArtifact_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34703;
                                readonly src: "1146:20:149";
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
                                    readonly id: 34706;
                                    readonly name: "_targetedArtifacts";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34657;
                                    readonly src: "1122:18:149";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                                        readonly typeString: "string storage ref[] storage ref";
                                    };
                                };
                                readonly id: 34708;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1141:4:149";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1122:23:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$";
                                    readonly typeString: "function (string storage ref[] storage pointer,string storage ref)";
                                };
                            };
                            readonly id: 34710;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1122:45:149";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 34711;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1122:45:149";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetArtifact";
                readonly nameLocation: "1052:14:149";
                readonly parameters: {
                    readonly id: 34704;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34703;
                        readonly mutability: "mutable";
                        readonly name: "newTargetedArtifact_";
                        readonly nameLocation: "1081:20:149";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34713;
                        readonly src: "1067:34:149";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34702;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1067:6:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1066:36:149";
                };
                readonly returnParameters: {
                    readonly id: 34705;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1112:0:149";
                };
                readonly scope: 34854;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 34726;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1180:169:149";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34725;
                    readonly nodeType: "Block";
                    readonly src: "1271:78:149";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 34722;
                                readonly name: "newTargetedArtifactSelector_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34716;
                                readonly src: "1313:28:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$34639_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$34639_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory";
                                }];
                                readonly expression: {
                                    readonly id: 34719;
                                    readonly name: "_targetedArtifactSelectors";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34661;
                                    readonly src: "1281:26:149";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$34639_storage_$dyn_storage";
                                        readonly typeString: "struct StdInvariant.FuzzSelector storage ref[] storage ref";
                                    };
                                };
                                readonly id: 34721;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1308:4:149";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1281:31:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$34639_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$34639_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$34639_storage_$dyn_storage_ptr_$";
                                    readonly typeString: "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)";
                                };
                            };
                            readonly id: 34723;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1281:61:149";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 34724;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1281:61:149";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetArtifactSelector";
                readonly nameLocation: "1189:22:149";
                readonly parameters: {
                    readonly id: 34717;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34716;
                        readonly mutability: "mutable";
                        readonly name: "newTargetedArtifactSelector_";
                        readonly nameLocation: "1232:28:149";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34726;
                        readonly src: "1212:48:149";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_FuzzSelector_$34639_memory_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector";
                        };
                        readonly typeName: {
                            readonly id: 34715;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 34714;
                                readonly name: "FuzzSelector";
                                readonly nameLocations: readonly ["1212:12:149"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 34639;
                                readonly src: "1212:12:149";
                            };
                            readonly referencedDeclaration: 34639;
                            readonly src: "1212:12:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_FuzzSelector_$34639_storage_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1211:50:149";
                };
                readonly returnParameters: {
                    readonly id: 34718;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1271:0:149";
                };
                readonly scope: 34854;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 34738;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1355:125:149";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34737;
                    readonly nodeType: "Block";
                    readonly src: "1418:62:149";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 34734;
                                readonly name: "newTargetedContract_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34728;
                                readonly src: "1452:20:149";
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
                                    readonly id: 34731;
                                    readonly name: "_targetedContracts";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34648;
                                    readonly src: "1428:18:149";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                        readonly typeString: "address[] storage ref";
                                    };
                                };
                                readonly id: 34733;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1447:4:149";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1428:23:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$";
                                    readonly typeString: "function (address[] storage pointer,address)";
                                };
                            };
                            readonly id: 34735;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1428:45:149";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 34736;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1428:45:149";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetContract";
                readonly nameLocation: "1364:14:149";
                readonly parameters: {
                    readonly id: 34729;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34728;
                        readonly mutability: "mutable";
                        readonly name: "newTargetedContract_";
                        readonly nameLocation: "1387:20:149";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34738;
                        readonly src: "1379:28:149";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 34727;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1379:7:149";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1378:30:149";
                };
                readonly returnParameters: {
                    readonly id: 34730;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1418:0:149";
                };
                readonly scope: 34854;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 34751;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1486:137:149";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34750;
                    readonly nodeType: "Block";
                    readonly src: "1561:62:149";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 34747;
                                readonly name: "newTargetedSelector_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34741;
                                readonly src: "1595:20:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$34639_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$34639_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory";
                                }];
                                readonly expression: {
                                    readonly id: 34744;
                                    readonly name: "_targetedSelectors";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34665;
                                    readonly src: "1571:18:149";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$34639_storage_$dyn_storage";
                                        readonly typeString: "struct StdInvariant.FuzzSelector storage ref[] storage ref";
                                    };
                                };
                                readonly id: 34746;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1590:4:149";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1571:23:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$34639_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$34639_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$34639_storage_$dyn_storage_ptr_$";
                                    readonly typeString: "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)";
                                };
                            };
                            readonly id: 34748;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1571:45:149";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 34749;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1571:45:149";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetSelector";
                readonly nameLocation: "1495:14:149";
                readonly parameters: {
                    readonly id: 34742;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34741;
                        readonly mutability: "mutable";
                        readonly name: "newTargetedSelector_";
                        readonly nameLocation: "1530:20:149";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34751;
                        readonly src: "1510:40:149";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_FuzzSelector_$34639_memory_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector";
                        };
                        readonly typeName: {
                            readonly id: 34740;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 34739;
                                readonly name: "FuzzSelector";
                                readonly nameLocations: readonly ["1510:12:149"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 34639;
                                readonly src: "1510:12:149";
                            };
                            readonly referencedDeclaration: 34639;
                            readonly src: "1510:12:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_FuzzSelector_$34639_storage_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1509:42:149";
                };
                readonly returnParameters: {
                    readonly id: 34743;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1561:0:149";
                };
                readonly scope: 34854;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 34763;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1629:117:149";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34762;
                    readonly nodeType: "Block";
                    readonly src: "1688:58:149";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 34759;
                                readonly name: "newTargetedSender_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34753;
                                readonly src: "1720:18:149";
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
                                    readonly id: 34756;
                                    readonly name: "_targetedSenders";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34651;
                                    readonly src: "1698:16:149";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                        readonly typeString: "address[] storage ref";
                                    };
                                };
                                readonly id: 34758;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1715:4:149";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1698:21:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$";
                                    readonly typeString: "function (address[] storage pointer,address)";
                                };
                            };
                            readonly id: 34760;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1698:41:149";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 34761;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1698:41:149";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetSender";
                readonly nameLocation: "1638:12:149";
                readonly parameters: {
                    readonly id: 34754;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34753;
                        readonly mutability: "mutable";
                        readonly name: "newTargetedSender_";
                        readonly nameLocation: "1659:18:149";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34763;
                        readonly src: "1651:26:149";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 34752;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1651:7:149";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1650:28:149";
                };
                readonly returnParameters: {
                    readonly id: 34755;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1688:0:149";
                };
                readonly scope: 34854;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 34774;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1875:141:149";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34773;
                    readonly nodeType: "Block";
                    readonly src: "1960:56:149";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 34771;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 34769;
                                readonly name: "excludedArtifacts_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34767;
                                readonly src: "1970:18:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "string memory[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 34770;
                                readonly name: "_excludedArtifacts";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34654;
                                readonly src: "1991:18:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                                    readonly typeString: "string storage ref[] storage ref";
                                };
                            };
                            readonly src: "1970:39:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "string memory[] memory";
                            };
                        };
                        readonly id: 34772;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1970:39:149";
                    }];
                };
                readonly functionSelector: "b5508aa9";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeArtifacts";
                readonly nameLocation: "1884:16:149";
                readonly parameters: {
                    readonly id: 34764;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1900:2:149";
                };
                readonly returnParameters: {
                    readonly id: 34768;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34767;
                        readonly mutability: "mutable";
                        readonly name: "excludedArtifacts_";
                        readonly nameLocation: "1940:18:149";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34774;
                        readonly src: "1924:34:149";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "string[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 34765;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1924:6:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly id: 34766;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1924:8:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                                readonly typeString: "string[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1923:36:149";
                };
                readonly scope: 34854;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 34785;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2022:142:149";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34784;
                    readonly nodeType: "Block";
                    readonly src: "2108:56:149";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 34782;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 34780;
                                readonly name: "excludedContracts_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34778;
                                readonly src: "2118:18:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 34781;
                                readonly name: "_excludedContracts";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34642;
                                readonly src: "2139:18:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                    readonly typeString: "address[] storage ref";
                                };
                            };
                            readonly src: "2118:39:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                readonly typeString: "address[] memory";
                            };
                        };
                        readonly id: 34783;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2118:39:149";
                    }];
                };
                readonly functionSelector: "e20c9f71";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeContracts";
                readonly nameLocation: "2031:16:149";
                readonly parameters: {
                    readonly id: 34775;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2047:2:149";
                };
                readonly returnParameters: {
                    readonly id: 34779;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34778;
                        readonly mutability: "mutable";
                        readonly name: "excludedContracts_";
                        readonly nameLocation: "2088:18:149";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34785;
                        readonly src: "2071:35:149";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 34776;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2071:7:149";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 34777;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2071:9:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2070:37:149";
                };
                readonly scope: 34854;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 34796;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2170:134:149";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34795;
                    readonly nodeType: "Block";
                    readonly src: "2252:52:149";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 34793;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 34791;
                                readonly name: "excludedSenders_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34789;
                                readonly src: "2262:16:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 34792;
                                readonly name: "_excludedSenders";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34645;
                                readonly src: "2281:16:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                    readonly typeString: "address[] storage ref";
                                };
                            };
                            readonly src: "2262:35:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                readonly typeString: "address[] memory";
                            };
                        };
                        readonly id: 34794;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2262:35:149";
                    }];
                };
                readonly functionSelector: "1ed7831c";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeSenders";
                readonly nameLocation: "2179:14:149";
                readonly parameters: {
                    readonly id: 34786;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2193:2:149";
                };
                readonly returnParameters: {
                    readonly id: 34790;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34789;
                        readonly mutability: "mutable";
                        readonly name: "excludedSenders_";
                        readonly nameLocation: "2234:16:149";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34796;
                        readonly src: "2217:33:149";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 34787;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2217:7:149";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 34788;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2217:9:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2216:35:149";
                };
                readonly scope: 34854;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 34807;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2310:140:149";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34806;
                    readonly nodeType: "Block";
                    readonly src: "2394:56:149";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 34804;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 34802;
                                readonly name: "targetedArtifacts_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34800;
                                readonly src: "2404:18:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "string memory[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 34803;
                                readonly name: "_targetedArtifacts";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34657;
                                readonly src: "2425:18:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                                    readonly typeString: "string storage ref[] storage ref";
                                };
                            };
                            readonly src: "2404:39:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "string memory[] memory";
                            };
                        };
                        readonly id: 34805;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2404:39:149";
                    }];
                };
                readonly functionSelector: "85226c81";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetArtifacts";
                readonly nameLocation: "2319:15:149";
                readonly parameters: {
                    readonly id: 34797;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2334:2:149";
                };
                readonly returnParameters: {
                    readonly id: 34801;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34800;
                        readonly mutability: "mutable";
                        readonly name: "targetedArtifacts_";
                        readonly nameLocation: "2374:18:149";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34807;
                        readonly src: "2358:34:149";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "string[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 34798;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2358:6:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly id: 34799;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2358:8:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                                readonly typeString: "string[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2357:36:149";
                };
                readonly scope: 34854;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 34819;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2456:178:149";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34818;
                    readonly nodeType: "Block";
                    readonly src: "2562:72:149";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 34816;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 34814;
                                readonly name: "targetedArtifactSelectors_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34812;
                                readonly src: "2572:26:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$34639_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 34815;
                                readonly name: "_targetedArtifactSelectors";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34661;
                                readonly src: "2601:26:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$34639_storage_$dyn_storage";
                                    readonly typeString: "struct StdInvariant.FuzzSelector storage ref[] storage ref";
                                };
                            };
                            readonly src: "2572:55:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$34639_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector memory[] memory";
                            };
                        };
                        readonly id: 34817;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2572:55:149";
                    }];
                };
                readonly functionSelector: "66d9a9a0";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetArtifactSelectors";
                readonly nameLocation: "2465:23:149";
                readonly parameters: {
                    readonly id: 34808;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2488:2:149";
                };
                readonly returnParameters: {
                    readonly id: 34813;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34812;
                        readonly mutability: "mutable";
                        readonly name: "targetedArtifactSelectors_";
                        readonly nameLocation: "2534:26:149";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34819;
                        readonly src: "2512:48:149";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$34639_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 34810;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 34809;
                                    readonly name: "FuzzSelector";
                                    readonly nameLocations: readonly ["2512:12:149"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 34639;
                                    readonly src: "2512:12:149";
                                };
                                readonly referencedDeclaration: 34639;
                                readonly src: "2512:12:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$34639_storage_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector";
                                };
                            };
                            readonly id: 34811;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2512:14:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$34639_storage_$dyn_storage_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2511:50:149";
                };
                readonly scope: 34854;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 34830;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2640:141:149";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34829;
                    readonly nodeType: "Block";
                    readonly src: "2725:56:149";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 34827;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 34825;
                                readonly name: "targetedContracts_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34823;
                                readonly src: "2735:18:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 34826;
                                readonly name: "_targetedContracts";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34648;
                                readonly src: "2756:18:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                    readonly typeString: "address[] storage ref";
                                };
                            };
                            readonly src: "2735:39:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                readonly typeString: "address[] memory";
                            };
                        };
                        readonly id: 34828;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2735:39:149";
                    }];
                };
                readonly functionSelector: "3f7286f4";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetContracts";
                readonly nameLocation: "2649:15:149";
                readonly parameters: {
                    readonly id: 34820;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2664:2:149";
                };
                readonly returnParameters: {
                    readonly id: 34824;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34823;
                        readonly mutability: "mutable";
                        readonly name: "targetedContracts_";
                        readonly nameLocation: "2705:18:149";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34830;
                        readonly src: "2688:35:149";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 34821;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2688:7:149";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 34822;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2688:9:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2687:37:149";
                };
                readonly scope: 34854;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 34842;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2787:146:149";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34841;
                    readonly nodeType: "Block";
                    readonly src: "2877:56:149";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 34839;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 34837;
                                readonly name: "targetedSelectors_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34835;
                                readonly src: "2887:18:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$34639_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 34838;
                                readonly name: "_targetedSelectors";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34665;
                                readonly src: "2908:18:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$34639_storage_$dyn_storage";
                                    readonly typeString: "struct StdInvariant.FuzzSelector storage ref[] storage ref";
                                };
                            };
                            readonly src: "2887:39:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$34639_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector memory[] memory";
                            };
                        };
                        readonly id: 34840;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2887:39:149";
                    }];
                };
                readonly functionSelector: "916a17c6";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetSelectors";
                readonly nameLocation: "2796:15:149";
                readonly parameters: {
                    readonly id: 34831;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2811:2:149";
                };
                readonly returnParameters: {
                    readonly id: 34836;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34835;
                        readonly mutability: "mutable";
                        readonly name: "targetedSelectors_";
                        readonly nameLocation: "2857:18:149";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34842;
                        readonly src: "2835:40:149";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$34639_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 34833;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 34832;
                                    readonly name: "FuzzSelector";
                                    readonly nameLocations: readonly ["2835:12:149"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 34639;
                                    readonly src: "2835:12:149";
                                };
                                readonly referencedDeclaration: 34639;
                                readonly src: "2835:12:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$34639_storage_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector";
                                };
                            };
                            readonly id: 34834;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2835:14:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$34639_storage_$dyn_storage_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2834:42:149";
                };
                readonly scope: 34854;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 34853;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2939:133:149";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 34852;
                    readonly nodeType: "Block";
                    readonly src: "3020:52:149";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 34850;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 34848;
                                readonly name: "targetedSenders_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34846;
                                readonly src: "3030:16:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 34849;
                                readonly name: "_targetedSenders";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34651;
                                readonly src: "3049:16:149";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                    readonly typeString: "address[] storage ref";
                                };
                            };
                            readonly src: "3030:35:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                readonly typeString: "address[] memory";
                            };
                        };
                        readonly id: 34851;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3030:35:149";
                    }];
                };
                readonly functionSelector: "3e5e3c23";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetSenders";
                readonly nameLocation: "2948:13:149";
                readonly parameters: {
                    readonly id: 34843;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2961:2:149";
                };
                readonly returnParameters: {
                    readonly id: 34847;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34846;
                        readonly mutability: "mutable";
                        readonly name: "targetedSenders_";
                        readonly nameLocation: "3002:16:149";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 34853;
                        readonly src: "2985:33:149";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 34844;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2985:7:149";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 34845;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2985:9:149";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2984:35:149";
                };
                readonly scope: 34854;
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
            readonly linearizedBaseContracts: readonly [34854];
            readonly name: "StdInvariant";
            readonly nameLocation: "118:12:149";
            readonly scope: 34855;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 149;
};
//# sourceMappingURL=StdInvariant.d.ts.map