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
        readonly id: 72346;
        readonly exportedSymbols: {
            readonly Auth: readonly [72332];
            readonly Authority: readonly [72345];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "42:2535:176";
        readonly nodes: readonly [{
            readonly id: 72175;
            readonly nodeType: "PragmaDirective";
            readonly src: "42:24:176";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.8", ".0"];
        }, {
            readonly id: 72332;
            readonly nodeType: "ContractDefinition";
            readonly src: "369:1760:176";
            readonly nodes: readonly [{
                readonly id: 72182;
                readonly nodeType: "EventDefinition";
                readonly src: "398:75:176";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0";
                readonly name: "OwnershipTransferred";
                readonly nameLocation: "404:20:176";
                readonly parameters: {
                    readonly id: 72181;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72178;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "user";
                        readonly nameLocation: "441:4:176";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72182;
                        readonly src: "425:20:176";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72177;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "425:7:176";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72180;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newOwner";
                        readonly nameLocation: "463:8:176";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72182;
                        readonly src: "447:24:176";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72179;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "447:7:176";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "424:48:176";
                };
            }, {
                readonly id: 72189;
                readonly nodeType: "EventDefinition";
                readonly src: "479:77:176";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "a3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198";
                readonly name: "AuthorityUpdated";
                readonly nameLocation: "485:16:176";
                readonly parameters: {
                    readonly id: 72188;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72184;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "user";
                        readonly nameLocation: "518:4:176";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72189;
                        readonly src: "502:20:176";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72183;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "502:7:176";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72187;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newAuthority";
                        readonly nameLocation: "542:12:176";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72189;
                        readonly src: "524:30:176";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_Authority_$72345";
                            readonly typeString: "contract Authority";
                        };
                        readonly typeName: {
                            readonly id: 72186;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 72185;
                                readonly name: "Authority";
                                readonly nameLocations: readonly ["524:9:176"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 72345;
                                readonly src: "524:9:176";
                            };
                            readonly referencedDeclaration: 72345;
                            readonly src: "524:9:176";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$72345";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "501:54:176";
                };
            }, {
                readonly id: 72191;
                readonly nodeType: "VariableDeclaration";
                readonly src: "562:20:176";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "8da5cb5b";
                readonly mutability: "mutable";
                readonly name: "owner";
                readonly nameLocation: "577:5:176";
                readonly scope: 72332;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 72190;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "562:7:176";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 72194;
                readonly nodeType: "VariableDeclaration";
                readonly src: "589:26:176";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "bf7e214f";
                readonly mutability: "mutable";
                readonly name: "authority";
                readonly nameLocation: "606:9:176";
                readonly scope: 72332;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_Authority_$72345";
                    readonly typeString: "contract Authority";
                };
                readonly typeName: {
                    readonly id: 72193;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 72192;
                        readonly name: "Authority";
                        readonly nameLocations: readonly ["589:9:176"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 72345;
                        readonly src: "589:9:176";
                    };
                    readonly referencedDeclaration: 72345;
                    readonly src: "589:9:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_Authority_$72345";
                        readonly typeString: "contract Authority";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 72223;
                readonly nodeType: "FunctionDefinition";
                readonly src: "622:224:176";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72222;
                    readonly nodeType: "Block";
                    readonly src: "672:174:176";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 72204;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 72202;
                                readonly name: "owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72191;
                                readonly src: "682:5:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 72203;
                                readonly name: "_owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72196;
                                readonly src: "690:6:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "682:14:176";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 72205;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "682:14:176";
                    }, {
                        readonly expression: {
                            readonly id: 72208;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 72206;
                                readonly name: "authority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72194;
                                readonly src: "706:9:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$72345";
                                    readonly typeString: "contract Authority";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 72207;
                                readonly name: "_authority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72199;
                                readonly src: "718:10:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$72345";
                                    readonly typeString: "contract Authority";
                                };
                            };
                            readonly src: "706:22:176";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$72345";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly id: 72209;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "706:22:176";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 72211;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "765:3:176";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 72212;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "769:6:176";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "765:10:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72213;
                                readonly name: "_owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72196;
                                readonly src: "777:6:176";
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
                                readonly id: 72210;
                                readonly name: "OwnershipTransferred";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72182;
                                readonly src: "744:20:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$";
                                    readonly typeString: "function (address,address)";
                                };
                            };
                            readonly id: 72214;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "744:40:176";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72215;
                        readonly nodeType: "EmitStatement";
                        readonly src: "739:45:176";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 72217;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "816:3:176";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 72218;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "820:6:176";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "816:10:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72219;
                                readonly name: "_authority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72199;
                                readonly src: "828:10:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$72345";
                                    readonly typeString: "contract Authority";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_contract$_Authority_$72345";
                                    readonly typeString: "contract Authority";
                                }];
                                readonly id: 72216;
                                readonly name: "AuthorityUpdated";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72189;
                                readonly src: "799:16:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$72345_$returns$__$";
                                    readonly typeString: "function (address,contract Authority)";
                                };
                            };
                            readonly id: 72220;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "799:40:176";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72221;
                        readonly nodeType: "EmitStatement";
                        readonly src: "794:45:176";
                    }];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 72200;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72196;
                        readonly mutability: "mutable";
                        readonly name: "_owner";
                        readonly nameLocation: "642:6:176";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72223;
                        readonly src: "634:14:176";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72195;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "634:7:176";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72199;
                        readonly mutability: "mutable";
                        readonly name: "_authority";
                        readonly nameLocation: "660:10:176";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72223;
                        readonly src: "650:20:176";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_Authority_$72345";
                            readonly typeString: "contract Authority";
                        };
                        readonly typeName: {
                            readonly id: 72198;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 72197;
                                readonly name: "Authority";
                                readonly nameLocations: readonly ["650:9:176"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 72345;
                                readonly src: "650:9:176";
                            };
                            readonly referencedDeclaration: 72345;
                            readonly src: "650:9:176";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$72345";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "633:38:176";
                };
                readonly returnParameters: {
                    readonly id: 72201;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "672:0:176";
                };
                readonly scope: 72332;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 72237;
                readonly nodeType: "ModifierDefinition";
                readonly src: "852:119:176";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72236;
                    readonly nodeType: "Block";
                    readonly src: "884:87:176";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 72227;
                                        readonly name: "msg";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -15;
                                        readonly src: "915:3:176";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_message";
                                            readonly typeString: "msg";
                                        };
                                    };
                                    readonly id: 72228;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "919:6:176";
                                    readonly memberName: "sender";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "915:10:176";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 72229;
                                        readonly name: "msg";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -15;
                                        readonly src: "927:3:176";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_message";
                                            readonly typeString: "msg";
                                        };
                                    };
                                    readonly id: 72230;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "931:3:176";
                                    readonly memberName: "sig";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "927:7:176";
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
                                    readonly id: 72226;
                                    readonly name: "isAuthorized";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72277;
                                    readonly src: "902:12:176";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$";
                                        readonly typeString: "function (address,bytes4) view returns (bool)";
                                    };
                                };
                                readonly id: 72231;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "902:33:176";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "554e415554484f52495a4544";
                                readonly id: 72232;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "937:14:176";
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
                                readonly id: 72225;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "894:7:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 72233;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "894:58:176";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72234;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "894:58:176";
                    }, {
                        readonly id: 72235;
                        readonly nodeType: "PlaceholderStatement";
                        readonly src: "963:1:176";
                    }];
                };
                readonly name: "requiresAuth";
                readonly nameLocation: "861:12:176";
                readonly parameters: {
                    readonly id: 72224;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "873:2:176";
                };
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 72277;
                readonly nodeType: "FunctionDefinition";
                readonly src: "977:540:176";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72276;
                    readonly nodeType: "Block";
                    readonly src: "1070:447:176";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [72248];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 72248;
                            readonly mutability: "mutable";
                            readonly name: "auth";
                            readonly nameLocation: "1090:4:176";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 72276;
                            readonly src: "1080:14:176";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$72345";
                                readonly typeString: "contract Authority";
                            };
                            readonly typeName: {
                                readonly id: 72247;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 72246;
                                    readonly name: "Authority";
                                    readonly nameLocations: readonly ["1080:9:176"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 72345;
                                    readonly src: "1080:9:176";
                                };
                                readonly referencedDeclaration: 72345;
                                readonly src: "1080:9:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$72345";
                                    readonly typeString: "contract Authority";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 72250;
                        readonly initialValue: {
                            readonly id: 72249;
                            readonly name: "authority";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 72194;
                            readonly src: "1097:9:176";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$72345";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1080:26:176";
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 72274;
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
                                    readonly id: 72269;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                        readonly id: 72259;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly arguments: readonly [{
                                                readonly id: 72253;
                                                readonly name: "auth";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 72248;
                                                readonly src: "1423:4:176";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_Authority_$72345";
                                                    readonly typeString: "contract Authority";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_Authority_$72345";
                                                    readonly typeString: "contract Authority";
                                                }];
                                                readonly id: 72252;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "1415:7:176";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 72251;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "1415:7:176";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 72254;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "1415:13:176";
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
                                                readonly id: 72257;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "1440:1:176";
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
                                                readonly id: 72256;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "1432:7:176";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 72255;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "1432:7:176";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 72258;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "1432:10:176";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "1415:27:176";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "&&";
                                    readonly rightExpression: {
                                        readonly arguments: readonly [{
                                            readonly id: 72262;
                                            readonly name: "user";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72239;
                                            readonly src: "1459:4:176";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 72265;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "1473:4:176";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_Auth_$72332";
                                                    readonly typeString: "contract Auth";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_Auth_$72332";
                                                    readonly typeString: "contract Auth";
                                                }];
                                                readonly id: 72264;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "1465:7:176";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 72263;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "1465:7:176";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 72266;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "1465:13:176";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 72267;
                                            readonly name: "functionSig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72241;
                                            readonly src: "1480:11:176";
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
                                                readonly id: 72260;
                                                readonly name: "auth";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 72248;
                                                readonly src: "1446:4:176";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_Authority_$72345";
                                                    readonly typeString: "contract Authority";
                                                };
                                            };
                                            readonly id: 72261;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "1451:7:176";
                                            readonly memberName: "canCall";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 72344;
                                            readonly src: "1446:12:176";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$";
                                                readonly typeString: "function (address,address,bytes4) view external returns (bool)";
                                            };
                                        };
                                        readonly id: 72268;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "1446:46:176";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "1415:77:176";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                }];
                                readonly id: 72270;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "1414:79:176";
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
                                readonly id: 72273;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 72271;
                                    readonly name: "user";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72239;
                                    readonly src: "1497:4:176";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "==";
                                readonly rightExpression: {
                                    readonly id: 72272;
                                    readonly name: "owner";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 72191;
                                    readonly src: "1505:5:176";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly src: "1497:13:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "1414:96:176";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 72245;
                        readonly id: 72275;
                        readonly nodeType: "Return";
                        readonly src: "1407:103:176";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "isAuthorized";
                readonly nameLocation: "986:12:176";
                readonly parameters: {
                    readonly id: 72242;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72239;
                        readonly mutability: "mutable";
                        readonly name: "user";
                        readonly nameLocation: "1007:4:176";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72277;
                        readonly src: "999:12:176";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72238;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "999:7:176";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72241;
                        readonly mutability: "mutable";
                        readonly name: "functionSig";
                        readonly nameLocation: "1020:11:176";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72277;
                        readonly src: "1013:18:176";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes4";
                            readonly typeString: "bytes4";
                        };
                        readonly typeName: {
                            readonly id: 72240;
                            readonly name: "bytes4";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1013:6:176";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes4";
                                readonly typeString: "bytes4";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "998:34:176";
                };
                readonly returnParameters: {
                    readonly id: 72245;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72244;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72277;
                        readonly src: "1064:4:176";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 72243;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1064:4:176";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1063:6:176";
                };
                readonly scope: 72332;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 72313;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1523:434:176";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72312;
                    readonly nodeType: "Block";
                    readonly src: "1584:373:176";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly id: 72299;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                    readonly id: 72287;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 72284;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "1780:3:176";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 72285;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1784:6:176";
                                        readonly memberName: "sender";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "1780:10:176";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "==";
                                    readonly rightExpression: {
                                        readonly id: 72286;
                                        readonly name: "owner";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72191;
                                        readonly src: "1794:5:176";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "1780:19:176";
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
                                            readonly id: 72290;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "1821:3:176";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 72291;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1825:6:176";
                                        readonly memberName: "sender";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "1821:10:176";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly id: 72294;
                                            readonly name: "this";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -28;
                                            readonly src: "1841:4:176";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_Auth_$72332";
                                                readonly typeString: "contract Auth";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_Auth_$72332";
                                                readonly typeString: "contract Auth";
                                            }];
                                            readonly id: 72293;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "1833:7:176";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 72292;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "1833:7:176";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 72295;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "1833:13:176";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly expression: {
                                            readonly id: 72296;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "1848:3:176";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 72297;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1852:3:176";
                                        readonly memberName: "sig";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "1848:7:176";
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
                                            readonly id: 72288;
                                            readonly name: "authority";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 72194;
                                            readonly src: "1803:9:176";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_Authority_$72345";
                                                readonly typeString: "contract Authority";
                                            };
                                        };
                                        readonly id: 72289;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1813:7:176";
                                        readonly memberName: "canCall";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 72344;
                                        readonly src: "1803:17:176";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$";
                                            readonly typeString: "function (address,address,bytes4) view external returns (bool)";
                                        };
                                    };
                                    readonly id: 72298;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1803:53:176";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly src: "1780:76:176";
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
                                readonly id: 72283;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "1772:7:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$returns$__$";
                                    readonly typeString: "function (bool) pure";
                                };
                            };
                            readonly id: 72300;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1772:85:176";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72301;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1772:85:176";
                    }, {
                        readonly expression: {
                            readonly id: 72304;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 72302;
                                readonly name: "authority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72194;
                                readonly src: "1868:9:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$72345";
                                    readonly typeString: "contract Authority";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 72303;
                                readonly name: "newAuthority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72280;
                                readonly src: "1880:12:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$72345";
                                    readonly typeString: "contract Authority";
                                };
                            };
                            readonly src: "1868:24:176";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$72345";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly id: 72305;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1868:24:176";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 72307;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "1925:3:176";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 72308;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1929:6:176";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1925:10:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72309;
                                readonly name: "newAuthority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72280;
                                readonly src: "1937:12:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$72345";
                                    readonly typeString: "contract Authority";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_contract$_Authority_$72345";
                                    readonly typeString: "contract Authority";
                                }];
                                readonly id: 72306;
                                readonly name: "AuthorityUpdated";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72189;
                                readonly src: "1908:16:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$72345_$returns$__$";
                                    readonly typeString: "function (address,contract Authority)";
                                };
                            };
                            readonly id: 72310;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1908:42:176";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72311;
                        readonly nodeType: "EmitStatement";
                        readonly src: "1903:47:176";
                    }];
                };
                readonly functionSelector: "7a9e5e4b";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setAuthority";
                readonly nameLocation: "1532:12:176";
                readonly parameters: {
                    readonly id: 72281;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72280;
                        readonly mutability: "mutable";
                        readonly name: "newAuthority";
                        readonly nameLocation: "1555:12:176";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72313;
                        readonly src: "1545:22:176";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_Authority_$72345";
                            readonly typeString: "contract Authority";
                        };
                        readonly typeName: {
                            readonly id: 72279;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 72278;
                                readonly name: "Authority";
                                readonly nameLocations: readonly ["1545:9:176"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 72345;
                                readonly src: "1545:9:176";
                            };
                            readonly referencedDeclaration: 72345;
                            readonly src: "1545:9:176";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$72345";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1544:24:176";
                };
                readonly returnParameters: {
                    readonly id: 72282;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1584:0:176";
                };
                readonly scope: 72332;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 72331;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1963:164:176";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72330;
                    readonly nodeType: "Block";
                    readonly src: "2036:91:176";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 72322;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 72320;
                                readonly name: "owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72191;
                                readonly src: "2046:5:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 72321;
                                readonly name: "newOwner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72315;
                                readonly src: "2054:8:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "2046:16:176";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 72323;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2046:16:176";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 72325;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "2099:3:176";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 72326;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2103:6:176";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "2099:10:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 72327;
                                readonly name: "newOwner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72315;
                                readonly src: "2111:8:176";
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
                                readonly id: 72324;
                                readonly name: "OwnershipTransferred";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72182;
                                readonly src: "2078:20:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$";
                                    readonly typeString: "function (address,address)";
                                };
                            };
                            readonly id: 72328;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2078:42:176";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72329;
                        readonly nodeType: "EmitStatement";
                        readonly src: "2073:47:176";
                    }];
                };
                readonly functionSelector: "f2fde38b";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 72318;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 72317;
                        readonly name: "requiresAuth";
                        readonly nameLocations: readonly ["2023:12:176"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 72237;
                        readonly src: "2023:12:176";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "2023:12:176";
                }];
                readonly name: "transferOwnership";
                readonly nameLocation: "1972:17:176";
                readonly parameters: {
                    readonly id: 72316;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72315;
                        readonly mutability: "mutable";
                        readonly name: "newOwner";
                        readonly nameLocation: "1998:8:176";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72331;
                        readonly src: "1990:16:176";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72314;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1990:7:176";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1989:18:176";
                };
                readonly returnParameters: {
                    readonly id: 72319;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2036:0:176";
                };
                readonly scope: 72332;
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
                readonly id: 72176;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "68:301:176";
                readonly text: "@notice Provides a flexible and updatable auth pattern which is completely separate from application logic.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [72332];
            readonly name: "Auth";
            readonly nameLocation: "387:4:176";
            readonly scope: 72346;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [72182, 72189];
        }, {
            readonly id: 72345;
            readonly nodeType: "ContractDefinition";
            readonly src: "2422:154:176";
            readonly nodes: readonly [{
                readonly id: 72344;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2448:126:176";
                readonly nodes: readonly [];
                readonly functionSelector: "b7009613";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "canCall";
                readonly nameLocation: "2457:7:176";
                readonly parameters: {
                    readonly id: 72340;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72335;
                        readonly mutability: "mutable";
                        readonly name: "user";
                        readonly nameLocation: "2482:4:176";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72344;
                        readonly src: "2474:12:176";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72334;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2474:7:176";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72337;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "2504:6:176";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72344;
                        readonly src: "2496:14:176";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 72336;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2496:7:176";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 72339;
                        readonly mutability: "mutable";
                        readonly name: "functionSig";
                        readonly nameLocation: "2527:11:176";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72344;
                        readonly src: "2520:18:176";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes4";
                            readonly typeString: "bytes4";
                        };
                        readonly typeName: {
                            readonly id: 72338;
                            readonly name: "bytes4";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2520:6:176";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes4";
                                readonly typeString: "bytes4";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2464:80:176";
                };
                readonly returnParameters: {
                    readonly id: 72343;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72342;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72344;
                        readonly src: "2568:4:176";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 72341;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2568:4:176";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2567:6:176";
                };
                readonly scope: 72345;
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
                readonly id: 72333;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "2131:291:176";
                readonly text: "@notice A generic interface for a contract which provides authorization data to an Auth instance.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)";
            };
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [72345];
            readonly name: "Authority";
            readonly nameLocation: "2432:9:176";
            readonly scope: 72346;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "AGPL-3.0-only";
    };
    readonly id: 176;
};
//# sourceMappingURL=Auth.d.ts.map