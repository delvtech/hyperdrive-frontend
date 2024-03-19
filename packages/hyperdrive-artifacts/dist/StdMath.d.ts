export declare const StdMath: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122013eff3196676476065e71659d24ffafdacddfcb2adbc9018868362592cd291ea64736f6c63430008140033";
        readonly sourceMap: "65:1294:153:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;65:1294:153;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122013eff3196676476065e71659d24ffafdacddfcb2adbc9018868362592cd291ea64736f6c63430008140033";
        readonly sourceMap: "65:1294:153:-:0;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdMath.sol\":\"stdMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdMath.sol\":{\"keccak256\":\"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92\",\"dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC\"]}},\"version\":1}";
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
                readonly "lib/forge-std/src/StdMath.sol": "stdMath";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/forge-std/src/StdMath.sol": {
                readonly keccak256: "0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2";
                readonly urls: readonly ["bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92", "dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/forge-std/src/StdMath.sol";
        readonly id: 36051;
        readonly exportedSymbols: {
            readonly stdMath: readonly [36050];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:1328:153";
        readonly nodes: readonly [{
            readonly id: 35910;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:153";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".2", "<", "0.9", ".0"];
        }, {
            readonly id: 36050;
            readonly nodeType: "ContractDefinition";
            readonly src: "65:1294:153";
            readonly nodes: readonly [{
                readonly id: 35914;
                readonly nodeType: "VariableDeclaration";
                readonly src: "87:115:153";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INT256_MIN";
                readonly nameLocation: "111:10:153";
                readonly scope: 36050;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_int256";
                    readonly typeString: "int256";
                };
                readonly typeName: {
                    readonly id: 35911;
                    readonly name: "int256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "87:6:153";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_int256";
                        readonly typeString: "int256";
                    };
                };
                readonly value: {
                    readonly id: 35913;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly lValueRequested: false;
                    readonly nodeType: "UnaryOperation";
                    readonly operator: "-";
                    readonly prefix: true;
                    readonly src: "124:78:153";
                    readonly subExpression: {
                        readonly hexValue: "3537383936303434363138363538303937373131373835343932353034333433393533393236363334393932333332383230323832303139373238373932303033393536353634383139393638";
                        readonly id: 35912;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "number";
                        readonly lValueRequested: false;
                        readonly nodeType: "Literal";
                        readonly src: "125:77:153";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1";
                            readonly typeString: "int_const 5789...(69 digits omitted)...9968";
                        };
                        readonly value: "57896044618658097711785492504343953926634992332820282019728792003956564819968";
                    };
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_minus_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1";
                        readonly typeString: "int_const -578...(70 digits omitted)...9968";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 35940;
                readonly nodeType: "FunctionDefinition";
                readonly src: "209:306:153";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35939;
                    readonly nodeType: "Block";
                    readonly src: "264:251:153";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 35923;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 35921;
                                readonly name: "a";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35916;
                                readonly src: "342:1:153";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 35922;
                                readonly name: "INT256_MIN";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35914;
                                readonly src: "347:10:153";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly src: "342:15:153";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 35927;
                        readonly nodeType: "IfStatement";
                        readonly src: "338:130:153";
                        readonly trueBody: {
                            readonly id: 35926;
                            readonly nodeType: "Block";
                            readonly src: "359:109:153";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly hexValue: "3537383936303434363138363538303937373131373835343932353034333433393533393236363334393932333332383230323832303139373238373932303033393536353634383139393638";
                                    readonly id: 35924;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "380:77:153";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1";
                                        readonly typeString: "int_const 5789...(69 digits omitted)...9968";
                                    };
                                    readonly value: "57896044618658097711785492504343953926634992332820282019728792003956564819968";
                                };
                                readonly functionReturnParameters: 35920;
                                readonly id: 35925;
                                readonly nodeType: "Return";
                                readonly src: "373:84:153";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 35932;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 35930;
                                        readonly name: "a";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 35916;
                                        readonly src: "493:1:153";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: ">";
                                    readonly rightExpression: {
                                        readonly hexValue: "30";
                                        readonly id: 35931;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "number";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "497:1:153";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_rational_0_by_1";
                                            readonly typeString: "int_const 0";
                                        };
                                        readonly value: "0";
                                    };
                                    readonly src: "493:5:153";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseExpression: {
                                    readonly id: 35935;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "UnaryOperation";
                                    readonly operator: "-";
                                    readonly prefix: true;
                                    readonly src: "505:2:153";
                                    readonly subExpression: {
                                        readonly id: 35934;
                                        readonly name: "a";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 35916;
                                        readonly src: "506:1:153";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly id: 35936;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "Conditional";
                                readonly src: "493:14:153";
                                readonly trueExpression: {
                                    readonly id: 35933;
                                    readonly name: "a";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35916;
                                    readonly src: "501:1:153";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
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
                                readonly id: 35929;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "485:7:153";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                    readonly typeString: "type(uint256)";
                                };
                                readonly typeName: {
                                    readonly id: 35928;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "485:7:153";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 35937;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "485:23:153";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 35920;
                        readonly id: 35938;
                        readonly nodeType: "Return";
                        readonly src: "478:30:153";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "abs";
                readonly nameLocation: "218:3:153";
                readonly parameters: {
                    readonly id: 35917;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35916;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "229:1:153";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35940;
                        readonly src: "222:8:153";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 35915;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "222:6:153";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "221:10:153";
                };
                readonly returnParameters: {
                    readonly id: 35920;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35919;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35940;
                        readonly src: "255:7:153";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 35918;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "255:7:153";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "254:9:153";
                };
                readonly scope: 36050;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35961;
                readonly nodeType: "FunctionDefinition";
                readonly src: "521:114:153";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35960;
                    readonly nodeType: "Block";
                    readonly src: "590:45:153";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 35951;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 35949;
                                    readonly name: "a";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35942;
                                    readonly src: "607:1:153";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly id: 35950;
                                    readonly name: "b";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35944;
                                    readonly src: "611:1:153";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "607:5:153";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 35957;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 35955;
                                    readonly name: "b";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35944;
                                    readonly src: "623:1:153";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly id: 35956;
                                    readonly name: "a";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35942;
                                    readonly src: "627:1:153";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "623:5:153";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 35958;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "607:21:153";
                            readonly trueExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 35954;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 35952;
                                    readonly name: "a";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35942;
                                    readonly src: "615:1:153";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "-";
                                readonly rightExpression: {
                                    readonly id: 35953;
                                    readonly name: "b";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35944;
                                    readonly src: "619:1:153";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "615:5:153";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 35948;
                        readonly id: 35959;
                        readonly nodeType: "Return";
                        readonly src: "600:28:153";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "delta";
                readonly nameLocation: "530:5:153";
                readonly parameters: {
                    readonly id: 35945;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35942;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "544:1:153";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35961;
                        readonly src: "536:9:153";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 35941;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "536:7:153";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35944;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "555:1:153";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35961;
                        readonly src: "547:9:153";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 35943;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "547:7:153";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "535:22:153";
                };
                readonly returnParameters: {
                    readonly id: 35948;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35947;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35961;
                        readonly src: "581:7:153";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 35946;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "581:7:153";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "580:9:153";
                };
                readonly scope: 36050;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35997;
                readonly nodeType: "FunctionDefinition";
                readonly src: "641:352:153";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35996;
                    readonly nodeType: "Block";
                    readonly src: "708:285:153";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 35976;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly components: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                    readonly id: 35972;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 35970;
                                        readonly name: "a";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 35963;
                                        readonly src: "847:1:153";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "^";
                                    readonly rightExpression: {
                                        readonly id: 35971;
                                        readonly name: "b";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 35965;
                                        readonly src: "851:1:153";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_int256";
                                            readonly typeString: "int256";
                                        };
                                    };
                                    readonly src: "847:5:153";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                }];
                                readonly id: 35973;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "846:7:153";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly id: 35975;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "UnaryOperation";
                                readonly operator: "-";
                                readonly prefix: true;
                                readonly src: "856:2:153";
                                readonly subExpression: {
                                    readonly hexValue: "31";
                                    readonly id: 35974;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "857:1:153";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1_by_1";
                                        readonly typeString: "int_const 1";
                                    };
                                    readonly value: "1";
                                };
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_minus_1_by_1";
                                    readonly typeString: "int_const -1";
                                };
                            };
                            readonly src: "846:12:153";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 35987;
                        readonly nodeType: "IfStatement";
                        readonly src: "842:71:153";
                        readonly trueBody: {
                            readonly id: 35986;
                            readonly nodeType: "Block";
                            readonly src: "860:53:153";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 35979;
                                            readonly name: "a";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 35963;
                                            readonly src: "891:1:153";
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
                                            readonly id: 35978;
                                            readonly name: "abs";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 35940;
                                            readonly src: "887:3:153";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_int256_$returns$_t_uint256_$";
                                                readonly typeString: "function (int256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 35980;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "887:6:153";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly id: 35982;
                                            readonly name: "b";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 35965;
                                            readonly src: "899:1:153";
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
                                            readonly id: 35981;
                                            readonly name: "abs";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 35940;
                                            readonly src: "895:3:153";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_int256_$returns$_t_uint256_$";
                                                readonly typeString: "function (int256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 35983;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "895:6:153";
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
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly id: 35977;
                                        readonly name: "delta";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [35961, 35997];
                                        readonly referencedDeclaration: 35961;
                                        readonly src: "881:5:153";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 35984;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "881:21:153";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly functionReturnParameters: 35969;
                                readonly id: 35985;
                                readonly nodeType: "Return";
                                readonly src: "874:28:153";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 35994;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 35989;
                                    readonly name: "a";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35963;
                                    readonly src: "975:1:153";
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
                                    readonly id: 35988;
                                    readonly name: "abs";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35940;
                                    readonly src: "971:3:153";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_int256_$returns$_t_uint256_$";
                                        readonly typeString: "function (int256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 35990;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "971:6:153";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "+";
                            readonly rightExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 35992;
                                    readonly name: "b";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35965;
                                    readonly src: "984:1:153";
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
                                    readonly id: 35991;
                                    readonly name: "abs";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 35940;
                                    readonly src: "980:3:153";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_int256_$returns$_t_uint256_$";
                                        readonly typeString: "function (int256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 35993;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "980:6:153";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "971:15:153";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 35969;
                        readonly id: 35995;
                        readonly nodeType: "Return";
                        readonly src: "964:22:153";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "delta";
                readonly nameLocation: "650:5:153";
                readonly parameters: {
                    readonly id: 35966;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35963;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "663:1:153";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35997;
                        readonly src: "656:8:153";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 35962;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "656:6:153";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35965;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "673:1:153";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35997;
                        readonly src: "666:8:153";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 35964;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "666:6:153";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "655:20:153";
                };
                readonly returnParameters: {
                    readonly id: 35969;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35968;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35997;
                        readonly src: "699:7:153";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 35967;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "699:7:153";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "698:9:153";
                };
                readonly scope: 36050;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 36020;
                readonly nodeType: "FunctionDefinition";
                readonly src: "999:160:153";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 36019;
                    readonly nodeType: "Block";
                    readonly src: "1075:84:153";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [36007];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 36007;
                            readonly mutability: "mutable";
                            readonly name: "absDelta";
                            readonly nameLocation: "1093:8:153";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 36019;
                            readonly src: "1085:16:153";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 36006;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1085:7:153";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 36012;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 36009;
                                readonly name: "a";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35999;
                                readonly src: "1110:1:153";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 36010;
                                readonly name: "b";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 36001;
                                readonly src: "1113:1:153";
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
                                }];
                                readonly id: 36008;
                                readonly name: "delta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [35961, 35997];
                                readonly referencedDeclaration: 35961;
                                readonly src: "1104:5:153";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 36011;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1104:11:153";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1085:30:153";
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 36017;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 36015;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 36013;
                                    readonly name: "absDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 36007;
                                    readonly src: "1133:8:153";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "*";
                                readonly rightExpression: {
                                    readonly hexValue: "31653138";
                                    readonly id: 36014;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "1144:4:153";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                        readonly typeString: "int_const 1000000000000000000";
                                    };
                                    readonly value: "1e18";
                                };
                                readonly src: "1133:15:153";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "/";
                            readonly rightExpression: {
                                readonly id: 36016;
                                readonly name: "b";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 36001;
                                readonly src: "1151:1:153";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "1133:19:153";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 36005;
                        readonly id: 36018;
                        readonly nodeType: "Return";
                        readonly src: "1126:26:153";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "percentDelta";
                readonly nameLocation: "1008:12:153";
                readonly parameters: {
                    readonly id: 36002;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35999;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "1029:1:153";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 36020;
                        readonly src: "1021:9:153";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 35998;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1021:7:153";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 36001;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "1040:1:153";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 36020;
                        readonly src: "1032:9:153";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 36000;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1032:7:153";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1020:22:153";
                };
                readonly returnParameters: {
                    readonly id: 36005;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 36004;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 36020;
                        readonly src: "1066:7:153";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 36003;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1066:7:153";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1065:9:153";
                };
                readonly scope: 36050;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 36049;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1165:192:153";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 36048;
                    readonly nodeType: "Block";
                    readonly src: "1239:118:153";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [36030];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 36030;
                            readonly mutability: "mutable";
                            readonly name: "absDelta";
                            readonly nameLocation: "1257:8:153";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 36048;
                            readonly src: "1249:16:153";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 36029;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1249:7:153";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 36035;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 36032;
                                readonly name: "a";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 36022;
                                readonly src: "1274:1:153";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly id: 36033;
                                readonly name: "b";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 36024;
                                readonly src: "1277:1:153";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }, {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }];
                                readonly id: 36031;
                                readonly name: "delta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [35961, 35997];
                                readonly referencedDeclaration: 35997;
                                readonly src: "1268:5:153";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_uint256_$";
                                    readonly typeString: "function (int256,int256) pure returns (uint256)";
                                };
                            };
                            readonly id: 36034;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1268:11:153";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1249:30:153";
                    }, {
                        readonly assignments: readonly [36037];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 36037;
                            readonly mutability: "mutable";
                            readonly name: "absB";
                            readonly nameLocation: "1297:4:153";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 36048;
                            readonly src: "1289:12:153";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 36036;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1289:7:153";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 36041;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 36039;
                                readonly name: "b";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 36024;
                                readonly src: "1308:1:153";
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
                                readonly id: 36038;
                                readonly name: "abs";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35940;
                                readonly src: "1304:3:153";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_int256_$returns$_t_uint256_$";
                                    readonly typeString: "function (int256) pure returns (uint256)";
                                };
                            };
                            readonly id: 36040;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1304:6:153";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1289:21:153";
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 36046;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 36044;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 36042;
                                    readonly name: "absDelta";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 36030;
                                    readonly src: "1328:8:153";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "*";
                                readonly rightExpression: {
                                    readonly hexValue: "31653138";
                                    readonly id: 36043;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "1339:4:153";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_1000000000000000000_by_1";
                                        readonly typeString: "int_const 1000000000000000000";
                                    };
                                    readonly value: "1e18";
                                };
                                readonly src: "1328:15:153";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "/";
                            readonly rightExpression: {
                                readonly id: 36045;
                                readonly name: "absB";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 36037;
                                readonly src: "1346:4:153";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "1328:22:153";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 36028;
                        readonly id: 36047;
                        readonly nodeType: "Return";
                        readonly src: "1321:29:153";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "percentDelta";
                readonly nameLocation: "1174:12:153";
                readonly parameters: {
                    readonly id: 36025;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 36022;
                        readonly mutability: "mutable";
                        readonly name: "a";
                        readonly nameLocation: "1194:1:153";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 36049;
                        readonly src: "1187:8:153";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 36021;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1187:6:153";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 36024;
                        readonly mutability: "mutable";
                        readonly name: "b";
                        readonly nameLocation: "1204:1:153";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 36049;
                        readonly src: "1197:8:153";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 36023;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1197:6:153";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1186:20:153";
                };
                readonly returnParameters: {
                    readonly id: 36028;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 36027;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 36049;
                        readonly src: "1230:7:153";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 36026;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1230:7:153";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1229:9:153";
                };
                readonly scope: 36050;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "stdMath";
            readonly contractDependencies: readonly [];
            readonly contractKind: "library";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [36050];
            readonly name: "stdMath";
            readonly nameLocation: "73:7:153";
            readonly scope: 36051;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 153;
};
//# sourceMappingURL=StdMath.d.ts.map