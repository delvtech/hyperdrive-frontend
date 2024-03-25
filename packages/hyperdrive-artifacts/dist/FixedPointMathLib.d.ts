export declare const FixedPointMathLib: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207833532335256498efdbb7d8373135640993cd82a007b563f92be27d6ba4d9c364736f6c63430008140033";
        readonly sourceMap: "341:9712:180:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;341:9712:180;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207833532335256498efdbb7d8373135640993cd82a007b563f92be27d6ba4d9c364736f6c63430008140033";
        readonly sourceMap: "341:9712:180:-:0;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)Inspired by USM (https://github.com/usmfum/USM/blob/master/contracts/WadMath.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Arithmetic library with operations for fixed-point numbers.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/utils/FixedPointMathLib.sol\":\"FixedPointMathLib\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/solmate/src/utils/FixedPointMathLib.sol\":{\"keccak256\":\"0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9\",\"dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi\"]}},\"version\":1}";
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
                readonly "lib/solmate/src/utils/FixedPointMathLib.sol": "FixedPointMathLib";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/solmate/src/utils/FixedPointMathLib.sol": {
                readonly keccak256: "0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843";
                readonly urls: readonly ["bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9", "dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi"];
                readonly license: "AGPL-3.0-only";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/solmate/src/utils/FixedPointMathLib.sol";
        readonly id: 73719;
        readonly exportedSymbols: {
            readonly FixedPointMathLib: readonly [73718];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "42:10012:180";
        readonly nodes: readonly [{
            readonly id: 73561;
            readonly nodeType: "PragmaDirective";
            readonly src: "42:24:180";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.8", ".0"];
        }, {
            readonly id: 73718;
            readonly nodeType: "ContractDefinition";
            readonly src: "341:9712:180";
            readonly nodes: readonly [{
                readonly id: 73569;
                readonly nodeType: "VariableDeclaration";
                readonly src: "566:50:180";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_UINT256";
                readonly nameLocation: "592:11:180";
                readonly scope: 73718;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73563;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "566:7:180";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly commonType: {
                        readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1";
                        readonly typeString: "int_const 1157...(70 digits omitted)...9935";
                    };
                    readonly id: 73568;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly lValueRequested: false;
                    readonly leftExpression: {
                        readonly commonType: {
                            readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1";
                            readonly typeString: "int_const 1157...(70 digits omitted)...9936";
                        };
                        readonly id: 73566;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly lValueRequested: false;
                        readonly leftExpression: {
                            readonly hexValue: "32";
                            readonly id: 73564;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "606:1:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_2_by_1";
                                readonly typeString: "int_const 2";
                            };
                            readonly value: "2";
                        };
                        readonly nodeType: "BinaryOperation";
                        readonly operator: "**";
                        readonly rightExpression: {
                            readonly hexValue: "323536";
                            readonly id: 73565;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "609:3:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_256_by_1";
                                readonly typeString: "int_const 256";
                            };
                            readonly value: "256";
                        };
                        readonly src: "606:6:180";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1";
                            readonly typeString: "int_const 1157...(70 digits omitted)...9936";
                        };
                    };
                    readonly nodeType: "BinaryOperation";
                    readonly operator: "-";
                    readonly rightExpression: {
                        readonly hexValue: "31";
                        readonly id: 73567;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "number";
                        readonly lValueRequested: false;
                        readonly nodeType: "Literal";
                        readonly src: "615:1:180";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_rational_1_by_1";
                            readonly typeString: "int_const 1";
                        };
                        readonly value: "1";
                    };
                    readonly src: "606:10:180";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1";
                        readonly typeString: "int_const 1157...(70 digits omitted)...9935";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73572;
                readonly nodeType: "VariableDeclaration";
                readonly src: "623:36:180";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "WAD";
                readonly nameLocation: "649:3:180";
                readonly scope: 73718;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73570;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "623:7:180";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "31653138";
                    readonly id: 73571;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "655:4:180";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                        readonly typeString: "int_const 1000000000000000000";
                    };
                    readonly value: "1e18";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73588;
                readonly nodeType: "FunctionDefinition";
                readonly src: "704:164:180";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73587;
                    readonly nodeType: "Block";
                    readonly src: "778:90:180";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 73582;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73574;
                                readonly src: "806:1:180";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 73583;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73576;
                                readonly src: "809:1:180";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 73584;
                                readonly name: "WAD";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73572;
                                readonly src: "812:3:180";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 73581;
                                readonly name: "mulDivDown";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73649;
                                readonly src: "795:10:180";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 73585;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "795:21:180";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 73580;
                        readonly id: 73586;
                        readonly nodeType: "Return";
                        readonly src: "788:28:180";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulWadDown";
                readonly nameLocation: "713:10:180";
                readonly parameters: {
                    readonly id: 73577;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73574;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "732:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73588;
                        readonly src: "724:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73573;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "724:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73576;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "743:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73588;
                        readonly src: "735:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73575;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "735:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "723:22:180";
                };
                readonly returnParameters: {
                    readonly id: 73580;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73579;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73588;
                        readonly src: "769:7:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73578;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "769:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "768:9:180";
                };
                readonly scope: 73718;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73604;
                readonly nodeType: "FunctionDefinition";
                readonly src: "874:158:180";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73603;
                    readonly nodeType: "Block";
                    readonly src: "946:86:180";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 73598;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73590;
                                readonly src: "972:1:180";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 73599;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73592;
                                readonly src: "975:1:180";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 73600;
                                readonly name: "WAD";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73572;
                                readonly src: "978:3:180";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 73597;
                                readonly name: "mulDivUp";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73662;
                                readonly src: "963:8:180";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 73601;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "963:19:180";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 73596;
                        readonly id: 73602;
                        readonly nodeType: "Return";
                        readonly src: "956:26:180";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulWadUp";
                readonly nameLocation: "883:8:180";
                readonly parameters: {
                    readonly id: 73593;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73590;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "900:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73604;
                        readonly src: "892:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73589;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "892:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73592;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "911:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73604;
                        readonly src: "903:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73591;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "903:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "891:22:180";
                };
                readonly returnParameters: {
                    readonly id: 73596;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73595;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73604;
                        readonly src: "937:7:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73594;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "937:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "936:9:180";
                };
                readonly scope: 73718;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73620;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1038:164:180";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73619;
                    readonly nodeType: "Block";
                    readonly src: "1112:90:180";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 73614;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73606;
                                readonly src: "1140:1:180";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 73615;
                                readonly name: "WAD";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73572;
                                readonly src: "1143:3:180";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 73616;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73608;
                                readonly src: "1148:1:180";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 73613;
                                readonly name: "mulDivDown";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73649;
                                readonly src: "1129:10:180";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 73617;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1129:21:180";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 73612;
                        readonly id: 73618;
                        readonly nodeType: "Return";
                        readonly src: "1122:28:180";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "divWadDown";
                readonly nameLocation: "1047:10:180";
                readonly parameters: {
                    readonly id: 73609;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73606;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "1066:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73620;
                        readonly src: "1058:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73605;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1058:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73608;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "1077:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73620;
                        readonly src: "1069:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73607;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1069:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1057:22:180";
                };
                readonly returnParameters: {
                    readonly id: 73612;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73611;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73620;
                        readonly src: "1103:7:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73610;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1103:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1102:9:180";
                };
                readonly scope: 73718;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73636;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1208:158:180";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73635;
                    readonly nodeType: "Block";
                    readonly src: "1280:86:180";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 73630;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73622;
                                readonly src: "1306:1:180";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 73631;
                                readonly name: "WAD";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73572;
                                readonly src: "1309:3:180";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 73632;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73624;
                                readonly src: "1314:1:180";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 73629;
                                readonly name: "mulDivUp";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73662;
                                readonly src: "1297:8:180";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 73633;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1297:19:180";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 73628;
                        readonly id: 73634;
                        readonly nodeType: "Return";
                        readonly src: "1290:26:180";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "divWadUp";
                readonly nameLocation: "1217:8:180";
                readonly parameters: {
                    readonly id: 73625;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73622;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "1234:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73636;
                        readonly src: "1226:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73621;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1226:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73624;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "1245:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73636;
                        readonly src: "1237:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73623;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1237:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1225:22:180";
                };
                readonly returnParameters: {
                    readonly id: 73628;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73627;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73636;
                        readonly src: "1271:7:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73626;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1271:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1270:9:180";
                };
                readonly scope: 73718;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73649;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1564:526:180";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73648;
                    readonly nodeType: "Block";
                    readonly src: "1691:399:180";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "1753:331:180";
                            readonly statements: readonly [{
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "1936:44:180";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "1961:1:180";
                                                readonly type: "";
                                                readonly value: "0";
                                            }, {
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "1964:1:180";
                                                readonly type: "";
                                                readonly value: "0";
                                            }];
                                            readonly functionName: {
                                                readonly name: "revert";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "1954:6:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "1954:12:180";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "1954:12:180";
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "denominator";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1878:11:180";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "y";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "1902:1:180";
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly name: "x";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "1908:1:180";
                                                    }, {
                                                        readonly arguments: readonly [{
                                                            readonly name: "MAX_UINT256";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "1915:11:180";
                                                        }, {
                                                            readonly name: "y";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "1928:1:180";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "div";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "1911:3:180";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "1911:19:180";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "gt";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "1905:2:180";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "1905:26:180";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mul";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "1898:3:180";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "1898:34:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "iszero";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "1891:6:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "1891:42:180";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mul";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1874:3:180";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "1874:60:180";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1867:6:180";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1867:68:180";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "1864:116:180";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "2042:32:180";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "x";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2055:1:180";
                                        }, {
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2058:1:180";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mul";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2051:3:180";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2051:9:180";
                                    }, {
                                        readonly name: "denominator";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2062:11:180";
                                    }];
                                    readonly functionName: {
                                        readonly name: "div";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2047:3:180";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2047:27:180";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2042:1:180";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73569;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1915:11:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73642;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1878:11:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73642;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2062:11:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73638;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1908:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73638;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2055:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73640;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1902:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73640;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1928:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73640;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2058:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73645;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2042:1:180";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73647;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "1744:340:180";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulDivDown";
                readonly nameLocation: "1573:10:180";
                readonly parameters: {
                    readonly id: 73643;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73638;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "1601:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73649;
                        readonly src: "1593:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73637;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1593:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73640;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "1620:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73649;
                        readonly src: "1612:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73639;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1612:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73642;
                        readonly mutability: "mutable";
                        readonly name: "denominator";
                        readonly nameLocation: "1639:11:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73649;
                        readonly src: "1631:19:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73641;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1631:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1583:73:180";
                };
                readonly returnParameters: {
                    readonly id: 73646;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73645;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "1688:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73649;
                        readonly src: "1680:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73644;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1680:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1679:11:180";
                };
                readonly scope: 73718;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73662;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2096:672:180";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73661;
                    readonly nodeType: "Block";
                    readonly src: "2221:547:180";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "2283:479:180";
                            readonly statements: readonly [{
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "2466:44:180";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "2491:1:180";
                                                readonly type: "";
                                                readonly value: "0";
                                            }, {
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "2494:1:180";
                                                readonly type: "";
                                                readonly value: "0";
                                            }];
                                            readonly functionName: {
                                                readonly name: "revert";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2484:6:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2484:12:180";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "2484:12:180";
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "denominator";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2408:11:180";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "y";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2432:1:180";
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly name: "x";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "2438:1:180";
                                                    }, {
                                                        readonly arguments: readonly [{
                                                            readonly name: "MAX_UINT256";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "2445:11:180";
                                                        }, {
                                                            readonly name: "y";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "2458:1:180";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "div";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "2441:3:180";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "2441:19:180";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "gt";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "2435:2:180";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "2435:26:180";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mul";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2428:3:180";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "2428:34:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "iszero";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2421:6:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2421:42:180";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mul";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2404:3:180";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2404:60:180";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2397:6:180";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2397:68:180";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "2394:116:180";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "2679:73:180";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "x";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2699:1:180";
                                                }, {
                                                    readonly name: "y";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2702:1:180";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mul";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2695:3:180";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "2695:9:180";
                                            }, {
                                                readonly name: "denominator";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2706:11:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "mod";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2691:3:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2691:27:180";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "2720:1:180";
                                            readonly type: "";
                                            readonly value: "0";
                                        }];
                                        readonly functionName: {
                                            readonly name: "gt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2688:2:180";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2688:34:180";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2732:1:180";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2735:1:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "mul";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2728:3:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2728:9:180";
                                        }, {
                                            readonly name: "denominator";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2739:11:180";
                                        }];
                                        readonly functionName: {
                                            readonly name: "div";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2724:3:180";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2724:27:180";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2684:3:180";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2684:68:180";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2679:1:180";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73569;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2445:11:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73655;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2408:11:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73655;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2706:11:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73655;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2739:11:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73651;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2438:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73651;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2699:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73651;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2732:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73653;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2432:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73653;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2458:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73653;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2702:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73653;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2735:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73658;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2679:1:180";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73660;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "2274:488:180";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulDivUp";
                readonly nameLocation: "2105:8:180";
                readonly parameters: {
                    readonly id: 73656;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73651;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "2131:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73662;
                        readonly src: "2123:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73650;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2123:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73653;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "2150:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73662;
                        readonly src: "2142:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73652;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2142:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73655;
                        readonly mutability: "mutable";
                        readonly name: "denominator";
                        readonly nameLocation: "2169:11:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73662;
                        readonly src: "2161:19:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73654;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2161:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2113:73:180";
                };
                readonly returnParameters: {
                    readonly id: 73659;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73658;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "2218:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73662;
                        readonly src: "2210:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73657;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2210:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2209:11:180";
                };
                readonly scope: 73718;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73675;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2774:2778:180";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73674;
                    readonly nodeType: "Block";
                    readonly src: "2890:2662:180";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "2952:2594:180";
                            readonly statements: readonly [{
                                readonly cases: readonly [{
                                    readonly body: {
                                        readonly nodeType: "YulBlock";
                                        readonly src: "2994:254:180";
                                        readonly statements: readonly [{
                                            readonly cases: readonly [{
                                                readonly body: {
                                                    readonly nodeType: "YulBlock";
                                                    readonly src: "3044:85:180";
                                                    readonly statements: readonly [{
                                                        readonly nodeType: "YulAssignment";
                                                        readonly src: "3100:11:180";
                                                        readonly value: {
                                                            readonly name: "scalar";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3105:6:180";
                                                        };
                                                        readonly variableNames: readonly [{
                                                            readonly name: "z";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3100:1:180";
                                                        }];
                                                    }];
                                                };
                                                readonly nodeType: "YulCase";
                                                readonly src: "3037:92:180";
                                                readonly value: {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "3042:1:180";
                                                    readonly type: "";
                                                    readonly value: "0";
                                                };
                                            }, {
                                                readonly body: {
                                                    readonly nodeType: "YulBlock";
                                                    readonly src: "3154:80:180";
                                                    readonly statements: readonly [{
                                                        readonly nodeType: "YulAssignment";
                                                        readonly src: "3210:6:180";
                                                        readonly value: {
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "3215:1:180";
                                                            readonly type: "";
                                                            readonly value: "0";
                                                        };
                                                        readonly variableNames: readonly [{
                                                            readonly name: "z";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3210:1:180";
                                                        }];
                                                    }];
                                                };
                                                readonly nodeType: "YulCase";
                                                readonly src: "3146:88:180";
                                                readonly value: "default";
                                            }];
                                            readonly expression: {
                                                readonly name: "n";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3019:1:180";
                                            };
                                            readonly nodeType: "YulSwitch";
                                            readonly src: "3012:222:180";
                                        }];
                                    };
                                    readonly nodeType: "YulCase";
                                    readonly src: "2987:261:180";
                                    readonly value: {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "2992:1:180";
                                        readonly type: "";
                                        readonly value: "0";
                                    };
                                }, {
                                    readonly body: {
                                        readonly nodeType: "YulBlock";
                                        readonly src: "3269:2267:180";
                                        readonly statements: readonly [{
                                            readonly cases: readonly [{
                                                readonly body: {
                                                    readonly nodeType: "YulBlock";
                                                    readonly src: "3327:115:180";
                                                    readonly statements: readonly [{
                                                        readonly nodeType: "YulAssignment";
                                                        readonly src: "3413:11:180";
                                                        readonly value: {
                                                            readonly name: "scalar";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3418:6:180";
                                                        };
                                                        readonly variableNames: readonly [{
                                                            readonly name: "z";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3413:1:180";
                                                        }];
                                                    }];
                                                };
                                                readonly nodeType: "YulCase";
                                                readonly src: "3320:122:180";
                                                readonly value: {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "3325:1:180";
                                                    readonly type: "";
                                                    readonly value: "0";
                                                };
                                            }, {
                                                readonly body: {
                                                    readonly nodeType: "YulBlock";
                                                    readonly src: "3467:104:180";
                                                    readonly statements: readonly [{
                                                        readonly nodeType: "YulAssignment";
                                                        readonly src: "3547:6:180";
                                                        readonly value: {
                                                            readonly name: "x";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3552:1:180";
                                                        };
                                                        readonly variableNames: readonly [{
                                                            readonly name: "z";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3547:1:180";
                                                        }];
                                                    }];
                                                };
                                                readonly nodeType: "YulCase";
                                                readonly src: "3459:112:180";
                                                readonly value: "default";
                                            }];
                                            readonly expression: {
                                                readonly arguments: readonly [{
                                                    readonly name: "n";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3298:1:180";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "3301:1:180";
                                                    readonly type: "";
                                                    readonly value: "2";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mod";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3294:3:180";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "3294:9:180";
                                            };
                                            readonly nodeType: "YulSwitch";
                                            readonly src: "3287:284:180";
                                        }, {
                                            readonly nodeType: "YulVariableDeclaration";
                                            readonly src: "3651:26:180";
                                            readonly value: {
                                                readonly arguments: readonly [{
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "3667:1:180";
                                                    readonly type: "";
                                                    readonly value: "1";
                                                }, {
                                                    readonly name: "scalar";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3670:6:180";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "shr";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3663:3:180";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "3663:14:180";
                                            };
                                            readonly variables: readonly [{
                                                readonly name: "half";
                                                readonly nodeType: "YulTypedName";
                                                readonly src: "3655:4:180";
                                                readonly type: "";
                                            }];
                                        }, {
                                            readonly body: {
                                                readonly nodeType: "YulBlock";
                                                readonly src: "3951:1571:180";
                                                readonly statements: readonly [{
                                                    readonly body: {
                                                        readonly nodeType: "YulBlock";
                                                        readonly src: "4125:60:180";
                                                        readonly statements: readonly [{
                                                            readonly expression: {
                                                                readonly arguments: readonly [{
                                                                    readonly kind: "number";
                                                                    readonly nodeType: "YulLiteral";
                                                                    readonly src: "4158:1:180";
                                                                    readonly type: "";
                                                                    readonly value: "0";
                                                                }, {
                                                                    readonly kind: "number";
                                                                    readonly nodeType: "YulLiteral";
                                                                    readonly src: "4161:1:180";
                                                                    readonly type: "";
                                                                    readonly value: "0";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "revert";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4151:6:180";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "4151:12:180";
                                                            };
                                                            readonly nodeType: "YulExpressionStatement";
                                                            readonly src: "4151:12:180";
                                                        }];
                                                    };
                                                    readonly condition: {
                                                        readonly arguments: readonly [{
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "4117:3:180";
                                                            readonly type: "";
                                                            readonly value: "128";
                                                        }, {
                                                            readonly name: "x";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4122:1:180";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "shr";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4113:3:180";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4113:11:180";
                                                    };
                                                    readonly nodeType: "YulIf";
                                                    readonly src: "4110:75:180";
                                                }, {
                                                    readonly nodeType: "YulVariableDeclaration";
                                                    readonly src: "4247:19:180";
                                                    readonly value: {
                                                        readonly arguments: readonly [{
                                                            readonly name: "x";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4261:1:180";
                                                        }, {
                                                            readonly name: "x";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4264:1:180";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "mul";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4257:3:180";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4257:9:180";
                                                    };
                                                    readonly variables: readonly [{
                                                        readonly name: "xx";
                                                        readonly nodeType: "YulTypedName";
                                                        readonly src: "4251:2:180";
                                                        readonly type: "";
                                                    }];
                                                }, {
                                                    readonly nodeType: "YulVariableDeclaration";
                                                    readonly src: "4340:28:180";
                                                    readonly value: {
                                                        readonly arguments: readonly [{
                                                            readonly name: "xx";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4359:2:180";
                                                        }, {
                                                            readonly name: "half";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4363:4:180";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "add";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4355:3:180";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4355:13:180";
                                                    };
                                                    readonly variables: readonly [{
                                                        readonly name: "xxRound";
                                                        readonly nodeType: "YulTypedName";
                                                        readonly src: "4344:7:180";
                                                        readonly type: "";
                                                    }];
                                                }, {
                                                    readonly body: {
                                                        readonly nodeType: "YulBlock";
                                                        readonly src: "4464:60:180";
                                                        readonly statements: readonly [{
                                                            readonly expression: {
                                                                readonly arguments: readonly [{
                                                                    readonly kind: "number";
                                                                    readonly nodeType: "YulLiteral";
                                                                    readonly src: "4497:1:180";
                                                                    readonly type: "";
                                                                    readonly value: "0";
                                                                }, {
                                                                    readonly kind: "number";
                                                                    readonly nodeType: "YulLiteral";
                                                                    readonly src: "4500:1:180";
                                                                    readonly type: "";
                                                                    readonly value: "0";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "revert";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4490:6:180";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "4490:12:180";
                                                            };
                                                            readonly nodeType: "YulExpressionStatement";
                                                            readonly src: "4490:12:180";
                                                        }];
                                                    };
                                                    readonly condition: {
                                                        readonly arguments: readonly [{
                                                            readonly name: "xxRound";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4451:7:180";
                                                        }, {
                                                            readonly name: "xx";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4460:2:180";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "lt";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4448:2:180";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4448:15:180";
                                                    };
                                                    readonly nodeType: "YulIf";
                                                    readonly src: "4445:79:180";
                                                }, {
                                                    readonly nodeType: "YulAssignment";
                                                    readonly src: "4594:25:180";
                                                    readonly value: {
                                                        readonly arguments: readonly [{
                                                            readonly name: "xxRound";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4603:7:180";
                                                        }, {
                                                            readonly name: "scalar";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4612:6:180";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "div";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4599:3:180";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4599:20:180";
                                                    };
                                                    readonly variableNames: readonly [{
                                                        readonly name: "x";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "4594:1:180";
                                                    }];
                                                }, {
                                                    readonly body: {
                                                        readonly nodeType: "YulBlock";
                                                        readonly src: "4691:813:180";
                                                        readonly statements: readonly [{
                                                            readonly nodeType: "YulVariableDeclaration";
                                                            readonly src: "4759:19:180";
                                                            readonly value: {
                                                                readonly arguments: readonly [{
                                                                    readonly name: "z";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4773:1:180";
                                                                }, {
                                                                    readonly name: "x";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4776:1:180";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "mul";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4769:3:180";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "4769:9:180";
                                                            };
                                                            readonly variables: readonly [{
                                                                readonly name: "zx";
                                                                readonly nodeType: "YulTypedName";
                                                                readonly src: "4763:2:180";
                                                                readonly type: "";
                                                            }];
                                                        }, {
                                                            readonly body: {
                                                                readonly nodeType: "YulBlock";
                                                                readonly src: "4881:209:180";
                                                                readonly statements: readonly [{
                                                                    readonly body: {
                                                                        readonly nodeType: "YulBlock";
                                                                        readonly src: "4988:76:180";
                                                                        readonly statements: readonly [{
                                                                            readonly expression: {
                                                                                readonly arguments: readonly [{
                                                                                    readonly kind: "number";
                                                                                    readonly nodeType: "YulLiteral";
                                                                                    readonly src: "5029:1:180";
                                                                                    readonly type: "";
                                                                                    readonly value: "0";
                                                                                }, {
                                                                                    readonly kind: "number";
                                                                                    readonly nodeType: "YulLiteral";
                                                                                    readonly src: "5032:1:180";
                                                                                    readonly type: "";
                                                                                    readonly value: "0";
                                                                                }];
                                                                                readonly functionName: {
                                                                                    readonly name: "revert";
                                                                                    readonly nodeType: "YulIdentifier";
                                                                                    readonly src: "5022:6:180";
                                                                                };
                                                                                readonly nodeType: "YulFunctionCall";
                                                                                readonly src: "5022:12:180";
                                                                            };
                                                                            readonly nodeType: "YulExpressionStatement";
                                                                            readonly src: "5022:12:180";
                                                                        }];
                                                                    };
                                                                    readonly condition: {
                                                                        readonly arguments: readonly [{
                                                                            readonly arguments: readonly [{
                                                                                readonly name: "x";
                                                                                readonly nodeType: "YulIdentifier";
                                                                                readonly src: "4984:1:180";
                                                                            }];
                                                                            readonly functionName: {
                                                                                readonly name: "iszero";
                                                                                readonly nodeType: "YulIdentifier";
                                                                                readonly src: "4977:6:180";
                                                                            };
                                                                            readonly nodeType: "YulFunctionCall";
                                                                            readonly src: "4977:9:180";
                                                                        }];
                                                                        readonly functionName: {
                                                                            readonly name: "iszero";
                                                                            readonly nodeType: "YulIdentifier";
                                                                            readonly src: "4970:6:180";
                                                                        };
                                                                        readonly nodeType: "YulFunctionCall";
                                                                        readonly src: "4970:17:180";
                                                                    };
                                                                    readonly nodeType: "YulIf";
                                                                    readonly src: "4967:97:180";
                                                                }];
                                                            };
                                                            readonly condition: {
                                                                readonly arguments: readonly [{
                                                                    readonly arguments: readonly [{
                                                                        readonly arguments: readonly [{
                                                                            readonly name: "zx";
                                                                            readonly nodeType: "YulIdentifier";
                                                                            readonly src: "4869:2:180";
                                                                        }, {
                                                                            readonly name: "x";
                                                                            readonly nodeType: "YulIdentifier";
                                                                            readonly src: "4873:1:180";
                                                                        }];
                                                                        readonly functionName: {
                                                                            readonly name: "div";
                                                                            readonly nodeType: "YulIdentifier";
                                                                            readonly src: "4865:3:180";
                                                                        };
                                                                        readonly nodeType: "YulFunctionCall";
                                                                        readonly src: "4865:10:180";
                                                                    }, {
                                                                        readonly name: "z";
                                                                        readonly nodeType: "YulIdentifier";
                                                                        readonly src: "4877:1:180";
                                                                    }];
                                                                    readonly functionName: {
                                                                        readonly name: "eq";
                                                                        readonly nodeType: "YulIdentifier";
                                                                        readonly src: "4862:2:180";
                                                                    };
                                                                    readonly nodeType: "YulFunctionCall";
                                                                    readonly src: "4862:17:180";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "iszero";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4855:6:180";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "4855:25:180";
                                                            };
                                                            readonly nodeType: "YulIf";
                                                            readonly src: "4852:238:180";
                                                        }, {
                                                            readonly nodeType: "YulVariableDeclaration";
                                                            readonly src: "5172:28:180";
                                                            readonly value: {
                                                                readonly arguments: readonly [{
                                                                    readonly name: "zx";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5191:2:180";
                                                                }, {
                                                                    readonly name: "half";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5195:4:180";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "add";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5187:3:180";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "5187:13:180";
                                                            };
                                                            readonly variables: readonly [{
                                                                readonly name: "zxRound";
                                                                readonly nodeType: "YulTypedName";
                                                                readonly src: "5176:7:180";
                                                                readonly type: "";
                                                            }];
                                                        }, {
                                                            readonly body: {
                                                                readonly nodeType: "YulBlock";
                                                                readonly src: "5304:68:180";
                                                                readonly statements: readonly [{
                                                                    readonly expression: {
                                                                        readonly arguments: readonly [{
                                                                            readonly kind: "number";
                                                                            readonly nodeType: "YulLiteral";
                                                                            readonly src: "5341:1:180";
                                                                            readonly type: "";
                                                                            readonly value: "0";
                                                                        }, {
                                                                            readonly kind: "number";
                                                                            readonly nodeType: "YulLiteral";
                                                                            readonly src: "5344:1:180";
                                                                            readonly type: "";
                                                                            readonly value: "0";
                                                                        }];
                                                                        readonly functionName: {
                                                                            readonly name: "revert";
                                                                            readonly nodeType: "YulIdentifier";
                                                                            readonly src: "5334:6:180";
                                                                        };
                                                                        readonly nodeType: "YulFunctionCall";
                                                                        readonly src: "5334:12:180";
                                                                    };
                                                                    readonly nodeType: "YulExpressionStatement";
                                                                    readonly src: "5334:12:180";
                                                                }];
                                                            };
                                                            readonly condition: {
                                                                readonly arguments: readonly [{
                                                                    readonly name: "zxRound";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5291:7:180";
                                                                }, {
                                                                    readonly name: "zx";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5300:2:180";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "lt";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5288:2:180";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "5288:15:180";
                                                            };
                                                            readonly nodeType: "YulIf";
                                                            readonly src: "5285:87:180";
                                                        }, {
                                                            readonly nodeType: "YulAssignment";
                                                            readonly src: "5457:25:180";
                                                            readonly value: {
                                                                readonly arguments: readonly [{
                                                                    readonly name: "zxRound";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5466:7:180";
                                                                }, {
                                                                    readonly name: "scalar";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5475:6:180";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "div";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5462:3:180";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "5462:20:180";
                                                            };
                                                            readonly variableNames: readonly [{
                                                                readonly name: "z";
                                                                readonly nodeType: "YulIdentifier";
                                                                readonly src: "5457:1:180";
                                                            }];
                                                        }];
                                                    };
                                                    readonly condition: {
                                                        readonly arguments: readonly [{
                                                            readonly name: "n";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4685:1:180";
                                                        }, {
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "4688:1:180";
                                                            readonly type: "";
                                                            readonly value: "2";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "mod";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4681:3:180";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4681:9:180";
                                                    };
                                                    readonly nodeType: "YulIf";
                                                    readonly src: "4678:826:180";
                                                }];
                                            };
                                            readonly condition: {
                                                readonly name: "n";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3824:1:180";
                                            };
                                            readonly nodeType: "YulForLoop";
                                            readonly post: {
                                                readonly nodeType: "YulBlock";
                                                readonly src: "3826:124:180";
                                                readonly statements: readonly [{
                                                    readonly nodeType: "YulAssignment";
                                                    readonly src: "3918:14:180";
                                                    readonly value: {
                                                        readonly arguments: readonly [{
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "3927:1:180";
                                                            readonly type: "";
                                                            readonly value: "1";
                                                        }, {
                                                            readonly name: "n";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3930:1:180";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "shr";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3923:3:180";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "3923:9:180";
                                                    };
                                                    readonly variableNames: readonly [{
                                                        readonly name: "n";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "3918:1:180";
                                                    }];
                                                }];
                                            };
                                            readonly pre: {
                                                readonly nodeType: "YulBlock";
                                                readonly src: "3699:124:180";
                                                readonly statements: readonly [{
                                                    readonly nodeType: "YulAssignment";
                                                    readonly src: "3791:14:180";
                                                    readonly value: {
                                                        readonly arguments: readonly [{
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "3800:1:180";
                                                            readonly type: "";
                                                            readonly value: "1";
                                                        }, {
                                                            readonly name: "n";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3803:1:180";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "shr";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3796:3:180";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "3796:9:180";
                                                    };
                                                    readonly variableNames: readonly [{
                                                        readonly name: "n";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "3791:1:180";
                                                    }];
                                                }];
                                            };
                                            readonly src: "3695:1827:180";
                                        }];
                                    };
                                    readonly nodeType: "YulCase";
                                    readonly src: "3261:2275:180";
                                    readonly value: "default";
                                }];
                                readonly expression: {
                                    readonly name: "x";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2973:1:180";
                                };
                                readonly nodeType: "YulSwitch";
                                readonly src: "2966:2570:180";
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73666;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3019:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73666;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3298:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73666;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3791:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73666;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3803:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73666;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3824:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73666;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3918:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73666;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3930:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73666;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4685:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73668;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3105:6:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73668;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3418:6:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73668;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3670:6:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73668;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4612:6:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73668;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5475:6:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73664;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2973:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73664;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3552:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73664;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4122:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73664;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4261:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73664;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4264:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73664;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4594:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73664;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4776:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73664;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4873:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73664;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4984:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73671;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3100:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73671;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3210:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73671;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3413:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73671;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3547:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73671;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4773:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73671;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4877:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73671;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5457:1:180";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73673;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "2943:2603:180";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "rpow";
                readonly nameLocation: "2783:4:180";
                readonly parameters: {
                    readonly id: 73669;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73664;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "2805:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73675;
                        readonly src: "2797:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73663;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2797:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73666;
                        readonly mutability: "mutable";
                        readonly name: "n";
                        readonly nameLocation: "2824:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73675;
                        readonly src: "2816:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73665;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2816:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73668;
                        readonly mutability: "mutable";
                        readonly name: "scalar";
                        readonly nameLocation: "2843:6:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73675;
                        readonly src: "2835:14:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73667;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2835:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2787:68:180";
                };
                readonly returnParameters: {
                    readonly id: 73672;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73671;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "2887:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73675;
                        readonly src: "2879:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73670;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2879:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2878:11:180";
                };
                readonly scope: 73718;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73684;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5746:3396:180";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73683;
                    readonly nodeType: "Block";
                    readonly src: "5805:3337:180";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "5867:3269:180";
                            readonly statements: readonly [{
                                readonly nodeType: "YulVariableDeclaration";
                                readonly src: "5881:10:180";
                                readonly value: {
                                    readonly name: "x";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "5890:1:180";
                                };
                                readonly variables: readonly [{
                                    readonly name: "y";
                                    readonly nodeType: "YulTypedName";
                                    readonly src: "5885:1:180";
                                    readonly type: "";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "5971:8:180";
                                readonly value: {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "5976:3:180";
                                    readonly type: "";
                                    readonly value: "181";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "5971:1:180";
                                }];
                            }, {
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "6465:80:180";
                                    readonly statements: readonly [{
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6483:16:180";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6492:3:180";
                                                readonly type: "";
                                                readonly value: "128";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6497:1:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shr";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6488:3:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6488:11:180";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6483:1:180";
                                        }];
                                    }, {
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6516:15:180";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6525:2:180";
                                                readonly type: "";
                                                readonly value: "64";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6529:1:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6521:3:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6521:10:180";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6516:1:180";
                                        }];
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6422:1:180";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6425:37:180";
                                            readonly type: "";
                                            readonly value: "0x10000000000000000000000000000000000";
                                        }];
                                        readonly functionName: {
                                            readonly name: "lt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6419:2:180";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "6419:44:180";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "6412:6:180";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "6412:52:180";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "6409:136:180";
                            }, {
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "6598:79:180";
                                    readonly statements: readonly [{
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6616:15:180";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6625:2:180";
                                                readonly type: "";
                                                readonly value: "64";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6629:1:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shr";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6621:3:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6621:10:180";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6616:1:180";
                                        }];
                                    }, {
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6648:15:180";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6657:2:180";
                                                readonly type: "";
                                                readonly value: "32";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6661:1:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6653:3:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6653:10:180";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6648:1:180";
                                        }];
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6571:1:180";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6574:21:180";
                                            readonly type: "";
                                            readonly value: "0x1000000000000000000";
                                        }];
                                        readonly functionName: {
                                            readonly name: "lt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6568:2:180";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "6568:28:180";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "6561:6:180";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "6561:36:180";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "6558:119:180";
                            }, {
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "6722:79:180";
                                    readonly statements: readonly [{
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6740:15:180";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6749:2:180";
                                                readonly type: "";
                                                readonly value: "32";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6753:1:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shr";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6745:3:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6745:10:180";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6740:1:180";
                                        }];
                                    }, {
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6772:15:180";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6781:2:180";
                                                readonly type: "";
                                                readonly value: "16";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6785:1:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6777:3:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6777:10:180";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6772:1:180";
                                        }];
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6703:1:180";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6706:13:180";
                                            readonly type: "";
                                            readonly value: "0x10000000000";
                                        }];
                                        readonly functionName: {
                                            readonly name: "lt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6700:2:180";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "6700:20:180";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "6693:6:180";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "6693:28:180";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "6690:111:180";
                            }, {
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "6842:78:180";
                                    readonly statements: readonly [{
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6860:15:180";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6869:2:180";
                                                readonly type: "";
                                                readonly value: "16";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6873:1:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shr";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6865:3:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6865:10:180";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6860:1:180";
                                        }];
                                    }, {
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6892:14:180";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6901:1:180";
                                                readonly type: "";
                                                readonly value: "8";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6904:1:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6897:3:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6897:9:180";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6892:1:180";
                                        }];
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6827:1:180";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6830:9:180";
                                            readonly type: "";
                                            readonly value: "0x1000000";
                                        }];
                                        readonly functionName: {
                                            readonly name: "lt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6824:2:180";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "6824:16:180";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "6817:6:180";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "6817:24:180";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "6814:106:180";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8110:35:180";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8119:2:180";
                                        readonly type: "";
                                        readonly value: "18";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8127:1:180";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8134:1:180";
                                            }, {
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "8137:5:180";
                                                readonly type: "";
                                                readonly value: "65536";
                                            }];
                                            readonly functionName: {
                                                readonly name: "add";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8130:3:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8130:13:180";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mul";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8123:3:180";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8123:21:180";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8115:3:180";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8115:30:180";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8110:1:180";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8306:30:180";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8315:1:180";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8322:1:180";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8329:1:180";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8332:1:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8325:3:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8325:9:180";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8318:3:180";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8318:17:180";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8311:3:180";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8311:25:180";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8306:1:180";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8349:30:180";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8358:1:180";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8365:1:180";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8372:1:180";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8375:1:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8368:3:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8368:9:180";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8361:3:180";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8361:17:180";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8354:3:180";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8354:25:180";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8349:1:180";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8392:30:180";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8401:1:180";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8408:1:180";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8415:1:180";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8418:1:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8411:3:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8411:9:180";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8404:3:180";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8404:17:180";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8397:3:180";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8397:25:180";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8392:1:180";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8435:30:180";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8444:1:180";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8451:1:180";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8458:1:180";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8461:1:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8454:3:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8454:9:180";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8447:3:180";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8447:17:180";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8440:3:180";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8440:25:180";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8435:1:180";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8478:30:180";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8487:1:180";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8494:1:180";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8501:1:180";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8504:1:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8497:3:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8497:9:180";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8490:3:180";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8490:17:180";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8483:3:180";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8483:25:180";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8478:1:180";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8521:30:180";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8530:1:180";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8537:1:180";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8544:1:180";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8547:1:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8540:3:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8540:9:180";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8533:3:180";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8533:17:180";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8526:3:180";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8526:25:180";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8521:1:180";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8564:30:180";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8573:1:180";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8580:1:180";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8587:1:180";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8590:1:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8583:3:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8583:9:180";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8576:3:180";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8576:17:180";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8569:3:180";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8569:25:180";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8564:1:180";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "9097:29:180";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "z";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9106:1:180";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9116:1:180";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9119:1:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9112:3:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "9112:9:180";
                                        }, {
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9123:1:180";
                                        }];
                                        readonly functionName: {
                                            readonly name: "lt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9109:2:180";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "9109:16:180";
                                    }];
                                    readonly functionName: {
                                        readonly name: "sub";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9102:3:180";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "9102:24:180";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "9097:1:180";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73677;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5890:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73677;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8329:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73677;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8372:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73677;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8415:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73677;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8458:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73677;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8501:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73677;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8544:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73677;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8587:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73677;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9116:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5971:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6516:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6529:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6648:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6661:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6772:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6785:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6892:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6904:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8110:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8127:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8306:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8322:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8332:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8349:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8365:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8375:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8392:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8408:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8418:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8435:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8451:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8461:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8478:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8494:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8504:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8521:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8537:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8547:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8564:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8580:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8590:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9097:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9106:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9119:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73680;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9123:1:180";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73682;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "5858:3278:180";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "sqrt";
                readonly nameLocation: "5755:4:180";
                readonly parameters: {
                    readonly id: 73678;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73677;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "5768:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73684;
                        readonly src: "5760:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73676;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5760:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5759:11:180";
                };
                readonly returnParameters: {
                    readonly id: 73681;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73680;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "5802:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73684;
                        readonly src: "5794:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73679;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5794:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5793:11:180";
                };
                readonly scope: 73718;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73695;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9148:282:180";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73694;
                    readonly nodeType: "Block";
                    readonly src: "9223:207:180";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "9285:139:180";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "9400:14:180";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "x";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9409:1:180";
                                    }, {
                                        readonly name: "y";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9412:1:180";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mod";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9405:3:180";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "9405:9:180";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "9400:1:180";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73686;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9409:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73688;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9412:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73691;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9400:1:180";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73693;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "9276:148:180";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "unsafeMod";
                readonly nameLocation: "9157:9:180";
                readonly parameters: {
                    readonly id: 73689;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73686;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "9175:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73695;
                        readonly src: "9167:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73685;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9167:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73688;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "9186:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73695;
                        readonly src: "9178:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73687;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9178:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9166:22:180";
                };
                readonly returnParameters: {
                    readonly id: 73692;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73691;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "9220:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73695;
                        readonly src: "9212:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73690;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9212:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9211:11:180";
                };
                readonly scope: 73718;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73706;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9436:285:180";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73705;
                    readonly nodeType: "Block";
                    readonly src: "9511:210:180";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "9573:142:180";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "9691:14:180";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "x";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9700:1:180";
                                    }, {
                                        readonly name: "y";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9703:1:180";
                                    }];
                                    readonly functionName: {
                                        readonly name: "div";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9696:3:180";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "9696:9:180";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "r";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "9691:1:180";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73702;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9691:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73697;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9700:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73699;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9703:1:180";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73704;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "9564:151:180";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "unsafeDiv";
                readonly nameLocation: "9445:9:180";
                readonly parameters: {
                    readonly id: 73700;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73697;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "9463:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73706;
                        readonly src: "9455:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73696;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9455:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73699;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "9474:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73706;
                        readonly src: "9466:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73698;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9466:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9454:22:180";
                };
                readonly returnParameters: {
                    readonly id: 73703;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73702;
                        readonly mutability: "mutable";
                        readonly name: "r";
                        readonly nameLocation: "9508:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73706;
                        readonly src: "9500:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73701;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9500:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9499:11:180";
                };
                readonly scope: 73718;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73717;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9727:324:180";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73716;
                    readonly nodeType: "Block";
                    readonly src: "9804:247:180";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "9866:179:180";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "9998:37:180";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "10014:1:180";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "10017:1:180";
                                            }];
                                            readonly functionName: {
                                                readonly name: "mod";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "10010:3:180";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "10010:9:180";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "10021:1:180";
                                            readonly type: "";
                                            readonly value: "0";
                                        }];
                                        readonly functionName: {
                                            readonly name: "gt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "10007:2:180";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "10007:16:180";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "x";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "10029:1:180";
                                        }, {
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "10032:1:180";
                                        }];
                                        readonly functionName: {
                                            readonly name: "div";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "10025:3:180";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "10025:9:180";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "10003:3:180";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "10003:32:180";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "9998:1:180";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73708;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "10014:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73708;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "10029:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73710;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "10017:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73710;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "10032:1:180";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73713;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9998:1:180";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73715;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "9857:188:180";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "unsafeDivUp";
                readonly nameLocation: "9736:11:180";
                readonly parameters: {
                    readonly id: 73711;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73708;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "9756:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73717;
                        readonly src: "9748:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73707;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9748:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73710;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "9767:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73717;
                        readonly src: "9759:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73709;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9759:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9747:22:180";
                };
                readonly returnParameters: {
                    readonly id: 73714;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73713;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "9801:1:180";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73717;
                        readonly src: "9793:9:180";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73712;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9793:7:180";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9792:11:180";
                };
                readonly scope: 73718;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "FixedPointMathLib";
            readonly contractDependencies: readonly [];
            readonly contractKind: "library";
            readonly documentation: {
                readonly id: 73562;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "68:273:180";
                readonly text: "@notice Arithmetic library with operations for fixed-point numbers.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @author Inspired by USM (https://github.com/usmfum/USM/blob/master/contracts/WadMath.sol)";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [73718];
            readonly name: "FixedPointMathLib";
            readonly nameLocation: "349:17:180";
            readonly scope: 73719;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "AGPL-3.0-only";
    };
    readonly id: 180;
};
//# sourceMappingURL=FixedPointMathLib.d.ts.map