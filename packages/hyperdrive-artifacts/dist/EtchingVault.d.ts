export declare const EtchingVault: {
    readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_baseToken_";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_vaultSharePrice_";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "asset";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "convertToAssets";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }];
    readonly bytecode: {
        readonly object: "0x60c060405234801561001057600080fd5b5060405161019e38038061019e83398101604081905261002f91610045565b6001600160a01b0390911660805260a05261007f565b6000806040838503121561005857600080fd5b82516001600160a01b038116811461006f57600080fd5b6020939093015192949293505050565b60805160a05160fe6100a060003960006045015260006087015260fe6000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806307a2d13a14603757806338d52e0f14607a575b600080fd5b6067604236600460b0565b507f000000000000000000000000000000000000000000000000000000000000000090565b6040519081526020015b60405180910390f35b6040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020016071565b60006020828403121560c157600080fd5b503591905056fea2646970667358221220bf31d7d4014b34f65f9a3539b27871551c603a48e718d08b1402b2313f506a0464736f6c63430008140033";
        readonly sourceMap: "511:471:136:-:0;;;632:147;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;702:24:136;;;;;736:36;;511:471;;14:351:239;93:6;101;154:2;142:9;133:7;129:23;125:32;122:52;;;170:1;167;160:12;122:52;196:16;;-1:-1:-1;;;;;241:31:239;;231:42;;221:70;;287:1;284;277:12;221:70;355:2;340:18;;;;334:25;310:5;;334:25;;-1:-1:-1;;;14:351:239:o;:::-;511:471:136;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x6080604052348015600f57600080fd5b506004361060325760003560e01c806307a2d13a14603757806338d52e0f14607a575b600080fd5b6067604236600460b0565b507f000000000000000000000000000000000000000000000000000000000000000090565b6040519081526020015b60405180910390f35b6040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020016071565b60006020828403121560c157600080fd5b503591905056fea2646970667358221220bf31d7d4014b34f65f9a3539b27871551c603a48e718d08b1402b2313f506a0464736f6c63430008140033";
        readonly sourceMap: "511:471:136:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;874:106;;;;;;:::i;:::-;-1:-1:-1;957:16:136;;874:106;;;;345:25:239;;;333:2;318:18;874:106:136;;;;;;;;785:83;;;-1:-1:-1;;;;;851:10:136;545:32:239;527:51;;515:2;500:18;785:83:136;381:203:239;14:180;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:239;;14:180;-1:-1:-1;14:180:239:o";
        readonly linkReferences: {};
        readonly immutableReferences: {
            readonly "24114": readonly [{
                readonly start: 135;
                readonly length: 32;
            }];
            readonly "24116": readonly [{
                readonly start: 69;
                readonly length: 32;
            }];
        };
    };
    readonly methodIdentifiers: {
        readonly "asset()": "38d52e0f";
        readonly "convertToAssets(uint256)": "07a2d13a";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_baseToken_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice_\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"details\":\"This is a helper contract that is etched onto a `MockERC4626` vault      as one of the intermediate steps in the \\\"etching\\\" process in the Rust      debugging tools.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"EtchingVault\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/EtchingVault.sol\":\"EtchingVault\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/test/EtchingVault.sol\":{\"keccak256\":\"0x756b076eba139fa9dbc5e45ec6ce3d18a50347798912c073821221a5edd0b8dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8cbe4766616950283607c67b26377166328a998d3f8d4022aed2305cde14783f\",\"dweb:/ipfs/QmWPGJG4c1YDcthA5oQbsymbYZp3ZXbTzd8VppBqpXE14k\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_baseToken_";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_vaultSharePrice_";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "asset";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "convertToAssets";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
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
                readonly "contracts/test/EtchingVault.sol": "EtchingVault";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/test/EtchingVault.sol": {
                readonly keccak256: "0x756b076eba139fa9dbc5e45ec6ce3d18a50347798912c073821221a5edd0b8dd";
                readonly urls: readonly ["bzz-raw://8cbe4766616950283607c67b26377166328a998d3f8d4022aed2305cde14783f", "dweb:/ipfs/QmWPGJG4c1YDcthA5oQbsymbYZp3ZXbTzd8VppBqpXE14k"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/test/EtchingVault.sol";
        readonly id: 24152;
        readonly exportedSymbols: {
            readonly EtchingVault: readonly [24151];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:944:136";
        readonly nodes: readonly [{
            readonly id: 24111;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:136";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 24151;
            readonly nodeType: "ContractDefinition";
            readonly src: "511:471:136";
            readonly nodes: readonly [{
                readonly id: 24114;
                readonly nodeType: "VariableDeclaration";
                readonly src: "539:37:136";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "immutable";
                readonly name: "_baseToken";
                readonly nameLocation: "566:10:136";
                readonly scope: 24151;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 24113;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "539:7:136";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 24116;
                readonly nodeType: "VariableDeclaration";
                readonly src: "582:43:136";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "immutable";
                readonly name: "_vaultSharePrice";
                readonly nameLocation: "609:16:136";
                readonly scope: 24151;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 24115;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "582:7:136";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 24132;
                readonly nodeType: "FunctionDefinition";
                readonly src: "632:147:136";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24131;
                    readonly nodeType: "Block";
                    readonly src: "692:87:136";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 24125;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 24123;
                                readonly name: "_baseToken";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24114;
                                readonly src: "702:10:136";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 24124;
                                readonly name: "_baseToken_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24118;
                                readonly src: "715:11:136";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "702:24:136";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 24126;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "702:24:136";
                    }, {
                        readonly expression: {
                            readonly id: 24129;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 24127;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24116;
                                readonly src: "736:16:136";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 24128;
                                readonly name: "_vaultSharePrice_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24120;
                                readonly src: "755:17:136";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "736:36:136";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 24130;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "736:36:136";
                    }];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 24121;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24118;
                        readonly mutability: "mutable";
                        readonly name: "_baseToken_";
                        readonly nameLocation: "652:11:136";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24132;
                        readonly src: "644:19:136";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 24117;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "644:7:136";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24120;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice_";
                        readonly nameLocation: "673:17:136";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24132;
                        readonly src: "665:25:136";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24119;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "665:7:136";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "643:48:136";
                };
                readonly returnParameters: {
                    readonly id: 24122;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "692:0:136";
                };
                readonly scope: 24151;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 24140;
                readonly nodeType: "FunctionDefinition";
                readonly src: "785:83:136";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24139;
                    readonly nodeType: "Block";
                    readonly src: "834:34:136";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 24137;
                            readonly name: "_baseToken";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24114;
                            readonly src: "851:10:136";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 24136;
                        readonly id: 24138;
                        readonly nodeType: "Return";
                        readonly src: "844:17:136";
                    }];
                };
                readonly functionSelector: "38d52e0f";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "asset";
                readonly nameLocation: "794:5:136";
                readonly parameters: {
                    readonly id: 24133;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "799:2:136";
                };
                readonly returnParameters: {
                    readonly id: 24136;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24135;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24140;
                        readonly src: "825:7:136";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 24134;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "825:7:136";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "824:9:136";
                };
                readonly scope: 24151;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24150;
                readonly nodeType: "FunctionDefinition";
                readonly src: "874:106:136";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24149;
                    readonly nodeType: "Block";
                    readonly src: "940:40:136";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 24147;
                            readonly name: "_vaultSharePrice";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24116;
                            readonly src: "957:16:136";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24146;
                        readonly id: 24148;
                        readonly nodeType: "Return";
                        readonly src: "950:23:136";
                    }];
                };
                readonly functionSelector: "07a2d13a";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "convertToAssets";
                readonly nameLocation: "883:15:136";
                readonly parameters: {
                    readonly id: 24143;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24142;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24150;
                        readonly src: "899:7:136";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24141;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "899:7:136";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "898:9:136";
                };
                readonly returnParameters: {
                    readonly id: 24146;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24145;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24150;
                        readonly src: "931:7:136";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24144;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "931:7:136";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "930:9:136";
                };
                readonly scope: 24151;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "EtchingVault";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 24112;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "64:447:136";
                readonly text: "@author DELV\n @title EtchingVault\n @dev This is a helper contract that is etched onto a `MockERC4626` vault\n      as one of the intermediate steps in the \"etching\" process in the Rust\n      debugging tools.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [24151];
            readonly name: "EtchingVault";
            readonly nameLocation: "520:12:136";
            readonly scope: 24152;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 136;
};
//# sourceMappingURL=EtchingVault.d.ts.map