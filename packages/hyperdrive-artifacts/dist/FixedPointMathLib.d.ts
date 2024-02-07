export declare const FixedPointMathLib: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207833532335256498efdbb7d8373135640993cd82a007b563f92be27d6ba4d9c364736f6c63430008140033";
        readonly sourceMap: "341:9712:126:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;341:9712:126;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207833532335256498efdbb7d8373135640993cd82a007b563f92be27d6ba4d9c364736f6c63430008140033";
        readonly sourceMap: "341:9712:126:-:0;;;;;;;;";
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
        readonly id: 68652;
        readonly exportedSymbols: {
            readonly FixedPointMathLib: readonly [68651];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "42:10012:126";
        readonly nodes: readonly [{
            readonly id: 68494;
            readonly nodeType: "PragmaDirective";
            readonly src: "42:24:126";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.8", ".0"];
        }, {
            readonly id: 68651;
            readonly nodeType: "ContractDefinition";
            readonly src: "341:9712:126";
            readonly nodes: readonly [{
                readonly id: 68502;
                readonly nodeType: "VariableDeclaration";
                readonly src: "566:50:126";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_UINT256";
                readonly nameLocation: "592:11:126";
                readonly scope: 68651;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68496;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "566:7:126";
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
                    readonly id: 68501;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly lValueRequested: false;
                    readonly leftExpression: {
                        readonly commonType: {
                            readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1";
                            readonly typeString: "int_const 1157...(70 digits omitted)...9936";
                        };
                        readonly id: 68499;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly lValueRequested: false;
                        readonly leftExpression: {
                            readonly hexValue: "32";
                            readonly id: 68497;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "606:1:126";
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
                            readonly id: 68498;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "609:3:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_256_by_1";
                                readonly typeString: "int_const 256";
                            };
                            readonly value: "256";
                        };
                        readonly src: "606:6:126";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1";
                            readonly typeString: "int_const 1157...(70 digits omitted)...9936";
                        };
                    };
                    readonly nodeType: "BinaryOperation";
                    readonly operator: "-";
                    readonly rightExpression: {
                        readonly hexValue: "31";
                        readonly id: 68500;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "number";
                        readonly lValueRequested: false;
                        readonly nodeType: "Literal";
                        readonly src: "615:1:126";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_rational_1_by_1";
                            readonly typeString: "int_const 1";
                        };
                        readonly value: "1";
                    };
                    readonly src: "606:10:126";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1";
                        readonly typeString: "int_const 1157...(70 digits omitted)...9935";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68505;
                readonly nodeType: "VariableDeclaration";
                readonly src: "623:36:126";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "WAD";
                readonly nameLocation: "649:3:126";
                readonly scope: 68651;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68503;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "623:7:126";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "31653138";
                    readonly id: 68504;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "655:4:126";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                        readonly typeString: "int_const 1000000000000000000";
                    };
                    readonly value: "1e18";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68521;
                readonly nodeType: "FunctionDefinition";
                readonly src: "704:164:126";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68520;
                    readonly nodeType: "Block";
                    readonly src: "778:90:126";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 68515;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68507;
                                readonly src: "806:1:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 68516;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68509;
                                readonly src: "809:1:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 68517;
                                readonly name: "WAD";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68505;
                                readonly src: "812:3:126";
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
                                readonly id: 68514;
                                readonly name: "mulDivDown";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68582;
                                readonly src: "795:10:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 68518;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "795:21:126";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 68513;
                        readonly id: 68519;
                        readonly nodeType: "Return";
                        readonly src: "788:28:126";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulWadDown";
                readonly nameLocation: "713:10:126";
                readonly parameters: {
                    readonly id: 68510;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68507;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "732:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68521;
                        readonly src: "724:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68506;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "724:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68509;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "743:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68521;
                        readonly src: "735:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68508;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "735:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "723:22:126";
                };
                readonly returnParameters: {
                    readonly id: 68513;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68512;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68521;
                        readonly src: "769:7:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68511;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "769:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "768:9:126";
                };
                readonly scope: 68651;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68537;
                readonly nodeType: "FunctionDefinition";
                readonly src: "874:158:126";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68536;
                    readonly nodeType: "Block";
                    readonly src: "946:86:126";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 68531;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68523;
                                readonly src: "972:1:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 68532;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68525;
                                readonly src: "975:1:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 68533;
                                readonly name: "WAD";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68505;
                                readonly src: "978:3:126";
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
                                readonly id: 68530;
                                readonly name: "mulDivUp";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68595;
                                readonly src: "963:8:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 68534;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "963:19:126";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 68529;
                        readonly id: 68535;
                        readonly nodeType: "Return";
                        readonly src: "956:26:126";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulWadUp";
                readonly nameLocation: "883:8:126";
                readonly parameters: {
                    readonly id: 68526;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68523;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "900:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68537;
                        readonly src: "892:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68522;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "892:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68525;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "911:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68537;
                        readonly src: "903:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68524;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "903:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "891:22:126";
                };
                readonly returnParameters: {
                    readonly id: 68529;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68528;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68537;
                        readonly src: "937:7:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68527;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "937:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "936:9:126";
                };
                readonly scope: 68651;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68553;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1038:164:126";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68552;
                    readonly nodeType: "Block";
                    readonly src: "1112:90:126";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 68547;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68539;
                                readonly src: "1140:1:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 68548;
                                readonly name: "WAD";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68505;
                                readonly src: "1143:3:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 68549;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68541;
                                readonly src: "1148:1:126";
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
                                readonly id: 68546;
                                readonly name: "mulDivDown";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68582;
                                readonly src: "1129:10:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 68550;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1129:21:126";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 68545;
                        readonly id: 68551;
                        readonly nodeType: "Return";
                        readonly src: "1122:28:126";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "divWadDown";
                readonly nameLocation: "1047:10:126";
                readonly parameters: {
                    readonly id: 68542;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68539;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "1066:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68553;
                        readonly src: "1058:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68538;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1058:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68541;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "1077:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68553;
                        readonly src: "1069:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68540;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1069:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1057:22:126";
                };
                readonly returnParameters: {
                    readonly id: 68545;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68544;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68553;
                        readonly src: "1103:7:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68543;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1103:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1102:9:126";
                };
                readonly scope: 68651;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68569;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1208:158:126";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68568;
                    readonly nodeType: "Block";
                    readonly src: "1280:86:126";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 68563;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68555;
                                readonly src: "1306:1:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 68564;
                                readonly name: "WAD";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68505;
                                readonly src: "1309:3:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 68565;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68557;
                                readonly src: "1314:1:126";
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
                                readonly id: 68562;
                                readonly name: "mulDivUp";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68595;
                                readonly src: "1297:8:126";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 68566;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1297:19:126";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 68561;
                        readonly id: 68567;
                        readonly nodeType: "Return";
                        readonly src: "1290:26:126";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "divWadUp";
                readonly nameLocation: "1217:8:126";
                readonly parameters: {
                    readonly id: 68558;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68555;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "1234:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68569;
                        readonly src: "1226:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68554;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1226:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68557;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "1245:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68569;
                        readonly src: "1237:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68556;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1237:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1225:22:126";
                };
                readonly returnParameters: {
                    readonly id: 68561;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68560;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68569;
                        readonly src: "1271:7:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68559;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1271:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1270:9:126";
                };
                readonly scope: 68651;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68582;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1564:526:126";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68581;
                    readonly nodeType: "Block";
                    readonly src: "1691:399:126";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "1753:331:126";
                            readonly statements: readonly [{
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "1936:44:126";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "1961:1:126";
                                                readonly type: "";
                                                readonly value: "0";
                                            }, {
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "1964:1:126";
                                                readonly type: "";
                                                readonly value: "0";
                                            }];
                                            readonly functionName: {
                                                readonly name: "revert";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "1954:6:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "1954:12:126";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "1954:12:126";
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "denominator";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1878:11:126";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "y";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "1902:1:126";
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly name: "x";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "1908:1:126";
                                                    }, {
                                                        readonly arguments: readonly [{
                                                            readonly name: "MAX_UINT256";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "1915:11:126";
                                                        }, {
                                                            readonly name: "y";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "1928:1:126";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "div";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "1911:3:126";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "1911:19:126";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "gt";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "1905:2:126";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "1905:26:126";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mul";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "1898:3:126";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "1898:34:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "iszero";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "1891:6:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "1891:42:126";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mul";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1874:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "1874:60:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1867:6:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1867:68:126";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "1864:116:126";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "2042:32:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "x";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2055:1:126";
                                        }, {
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2058:1:126";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mul";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2051:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2051:9:126";
                                    }, {
                                        readonly name: "denominator";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2062:11:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "div";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2047:3:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2047:27:126";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2042:1:126";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 68502;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1915:11:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68575;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1878:11:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68575;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2062:11:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68571;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1908:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68571;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2055:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68573;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1902:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68573;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1928:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68573;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2058:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68578;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2042:1:126";
                            readonly valueSize: 1;
                        }];
                        readonly id: 68580;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "1744:340:126";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulDivDown";
                readonly nameLocation: "1573:10:126";
                readonly parameters: {
                    readonly id: 68576;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68571;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "1601:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68582;
                        readonly src: "1593:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68570;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1593:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68573;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "1620:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68582;
                        readonly src: "1612:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68572;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1612:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68575;
                        readonly mutability: "mutable";
                        readonly name: "denominator";
                        readonly nameLocation: "1639:11:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68582;
                        readonly src: "1631:19:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68574;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1631:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1583:73:126";
                };
                readonly returnParameters: {
                    readonly id: 68579;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68578;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "1688:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68582;
                        readonly src: "1680:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68577;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1680:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1679:11:126";
                };
                readonly scope: 68651;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68595;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2096:672:126";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68594;
                    readonly nodeType: "Block";
                    readonly src: "2221:547:126";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "2283:479:126";
                            readonly statements: readonly [{
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "2466:44:126";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "2491:1:126";
                                                readonly type: "";
                                                readonly value: "0";
                                            }, {
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "2494:1:126";
                                                readonly type: "";
                                                readonly value: "0";
                                            }];
                                            readonly functionName: {
                                                readonly name: "revert";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2484:6:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2484:12:126";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "2484:12:126";
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "denominator";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2408:11:126";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "y";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2432:1:126";
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly name: "x";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "2438:1:126";
                                                    }, {
                                                        readonly arguments: readonly [{
                                                            readonly name: "MAX_UINT256";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "2445:11:126";
                                                        }, {
                                                            readonly name: "y";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "2458:1:126";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "div";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "2441:3:126";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "2441:19:126";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "gt";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "2435:2:126";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "2435:26:126";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mul";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2428:3:126";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "2428:34:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "iszero";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2421:6:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2421:42:126";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mul";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2404:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2404:60:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2397:6:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2397:68:126";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "2394:116:126";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "2679:73:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "x";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2699:1:126";
                                                }, {
                                                    readonly name: "y";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2702:1:126";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mul";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2695:3:126";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "2695:9:126";
                                            }, {
                                                readonly name: "denominator";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2706:11:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "mod";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2691:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2691:27:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "2720:1:126";
                                            readonly type: "";
                                            readonly value: "0";
                                        }];
                                        readonly functionName: {
                                            readonly name: "gt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2688:2:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2688:34:126";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2732:1:126";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2735:1:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "mul";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2728:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2728:9:126";
                                        }, {
                                            readonly name: "denominator";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2739:11:126";
                                        }];
                                        readonly functionName: {
                                            readonly name: "div";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2724:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2724:27:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2684:3:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2684:68:126";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2679:1:126";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 68502;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2445:11:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68588;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2408:11:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68588;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2706:11:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68588;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2739:11:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68584;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2438:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68584;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2699:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68584;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2732:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68586;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2432:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68586;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2458:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68586;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2702:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68586;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2735:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68591;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2679:1:126";
                            readonly valueSize: 1;
                        }];
                        readonly id: 68593;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "2274:488:126";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulDivUp";
                readonly nameLocation: "2105:8:126";
                readonly parameters: {
                    readonly id: 68589;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68584;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "2131:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68595;
                        readonly src: "2123:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68583;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2123:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68586;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "2150:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68595;
                        readonly src: "2142:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68585;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2142:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68588;
                        readonly mutability: "mutable";
                        readonly name: "denominator";
                        readonly nameLocation: "2169:11:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68595;
                        readonly src: "2161:19:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68587;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2161:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2113:73:126";
                };
                readonly returnParameters: {
                    readonly id: 68592;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68591;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "2218:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68595;
                        readonly src: "2210:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68590;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2210:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2209:11:126";
                };
                readonly scope: 68651;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68608;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2774:2778:126";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68607;
                    readonly nodeType: "Block";
                    readonly src: "2890:2662:126";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "2952:2594:126";
                            readonly statements: readonly [{
                                readonly cases: readonly [{
                                    readonly body: {
                                        readonly nodeType: "YulBlock";
                                        readonly src: "2994:254:126";
                                        readonly statements: readonly [{
                                            readonly cases: readonly [{
                                                readonly body: {
                                                    readonly nodeType: "YulBlock";
                                                    readonly src: "3044:85:126";
                                                    readonly statements: readonly [{
                                                        readonly nodeType: "YulAssignment";
                                                        readonly src: "3100:11:126";
                                                        readonly value: {
                                                            readonly name: "scalar";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3105:6:126";
                                                        };
                                                        readonly variableNames: readonly [{
                                                            readonly name: "z";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3100:1:126";
                                                        }];
                                                    }];
                                                };
                                                readonly nodeType: "YulCase";
                                                readonly src: "3037:92:126";
                                                readonly value: {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "3042:1:126";
                                                    readonly type: "";
                                                    readonly value: "0";
                                                };
                                            }, {
                                                readonly body: {
                                                    readonly nodeType: "YulBlock";
                                                    readonly src: "3154:80:126";
                                                    readonly statements: readonly [{
                                                        readonly nodeType: "YulAssignment";
                                                        readonly src: "3210:6:126";
                                                        readonly value: {
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "3215:1:126";
                                                            readonly type: "";
                                                            readonly value: "0";
                                                        };
                                                        readonly variableNames: readonly [{
                                                            readonly name: "z";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3210:1:126";
                                                        }];
                                                    }];
                                                };
                                                readonly nodeType: "YulCase";
                                                readonly src: "3146:88:126";
                                                readonly value: "default";
                                            }];
                                            readonly expression: {
                                                readonly name: "n";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3019:1:126";
                                            };
                                            readonly nodeType: "YulSwitch";
                                            readonly src: "3012:222:126";
                                        }];
                                    };
                                    readonly nodeType: "YulCase";
                                    readonly src: "2987:261:126";
                                    readonly value: {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "2992:1:126";
                                        readonly type: "";
                                        readonly value: "0";
                                    };
                                }, {
                                    readonly body: {
                                        readonly nodeType: "YulBlock";
                                        readonly src: "3269:2267:126";
                                        readonly statements: readonly [{
                                            readonly cases: readonly [{
                                                readonly body: {
                                                    readonly nodeType: "YulBlock";
                                                    readonly src: "3327:115:126";
                                                    readonly statements: readonly [{
                                                        readonly nodeType: "YulAssignment";
                                                        readonly src: "3413:11:126";
                                                        readonly value: {
                                                            readonly name: "scalar";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3418:6:126";
                                                        };
                                                        readonly variableNames: readonly [{
                                                            readonly name: "z";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3413:1:126";
                                                        }];
                                                    }];
                                                };
                                                readonly nodeType: "YulCase";
                                                readonly src: "3320:122:126";
                                                readonly value: {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "3325:1:126";
                                                    readonly type: "";
                                                    readonly value: "0";
                                                };
                                            }, {
                                                readonly body: {
                                                    readonly nodeType: "YulBlock";
                                                    readonly src: "3467:104:126";
                                                    readonly statements: readonly [{
                                                        readonly nodeType: "YulAssignment";
                                                        readonly src: "3547:6:126";
                                                        readonly value: {
                                                            readonly name: "x";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3552:1:126";
                                                        };
                                                        readonly variableNames: readonly [{
                                                            readonly name: "z";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3547:1:126";
                                                        }];
                                                    }];
                                                };
                                                readonly nodeType: "YulCase";
                                                readonly src: "3459:112:126";
                                                readonly value: "default";
                                            }];
                                            readonly expression: {
                                                readonly arguments: readonly [{
                                                    readonly name: "n";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3298:1:126";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "3301:1:126";
                                                    readonly type: "";
                                                    readonly value: "2";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mod";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3294:3:126";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "3294:9:126";
                                            };
                                            readonly nodeType: "YulSwitch";
                                            readonly src: "3287:284:126";
                                        }, {
                                            readonly nodeType: "YulVariableDeclaration";
                                            readonly src: "3651:26:126";
                                            readonly value: {
                                                readonly arguments: readonly [{
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "3667:1:126";
                                                    readonly type: "";
                                                    readonly value: "1";
                                                }, {
                                                    readonly name: "scalar";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3670:6:126";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "shr";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3663:3:126";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "3663:14:126";
                                            };
                                            readonly variables: readonly [{
                                                readonly name: "half";
                                                readonly nodeType: "YulTypedName";
                                                readonly src: "3655:4:126";
                                                readonly type: "";
                                            }];
                                        }, {
                                            readonly body: {
                                                readonly nodeType: "YulBlock";
                                                readonly src: "3951:1571:126";
                                                readonly statements: readonly [{
                                                    readonly body: {
                                                        readonly nodeType: "YulBlock";
                                                        readonly src: "4125:60:126";
                                                        readonly statements: readonly [{
                                                            readonly expression: {
                                                                readonly arguments: readonly [{
                                                                    readonly kind: "number";
                                                                    readonly nodeType: "YulLiteral";
                                                                    readonly src: "4158:1:126";
                                                                    readonly type: "";
                                                                    readonly value: "0";
                                                                }, {
                                                                    readonly kind: "number";
                                                                    readonly nodeType: "YulLiteral";
                                                                    readonly src: "4161:1:126";
                                                                    readonly type: "";
                                                                    readonly value: "0";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "revert";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4151:6:126";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "4151:12:126";
                                                            };
                                                            readonly nodeType: "YulExpressionStatement";
                                                            readonly src: "4151:12:126";
                                                        }];
                                                    };
                                                    readonly condition: {
                                                        readonly arguments: readonly [{
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "4117:3:126";
                                                            readonly type: "";
                                                            readonly value: "128";
                                                        }, {
                                                            readonly name: "x";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4122:1:126";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "shr";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4113:3:126";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4113:11:126";
                                                    };
                                                    readonly nodeType: "YulIf";
                                                    readonly src: "4110:75:126";
                                                }, {
                                                    readonly nodeType: "YulVariableDeclaration";
                                                    readonly src: "4247:19:126";
                                                    readonly value: {
                                                        readonly arguments: readonly [{
                                                            readonly name: "x";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4261:1:126";
                                                        }, {
                                                            readonly name: "x";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4264:1:126";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "mul";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4257:3:126";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4257:9:126";
                                                    };
                                                    readonly variables: readonly [{
                                                        readonly name: "xx";
                                                        readonly nodeType: "YulTypedName";
                                                        readonly src: "4251:2:126";
                                                        readonly type: "";
                                                    }];
                                                }, {
                                                    readonly nodeType: "YulVariableDeclaration";
                                                    readonly src: "4340:28:126";
                                                    readonly value: {
                                                        readonly arguments: readonly [{
                                                            readonly name: "xx";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4359:2:126";
                                                        }, {
                                                            readonly name: "half";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4363:4:126";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "add";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4355:3:126";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4355:13:126";
                                                    };
                                                    readonly variables: readonly [{
                                                        readonly name: "xxRound";
                                                        readonly nodeType: "YulTypedName";
                                                        readonly src: "4344:7:126";
                                                        readonly type: "";
                                                    }];
                                                }, {
                                                    readonly body: {
                                                        readonly nodeType: "YulBlock";
                                                        readonly src: "4464:60:126";
                                                        readonly statements: readonly [{
                                                            readonly expression: {
                                                                readonly arguments: readonly [{
                                                                    readonly kind: "number";
                                                                    readonly nodeType: "YulLiteral";
                                                                    readonly src: "4497:1:126";
                                                                    readonly type: "";
                                                                    readonly value: "0";
                                                                }, {
                                                                    readonly kind: "number";
                                                                    readonly nodeType: "YulLiteral";
                                                                    readonly src: "4500:1:126";
                                                                    readonly type: "";
                                                                    readonly value: "0";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "revert";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4490:6:126";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "4490:12:126";
                                                            };
                                                            readonly nodeType: "YulExpressionStatement";
                                                            readonly src: "4490:12:126";
                                                        }];
                                                    };
                                                    readonly condition: {
                                                        readonly arguments: readonly [{
                                                            readonly name: "xxRound";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4451:7:126";
                                                        }, {
                                                            readonly name: "xx";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4460:2:126";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "lt";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4448:2:126";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4448:15:126";
                                                    };
                                                    readonly nodeType: "YulIf";
                                                    readonly src: "4445:79:126";
                                                }, {
                                                    readonly nodeType: "YulAssignment";
                                                    readonly src: "4594:25:126";
                                                    readonly value: {
                                                        readonly arguments: readonly [{
                                                            readonly name: "xxRound";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4603:7:126";
                                                        }, {
                                                            readonly name: "scalar";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4612:6:126";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "div";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4599:3:126";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4599:20:126";
                                                    };
                                                    readonly variableNames: readonly [{
                                                        readonly name: "x";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "4594:1:126";
                                                    }];
                                                }, {
                                                    readonly body: {
                                                        readonly nodeType: "YulBlock";
                                                        readonly src: "4691:813:126";
                                                        readonly statements: readonly [{
                                                            readonly nodeType: "YulVariableDeclaration";
                                                            readonly src: "4759:19:126";
                                                            readonly value: {
                                                                readonly arguments: readonly [{
                                                                    readonly name: "z";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4773:1:126";
                                                                }, {
                                                                    readonly name: "x";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4776:1:126";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "mul";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4769:3:126";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "4769:9:126";
                                                            };
                                                            readonly variables: readonly [{
                                                                readonly name: "zx";
                                                                readonly nodeType: "YulTypedName";
                                                                readonly src: "4763:2:126";
                                                                readonly type: "";
                                                            }];
                                                        }, {
                                                            readonly body: {
                                                                readonly nodeType: "YulBlock";
                                                                readonly src: "4881:209:126";
                                                                readonly statements: readonly [{
                                                                    readonly body: {
                                                                        readonly nodeType: "YulBlock";
                                                                        readonly src: "4988:76:126";
                                                                        readonly statements: readonly [{
                                                                            readonly expression: {
                                                                                readonly arguments: readonly [{
                                                                                    readonly kind: "number";
                                                                                    readonly nodeType: "YulLiteral";
                                                                                    readonly src: "5029:1:126";
                                                                                    readonly type: "";
                                                                                    readonly value: "0";
                                                                                }, {
                                                                                    readonly kind: "number";
                                                                                    readonly nodeType: "YulLiteral";
                                                                                    readonly src: "5032:1:126";
                                                                                    readonly type: "";
                                                                                    readonly value: "0";
                                                                                }];
                                                                                readonly functionName: {
                                                                                    readonly name: "revert";
                                                                                    readonly nodeType: "YulIdentifier";
                                                                                    readonly src: "5022:6:126";
                                                                                };
                                                                                readonly nodeType: "YulFunctionCall";
                                                                                readonly src: "5022:12:126";
                                                                            };
                                                                            readonly nodeType: "YulExpressionStatement";
                                                                            readonly src: "5022:12:126";
                                                                        }];
                                                                    };
                                                                    readonly condition: {
                                                                        readonly arguments: readonly [{
                                                                            readonly arguments: readonly [{
                                                                                readonly name: "x";
                                                                                readonly nodeType: "YulIdentifier";
                                                                                readonly src: "4984:1:126";
                                                                            }];
                                                                            readonly functionName: {
                                                                                readonly name: "iszero";
                                                                                readonly nodeType: "YulIdentifier";
                                                                                readonly src: "4977:6:126";
                                                                            };
                                                                            readonly nodeType: "YulFunctionCall";
                                                                            readonly src: "4977:9:126";
                                                                        }];
                                                                        readonly functionName: {
                                                                            readonly name: "iszero";
                                                                            readonly nodeType: "YulIdentifier";
                                                                            readonly src: "4970:6:126";
                                                                        };
                                                                        readonly nodeType: "YulFunctionCall";
                                                                        readonly src: "4970:17:126";
                                                                    };
                                                                    readonly nodeType: "YulIf";
                                                                    readonly src: "4967:97:126";
                                                                }];
                                                            };
                                                            readonly condition: {
                                                                readonly arguments: readonly [{
                                                                    readonly arguments: readonly [{
                                                                        readonly arguments: readonly [{
                                                                            readonly name: "zx";
                                                                            readonly nodeType: "YulIdentifier";
                                                                            readonly src: "4869:2:126";
                                                                        }, {
                                                                            readonly name: "x";
                                                                            readonly nodeType: "YulIdentifier";
                                                                            readonly src: "4873:1:126";
                                                                        }];
                                                                        readonly functionName: {
                                                                            readonly name: "div";
                                                                            readonly nodeType: "YulIdentifier";
                                                                            readonly src: "4865:3:126";
                                                                        };
                                                                        readonly nodeType: "YulFunctionCall";
                                                                        readonly src: "4865:10:126";
                                                                    }, {
                                                                        readonly name: "z";
                                                                        readonly nodeType: "YulIdentifier";
                                                                        readonly src: "4877:1:126";
                                                                    }];
                                                                    readonly functionName: {
                                                                        readonly name: "eq";
                                                                        readonly nodeType: "YulIdentifier";
                                                                        readonly src: "4862:2:126";
                                                                    };
                                                                    readonly nodeType: "YulFunctionCall";
                                                                    readonly src: "4862:17:126";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "iszero";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4855:6:126";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "4855:25:126";
                                                            };
                                                            readonly nodeType: "YulIf";
                                                            readonly src: "4852:238:126";
                                                        }, {
                                                            readonly nodeType: "YulVariableDeclaration";
                                                            readonly src: "5172:28:126";
                                                            readonly value: {
                                                                readonly arguments: readonly [{
                                                                    readonly name: "zx";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5191:2:126";
                                                                }, {
                                                                    readonly name: "half";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5195:4:126";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "add";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5187:3:126";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "5187:13:126";
                                                            };
                                                            readonly variables: readonly [{
                                                                readonly name: "zxRound";
                                                                readonly nodeType: "YulTypedName";
                                                                readonly src: "5176:7:126";
                                                                readonly type: "";
                                                            }];
                                                        }, {
                                                            readonly body: {
                                                                readonly nodeType: "YulBlock";
                                                                readonly src: "5304:68:126";
                                                                readonly statements: readonly [{
                                                                    readonly expression: {
                                                                        readonly arguments: readonly [{
                                                                            readonly kind: "number";
                                                                            readonly nodeType: "YulLiteral";
                                                                            readonly src: "5341:1:126";
                                                                            readonly type: "";
                                                                            readonly value: "0";
                                                                        }, {
                                                                            readonly kind: "number";
                                                                            readonly nodeType: "YulLiteral";
                                                                            readonly src: "5344:1:126";
                                                                            readonly type: "";
                                                                            readonly value: "0";
                                                                        }];
                                                                        readonly functionName: {
                                                                            readonly name: "revert";
                                                                            readonly nodeType: "YulIdentifier";
                                                                            readonly src: "5334:6:126";
                                                                        };
                                                                        readonly nodeType: "YulFunctionCall";
                                                                        readonly src: "5334:12:126";
                                                                    };
                                                                    readonly nodeType: "YulExpressionStatement";
                                                                    readonly src: "5334:12:126";
                                                                }];
                                                            };
                                                            readonly condition: {
                                                                readonly arguments: readonly [{
                                                                    readonly name: "zxRound";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5291:7:126";
                                                                }, {
                                                                    readonly name: "zx";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5300:2:126";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "lt";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5288:2:126";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "5288:15:126";
                                                            };
                                                            readonly nodeType: "YulIf";
                                                            readonly src: "5285:87:126";
                                                        }, {
                                                            readonly nodeType: "YulAssignment";
                                                            readonly src: "5457:25:126";
                                                            readonly value: {
                                                                readonly arguments: readonly [{
                                                                    readonly name: "zxRound";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5466:7:126";
                                                                }, {
                                                                    readonly name: "scalar";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5475:6:126";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "div";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5462:3:126";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "5462:20:126";
                                                            };
                                                            readonly variableNames: readonly [{
                                                                readonly name: "z";
                                                                readonly nodeType: "YulIdentifier";
                                                                readonly src: "5457:1:126";
                                                            }];
                                                        }];
                                                    };
                                                    readonly condition: {
                                                        readonly arguments: readonly [{
                                                            readonly name: "n";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4685:1:126";
                                                        }, {
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "4688:1:126";
                                                            readonly type: "";
                                                            readonly value: "2";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "mod";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4681:3:126";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4681:9:126";
                                                    };
                                                    readonly nodeType: "YulIf";
                                                    readonly src: "4678:826:126";
                                                }];
                                            };
                                            readonly condition: {
                                                readonly name: "n";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3824:1:126";
                                            };
                                            readonly nodeType: "YulForLoop";
                                            readonly post: {
                                                readonly nodeType: "YulBlock";
                                                readonly src: "3826:124:126";
                                                readonly statements: readonly [{
                                                    readonly nodeType: "YulAssignment";
                                                    readonly src: "3918:14:126";
                                                    readonly value: {
                                                        readonly arguments: readonly [{
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "3927:1:126";
                                                            readonly type: "";
                                                            readonly value: "1";
                                                        }, {
                                                            readonly name: "n";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3930:1:126";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "shr";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3923:3:126";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "3923:9:126";
                                                    };
                                                    readonly variableNames: readonly [{
                                                        readonly name: "n";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "3918:1:126";
                                                    }];
                                                }];
                                            };
                                            readonly pre: {
                                                readonly nodeType: "YulBlock";
                                                readonly src: "3699:124:126";
                                                readonly statements: readonly [{
                                                    readonly nodeType: "YulAssignment";
                                                    readonly src: "3791:14:126";
                                                    readonly value: {
                                                        readonly arguments: readonly [{
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "3800:1:126";
                                                            readonly type: "";
                                                            readonly value: "1";
                                                        }, {
                                                            readonly name: "n";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3803:1:126";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "shr";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3796:3:126";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "3796:9:126";
                                                    };
                                                    readonly variableNames: readonly [{
                                                        readonly name: "n";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "3791:1:126";
                                                    }];
                                                }];
                                            };
                                            readonly src: "3695:1827:126";
                                        }];
                                    };
                                    readonly nodeType: "YulCase";
                                    readonly src: "3261:2275:126";
                                    readonly value: "default";
                                }];
                                readonly expression: {
                                    readonly name: "x";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2973:1:126";
                                };
                                readonly nodeType: "YulSwitch";
                                readonly src: "2966:2570:126";
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 68599;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3019:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68599;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3298:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68599;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3791:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68599;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3803:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68599;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3824:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68599;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3918:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68599;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3930:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68599;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4685:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68601;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3105:6:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68601;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3418:6:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68601;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3670:6:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68601;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4612:6:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68601;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5475:6:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68597;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2973:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68597;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3552:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68597;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4122:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68597;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4261:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68597;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4264:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68597;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4594:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68597;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4776:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68597;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4873:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68597;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4984:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68604;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3100:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68604;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3210:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68604;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3413:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68604;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3547:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68604;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4773:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68604;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4877:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68604;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5457:1:126";
                            readonly valueSize: 1;
                        }];
                        readonly id: 68606;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "2943:2603:126";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "rpow";
                readonly nameLocation: "2783:4:126";
                readonly parameters: {
                    readonly id: 68602;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68597;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "2805:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68608;
                        readonly src: "2797:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68596;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2797:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68599;
                        readonly mutability: "mutable";
                        readonly name: "n";
                        readonly nameLocation: "2824:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68608;
                        readonly src: "2816:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68598;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2816:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68601;
                        readonly mutability: "mutable";
                        readonly name: "scalar";
                        readonly nameLocation: "2843:6:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68608;
                        readonly src: "2835:14:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68600;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2835:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2787:68:126";
                };
                readonly returnParameters: {
                    readonly id: 68605;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68604;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "2887:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68608;
                        readonly src: "2879:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68603;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2879:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2878:11:126";
                };
                readonly scope: 68651;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68617;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5746:3396:126";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68616;
                    readonly nodeType: "Block";
                    readonly src: "5805:3337:126";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "5867:3269:126";
                            readonly statements: readonly [{
                                readonly nodeType: "YulVariableDeclaration";
                                readonly src: "5881:10:126";
                                readonly value: {
                                    readonly name: "x";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "5890:1:126";
                                };
                                readonly variables: readonly [{
                                    readonly name: "y";
                                    readonly nodeType: "YulTypedName";
                                    readonly src: "5885:1:126";
                                    readonly type: "";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "5971:8:126";
                                readonly value: {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "5976:3:126";
                                    readonly type: "";
                                    readonly value: "181";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "5971:1:126";
                                }];
                            }, {
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "6465:80:126";
                                    readonly statements: readonly [{
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6483:16:126";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6492:3:126";
                                                readonly type: "";
                                                readonly value: "128";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6497:1:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shr";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6488:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6488:11:126";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6483:1:126";
                                        }];
                                    }, {
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6516:15:126";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6525:2:126";
                                                readonly type: "";
                                                readonly value: "64";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6529:1:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6521:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6521:10:126";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6516:1:126";
                                        }];
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6422:1:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6425:37:126";
                                            readonly type: "";
                                            readonly value: "0x10000000000000000000000000000000000";
                                        }];
                                        readonly functionName: {
                                            readonly name: "lt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6419:2:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "6419:44:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "6412:6:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "6412:52:126";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "6409:136:126";
                            }, {
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "6598:79:126";
                                    readonly statements: readonly [{
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6616:15:126";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6625:2:126";
                                                readonly type: "";
                                                readonly value: "64";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6629:1:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shr";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6621:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6621:10:126";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6616:1:126";
                                        }];
                                    }, {
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6648:15:126";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6657:2:126";
                                                readonly type: "";
                                                readonly value: "32";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6661:1:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6653:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6653:10:126";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6648:1:126";
                                        }];
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6571:1:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6574:21:126";
                                            readonly type: "";
                                            readonly value: "0x1000000000000000000";
                                        }];
                                        readonly functionName: {
                                            readonly name: "lt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6568:2:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "6568:28:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "6561:6:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "6561:36:126";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "6558:119:126";
                            }, {
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "6722:79:126";
                                    readonly statements: readonly [{
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6740:15:126";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6749:2:126";
                                                readonly type: "";
                                                readonly value: "32";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6753:1:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shr";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6745:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6745:10:126";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6740:1:126";
                                        }];
                                    }, {
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6772:15:126";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6781:2:126";
                                                readonly type: "";
                                                readonly value: "16";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6785:1:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6777:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6777:10:126";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6772:1:126";
                                        }];
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6703:1:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6706:13:126";
                                            readonly type: "";
                                            readonly value: "0x10000000000";
                                        }];
                                        readonly functionName: {
                                            readonly name: "lt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6700:2:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "6700:20:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "6693:6:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "6693:28:126";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "6690:111:126";
                            }, {
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "6842:78:126";
                                    readonly statements: readonly [{
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6860:15:126";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6869:2:126";
                                                readonly type: "";
                                                readonly value: "16";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6873:1:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shr";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6865:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6865:10:126";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6860:1:126";
                                        }];
                                    }, {
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6892:14:126";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6901:1:126";
                                                readonly type: "";
                                                readonly value: "8";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6904:1:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6897:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6897:9:126";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6892:1:126";
                                        }];
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6827:1:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6830:9:126";
                                            readonly type: "";
                                            readonly value: "0x1000000";
                                        }];
                                        readonly functionName: {
                                            readonly name: "lt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6824:2:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "6824:16:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "6817:6:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "6817:24:126";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "6814:106:126";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8110:35:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8119:2:126";
                                        readonly type: "";
                                        readonly value: "18";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8127:1:126";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8134:1:126";
                                            }, {
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "8137:5:126";
                                                readonly type: "";
                                                readonly value: "65536";
                                            }];
                                            readonly functionName: {
                                                readonly name: "add";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8130:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8130:13:126";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mul";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8123:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8123:21:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8115:3:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8115:30:126";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8110:1:126";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8306:30:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8315:1:126";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8322:1:126";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8329:1:126";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8332:1:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8325:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8325:9:126";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8318:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8318:17:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8311:3:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8311:25:126";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8306:1:126";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8349:30:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8358:1:126";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8365:1:126";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8372:1:126";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8375:1:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8368:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8368:9:126";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8361:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8361:17:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8354:3:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8354:25:126";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8349:1:126";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8392:30:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8401:1:126";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8408:1:126";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8415:1:126";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8418:1:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8411:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8411:9:126";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8404:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8404:17:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8397:3:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8397:25:126";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8392:1:126";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8435:30:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8444:1:126";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8451:1:126";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8458:1:126";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8461:1:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8454:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8454:9:126";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8447:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8447:17:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8440:3:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8440:25:126";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8435:1:126";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8478:30:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8487:1:126";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8494:1:126";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8501:1:126";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8504:1:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8497:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8497:9:126";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8490:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8490:17:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8483:3:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8483:25:126";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8478:1:126";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8521:30:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8530:1:126";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8537:1:126";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8544:1:126";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8547:1:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8540:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8540:9:126";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8533:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8533:17:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8526:3:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8526:25:126";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8521:1:126";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8564:30:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8573:1:126";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8580:1:126";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8587:1:126";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8590:1:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8583:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8583:9:126";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8576:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8576:17:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8569:3:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8569:25:126";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8564:1:126";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "9097:29:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "z";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9106:1:126";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9116:1:126";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9119:1:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9112:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "9112:9:126";
                                        }, {
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9123:1:126";
                                        }];
                                        readonly functionName: {
                                            readonly name: "lt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9109:2:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "9109:16:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "sub";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9102:3:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "9102:24:126";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "9097:1:126";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 68610;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5890:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68610;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8329:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68610;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8372:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68610;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8415:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68610;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8458:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68610;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8501:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68610;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8544:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68610;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8587:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68610;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9116:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5971:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6516:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6529:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6648:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6661:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6772:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6785:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6892:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6904:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8110:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8127:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8306:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8322:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8332:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8349:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8365:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8375:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8392:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8408:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8418:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8435:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8451:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8461:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8478:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8494:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8504:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8521:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8537:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8547:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8564:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8580:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8590:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9097:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9106:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9119:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68613;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9123:1:126";
                            readonly valueSize: 1;
                        }];
                        readonly id: 68615;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "5858:3278:126";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "sqrt";
                readonly nameLocation: "5755:4:126";
                readonly parameters: {
                    readonly id: 68611;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68610;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "5768:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68617;
                        readonly src: "5760:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68609;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5760:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5759:11:126";
                };
                readonly returnParameters: {
                    readonly id: 68614;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68613;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "5802:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68617;
                        readonly src: "5794:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68612;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5794:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5793:11:126";
                };
                readonly scope: 68651;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68628;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9148:282:126";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68627;
                    readonly nodeType: "Block";
                    readonly src: "9223:207:126";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "9285:139:126";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "9400:14:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "x";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9409:1:126";
                                    }, {
                                        readonly name: "y";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9412:1:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mod";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9405:3:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "9405:9:126";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "9400:1:126";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 68619;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9409:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68621;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9412:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68624;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9400:1:126";
                            readonly valueSize: 1;
                        }];
                        readonly id: 68626;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "9276:148:126";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "unsafeMod";
                readonly nameLocation: "9157:9:126";
                readonly parameters: {
                    readonly id: 68622;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68619;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "9175:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68628;
                        readonly src: "9167:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68618;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9167:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68621;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "9186:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68628;
                        readonly src: "9178:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68620;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9178:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9166:22:126";
                };
                readonly returnParameters: {
                    readonly id: 68625;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68624;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "9220:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68628;
                        readonly src: "9212:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68623;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9212:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9211:11:126";
                };
                readonly scope: 68651;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68639;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9436:285:126";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68638;
                    readonly nodeType: "Block";
                    readonly src: "9511:210:126";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "9573:142:126";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "9691:14:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "x";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9700:1:126";
                                    }, {
                                        readonly name: "y";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9703:1:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "div";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9696:3:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "9696:9:126";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "r";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "9691:1:126";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 68635;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9691:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68630;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9700:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68632;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9703:1:126";
                            readonly valueSize: 1;
                        }];
                        readonly id: 68637;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "9564:151:126";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "unsafeDiv";
                readonly nameLocation: "9445:9:126";
                readonly parameters: {
                    readonly id: 68633;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68630;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "9463:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68639;
                        readonly src: "9455:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68629;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9455:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68632;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "9474:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68639;
                        readonly src: "9466:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68631;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9466:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9454:22:126";
                };
                readonly returnParameters: {
                    readonly id: 68636;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68635;
                        readonly mutability: "mutable";
                        readonly name: "r";
                        readonly nameLocation: "9508:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68639;
                        readonly src: "9500:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68634;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9500:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9499:11:126";
                };
                readonly scope: 68651;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 68650;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9727:324:126";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 68649;
                    readonly nodeType: "Block";
                    readonly src: "9804:247:126";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "9866:179:126";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "9998:37:126";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "10014:1:126";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "10017:1:126";
                                            }];
                                            readonly functionName: {
                                                readonly name: "mod";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "10010:3:126";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "10010:9:126";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "10021:1:126";
                                            readonly type: "";
                                            readonly value: "0";
                                        }];
                                        readonly functionName: {
                                            readonly name: "gt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "10007:2:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "10007:16:126";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "x";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "10029:1:126";
                                        }, {
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "10032:1:126";
                                        }];
                                        readonly functionName: {
                                            readonly name: "div";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "10025:3:126";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "10025:9:126";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "10003:3:126";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "10003:32:126";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "9998:1:126";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 68641;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "10014:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68641;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "10029:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68643;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "10017:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68643;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "10032:1:126";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 68646;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9998:1:126";
                            readonly valueSize: 1;
                        }];
                        readonly id: 68648;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "9857:188:126";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "unsafeDivUp";
                readonly nameLocation: "9736:11:126";
                readonly parameters: {
                    readonly id: 68644;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68641;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "9756:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68650;
                        readonly src: "9748:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68640;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9748:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 68643;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "9767:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68650;
                        readonly src: "9759:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68642;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9759:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9747:22:126";
                };
                readonly returnParameters: {
                    readonly id: 68647;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 68646;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "9801:1:126";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68650;
                        readonly src: "9793:9:126";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68645;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9793:7:126";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9792:11:126";
                };
                readonly scope: 68651;
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
                readonly id: 68495;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "68:273:126";
                readonly text: "@notice Arithmetic library with operations for fixed-point numbers.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @author Inspired by USM (https://github.com/usmfum/USM/blob/master/contracts/WadMath.sol)";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [68651];
            readonly name: "FixedPointMathLib";
            readonly nameLocation: "349:17:126";
            readonly scope: 68652;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "AGPL-3.0-only";
    };
    readonly id: 126;
};
//# sourceMappingURL=FixedPointMathLib.d.ts.map