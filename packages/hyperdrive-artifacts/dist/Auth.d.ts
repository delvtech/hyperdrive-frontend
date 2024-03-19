export declare const Auth: {
    readonly abi: readonly [{
        readonly type: "function";
        readonly name: "authority";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract Authority";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setAuthority";
        readonly inputs: readonly [{
            readonly name: "newAuthority";
            readonly type: "address";
            readonly internalType: "contract Authority";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "AuthorityUpdated";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newAuthority";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "contract Authority";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "user";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
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
        readonly "authority()": "bf7e214f";
        readonly "owner()": "8da5cb5b";
        readonly "setAuthority(address)": "7a9e5e4b";
        readonly "transferOwnership(address)": "f2fde38b";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"AuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"authority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"setAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Provides a flexible and updatable auth pattern which is completely separate from application logic.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/auth/Auth.sol\":\"Auth\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "contract Authority";
                    readonly name: "newAuthority";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "AuthorityUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "newOwner";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "OwnershipTransferred";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "authority";
                readonly outputs: readonly [{
                    readonly internalType: "contract Authority";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "owner";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract Authority";
                    readonly name: "newAuthority";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "setAuthority";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newOwner";
                    readonly type: "address";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "transferOwnership";
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
                readonly "lib/solmate/src/auth/Auth.sol": "Auth";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/solmate/src/auth/Auth.sol": {
                readonly keccak256: "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c";
                readonly urls: readonly ["bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac", "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"];
                readonly license: "AGPL-3.0-only";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/solmate/src/auth/Auth.sol";
        readonly id: 72216;
        readonly exportedSymbols: {
            readonly Auth: readonly [72202];
            readonly Authority: readonly [72215];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "42:2535:172";
        readonly nodes: readonly [{
            readonly id: 72045;
            readonly nodeType: "PragmaDirective";
            readonly src: "42:24:172";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.8", ".0"];
        }, {
            readonly id: 72202;
            readonly nodeType: "ContractDefinition";
            readonly src: "369:1760:172";
            readonly nodes: readonly [{
                readonly id: 72052;
                readonly nodeType: "EventDefinition";
                readonly src: "398:75:172";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0";
                readonly name: "OwnershipTransferred";
                readonly nameLocation: "404:20:172";
                readonly parameters: {
                    readonly id: 72051;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72048;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "user";
                        readonly nameLocation: "441:4:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72052;
                        readonly src: "425:20:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72047;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "425:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72050;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newOwner";
                        readonly nameLocation: "463:8:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72052;
                        readonly src: "447:24:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72049;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "447:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "424:48:172";
                };
            }, {
                readonly id: 72059;
                readonly nodeType: "EventDefinition";
                readonly src: "479:77:172";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "a3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198";
                readonly name: "AuthorityUpdated";
                readonly nameLocation: "485:16:172";
                readonly parameters: {
                    readonly id: 72058;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72054;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "user";
                        readonly nameLocation: "518:4:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72059;
                        readonly src: "502:20:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72053;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "502:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72057;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newAuthority";
                        readonly nameLocation: "542:12:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72059;
                        readonly src: "524:30:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_Authority_$72215";
                            readonly typeString: "contract Authority";
                        };
                        readonly typeName: {
                            readonly id: 72056;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 72055;
                                readonly name: "Authority";
                                readonly nameLocations: readonly ["524:9:172"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 72215;
                                readonly src: "524:9:172";
                            };
                            readonly referencedDeclaration: 72215;
                            readonly src: "524:9:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$72215";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "501:54:172";
                };
            }, {
                readonly id: 72061;
                readonly nodeType: "VariableDeclaration";
                readonly src: "562:20:172";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "8da5cb5b";
                readonly mutability: "mutable";
                readonly name: "owner";
                readonly nameLocation: "577:5:172";
                readonly scope: 72202;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 72060;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "562:7:172";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 72064;
                readonly nodeType: "VariableDeclaration";
                readonly src: "589:26:172";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "bf7e214f";
                readonly mutability: "mutable";
                readonly name: "authority";
                readonly nameLocation: "606:9:172";
                readonly scope: 72202;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_Authority_$72215";
                    readonly typeString: "contract Authority";
                };
                readonly typeName: {
                    readonly id: 72063;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 72062;
                        readonly name: "Authority";
                        readonly nameLocations: readonly ["589:9:172"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 72215;
                        readonly src: "589:9:172";
                    };
                    readonly referencedDeclaration: 72215;
                    readonly src: "589:9:172";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_Authority_$72215";
                        readonly typeString: "contract Authority";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 72093;
                readonly nodeType: "FunctionDefinition";
                readonly src: "622:224:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72092;
                    readonly nodeType: "Block";
                    readonly src: "672:174:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 72074;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 72072;
                                readonly name: "owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72061;
                                readonly src: "682:5:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 72073;
                                readonly name: "_owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72066;
                                readonly src: "690:6:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "682:14:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 72075;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "682:14:172";
                    }, {
                        readonly expression: {
                            readonly id: 72078;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 72076;
                                readonly name: "authority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72064;
                                readonly src: "706:9:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$72215";
                                    readonly typeString: "contract Authority";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 72077;
                                readonly name: "_authority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72069;
                                readonly src: "718:10:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$72215";
                                    readonly typeString: "contract Authority";
                                };
                            };
                            readonly src: "706:22:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$72215";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly id: 72079;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "706:22:172";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 72081;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "765:3:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 72082;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "769:6:172";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "765:10:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72083;
                                readonly name: "_owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72066;
                                readonly src: "777:6:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly id: 72080;
                                readonly name: "OwnershipTransferred";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72052;
                                readonly src: "744:20:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$";
                                    readonly typeString: "function (address,address)";
                                };
                            };
                            readonly id: 72084;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "744:40:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72085;
                        readonly nodeType: "EmitStatement";
                        readonly src: "739:45:172";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 72087;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "816:3:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 72088;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "820:6:172";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "816:10:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72089;
                                readonly name: "_authority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72069;
                                readonly src: "828:10:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$72215";
                                    readonly typeString: "contract Authority";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_contract$_Authority_$72215";
                                    readonly typeString: "contract Authority";
                                }];
                                readonly id: 72086;
                                readonly name: "AuthorityUpdated";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72059;
                                readonly src: "799:16:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$72215_$returns$__$";
                                    readonly typeString: "function (address,contract Authority)";
                                };
                            };
                            readonly id: 72090;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "799:40:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72091;
                        readonly nodeType: "EmitStatement";
                        readonly src: "794:45:172";
                    }];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 72070;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72066;
                        readonly mutability: "mutable";
                        readonly name: "_owner";
                        readonly nameLocation: "642:6:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72093;
                        readonly src: "634:14:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72065;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "634:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72069;
                        readonly mutability: "mutable";
                        readonly name: "_authority";
                        readonly nameLocation: "660:10:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72093;
                        readonly src: "650:20:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_Authority_$72215";
                            readonly typeString: "contract Authority";
                        };
                        readonly typeName: {
                            readonly id: 72068;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 72067;
                                readonly name: "Authority";
                                readonly nameLocations: readonly ["650:9:172"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 72215;
                                readonly src: "650:9:172";
                            };
                            readonly referencedDeclaration: 72215;
                            readonly src: "650:9:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$72215";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "633:38:172";
                };
                readonly returnParameters: {
                    readonly id: 72071;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "672:0:172";
                };
                readonly scope: 72202;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 72107;
                readonly nodeType: "ModifierDefinition";
                readonly src: "852:119:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72106;
                    readonly nodeType: "Block";
                    readonly src: "884:87:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 72097;
                                        readonly name: "msg";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -15;
                                        readonly src: "915:3:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_message";
                                            readonly typeString: "msg";
                                        };
                                    };
                                    readonly id: 72098;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "919:6:172";
                                    readonly memberName: "sender";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "915:10:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 72099;
                                        readonly name: "msg";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -15;
                                        readonly src: "927:3:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_message";
                                            readonly typeString: "msg";
                                        };
                                    };
                                    readonly id: 72100;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "931:3:172";
                                    readonly memberName: "sig";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "927:7:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes4";
                                        readonly typeString: "bytes4";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    }, {
                                        readonly typeIdentifier: "t_bytes4";
                                        readonly typeString: "bytes4";
                                    }];
                                    readonly id: 72096;
                                    readonly name: "isAuthorized";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72147;
                                    readonly src: "902:12:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$";
                                        readonly typeString: "function (address,bytes4) view returns (bool)";
                                    };
                                };
                                readonly id: 72101;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "902:33:172";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "554e415554484f52495a4544";
                                readonly id: 72102;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "937:14:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_269df367cd41cace5897a935d0e0858fe4543b5619d45e09af6b124c1bb3d528";
                                    readonly typeString: "literal_string \"UNAUTHORIZED\"";
                                };
                                readonly value: "UNAUTHORIZED";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_269df367cd41cace5897a935d0e0858fe4543b5619d45e09af6b124c1bb3d528";
                                    readonly typeString: "literal_string \"UNAUTHORIZED\"";
                                }];
                                readonly id: 72095;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "894:7:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 72103;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "894:58:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72104;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "894:58:172";
                    }, {
                        readonly id: 72105;
                        readonly nodeType: "PlaceholderStatement";
                        readonly src: "963:1:172";
                    }];
                };
                readonly name: "requiresAuth";
                readonly nameLocation: "861:12:172";
                readonly parameters: {
                    readonly id: 72094;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "873:2:172";
                };
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 72147;
                readonly nodeType: "FunctionDefinition";
                readonly src: "977:540:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72146;
                    readonly nodeType: "Block";
                    readonly src: "1070:447:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [72118];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 72118;
                            readonly mutability: "mutable";
                            readonly name: "auth";
                            readonly nameLocation: "1090:4:172";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 72146;
                            readonly src: "1080:14:172";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$72215";
                                readonly typeString: "contract Authority";
                            };
                            readonly typeName: {
                                readonly id: 72117;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 72116;
                                    readonly name: "Authority";
                                    readonly nameLocations: readonly ["1080:9:172"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 72215;
                                    readonly src: "1080:9:172";
                                };
                                readonly referencedDeclaration: 72215;
                                readonly src: "1080:9:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$72215";
                                    readonly typeString: "contract Authority";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 72120;
                        readonly initialValue: {
                            readonly id: 72119;
                            readonly name: "authority";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 72064;
                            readonly src: "1097:9:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$72215";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1080:26:172";
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 72144;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly components: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly id: 72139;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                        readonly id: 72129;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly arguments: readonly [{
                                                readonly id: 72123;
                                                readonly name: "auth";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 72118;
                                                readonly src: "1423:4:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_Authority_$72215";
                                                    readonly typeString: "contract Authority";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_Authority_$72215";
                                                    readonly typeString: "contract Authority";
                                                }];
                                                readonly id: 72122;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "1415:7:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 72121;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "1415:7:172";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 72124;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "1415:13:172";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "!=";
                                        readonly rightExpression: {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30";
                                                readonly id: 72127;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "1440:1:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                }];
                                                readonly id: 72126;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "1432:7:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 72125;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "1432:7:172";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 72128;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "1432:10:172";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "1415:27:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "&&";
                                    readonly rightExpression: {
                                        readonly arguments: readonly [{
                                            readonly id: 72132;
                                            readonly name: "user";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72109;
                                            readonly src: "1459:4:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 72135;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "1473:4:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_Auth_$72202";
                                                    readonly typeString: "contract Auth";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_Auth_$72202";
                                                    readonly typeString: "contract Auth";
                                                }];
                                                readonly id: 72134;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "1465:7:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 72133;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "1465:7:172";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 72136;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "1465:13:172";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 72137;
                                            readonly name: "functionSig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72111;
                                            readonly src: "1480:11:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes4";
                                                readonly typeString: "bytes4";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_bytes4";
                                                readonly typeString: "bytes4";
                                            }];
                                            readonly expression: {
                                                readonly id: 72130;
                                                readonly name: "auth";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 72118;
                                                readonly src: "1446:4:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_Authority_$72215";
                                                    readonly typeString: "contract Authority";
                                                };
                                            };
                                            readonly id: 72131;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "1451:7:172";
                                            readonly memberName: "canCall";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 72214;
                                            readonly src: "1446:12:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$";
                                                readonly typeString: "function (address,address,bytes4) view external returns (bool)";
                                            };
                                        };
                                        readonly id: 72138;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "1446:46:172";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "1415:77:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                }];
                                readonly id: 72140;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "1414:79:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "||";
                            readonly rightExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                                readonly id: 72143;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 72141;
                                    readonly name: "user";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72109;
                                    readonly src: "1497:4:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "==";
                                readonly rightExpression: {
                                    readonly id: 72142;
                                    readonly name: "owner";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72061;
                                    readonly src: "1505:5:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly src: "1497:13:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "1414:96:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 72115;
                        readonly id: 72145;
                        readonly nodeType: "Return";
                        readonly src: "1407:103:172";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "isAuthorized";
                readonly nameLocation: "986:12:172";
                readonly parameters: {
                    readonly id: 72112;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72109;
                        readonly mutability: "mutable";
                        readonly name: "user";
                        readonly nameLocation: "1007:4:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72147;
                        readonly src: "999:12:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72108;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "999:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72111;
                        readonly mutability: "mutable";
                        readonly name: "functionSig";
                        readonly nameLocation: "1020:11:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72147;
                        readonly src: "1013:18:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes4";
                            readonly typeString: "bytes4";
                        };
                        readonly typeName: {
                            readonly id: 72110;
                            readonly name: "bytes4";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1013:6:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes4";
                                readonly typeString: "bytes4";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "998:34:172";
                };
                readonly returnParameters: {
                    readonly id: 72115;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72114;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72147;
                        readonly src: "1064:4:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 72113;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1064:4:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1063:6:172";
                };
                readonly scope: 72202;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 72183;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1523:434:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72182;
                    readonly nodeType: "Block";
                    readonly src: "1584:373:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly id: 72169;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                    readonly id: 72157;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 72154;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "1780:3:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 72155;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1784:6:172";
                                        readonly memberName: "sender";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "1780:10:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "==";
                                    readonly rightExpression: {
                                        readonly id: 72156;
                                        readonly name: "owner";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72061;
                                        readonly src: "1794:5:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "1780:19:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "||";
                                readonly rightExpression: {
                                    readonly arguments: readonly [{
                                        readonly expression: {
                                            readonly id: 72160;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "1821:3:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 72161;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1825:6:172";
                                        readonly memberName: "sender";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "1821:10:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly id: 72164;
                                            readonly name: "this";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -28;
                                            readonly src: "1841:4:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_Auth_$72202";
                                                readonly typeString: "contract Auth";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_Auth_$72202";
                                                readonly typeString: "contract Auth";
                                            }];
                                            readonly id: 72163;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "1833:7:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 72162;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "1833:7:172";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 72165;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "1833:13:172";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly expression: {
                                            readonly id: 72166;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "1848:3:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 72167;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1852:3:172";
                                        readonly memberName: "sig";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "1848:7:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes4";
                                            readonly typeString: "bytes4";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        }, {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        }, {
                                            readonly typeIdentifier: "t_bytes4";
                                            readonly typeString: "bytes4";
                                        }];
                                        readonly expression: {
                                            readonly id: 72158;
                                            readonly name: "authority";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72064;
                                            readonly src: "1803:9:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_Authority_$72215";
                                                readonly typeString: "contract Authority";
                                            };
                                        };
                                        readonly id: 72159;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1813:7:172";
                                        readonly memberName: "canCall";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 72214;
                                        readonly src: "1803:17:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$";
                                            readonly typeString: "function (address,address,bytes4) view external returns (bool)";
                                        };
                                    };
                                    readonly id: 72168;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1803:53:172";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly src: "1780:76:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }];
                                readonly id: 72153;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "1772:7:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$returns$__$";
                                    readonly typeString: "function (bool) pure";
                                };
                            };
                            readonly id: 72170;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1772:85:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72171;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1772:85:172";
                    }, {
                        readonly expression: {
                            readonly id: 72174;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 72172;
                                readonly name: "authority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72064;
                                readonly src: "1868:9:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$72215";
                                    readonly typeString: "contract Authority";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 72173;
                                readonly name: "newAuthority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72150;
                                readonly src: "1880:12:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$72215";
                                    readonly typeString: "contract Authority";
                                };
                            };
                            readonly src: "1868:24:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$72215";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly id: 72175;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1868:24:172";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 72177;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "1925:3:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 72178;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1929:6:172";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1925:10:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72179;
                                readonly name: "newAuthority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72150;
                                readonly src: "1937:12:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$72215";
                                    readonly typeString: "contract Authority";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_contract$_Authority_$72215";
                                    readonly typeString: "contract Authority";
                                }];
                                readonly id: 72176;
                                readonly name: "AuthorityUpdated";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72059;
                                readonly src: "1908:16:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$72215_$returns$__$";
                                    readonly typeString: "function (address,contract Authority)";
                                };
                            };
                            readonly id: 72180;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1908:42:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72181;
                        readonly nodeType: "EmitStatement";
                        readonly src: "1903:47:172";
                    }];
                };
                readonly functionSelector: "7a9e5e4b";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setAuthority";
                readonly nameLocation: "1532:12:172";
                readonly parameters: {
                    readonly id: 72151;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72150;
                        readonly mutability: "mutable";
                        readonly name: "newAuthority";
                        readonly nameLocation: "1555:12:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72183;
                        readonly src: "1545:22:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_Authority_$72215";
                            readonly typeString: "contract Authority";
                        };
                        readonly typeName: {
                            readonly id: 72149;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 72148;
                                readonly name: "Authority";
                                readonly nameLocations: readonly ["1545:9:172"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 72215;
                                readonly src: "1545:9:172";
                            };
                            readonly referencedDeclaration: 72215;
                            readonly src: "1545:9:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$72215";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1544:24:172";
                };
                readonly returnParameters: {
                    readonly id: 72152;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1584:0:172";
                };
                readonly scope: 72202;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72201;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1963:164:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72200;
                    readonly nodeType: "Block";
                    readonly src: "2036:91:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 72192;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 72190;
                                readonly name: "owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72061;
                                readonly src: "2046:5:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 72191;
                                readonly name: "newOwner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72185;
                                readonly src: "2054:8:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "2046:16:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 72193;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2046:16:172";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 72195;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "2099:3:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 72196;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2103:6:172";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "2099:10:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72197;
                                readonly name: "newOwner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72185;
                                readonly src: "2111:8:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly id: 72194;
                                readonly name: "OwnershipTransferred";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72052;
                                readonly src: "2078:20:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$";
                                    readonly typeString: "function (address,address)";
                                };
                            };
                            readonly id: 72198;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2078:42:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72199;
                        readonly nodeType: "EmitStatement";
                        readonly src: "2073:47:172";
                    }];
                };
                readonly functionSelector: "f2fde38b";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 72188;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 72187;
                        readonly name: "requiresAuth";
                        readonly nameLocations: readonly ["2023:12:172"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 72107;
                        readonly src: "2023:12:172";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "2023:12:172";
                }];
                readonly name: "transferOwnership";
                readonly nameLocation: "1972:17:172";
                readonly parameters: {
                    readonly id: 72186;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72185;
                        readonly mutability: "mutable";
                        readonly name: "newOwner";
                        readonly nameLocation: "1998:8:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72201;
                        readonly src: "1990:16:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72184;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1990:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1989:18:172";
                };
                readonly returnParameters: {
                    readonly id: 72189;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2036:0:172";
                };
                readonly scope: 72202;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "public";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [];
            readonly canonicalName: "Auth";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 72046;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "68:301:172";
                readonly text: "@notice Provides a flexible and updatable auth pattern which is completely separate from application logic.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [72202];
            readonly name: "Auth";
            readonly nameLocation: "387:4:172";
            readonly scope: 72216;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [72052, 72059];
        }, {
            readonly id: 72215;
            readonly nodeType: "ContractDefinition";
            readonly src: "2422:154:172";
            readonly nodes: readonly [{
                readonly id: 72214;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2448:126:172";
                readonly nodes: readonly [];
                readonly functionSelector: "b7009613";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "canCall";
                readonly nameLocation: "2457:7:172";
                readonly parameters: {
                    readonly id: 72210;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72205;
                        readonly mutability: "mutable";
                        readonly name: "user";
                        readonly nameLocation: "2482:4:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72214;
                        readonly src: "2474:12:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72204;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2474:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72207;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "2504:6:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72214;
                        readonly src: "2496:14:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72206;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2496:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72209;
                        readonly mutability: "mutable";
                        readonly name: "functionSig";
                        readonly nameLocation: "2527:11:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72214;
                        readonly src: "2520:18:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes4";
                            readonly typeString: "bytes4";
                        };
                        readonly typeName: {
                            readonly id: 72208;
                            readonly name: "bytes4";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2520:6:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes4";
                                readonly typeString: "bytes4";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2464:80:172";
                };
                readonly returnParameters: {
                    readonly id: 72213;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72212;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72214;
                        readonly src: "2568:4:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 72211;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2568:4:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2567:6:172";
                };
                readonly scope: 72215;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "Authority";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly documentation: {
                readonly id: 72203;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "2131:291:172";
                readonly text: "@notice A generic interface for a contract which provides authorization data to an Auth instance.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)";
            };
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [72215];
            readonly name: "Authority";
            readonly nameLocation: "2432:9:172";
            readonly scope: 72216;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "AGPL-3.0-only";
    };
    readonly id: 172;
};
//# sourceMappingURL=Auth.d.ts.map