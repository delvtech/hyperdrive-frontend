export declare const FixedPointMathLib: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207833532335256498efdbb7d8373135640993cd82a007b563f92be27d6ba4d9c364736f6c63430008140033";
        readonly sourceMap: "341:9712:125:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;341:9712:125;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207833532335256498efdbb7d8373135640993cd82a007b563f92be27d6ba4d9c364736f6c63430008140033";
        readonly sourceMap: "341:9712:125:-:0;;;;;;;;";
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
        readonly id: 68904;
        readonly exportedSymbols: {
            readonly FixedPointMathLib: readonly [68903];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "42:10012:125";
        readonly nodes: readonly [{
            readonly id: 68746;
            readonly nodeType: "PragmaDirective";
            readonly src: "42:24:125";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.8", ".0"];
        }, {
            readonly id: 68903;
            readonly nodeType: "ContractDefinition";
            readonly src: "341:9712:125";
            readonly nodes: readonly [{
                readonly id: 68754;
                readonly nodeType: "VariableDeclaration";
                readonly src: "566:50:125";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_UINT256";
                readonly nameLocation: "592:11:125";
                readonly scope: 68903;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68748;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "566:7:125";
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
                    readonly id: 68753;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly lValueRequested: false;
                    readonly leftExpression: {
                        readonly commonType: {
                            readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1";
                            readonly typeString: "int_const 1157...(70 digits omitted)...9936";
                        };
                        readonly id: 68751;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly lValueRequested: false;
                        readonly leftExpression: {
                            readonly hexValue: "32";
                            readonly id: 68749;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "606:1:125";
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
                            readonly id: 68750;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "609:3:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_256_by_1";
                                readonly typeString: "int_const 256";
                            };
                            readonly value: "256";
                        };
                        readonly src: "606:6:125";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1";
                            readonly typeString: "int_const 1157...(70 digits omitted)...9936";
                        };
                    };
                    readonly nodeType: "BinaryOperation";
                    readonly operator: "-";
                    readonly rightExpression: {
                        readonly hexValue: "31";
                        readonly id: 68752;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "number";
                        readonly lValueRequested: false;
                        readonly nodeType: "Literal";
                        readonly src: "615:1:125";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_rational_1_by_1";
                            readonly typeString: "int_const 1";
                        };
                        readonly value: "1";
                    };
                    readonly src: "606:10:125";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1";
                        readonly typeString: "int_const 1157...(70 digits omitted)...9935";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68757;
                readonly nodeType: "VariableDeclaration";
                readonly src: "623:36:125";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "WAD";
                readonly nameLocation: "649:3:125";
                readonly scope: 68903;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68755;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "623:7:125";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "31653138";
                    readonly id: 68756;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "655:4:125";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                        readonly typeString: "int_const 1000000000000000000";
                    };
                    readonly value: "1e18";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68773;
                readonly nodeType: "FunctionDefinition";
                readonly src: "704:164:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68772;
                    readonly nodeType: "Block";
                    readonly src: "778:90:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 68767;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68759;
                                readonly src: "806:1:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 68768;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68761;
                                readonly src: "809:1:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 68769;
                                readonly name: "WAD";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68757;
                                readonly src: "812:3:125";
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
                                readonly id: 68766;
                                readonly name: "mulDivDown";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68834;
                                readonly src: "795:10:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 68770;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "795:21:125";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 68765;
                        readonly id: 68771;
                        readonly nodeType: "Return";
                        readonly src: "788:28:125";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulWadDown";
                readonly nameLocation: "713:10:125";
                readonly parameters: {
                    readonly id: 68762;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68759;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "732:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68773;
                        readonly src: "724:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68758;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "724:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68761;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "743:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68773;
                        readonly src: "735:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68760;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "735:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "723:22:125";
                };
                readonly returnParameters: {
                    readonly id: 68765;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68764;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68773;
                        readonly src: "769:7:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68763;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "769:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "768:9:125";
                };
                readonly scope: 68903;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68789;
                readonly nodeType: "FunctionDefinition";
                readonly src: "874:158:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68788;
                    readonly nodeType: "Block";
                    readonly src: "946:86:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 68783;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68775;
                                readonly src: "972:1:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 68784;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68777;
                                readonly src: "975:1:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 68785;
                                readonly name: "WAD";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68757;
                                readonly src: "978:3:125";
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
                                readonly id: 68782;
                                readonly name: "mulDivUp";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68847;
                                readonly src: "963:8:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 68786;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "963:19:125";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 68781;
                        readonly id: 68787;
                        readonly nodeType: "Return";
                        readonly src: "956:26:125";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulWadUp";
                readonly nameLocation: "883:8:125";
                readonly parameters: {
                    readonly id: 68778;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68775;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "900:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68789;
                        readonly src: "892:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68774;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "892:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68777;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "911:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68789;
                        readonly src: "903:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68776;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "903:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "891:22:125";
                };
                readonly returnParameters: {
                    readonly id: 68781;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68780;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68789;
                        readonly src: "937:7:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68779;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "937:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "936:9:125";
                };
                readonly scope: 68903;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68805;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1038:164:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68804;
                    readonly nodeType: "Block";
                    readonly src: "1112:90:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 68799;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68791;
                                readonly src: "1140:1:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 68800;
                                readonly name: "WAD";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68757;
                                readonly src: "1143:3:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 68801;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68793;
                                readonly src: "1148:1:125";
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
                                readonly id: 68798;
                                readonly name: "mulDivDown";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68834;
                                readonly src: "1129:10:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 68802;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1129:21:125";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 68797;
                        readonly id: 68803;
                        readonly nodeType: "Return";
                        readonly src: "1122:28:125";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "divWadDown";
                readonly nameLocation: "1047:10:125";
                readonly parameters: {
                    readonly id: 68794;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68791;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "1066:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68805;
                        readonly src: "1058:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68790;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1058:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68793;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "1077:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68805;
                        readonly src: "1069:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68792;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1069:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1057:22:125";
                };
                readonly returnParameters: {
                    readonly id: 68797;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68796;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68805;
                        readonly src: "1103:7:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68795;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1103:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1102:9:125";
                };
                readonly scope: 68903;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68821;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1208:158:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68820;
                    readonly nodeType: "Block";
                    readonly src: "1280:86:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 68815;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68807;
                                readonly src: "1306:1:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 68816;
                                readonly name: "WAD";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68757;
                                readonly src: "1309:3:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 68817;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68809;
                                readonly src: "1314:1:125";
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
                                readonly id: 68814;
                                readonly name: "mulDivUp";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68847;
                                readonly src: "1297:8:125";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 68818;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1297:19:125";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 68813;
                        readonly id: 68819;
                        readonly nodeType: "Return";
                        readonly src: "1290:26:125";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "divWadUp";
                readonly nameLocation: "1217:8:125";
                readonly parameters: {
                    readonly id: 68810;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68807;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "1234:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68821;
                        readonly src: "1226:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68806;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1226:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68809;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "1245:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68821;
                        readonly src: "1237:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68808;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1237:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1225:22:125";
                };
                readonly returnParameters: {
                    readonly id: 68813;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68812;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68821;
                        readonly src: "1271:7:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68811;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1271:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1270:9:125";
                };
                readonly scope: 68903;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68834;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1564:526:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68833;
                    readonly nodeType: "Block";
                    readonly src: "1691:399:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "1753:331:125";
                            readonly statements: readonly [{
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "1936:44:125";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "1961:1:125";
                                                readonly type: "";
                                                readonly value: "0";
                                            }, {
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "1964:1:125";
                                                readonly type: "";
                                                readonly value: "0";
                                            }];
                                            readonly functionName: {
                                                readonly name: "revert";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "1954:6:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "1954:12:125";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "1954:12:125";
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "denominator";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1878:11:125";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "y";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "1902:1:125";
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly name: "x";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "1908:1:125";
                                                    }, {
                                                        readonly arguments: readonly [{
                                                            readonly name: "MAX_UINT256";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "1915:11:125";
                                                        }, {
                                                            readonly name: "y";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "1928:1:125";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "div";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "1911:3:125";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "1911:19:125";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "gt";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "1905:2:125";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "1905:26:125";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mul";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "1898:3:125";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "1898:34:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "iszero";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "1891:6:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "1891:42:125";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mul";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1874:3:125";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "1874:60:125";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1867:6:125";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1867:68:125";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "1864:116:125";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "2042:32:125";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "x";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2055:1:125";
                                        }, {
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2058:1:125";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mul";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2051:3:125";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2051:9:125";
                                    }, {
                                        readonly name: "denominator";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2062:11:125";
                                    }];
                                    readonly functionName: {
                                        readonly name: "div";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2047:3:125";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2047:27:125";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2042:1:125";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 68754;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1915:11:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68827;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1878:11:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68827;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2062:11:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68823;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1908:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68823;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2055:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68825;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1902:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68825;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1928:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68825;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2058:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68830;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2042:1:125";
                            readonly valueSize: 1;
                        }];
                        readonly id: 68832;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "1744:340:125";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulDivDown";
                readonly nameLocation: "1573:10:125";
                readonly parameters: {
                    readonly id: 68828;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68823;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "1601:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68834;
                        readonly src: "1593:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68822;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1593:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68825;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "1620:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68834;
                        readonly src: "1612:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68824;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1612:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68827;
                        readonly mutability: "mutable";
                        readonly name: "denominator";
                        readonly nameLocation: "1639:11:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68834;
                        readonly src: "1631:19:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68826;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1631:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1583:73:125";
                };
                readonly returnParameters: {
                    readonly id: 68831;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68830;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "1688:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68834;
                        readonly src: "1680:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68829;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1680:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1679:11:125";
                };
                readonly scope: 68903;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68847;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2096:672:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68846;
                    readonly nodeType: "Block";
                    readonly src: "2221:547:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "2283:479:125";
                            readonly statements: readonly [{
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "2466:44:125";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "2491:1:125";
                                                readonly type: "";
                                                readonly value: "0";
                                            }, {
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "2494:1:125";
                                                readonly type: "";
                                                readonly value: "0";
                                            }];
                                            readonly functionName: {
                                                readonly name: "revert";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2484:6:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2484:12:125";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "2484:12:125";
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "denominator";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2408:11:125";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "y";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2432:1:125";
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly name: "x";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "2438:1:125";
                                                    }, {
                                                        readonly arguments: readonly [{
                                                            readonly name: "MAX_UINT256";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "2445:11:125";
                                                        }, {
                                                            readonly name: "y";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "2458:1:125";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "div";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "2441:3:125";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "2441:19:125";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "gt";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "2435:2:125";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "2435:26:125";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mul";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2428:3:125";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "2428:34:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "iszero";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2421:6:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2421:42:125";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mul";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2404:3:125";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2404:60:125";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2397:6:125";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2397:68:125";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "2394:116:125";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "2679:73:125";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "x";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2699:1:125";
                                                }, {
                                                    readonly name: "y";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2702:1:125";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mul";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2695:3:125";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "2695:9:125";
                                            }, {
                                                readonly name: "denominator";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2706:11:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "mod";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2691:3:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2691:27:125";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "2720:1:125";
                                            readonly type: "";
                                            readonly value: "0";
                                        }];
                                        readonly functionName: {
                                            readonly name: "gt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2688:2:125";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2688:34:125";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2732:1:125";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2735:1:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "mul";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2728:3:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2728:9:125";
                                        }, {
                                            readonly name: "denominator";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2739:11:125";
                                        }];
                                        readonly functionName: {
                                            readonly name: "div";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2724:3:125";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2724:27:125";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2684:3:125";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2684:68:125";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2679:1:125";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 68754;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2445:11:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68840;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2408:11:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68840;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2706:11:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68840;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2739:11:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68836;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2438:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68836;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2699:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68836;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2732:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68838;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2432:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68838;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2458:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68838;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2702:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68838;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2735:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68843;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2679:1:125";
                            readonly valueSize: 1;
                        }];
                        readonly id: 68845;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "2274:488:125";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulDivUp";
                readonly nameLocation: "2105:8:125";
                readonly parameters: {
                    readonly id: 68841;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68836;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "2131:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68847;
                        readonly src: "2123:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68835;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2123:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68838;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "2150:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68847;
                        readonly src: "2142:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68837;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2142:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68840;
                        readonly mutability: "mutable";
                        readonly name: "denominator";
                        readonly nameLocation: "2169:11:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68847;
                        readonly src: "2161:19:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68839;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2161:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2113:73:125";
                };
                readonly returnParameters: {
                    readonly id: 68844;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68843;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "2218:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68847;
                        readonly src: "2210:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68842;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2210:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2209:11:125";
                };
                readonly scope: 68903;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68860;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2774:2778:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68859;
                    readonly nodeType: "Block";
                    readonly src: "2890:2662:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "2952:2594:125";
                            readonly statements: readonly [{
                                readonly cases: readonly [{
                                    readonly body: {
                                        readonly nodeType: "YulBlock";
                                        readonly src: "2994:254:125";
                                        readonly statements: readonly [{
                                            readonly cases: readonly [{
                                                readonly body: {
                                                    readonly nodeType: "YulBlock";
                                                    readonly src: "3044:85:125";
                                                    readonly statements: readonly [{
                                                        readonly nodeType: "YulAssignment";
                                                        readonly src: "3100:11:125";
                                                        readonly value: {
                                                            readonly name: "scalar";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3105:6:125";
                                                        };
                                                        readonly variableNames: readonly [{
                                                            readonly name: "z";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3100:1:125";
                                                        }];
                                                    }];
                                                };
                                                readonly nodeType: "YulCase";
                                                readonly src: "3037:92:125";
                                                readonly value: {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "3042:1:125";
                                                    readonly type: "";
                                                    readonly value: "0";
                                                };
                                            }, {
                                                readonly body: {
                                                    readonly nodeType: "YulBlock";
                                                    readonly src: "3154:80:125";
                                                    readonly statements: readonly [{
                                                        readonly nodeType: "YulAssignment";
                                                        readonly src: "3210:6:125";
                                                        readonly value: {
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "3215:1:125";
                                                            readonly type: "";
                                                            readonly value: "0";
                                                        };
                                                        readonly variableNames: readonly [{
                                                            readonly name: "z";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3210:1:125";
                                                        }];
                                                    }];
                                                };
                                                readonly nodeType: "YulCase";
                                                readonly src: "3146:88:125";
                                                readonly value: "default";
                                            }];
                                            readonly expression: {
                                                readonly name: "n";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3019:1:125";
                                            };
                                            readonly nodeType: "YulSwitch";
                                            readonly src: "3012:222:125";
                                        }];
                                    };
                                    readonly nodeType: "YulCase";
                                    readonly src: "2987:261:125";
                                    readonly value: {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "2992:1:125";
                                        readonly type: "";
                                        readonly value: "0";
                                    };
                                }, {
                                    readonly body: {
                                        readonly nodeType: "YulBlock";
                                        readonly src: "3269:2267:125";
                                        readonly statements: readonly [{
                                            readonly cases: readonly [{
                                                readonly body: {
                                                    readonly nodeType: "YulBlock";
                                                    readonly src: "3327:115:125";
                                                    readonly statements: readonly [{
                                                        readonly nodeType: "YulAssignment";
                                                        readonly src: "3413:11:125";
                                                        readonly value: {
                                                            readonly name: "scalar";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3418:6:125";
                                                        };
                                                        readonly variableNames: readonly [{
                                                            readonly name: "z";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3413:1:125";
                                                        }];
                                                    }];
                                                };
                                                readonly nodeType: "YulCase";
                                                readonly src: "3320:122:125";
                                                readonly value: {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "3325:1:125";
                                                    readonly type: "";
                                                    readonly value: "0";
                                                };
                                            }, {
                                                readonly body: {
                                                    readonly nodeType: "YulBlock";
                                                    readonly src: "3467:104:125";
                                                    readonly statements: readonly [{
                                                        readonly nodeType: "YulAssignment";
                                                        readonly src: "3547:6:125";
                                                        readonly value: {
                                                            readonly name: "x";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3552:1:125";
                                                        };
                                                        readonly variableNames: readonly [{
                                                            readonly name: "z";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3547:1:125";
                                                        }];
                                                    }];
                                                };
                                                readonly nodeType: "YulCase";
                                                readonly src: "3459:112:125";
                                                readonly value: "default";
                                            }];
                                            readonly expression: {
                                                readonly arguments: readonly [{
                                                    readonly name: "n";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3298:1:125";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "3301:1:125";
                                                    readonly type: "";
                                                    readonly value: "2";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mod";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3294:3:125";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "3294:9:125";
                                            };
                                            readonly nodeType: "YulSwitch";
                                            readonly src: "3287:284:125";
                                        }, {
                                            readonly nodeType: "YulVariableDeclaration";
                                            readonly src: "3651:26:125";
                                            readonly value: {
                                                readonly arguments: readonly [{
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "3667:1:125";
                                                    readonly type: "";
                                                    readonly value: "1";
                                                }, {
                                                    readonly name: "scalar";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3670:6:125";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "shr";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3663:3:125";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "3663:14:125";
                                            };
                                            readonly variables: readonly [{
                                                readonly name: "half";
                                                readonly nodeType: "YulTypedName";
                                                readonly src: "3655:4:125";
                                                readonly type: "";
                                            }];
                                        }, {
                                            readonly body: {
                                                readonly nodeType: "YulBlock";
                                                readonly src: "3951:1571:125";
                                                readonly statements: readonly [{
                                                    readonly body: {
                                                        readonly nodeType: "YulBlock";
                                                        readonly src: "4125:60:125";
                                                        readonly statements: readonly [{
                                                            readonly expression: {
                                                                readonly arguments: readonly [{
                                                                    readonly kind: "number";
                                                                    readonly nodeType: "YulLiteral";
                                                                    readonly src: "4158:1:125";
                                                                    readonly type: "";
                                                                    readonly value: "0";
                                                                }, {
                                                                    readonly kind: "number";
                                                                    readonly nodeType: "YulLiteral";
                                                                    readonly src: "4161:1:125";
                                                                    readonly type: "";
                                                                    readonly value: "0";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "revert";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4151:6:125";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "4151:12:125";
                                                            };
                                                            readonly nodeType: "YulExpressionStatement";
                                                            readonly src: "4151:12:125";
                                                        }];
                                                    };
                                                    readonly condition: {
                                                        readonly arguments: readonly [{
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "4117:3:125";
                                                            readonly type: "";
                                                            readonly value: "128";
                                                        }, {
                                                            readonly name: "x";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4122:1:125";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "shr";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4113:3:125";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4113:11:125";
                                                    };
                                                    readonly nodeType: "YulIf";
                                                    readonly src: "4110:75:125";
                                                }, {
                                                    readonly nodeType: "YulVariableDeclaration";
                                                    readonly src: "4247:19:125";
                                                    readonly value: {
                                                        readonly arguments: readonly [{
                                                            readonly name: "x";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4261:1:125";
                                                        }, {
                                                            readonly name: "x";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4264:1:125";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "mul";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4257:3:125";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4257:9:125";
                                                    };
                                                    readonly variables: readonly [{
                                                        readonly name: "xx";
                                                        readonly nodeType: "YulTypedName";
                                                        readonly src: "4251:2:125";
                                                        readonly type: "";
                                                    }];
                                                }, {
                                                    readonly nodeType: "YulVariableDeclaration";
                                                    readonly src: "4340:28:125";
                                                    readonly value: {
                                                        readonly arguments: readonly [{
                                                            readonly name: "xx";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4359:2:125";
                                                        }, {
                                                            readonly name: "half";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4363:4:125";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "add";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4355:3:125";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4355:13:125";
                                                    };
                                                    readonly variables: readonly [{
                                                        readonly name: "xxRound";
                                                        readonly nodeType: "YulTypedName";
                                                        readonly src: "4344:7:125";
                                                        readonly type: "";
                                                    }];
                                                }, {
                                                    readonly body: {
                                                        readonly nodeType: "YulBlock";
                                                        readonly src: "4464:60:125";
                                                        readonly statements: readonly [{
                                                            readonly expression: {
                                                                readonly arguments: readonly [{
                                                                    readonly kind: "number";
                                                                    readonly nodeType: "YulLiteral";
                                                                    readonly src: "4497:1:125";
                                                                    readonly type: "";
                                                                    readonly value: "0";
                                                                }, {
                                                                    readonly kind: "number";
                                                                    readonly nodeType: "YulLiteral";
                                                                    readonly src: "4500:1:125";
                                                                    readonly type: "";
                                                                    readonly value: "0";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "revert";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4490:6:125";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "4490:12:125";
                                                            };
                                                            readonly nodeType: "YulExpressionStatement";
                                                            readonly src: "4490:12:125";
                                                        }];
                                                    };
                                                    readonly condition: {
                                                        readonly arguments: readonly [{
                                                            readonly name: "xxRound";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4451:7:125";
                                                        }, {
                                                            readonly name: "xx";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4460:2:125";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "lt";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4448:2:125";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4448:15:125";
                                                    };
                                                    readonly nodeType: "YulIf";
                                                    readonly src: "4445:79:125";
                                                }, {
                                                    readonly nodeType: "YulAssignment";
                                                    readonly src: "4594:25:125";
                                                    readonly value: {
                                                        readonly arguments: readonly [{
                                                            readonly name: "xxRound";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4603:7:125";
                                                        }, {
                                                            readonly name: "scalar";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4612:6:125";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "div";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4599:3:125";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4599:20:125";
                                                    };
                                                    readonly variableNames: readonly [{
                                                        readonly name: "x";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "4594:1:125";
                                                    }];
                                                }, {
                                                    readonly body: {
                                                        readonly nodeType: "YulBlock";
                                                        readonly src: "4691:813:125";
                                                        readonly statements: readonly [{
                                                            readonly nodeType: "YulVariableDeclaration";
                                                            readonly src: "4759:19:125";
                                                            readonly value: {
                                                                readonly arguments: readonly [{
                                                                    readonly name: "z";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4773:1:125";
                                                                }, {
                                                                    readonly name: "x";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4776:1:125";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "mul";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4769:3:125";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "4769:9:125";
                                                            };
                                                            readonly variables: readonly [{
                                                                readonly name: "zx";
                                                                readonly nodeType: "YulTypedName";
                                                                readonly src: "4763:2:125";
                                                                readonly type: "";
                                                            }];
                                                        }, {
                                                            readonly body: {
                                                                readonly nodeType: "YulBlock";
                                                                readonly src: "4881:209:125";
                                                                readonly statements: readonly [{
                                                                    readonly body: {
                                                                        readonly nodeType: "YulBlock";
                                                                        readonly src: "4988:76:125";
                                                                        readonly statements: readonly [{
                                                                            readonly expression: {
                                                                                readonly arguments: readonly [{
                                                                                    readonly kind: "number";
                                                                                    readonly nodeType: "YulLiteral";
                                                                                    readonly src: "5029:1:125";
                                                                                    readonly type: "";
                                                                                    readonly value: "0";
                                                                                }, {
                                                                                    readonly kind: "number";
                                                                                    readonly nodeType: "YulLiteral";
                                                                                    readonly src: "5032:1:125";
                                                                                    readonly type: "";
                                                                                    readonly value: "0";
                                                                                }];
                                                                                readonly functionName: {
                                                                                    readonly name: "revert";
                                                                                    readonly nodeType: "YulIdentifier";
                                                                                    readonly src: "5022:6:125";
                                                                                };
                                                                                readonly nodeType: "YulFunctionCall";
                                                                                readonly src: "5022:12:125";
                                                                            };
                                                                            readonly nodeType: "YulExpressionStatement";
                                                                            readonly src: "5022:12:125";
                                                                        }];
                                                                    };
                                                                    readonly condition: {
                                                                        readonly arguments: readonly [{
                                                                            readonly arguments: readonly [{
                                                                                readonly name: "x";
                                                                                readonly nodeType: "YulIdentifier";
                                                                                readonly src: "4984:1:125";
                                                                            }];
                                                                            readonly functionName: {
                                                                                readonly name: "iszero";
                                                                                readonly nodeType: "YulIdentifier";
                                                                                readonly src: "4977:6:125";
                                                                            };
                                                                            readonly nodeType: "YulFunctionCall";
                                                                            readonly src: "4977:9:125";
                                                                        }];
                                                                        readonly functionName: {
                                                                            readonly name: "iszero";
                                                                            readonly nodeType: "YulIdentifier";
                                                                            readonly src: "4970:6:125";
                                                                        };
                                                                        readonly nodeType: "YulFunctionCall";
                                                                        readonly src: "4970:17:125";
                                                                    };
                                                                    readonly nodeType: "YulIf";
                                                                    readonly src: "4967:97:125";
                                                                }];
                                                            };
                                                            readonly condition: {
                                                                readonly arguments: readonly [{
                                                                    readonly arguments: readonly [{
                                                                        readonly arguments: readonly [{
                                                                            readonly name: "zx";
                                                                            readonly nodeType: "YulIdentifier";
                                                                            readonly src: "4869:2:125";
                                                                        }, {
                                                                            readonly name: "x";
                                                                            readonly nodeType: "YulIdentifier";
                                                                            readonly src: "4873:1:125";
                                                                        }];
                                                                        readonly functionName: {
                                                                            readonly name: "div";
                                                                            readonly nodeType: "YulIdentifier";
                                                                            readonly src: "4865:3:125";
                                                                        };
                                                                        readonly nodeType: "YulFunctionCall";
                                                                        readonly src: "4865:10:125";
                                                                    }, {
                                                                        readonly name: "z";
                                                                        readonly nodeType: "YulIdentifier";
                                                                        readonly src: "4877:1:125";
                                                                    }];
                                                                    readonly functionName: {
                                                                        readonly name: "eq";
                                                                        readonly nodeType: "YulIdentifier";
                                                                        readonly src: "4862:2:125";
                                                                    };
                                                                    readonly nodeType: "YulFunctionCall";
                                                                    readonly src: "4862:17:125";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "iszero";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4855:6:125";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "4855:25:125";
                                                            };
                                                            readonly nodeType: "YulIf";
                                                            readonly src: "4852:238:125";
                                                        }, {
                                                            readonly nodeType: "YulVariableDeclaration";
                                                            readonly src: "5172:28:125";
                                                            readonly value: {
                                                                readonly arguments: readonly [{
                                                                    readonly name: "zx";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5191:2:125";
                                                                }, {
                                                                    readonly name: "half";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5195:4:125";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "add";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5187:3:125";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "5187:13:125";
                                                            };
                                                            readonly variables: readonly [{
                                                                readonly name: "zxRound";
                                                                readonly nodeType: "YulTypedName";
                                                                readonly src: "5176:7:125";
                                                                readonly type: "";
                                                            }];
                                                        }, {
                                                            readonly body: {
                                                                readonly nodeType: "YulBlock";
                                                                readonly src: "5304:68:125";
                                                                readonly statements: readonly [{
                                                                    readonly expression: {
                                                                        readonly arguments: readonly [{
                                                                            readonly kind: "number";
                                                                            readonly nodeType: "YulLiteral";
                                                                            readonly src: "5341:1:125";
                                                                            readonly type: "";
                                                                            readonly value: "0";
                                                                        }, {
                                                                            readonly kind: "number";
                                                                            readonly nodeType: "YulLiteral";
                                                                            readonly src: "5344:1:125";
                                                                            readonly type: "";
                                                                            readonly value: "0";
                                                                        }];
                                                                        readonly functionName: {
                                                                            readonly name: "revert";
                                                                            readonly nodeType: "YulIdentifier";
                                                                            readonly src: "5334:6:125";
                                                                        };
                                                                        readonly nodeType: "YulFunctionCall";
                                                                        readonly src: "5334:12:125";
                                                                    };
                                                                    readonly nodeType: "YulExpressionStatement";
                                                                    readonly src: "5334:12:125";
                                                                }];
                                                            };
                                                            readonly condition: {
                                                                readonly arguments: readonly [{
                                                                    readonly name: "zxRound";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5291:7:125";
                                                                }, {
                                                                    readonly name: "zx";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5300:2:125";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "lt";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5288:2:125";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "5288:15:125";
                                                            };
                                                            readonly nodeType: "YulIf";
                                                            readonly src: "5285:87:125";
                                                        }, {
                                                            readonly nodeType: "YulAssignment";
                                                            readonly src: "5457:25:125";
                                                            readonly value: {
                                                                readonly arguments: readonly [{
                                                                    readonly name: "zxRound";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5466:7:125";
                                                                }, {
                                                                    readonly name: "scalar";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5475:6:125";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "div";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5462:3:125";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "5462:20:125";
                                                            };
                                                            readonly variableNames: readonly [{
                                                                readonly name: "z";
                                                                readonly nodeType: "YulIdentifier";
                                                                readonly src: "5457:1:125";
                                                            }];
                                                        }];
                                                    };
                                                    readonly condition: {
                                                        readonly arguments: readonly [{
                                                            readonly name: "n";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4685:1:125";
                                                        }, {
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "4688:1:125";
                                                            readonly type: "";
                                                            readonly value: "2";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "mod";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4681:3:125";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4681:9:125";
                                                    };
                                                    readonly nodeType: "YulIf";
                                                    readonly src: "4678:826:125";
                                                }];
                                            };
                                            readonly condition: {
                                                readonly name: "n";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3824:1:125";
                                            };
                                            readonly nodeType: "YulForLoop";
                                            readonly post: {
                                                readonly nodeType: "YulBlock";
                                                readonly src: "3826:124:125";
                                                readonly statements: readonly [{
                                                    readonly nodeType: "YulAssignment";
                                                    readonly src: "3918:14:125";
                                                    readonly value: {
                                                        readonly arguments: readonly [{
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "3927:1:125";
                                                            readonly type: "";
                                                            readonly value: "1";
                                                        }, {
                                                            readonly name: "n";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3930:1:125";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "shr";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3923:3:125";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "3923:9:125";
                                                    };
                                                    readonly variableNames: readonly [{
                                                        readonly name: "n";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "3918:1:125";
                                                    }];
                                                }];
                                            };
                                            readonly pre: {
                                                readonly nodeType: "YulBlock";
                                                readonly src: "3699:124:125";
                                                readonly statements: readonly [{
                                                    readonly nodeType: "YulAssignment";
                                                    readonly src: "3791:14:125";
                                                    readonly value: {
                                                        readonly arguments: readonly [{
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "3800:1:125";
                                                            readonly type: "";
                                                            readonly value: "1";
                                                        }, {
                                                            readonly name: "n";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3803:1:125";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "shr";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3796:3:125";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "3796:9:125";
                                                    };
                                                    readonly variableNames: readonly [{
                                                        readonly name: "n";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "3791:1:125";
                                                    }];
                                                }];
                                            };
                                            readonly src: "3695:1827:125";
                                        }];
                                    };
                                    readonly nodeType: "YulCase";
                                    readonly src: "3261:2275:125";
                                    readonly value: "default";
                                }];
                                readonly expression: {
                                    readonly name: "x";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2973:1:125";
                                };
                                readonly nodeType: "YulSwitch";
                                readonly src: "2966:2570:125";
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 68851;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3019:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68851;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3298:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68851;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3791:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68851;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3803:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68851;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3824:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68851;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3918:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68851;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3930:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68851;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4685:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68853;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3105:6:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68853;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3418:6:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68853;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3670:6:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68853;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4612:6:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68853;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5475:6:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68849;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2973:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68849;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3552:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68849;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4122:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68849;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4261:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68849;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4264:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68849;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4594:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68849;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4776:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68849;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4873:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68849;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4984:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68856;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3100:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68856;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3210:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68856;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3413:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68856;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3547:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68856;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4773:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68856;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4877:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68856;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5457:1:125";
                            readonly valueSize: 1;
                        }];
                        readonly id: 68858;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "2943:2603:125";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "rpow";
                readonly nameLocation: "2783:4:125";
                readonly parameters: {
                    readonly id: 68854;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68849;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "2805:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68860;
                        readonly src: "2797:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68848;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2797:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68851;
                        readonly mutability: "mutable";
                        readonly name: "n";
                        readonly nameLocation: "2824:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68860;
                        readonly src: "2816:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68850;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2816:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68853;
                        readonly mutability: "mutable";
                        readonly name: "scalar";
                        readonly nameLocation: "2843:6:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68860;
                        readonly src: "2835:14:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68852;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2835:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2787:68:125";
                };
                readonly returnParameters: {
                    readonly id: 68857;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68856;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "2887:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68860;
                        readonly src: "2879:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68855;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2879:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2878:11:125";
                };
                readonly scope: 68903;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68869;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5746:3396:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68868;
                    readonly nodeType: "Block";
                    readonly src: "5805:3337:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "5867:3269:125";
                            readonly statements: readonly [{
                                readonly nodeType: "YulVariableDeclaration";
                                readonly src: "5881:10:125";
                                readonly value: {
                                    readonly name: "x";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "5890:1:125";
                                };
                                readonly variables: readonly [{
                                    readonly name: "y";
                                    readonly nodeType: "YulTypedName";
                                    readonly src: "5885:1:125";
                                    readonly type: "";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "5971:8:125";
                                readonly value: {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "5976:3:125";
                                    readonly type: "";
                                    readonly value: "181";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "5971:1:125";
                                }];
                            }, {
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "6465:80:125";
                                    readonly statements: readonly [{
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6483:16:125";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6492:3:125";
                                                readonly type: "";
                                                readonly value: "128";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6497:1:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shr";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6488:3:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6488:11:125";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6483:1:125";
                                        }];
                                    }, {
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6516:15:125";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6525:2:125";
                                                readonly type: "";
                                                readonly value: "64";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6529:1:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6521:3:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6521:10:125";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6516:1:125";
                                        }];
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6422:1:125";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6425:37:125";
                                            readonly type: "";
                                            readonly value: "0x10000000000000000000000000000000000";
                                        }];
                                        readonly functionName: {
                                            readonly name: "lt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6419:2:125";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "6419:44:125";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "6412:6:125";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "6412:52:125";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "6409:136:125";
                            }, {
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "6598:79:125";
                                    readonly statements: readonly [{
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6616:15:125";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6625:2:125";
                                                readonly type: "";
                                                readonly value: "64";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6629:1:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shr";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6621:3:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6621:10:125";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6616:1:125";
                                        }];
                                    }, {
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6648:15:125";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6657:2:125";
                                                readonly type: "";
                                                readonly value: "32";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6661:1:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6653:3:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6653:10:125";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6648:1:125";
                                        }];
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6571:1:125";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6574:21:125";
                                            readonly type: "";
                                            readonly value: "0x1000000000000000000";
                                        }];
                                        readonly functionName: {
                                            readonly name: "lt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6568:2:125";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "6568:28:125";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "6561:6:125";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "6561:36:125";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "6558:119:125";
                            }, {
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "6722:79:125";
                                    readonly statements: readonly [{
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6740:15:125";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6749:2:125";
                                                readonly type: "";
                                                readonly value: "32";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6753:1:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shr";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6745:3:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6745:10:125";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6740:1:125";
                                        }];
                                    }, {
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6772:15:125";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6781:2:125";
                                                readonly type: "";
                                                readonly value: "16";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6785:1:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6777:3:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6777:10:125";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6772:1:125";
                                        }];
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6703:1:125";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6706:13:125";
                                            readonly type: "";
                                            readonly value: "0x10000000000";
                                        }];
                                        readonly functionName: {
                                            readonly name: "lt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6700:2:125";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "6700:20:125";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "6693:6:125";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "6693:28:125";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "6690:111:125";
                            }, {
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "6842:78:125";
                                    readonly statements: readonly [{
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6860:15:125";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6869:2:125";
                                                readonly type: "";
                                                readonly value: "16";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6873:1:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shr";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6865:3:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6865:10:125";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6860:1:125";
                                        }];
                                    }, {
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6892:14:125";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6901:1:125";
                                                readonly type: "";
                                                readonly value: "8";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6904:1:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6897:3:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6897:9:125";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6892:1:125";
                                        }];
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6827:1:125";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6830:9:125";
                                            readonly type: "";
                                            readonly value: "0x1000000";
                                        }];
                                        readonly functionName: {
                                            readonly name: "lt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6824:2:125";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "6824:16:125";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "6817:6:125";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "6817:24:125";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "6814:106:125";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8110:35:125";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8119:2:125";
                                        readonly type: "";
                                        readonly value: "18";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8127:1:125";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8134:1:125";
                                            }, {
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "8137:5:125";
                                                readonly type: "";
                                                readonly value: "65536";
                                            }];
                                            readonly functionName: {
                                                readonly name: "add";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8130:3:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8130:13:125";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mul";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8123:3:125";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8123:21:125";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8115:3:125";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8115:30:125";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8110:1:125";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8306:30:125";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8315:1:125";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8322:1:125";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8329:1:125";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8332:1:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8325:3:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8325:9:125";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8318:3:125";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8318:17:125";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8311:3:125";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8311:25:125";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8306:1:125";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8349:30:125";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8358:1:125";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8365:1:125";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8372:1:125";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8375:1:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8368:3:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8368:9:125";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8361:3:125";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8361:17:125";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8354:3:125";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8354:25:125";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8349:1:125";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8392:30:125";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8401:1:125";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8408:1:125";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8415:1:125";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8418:1:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8411:3:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8411:9:125";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8404:3:125";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8404:17:125";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8397:3:125";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8397:25:125";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8392:1:125";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8435:30:125";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8444:1:125";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8451:1:125";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8458:1:125";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8461:1:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8454:3:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8454:9:125";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8447:3:125";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8447:17:125";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8440:3:125";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8440:25:125";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8435:1:125";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8478:30:125";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8487:1:125";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8494:1:125";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8501:1:125";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8504:1:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8497:3:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8497:9:125";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8490:3:125";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8490:17:125";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8483:3:125";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8483:25:125";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8478:1:125";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8521:30:125";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8530:1:125";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8537:1:125";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8544:1:125";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8547:1:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8540:3:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8540:9:125";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8533:3:125";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8533:17:125";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8526:3:125";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8526:25:125";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8521:1:125";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8564:30:125";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8573:1:125";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8580:1:125";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8587:1:125";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8590:1:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8583:3:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8583:9:125";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8576:3:125";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8576:17:125";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8569:3:125";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8569:25:125";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8564:1:125";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "9097:29:125";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "z";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9106:1:125";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9116:1:125";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9119:1:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9112:3:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "9112:9:125";
                                        }, {
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9123:1:125";
                                        }];
                                        readonly functionName: {
                                            readonly name: "lt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9109:2:125";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "9109:16:125";
                                    }];
                                    readonly functionName: {
                                        readonly name: "sub";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9102:3:125";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "9102:24:125";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "9097:1:125";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 68862;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5890:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68862;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8329:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68862;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8372:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68862;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8415:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68862;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8458:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68862;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8501:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68862;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8544:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68862;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8587:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68862;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9116:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5971:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6516:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6529:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6648:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6661:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6772:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6785:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6892:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6904:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8110:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8127:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8306:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8322:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8332:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8349:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8365:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8375:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8392:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8408:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8418:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8435:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8451:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8461:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8478:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8494:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8504:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8521:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8537:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8547:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8564:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8580:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8590:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9097:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9106:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9119:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68865;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9123:1:125";
                            readonly valueSize: 1;
                        }];
                        readonly id: 68867;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "5858:3278:125";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "sqrt";
                readonly nameLocation: "5755:4:125";
                readonly parameters: {
                    readonly id: 68863;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68862;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "5768:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68869;
                        readonly src: "5760:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68861;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5760:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5759:11:125";
                };
                readonly returnParameters: {
                    readonly id: 68866;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68865;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "5802:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68869;
                        readonly src: "5794:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68864;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5794:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5793:11:125";
                };
                readonly scope: 68903;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68880;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9148:282:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68879;
                    readonly nodeType: "Block";
                    readonly src: "9223:207:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "9285:139:125";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "9400:14:125";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "x";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9409:1:125";
                                    }, {
                                        readonly name: "y";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9412:1:125";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mod";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9405:3:125";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "9405:9:125";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "9400:1:125";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 68871;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9409:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68873;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9412:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68876;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9400:1:125";
                            readonly valueSize: 1;
                        }];
                        readonly id: 68878;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "9276:148:125";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "unsafeMod";
                readonly nameLocation: "9157:9:125";
                readonly parameters: {
                    readonly id: 68874;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68871;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "9175:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68880;
                        readonly src: "9167:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68870;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9167:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68873;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "9186:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68880;
                        readonly src: "9178:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68872;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9178:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9166:22:125";
                };
                readonly returnParameters: {
                    readonly id: 68877;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68876;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "9220:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68880;
                        readonly src: "9212:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68875;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9212:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9211:11:125";
                };
                readonly scope: 68903;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68891;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9436:285:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68890;
                    readonly nodeType: "Block";
                    readonly src: "9511:210:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "9573:142:125";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "9691:14:125";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "x";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9700:1:125";
                                    }, {
                                        readonly name: "y";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9703:1:125";
                                    }];
                                    readonly functionName: {
                                        readonly name: "div";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9696:3:125";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "9696:9:125";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "r";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "9691:1:125";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 68887;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9691:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68882;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9700:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68884;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9703:1:125";
                            readonly valueSize: 1;
                        }];
                        readonly id: 68889;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "9564:151:125";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "unsafeDiv";
                readonly nameLocation: "9445:9:125";
                readonly parameters: {
                    readonly id: 68885;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68882;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "9463:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68891;
                        readonly src: "9455:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68881;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9455:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68884;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "9474:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68891;
                        readonly src: "9466:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68883;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9466:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9454:22:125";
                };
                readonly returnParameters: {
                    readonly id: 68888;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68887;
                        readonly mutability: "mutable";
                        readonly name: "r";
                        readonly nameLocation: "9508:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68891;
                        readonly src: "9500:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68886;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9500:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9499:11:125";
                };
                readonly scope: 68903;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68902;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9727:324:125";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68901;
                    readonly nodeType: "Block";
                    readonly src: "9804:247:125";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "9866:179:125";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "9998:37:125";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "10014:1:125";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "10017:1:125";
                                            }];
                                            readonly functionName: {
                                                readonly name: "mod";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "10010:3:125";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "10010:9:125";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "10021:1:125";
                                            readonly type: "";
                                            readonly value: "0";
                                        }];
                                        readonly functionName: {
                                            readonly name: "gt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "10007:2:125";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "10007:16:125";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "x";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "10029:1:125";
                                        }, {
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "10032:1:125";
                                        }];
                                        readonly functionName: {
                                            readonly name: "div";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "10025:3:125";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "10025:9:125";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "10003:3:125";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "10003:32:125";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "9998:1:125";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 68893;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "10014:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68893;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "10029:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68895;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "10017:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68895;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "10032:1:125";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68898;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9998:1:125";
                            readonly valueSize: 1;
                        }];
                        readonly id: 68900;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "9857:188:125";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "unsafeDivUp";
                readonly nameLocation: "9736:11:125";
                readonly parameters: {
                    readonly id: 68896;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68893;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "9756:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68902;
                        readonly src: "9748:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68892;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9748:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68895;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "9767:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68902;
                        readonly src: "9759:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68894;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9759:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9747:22:125";
                };
                readonly returnParameters: {
                    readonly id: 68899;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68898;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "9801:1:125";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68902;
                        readonly src: "9793:9:125";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68897;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9793:7:125";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9792:11:125";
                };
                readonly scope: 68903;
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
                readonly id: 68747;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "68:273:125";
                readonly text: "@notice Arithmetic library with operations for fixed-point numbers.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @author Inspired by USM (https://github.com/usmfum/USM/blob/master/contracts/WadMath.sol)";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [68903];
            readonly name: "FixedPointMathLib";
            readonly nameLocation: "349:17:125";
            readonly scope: 68904;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "AGPL-3.0-only";
    };
    readonly id: 125;
};
//# sourceMappingURL=FixedPointMathLib.d.ts.map