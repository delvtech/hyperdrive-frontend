export declare const StdStyle: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207710f8a45d9c2a9e5ff3edaf9626a48fe71d3cbb719ab8dfdf98a0731862011264736f6c63430008140033";
        readonly sourceMap: "100:10361:155:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;100:10361:155;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207710f8a45d9c2a9e5ff3edaf9626a48fe71d3cbb719ab8dfdf98a0731862011264736f6c63430008140033";
        readonly sourceMap: "100:10361:155:-:0;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdStyle.sol\":\"StdStyle\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdStyle.sol\":{\"keccak256\":\"0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8\",\"dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}";
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
                readonly "lib/forge-std/src/StdStyle.sol": "StdStyle";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/forge-std/src/StdStyle.sol": {
                readonly keccak256: "0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d";
                readonly urls: readonly ["bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8", "dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK"];
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
        readonly absolutePath: "lib/forge-std/src/StdStyle.sol";
        readonly id: 38747;
        readonly exportedSymbols: {
            readonly StdStyle: readonly [38746];
            readonly VmSafe: readonly [40710];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:10430:155";
        readonly nodes: readonly [{
            readonly id: 37537;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:32:155";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.4", ".22", "<", "0.9", ".0"];
        }, {
            readonly id: 37539;
            readonly nodeType: "ImportDirective";
            readonly src: "66:32:155";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/Vm.sol";
            readonly file: "./Vm.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 38747;
            readonly sourceUnit: 41183;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 37538;
                    readonly name: "VmSafe";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 40710;
                    readonly src: "74:6:155";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 38746;
            readonly nodeType: "ContractDefinition";
            readonly src: "100:10361:155";
            readonly nodes: readonly [{
                readonly id: 37556;
                readonly nodeType: "VariableDeclaration";
                readonly src: "123:92:155";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "vm";
                readonly nameLocation: "147:2:155";
                readonly scope: 38746;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                    readonly typeString: "contract VmSafe";
                };
                readonly typeName: {
                    readonly id: 37541;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 37540;
                        readonly name: "VmSafe";
                        readonly nameLocations: readonly ["123:6:155"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 40710;
                        readonly src: "123:6:155";
                    };
                    readonly referencedDeclaration: 40710;
                    readonly src: "123:6:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$40710";
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
                                        readonly id: 37550;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "193:17:155";
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
                                        readonly id: 37549;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "183:9:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 37551;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "183:28:155";
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
                                    readonly id: 37548;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "175:7:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                        readonly typeString: "type(uint256)";
                                    };
                                    readonly typeName: {
                                        readonly id: 37547;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "175:7:155";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 37552;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "175:37:155";
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
                                readonly id: 37546;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "167:7:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_uint160_$";
                                    readonly typeString: "type(uint160)";
                                };
                                readonly typeName: {
                                    readonly id: 37545;
                                    readonly name: "uint160";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "167:7:155";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 37553;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "167:46:155";
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
                            readonly id: 37544;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "159:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 37543;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "159:7:155";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 37554;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "159:55:155";
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
                        readonly id: 37542;
                        readonly name: "VmSafe";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 40710;
                        readonly src: "152:6:155";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_type$_t_contract$_VmSafe_$40710_$";
                            readonly typeString: "type(contract VmSafe)";
                        };
                    };
                    readonly id: 37555;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "typeConversion";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "152:63:155";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                        readonly typeString: "contract VmSafe";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 37559;
                readonly nodeType: "VariableDeclaration";
                readonly src: "222:34:155";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "RED";
                readonly nameLocation: "238:3:155";
                readonly scope: 38746;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_string_memory_ptr";
                    readonly typeString: "string";
                };
                readonly typeName: {
                    readonly id: 37557;
                    readonly name: "string";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "222:6:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                };
                readonly value: {
                    readonly hexValue: "1b5b39316d";
                    readonly id: 37558;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "string";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "244:12:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_stringliteral_e865f62b1188865fdbe08fdbe8546369f5c78a8f677a27514aadc154b4263c18";
                        readonly typeString: "literal_string hex\"1b5b39316d\"";
                    };
                    readonly value: "\u001B[91m";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 37562;
                readonly nodeType: "VariableDeclaration";
                readonly src: "262:36:155";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "GREEN";
                readonly nameLocation: "278:5:155";
                readonly scope: 38746;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_string_memory_ptr";
                    readonly typeString: "string";
                };
                readonly typeName: {
                    readonly id: 37560;
                    readonly name: "string";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "262:6:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                };
                readonly value: {
                    readonly hexValue: "1b5b39326d";
                    readonly id: 37561;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "string";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "286:12:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_stringliteral_250c6c79af2fd59b948ba31b977e669524bbf27faba009961b135f1635e1e32b";
                        readonly typeString: "literal_string hex\"1b5b39326d\"";
                    };
                    readonly value: "\u001B[92m";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 37565;
                readonly nodeType: "VariableDeclaration";
                readonly src: "304:37:155";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "YELLOW";
                readonly nameLocation: "320:6:155";
                readonly scope: 38746;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_string_memory_ptr";
                    readonly typeString: "string";
                };
                readonly typeName: {
                    readonly id: 37563;
                    readonly name: "string";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "304:6:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                };
                readonly value: {
                    readonly hexValue: "1b5b39336d";
                    readonly id: 37564;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "string";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "329:12:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_stringliteral_801b445b8c4f71d86cf740b8fd9f85e172d35421144725dd58fed362de2e6cf5";
                        readonly typeString: "literal_string hex\"1b5b39336d\"";
                    };
                    readonly value: "\u001B[93m";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 37568;
                readonly nodeType: "VariableDeclaration";
                readonly src: "347:35:155";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "BLUE";
                readonly nameLocation: "363:4:155";
                readonly scope: 38746;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_string_memory_ptr";
                    readonly typeString: "string";
                };
                readonly typeName: {
                    readonly id: 37566;
                    readonly name: "string";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "347:6:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                };
                readonly value: {
                    readonly hexValue: "1b5b39346d";
                    readonly id: 37567;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "string";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "370:12:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_stringliteral_66ecf2e89553c52e360a74737e5e4e3d15e4d08217c17497ca50efb90c95d593";
                        readonly typeString: "literal_string hex\"1b5b39346d\"";
                    };
                    readonly value: "\u001B[94m";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 37571;
                readonly nodeType: "VariableDeclaration";
                readonly src: "388:38:155";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAGENTA";
                readonly nameLocation: "404:7:155";
                readonly scope: 38746;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_string_memory_ptr";
                    readonly typeString: "string";
                };
                readonly typeName: {
                    readonly id: 37569;
                    readonly name: "string";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "388:6:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                };
                readonly value: {
                    readonly hexValue: "1b5b39356d";
                    readonly id: 37570;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "string";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "414:12:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_stringliteral_b81cf1fd9bcd2b49f14457c6168490b5ff507c85cc3778934da8235d270d6b5b";
                        readonly typeString: "literal_string hex\"1b5b39356d\"";
                    };
                    readonly value: "\u001B[95m";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 37574;
                readonly nodeType: "VariableDeclaration";
                readonly src: "432:35:155";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CYAN";
                readonly nameLocation: "448:4:155";
                readonly scope: 38746;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_string_memory_ptr";
                    readonly typeString: "string";
                };
                readonly typeName: {
                    readonly id: 37572;
                    readonly name: "string";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "432:6:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                };
                readonly value: {
                    readonly hexValue: "1b5b39366d";
                    readonly id: 37573;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "string";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "455:12:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_stringliteral_f73c74e3aa04446480bd18c1b857a46321f6d66d2bfb703d52333566c779447b";
                        readonly typeString: "literal_string hex\"1b5b39366d\"";
                    };
                    readonly value: "\u001B[96m";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 37577;
                readonly nodeType: "VariableDeclaration";
                readonly src: "473:34:155";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "BOLD";
                readonly nameLocation: "489:4:155";
                readonly scope: 38746;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_string_memory_ptr";
                    readonly typeString: "string";
                };
                readonly typeName: {
                    readonly id: 37575;
                    readonly name: "string";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "473:6:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                };
                readonly value: {
                    readonly hexValue: "1b5b316d";
                    readonly id: 37576;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "string";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "496:11:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_stringliteral_b25b1471c5d449346ad6b37b501b2d5911d6e2bad13ad71d09cdfa3d3b140a17";
                        readonly typeString: "literal_string hex\"1b5b316d\"";
                    };
                    readonly value: "\u001B[1m";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 37580;
                readonly nodeType: "VariableDeclaration";
                readonly src: "513:33:155";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "DIM";
                readonly nameLocation: "529:3:155";
                readonly scope: 38746;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_string_memory_ptr";
                    readonly typeString: "string";
                };
                readonly typeName: {
                    readonly id: 37578;
                    readonly name: "string";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "513:6:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                };
                readonly value: {
                    readonly hexValue: "1b5b326d";
                    readonly id: 37579;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "string";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "535:11:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_stringliteral_2f556fa434add49eadfa043e74ff00496b89a16068544c1118ec19f5d8603d51";
                        readonly typeString: "literal_string hex\"1b5b326d\"";
                    };
                    readonly value: "\u001B[2m";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 37583;
                readonly nodeType: "VariableDeclaration";
                readonly src: "552:36:155";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ITALIC";
                readonly nameLocation: "568:6:155";
                readonly scope: 38746;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_string_memory_ptr";
                    readonly typeString: "string";
                };
                readonly typeName: {
                    readonly id: 37581;
                    readonly name: "string";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "552:6:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                };
                readonly value: {
                    readonly hexValue: "1b5b336d";
                    readonly id: 37582;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "string";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "577:11:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_stringliteral_3889f2814cfbcc60c7a881028023c05aed4a6dae60be0df554f690b1f4e7411f";
                        readonly typeString: "literal_string hex\"1b5b336d\"";
                    };
                    readonly value: "\u001B[3m";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 37586;
                readonly nodeType: "VariableDeclaration";
                readonly src: "594:39:155";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNDERLINE";
                readonly nameLocation: "610:9:155";
                readonly scope: 38746;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_string_memory_ptr";
                    readonly typeString: "string";
                };
                readonly typeName: {
                    readonly id: 37584;
                    readonly name: "string";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "594:6:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                };
                readonly value: {
                    readonly hexValue: "1b5b346d";
                    readonly id: 37585;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "string";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "622:11:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_stringliteral_48cbbbbdbcd789b35edf67deaad6f96f406603d9181318ca90ef32f90fedb5bb";
                        readonly typeString: "literal_string hex\"1b5b346d\"";
                    };
                    readonly value: "\u001B[4m";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 37589;
                readonly nodeType: "VariableDeclaration";
                readonly src: "639:37:155";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVERSE";
                readonly nameLocation: "655:7:155";
                readonly scope: 38746;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_string_memory_ptr";
                    readonly typeString: "string";
                };
                readonly typeName: {
                    readonly id: 37587;
                    readonly name: "string";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "639:6:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                };
                readonly value: {
                    readonly hexValue: "1b5b376d";
                    readonly id: 37588;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "string";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "665:11:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_stringliteral_963e08c830a620b3640a99ac46ac6850f28c8f20be064518b3acc7016c3e286e";
                        readonly typeString: "literal_string hex\"1b5b376d\"";
                    };
                    readonly value: "\u001B[7m";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 37592;
                readonly nodeType: "VariableDeclaration";
                readonly src: "682:35:155";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "RESET";
                readonly nameLocation: "698:5:155";
                readonly scope: 38746;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_string_memory_ptr";
                    readonly typeString: "string";
                };
                readonly typeName: {
                    readonly id: 37590;
                    readonly name: "string";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "682:6:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_string_storage_ptr";
                        readonly typeString: "string";
                    };
                };
                readonly value: {
                    readonly hexValue: "1b5b306d";
                    readonly id: 37591;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "string";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "706:11:155";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_stringliteral_289c700ce2c600d61adfc66f83b41c26150052f3ea6c772e582ea6afd03d1949";
                        readonly typeString: "literal_string hex\"1b5b306d\"";
                    };
                    readonly value: "\u001B[0m";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 37612;
                readonly nodeType: "FunctionDefinition";
                readonly src: "724:167:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37611;
                    readonly nodeType: "Block";
                    readonly src: "823:68:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37605;
                                    readonly name: "style";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37594;
                                    readonly src: "864:5:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly id: 37606;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37596;
                                    readonly src: "871:4:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    };
                                }, {
                                    readonly id: 37607;
                                    readonly name: "RESET";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37592;
                                    readonly src: "877:5:155";
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
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    }, {
                                        readonly typeIdentifier: "t_string_memory_ptr";
                                        readonly typeString: "string memory";
                                    }];
                                    readonly expression: {
                                        readonly id: 37603;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "847:3:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 37604;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "851:12:155";
                                    readonly memberName: "encodePacked";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "847:16:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 37608;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "847:36:155";
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
                                readonly id: 37602;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "840:6:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_string_storage_ptr_$";
                                    readonly typeString: "type(string storage pointer)";
                                };
                                readonly typeName: {
                                    readonly id: 37601;
                                    readonly name: "string";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "840:6:155";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 37609;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "840:44:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37600;
                        readonly id: 37610;
                        readonly nodeType: "Return";
                        readonly src: "833:51:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "styleConcat";
                readonly nameLocation: "733:11:155";
                readonly parameters: {
                    readonly id: 37597;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37594;
                        readonly mutability: "mutable";
                        readonly name: "style";
                        readonly nameLocation: "759:5:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37612;
                        readonly src: "745:19:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37593;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "745:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 37596;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "780:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37612;
                        readonly src: "766:18:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37595;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "766:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "744:41:155";
                };
                readonly returnParameters: {
                    readonly id: 37600;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37599;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37612;
                        readonly src: "808:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37598;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "808:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "807:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 37625;
                readonly nodeType: "FunctionDefinition";
                readonly src: "897:117:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37624;
                    readonly nodeType: "Block";
                    readonly src: "968:46:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 37620;
                                readonly name: "RED";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37559;
                                readonly src: "997:3:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 37621;
                                readonly name: "self";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37614;
                                readonly src: "1002:4:155";
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
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly id: 37619;
                                readonly name: "styleConcat";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37612;
                                readonly src: "985:11:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37622;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "985:22:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37618;
                        readonly id: 37623;
                        readonly nodeType: "Return";
                        readonly src: "978:29:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "red";
                readonly nameLocation: "906:3:155";
                readonly parameters: {
                    readonly id: 37615;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37614;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "924:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37625;
                        readonly src: "910:18:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37613;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "910:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "909:20:155";
                };
                readonly returnParameters: {
                    readonly id: 37618;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37617;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37625;
                        readonly src: "953:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37616;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "953:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "952:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37640;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1020:111:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37639;
                    readonly nodeType: "Block";
                    readonly src: "1085:46:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37635;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37627;
                                    readonly src: "1118:4:155";
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
                                        readonly id: 37633;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "1106:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37634;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1109:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40242;
                                    readonly src: "1106:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (uint256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37636;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1106:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37632;
                                readonly name: "red";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37625, 37640, 37655, 37670, 37685];
                                readonly referencedDeclaration: 37625;
                                readonly src: "1102:3:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37637;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1102:22:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37631;
                        readonly id: 37638;
                        readonly nodeType: "Return";
                        readonly src: "1095:29:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "red";
                readonly nameLocation: "1029:3:155";
                readonly parameters: {
                    readonly id: 37628;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37627;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "1041:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37640;
                        readonly src: "1033:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 37626;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1033:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1032:14:155";
                };
                readonly returnParameters: {
                    readonly id: 37631;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37630;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37640;
                        readonly src: "1070:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37629;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1070:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1069:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37655;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1137:110:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37654;
                    readonly nodeType: "Block";
                    readonly src: "1201:46:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37650;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37642;
                                    readonly src: "1234:4:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }];
                                    readonly expression: {
                                        readonly id: 37648;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "1222:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37649;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1225:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40249;
                                    readonly src: "1222:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (int256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37651;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1222:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37647;
                                readonly name: "red";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37625, 37640, 37655, 37670, 37685];
                                readonly referencedDeclaration: 37625;
                                readonly src: "1218:3:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37652;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1218:22:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37646;
                        readonly id: 37653;
                        readonly nodeType: "Return";
                        readonly src: "1211:29:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "red";
                readonly nameLocation: "1146:3:155";
                readonly parameters: {
                    readonly id: 37643;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37642;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "1157:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37655;
                        readonly src: "1150:11:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 37641;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1150:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1149:13:155";
                };
                readonly returnParameters: {
                    readonly id: 37646;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37645;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37655;
                        readonly src: "1186:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37644;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1186:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1185:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37670;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1253:111:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37669;
                    readonly nodeType: "Block";
                    readonly src: "1318:46:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37665;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37657;
                                    readonly src: "1351:4:155";
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
                                        readonly id: 37663;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "1339:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37664;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1342:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40214;
                                    readonly src: "1339:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (address) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37666;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1339:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37662;
                                readonly name: "red";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37625, 37640, 37655, 37670, 37685];
                                readonly referencedDeclaration: 37625;
                                readonly src: "1335:3:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37667;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1335:22:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37661;
                        readonly id: 37668;
                        readonly nodeType: "Return";
                        readonly src: "1328:29:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "red";
                readonly nameLocation: "1262:3:155";
                readonly parameters: {
                    readonly id: 37658;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37657;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "1274:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37670;
                        readonly src: "1266:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 37656;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1266:7:155";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1265:14:155";
                };
                readonly returnParameters: {
                    readonly id: 37661;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37660;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37670;
                        readonly src: "1303:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37659;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1303:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1302:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37685;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1370:108:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37684;
                    readonly nodeType: "Block";
                    readonly src: "1432:46:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37680;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37672;
                                    readonly src: "1465:4:155";
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
                                    readonly expression: {
                                        readonly id: 37678;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "1453:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37679;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1456:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40235;
                                    readonly src: "1453:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bool) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37681;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1453:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37677;
                                readonly name: "red";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37625, 37640, 37655, 37670, 37685];
                                readonly referencedDeclaration: 37625;
                                readonly src: "1449:3:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37682;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1449:22:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37676;
                        readonly id: 37683;
                        readonly nodeType: "Return";
                        readonly src: "1442:29:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "red";
                readonly nameLocation: "1379:3:155";
                readonly parameters: {
                    readonly id: 37673;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37672;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "1388:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37685;
                        readonly src: "1383:9:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 37671;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1383:4:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1382:11:155";
                };
                readonly returnParameters: {
                    readonly id: 37676;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37675;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37685;
                        readonly src: "1417:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37674;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1417:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1416:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37700;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1484:121:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37699;
                    readonly nodeType: "Block";
                    readonly src: "1559:46:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37695;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37687;
                                    readonly src: "1592:4:155";
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
                                    readonly expression: {
                                        readonly id: 37693;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "1580:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37694;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1583:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40221;
                                    readonly src: "1580:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes memory) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37696;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1580:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37692;
                                readonly name: "red";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37625, 37640, 37655, 37670, 37685];
                                readonly referencedDeclaration: 37625;
                                readonly src: "1576:3:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37697;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1576:22:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37691;
                        readonly id: 37698;
                        readonly nodeType: "Return";
                        readonly src: "1569:29:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "redBytes";
                readonly nameLocation: "1493:8:155";
                readonly parameters: {
                    readonly id: 37688;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37687;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "1515:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37700;
                        readonly src: "1502:17:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 37686;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1502:5:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1501:19:155";
                };
                readonly returnParameters: {
                    readonly id: 37691;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37690;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37700;
                        readonly src: "1544:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37689;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1544:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1543:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37715;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1611:118:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37714;
                    readonly nodeType: "Block";
                    readonly src: "1683:46:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37710;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37702;
                                    readonly src: "1716:4:155";
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
                                    readonly expression: {
                                        readonly id: 37708;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "1704:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37709;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1707:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40228;
                                    readonly src: "1704:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes32) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37711;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1704:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37707;
                                readonly name: "red";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37625, 37640, 37655, 37670, 37685];
                                readonly referencedDeclaration: 37625;
                                readonly src: "1700:3:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37712;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1700:22:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37706;
                        readonly id: 37713;
                        readonly nodeType: "Return";
                        readonly src: "1693:29:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "redBytes32";
                readonly nameLocation: "1620:10:155";
                readonly parameters: {
                    readonly id: 37703;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37702;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "1639:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37715;
                        readonly src: "1631:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 37701;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1631:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1630:14:155";
                };
                readonly returnParameters: {
                    readonly id: 37706;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37705;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37715;
                        readonly src: "1668:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37704;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1668:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1667:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37728;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1735:121:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37727;
                    readonly nodeType: "Block";
                    readonly src: "1808:48:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 37723;
                                readonly name: "GREEN";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37562;
                                readonly src: "1837:5:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 37724;
                                readonly name: "self";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37717;
                                readonly src: "1844:4:155";
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
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly id: 37722;
                                readonly name: "styleConcat";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37612;
                                readonly src: "1825:11:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37725;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1825:24:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37721;
                        readonly id: 37726;
                        readonly nodeType: "Return";
                        readonly src: "1818:31:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "green";
                readonly nameLocation: "1744:5:155";
                readonly parameters: {
                    readonly id: 37718;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37717;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "1764:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37728;
                        readonly src: "1750:18:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37716;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1750:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1749:20:155";
                };
                readonly returnParameters: {
                    readonly id: 37721;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37720;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37728;
                        readonly src: "1793:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37719;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1793:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1792:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37743;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1862:115:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37742;
                    readonly nodeType: "Block";
                    readonly src: "1929:48:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37738;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37730;
                                    readonly src: "1964:4:155";
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
                                        readonly id: 37736;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "1952:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37737;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1955:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40242;
                                    readonly src: "1952:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (uint256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37739;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1952:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37735;
                                readonly name: "green";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37728, 37743, 37758, 37773, 37788];
                                readonly referencedDeclaration: 37728;
                                readonly src: "1946:5:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37740;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1946:24:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37734;
                        readonly id: 37741;
                        readonly nodeType: "Return";
                        readonly src: "1939:31:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "green";
                readonly nameLocation: "1871:5:155";
                readonly parameters: {
                    readonly id: 37731;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37730;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "1885:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37743;
                        readonly src: "1877:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 37729;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1877:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1876:14:155";
                };
                readonly returnParameters: {
                    readonly id: 37734;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37733;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37743;
                        readonly src: "1914:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37732;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1914:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1913:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37758;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1983:114:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37757;
                    readonly nodeType: "Block";
                    readonly src: "2049:48:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37753;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37745;
                                    readonly src: "2084:4:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }];
                                    readonly expression: {
                                        readonly id: 37751;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "2072:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37752;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "2075:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40249;
                                    readonly src: "2072:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (int256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37754;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2072:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37750;
                                readonly name: "green";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37728, 37743, 37758, 37773, 37788];
                                readonly referencedDeclaration: 37728;
                                readonly src: "2066:5:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37755;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2066:24:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37749;
                        readonly id: 37756;
                        readonly nodeType: "Return";
                        readonly src: "2059:31:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "green";
                readonly nameLocation: "1992:5:155";
                readonly parameters: {
                    readonly id: 37746;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37745;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "2005:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37758;
                        readonly src: "1998:11:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 37744;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1998:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1997:13:155";
                };
                readonly returnParameters: {
                    readonly id: 37749;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37748;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37758;
                        readonly src: "2034:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37747;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2034:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2033:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37773;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2103:115:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37772;
                    readonly nodeType: "Block";
                    readonly src: "2170:48:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37768;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37760;
                                    readonly src: "2205:4:155";
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
                                        readonly id: 37766;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "2193:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37767;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "2196:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40214;
                                    readonly src: "2193:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (address) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37769;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2193:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37765;
                                readonly name: "green";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37728, 37743, 37758, 37773, 37788];
                                readonly referencedDeclaration: 37728;
                                readonly src: "2187:5:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37770;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2187:24:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37764;
                        readonly id: 37771;
                        readonly nodeType: "Return";
                        readonly src: "2180:31:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "green";
                readonly nameLocation: "2112:5:155";
                readonly parameters: {
                    readonly id: 37761;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37760;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "2126:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37773;
                        readonly src: "2118:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 37759;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2118:7:155";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2117:14:155";
                };
                readonly returnParameters: {
                    readonly id: 37764;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37763;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37773;
                        readonly src: "2155:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37762;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2155:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2154:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37788;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2224:112:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37787;
                    readonly nodeType: "Block";
                    readonly src: "2288:48:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37783;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37775;
                                    readonly src: "2323:4:155";
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
                                    readonly expression: {
                                        readonly id: 37781;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "2311:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37782;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "2314:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40235;
                                    readonly src: "2311:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bool) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37784;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2311:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37780;
                                readonly name: "green";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37728, 37743, 37758, 37773, 37788];
                                readonly referencedDeclaration: 37728;
                                readonly src: "2305:5:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37785;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2305:24:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37779;
                        readonly id: 37786;
                        readonly nodeType: "Return";
                        readonly src: "2298:31:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "green";
                readonly nameLocation: "2233:5:155";
                readonly parameters: {
                    readonly id: 37776;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37775;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "2244:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37788;
                        readonly src: "2239:9:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 37774;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2239:4:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2238:11:155";
                };
                readonly returnParameters: {
                    readonly id: 37779;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37778;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37788;
                        readonly src: "2273:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37777;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2273:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2272:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37803;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2342:125:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37802;
                    readonly nodeType: "Block";
                    readonly src: "2419:48:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37798;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37790;
                                    readonly src: "2454:4:155";
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
                                    readonly expression: {
                                        readonly id: 37796;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "2442:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37797;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "2445:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40221;
                                    readonly src: "2442:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes memory) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37799;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2442:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37795;
                                readonly name: "green";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37728, 37743, 37758, 37773, 37788];
                                readonly referencedDeclaration: 37728;
                                readonly src: "2436:5:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37800;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2436:24:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37794;
                        readonly id: 37801;
                        readonly nodeType: "Return";
                        readonly src: "2429:31:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "greenBytes";
                readonly nameLocation: "2351:10:155";
                readonly parameters: {
                    readonly id: 37791;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37790;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "2375:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37803;
                        readonly src: "2362:17:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 37789;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2362:5:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2361:19:155";
                };
                readonly returnParameters: {
                    readonly id: 37794;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37793;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37803;
                        readonly src: "2404:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37792;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2404:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2403:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37818;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2473:122:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37817;
                    readonly nodeType: "Block";
                    readonly src: "2547:48:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37813;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37805;
                                    readonly src: "2582:4:155";
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
                                    readonly expression: {
                                        readonly id: 37811;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "2570:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37812;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "2573:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40228;
                                    readonly src: "2570:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes32) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37814;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2570:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37810;
                                readonly name: "green";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37728, 37743, 37758, 37773, 37788];
                                readonly referencedDeclaration: 37728;
                                readonly src: "2564:5:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37815;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2564:24:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37809;
                        readonly id: 37816;
                        readonly nodeType: "Return";
                        readonly src: "2557:31:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "greenBytes32";
                readonly nameLocation: "2482:12:155";
                readonly parameters: {
                    readonly id: 37806;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37805;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "2503:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37818;
                        readonly src: "2495:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 37804;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2495:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2494:14:155";
                };
                readonly returnParameters: {
                    readonly id: 37809;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37808;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37818;
                        readonly src: "2532:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37807;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2532:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2531:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37831;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2601:123:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37830;
                    readonly nodeType: "Block";
                    readonly src: "2675:49:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 37826;
                                readonly name: "YELLOW";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37565;
                                readonly src: "2704:6:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 37827;
                                readonly name: "self";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37820;
                                readonly src: "2712:4:155";
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
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly id: 37825;
                                readonly name: "styleConcat";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37612;
                                readonly src: "2692:11:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37828;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2692:25:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37824;
                        readonly id: 37829;
                        readonly nodeType: "Return";
                        readonly src: "2685:32:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "yellow";
                readonly nameLocation: "2610:6:155";
                readonly parameters: {
                    readonly id: 37821;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37820;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "2631:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37831;
                        readonly src: "2617:18:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37819;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2617:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2616:20:155";
                };
                readonly returnParameters: {
                    readonly id: 37824;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37823;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37831;
                        readonly src: "2660:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37822;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2660:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2659:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37846;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2730:117:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37845;
                    readonly nodeType: "Block";
                    readonly src: "2798:49:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37841;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37833;
                                    readonly src: "2834:4:155";
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
                                        readonly id: 37839;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "2822:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37840;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "2825:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40242;
                                    readonly src: "2822:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (uint256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37842;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2822:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37838;
                                readonly name: "yellow";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37831, 37846, 37861, 37876, 37891];
                                readonly referencedDeclaration: 37831;
                                readonly src: "2815:6:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37843;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2815:25:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37837;
                        readonly id: 37844;
                        readonly nodeType: "Return";
                        readonly src: "2808:32:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "yellow";
                readonly nameLocation: "2739:6:155";
                readonly parameters: {
                    readonly id: 37834;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37833;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "2754:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37846;
                        readonly src: "2746:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 37832;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2746:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2745:14:155";
                };
                readonly returnParameters: {
                    readonly id: 37837;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37836;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37846;
                        readonly src: "2783:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37835;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2783:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2782:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37861;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2853:116:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37860;
                    readonly nodeType: "Block";
                    readonly src: "2920:49:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37856;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37848;
                                    readonly src: "2956:4:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }];
                                    readonly expression: {
                                        readonly id: 37854;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "2944:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37855;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "2947:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40249;
                                    readonly src: "2944:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (int256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37857;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2944:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37853;
                                readonly name: "yellow";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37831, 37846, 37861, 37876, 37891];
                                readonly referencedDeclaration: 37831;
                                readonly src: "2937:6:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37858;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2937:25:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37852;
                        readonly id: 37859;
                        readonly nodeType: "Return";
                        readonly src: "2930:32:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "yellow";
                readonly nameLocation: "2862:6:155";
                readonly parameters: {
                    readonly id: 37849;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37848;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "2876:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37861;
                        readonly src: "2869:11:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 37847;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2869:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2868:13:155";
                };
                readonly returnParameters: {
                    readonly id: 37852;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37851;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37861;
                        readonly src: "2905:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37850;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2905:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2904:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37876;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2975:117:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37875;
                    readonly nodeType: "Block";
                    readonly src: "3043:49:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37871;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37863;
                                    readonly src: "3079:4:155";
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
                                        readonly id: 37869;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "3067:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37870;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3070:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40214;
                                    readonly src: "3067:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (address) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37872;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3067:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37868;
                                readonly name: "yellow";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37831, 37846, 37861, 37876, 37891];
                                readonly referencedDeclaration: 37831;
                                readonly src: "3060:6:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37873;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3060:25:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37867;
                        readonly id: 37874;
                        readonly nodeType: "Return";
                        readonly src: "3053:32:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "yellow";
                readonly nameLocation: "2984:6:155";
                readonly parameters: {
                    readonly id: 37864;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37863;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "2999:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37876;
                        readonly src: "2991:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 37862;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2991:7:155";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2990:14:155";
                };
                readonly returnParameters: {
                    readonly id: 37867;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37866;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37876;
                        readonly src: "3028:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37865;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3028:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3027:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37891;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3098:114:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37890;
                    readonly nodeType: "Block";
                    readonly src: "3163:49:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37886;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37878;
                                    readonly src: "3199:4:155";
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
                                    readonly expression: {
                                        readonly id: 37884;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "3187:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37885;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3190:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40235;
                                    readonly src: "3187:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bool) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37887;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3187:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37883;
                                readonly name: "yellow";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37831, 37846, 37861, 37876, 37891];
                                readonly referencedDeclaration: 37831;
                                readonly src: "3180:6:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37888;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3180:25:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37882;
                        readonly id: 37889;
                        readonly nodeType: "Return";
                        readonly src: "3173:32:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "yellow";
                readonly nameLocation: "3107:6:155";
                readonly parameters: {
                    readonly id: 37879;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37878;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "3119:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37891;
                        readonly src: "3114:9:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 37877;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3114:4:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3113:11:155";
                };
                readonly returnParameters: {
                    readonly id: 37882;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37881;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37891;
                        readonly src: "3148:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37880;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3148:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3147:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37906;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3218:127:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37905;
                    readonly nodeType: "Block";
                    readonly src: "3296:49:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37901;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37893;
                                    readonly src: "3332:4:155";
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
                                    readonly expression: {
                                        readonly id: 37899;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "3320:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37900;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3323:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40221;
                                    readonly src: "3320:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes memory) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37902;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3320:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37898;
                                readonly name: "yellow";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37831, 37846, 37861, 37876, 37891];
                                readonly referencedDeclaration: 37831;
                                readonly src: "3313:6:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37903;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3313:25:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37897;
                        readonly id: 37904;
                        readonly nodeType: "Return";
                        readonly src: "3306:32:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "yellowBytes";
                readonly nameLocation: "3227:11:155";
                readonly parameters: {
                    readonly id: 37894;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37893;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "3252:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37906;
                        readonly src: "3239:17:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 37892;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3239:5:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3238:19:155";
                };
                readonly returnParameters: {
                    readonly id: 37897;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37896;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37906;
                        readonly src: "3281:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37895;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3281:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3280:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37921;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3351:124:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37920;
                    readonly nodeType: "Block";
                    readonly src: "3426:49:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37916;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37908;
                                    readonly src: "3462:4:155";
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
                                    readonly expression: {
                                        readonly id: 37914;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "3450:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37915;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3453:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40228;
                                    readonly src: "3450:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes32) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37917;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3450:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37913;
                                readonly name: "yellow";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37831, 37846, 37861, 37876, 37891];
                                readonly referencedDeclaration: 37831;
                                readonly src: "3443:6:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37918;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3443:25:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37912;
                        readonly id: 37919;
                        readonly nodeType: "Return";
                        readonly src: "3436:32:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "yellowBytes32";
                readonly nameLocation: "3360:13:155";
                readonly parameters: {
                    readonly id: 37909;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37908;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "3382:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37921;
                        readonly src: "3374:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 37907;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3374:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3373:14:155";
                };
                readonly returnParameters: {
                    readonly id: 37912;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37911;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37921;
                        readonly src: "3411:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37910;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3411:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3410:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37934;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3481:119:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37933;
                    readonly nodeType: "Block";
                    readonly src: "3553:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 37929;
                                readonly name: "BLUE";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37568;
                                readonly src: "3582:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 37930;
                                readonly name: "self";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37923;
                                readonly src: "3588:4:155";
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
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly id: 37928;
                                readonly name: "styleConcat";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37612;
                                readonly src: "3570:11:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37931;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3570:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37927;
                        readonly id: 37932;
                        readonly nodeType: "Return";
                        readonly src: "3563:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "blue";
                readonly nameLocation: "3490:4:155";
                readonly parameters: {
                    readonly id: 37924;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37923;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "3509:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37934;
                        readonly src: "3495:18:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37922;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3495:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3494:20:155";
                };
                readonly returnParameters: {
                    readonly id: 37927;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37926;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37934;
                        readonly src: "3538:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37925;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3538:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3537:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37949;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3606:113:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37948;
                    readonly nodeType: "Block";
                    readonly src: "3672:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37944;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37936;
                                    readonly src: "3706:4:155";
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
                                        readonly id: 37942;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "3694:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37943;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3697:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40242;
                                    readonly src: "3694:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (uint256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37945;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3694:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37941;
                                readonly name: "blue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37934, 37949, 37964, 37979, 37994];
                                readonly referencedDeclaration: 37934;
                                readonly src: "3689:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37946;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3689:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37940;
                        readonly id: 37947;
                        readonly nodeType: "Return";
                        readonly src: "3682:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "blue";
                readonly nameLocation: "3615:4:155";
                readonly parameters: {
                    readonly id: 37937;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37936;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "3628:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37949;
                        readonly src: "3620:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 37935;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3620:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3619:14:155";
                };
                readonly returnParameters: {
                    readonly id: 37940;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37939;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37949;
                        readonly src: "3657:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37938;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3657:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3656:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37964;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3725:112:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37963;
                    readonly nodeType: "Block";
                    readonly src: "3790:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37959;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37951;
                                    readonly src: "3824:4:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }];
                                    readonly expression: {
                                        readonly id: 37957;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "3812:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37958;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3815:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40249;
                                    readonly src: "3812:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (int256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37960;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3812:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37956;
                                readonly name: "blue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37934, 37949, 37964, 37979, 37994];
                                readonly referencedDeclaration: 37934;
                                readonly src: "3807:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37961;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3807:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37955;
                        readonly id: 37962;
                        readonly nodeType: "Return";
                        readonly src: "3800:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "blue";
                readonly nameLocation: "3734:4:155";
                readonly parameters: {
                    readonly id: 37952;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37951;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "3746:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37964;
                        readonly src: "3739:11:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 37950;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3739:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3738:13:155";
                };
                readonly returnParameters: {
                    readonly id: 37955;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37954;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37964;
                        readonly src: "3775:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37953;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3775:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3774:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37979;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3843:113:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37978;
                    readonly nodeType: "Block";
                    readonly src: "3909:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37974;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37966;
                                    readonly src: "3943:4:155";
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
                                        readonly id: 37972;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "3931:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37973;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3934:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40214;
                                    readonly src: "3931:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (address) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37975;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3931:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37971;
                                readonly name: "blue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37934, 37949, 37964, 37979, 37994];
                                readonly referencedDeclaration: 37934;
                                readonly src: "3926:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37976;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3926:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37970;
                        readonly id: 37977;
                        readonly nodeType: "Return";
                        readonly src: "3919:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "blue";
                readonly nameLocation: "3852:4:155";
                readonly parameters: {
                    readonly id: 37967;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37966;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "3865:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37979;
                        readonly src: "3857:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 37965;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3857:7:155";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3856:14:155";
                };
                readonly returnParameters: {
                    readonly id: 37970;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37969;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37979;
                        readonly src: "3894:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37968;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3894:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3893:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 37994;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3962:110:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 37993;
                    readonly nodeType: "Block";
                    readonly src: "4025:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 37989;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37981;
                                    readonly src: "4059:4:155";
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
                                    readonly expression: {
                                        readonly id: 37987;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "4047:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 37988;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4050:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40235;
                                    readonly src: "4047:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bool) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 37990;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4047:17:155";
                                readonly tryCall: false;
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
                                readonly id: 37986;
                                readonly name: "blue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37934, 37949, 37964, 37979, 37994];
                                readonly referencedDeclaration: 37934;
                                readonly src: "4042:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 37991;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4042:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 37985;
                        readonly id: 37992;
                        readonly nodeType: "Return";
                        readonly src: "4035:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "blue";
                readonly nameLocation: "3971:4:155";
                readonly parameters: {
                    readonly id: 37982;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37981;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "3981:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37994;
                        readonly src: "3976:9:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 37980;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3976:4:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3975:11:155";
                };
                readonly returnParameters: {
                    readonly id: 37985;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37984;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 37994;
                        readonly src: "4010:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37983;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4010:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4009:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38009;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4078:123:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38008;
                    readonly nodeType: "Block";
                    readonly src: "4154:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38004;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 37996;
                                    readonly src: "4188:4:155";
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
                                    readonly expression: {
                                        readonly id: 38002;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "4176:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38003;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4179:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40221;
                                    readonly src: "4176:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes memory) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38005;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4176:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38001;
                                readonly name: "blue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37934, 37949, 37964, 37979, 37994];
                                readonly referencedDeclaration: 37934;
                                readonly src: "4171:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38006;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4171:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38000;
                        readonly id: 38007;
                        readonly nodeType: "Return";
                        readonly src: "4164:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "blueBytes";
                readonly nameLocation: "4087:9:155";
                readonly parameters: {
                    readonly id: 37997;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37996;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "4110:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38009;
                        readonly src: "4097:17:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 37995;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4097:5:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4096:19:155";
                };
                readonly returnParameters: {
                    readonly id: 38000;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 37999;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38009;
                        readonly src: "4139:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 37998;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4139:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4138:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38024;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4207:120:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38023;
                    readonly nodeType: "Block";
                    readonly src: "4280:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38019;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38011;
                                    readonly src: "4314:4:155";
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
                                    readonly expression: {
                                        readonly id: 38017;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "4302:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38018;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4305:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40228;
                                    readonly src: "4302:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes32) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38020;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4302:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38016;
                                readonly name: "blue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [37934, 37949, 37964, 37979, 37994];
                                readonly referencedDeclaration: 37934;
                                readonly src: "4297:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38021;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4297:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38015;
                        readonly id: 38022;
                        readonly nodeType: "Return";
                        readonly src: "4290:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "blueBytes32";
                readonly nameLocation: "4216:11:155";
                readonly parameters: {
                    readonly id: 38012;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38011;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "4236:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38024;
                        readonly src: "4228:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 38010;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4228:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4227:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38015;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38014;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38024;
                        readonly src: "4265:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38013;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4265:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4264:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38037;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4333:125:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38036;
                    readonly nodeType: "Block";
                    readonly src: "4408:50:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 38032;
                                readonly name: "MAGENTA";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37571;
                                readonly src: "4437:7:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 38033;
                                readonly name: "self";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 38026;
                                readonly src: "4446:4:155";
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
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly id: 38031;
                                readonly name: "styleConcat";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37612;
                                readonly src: "4425:11:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38034;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4425:26:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38030;
                        readonly id: 38035;
                        readonly nodeType: "Return";
                        readonly src: "4418:33:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "magenta";
                readonly nameLocation: "4342:7:155";
                readonly parameters: {
                    readonly id: 38027;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38026;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "4364:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38037;
                        readonly src: "4350:18:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38025;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4350:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4349:20:155";
                };
                readonly returnParameters: {
                    readonly id: 38030;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38029;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38037;
                        readonly src: "4393:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38028;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4393:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4392:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38052;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4464:119:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38051;
                    readonly nodeType: "Block";
                    readonly src: "4533:50:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38047;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38039;
                                    readonly src: "4570:4:155";
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
                                        readonly id: 38045;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "4558:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38046;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4561:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40242;
                                    readonly src: "4558:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (uint256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38048;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4558:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38044;
                                readonly name: "magenta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38037, 38052, 38067, 38082, 38097];
                                readonly referencedDeclaration: 38037;
                                readonly src: "4550:7:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38049;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4550:26:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38043;
                        readonly id: 38050;
                        readonly nodeType: "Return";
                        readonly src: "4543:33:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "magenta";
                readonly nameLocation: "4473:7:155";
                readonly parameters: {
                    readonly id: 38040;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38039;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "4489:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38052;
                        readonly src: "4481:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 38038;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4481:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4480:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38043;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38042;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38052;
                        readonly src: "4518:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38041;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4518:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4517:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38067;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4589:118:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38066;
                    readonly nodeType: "Block";
                    readonly src: "4657:50:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38062;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38054;
                                    readonly src: "4694:4:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }];
                                    readonly expression: {
                                        readonly id: 38060;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "4682:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38061;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4685:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40249;
                                    readonly src: "4682:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (int256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38063;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4682:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38059;
                                readonly name: "magenta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38037, 38052, 38067, 38082, 38097];
                                readonly referencedDeclaration: 38037;
                                readonly src: "4674:7:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38064;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4674:26:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38058;
                        readonly id: 38065;
                        readonly nodeType: "Return";
                        readonly src: "4667:33:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "magenta";
                readonly nameLocation: "4598:7:155";
                readonly parameters: {
                    readonly id: 38055;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38054;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "4613:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38067;
                        readonly src: "4606:11:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 38053;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4606:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4605:13:155";
                };
                readonly returnParameters: {
                    readonly id: 38058;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38057;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38067;
                        readonly src: "4642:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38056;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4642:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4641:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38082;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4713:119:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38081;
                    readonly nodeType: "Block";
                    readonly src: "4782:50:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38077;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38069;
                                    readonly src: "4819:4:155";
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
                                        readonly id: 38075;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "4807:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38076;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4810:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40214;
                                    readonly src: "4807:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (address) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38078;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4807:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38074;
                                readonly name: "magenta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38037, 38052, 38067, 38082, 38097];
                                readonly referencedDeclaration: 38037;
                                readonly src: "4799:7:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38079;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4799:26:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38073;
                        readonly id: 38080;
                        readonly nodeType: "Return";
                        readonly src: "4792:33:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "magenta";
                readonly nameLocation: "4722:7:155";
                readonly parameters: {
                    readonly id: 38070;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38069;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "4738:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38082;
                        readonly src: "4730:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 38068;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4730:7:155";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4729:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38073;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38072;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38082;
                        readonly src: "4767:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38071;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4767:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4766:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38097;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4838:116:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38096;
                    readonly nodeType: "Block";
                    readonly src: "4904:50:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38092;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38084;
                                    readonly src: "4941:4:155";
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
                                    readonly expression: {
                                        readonly id: 38090;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "4929:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38091;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4932:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40235;
                                    readonly src: "4929:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bool) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38093;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4929:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38089;
                                readonly name: "magenta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38037, 38052, 38067, 38082, 38097];
                                readonly referencedDeclaration: 38037;
                                readonly src: "4921:7:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38094;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4921:26:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38088;
                        readonly id: 38095;
                        readonly nodeType: "Return";
                        readonly src: "4914:33:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "magenta";
                readonly nameLocation: "4847:7:155";
                readonly parameters: {
                    readonly id: 38085;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38084;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "4860:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38097;
                        readonly src: "4855:9:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 38083;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4855:4:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4854:11:155";
                };
                readonly returnParameters: {
                    readonly id: 38088;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38087;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38097;
                        readonly src: "4889:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38086;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4889:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4888:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38112;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4960:129:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38111;
                    readonly nodeType: "Block";
                    readonly src: "5039:50:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38107;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38099;
                                    readonly src: "5076:4:155";
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
                                    readonly expression: {
                                        readonly id: 38105;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "5064:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38106;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5067:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40221;
                                    readonly src: "5064:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes memory) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38108;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5064:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38104;
                                readonly name: "magenta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38037, 38052, 38067, 38082, 38097];
                                readonly referencedDeclaration: 38037;
                                readonly src: "5056:7:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38109;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5056:26:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38103;
                        readonly id: 38110;
                        readonly nodeType: "Return";
                        readonly src: "5049:33:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "magentaBytes";
                readonly nameLocation: "4969:12:155";
                readonly parameters: {
                    readonly id: 38100;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38099;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "4995:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38112;
                        readonly src: "4982:17:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 38098;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4982:5:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4981:19:155";
                };
                readonly returnParameters: {
                    readonly id: 38103;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38102;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38112;
                        readonly src: "5024:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38101;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5024:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5023:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38127;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5095:126:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38126;
                    readonly nodeType: "Block";
                    readonly src: "5171:50:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38122;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38114;
                                    readonly src: "5208:4:155";
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
                                    readonly expression: {
                                        readonly id: 38120;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "5196:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38121;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5199:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40228;
                                    readonly src: "5196:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes32) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38123;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5196:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38119;
                                readonly name: "magenta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38037, 38052, 38067, 38082, 38097];
                                readonly referencedDeclaration: 38037;
                                readonly src: "5188:7:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38124;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5188:26:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38118;
                        readonly id: 38125;
                        readonly nodeType: "Return";
                        readonly src: "5181:33:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "magentaBytes32";
                readonly nameLocation: "5104:14:155";
                readonly parameters: {
                    readonly id: 38115;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38114;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "5127:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38127;
                        readonly src: "5119:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 38113;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5119:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5118:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38118;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38117;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38127;
                        readonly src: "5156:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38116;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5156:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5155:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38140;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5227:119:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38139;
                    readonly nodeType: "Block";
                    readonly src: "5299:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 38135;
                                readonly name: "CYAN";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37574;
                                readonly src: "5328:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 38136;
                                readonly name: "self";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 38129;
                                readonly src: "5334:4:155";
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
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly id: 38134;
                                readonly name: "styleConcat";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37612;
                                readonly src: "5316:11:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38137;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5316:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38133;
                        readonly id: 38138;
                        readonly nodeType: "Return";
                        readonly src: "5309:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "cyan";
                readonly nameLocation: "5236:4:155";
                readonly parameters: {
                    readonly id: 38130;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38129;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "5255:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38140;
                        readonly src: "5241:18:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38128;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5241:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5240:20:155";
                };
                readonly returnParameters: {
                    readonly id: 38133;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38132;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38140;
                        readonly src: "5284:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38131;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5284:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5283:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38155;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5352:113:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38154;
                    readonly nodeType: "Block";
                    readonly src: "5418:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38150;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38142;
                                    readonly src: "5452:4:155";
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
                                        readonly id: 38148;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "5440:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38149;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5443:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40242;
                                    readonly src: "5440:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (uint256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38151;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5440:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38147;
                                readonly name: "cyan";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38140, 38155, 38170, 38185, 38200];
                                readonly referencedDeclaration: 38140;
                                readonly src: "5435:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38152;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5435:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38146;
                        readonly id: 38153;
                        readonly nodeType: "Return";
                        readonly src: "5428:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "cyan";
                readonly nameLocation: "5361:4:155";
                readonly parameters: {
                    readonly id: 38143;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38142;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "5374:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38155;
                        readonly src: "5366:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 38141;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5366:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5365:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38146;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38145;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38155;
                        readonly src: "5403:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38144;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5403:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5402:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38170;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5471:112:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38169;
                    readonly nodeType: "Block";
                    readonly src: "5536:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38165;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38157;
                                    readonly src: "5570:4:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }];
                                    readonly expression: {
                                        readonly id: 38163;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "5558:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38164;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5561:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40249;
                                    readonly src: "5558:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (int256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38166;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5558:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38162;
                                readonly name: "cyan";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38140, 38155, 38170, 38185, 38200];
                                readonly referencedDeclaration: 38140;
                                readonly src: "5553:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38167;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5553:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38161;
                        readonly id: 38168;
                        readonly nodeType: "Return";
                        readonly src: "5546:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "cyan";
                readonly nameLocation: "5480:4:155";
                readonly parameters: {
                    readonly id: 38158;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38157;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "5492:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38170;
                        readonly src: "5485:11:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 38156;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5485:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5484:13:155";
                };
                readonly returnParameters: {
                    readonly id: 38161;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38160;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38170;
                        readonly src: "5521:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38159;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5521:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5520:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38185;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5589:113:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38184;
                    readonly nodeType: "Block";
                    readonly src: "5655:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38180;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38172;
                                    readonly src: "5689:4:155";
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
                                        readonly id: 38178;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "5677:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38179;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5680:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40214;
                                    readonly src: "5677:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (address) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38181;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5677:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38177;
                                readonly name: "cyan";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38140, 38155, 38170, 38185, 38200];
                                readonly referencedDeclaration: 38140;
                                readonly src: "5672:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38182;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5672:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38176;
                        readonly id: 38183;
                        readonly nodeType: "Return";
                        readonly src: "5665:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "cyan";
                readonly nameLocation: "5598:4:155";
                readonly parameters: {
                    readonly id: 38173;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38172;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "5611:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38185;
                        readonly src: "5603:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 38171;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5603:7:155";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5602:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38176;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38175;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38185;
                        readonly src: "5640:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38174;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5640:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5639:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38200;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5708:110:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38199;
                    readonly nodeType: "Block";
                    readonly src: "5771:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38195;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38187;
                                    readonly src: "5805:4:155";
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
                                    readonly expression: {
                                        readonly id: 38193;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "5793:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38194;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5796:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40235;
                                    readonly src: "5793:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bool) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38196;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5793:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38192;
                                readonly name: "cyan";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38140, 38155, 38170, 38185, 38200];
                                readonly referencedDeclaration: 38140;
                                readonly src: "5788:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38197;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5788:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38191;
                        readonly id: 38198;
                        readonly nodeType: "Return";
                        readonly src: "5781:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "cyan";
                readonly nameLocation: "5717:4:155";
                readonly parameters: {
                    readonly id: 38188;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38187;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "5727:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38200;
                        readonly src: "5722:9:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 38186;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5722:4:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5721:11:155";
                };
                readonly returnParameters: {
                    readonly id: 38191;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38190;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38200;
                        readonly src: "5756:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38189;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5756:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5755:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38215;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5824:123:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38214;
                    readonly nodeType: "Block";
                    readonly src: "5900:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38210;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38202;
                                    readonly src: "5934:4:155";
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
                                    readonly expression: {
                                        readonly id: 38208;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "5922:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38209;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5925:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40221;
                                    readonly src: "5922:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes memory) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38211;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5922:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38207;
                                readonly name: "cyan";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38140, 38155, 38170, 38185, 38200];
                                readonly referencedDeclaration: 38140;
                                readonly src: "5917:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38212;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5917:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38206;
                        readonly id: 38213;
                        readonly nodeType: "Return";
                        readonly src: "5910:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "cyanBytes";
                readonly nameLocation: "5833:9:155";
                readonly parameters: {
                    readonly id: 38203;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38202;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "5856:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38215;
                        readonly src: "5843:17:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 38201;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5843:5:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5842:19:155";
                };
                readonly returnParameters: {
                    readonly id: 38206;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38205;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38215;
                        readonly src: "5885:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38204;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5885:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5884:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38230;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5953:120:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38229;
                    readonly nodeType: "Block";
                    readonly src: "6026:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38225;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38217;
                                    readonly src: "6060:4:155";
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
                                    readonly expression: {
                                        readonly id: 38223;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "6048:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38224;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6051:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40228;
                                    readonly src: "6048:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes32) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38226;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6048:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38222;
                                readonly name: "cyan";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38140, 38155, 38170, 38185, 38200];
                                readonly referencedDeclaration: 38140;
                                readonly src: "6043:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38227;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6043:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38221;
                        readonly id: 38228;
                        readonly nodeType: "Return";
                        readonly src: "6036:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "cyanBytes32";
                readonly nameLocation: "5962:11:155";
                readonly parameters: {
                    readonly id: 38218;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38217;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "5982:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38230;
                        readonly src: "5974:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 38216;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5974:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5973:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38221;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38220;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38230;
                        readonly src: "6011:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38219;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6011:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6010:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38243;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6079:119:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38242;
                    readonly nodeType: "Block";
                    readonly src: "6151:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 38238;
                                readonly name: "BOLD";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37577;
                                readonly src: "6180:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 38239;
                                readonly name: "self";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 38232;
                                readonly src: "6186:4:155";
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
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly id: 38237;
                                readonly name: "styleConcat";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37612;
                                readonly src: "6168:11:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38240;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6168:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38236;
                        readonly id: 38241;
                        readonly nodeType: "Return";
                        readonly src: "6161:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "bold";
                readonly nameLocation: "6088:4:155";
                readonly parameters: {
                    readonly id: 38233;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38232;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "6107:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38243;
                        readonly src: "6093:18:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38231;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6093:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6092:20:155";
                };
                readonly returnParameters: {
                    readonly id: 38236;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38235;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38243;
                        readonly src: "6136:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38234;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6136:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6135:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38258;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6204:113:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38257;
                    readonly nodeType: "Block";
                    readonly src: "6270:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38253;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38245;
                                    readonly src: "6304:4:155";
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
                                        readonly id: 38251;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "6292:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38252;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6295:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40242;
                                    readonly src: "6292:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (uint256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38254;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6292:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38250;
                                readonly name: "bold";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38243, 38258, 38273, 38288, 38303];
                                readonly referencedDeclaration: 38243;
                                readonly src: "6287:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38255;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6287:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38249;
                        readonly id: 38256;
                        readonly nodeType: "Return";
                        readonly src: "6280:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "bold";
                readonly nameLocation: "6213:4:155";
                readonly parameters: {
                    readonly id: 38246;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38245;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "6226:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38258;
                        readonly src: "6218:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 38244;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6218:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6217:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38249;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38248;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38258;
                        readonly src: "6255:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38247;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6255:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6254:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38273;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6323:112:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38272;
                    readonly nodeType: "Block";
                    readonly src: "6388:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38268;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38260;
                                    readonly src: "6422:4:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }];
                                    readonly expression: {
                                        readonly id: 38266;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "6410:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38267;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6413:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40249;
                                    readonly src: "6410:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (int256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38269;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6410:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38265;
                                readonly name: "bold";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38243, 38258, 38273, 38288, 38303];
                                readonly referencedDeclaration: 38243;
                                readonly src: "6405:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38270;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6405:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38264;
                        readonly id: 38271;
                        readonly nodeType: "Return";
                        readonly src: "6398:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "bold";
                readonly nameLocation: "6332:4:155";
                readonly parameters: {
                    readonly id: 38261;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38260;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "6344:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38273;
                        readonly src: "6337:11:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 38259;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6337:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6336:13:155";
                };
                readonly returnParameters: {
                    readonly id: 38264;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38263;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38273;
                        readonly src: "6373:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38262;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6373:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6372:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38288;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6441:113:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38287;
                    readonly nodeType: "Block";
                    readonly src: "6507:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38283;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38275;
                                    readonly src: "6541:4:155";
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
                                        readonly id: 38281;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "6529:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38282;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6532:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40214;
                                    readonly src: "6529:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (address) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38284;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6529:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38280;
                                readonly name: "bold";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38243, 38258, 38273, 38288, 38303];
                                readonly referencedDeclaration: 38243;
                                readonly src: "6524:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38285;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6524:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38279;
                        readonly id: 38286;
                        readonly nodeType: "Return";
                        readonly src: "6517:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "bold";
                readonly nameLocation: "6450:4:155";
                readonly parameters: {
                    readonly id: 38276;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38275;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "6463:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38288;
                        readonly src: "6455:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 38274;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6455:7:155";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6454:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38279;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38278;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38288;
                        readonly src: "6492:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38277;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6492:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6491:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38303;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6560:110:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38302;
                    readonly nodeType: "Block";
                    readonly src: "6623:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38298;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38290;
                                    readonly src: "6657:4:155";
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
                                    readonly expression: {
                                        readonly id: 38296;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "6645:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38297;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6648:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40235;
                                    readonly src: "6645:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bool) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38299;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6645:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38295;
                                readonly name: "bold";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38243, 38258, 38273, 38288, 38303];
                                readonly referencedDeclaration: 38243;
                                readonly src: "6640:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38300;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6640:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38294;
                        readonly id: 38301;
                        readonly nodeType: "Return";
                        readonly src: "6633:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "bold";
                readonly nameLocation: "6569:4:155";
                readonly parameters: {
                    readonly id: 38291;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38290;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "6579:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38303;
                        readonly src: "6574:9:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 38289;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6574:4:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6573:11:155";
                };
                readonly returnParameters: {
                    readonly id: 38294;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38293;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38303;
                        readonly src: "6608:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38292;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6608:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6607:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38318;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6676:123:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38317;
                    readonly nodeType: "Block";
                    readonly src: "6752:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38313;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38305;
                                    readonly src: "6786:4:155";
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
                                    readonly expression: {
                                        readonly id: 38311;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "6774:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38312;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6777:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40221;
                                    readonly src: "6774:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes memory) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38314;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6774:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38310;
                                readonly name: "bold";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38243, 38258, 38273, 38288, 38303];
                                readonly referencedDeclaration: 38243;
                                readonly src: "6769:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38315;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6769:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38309;
                        readonly id: 38316;
                        readonly nodeType: "Return";
                        readonly src: "6762:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "boldBytes";
                readonly nameLocation: "6685:9:155";
                readonly parameters: {
                    readonly id: 38306;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38305;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "6708:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38318;
                        readonly src: "6695:17:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 38304;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6695:5:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6694:19:155";
                };
                readonly returnParameters: {
                    readonly id: 38309;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38308;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38318;
                        readonly src: "6737:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38307;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6737:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6736:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38333;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6805:120:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38332;
                    readonly nodeType: "Block";
                    readonly src: "6878:47:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38328;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38320;
                                    readonly src: "6912:4:155";
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
                                    readonly expression: {
                                        readonly id: 38326;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "6900:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38327;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "6903:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40228;
                                    readonly src: "6900:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes32) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38329;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6900:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38325;
                                readonly name: "bold";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38243, 38258, 38273, 38288, 38303];
                                readonly referencedDeclaration: 38243;
                                readonly src: "6895:4:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38330;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6895:23:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38324;
                        readonly id: 38331;
                        readonly nodeType: "Return";
                        readonly src: "6888:30:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "boldBytes32";
                readonly nameLocation: "6814:11:155";
                readonly parameters: {
                    readonly id: 38321;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38320;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "6834:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38333;
                        readonly src: "6826:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 38319;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6826:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6825:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38324;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38323;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38333;
                        readonly src: "6863:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38322;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6863:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6862:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38346;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6931:117:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38345;
                    readonly nodeType: "Block";
                    readonly src: "7002:46:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 38341;
                                readonly name: "DIM";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37580;
                                readonly src: "7031:3:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 38342;
                                readonly name: "self";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 38335;
                                readonly src: "7036:4:155";
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
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly id: 38340;
                                readonly name: "styleConcat";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37612;
                                readonly src: "7019:11:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38343;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7019:22:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38339;
                        readonly id: 38344;
                        readonly nodeType: "Return";
                        readonly src: "7012:29:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "dim";
                readonly nameLocation: "6940:3:155";
                readonly parameters: {
                    readonly id: 38336;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38335;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "6958:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38346;
                        readonly src: "6944:18:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38334;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6944:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6943:20:155";
                };
                readonly returnParameters: {
                    readonly id: 38339;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38338;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38346;
                        readonly src: "6987:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38337;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6987:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6986:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38361;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7054:111:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38360;
                    readonly nodeType: "Block";
                    readonly src: "7119:46:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38356;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38348;
                                    readonly src: "7152:4:155";
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
                                        readonly id: 38354;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "7140:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38355;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7143:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40242;
                                    readonly src: "7140:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (uint256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38357;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7140:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38353;
                                readonly name: "dim";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38346, 38361, 38376, 38391, 38406];
                                readonly referencedDeclaration: 38346;
                                readonly src: "7136:3:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38358;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7136:22:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38352;
                        readonly id: 38359;
                        readonly nodeType: "Return";
                        readonly src: "7129:29:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "dim";
                readonly nameLocation: "7063:3:155";
                readonly parameters: {
                    readonly id: 38349;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38348;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "7075:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38361;
                        readonly src: "7067:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 38347;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7067:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7066:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38352;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38351;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38361;
                        readonly src: "7104:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38350;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7104:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7103:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38376;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7171:110:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38375;
                    readonly nodeType: "Block";
                    readonly src: "7235:46:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38371;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38363;
                                    readonly src: "7268:4:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }];
                                    readonly expression: {
                                        readonly id: 38369;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "7256:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38370;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7259:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40249;
                                    readonly src: "7256:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (int256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38372;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7256:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38368;
                                readonly name: "dim";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38346, 38361, 38376, 38391, 38406];
                                readonly referencedDeclaration: 38346;
                                readonly src: "7252:3:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38373;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7252:22:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38367;
                        readonly id: 38374;
                        readonly nodeType: "Return";
                        readonly src: "7245:29:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "dim";
                readonly nameLocation: "7180:3:155";
                readonly parameters: {
                    readonly id: 38364;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38363;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "7191:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38376;
                        readonly src: "7184:11:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 38362;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7184:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7183:13:155";
                };
                readonly returnParameters: {
                    readonly id: 38367;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38366;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38376;
                        readonly src: "7220:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38365;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7220:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7219:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38391;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7287:111:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38390;
                    readonly nodeType: "Block";
                    readonly src: "7352:46:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38386;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38378;
                                    readonly src: "7385:4:155";
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
                                        readonly id: 38384;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "7373:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38385;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7376:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40214;
                                    readonly src: "7373:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (address) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38387;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7373:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38383;
                                readonly name: "dim";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38346, 38361, 38376, 38391, 38406];
                                readonly referencedDeclaration: 38346;
                                readonly src: "7369:3:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38388;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7369:22:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38382;
                        readonly id: 38389;
                        readonly nodeType: "Return";
                        readonly src: "7362:29:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "dim";
                readonly nameLocation: "7296:3:155";
                readonly parameters: {
                    readonly id: 38379;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38378;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "7308:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38391;
                        readonly src: "7300:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 38377;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7300:7:155";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7299:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38382;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38381;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38391;
                        readonly src: "7337:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38380;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7337:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7336:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38406;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7404:108:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38405;
                    readonly nodeType: "Block";
                    readonly src: "7466:46:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38401;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38393;
                                    readonly src: "7499:4:155";
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
                                    readonly expression: {
                                        readonly id: 38399;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "7487:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38400;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7490:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40235;
                                    readonly src: "7487:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bool) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38402;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7487:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38398;
                                readonly name: "dim";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38346, 38361, 38376, 38391, 38406];
                                readonly referencedDeclaration: 38346;
                                readonly src: "7483:3:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38403;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7483:22:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38397;
                        readonly id: 38404;
                        readonly nodeType: "Return";
                        readonly src: "7476:29:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "dim";
                readonly nameLocation: "7413:3:155";
                readonly parameters: {
                    readonly id: 38394;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38393;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "7422:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38406;
                        readonly src: "7417:9:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 38392;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7417:4:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7416:11:155";
                };
                readonly returnParameters: {
                    readonly id: 38397;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38396;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38406;
                        readonly src: "7451:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38395;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7451:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7450:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38421;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7518:121:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38420;
                    readonly nodeType: "Block";
                    readonly src: "7593:46:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38416;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38408;
                                    readonly src: "7626:4:155";
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
                                    readonly expression: {
                                        readonly id: 38414;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "7614:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38415;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7617:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40221;
                                    readonly src: "7614:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes memory) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38417;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7614:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38413;
                                readonly name: "dim";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38346, 38361, 38376, 38391, 38406];
                                readonly referencedDeclaration: 38346;
                                readonly src: "7610:3:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38418;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7610:22:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38412;
                        readonly id: 38419;
                        readonly nodeType: "Return";
                        readonly src: "7603:29:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "dimBytes";
                readonly nameLocation: "7527:8:155";
                readonly parameters: {
                    readonly id: 38409;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38408;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "7549:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38421;
                        readonly src: "7536:17:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 38407;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7536:5:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7535:19:155";
                };
                readonly returnParameters: {
                    readonly id: 38412;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38411;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38421;
                        readonly src: "7578:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38410;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7578:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7577:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38436;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7645:118:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38435;
                    readonly nodeType: "Block";
                    readonly src: "7717:46:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38431;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38423;
                                    readonly src: "7750:4:155";
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
                                    readonly expression: {
                                        readonly id: 38429;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "7738:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38430;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7741:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40228;
                                    readonly src: "7738:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes32) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38432;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7738:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38428;
                                readonly name: "dim";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38346, 38361, 38376, 38391, 38406];
                                readonly referencedDeclaration: 38346;
                                readonly src: "7734:3:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38433;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7734:22:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38427;
                        readonly id: 38434;
                        readonly nodeType: "Return";
                        readonly src: "7727:29:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "dimBytes32";
                readonly nameLocation: "7654:10:155";
                readonly parameters: {
                    readonly id: 38424;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38423;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "7673:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38436;
                        readonly src: "7665:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 38422;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7665:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7664:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38427;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38426;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38436;
                        readonly src: "7702:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38425;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7702:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7701:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38449;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7769:123:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38448;
                    readonly nodeType: "Block";
                    readonly src: "7843:49:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 38444;
                                readonly name: "ITALIC";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37583;
                                readonly src: "7872:6:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 38445;
                                readonly name: "self";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 38438;
                                readonly src: "7880:4:155";
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
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly id: 38443;
                                readonly name: "styleConcat";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37612;
                                readonly src: "7860:11:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38446;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7860:25:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38442;
                        readonly id: 38447;
                        readonly nodeType: "Return";
                        readonly src: "7853:32:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "italic";
                readonly nameLocation: "7778:6:155";
                readonly parameters: {
                    readonly id: 38439;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38438;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "7799:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38449;
                        readonly src: "7785:18:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38437;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7785:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7784:20:155";
                };
                readonly returnParameters: {
                    readonly id: 38442;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38441;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38449;
                        readonly src: "7828:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38440;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7828:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7827:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38464;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7898:117:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38463;
                    readonly nodeType: "Block";
                    readonly src: "7966:49:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38459;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38451;
                                    readonly src: "8002:4:155";
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
                                        readonly id: 38457;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "7990:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38458;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7993:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40242;
                                    readonly src: "7990:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (uint256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38460;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "7990:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38456;
                                readonly name: "italic";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38449, 38464, 38479, 38494, 38509];
                                readonly referencedDeclaration: 38449;
                                readonly src: "7983:6:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38461;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "7983:25:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38455;
                        readonly id: 38462;
                        readonly nodeType: "Return";
                        readonly src: "7976:32:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "italic";
                readonly nameLocation: "7907:6:155";
                readonly parameters: {
                    readonly id: 38452;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38451;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "7922:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38464;
                        readonly src: "7914:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 38450;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7914:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7913:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38455;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38454;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38464;
                        readonly src: "7951:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38453;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7951:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7950:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38479;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8021:116:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38478;
                    readonly nodeType: "Block";
                    readonly src: "8088:49:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38474;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38466;
                                    readonly src: "8124:4:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }];
                                    readonly expression: {
                                        readonly id: 38472;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "8112:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38473;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "8115:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40249;
                                    readonly src: "8112:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (int256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38475;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8112:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38471;
                                readonly name: "italic";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38449, 38464, 38479, 38494, 38509];
                                readonly referencedDeclaration: 38449;
                                readonly src: "8105:6:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38476;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8105:25:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38470;
                        readonly id: 38477;
                        readonly nodeType: "Return";
                        readonly src: "8098:32:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "italic";
                readonly nameLocation: "8030:6:155";
                readonly parameters: {
                    readonly id: 38467;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38466;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "8044:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38479;
                        readonly src: "8037:11:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 38465;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8037:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8036:13:155";
                };
                readonly returnParameters: {
                    readonly id: 38470;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38469;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38479;
                        readonly src: "8073:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38468;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8073:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8072:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38494;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8143:117:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38493;
                    readonly nodeType: "Block";
                    readonly src: "8211:49:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38489;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38481;
                                    readonly src: "8247:4:155";
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
                                        readonly id: 38487;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "8235:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38488;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "8238:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40214;
                                    readonly src: "8235:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (address) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38490;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8235:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38486;
                                readonly name: "italic";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38449, 38464, 38479, 38494, 38509];
                                readonly referencedDeclaration: 38449;
                                readonly src: "8228:6:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38491;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8228:25:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38485;
                        readonly id: 38492;
                        readonly nodeType: "Return";
                        readonly src: "8221:32:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "italic";
                readonly nameLocation: "8152:6:155";
                readonly parameters: {
                    readonly id: 38482;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38481;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "8167:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38494;
                        readonly src: "8159:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 38480;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8159:7:155";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8158:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38485;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38484;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38494;
                        readonly src: "8196:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38483;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8196:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8195:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38509;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8266:114:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38508;
                    readonly nodeType: "Block";
                    readonly src: "8331:49:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38504;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38496;
                                    readonly src: "8367:4:155";
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
                                    readonly expression: {
                                        readonly id: 38502;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "8355:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38503;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "8358:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40235;
                                    readonly src: "8355:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bool) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38505;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8355:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38501;
                                readonly name: "italic";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38449, 38464, 38479, 38494, 38509];
                                readonly referencedDeclaration: 38449;
                                readonly src: "8348:6:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38506;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8348:25:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38500;
                        readonly id: 38507;
                        readonly nodeType: "Return";
                        readonly src: "8341:32:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "italic";
                readonly nameLocation: "8275:6:155";
                readonly parameters: {
                    readonly id: 38497;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38496;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "8287:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38509;
                        readonly src: "8282:9:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 38495;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8282:4:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8281:11:155";
                };
                readonly returnParameters: {
                    readonly id: 38500;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38499;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38509;
                        readonly src: "8316:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38498;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8316:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8315:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38524;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8386:127:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38523;
                    readonly nodeType: "Block";
                    readonly src: "8464:49:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38519;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38511;
                                    readonly src: "8500:4:155";
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
                                    readonly expression: {
                                        readonly id: 38517;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "8488:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38518;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "8491:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40221;
                                    readonly src: "8488:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes memory) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38520;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8488:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38516;
                                readonly name: "italic";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38449, 38464, 38479, 38494, 38509];
                                readonly referencedDeclaration: 38449;
                                readonly src: "8481:6:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38521;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8481:25:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38515;
                        readonly id: 38522;
                        readonly nodeType: "Return";
                        readonly src: "8474:32:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "italicBytes";
                readonly nameLocation: "8395:11:155";
                readonly parameters: {
                    readonly id: 38512;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38511;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "8420:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38524;
                        readonly src: "8407:17:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 38510;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8407:5:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8406:19:155";
                };
                readonly returnParameters: {
                    readonly id: 38515;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38514;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38524;
                        readonly src: "8449:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38513;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8449:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8448:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38539;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8519:124:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38538;
                    readonly nodeType: "Block";
                    readonly src: "8594:49:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38534;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38526;
                                    readonly src: "8630:4:155";
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
                                    readonly expression: {
                                        readonly id: 38532;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "8618:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38533;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "8621:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40228;
                                    readonly src: "8618:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes32) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38535;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8618:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38531;
                                readonly name: "italic";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38449, 38464, 38479, 38494, 38509];
                                readonly referencedDeclaration: 38449;
                                readonly src: "8611:6:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38536;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8611:25:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38530;
                        readonly id: 38537;
                        readonly nodeType: "Return";
                        readonly src: "8604:32:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "italicBytes32";
                readonly nameLocation: "8528:13:155";
                readonly parameters: {
                    readonly id: 38527;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38526;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "8550:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38539;
                        readonly src: "8542:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 38525;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8542:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8541:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38530;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38529;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38539;
                        readonly src: "8579:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38528;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8579:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8578:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38552;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8649:129:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38551;
                    readonly nodeType: "Block";
                    readonly src: "8726:52:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 38547;
                                readonly name: "UNDERLINE";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37586;
                                readonly src: "8755:9:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 38548;
                                readonly name: "self";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 38541;
                                readonly src: "8766:4:155";
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
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly id: 38546;
                                readonly name: "styleConcat";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37612;
                                readonly src: "8743:11:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38549;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8743:28:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38545;
                        readonly id: 38550;
                        readonly nodeType: "Return";
                        readonly src: "8736:35:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "underline";
                readonly nameLocation: "8658:9:155";
                readonly parameters: {
                    readonly id: 38542;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38541;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "8682:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38552;
                        readonly src: "8668:18:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38540;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8668:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8667:20:155";
                };
                readonly returnParameters: {
                    readonly id: 38545;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38544;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38552;
                        readonly src: "8711:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38543;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8711:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8710:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38567;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8784:123:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38566;
                    readonly nodeType: "Block";
                    readonly src: "8855:52:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38562;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38554;
                                    readonly src: "8894:4:155";
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
                                        readonly id: 38560;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "8882:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38561;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "8885:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40242;
                                    readonly src: "8882:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (uint256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38563;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8882:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38559;
                                readonly name: "underline";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38552, 38567, 38582, 38597, 38612];
                                readonly referencedDeclaration: 38552;
                                readonly src: "8872:9:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38564;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8872:28:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38558;
                        readonly id: 38565;
                        readonly nodeType: "Return";
                        readonly src: "8865:35:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "underline";
                readonly nameLocation: "8793:9:155";
                readonly parameters: {
                    readonly id: 38555;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38554;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "8811:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38567;
                        readonly src: "8803:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 38553;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8803:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8802:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38558;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38557;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38567;
                        readonly src: "8840:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38556;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8840:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8839:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38582;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8913:122:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38581;
                    readonly nodeType: "Block";
                    readonly src: "8983:52:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38577;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38569;
                                    readonly src: "9022:4:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }];
                                    readonly expression: {
                                        readonly id: 38575;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "9010:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38576;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "9013:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40249;
                                    readonly src: "9010:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (int256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38578;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9010:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38574;
                                readonly name: "underline";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38552, 38567, 38582, 38597, 38612];
                                readonly referencedDeclaration: 38552;
                                readonly src: "9000:9:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38579;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9000:28:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38573;
                        readonly id: 38580;
                        readonly nodeType: "Return";
                        readonly src: "8993:35:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "underline";
                readonly nameLocation: "8922:9:155";
                readonly parameters: {
                    readonly id: 38570;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38569;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "8939:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38582;
                        readonly src: "8932:11:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 38568;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8932:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8931:13:155";
                };
                readonly returnParameters: {
                    readonly id: 38573;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38572;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38582;
                        readonly src: "8968:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38571;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8968:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8967:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38597;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9041:123:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38596;
                    readonly nodeType: "Block";
                    readonly src: "9112:52:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38592;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38584;
                                    readonly src: "9151:4:155";
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
                                        readonly id: 38590;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "9139:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38591;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "9142:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40214;
                                    readonly src: "9139:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (address) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38593;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9139:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38589;
                                readonly name: "underline";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38552, 38567, 38582, 38597, 38612];
                                readonly referencedDeclaration: 38552;
                                readonly src: "9129:9:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38594;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9129:28:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38588;
                        readonly id: 38595;
                        readonly nodeType: "Return";
                        readonly src: "9122:35:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "underline";
                readonly nameLocation: "9050:9:155";
                readonly parameters: {
                    readonly id: 38585;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38584;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "9068:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38597;
                        readonly src: "9060:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 38583;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9060:7:155";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9059:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38588;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38587;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38597;
                        readonly src: "9097:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38586;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9097:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9096:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38612;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9170:120:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38611;
                    readonly nodeType: "Block";
                    readonly src: "9238:52:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38607;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38599;
                                    readonly src: "9277:4:155";
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
                                    readonly expression: {
                                        readonly id: 38605;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "9265:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38606;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "9268:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40235;
                                    readonly src: "9265:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bool) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38608;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9265:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38604;
                                readonly name: "underline";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38552, 38567, 38582, 38597, 38612];
                                readonly referencedDeclaration: 38552;
                                readonly src: "9255:9:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38609;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9255:28:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38603;
                        readonly id: 38610;
                        readonly nodeType: "Return";
                        readonly src: "9248:35:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "underline";
                readonly nameLocation: "9179:9:155";
                readonly parameters: {
                    readonly id: 38600;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38599;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "9194:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38612;
                        readonly src: "9189:9:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 38598;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9189:4:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9188:11:155";
                };
                readonly returnParameters: {
                    readonly id: 38603;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38602;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38612;
                        readonly src: "9223:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38601;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9223:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9222:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38627;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9296:133:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38626;
                    readonly nodeType: "Block";
                    readonly src: "9377:52:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38622;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38614;
                                    readonly src: "9416:4:155";
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
                                    readonly expression: {
                                        readonly id: 38620;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "9404:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38621;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "9407:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40221;
                                    readonly src: "9404:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes memory) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38623;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9404:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38619;
                                readonly name: "underline";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38552, 38567, 38582, 38597, 38612];
                                readonly referencedDeclaration: 38552;
                                readonly src: "9394:9:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38624;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9394:28:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38618;
                        readonly id: 38625;
                        readonly nodeType: "Return";
                        readonly src: "9387:35:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "underlineBytes";
                readonly nameLocation: "9305:14:155";
                readonly parameters: {
                    readonly id: 38615;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38614;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "9333:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38627;
                        readonly src: "9320:17:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 38613;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9320:5:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9319:19:155";
                };
                readonly returnParameters: {
                    readonly id: 38618;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38617;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38627;
                        readonly src: "9362:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38616;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9362:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9361:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38642;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9435:130:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38641;
                    readonly nodeType: "Block";
                    readonly src: "9513:52:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38637;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38629;
                                    readonly src: "9552:4:155";
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
                                    readonly expression: {
                                        readonly id: 38635;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "9540:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38636;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "9543:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40228;
                                    readonly src: "9540:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes32) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38638;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9540:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38634;
                                readonly name: "underline";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38552, 38567, 38582, 38597, 38612];
                                readonly referencedDeclaration: 38552;
                                readonly src: "9530:9:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38639;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9530:28:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38633;
                        readonly id: 38640;
                        readonly nodeType: "Return";
                        readonly src: "9523:35:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "underlineBytes32";
                readonly nameLocation: "9444:16:155";
                readonly parameters: {
                    readonly id: 38630;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38629;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "9469:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38642;
                        readonly src: "9461:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 38628;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9461:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9460:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38633;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38632;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38642;
                        readonly src: "9498:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38631;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9498:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9497:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38655;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9571:125:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38654;
                    readonly nodeType: "Block";
                    readonly src: "9646:50:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 38650;
                                readonly name: "INVERSE";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37589;
                                readonly src: "9675:7:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 38651;
                                readonly name: "self";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 38644;
                                readonly src: "9684:4:155";
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
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly id: 38649;
                                readonly name: "styleConcat";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 37612;
                                readonly src: "9663:11:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38652;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9663:26:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38648;
                        readonly id: 38653;
                        readonly nodeType: "Return";
                        readonly src: "9656:33:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "inverse";
                readonly nameLocation: "9580:7:155";
                readonly parameters: {
                    readonly id: 38645;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38644;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "9602:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38655;
                        readonly src: "9588:18:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38643;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9588:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9587:20:155";
                };
                readonly returnParameters: {
                    readonly id: 38648;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38647;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38655;
                        readonly src: "9631:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38646;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9631:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9630:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38670;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9702:119:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38669;
                    readonly nodeType: "Block";
                    readonly src: "9771:50:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38665;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38657;
                                    readonly src: "9808:4:155";
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
                                        readonly id: 38663;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "9796:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38664;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "9799:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40242;
                                    readonly src: "9796:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (uint256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38666;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9796:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38662;
                                readonly name: "inverse";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38655, 38670, 38685, 38700, 38715];
                                readonly referencedDeclaration: 38655;
                                readonly src: "9788:7:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38667;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9788:26:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38661;
                        readonly id: 38668;
                        readonly nodeType: "Return";
                        readonly src: "9781:33:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "inverse";
                readonly nameLocation: "9711:7:155";
                readonly parameters: {
                    readonly id: 38658;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38657;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "9727:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38670;
                        readonly src: "9719:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 38656;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9719:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9718:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38661;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38660;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38670;
                        readonly src: "9756:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38659;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9756:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9755:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38685;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9827:118:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38684;
                    readonly nodeType: "Block";
                    readonly src: "9895:50:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38680;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38672;
                                    readonly src: "9932:4:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    }];
                                    readonly expression: {
                                        readonly id: 38678;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "9920:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38679;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "9923:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40249;
                                    readonly src: "9920:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (int256) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38681;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9920:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38677;
                                readonly name: "inverse";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38655, 38670, 38685, 38700, 38715];
                                readonly referencedDeclaration: 38655;
                                readonly src: "9912:7:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38682;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9912:26:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38676;
                        readonly id: 38683;
                        readonly nodeType: "Return";
                        readonly src: "9905:33:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "inverse";
                readonly nameLocation: "9836:7:155";
                readonly parameters: {
                    readonly id: 38673;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38672;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "9851:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38685;
                        readonly src: "9844:11:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 38671;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9844:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9843:13:155";
                };
                readonly returnParameters: {
                    readonly id: 38676;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38675;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38685;
                        readonly src: "9880:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38674;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9880:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9879:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38700;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9951:119:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38699;
                    readonly nodeType: "Block";
                    readonly src: "10020:50:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38695;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38687;
                                    readonly src: "10057:4:155";
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
                                        readonly id: 38693;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "10045:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38694;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10048:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40214;
                                    readonly src: "10045:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_address_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (address) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38696;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10045:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38692;
                                readonly name: "inverse";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38655, 38670, 38685, 38700, 38715];
                                readonly referencedDeclaration: 38655;
                                readonly src: "10037:7:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38697;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10037:26:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38691;
                        readonly id: 38698;
                        readonly nodeType: "Return";
                        readonly src: "10030:33:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "inverse";
                readonly nameLocation: "9960:7:155";
                readonly parameters: {
                    readonly id: 38688;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38687;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "9976:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38700;
                        readonly src: "9968:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 38686;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9968:7:155";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9967:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38691;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38690;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38700;
                        readonly src: "10005:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38689;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10005:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10004:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38715;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10076:116:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38714;
                    readonly nodeType: "Block";
                    readonly src: "10142:50:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38710;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38702;
                                    readonly src: "10179:4:155";
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
                                    readonly expression: {
                                        readonly id: 38708;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "10167:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38709;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10170:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40235;
                                    readonly src: "10167:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bool_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bool) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38711;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10167:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38707;
                                readonly name: "inverse";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38655, 38670, 38685, 38700, 38715];
                                readonly referencedDeclaration: 38655;
                                readonly src: "10159:7:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38712;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10159:26:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38706;
                        readonly id: 38713;
                        readonly nodeType: "Return";
                        readonly src: "10152:33:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "inverse";
                readonly nameLocation: "10085:7:155";
                readonly parameters: {
                    readonly id: 38703;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38702;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "10098:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38715;
                        readonly src: "10093:9:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 38701;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10093:4:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10092:11:155";
                };
                readonly returnParameters: {
                    readonly id: 38706;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38705;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38715;
                        readonly src: "10127:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38704;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10127:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10126:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38730;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10198:129:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38729;
                    readonly nodeType: "Block";
                    readonly src: "10277:50:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38725;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38717;
                                    readonly src: "10314:4:155";
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
                                    readonly expression: {
                                        readonly id: 38723;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "10302:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38724;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10305:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40221;
                                    readonly src: "10302:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes memory) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38726;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10302:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38722;
                                readonly name: "inverse";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38655, 38670, 38685, 38700, 38715];
                                readonly referencedDeclaration: 38655;
                                readonly src: "10294:7:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38727;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10294:26:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38721;
                        readonly id: 38728;
                        readonly nodeType: "Return";
                        readonly src: "10287:33:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "inverseBytes";
                readonly nameLocation: "10207:12:155";
                readonly parameters: {
                    readonly id: 38718;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38717;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "10233:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38730;
                        readonly src: "10220:17:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 38716;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10220:5:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10219:19:155";
                };
                readonly returnParameters: {
                    readonly id: 38721;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38720;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38730;
                        readonly src: "10262:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38719;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10262:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10261:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 38745;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10333:126:155";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 38744;
                    readonly nodeType: "Block";
                    readonly src: "10409:50:155";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 38740;
                                    readonly name: "self";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 38732;
                                    readonly src: "10446:4:155";
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
                                    readonly expression: {
                                        readonly id: 38738;
                                        readonly name: "vm";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 37556;
                                        readonly src: "10434:2:155";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_VmSafe_$40710";
                                            readonly typeString: "contract VmSafe";
                                        };
                                    };
                                    readonly id: 38739;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10437:8:155";
                                    readonly memberName: "toString";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 40228;
                                    readonly src: "10434:11:155";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_pure$_t_bytes32_$returns$_t_string_memory_ptr_$";
                                        readonly typeString: "function (bytes32) pure external returns (string memory)";
                                    };
                                };
                                readonly id: 38741;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10434:17:155";
                                readonly tryCall: false;
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
                                readonly id: 38737;
                                readonly name: "inverse";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [38655, 38670, 38685, 38700, 38715];
                                readonly referencedDeclaration: 38655;
                                readonly src: "10426:7:155";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory) pure returns (string memory)";
                                };
                            };
                            readonly id: 38742;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10426:26:155";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 38736;
                        readonly id: 38743;
                        readonly nodeType: "Return";
                        readonly src: "10419:33:155";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "inverseBytes32";
                readonly nameLocation: "10342:14:155";
                readonly parameters: {
                    readonly id: 38733;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38732;
                        readonly mutability: "mutable";
                        readonly name: "self";
                        readonly nameLocation: "10365:4:155";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38745;
                        readonly src: "10357:12:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 38731;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10357:7:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10356:14:155";
                };
                readonly returnParameters: {
                    readonly id: 38736;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 38735;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 38745;
                        readonly src: "10394:13:155";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 38734;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10394:6:155";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10393:15:155";
                };
                readonly scope: 38746;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "StdStyle";
            readonly contractDependencies: readonly [];
            readonly contractKind: "library";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [38746];
            readonly name: "StdStyle";
            readonly nameLocation: "108:8:155";
            readonly scope: 38747;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 155;
};
//# sourceMappingURL=StdStyle.d.ts.map