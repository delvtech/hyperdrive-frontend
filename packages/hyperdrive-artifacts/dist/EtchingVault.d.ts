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
        readonly sourceMap: "511:471:132:-:0;;;632:147;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;702:24:132;;;;;736:36;;511:471;;14:351:235;93:6;101;154:2;142:9;133:7;129:23;125:32;122:52;;;170:1;167;160:12;122:52;196:16;;-1:-1:-1;;;;;241:31:235;;231:42;;221:70;;287:1;284;277:12;221:70;355:2;340:18;;;;334:25;310:5;;334:25;;-1:-1:-1;;;14:351:235:o;:::-;511:471:132;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x6080604052348015600f57600080fd5b506004361060325760003560e01c806307a2d13a14603757806338d52e0f14607a575b600080fd5b6067604236600460b0565b507f000000000000000000000000000000000000000000000000000000000000000090565b6040519081526020015b60405180910390f35b6040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020016071565b60006020828403121560c157600080fd5b503591905056fea2646970667358221220bf31d7d4014b34f65f9a3539b27871551c603a48e718d08b1402b2313f506a0464736f6c63430008140033";
        readonly sourceMap: "511:471:132:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;874:106;;;;;;:::i;:::-;-1:-1:-1;957:16:132;;874:106;;;;345:25:235;;;333:2;318:18;874:106:132;;;;;;;;785:83;;;-1:-1:-1;;;;;851:10:132;545:32:235;527:51;;515:2;500:18;785:83:132;381:203:235;14:180;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:235;;14:180;-1:-1:-1;14:180:235:o";
        readonly linkReferences: {};
        readonly immutableReferences: {
            readonly "23984": readonly [{
                readonly start: 135;
                readonly length: 32;
            }];
            readonly "23986": readonly [{
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
        readonly id: 24022;
        readonly exportedSymbols: {
            readonly EtchingVault: readonly [24021];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:944:132";
        readonly nodes: readonly [{
            readonly id: 23981;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:132";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 24021;
            readonly nodeType: "ContractDefinition";
            readonly src: "511:471:132";
            readonly nodes: readonly [{
                readonly id: 23984;
                readonly nodeType: "VariableDeclaration";
                readonly src: "539:37:132";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "immutable";
                readonly name: "_baseToken";
                readonly nameLocation: "566:10:132";
                readonly scope: 24021;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 23983;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "539:7:132";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 23986;
                readonly nodeType: "VariableDeclaration";
                readonly src: "582:43:132";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "immutable";
                readonly name: "_vaultSharePrice";
                readonly nameLocation: "609:16:132";
                readonly scope: 24021;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 23985;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "582:7:132";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 24002;
                readonly nodeType: "FunctionDefinition";
                readonly src: "632:147:132";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24001;
                    readonly nodeType: "Block";
                    readonly src: "692:87:132";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 23995;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 23993;
                                readonly name: "_baseToken";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23984;
                                readonly src: "702:10:132";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 23994;
                                readonly name: "_baseToken_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23988;
                                readonly src: "715:11:132";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "702:24:132";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 23996;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "702:24:132";
                    }, {
                        readonly expression: {
                            readonly id: 23999;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 23997;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23986;
                                readonly src: "736:16:132";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 23998;
                                readonly name: "_vaultSharePrice_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 23990;
                                readonly src: "755:17:132";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "736:36:132";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 24000;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "736:36:132";
                    }];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 23991;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 23988;
                        readonly mutability: "mutable";
                        readonly name: "_baseToken_";
                        readonly nameLocation: "652:11:132";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24002;
                        readonly src: "644:19:132";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 23987;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "644:7:132";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 23990;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice_";
                        readonly nameLocation: "673:17:132";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24002;
                        readonly src: "665:25:132";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 23989;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "665:7:132";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "643:48:132";
                };
                readonly returnParameters: {
                    readonly id: 23992;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "692:0:132";
                };
                readonly scope: 24021;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 24010;
                readonly nodeType: "FunctionDefinition";
                readonly src: "785:83:132";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24009;
                    readonly nodeType: "Block";
                    readonly src: "834:34:132";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 24007;
                            readonly name: "_baseToken";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 23984;
                            readonly src: "851:10:132";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 24006;
                        readonly id: 24008;
                        readonly nodeType: "Return";
                        readonly src: "844:17:132";
                    }];
                };
                readonly functionSelector: "38d52e0f";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "asset";
                readonly nameLocation: "794:5:132";
                readonly parameters: {
                    readonly id: 24003;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "799:2:132";
                };
                readonly returnParameters: {
                    readonly id: 24006;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24005;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24010;
                        readonly src: "825:7:132";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 24004;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "825:7:132";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "824:9:132";
                };
                readonly scope: 24021;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24020;
                readonly nodeType: "FunctionDefinition";
                readonly src: "874:106:132";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24019;
                    readonly nodeType: "Block";
                    readonly src: "940:40:132";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 24017;
                            readonly name: "_vaultSharePrice";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 23986;
                            readonly src: "957:16:132";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24016;
                        readonly id: 24018;
                        readonly nodeType: "Return";
                        readonly src: "950:23:132";
                    }];
                };
                readonly functionSelector: "07a2d13a";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "convertToAssets";
                readonly nameLocation: "883:15:132";
                readonly parameters: {
                    readonly id: 24013;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24012;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24020;
                        readonly src: "899:7:132";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24011;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "899:7:132";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "898:9:132";
                };
                readonly returnParameters: {
                    readonly id: 24016;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24015;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24020;
                        readonly src: "931:7:132";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24014;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "931:7:132";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "930:9:132";
                };
                readonly scope: 24021;
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
                readonly id: 23982;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "64:447:132";
                readonly text: "@author DELV\n @title EtchingVault\n @dev This is a helper contract that is etched onto a `MockERC4626` vault\n      as one of the intermediate steps in the \"etching\" process in the Rust\n      debugging tools.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [24021];
            readonly name: "EtchingVault";
            readonly nameLocation: "520:12:132";
            readonly scope: 24022;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 132;
};
//# sourceMappingURL=EtchingVault.d.ts.map