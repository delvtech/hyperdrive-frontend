export declare const FixedPointMathLib: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212206792f474473b388cd8d1c9e8dd54c7660058414a03199118dd014b2d16ce300b64736f6c63430008140033";
        readonly sourceMap: "341:9712:174:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;341:9712:174;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212206792f474473b388cd8d1c9e8dd54c7660058414a03199118dd014b2d16ce300b64736f6c63430008140033";
        readonly sourceMap: "341:9712:174:-:0;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)Inspired by USM (https://github.com/usmfum/USM/blob/master/contracts/WadMath.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Arithmetic library with operations for fixed-point numbers.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/utils/FixedPointMathLib.sol\":\"FixedPointMathLib\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/solmate/src/utils/FixedPointMathLib.sol\":{\"keccak256\":\"0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9\",\"dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi\"]}},\"version\":1}";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
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
        readonly id: 73185;
        readonly exportedSymbols: {
            readonly FixedPointMathLib: readonly [73184];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "42:10012:174";
        readonly nodes: readonly [{
            readonly id: 73027;
            readonly nodeType: "PragmaDirective";
            readonly src: "42:24:174";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.8", ".0"];
        }, {
            readonly id: 73184;
            readonly nodeType: "ContractDefinition";
            readonly src: "341:9712:174";
            readonly nodes: readonly [{
                readonly id: 73035;
                readonly nodeType: "VariableDeclaration";
                readonly src: "566:50:174";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_UINT256";
                readonly nameLocation: "592:11:174";
                readonly scope: 73184;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73029;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "566:7:174";
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
                    readonly id: 73034;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly lValueRequested: false;
                    readonly leftExpression: {
                        readonly commonType: {
                            readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1";
                            readonly typeString: "int_const 1157...(70 digits omitted)...9936";
                        };
                        readonly id: 73032;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly lValueRequested: false;
                        readonly leftExpression: {
                            readonly hexValue: "32";
                            readonly id: 73030;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "606:1:174";
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
                            readonly id: 73031;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "609:3:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_256_by_1";
                                readonly typeString: "int_const 256";
                            };
                            readonly value: "256";
                        };
                        readonly src: "606:6:174";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1";
                            readonly typeString: "int_const 1157...(70 digits omitted)...9936";
                        };
                    };
                    readonly nodeType: "BinaryOperation";
                    readonly operator: "-";
                    readonly rightExpression: {
                        readonly hexValue: "31";
                        readonly id: 73033;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "number";
                        readonly lValueRequested: false;
                        readonly nodeType: "Literal";
                        readonly src: "615:1:174";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_rational_1_by_1";
                            readonly typeString: "int_const 1";
                        };
                        readonly value: "1";
                    };
                    readonly src: "606:10:174";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1";
                        readonly typeString: "int_const 1157...(70 digits omitted)...9935";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73038;
                readonly nodeType: "VariableDeclaration";
                readonly src: "623:36:174";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "WAD";
                readonly nameLocation: "649:3:174";
                readonly scope: 73184;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73036;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "623:7:174";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "31653138";
                    readonly id: 73037;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "655:4:174";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                        readonly typeString: "int_const 1000000000000000000";
                    };
                    readonly value: "1e18";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73054;
                readonly nodeType: "FunctionDefinition";
                readonly src: "704:164:174";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73053;
                    readonly nodeType: "Block";
                    readonly src: "778:90:174";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 73048;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73040;
                                readonly src: "806:1:174";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 73049;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73042;
                                readonly src: "809:1:174";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 73050;
                                readonly name: "WAD";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73038;
                                readonly src: "812:3:174";
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
                                readonly id: 73047;
                                readonly name: "mulDivDown";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73115;
                                readonly src: "795:10:174";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 73051;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "795:21:174";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 73046;
                        readonly id: 73052;
                        readonly nodeType: "Return";
                        readonly src: "788:28:174";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulWadDown";
                readonly nameLocation: "713:10:174";
                readonly parameters: {
                    readonly id: 73043;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73040;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "732:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73054;
                        readonly src: "724:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73039;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "724:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73042;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "743:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73054;
                        readonly src: "735:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73041;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "735:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "723:22:174";
                };
                readonly returnParameters: {
                    readonly id: 73046;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73045;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73054;
                        readonly src: "769:7:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73044;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "769:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "768:9:174";
                };
                readonly scope: 73184;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73070;
                readonly nodeType: "FunctionDefinition";
                readonly src: "874:158:174";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73069;
                    readonly nodeType: "Block";
                    readonly src: "946:86:174";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 73064;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73056;
                                readonly src: "972:1:174";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 73065;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73058;
                                readonly src: "975:1:174";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 73066;
                                readonly name: "WAD";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73038;
                                readonly src: "978:3:174";
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
                                readonly id: 73063;
                                readonly name: "mulDivUp";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73128;
                                readonly src: "963:8:174";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 73067;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "963:19:174";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 73062;
                        readonly id: 73068;
                        readonly nodeType: "Return";
                        readonly src: "956:26:174";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulWadUp";
                readonly nameLocation: "883:8:174";
                readonly parameters: {
                    readonly id: 73059;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73056;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "900:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73070;
                        readonly src: "892:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73055;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "892:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73058;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "911:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73070;
                        readonly src: "903:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73057;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "903:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "891:22:174";
                };
                readonly returnParameters: {
                    readonly id: 73062;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73061;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73070;
                        readonly src: "937:7:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73060;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "937:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "936:9:174";
                };
                readonly scope: 73184;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73086;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1038:164:174";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73085;
                    readonly nodeType: "Block";
                    readonly src: "1112:90:174";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 73080;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73072;
                                readonly src: "1140:1:174";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 73081;
                                readonly name: "WAD";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73038;
                                readonly src: "1143:3:174";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 73082;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73074;
                                readonly src: "1148:1:174";
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
                                readonly id: 73079;
                                readonly name: "mulDivDown";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73115;
                                readonly src: "1129:10:174";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 73083;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1129:21:174";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 73078;
                        readonly id: 73084;
                        readonly nodeType: "Return";
                        readonly src: "1122:28:174";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "divWadDown";
                readonly nameLocation: "1047:10:174";
                readonly parameters: {
                    readonly id: 73075;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73072;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "1066:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73086;
                        readonly src: "1058:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73071;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1058:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73074;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "1077:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73086;
                        readonly src: "1069:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73073;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1069:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1057:22:174";
                };
                readonly returnParameters: {
                    readonly id: 73078;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73077;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73086;
                        readonly src: "1103:7:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73076;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1103:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1102:9:174";
                };
                readonly scope: 73184;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73102;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1208:158:174";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73101;
                    readonly nodeType: "Block";
                    readonly src: "1280:86:174";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 73096;
                                readonly name: "x";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73088;
                                readonly src: "1306:1:174";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 73097;
                                readonly name: "WAD";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73038;
                                readonly src: "1309:3:174";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 73098;
                                readonly name: "y";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73090;
                                readonly src: "1314:1:174";
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
                                readonly id: 73095;
                                readonly name: "mulDivUp";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73128;
                                readonly src: "1297:8:174";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 73099;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1297:19:174";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 73094;
                        readonly id: 73100;
                        readonly nodeType: "Return";
                        readonly src: "1290:26:174";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "divWadUp";
                readonly nameLocation: "1217:8:174";
                readonly parameters: {
                    readonly id: 73091;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73088;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "1234:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73102;
                        readonly src: "1226:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73087;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1226:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73090;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "1245:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73102;
                        readonly src: "1237:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73089;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1237:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1225:22:174";
                };
                readonly returnParameters: {
                    readonly id: 73094;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73093;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73102;
                        readonly src: "1271:7:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73092;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1271:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1270:9:174";
                };
                readonly scope: 73184;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73115;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1564:526:174";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73114;
                    readonly nodeType: "Block";
                    readonly src: "1691:399:174";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "1753:331:174";
                            readonly statements: readonly [{
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "1936:44:174";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "1961:1:174";
                                                readonly type: "";
                                                readonly value: "0";
                                            }, {
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "1964:1:174";
                                                readonly type: "";
                                                readonly value: "0";
                                            }];
                                            readonly functionName: {
                                                readonly name: "revert";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "1954:6:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "1954:12:174";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "1954:12:174";
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "denominator";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1878:11:174";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "y";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "1902:1:174";
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly name: "x";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "1908:1:174";
                                                    }, {
                                                        readonly arguments: readonly [{
                                                            readonly name: "MAX_UINT256";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "1915:11:174";
                                                        }, {
                                                            readonly name: "y";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "1928:1:174";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "div";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "1911:3:174";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "1911:19:174";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "gt";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "1905:2:174";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "1905:26:174";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mul";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "1898:3:174";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "1898:34:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "iszero";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "1891:6:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "1891:42:174";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mul";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "1874:3:174";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "1874:60:174";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "1867:6:174";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "1867:68:174";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "1864:116:174";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "2042:32:174";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "x";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2055:1:174";
                                        }, {
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2058:1:174";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mul";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2051:3:174";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2051:9:174";
                                    }, {
                                        readonly name: "denominator";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2062:11:174";
                                    }];
                                    readonly functionName: {
                                        readonly name: "div";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2047:3:174";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2047:27:174";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2042:1:174";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73035;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1915:11:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73108;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1878:11:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73108;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2062:11:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73104;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1908:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73104;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2055:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73106;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1902:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73106;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "1928:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73106;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2058:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73111;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2042:1:174";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73113;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "1744:340:174";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulDivDown";
                readonly nameLocation: "1573:10:174";
                readonly parameters: {
                    readonly id: 73109;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73104;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "1601:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73115;
                        readonly src: "1593:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73103;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1593:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73106;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "1620:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73115;
                        readonly src: "1612:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73105;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1612:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73108;
                        readonly mutability: "mutable";
                        readonly name: "denominator";
                        readonly nameLocation: "1639:11:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73115;
                        readonly src: "1631:19:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73107;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1631:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1583:73:174";
                };
                readonly returnParameters: {
                    readonly id: 73112;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73111;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "1688:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73115;
                        readonly src: "1680:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73110;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1680:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1679:11:174";
                };
                readonly scope: 73184;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73128;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2096:672:174";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73127;
                    readonly nodeType: "Block";
                    readonly src: "2221:547:174";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "2283:479:174";
                            readonly statements: readonly [{
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "2466:44:174";
                                    readonly statements: readonly [{
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "2491:1:174";
                                                readonly type: "";
                                                readonly value: "0";
                                            }, {
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "2494:1:174";
                                                readonly type: "";
                                                readonly value: "0";
                                            }];
                                            readonly functionName: {
                                                readonly name: "revert";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2484:6:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2484:12:174";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "2484:12:174";
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "denominator";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2408:11:174";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "y";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2432:1:174";
                                                }, {
                                                    readonly arguments: readonly [{
                                                        readonly name: "x";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "2438:1:174";
                                                    }, {
                                                        readonly arguments: readonly [{
                                                            readonly name: "MAX_UINT256";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "2445:11:174";
                                                        }, {
                                                            readonly name: "y";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "2458:1:174";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "div";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "2441:3:174";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "2441:19:174";
                                                    }];
                                                    readonly functionName: {
                                                        readonly name: "gt";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "2435:2:174";
                                                    };
                                                    readonly nodeType: "YulFunctionCall";
                                                    readonly src: "2435:26:174";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mul";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2428:3:174";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "2428:34:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "iszero";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2421:6:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2421:42:174";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mul";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2404:3:174";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2404:60:174";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2397:6:174";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2397:68:174";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "2394:116:174";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "2679:73:174";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly name: "x";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2699:1:174";
                                                }, {
                                                    readonly name: "y";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2702:1:174";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mul";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "2695:3:174";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "2695:9:174";
                                            }, {
                                                readonly name: "denominator";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2706:11:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "mod";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2691:3:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2691:27:174";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "2720:1:174";
                                            readonly type: "";
                                            readonly value: "0";
                                        }];
                                        readonly functionName: {
                                            readonly name: "gt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2688:2:174";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2688:34:174";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2732:1:174";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2735:1:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "mul";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "2728:3:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "2728:9:174";
                                        }, {
                                            readonly name: "denominator";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2739:11:174";
                                        }];
                                        readonly functionName: {
                                            readonly name: "div";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "2724:3:174";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "2724:27:174";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2684:3:174";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2684:68:174";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2679:1:174";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73035;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2445:11:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73121;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2408:11:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73121;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2706:11:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73121;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2739:11:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73117;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2438:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73117;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2699:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73117;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2732:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73119;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2432:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73119;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2458:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73119;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2702:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73119;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2735:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73124;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2679:1:174";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73126;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "2274:488:174";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "mulDivUp";
                readonly nameLocation: "2105:8:174";
                readonly parameters: {
                    readonly id: 73122;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73117;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "2131:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73128;
                        readonly src: "2123:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73116;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2123:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73119;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "2150:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73128;
                        readonly src: "2142:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73118;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2142:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73121;
                        readonly mutability: "mutable";
                        readonly name: "denominator";
                        readonly nameLocation: "2169:11:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73128;
                        readonly src: "2161:19:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73120;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2161:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2113:73:174";
                };
                readonly returnParameters: {
                    readonly id: 73125;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73124;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "2218:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73128;
                        readonly src: "2210:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73123;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2210:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2209:11:174";
                };
                readonly scope: 73184;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73141;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2774:2778:174";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73140;
                    readonly nodeType: "Block";
                    readonly src: "2890:2662:174";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "2952:2594:174";
                            readonly statements: readonly [{
                                readonly cases: readonly [{
                                    readonly body: {
                                        readonly nodeType: "YulBlock";
                                        readonly src: "2994:254:174";
                                        readonly statements: readonly [{
                                            readonly cases: readonly [{
                                                readonly body: {
                                                    readonly nodeType: "YulBlock";
                                                    readonly src: "3044:85:174";
                                                    readonly statements: readonly [{
                                                        readonly nodeType: "YulAssignment";
                                                        readonly src: "3100:11:174";
                                                        readonly value: {
                                                            readonly name: "scalar";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3105:6:174";
                                                        };
                                                        readonly variableNames: readonly [{
                                                            readonly name: "z";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3100:1:174";
                                                        }];
                                                    }];
                                                };
                                                readonly nodeType: "YulCase";
                                                readonly src: "3037:92:174";
                                                readonly value: {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "3042:1:174";
                                                    readonly type: "";
                                                    readonly value: "0";
                                                };
                                            }, {
                                                readonly body: {
                                                    readonly nodeType: "YulBlock";
                                                    readonly src: "3154:80:174";
                                                    readonly statements: readonly [{
                                                        readonly nodeType: "YulAssignment";
                                                        readonly src: "3210:6:174";
                                                        readonly value: {
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "3215:1:174";
                                                            readonly type: "";
                                                            readonly value: "0";
                                                        };
                                                        readonly variableNames: readonly [{
                                                            readonly name: "z";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3210:1:174";
                                                        }];
                                                    }];
                                                };
                                                readonly nodeType: "YulCase";
                                                readonly src: "3146:88:174";
                                                readonly value: "default";
                                            }];
                                            readonly expression: {
                                                readonly name: "n";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3019:1:174";
                                            };
                                            readonly nodeType: "YulSwitch";
                                            readonly src: "3012:222:174";
                                        }];
                                    };
                                    readonly nodeType: "YulCase";
                                    readonly src: "2987:261:174";
                                    readonly value: {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "2992:1:174";
                                        readonly type: "";
                                        readonly value: "0";
                                    };
                                }, {
                                    readonly body: {
                                        readonly nodeType: "YulBlock";
                                        readonly src: "3269:2267:174";
                                        readonly statements: readonly [{
                                            readonly cases: readonly [{
                                                readonly body: {
                                                    readonly nodeType: "YulBlock";
                                                    readonly src: "3327:115:174";
                                                    readonly statements: readonly [{
                                                        readonly nodeType: "YulAssignment";
                                                        readonly src: "3413:11:174";
                                                        readonly value: {
                                                            readonly name: "scalar";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3418:6:174";
                                                        };
                                                        readonly variableNames: readonly [{
                                                            readonly name: "z";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3413:1:174";
                                                        }];
                                                    }];
                                                };
                                                readonly nodeType: "YulCase";
                                                readonly src: "3320:122:174";
                                                readonly value: {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "3325:1:174";
                                                    readonly type: "";
                                                    readonly value: "0";
                                                };
                                            }, {
                                                readonly body: {
                                                    readonly nodeType: "YulBlock";
                                                    readonly src: "3467:104:174";
                                                    readonly statements: readonly [{
                                                        readonly nodeType: "YulAssignment";
                                                        readonly src: "3547:6:174";
                                                        readonly value: {
                                                            readonly name: "x";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3552:1:174";
                                                        };
                                                        readonly variableNames: readonly [{
                                                            readonly name: "z";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3547:1:174";
                                                        }];
                                                    }];
                                                };
                                                readonly nodeType: "YulCase";
                                                readonly src: "3459:112:174";
                                                readonly value: "default";
                                            }];
                                            readonly expression: {
                                                readonly arguments: readonly [{
                                                    readonly name: "n";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3298:1:174";
                                                }, {
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "3301:1:174";
                                                    readonly type: "";
                                                    readonly value: "2";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "mod";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3294:3:174";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "3294:9:174";
                                            };
                                            readonly nodeType: "YulSwitch";
                                            readonly src: "3287:284:174";
                                        }, {
                                            readonly nodeType: "YulVariableDeclaration";
                                            readonly src: "3651:26:174";
                                            readonly value: {
                                                readonly arguments: readonly [{
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "3667:1:174";
                                                    readonly type: "";
                                                    readonly value: "1";
                                                }, {
                                                    readonly name: "scalar";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3670:6:174";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "shr";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3663:3:174";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "3663:14:174";
                                            };
                                            readonly variables: readonly [{
                                                readonly name: "half";
                                                readonly nodeType: "YulTypedName";
                                                readonly src: "3655:4:174";
                                                readonly type: "";
                                            }];
                                        }, {
                                            readonly body: {
                                                readonly nodeType: "YulBlock";
                                                readonly src: "3951:1571:174";
                                                readonly statements: readonly [{
                                                    readonly body: {
                                                        readonly nodeType: "YulBlock";
                                                        readonly src: "4125:60:174";
                                                        readonly statements: readonly [{
                                                            readonly expression: {
                                                                readonly arguments: readonly [{
                                                                    readonly kind: "number";
                                                                    readonly nodeType: "YulLiteral";
                                                                    readonly src: "4158:1:174";
                                                                    readonly type: "";
                                                                    readonly value: "0";
                                                                }, {
                                                                    readonly kind: "number";
                                                                    readonly nodeType: "YulLiteral";
                                                                    readonly src: "4161:1:174";
                                                                    readonly type: "";
                                                                    readonly value: "0";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "revert";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4151:6:174";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "4151:12:174";
                                                            };
                                                            readonly nodeType: "YulExpressionStatement";
                                                            readonly src: "4151:12:174";
                                                        }];
                                                    };
                                                    readonly condition: {
                                                        readonly arguments: readonly [{
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "4117:3:174";
                                                            readonly type: "";
                                                            readonly value: "128";
                                                        }, {
                                                            readonly name: "x";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4122:1:174";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "shr";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4113:3:174";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4113:11:174";
                                                    };
                                                    readonly nodeType: "YulIf";
                                                    readonly src: "4110:75:174";
                                                }, {
                                                    readonly nodeType: "YulVariableDeclaration";
                                                    readonly src: "4247:19:174";
                                                    readonly value: {
                                                        readonly arguments: readonly [{
                                                            readonly name: "x";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4261:1:174";
                                                        }, {
                                                            readonly name: "x";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4264:1:174";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "mul";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4257:3:174";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4257:9:174";
                                                    };
                                                    readonly variables: readonly [{
                                                        readonly name: "xx";
                                                        readonly nodeType: "YulTypedName";
                                                        readonly src: "4251:2:174";
                                                        readonly type: "";
                                                    }];
                                                }, {
                                                    readonly nodeType: "YulVariableDeclaration";
                                                    readonly src: "4340:28:174";
                                                    readonly value: {
                                                        readonly arguments: readonly [{
                                                            readonly name: "xx";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4359:2:174";
                                                        }, {
                                                            readonly name: "half";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4363:4:174";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "add";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4355:3:174";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4355:13:174";
                                                    };
                                                    readonly variables: readonly [{
                                                        readonly name: "xxRound";
                                                        readonly nodeType: "YulTypedName";
                                                        readonly src: "4344:7:174";
                                                        readonly type: "";
                                                    }];
                                                }, {
                                                    readonly body: {
                                                        readonly nodeType: "YulBlock";
                                                        readonly src: "4464:60:174";
                                                        readonly statements: readonly [{
                                                            readonly expression: {
                                                                readonly arguments: readonly [{
                                                                    readonly kind: "number";
                                                                    readonly nodeType: "YulLiteral";
                                                                    readonly src: "4497:1:174";
                                                                    readonly type: "";
                                                                    readonly value: "0";
                                                                }, {
                                                                    readonly kind: "number";
                                                                    readonly nodeType: "YulLiteral";
                                                                    readonly src: "4500:1:174";
                                                                    readonly type: "";
                                                                    readonly value: "0";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "revert";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4490:6:174";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "4490:12:174";
                                                            };
                                                            readonly nodeType: "YulExpressionStatement";
                                                            readonly src: "4490:12:174";
                                                        }];
                                                    };
                                                    readonly condition: {
                                                        readonly arguments: readonly [{
                                                            readonly name: "xxRound";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4451:7:174";
                                                        }, {
                                                            readonly name: "xx";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4460:2:174";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "lt";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4448:2:174";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4448:15:174";
                                                    };
                                                    readonly nodeType: "YulIf";
                                                    readonly src: "4445:79:174";
                                                }, {
                                                    readonly nodeType: "YulAssignment";
                                                    readonly src: "4594:25:174";
                                                    readonly value: {
                                                        readonly arguments: readonly [{
                                                            readonly name: "xxRound";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4603:7:174";
                                                        }, {
                                                            readonly name: "scalar";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4612:6:174";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "div";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4599:3:174";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4599:20:174";
                                                    };
                                                    readonly variableNames: readonly [{
                                                        readonly name: "x";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "4594:1:174";
                                                    }];
                                                }, {
                                                    readonly body: {
                                                        readonly nodeType: "YulBlock";
                                                        readonly src: "4691:813:174";
                                                        readonly statements: readonly [{
                                                            readonly nodeType: "YulVariableDeclaration";
                                                            readonly src: "4759:19:174";
                                                            readonly value: {
                                                                readonly arguments: readonly [{
                                                                    readonly name: "z";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4773:1:174";
                                                                }, {
                                                                    readonly name: "x";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4776:1:174";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "mul";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4769:3:174";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "4769:9:174";
                                                            };
                                                            readonly variables: readonly [{
                                                                readonly name: "zx";
                                                                readonly nodeType: "YulTypedName";
                                                                readonly src: "4763:2:174";
                                                                readonly type: "";
                                                            }];
                                                        }, {
                                                            readonly body: {
                                                                readonly nodeType: "YulBlock";
                                                                readonly src: "4881:209:174";
                                                                readonly statements: readonly [{
                                                                    readonly body: {
                                                                        readonly nodeType: "YulBlock";
                                                                        readonly src: "4988:76:174";
                                                                        readonly statements: readonly [{
                                                                            readonly expression: {
                                                                                readonly arguments: readonly [{
                                                                                    readonly kind: "number";
                                                                                    readonly nodeType: "YulLiteral";
                                                                                    readonly src: "5029:1:174";
                                                                                    readonly type: "";
                                                                                    readonly value: "0";
                                                                                }, {
                                                                                    readonly kind: "number";
                                                                                    readonly nodeType: "YulLiteral";
                                                                                    readonly src: "5032:1:174";
                                                                                    readonly type: "";
                                                                                    readonly value: "0";
                                                                                }];
                                                                                readonly functionName: {
                                                                                    readonly name: "revert";
                                                                                    readonly nodeType: "YulIdentifier";
                                                                                    readonly src: "5022:6:174";
                                                                                };
                                                                                readonly nodeType: "YulFunctionCall";
                                                                                readonly src: "5022:12:174";
                                                                            };
                                                                            readonly nodeType: "YulExpressionStatement";
                                                                            readonly src: "5022:12:174";
                                                                        }];
                                                                    };
                                                                    readonly condition: {
                                                                        readonly arguments: readonly [{
                                                                            readonly arguments: readonly [{
                                                                                readonly name: "x";
                                                                                readonly nodeType: "YulIdentifier";
                                                                                readonly src: "4984:1:174";
                                                                            }];
                                                                            readonly functionName: {
                                                                                readonly name: "iszero";
                                                                                readonly nodeType: "YulIdentifier";
                                                                                readonly src: "4977:6:174";
                                                                            };
                                                                            readonly nodeType: "YulFunctionCall";
                                                                            readonly src: "4977:9:174";
                                                                        }];
                                                                        readonly functionName: {
                                                                            readonly name: "iszero";
                                                                            readonly nodeType: "YulIdentifier";
                                                                            readonly src: "4970:6:174";
                                                                        };
                                                                        readonly nodeType: "YulFunctionCall";
                                                                        readonly src: "4970:17:174";
                                                                    };
                                                                    readonly nodeType: "YulIf";
                                                                    readonly src: "4967:97:174";
                                                                }];
                                                            };
                                                            readonly condition: {
                                                                readonly arguments: readonly [{
                                                                    readonly arguments: readonly [{
                                                                        readonly arguments: readonly [{
                                                                            readonly name: "zx";
                                                                            readonly nodeType: "YulIdentifier";
                                                                            readonly src: "4869:2:174";
                                                                        }, {
                                                                            readonly name: "x";
                                                                            readonly nodeType: "YulIdentifier";
                                                                            readonly src: "4873:1:174";
                                                                        }];
                                                                        readonly functionName: {
                                                                            readonly name: "div";
                                                                            readonly nodeType: "YulIdentifier";
                                                                            readonly src: "4865:3:174";
                                                                        };
                                                                        readonly nodeType: "YulFunctionCall";
                                                                        readonly src: "4865:10:174";
                                                                    }, {
                                                                        readonly name: "z";
                                                                        readonly nodeType: "YulIdentifier";
                                                                        readonly src: "4877:1:174";
                                                                    }];
                                                                    readonly functionName: {
                                                                        readonly name: "eq";
                                                                        readonly nodeType: "YulIdentifier";
                                                                        readonly src: "4862:2:174";
                                                                    };
                                                                    readonly nodeType: "YulFunctionCall";
                                                                    readonly src: "4862:17:174";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "iszero";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "4855:6:174";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "4855:25:174";
                                                            };
                                                            readonly nodeType: "YulIf";
                                                            readonly src: "4852:238:174";
                                                        }, {
                                                            readonly nodeType: "YulVariableDeclaration";
                                                            readonly src: "5172:28:174";
                                                            readonly value: {
                                                                readonly arguments: readonly [{
                                                                    readonly name: "zx";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5191:2:174";
                                                                }, {
                                                                    readonly name: "half";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5195:4:174";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "add";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5187:3:174";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "5187:13:174";
                                                            };
                                                            readonly variables: readonly [{
                                                                readonly name: "zxRound";
                                                                readonly nodeType: "YulTypedName";
                                                                readonly src: "5176:7:174";
                                                                readonly type: "";
                                                            }];
                                                        }, {
                                                            readonly body: {
                                                                readonly nodeType: "YulBlock";
                                                                readonly src: "5304:68:174";
                                                                readonly statements: readonly [{
                                                                    readonly expression: {
                                                                        readonly arguments: readonly [{
                                                                            readonly kind: "number";
                                                                            readonly nodeType: "YulLiteral";
                                                                            readonly src: "5341:1:174";
                                                                            readonly type: "";
                                                                            readonly value: "0";
                                                                        }, {
                                                                            readonly kind: "number";
                                                                            readonly nodeType: "YulLiteral";
                                                                            readonly src: "5344:1:174";
                                                                            readonly type: "";
                                                                            readonly value: "0";
                                                                        }];
                                                                        readonly functionName: {
                                                                            readonly name: "revert";
                                                                            readonly nodeType: "YulIdentifier";
                                                                            readonly src: "5334:6:174";
                                                                        };
                                                                        readonly nodeType: "YulFunctionCall";
                                                                        readonly src: "5334:12:174";
                                                                    };
                                                                    readonly nodeType: "YulExpressionStatement";
                                                                    readonly src: "5334:12:174";
                                                                }];
                                                            };
                                                            readonly condition: {
                                                                readonly arguments: readonly [{
                                                                    readonly name: "zxRound";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5291:7:174";
                                                                }, {
                                                                    readonly name: "zx";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5300:2:174";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "lt";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5288:2:174";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "5288:15:174";
                                                            };
                                                            readonly nodeType: "YulIf";
                                                            readonly src: "5285:87:174";
                                                        }, {
                                                            readonly nodeType: "YulAssignment";
                                                            readonly src: "5457:25:174";
                                                            readonly value: {
                                                                readonly arguments: readonly [{
                                                                    readonly name: "zxRound";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5466:7:174";
                                                                }, {
                                                                    readonly name: "scalar";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5475:6:174";
                                                                }];
                                                                readonly functionName: {
                                                                    readonly name: "div";
                                                                    readonly nodeType: "YulIdentifier";
                                                                    readonly src: "5462:3:174";
                                                                };
                                                                readonly nodeType: "YulFunctionCall";
                                                                readonly src: "5462:20:174";
                                                            };
                                                            readonly variableNames: readonly [{
                                                                readonly name: "z";
                                                                readonly nodeType: "YulIdentifier";
                                                                readonly src: "5457:1:174";
                                                            }];
                                                        }];
                                                    };
                                                    readonly condition: {
                                                        readonly arguments: readonly [{
                                                            readonly name: "n";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4685:1:174";
                                                        }, {
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "4688:1:174";
                                                            readonly type: "";
                                                            readonly value: "2";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "mod";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "4681:3:174";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "4681:9:174";
                                                    };
                                                    readonly nodeType: "YulIf";
                                                    readonly src: "4678:826:174";
                                                }];
                                            };
                                            readonly condition: {
                                                readonly name: "n";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3824:1:174";
                                            };
                                            readonly nodeType: "YulForLoop";
                                            readonly post: {
                                                readonly nodeType: "YulBlock";
                                                readonly src: "3826:124:174";
                                                readonly statements: readonly [{
                                                    readonly nodeType: "YulAssignment";
                                                    readonly src: "3918:14:174";
                                                    readonly value: {
                                                        readonly arguments: readonly [{
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "3927:1:174";
                                                            readonly type: "";
                                                            readonly value: "1";
                                                        }, {
                                                            readonly name: "n";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3930:1:174";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "shr";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3923:3:174";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "3923:9:174";
                                                    };
                                                    readonly variableNames: readonly [{
                                                        readonly name: "n";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "3918:1:174";
                                                    }];
                                                }];
                                            };
                                            readonly pre: {
                                                readonly nodeType: "YulBlock";
                                                readonly src: "3699:124:174";
                                                readonly statements: readonly [{
                                                    readonly nodeType: "YulAssignment";
                                                    readonly src: "3791:14:174";
                                                    readonly value: {
                                                        readonly arguments: readonly [{
                                                            readonly kind: "number";
                                                            readonly nodeType: "YulLiteral";
                                                            readonly src: "3800:1:174";
                                                            readonly type: "";
                                                            readonly value: "1";
                                                        }, {
                                                            readonly name: "n";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3803:1:174";
                                                        }];
                                                        readonly functionName: {
                                                            readonly name: "shr";
                                                            readonly nodeType: "YulIdentifier";
                                                            readonly src: "3796:3:174";
                                                        };
                                                        readonly nodeType: "YulFunctionCall";
                                                        readonly src: "3796:9:174";
                                                    };
                                                    readonly variableNames: readonly [{
                                                        readonly name: "n";
                                                        readonly nodeType: "YulIdentifier";
                                                        readonly src: "3791:1:174";
                                                    }];
                                                }];
                                            };
                                            readonly src: "3695:1827:174";
                                        }];
                                    };
                                    readonly nodeType: "YulCase";
                                    readonly src: "3261:2275:174";
                                    readonly value: "default";
                                }];
                                readonly expression: {
                                    readonly name: "x";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2973:1:174";
                                };
                                readonly nodeType: "YulSwitch";
                                readonly src: "2966:2570:174";
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73132;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3019:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73132;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3298:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73132;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3791:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73132;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3803:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73132;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3824:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73132;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3918:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73132;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3930:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73132;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4685:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73134;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3105:6:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73134;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3418:6:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73134;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3670:6:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73134;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4612:6:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73134;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5475:6:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73130;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "2973:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73130;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3552:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73130;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4122:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73130;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4261:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73130;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4264:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73130;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4594:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73130;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4776:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73130;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4873:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73130;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4984:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73137;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3100:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73137;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3210:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73137;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3413:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73137;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "3547:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73137;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4773:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73137;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "4877:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73137;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5457:1:174";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73139;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "2943:2603:174";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "rpow";
                readonly nameLocation: "2783:4:174";
                readonly parameters: {
                    readonly id: 73135;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73130;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "2805:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73141;
                        readonly src: "2797:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73129;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2797:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73132;
                        readonly mutability: "mutable";
                        readonly name: "n";
                        readonly nameLocation: "2824:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73141;
                        readonly src: "2816:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73131;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2816:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73134;
                        readonly mutability: "mutable";
                        readonly name: "scalar";
                        readonly nameLocation: "2843:6:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73141;
                        readonly src: "2835:14:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73133;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2835:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2787:68:174";
                };
                readonly returnParameters: {
                    readonly id: 73138;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73137;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "2887:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73141;
                        readonly src: "2879:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73136;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2879:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2878:11:174";
                };
                readonly scope: 73184;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73150;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5746:3396:174";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73149;
                    readonly nodeType: "Block";
                    readonly src: "5805:3337:174";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "5867:3269:174";
                            readonly statements: readonly [{
                                readonly nodeType: "YulVariableDeclaration";
                                readonly src: "5881:10:174";
                                readonly value: {
                                    readonly name: "x";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "5890:1:174";
                                };
                                readonly variables: readonly [{
                                    readonly name: "y";
                                    readonly nodeType: "YulTypedName";
                                    readonly src: "5885:1:174";
                                    readonly type: "";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "5971:8:174";
                                readonly value: {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "5976:3:174";
                                    readonly type: "";
                                    readonly value: "181";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "5971:1:174";
                                }];
                            }, {
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "6465:80:174";
                                    readonly statements: readonly [{
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6483:16:174";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6492:3:174";
                                                readonly type: "";
                                                readonly value: "128";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6497:1:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shr";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6488:3:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6488:11:174";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6483:1:174";
                                        }];
                                    }, {
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6516:15:174";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6525:2:174";
                                                readonly type: "";
                                                readonly value: "64";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6529:1:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6521:3:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6521:10:174";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6516:1:174";
                                        }];
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6422:1:174";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6425:37:174";
                                            readonly type: "";
                                            readonly value: "0x10000000000000000000000000000000000";
                                        }];
                                        readonly functionName: {
                                            readonly name: "lt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6419:2:174";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "6419:44:174";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "6412:6:174";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "6412:52:174";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "6409:136:174";
                            }, {
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "6598:79:174";
                                    readonly statements: readonly [{
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6616:15:174";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6625:2:174";
                                                readonly type: "";
                                                readonly value: "64";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6629:1:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shr";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6621:3:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6621:10:174";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6616:1:174";
                                        }];
                                    }, {
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6648:15:174";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6657:2:174";
                                                readonly type: "";
                                                readonly value: "32";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6661:1:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6653:3:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6653:10:174";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6648:1:174";
                                        }];
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6571:1:174";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6574:21:174";
                                            readonly type: "";
                                            readonly value: "0x1000000000000000000";
                                        }];
                                        readonly functionName: {
                                            readonly name: "lt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6568:2:174";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "6568:28:174";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "6561:6:174";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "6561:36:174";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "6558:119:174";
                            }, {
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "6722:79:174";
                                    readonly statements: readonly [{
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6740:15:174";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6749:2:174";
                                                readonly type: "";
                                                readonly value: "32";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6753:1:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shr";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6745:3:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6745:10:174";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6740:1:174";
                                        }];
                                    }, {
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6772:15:174";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6781:2:174";
                                                readonly type: "";
                                                readonly value: "16";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6785:1:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6777:3:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6777:10:174";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6772:1:174";
                                        }];
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6703:1:174";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6706:13:174";
                                            readonly type: "";
                                            readonly value: "0x10000000000";
                                        }];
                                        readonly functionName: {
                                            readonly name: "lt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6700:2:174";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "6700:20:174";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "6693:6:174";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "6693:28:174";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "6690:111:174";
                            }, {
                                readonly body: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "6842:78:174";
                                    readonly statements: readonly [{
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6860:15:174";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6869:2:174";
                                                readonly type: "";
                                                readonly value: "16";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6873:1:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shr";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6865:3:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6865:10:174";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6860:1:174";
                                        }];
                                    }, {
                                        readonly nodeType: "YulAssignment";
                                        readonly src: "6892:14:174";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "6901:1:174";
                                                readonly type: "";
                                                readonly value: "8";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6904:1:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6897:3:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6897:9:174";
                                        };
                                        readonly variableNames: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6892:1:174";
                                        }];
                                    }];
                                };
                                readonly condition: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6827:1:174";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "6830:9:174";
                                            readonly type: "";
                                            readonly value: "0x1000000";
                                        }];
                                        readonly functionName: {
                                            readonly name: "lt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "6824:2:174";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "6824:16:174";
                                    }];
                                    readonly functionName: {
                                        readonly name: "iszero";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "6817:6:174";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "6817:24:174";
                                };
                                readonly nodeType: "YulIf";
                                readonly src: "6814:106:174";
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8110:35:174";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8119:2:174";
                                        readonly type: "";
                                        readonly value: "18";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8127:1:174";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8134:1:174";
                                            }, {
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "8137:5:174";
                                                readonly type: "";
                                                readonly value: "65536";
                                            }];
                                            readonly functionName: {
                                                readonly name: "add";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8130:3:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8130:13:174";
                                        }];
                                        readonly functionName: {
                                            readonly name: "mul";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8123:3:174";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8123:21:174";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8115:3:174";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8115:30:174";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8110:1:174";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8306:30:174";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8315:1:174";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8322:1:174";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8329:1:174";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8332:1:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8325:3:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8325:9:174";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8318:3:174";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8318:17:174";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8311:3:174";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8311:25:174";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8306:1:174";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8349:30:174";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8358:1:174";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8365:1:174";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8372:1:174";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8375:1:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8368:3:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8368:9:174";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8361:3:174";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8361:17:174";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8354:3:174";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8354:25:174";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8349:1:174";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8392:30:174";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8401:1:174";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8408:1:174";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8415:1:174";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8418:1:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8411:3:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8411:9:174";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8404:3:174";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8404:17:174";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8397:3:174";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8397:25:174";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8392:1:174";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8435:30:174";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8444:1:174";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8451:1:174";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8458:1:174";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8461:1:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8454:3:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8454:9:174";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8447:3:174";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8447:17:174";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8440:3:174";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8440:25:174";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8435:1:174";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8478:30:174";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8487:1:174";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8494:1:174";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8501:1:174";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8504:1:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8497:3:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8497:9:174";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8490:3:174";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8490:17:174";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8483:3:174";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8483:25:174";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8478:1:174";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8521:30:174";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8530:1:174";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8537:1:174";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8544:1:174";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8547:1:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8540:3:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8540:9:174";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8533:3:174";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8533:17:174";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8526:3:174";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8526:25:174";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8521:1:174";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "8564:30:174";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "8573:1:174";
                                        readonly type: "";
                                        readonly value: "1";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8580:1:174";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8587:1:174";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8590:1:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "8583:3:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "8583:9:174";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "8576:3:174";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "8576:17:174";
                                    }];
                                    readonly functionName: {
                                        readonly name: "shr";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "8569:3:174";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "8569:25:174";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "8564:1:174";
                                }];
                            }, {
                                readonly nodeType: "YulAssignment";
                                readonly src: "9097:29:174";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "z";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9106:1:174";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9116:1:174";
                                            }, {
                                                readonly name: "z";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9119:1:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "div";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "9112:3:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "9112:9:174";
                                        }, {
                                            readonly name: "z";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9123:1:174";
                                        }];
                                        readonly functionName: {
                                            readonly name: "lt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "9109:2:174";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "9109:16:174";
                                    }];
                                    readonly functionName: {
                                        readonly name: "sub";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9102:3:174";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "9102:24:174";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "9097:1:174";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73143;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5890:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73143;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8329:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73143;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8372:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73143;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8415:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73143;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8458:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73143;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8501:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73143;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8544:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73143;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8587:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73143;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9116:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "5971:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6516:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6529:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6648:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6661:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6772:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6785:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6892:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "6904:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8110:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8127:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8306:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8322:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8332:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8349:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8365:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8375:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8392:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8408:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8418:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8435:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8451:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8461:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8478:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8494:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8504:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8521:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8537:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8547:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8564:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8580:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "8590:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9097:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9106:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9119:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73146;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9123:1:174";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73148;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "5858:3278:174";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "sqrt";
                readonly nameLocation: "5755:4:174";
                readonly parameters: {
                    readonly id: 73144;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73143;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "5768:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73150;
                        readonly src: "5760:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73142;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5760:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5759:11:174";
                };
                readonly returnParameters: {
                    readonly id: 73147;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73146;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "5802:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73150;
                        readonly src: "5794:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73145;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5794:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5793:11:174";
                };
                readonly scope: 73184;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73161;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9148:282:174";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73160;
                    readonly nodeType: "Block";
                    readonly src: "9223:207:174";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "9285:139:174";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "9400:14:174";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "x";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9409:1:174";
                                    }, {
                                        readonly name: "y";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9412:1:174";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mod";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9405:3:174";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "9405:9:174";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "9400:1:174";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73152;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9409:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73154;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9412:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73157;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9400:1:174";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73159;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "9276:148:174";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "unsafeMod";
                readonly nameLocation: "9157:9:174";
                readonly parameters: {
                    readonly id: 73155;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73152;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "9175:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73161;
                        readonly src: "9167:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73151;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9167:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73154;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "9186:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73161;
                        readonly src: "9178:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73153;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9178:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9166:22:174";
                };
                readonly returnParameters: {
                    readonly id: 73158;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73157;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "9220:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73161;
                        readonly src: "9212:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73156;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9212:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9211:11:174";
                };
                readonly scope: 73184;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73172;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9436:285:174";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73171;
                    readonly nodeType: "Block";
                    readonly src: "9511:210:174";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "9573:142:174";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "9691:14:174";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly name: "x";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9700:1:174";
                                    }, {
                                        readonly name: "y";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9703:1:174";
                                    }];
                                    readonly functionName: {
                                        readonly name: "div";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "9696:3:174";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "9696:9:174";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "r";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "9691:1:174";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73168;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9691:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73163;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9700:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73165;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9703:1:174";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73170;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "9564:151:174";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "unsafeDiv";
                readonly nameLocation: "9445:9:174";
                readonly parameters: {
                    readonly id: 73166;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73163;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "9463:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73172;
                        readonly src: "9455:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73162;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9455:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73165;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "9474:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73172;
                        readonly src: "9466:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73164;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9466:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9454:22:174";
                };
                readonly returnParameters: {
                    readonly id: 73169;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73168;
                        readonly mutability: "mutable";
                        readonly name: "r";
                        readonly nameLocation: "9508:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73172;
                        readonly src: "9500:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73167;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9500:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9499:11:174";
                };
                readonly scope: 73184;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 73183;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9727:324:174";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 73182;
                    readonly nodeType: "Block";
                    readonly src: "9804:247:174";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly AST: {
                            readonly nodeType: "YulBlock";
                            readonly src: "9866:179:174";
                            readonly statements: readonly [{
                                readonly nodeType: "YulAssignment";
                                readonly src: "9998:37:174";
                                readonly value: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "x";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "10014:1:174";
                                            }, {
                                                readonly name: "y";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "10017:1:174";
                                            }];
                                            readonly functionName: {
                                                readonly name: "mod";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "10010:3:174";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "10010:9:174";
                                        }, {
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "10021:1:174";
                                            readonly type: "";
                                            readonly value: "0";
                                        }];
                                        readonly functionName: {
                                            readonly name: "gt";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "10007:2:174";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "10007:16:174";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly name: "x";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "10029:1:174";
                                        }, {
                                            readonly name: "y";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "10032:1:174";
                                        }];
                                        readonly functionName: {
                                            readonly name: "div";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "10025:3:174";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "10025:9:174";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "10003:3:174";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "10003:32:174";
                                };
                                readonly variableNames: readonly [{
                                    readonly name: "z";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "9998:1:174";
                                }];
                            }];
                        };
                        readonly documentation: "@solidity memory-safe-assembly";
                        readonly evmVersion: "paris";
                        readonly externalReferences: readonly [{
                            readonly declaration: 73174;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "10014:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73174;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "10029:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73176;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "10017:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73176;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "10032:1:174";
                            readonly valueSize: 1;
                        }, {
                            readonly declaration: 73179;
                            readonly isOffset: false;
                            readonly isSlot: false;
                            readonly src: "9998:1:174";
                            readonly valueSize: 1;
                        }];
                        readonly id: 73181;
                        readonly nodeType: "InlineAssembly";
                        readonly src: "9857:188:174";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "unsafeDivUp";
                readonly nameLocation: "9736:11:174";
                readonly parameters: {
                    readonly id: 73177;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73174;
                        readonly mutability: "mutable";
                        readonly name: "x";
                        readonly nameLocation: "9756:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73183;
                        readonly src: "9748:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73173;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9748:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 73176;
                        readonly mutability: "mutable";
                        readonly name: "y";
                        readonly nameLocation: "9767:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73183;
                        readonly src: "9759:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73175;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9759:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9747:22:174";
                };
                readonly returnParameters: {
                    readonly id: 73180;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 73179;
                        readonly mutability: "mutable";
                        readonly name: "z";
                        readonly nameLocation: "9801:1:174";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73183;
                        readonly src: "9793:9:174";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73178;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9793:7:174";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9792:11:174";
                };
                readonly scope: 73184;
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
                readonly id: 73028;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "68:273:174";
                readonly text: "@notice Arithmetic library with operations for fixed-point numbers.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @author Inspired by USM (https://github.com/usmfum/USM/blob/master/contracts/WadMath.sol)";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [73184];
            readonly name: "FixedPointMathLib";
            readonly nameLocation: "349:17:174";
            readonly scope: 73185;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "AGPL-3.0-only";
    };
    readonly id: 174;
};
//# sourceMappingURL=FixedPointMathLib.d.ts.map