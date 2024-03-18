export declare const BalancerErrors: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220266e2ba104e84b33f292012d642257d0222fb24ff031ac88ba274f6fcb83c50464736f6c63430008140033";
        readonly sourceMap: "5206:10031:178:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;5206:10031:178;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220266e2ba104e84b33f292012d642257d0222fb24ff031ac88ba274f6fcb83c50464736f6c63430008140033";
        readonly sourceMap: "5206:10031:178:-:0;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/3rdPartyLibs/BalancerErrors.sol\":\"BalancerErrors\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"test/3rdPartyLibs/BalancerErrors.sol\":{\"keccak256\":\"0xd4bc389c3bb940fe0ebd712a06c219dd8ebcaa8749fa5e166c8a373ca7eaa4ca\",\"license\":\"GPL-3.0-or-later\",\"urls\":[\"bzz-raw://9d0847b6535322c1ffa9d2783b32557f80aed5e8de430c824a496ea3b6f58611\",\"dweb:/ipfs/QmRDqDSkP3FDvFYbPQNXwYq25FbYsx1UEYSg11caiw2xtU\"]}},\"version\":1}";
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
                readonly "test/3rdPartyLibs/BalancerErrors.sol": "BalancerErrors";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "test/3rdPartyLibs/BalancerErrors.sol": {
                readonly keccak256: "0xd4bc389c3bb940fe0ebd712a06c219dd8ebcaa8749fa5e166c8a373ca7eaa4ca";
                readonly urls: readonly ["bzz-raw://9d0847b6535322c1ffa9d2783b32557f80aed5e8de430c824a496ea3b6f58611", "dweb:/ipfs/QmRDqDSkP3FDvFYbPQNXwYq25FbYsx1UEYSg11caiw2xtU"];
                readonly license: "GPL-3.0-or-later";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "test/3rdPartyLibs/BalancerErrors.sol";
        readonly id: 74200;
        readonly exportedSymbols: {
            readonly BalancerErrors: readonly [74199];
            readonly _require: readonly [73643, 73662];
            readonly _revert: readonly [73674, 73694];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "688:14550:178";
        readonly nodes: readonly [{
            readonly id: 73627;
            readonly nodeType: "PragmaDirective";
            readonly src: "688:31:178";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.7", ".0", "<", "0.9", ".0"];
        }, {
            readonly id: 73643;
            readonly nodeType: "FunctionDefinition";
            readonly src: "926:101:178";
            readonly nodes: readonly [];
            readonly body: {
                readonly id: 73642;
                readonly nodeType: "Block";
                readonly src: "984:43:178";
                readonly nodes: readonly [];
                readonly statements: readonly [{
                    readonly condition: {
                        readonly id: 73636;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly lValueRequested: false;
                        readonly nodeType: "UnaryOperation";
                        readonly operator: "!";
                        readonly prefix: true;
                        readonly src: "994:10:178";
                        readonly subExpression: {
                            readonly id: 73635;
                            readonly name: "condition";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 73630;
                            readonly src: "995:9:178";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly id: 73641;
                    readonly nodeType: "IfStatement";
                    readonly src: "990:34:178";
                    readonly trueBody: {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 73638;
                                readonly name: "errorCode";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73632;
                                readonly src: "1014:9:178";
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
                                readonly id: 73637;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [73674, 73694];
                                readonly referencedDeclaration: 73674;
                                readonly src: "1006:7:178";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$__$";
                                    readonly typeString: "function (uint256) pure";
                                };
                            };
                            readonly id: 73639;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1006:18:178";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 73640;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1006:18:178";
                    };
                }];
            };
            readonly documentation: {
                readonly id: 73628;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "741:184:178";
                readonly text: " @dev Reverts if `condition` is false, with a revert reason containing `errorCode`. Only codes up to 999 are\n supported.\n Uses the default 'BAL' prefix for the error code";
            };
            readonly implemented: true;
            readonly kind: "freeFunction";
            readonly modifiers: readonly [];
            readonly name: "_require";
            readonly nameLocation: "935:8:178";
            readonly parameters: {
                readonly id: 73633;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [{
                    readonly constant: false;
                    readonly id: 73630;
                    readonly mutability: "mutable";
                    readonly name: "condition";
                    readonly nameLocation: "949:9:178";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 73643;
                    readonly src: "944:14:178";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 73629;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "944:4:178";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 73632;
                    readonly mutability: "mutable";
                    readonly name: "errorCode";
                    readonly nameLocation: "968:9:178";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 73643;
                    readonly src: "960:17:178";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 73631;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "960:7:178";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly src: "943:35:178";
            };
            readonly returnParameters: {
                readonly id: 73634;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [];
                readonly src: "984:0:178";
            };
            readonly scope: 74200;
            readonly stateMutability: "pure";
            readonly virtual: false;
            readonly visibility: "internal";
        }, {
            readonly id: 73662;
            readonly nodeType: "FunctionDefinition";
            readonly src: "1162:124:178";
            readonly nodes: readonly [];
            readonly body: {
                readonly id: 73661;
                readonly nodeType: "Block";
                readonly src: "1235:51:178";
                readonly nodes: readonly [];
                readonly statements: readonly [{
                    readonly condition: {
                        readonly id: 73654;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly lValueRequested: false;
                        readonly nodeType: "UnaryOperation";
                        readonly operator: "!";
                        readonly prefix: true;
                        readonly src: "1245:10:178";
                        readonly subExpression: {
                            readonly id: 73653;
                            readonly name: "condition";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 73646;
                            readonly src: "1246:9:178";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly id: 73660;
                    readonly nodeType: "IfStatement";
                    readonly src: "1241:42:178";
                    readonly trueBody: {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 73656;
                                readonly name: "errorCode";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73648;
                                readonly src: "1265:9:178";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 73657;
                                readonly name: "prefix";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73650;
                                readonly src: "1276:6:178";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes3";
                                    readonly typeString: "bytes3";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_bytes3";
                                    readonly typeString: "bytes3";
                                }];
                                readonly id: 73655;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [73674, 73694];
                                readonly referencedDeclaration: 73694;
                                readonly src: "1257:7:178";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_bytes3_$returns$__$";
                                    readonly typeString: "function (uint256,bytes3) pure";
                                };
                            };
                            readonly id: 73658;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1257:26:178";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 73659;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1257:26:178";
                    };
                }];
            };
            readonly documentation: {
                readonly id: 73644;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "1029:132:178";
                readonly text: " @dev Reverts if `condition` is false, with a revert reason containing `errorCode`. Only codes up to 999 are\n supported.";
            };
            readonly implemented: true;
            readonly kind: "freeFunction";
            readonly modifiers: readonly [];
            readonly name: "_require";
            readonly nameLocation: "1171:8:178";
            readonly parameters: {
                readonly id: 73651;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [{
                    readonly constant: false;
                    readonly id: 73646;
                    readonly mutability: "mutable";
                    readonly name: "condition";
                    readonly nameLocation: "1185:9:178";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 73662;
                    readonly src: "1180:14:178";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 73645;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1180:4:178";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 73648;
                    readonly mutability: "mutable";
                    readonly name: "errorCode";
                    readonly nameLocation: "1204:9:178";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 73662;
                    readonly src: "1196:17:178";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 73647;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1196:7:178";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 73650;
                    readonly mutability: "mutable";
                    readonly name: "prefix";
                    readonly nameLocation: "1222:6:178";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 73662;
                    readonly src: "1215:13:178";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes3";
                        readonly typeString: "bytes3";
                    };
                    readonly typeName: {
                        readonly id: 73649;
                        readonly name: "bytes3";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1215:6:178";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes3";
                            readonly typeString: "bytes3";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly src: "1179:50:178";
            };
            readonly returnParameters: {
                readonly id: 73652;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [];
                readonly src: "1235:0:178";
            };
            readonly scope: 74200;
            readonly stateMutability: "pure";
            readonly virtual: false;
            readonly visibility: "internal";
        }, {
            readonly id: 73674;
            readonly nodeType: "FunctionDefinition";
            readonly src: "1445:126:178";
            readonly nodes: readonly [];
            readonly body: {
                readonly id: 73673;
                readonly nodeType: "Block";
                readonly src: "1486:85:178";
                readonly nodes: readonly [];
                readonly statements: readonly [{
                    readonly expression: {
                        readonly arguments: readonly [{
                            readonly id: 73669;
                            readonly name: "errorCode";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 73665;
                            readonly src: "1500:9:178";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        }, {
                            readonly hexValue: "3078343234313463";
                            readonly id: 73670;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "1511:8:178";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_4342092_by_1";
                                readonly typeString: "int_const 4342092";
                            };
                            readonly value: "0x42414c";
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            }, {
                                readonly typeIdentifier: "t_rational_4342092_by_1";
                                readonly typeString: "int_const 4342092";
                            }];
                            readonly id: 73668;
                            readonly name: "_revert";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [73674, 73694];
                            readonly referencedDeclaration: 73694;
                            readonly src: "1492:7:178";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_bytes3_$returns$__$";
                                readonly typeString: "function (uint256,bytes3) pure";
                            };
                        };
                        readonly id: 73671;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "functionCall";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "1492:28:178";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_tuple$__$";
                            readonly typeString: "tuple()";
                        };
                    };
                    readonly id: 73672;
                    readonly nodeType: "ExpressionStatement";
                    readonly src: "1492:28:178";
                }];
            };
            readonly documentation: {
                readonly id: 73663;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "1288:156:178";
                readonly text: " @dev Reverts with a revert reason containing `errorCode`. Only codes up to 999 are supported.\n Uses the default 'BAL' prefix for the error code";
            };
            readonly implemented: true;
            readonly kind: "freeFunction";
            readonly modifiers: readonly [];
            readonly name: "_revert";
            readonly nameLocation: "1454:7:178";
            readonly parameters: {
                readonly id: 73666;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [{
                    readonly constant: false;
                    readonly id: 73665;
                    readonly mutability: "mutable";
                    readonly name: "errorCode";
                    readonly nameLocation: "1470:9:178";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 73674;
                    readonly src: "1462:17:178";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 73664;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1462:7:178";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly src: "1461:19:178";
            };
            readonly returnParameters: {
                readonly id: 73667;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [];
                readonly src: "1486:0:178";
            };
            readonly scope: 74200;
            readonly stateMutability: "pure";
            readonly virtual: false;
            readonly visibility: "internal";
        }, {
            readonly id: 73694;
            readonly nodeType: "FunctionDefinition";
            readonly src: "1678:3526:178";
            readonly nodes: readonly [];
            readonly body: {
                readonly id: 73693;
                readonly nodeType: "Block";
                readonly src: "1734:3470:178";
                readonly nodes: readonly [];
                readonly statements: readonly [{
                    readonly assignments: readonly [73683];
                    readonly declarations: readonly [{
                        readonly constant: false;
                        readonly id: 73683;
                        readonly mutability: "mutable";
                        readonly name: "prefixUint";
                        readonly nameLocation: "1748:10:178";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73693;
                        readonly src: "1740:18:178";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73682;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1740:7:178";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly id: 73691;
                    readonly initialValue: {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 73688;
                                readonly name: "prefix";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73679;
                                readonly src: "1776:6:178";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes3";
                                    readonly typeString: "bytes3";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bytes3";
                                    readonly typeString: "bytes3";
                                }];
                                readonly id: 73687;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "1769:6:178";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_uint24_$";
                                    readonly typeString: "type(uint24)";
                                };
                                readonly typeName: {
                                    readonly id: 73686;
                                    readonly name: "uint24";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "1769:6:178";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 73689;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1769:14:178";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint24";
                                readonly typeString: "uint24";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_uint24";
                                readonly typeString: "uint24";
                            }];
                            readonly id: 73685;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "1761:7:178";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                readonly typeString: "type(uint256)";
                            };
                            readonly typeName: {
                                readonly id: 73684;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1761:7:178";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 73690;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "1761:23:178";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly nodeType: "VariableDeclarationStatement";
                    readonly src: "1740:44:178";
                }, {
                    readonly AST: {
                        readonly nodeType: "YulBlock";
                        readonly src: "2573:2629:178";
                        readonly statements: readonly [{
                            readonly nodeType: "YulVariableDeclaration";
                            readonly src: "2847:42:178";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly name: "errorCode";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2868:9:178";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "2879:2:178";
                                        readonly type: "";
                                        readonly value: "10";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mod";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2864:3:178";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2864:18:178";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "2884:4:178";
                                    readonly type: "";
                                    readonly value: "0x30";
                                }];
                                readonly functionName: {
                                    readonly name: "add";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2860:3:178";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "2860:29:178";
                            };
                            readonly variables: readonly [{
                                readonly name: "units";
                                readonly nodeType: "YulTypedName";
                                readonly src: "2851:5:178";
                                readonly type: "";
                            }];
                        }, {
                            readonly nodeType: "YulAssignment";
                            readonly src: "2899:31:178";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly name: "errorCode";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2916:9:178";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "2927:2:178";
                                    readonly type: "";
                                    readonly value: "10";
                                }];
                                readonly functionName: {
                                    readonly name: "div";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2912:3:178";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "2912:18:178";
                            };
                            readonly variableNames: readonly [{
                                readonly name: "errorCode";
                                readonly nodeType: "YulIdentifier";
                                readonly src: "2899:9:178";
                            }];
                        }, {
                            readonly nodeType: "YulVariableDeclaration";
                            readonly src: "2939:43:178";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly name: "errorCode";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2961:9:178";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "2972:2:178";
                                        readonly type: "";
                                        readonly value: "10";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mod";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2957:3:178";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2957:18:178";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "2977:4:178";
                                    readonly type: "";
                                    readonly value: "0x30";
                                }];
                                readonly functionName: {
                                    readonly name: "add";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2953:3:178";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "2953:29:178";
                            };
                            readonly variables: readonly [{
                                readonly name: "tenths";
                                readonly nodeType: "YulTypedName";
                                readonly src: "2943:6:178";
                                readonly type: "";
                            }];
                        }, {
                            readonly nodeType: "YulAssignment";
                            readonly src: "2992:31:178";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly name: "errorCode";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "3009:9:178";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "3020:2:178";
                                    readonly type: "";
                                    readonly value: "10";
                                }];
                                readonly functionName: {
                                    readonly name: "div";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "3005:3:178";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "3005:18:178";
                            };
                            readonly variableNames: readonly [{
                                readonly name: "errorCode";
                                readonly nodeType: "YulIdentifier";
                                readonly src: "2992:9:178";
                            }];
                        }, {
                            readonly nodeType: "YulVariableDeclaration";
                            readonly src: "3032:45:178";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly name: "errorCode";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3056:9:178";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "3067:2:178";
                                        readonly type: "";
                                        readonly value: "10";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mod";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3052:3:178";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3052:18:178";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "3072:4:178";
                                    readonly type: "";
                                    readonly value: "0x30";
                                }];
                                readonly functionName: {
                                    readonly name: "add";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "3048:3:178";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "3048:29:178";
                            };
                            readonly variables: readonly [{
                                readonly name: "hundreds";
                                readonly nodeType: "YulTypedName";
                                readonly src: "3036:8:178";
                                readonly type: "";
                            }];
                        }, {
                            readonly nodeType: "YulVariableDeclaration";
                            readonly src: "3710:61:178";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "3737:2:178";
                                    readonly type: "";
                                    readonly value: "24";
                                }, {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "3745:4:178";
                                        readonly type: "";
                                        readonly value: "0x23";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3755:1:178";
                                            readonly type: "";
                                            readonly value: "8";
                                        }, {
                                            readonly name: "prefixUint";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3758:10:178";
                                        }];
                                        readonly functionName: {
                                            readonly name: "shl";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3751:3:178";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "3751:18:178";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3741:3:178";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3741:29:178";
                                }];
                                readonly functionName: {
                                    readonly name: "shl";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "3733:3:178";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "3733:38:178";
                            };
                            readonly variables: readonly [{
                                readonly name: "formattedPrefix";
                                readonly nodeType: "YulTypedName";
                                readonly src: "3714:15:178";
                                readonly type: "";
                            }];
                        }, {
                            readonly nodeType: "YulVariableDeclaration";
                            readonly src: "3781:182:178";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "3818:3:178";
                                    readonly type: "";
                                    readonly value: "200";
                                }, {
                                    readonly arguments: readonly [{
                                        readonly name: "formattedPrefix";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3856:15:178";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "units";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3897:5:178";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "3908:1:178";
                                                    readonly type: "";
                                                    readonly value: "8";
                                                }, {
                                                    readonly name: "tenths";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3911:6:178";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "shl";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3904:3:178";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "3904:14:178";
                                            }];
                                            readonly functionName: {
                                                readonly name: "add";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3893:3:178";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "3893:26:178";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "3925:2:178";
                                                readonly type: "";
                                                readonly value: "16";
                                            }, {
                                                readonly name: "hundreds";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3929:8:178";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3921:3:178";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "3921:17:178";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3889:3:178";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "3889:50:178";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3835:3:178";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3835:118:178";
                                }];
                                readonly functionName: {
                                    readonly name: "shl";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "3801:3:178";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "3801:162:178";
                            };
                            readonly variables: readonly [{
                                readonly name: "revertReason";
                                readonly nodeType: "YulTypedName";
                                readonly src: "3785:12:178";
                                readonly type: "";
                            }];
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4491:3:178";
                                    readonly type: "";
                                    readonly value: "0x0";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4508:66:178";
                                    readonly type: "";
                                    readonly value: "0x08c379a000000000000000000000000000000000000000000000000000000000";
                                }];
                                readonly functionName: {
                                    readonly name: "mstore";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "4471:6:178";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "4471:113:178";
                            };
                            readonly nodeType: "YulExpressionStatement";
                            readonly src: "4471:113:178";
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4730:4:178";
                                    readonly type: "";
                                    readonly value: "0x04";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4748:66:178";
                                    readonly type: "";
                                    readonly value: "0x0000000000000000000000000000000000000000000000000000000000000020";
                                }];
                                readonly functionName: {
                                    readonly name: "mstore";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "4710:6:178";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "4710:114:178";
                            };
                            readonly nodeType: "YulExpressionStatement";
                            readonly src: "4710:114:178";
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4893:4:178";
                                    readonly type: "";
                                    readonly value: "0x24";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4899:1:178";
                                    readonly type: "";
                                    readonly value: "7";
                                }];
                                readonly functionName: {
                                    readonly name: "mstore";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "4886:6:178";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "4886:15:178";
                            };
                            readonly nodeType: "YulExpressionStatement";
                            readonly src: "4886:15:178";
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4966:4:178";
                                    readonly type: "";
                                    readonly value: "0x44";
                                }, {
                                    readonly name: "revertReason";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "4972:12:178";
                                }];
                                readonly functionName: {
                                    readonly name: "mstore";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "4959:6:178";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "4959:26:178";
                            };
                            readonly nodeType: "YulExpressionStatement";
                            readonly src: "4959:26:178";
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "5189:1:178";
                                    readonly type: "";
                                    readonly value: "0";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "5192:3:178";
                                    readonly type: "";
                                    readonly value: "100";
                                }];
                                readonly functionName: {
                                    readonly name: "revert";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "5182:6:178";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "5182:14:178";
                            };
                            readonly nodeType: "YulExpressionStatement";
                            readonly src: "5182:14:178";
                        }];
                    };
                    readonly evmVersion: "paris";
                    readonly externalReferences: readonly [{
                        readonly declaration: 73677;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "2868:9:178";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 73677;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "2899:9:178";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 73677;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "2916:9:178";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 73677;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "2961:9:178";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 73677;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "2992:9:178";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 73677;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "3009:9:178";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 73677;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "3056:9:178";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 73683;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "3758:10:178";
                        readonly valueSize: 1;
                    }];
                    readonly id: 73692;
                    readonly nodeType: "InlineAssembly";
                    readonly src: "2564:2638:178";
                }];
            };
            readonly documentation: {
                readonly id: 73675;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "1573:104:178";
                readonly text: " @dev Reverts with a revert reason containing `errorCode`. Only codes up to 999 are supported.";
            };
            readonly implemented: true;
            readonly kind: "freeFunction";
            readonly modifiers: readonly [];
            readonly name: "_revert";
            readonly nameLocation: "1687:7:178";
            readonly parameters: {
                readonly id: 73680;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [{
                    readonly constant: false;
                    readonly id: 73677;
                    readonly mutability: "mutable";
                    readonly name: "errorCode";
                    readonly nameLocation: "1703:9:178";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 73694;
                    readonly src: "1695:17:178";
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
                        readonly src: "1695:7:178";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 73679;
                    readonly mutability: "mutable";
                    readonly name: "prefix";
                    readonly nameLocation: "1721:6:178";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 73694;
                    readonly src: "1714:13:178";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes3";
                        readonly typeString: "bytes3";
                    };
                    readonly typeName: {
                        readonly id: 73678;
                        readonly name: "bytes3";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1714:6:178";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes3";
                            readonly typeString: "bytes3";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly src: "1694:34:178";
            };
            readonly returnParameters: {
                readonly id: 73681;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [];
                readonly src: "1734:0:178";
            };
            readonly scope: 74200;
            readonly stateMutability: "pure";
            readonly virtual: false;
            readonly visibility: "internal";
        }, {
            readonly id: 74199;
            readonly nodeType: "ContractDefinition";
            readonly src: "5206:10031:178";
            readonly nodes: readonly [{
                readonly id: 73697;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5247:42:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ADD_OVERFLOW";
                readonly nameLocation: "5273:12:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73695;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5247:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "30";
                    readonly id: 73696;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5288:1:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_0_by_1";
                        readonly typeString: "int_const 0";
                    };
                    readonly value: "0";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73700;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5295:42:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SUB_OVERFLOW";
                readonly nameLocation: "5321:12:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73698;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5295:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "31";
                    readonly id: 73699;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5336:1:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_1_by_1";
                        readonly typeString: "int_const 1";
                    };
                    readonly value: "1";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73703;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5343:43:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SUB_UNDERFLOW";
                readonly nameLocation: "5369:13:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73701;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5343:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "32";
                    readonly id: 73702;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5385:1:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_2_by_1";
                        readonly typeString: "int_const 2";
                    };
                    readonly value: "2";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73706;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5392:42:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MUL_OVERFLOW";
                readonly nameLocation: "5418:12:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73704;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5392:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "33";
                    readonly id: 73705;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5433:1:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_3_by_1";
                        readonly typeString: "int_const 3";
                    };
                    readonly value: "3";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73709;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5440:43:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ZERO_DIVISION";
                readonly nameLocation: "5466:13:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73707;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5440:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "34";
                    readonly id: 73708;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5482:1:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_4_by_1";
                        readonly typeString: "int_const 4";
                    };
                    readonly value: "4";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73712;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5489:42:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "DIV_INTERNAL";
                readonly nameLocation: "5515:12:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73710;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5489:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "35";
                    readonly id: 73711;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5530:1:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_5_by_1";
                        readonly typeString: "int_const 5";
                    };
                    readonly value: "5";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73715;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5537:45:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "X_OUT_OF_BOUNDS";
                readonly nameLocation: "5563:15:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73713;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5537:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "36";
                    readonly id: 73714;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5581:1:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_6_by_1";
                        readonly typeString: "int_const 6";
                    };
                    readonly value: "6";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73718;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5588:45:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "Y_OUT_OF_BOUNDS";
                readonly nameLocation: "5614:15:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73716;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5588:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "37";
                    readonly id: 73717;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5632:1:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_7_by_1";
                        readonly typeString: "int_const 7";
                    };
                    readonly value: "7";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73721;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5639:51:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "PRODUCT_OUT_OF_BOUNDS";
                readonly nameLocation: "5665:21:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73719;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5639:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "38";
                    readonly id: 73720;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5689:1:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_8_by_1";
                        readonly typeString: "int_const 8";
                    };
                    readonly value: "8";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73724;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5696:46:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_EXPONENT";
                readonly nameLocation: "5722:16:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73722;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5696:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "39";
                    readonly id: 73723;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5741:1:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_9_by_1";
                        readonly typeString: "int_const 9";
                    };
                    readonly value: "9";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73727;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5762:45:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "OUT_OF_BOUNDS";
                readonly nameLocation: "5788:13:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73725;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5762:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313030";
                    readonly id: 73726;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5804:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_100_by_1";
                        readonly typeString: "int_const 100";
                    };
                    readonly value: "100";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73730;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5813:46:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNSORTED_ARRAY";
                readonly nameLocation: "5839:14:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73728;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5813:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313031";
                    readonly id: 73729;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5856:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_101_by_1";
                        readonly typeString: "int_const 101";
                    };
                    readonly value: "101";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73733;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5865:47:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNSORTED_TOKENS";
                readonly nameLocation: "5891:15:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73731;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5865:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313032";
                    readonly id: 73732;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5909:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_102_by_1";
                        readonly typeString: "int_const 102";
                    };
                    readonly value: "102";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73736;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5918:53:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INPUT_LENGTH_MISMATCH";
                readonly nameLocation: "5944:21:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73734;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5918:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313033";
                    readonly id: 73735;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5968:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_103_by_1";
                        readonly typeString: "int_const 103";
                    };
                    readonly value: "103";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73739;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5977:42:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ZERO_TOKEN";
                readonly nameLocation: "6003:10:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73737;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5977:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313034";
                    readonly id: 73738;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6016:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_104_by_1";
                        readonly typeString: "int_const 104";
                    };
                    readonly value: "104";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73742;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6025:49:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_DATA";
                readonly nameLocation: "6051:17:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73740;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6025:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313035";
                    readonly id: 73741;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6071:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_105_by_1";
                        readonly typeString: "int_const 105";
                    };
                    readonly value: "105";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73745;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6101:42:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MIN_TOKENS";
                readonly nameLocation: "6127:10:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73743;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6101:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323030";
                    readonly id: 73744;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6140:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_200_by_1";
                        readonly typeString: "int_const 200";
                    };
                    readonly value: "200";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73748;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6149:42:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_TOKENS";
                readonly nameLocation: "6175:10:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73746;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6149:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323031";
                    readonly id: 73747;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6188:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_201_by_1";
                        readonly typeString: "int_const 201";
                    };
                    readonly value: "201";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73751;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6197:55:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_SWAP_FEE_PERCENTAGE";
                readonly nameLocation: "6223:23:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73749;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6197:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323032";
                    readonly id: 73750;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6249:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_202_by_1";
                        readonly typeString: "int_const 202";
                    };
                    readonly value: "202";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73754;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6258:55:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MIN_SWAP_FEE_PERCENTAGE";
                readonly nameLocation: "6284:23:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73752;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6258:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323033";
                    readonly id: 73753;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6310:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_203_by_1";
                        readonly typeString: "int_const 203";
                    };
                    readonly value: "203";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73757;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6319:43:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MINIMUM_BPT";
                readonly nameLocation: "6345:11:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73755;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6319:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323034";
                    readonly id: 73756;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6359:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_204_by_1";
                        readonly typeString: "int_const 204";
                    };
                    readonly value: "204";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73760;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6368:48:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CALLER_NOT_VAULT";
                readonly nameLocation: "6394:16:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73758;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6368:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323035";
                    readonly id: 73759;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6413:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_205_by_1";
                        readonly typeString: "int_const 205";
                    };
                    readonly value: "205";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73763;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6422:45:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNINITIALIZED";
                readonly nameLocation: "6448:13:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73761;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6422:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323036";
                    readonly id: 73762;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6464:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_206_by_1";
                        readonly typeString: "int_const 206";
                    };
                    readonly value: "206";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73766;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6473:49:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "BPT_IN_MAX_AMOUNT";
                readonly nameLocation: "6499:17:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73764;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6473:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323037";
                    readonly id: 73765;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6519:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_207_by_1";
                        readonly typeString: "int_const 207";
                    };
                    readonly value: "207";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73769;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6528:50:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "BPT_OUT_MIN_AMOUNT";
                readonly nameLocation: "6554:18:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73767;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6528:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323038";
                    readonly id: 73768;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6575:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_208_by_1";
                        readonly typeString: "int_const 208";
                    };
                    readonly value: "208";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73772;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6584:46:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "EXPIRED_PERMIT";
                readonly nameLocation: "6610:14:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73770;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6584:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323039";
                    readonly id: 73771;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6627:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_209_by_1";
                        readonly typeString: "int_const 209";
                    };
                    readonly value: "209";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73775;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6636:46:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "NOT_TWO_TOKENS";
                readonly nameLocation: "6662:14:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73773;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6636:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323130";
                    readonly id: 73774;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6679:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_210_by_1";
                        readonly typeString: "int_const 210";
                    };
                    readonly value: "210";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73778;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6688:40:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "DISABLED";
                readonly nameLocation: "6714:8:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73776;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6688:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323131";
                    readonly id: 73777;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6725:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_211_by_1";
                        readonly typeString: "int_const 211";
                    };
                    readonly value: "211";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73781;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6748:39:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MIN_AMP";
                readonly nameLocation: "6774:7:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73779;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6748:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333030";
                    readonly id: 73780;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6784:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_300_by_1";
                        readonly typeString: "int_const 300";
                    };
                    readonly value: "300";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73784;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6793:39:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_AMP";
                readonly nameLocation: "6819:7:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73782;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6793:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333031";
                    readonly id: 73783;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6829:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_301_by_1";
                        readonly typeString: "int_const 301";
                    };
                    readonly value: "301";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73787;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6838:42:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MIN_WEIGHT";
                readonly nameLocation: "6864:10:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73785;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6838:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333032";
                    readonly id: 73786;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6877:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_302_by_1";
                        readonly typeString: "int_const 302";
                    };
                    readonly value: "302";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73790;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6886:49:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_STABLE_TOKENS";
                readonly nameLocation: "6912:17:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73788;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6886:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333033";
                    readonly id: 73789;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6932:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_303_by_1";
                        readonly typeString: "int_const 303";
                    };
                    readonly value: "303";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73793;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6941:44:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_IN_RATIO";
                readonly nameLocation: "6967:12:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73791;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6941:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333034";
                    readonly id: 73792;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6982:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_304_by_1";
                        readonly typeString: "int_const 304";
                    };
                    readonly value: "304";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73796;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6991:45:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_OUT_RATIO";
                readonly nameLocation: "7017:13:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73794;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6991:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333035";
                    readonly id: 73795;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7033:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_305_by_1";
                        readonly typeString: "int_const 305";
                    };
                    readonly value: "305";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73799;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7042:56:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MIN_BPT_IN_FOR_TOKEN_OUT";
                readonly nameLocation: "7068:24:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73797;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7042:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333036";
                    readonly id: 73798;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7095:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_306_by_1";
                        readonly typeString: "int_const 306";
                    };
                    readonly value: "306";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73802;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7104:56:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_OUT_BPT_FOR_TOKEN_IN";
                readonly nameLocation: "7130:24:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73800;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7104:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333037";
                    readonly id: 73801;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7157:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_307_by_1";
                        readonly typeString: "int_const 307";
                    };
                    readonly value: "307";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73805;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7166:59:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "NORMALIZED_WEIGHT_INVARIANT";
                readonly nameLocation: "7192:27:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73803;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7166:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333038";
                    readonly id: 73804;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7222:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_308_by_1";
                        readonly typeString: "int_const 308";
                    };
                    readonly value: "308";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73808;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7231:45:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_TOKEN";
                readonly nameLocation: "7257:13:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73806;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7231:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333039";
                    readonly id: 73807;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7273:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_309_by_1";
                        readonly typeString: "int_const 309";
                    };
                    readonly value: "309";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73811;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7282:51:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNHANDLED_JOIN_KIND";
                readonly nameLocation: "7308:19:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73809;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7282:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333130";
                    readonly id: 73810;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7330:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_310_by_1";
                        readonly typeString: "int_const 310";
                    };
                    readonly value: "310";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73814;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7339:46:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ZERO_INVARIANT";
                readonly nameLocation: "7365:14:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73812;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7339:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333131";
                    readonly id: 73813;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7382:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_311_by_1";
                        readonly typeString: "int_const 311";
                    };
                    readonly value: "311";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73817;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7391:60:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ORACLE_INVALID_SECONDS_QUERY";
                readonly nameLocation: "7417:28:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73815;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7391:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333132";
                    readonly id: 73816;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7448:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_312_by_1";
                        readonly typeString: "int_const 312";
                    };
                    readonly value: "312";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73820;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7457:54:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ORACLE_NOT_INITIALIZED";
                readonly nameLocation: "7483:22:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73818;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7457:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333133";
                    readonly id: 73819;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7508:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_313_by_1";
                        readonly typeString: "int_const 313";
                    };
                    readonly value: "313";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73823;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7517:52:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ORACLE_QUERY_TOO_OLD";
                readonly nameLocation: "7543:20:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73821;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7517:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333134";
                    readonly id: 73822;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7566:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_314_by_1";
                        readonly typeString: "int_const 314";
                    };
                    readonly value: "314";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73826;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7575:52:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ORACLE_INVALID_INDEX";
                readonly nameLocation: "7601:20:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73824;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7575:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333135";
                    readonly id: 73825;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7624:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_315_by_1";
                        readonly typeString: "int_const 315";
                    };
                    readonly value: "315";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73829;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7633:47:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ORACLE_BAD_SECS";
                readonly nameLocation: "7659:15:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73827;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7633:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333136";
                    readonly id: 73828;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7677:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_316_by_1";
                        readonly typeString: "int_const 316";
                    };
                    readonly value: "316";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73832;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7686:54:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "AMP_END_TIME_TOO_CLOSE";
                readonly nameLocation: "7712:22:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73830;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7686:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333137";
                    readonly id: 73831;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7737:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_317_by_1";
                        readonly typeString: "int_const 317";
                    };
                    readonly value: "317";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73835;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7746:50:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "AMP_ONGOING_UPDATE";
                readonly nameLocation: "7772:18:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73833;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7746:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333138";
                    readonly id: 73834;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7793:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_318_by_1";
                        readonly typeString: "int_const 318";
                    };
                    readonly value: "318";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73838;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7802:49:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "AMP_RATE_TOO_HIGH";
                readonly nameLocation: "7828:17:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73836;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7802:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333139";
                    readonly id: 73837;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7848:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_319_by_1";
                        readonly typeString: "int_const 319";
                    };
                    readonly value: "319";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73841;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7857:53:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "AMP_NO_ONGOING_UPDATE";
                readonly nameLocation: "7883:21:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73839;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7857:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333230";
                    readonly id: 73840;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7907:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_320_by_1";
                        readonly typeString: "int_const 320";
                    };
                    readonly value: "320";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73844;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7916:63:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "STABLE_INVARIANT_DIDNT_CONVERGE";
                readonly nameLocation: "7942:31:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73842;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7916:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333231";
                    readonly id: 73843;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7976:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_321_by_1";
                        readonly typeString: "int_const 321";
                    };
                    readonly value: "321";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73847;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7985:65:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "STABLE_GET_BALANCE_DIDNT_CONVERGE";
                readonly nameLocation: "8011:33:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73845;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7985:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333232";
                    readonly id: 73846;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8047:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_322_by_1";
                        readonly typeString: "int_const 322";
                    };
                    readonly value: "322";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73850;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8056:52:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "RELAYER_NOT_CONTRACT";
                readonly nameLocation: "8082:20:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73848;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8056:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333233";
                    readonly id: 73849;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8105:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_323_by_1";
                        readonly typeString: "int_const 323";
                    };
                    readonly value: "323";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73853;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8114:60:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "BASE_POOL_RELAYER_NOT_CALLED";
                readonly nameLocation: "8140:28:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73851;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8114:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333234";
                    readonly id: 73852;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8171:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_324_by_1";
                        readonly typeString: "int_const 324";
                    };
                    readonly value: "324";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73856;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8180:61:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "REBALANCING_RELAYER_REENTERED";
                readonly nameLocation: "8206:29:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73854;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8180:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333235";
                    readonly id: 73855;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8238:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_325_by_1";
                        readonly typeString: "int_const 325";
                    };
                    readonly value: "325";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73859;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8247:58:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "GRADUAL_UPDATE_TIME_TRAVEL";
                readonly nameLocation: "8273:26:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73857;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8247:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333236";
                    readonly id: 73858;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8302:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_326_by_1";
                        readonly typeString: "int_const 326";
                    };
                    readonly value: "326";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73862;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8311:46:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SWAPS_DISABLED";
                readonly nameLocation: "8337:14:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73860;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8311:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333237";
                    readonly id: 73861;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8354:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_327_by_1";
                        readonly typeString: "int_const 327";
                    };
                    readonly value: "327";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73865;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8363:55:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CALLER_IS_NOT_LBP_OWNER";
                readonly nameLocation: "8389:23:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73863;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8363:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333238";
                    readonly id: 73864;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8415:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_328_by_1";
                        readonly typeString: "int_const 328";
                    };
                    readonly value: "328";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73868;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8424:51:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "PRICE_RATE_OVERFLOW";
                readonly nameLocation: "8450:19:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73866;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8424:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333239";
                    readonly id: 73867;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8472:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_329_by_1";
                        readonly typeString: "int_const 329";
                    };
                    readonly value: "329";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73871;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8481:75:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_JOIN_EXIT_KIND_WHILE_SWAPS_DISABLED";
                readonly nameLocation: "8507:43:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73869;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8481:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333330";
                    readonly id: 73870;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8553:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_330_by_1";
                        readonly typeString: "int_const 330";
                    };
                    readonly value: "330";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73874;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8562:54:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "WEIGHT_CHANGE_TOO_FAST";
                readonly nameLocation: "8588:22:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73872;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8562:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333331";
                    readonly id: 73873;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8613:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_331_by_1";
                        readonly typeString: "int_const 331";
                    };
                    readonly value: "331";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73877;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8622:63:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "LOWER_GREATER_THAN_UPPER_TARGET";
                readonly nameLocation: "8648:31:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73875;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8622:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333332";
                    readonly id: 73876;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8682:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_332_by_1";
                        readonly typeString: "int_const 332";
                    };
                    readonly value: "332";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73880;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8691:53:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UPPER_TARGET_TOO_HIGH";
                readonly nameLocation: "8717:21:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73878;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8691:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333333";
                    readonly id: 73879;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8741:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_333_by_1";
                        readonly typeString: "int_const 333";
                    };
                    readonly value: "333";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73883;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8750:56:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNHANDLED_BY_LINEAR_POOL";
                readonly nameLocation: "8776:24:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73881;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8750:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333334";
                    readonly id: 73882;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8803:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_334_by_1";
                        readonly typeString: "int_const 334";
                    };
                    readonly value: "334";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73886;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8812:51:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "OUT_OF_TARGET_RANGE";
                readonly nameLocation: "8838:19:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73884;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8812:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333335";
                    readonly id: 73885;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8860:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_335_by_1";
                        readonly typeString: "int_const 335";
                    };
                    readonly value: "335";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73889;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8869:51:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNHANDLED_EXIT_KIND";
                readonly nameLocation: "8895:19:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73887;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8869:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333336";
                    readonly id: 73888;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8917:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_336_by_1";
                        readonly typeString: "int_const 336";
                    };
                    readonly value: "336";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73892;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8926:49:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNAUTHORIZED_EXIT";
                readonly nameLocation: "8952:17:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73890;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8926:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333337";
                    readonly id: 73891;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8972:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_337_by_1";
                        readonly typeString: "int_const 337";
                    };
                    readonly value: "337";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73895;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8981:66:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_MANAGEMENT_SWAP_FEE_PERCENTAGE";
                readonly nameLocation: "9007:34:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73893;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8981:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333338";
                    readonly id: 73894;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9044:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_338_by_1";
                        readonly typeString: "int_const 338";
                    };
                    readonly value: "338";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73898;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9053:57:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNHANDLED_BY_MANAGED_POOL";
                readonly nameLocation: "9079:25:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73896;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9053:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333339";
                    readonly id: 73897;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9107:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_339_by_1";
                        readonly typeString: "int_const 339";
                    };
                    readonly value: "339";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73901;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9116:57:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNHANDLED_BY_PHANTOM_POOL";
                readonly nameLocation: "9142:25:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73899;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9116:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333430";
                    readonly id: 73900;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9170:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_340_by_1";
                        readonly typeString: "int_const 340";
                    };
                    readonly value: "340";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73904;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9179:65:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "TOKEN_DOES_NOT_HAVE_RATE_PROVIDER";
                readonly nameLocation: "9205:33:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73902;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9179:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333431";
                    readonly id: 73903;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9241:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_341_by_1";
                        readonly typeString: "int_const 341";
                    };
                    readonly value: "341";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73907;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9250:54:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_INITIALIZATION";
                readonly nameLocation: "9276:22:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73905;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9250:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333432";
                    readonly id: 73906;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9301:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_342_by_1";
                        readonly typeString: "int_const 342";
                    };
                    readonly value: "342";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73910;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9310:55:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "OUT_OF_NEW_TARGET_RANGE";
                readonly nameLocation: "9336:23:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73908;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9310:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333433";
                    readonly id: 73909;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9362:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_343_by_1";
                        readonly typeString: "int_const 343";
                    };
                    readonly value: "343";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73913;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9371:48:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "FEATURE_DISABLED";
                readonly nameLocation: "9397:16:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73911;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9371:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333434";
                    readonly id: 73912;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9416:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_344_by_1";
                        readonly typeString: "int_const 344";
                    };
                    readonly value: "344";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73916;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9425:61:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNINITIALIZED_POOL_CONTROLLER";
                readonly nameLocation: "9451:29:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73914;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9425:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333435";
                    readonly id: 73915;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9483:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_345_by_1";
                        readonly typeString: "int_const 345";
                    };
                    readonly value: "345";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73919;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9492:62:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SET_SWAP_FEE_DURING_FEE_CHANGE";
                readonly nameLocation: "9518:30:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73917;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9492:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333436";
                    readonly id: 73918;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9551:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_346_by_1";
                        readonly typeString: "int_const 346";
                    };
                    readonly value: "346";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73922;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9560:63:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SET_SWAP_FEE_PENDING_FEE_CHANGE";
                readonly nameLocation: "9586:31:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73920;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9560:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333437";
                    readonly id: 73921;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9620:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_347_by_1";
                        readonly typeString: "int_const 347";
                    };
                    readonly value: "347";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73925;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9629:66:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CHANGE_TOKENS_DURING_WEIGHT_CHANGE";
                readonly nameLocation: "9655:34:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73923;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9629:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333438";
                    readonly id: 73924;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9692:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_348_by_1";
                        readonly typeString: "int_const 348";
                    };
                    readonly value: "348";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73928;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9701:67:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CHANGE_TOKENS_PENDING_WEIGHT_CHANGE";
                readonly nameLocation: "9727:35:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73926;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9701:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333439";
                    readonly id: 73927;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9765:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_349_by_1";
                        readonly typeString: "int_const 349";
                    };
                    readonly value: "349";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73931;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9774:42:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_WEIGHT";
                readonly nameLocation: "9800:10:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73929;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9774:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333530";
                    readonly id: 73930;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9813:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_350_by_1";
                        readonly typeString: "int_const 350";
                    };
                    readonly value: "350";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73934;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9822:49:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNAUTHORIZED_JOIN";
                readonly nameLocation: "9848:17:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73932;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9822:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333531";
                    readonly id: 73933;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9868:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_351_by_1";
                        readonly typeString: "int_const 351";
                    };
                    readonly value: "351";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73937;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9877:65:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_MANAGEMENT_AUM_FEE_PERCENTAGE";
                readonly nameLocation: "9903:33:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73935;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9877:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333532";
                    readonly id: 73936;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9939:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_352_by_1";
                        readonly typeString: "int_const 352";
                    };
                    readonly value: "352";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73940;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9948:49:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "FRACTIONAL_TARGET";
                readonly nameLocation: "9974:17:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73938;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9948:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333533";
                    readonly id: 73939;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9994:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_353_by_1";
                        readonly typeString: "int_const 353";
                    };
                    readonly value: "353";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73943;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10003:49:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ADD_OR_REMOVE_BPT";
                readonly nameLocation: "10029:17:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73941;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10003:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333534";
                    readonly id: 73942;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10049:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_354_by_1";
                        readonly typeString: "int_const 354";
                    };
                    readonly value: "354";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73946;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10058:62:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_CIRCUIT_BREAKER_BOUNDS";
                readonly nameLocation: "10084:30:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73944;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10058:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333535";
                    readonly id: 73945;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10117:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_355_by_1";
                        readonly typeString: "int_const 355";
                    };
                    readonly value: "355";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73949;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10126:55:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CIRCUIT_BREAKER_TRIPPED";
                readonly nameLocation: "10152:23:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73947;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10126:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333536";
                    readonly id: 73948;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10178:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_356_by_1";
                        readonly typeString: "int_const 356";
                    };
                    readonly value: "356";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73952;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10187:54:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MALICIOUS_QUERY_REVERT";
                readonly nameLocation: "10213:22:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73950;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10187:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333537";
                    readonly id: 73951;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10238:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_357_by_1";
                        readonly typeString: "int_const 357";
                    };
                    readonly value: "357";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73955;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10247:52:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "JOINS_EXITS_DISABLED";
                readonly nameLocation: "10273:20:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73953;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10247:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333538";
                    readonly id: 73954;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10296:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_358_by_1";
                        readonly typeString: "int_const 358";
                    };
                    readonly value: "358";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73958;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10317:42:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "REENTRANCY";
                readonly nameLocation: "10343:10:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73956;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10317:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343030";
                    readonly id: 73957;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10356:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_400_by_1";
                        readonly typeString: "int_const 400";
                    };
                    readonly value: "400";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73961;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10365:50:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SENDER_NOT_ALLOWED";
                readonly nameLocation: "10391:18:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73959;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10365:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343031";
                    readonly id: 73960;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10412:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_401_by_1";
                        readonly typeString: "int_const 401";
                    };
                    readonly value: "401";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73964;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10421:38:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "PAUSED";
                readonly nameLocation: "10447:6:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73962;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10421:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343032";
                    readonly id: 73963;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10456:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_402_by_1";
                        readonly typeString: "int_const 402";
                    };
                    readonly value: "402";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73967;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10465:52:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "PAUSE_WINDOW_EXPIRED";
                readonly nameLocation: "10491:20:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73965;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10465:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343033";
                    readonly id: 73966;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10514:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_403_by_1";
                        readonly typeString: "int_const 403";
                    };
                    readonly value: "403";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73970;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10523:57:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_PAUSE_WINDOW_DURATION";
                readonly nameLocation: "10549:25:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73968;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10523:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343034";
                    readonly id: 73969;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10577:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_404_by_1";
                        readonly typeString: "int_const 404";
                    };
                    readonly value: "404";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73973;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10586:58:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_BUFFER_PERIOD_DURATION";
                readonly nameLocation: "10612:26:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73971;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10586:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343035";
                    readonly id: 73972;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10641:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_405_by_1";
                        readonly typeString: "int_const 405";
                    };
                    readonly value: "405";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73976;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10650:52:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_BALANCE";
                readonly nameLocation: "10676:20:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73974;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10650:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343036";
                    readonly id: 73975;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10699:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_406_by_1";
                        readonly typeString: "int_const 406";
                    };
                    readonly value: "406";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73979;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10708:54:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_ALLOWANCE";
                readonly nameLocation: "10734:22:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73977;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10708:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343037";
                    readonly id: 73978;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10759:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_407_by_1";
                        readonly typeString: "int_const 407";
                    };
                    readonly value: "407";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73982;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10768:64:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_TRANSFER_FROM_ZERO_ADDRESS";
                readonly nameLocation: "10794:32:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73980;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10768:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343038";
                    readonly id: 73981;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10829:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_408_by_1";
                        readonly typeString: "int_const 408";
                    };
                    readonly value: "408";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73985;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10838:62:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_TRANSFER_TO_ZERO_ADDRESS";
                readonly nameLocation: "10864:30:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73983;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10838:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343039";
                    readonly id: 73984;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10897:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_409_by_1";
                        readonly typeString: "int_const 409";
                    };
                    readonly value: "409";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73988;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10906:58:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_MINT_TO_ZERO_ADDRESS";
                readonly nameLocation: "10932:26:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73986;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10906:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343130";
                    readonly id: 73987;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10961:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_410_by_1";
                        readonly typeString: "int_const 410";
                    };
                    readonly value: "410";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73991;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10970:60:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_BURN_FROM_ZERO_ADDRESS";
                readonly nameLocation: "10996:28:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73989;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10970:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343131";
                    readonly id: 73990;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11027:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_411_by_1";
                        readonly typeString: "int_const 411";
                    };
                    readonly value: "411";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73994;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11036:63:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_APPROVE_FROM_ZERO_ADDRESS";
                readonly nameLocation: "11062:31:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73992;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11036:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343132";
                    readonly id: 73993;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11096:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_412_by_1";
                        readonly typeString: "int_const 412";
                    };
                    readonly value: "412";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73997;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11105:61:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_APPROVE_TO_ZERO_ADDRESS";
                readonly nameLocation: "11131:29:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73995;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11105:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343133";
                    readonly id: 73996;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11163:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_413_by_1";
                        readonly typeString: "int_const 413";
                    };
                    readonly value: "413";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74000;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11172:64:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_TRANSFER_EXCEEDS_ALLOWANCE";
                readonly nameLocation: "11198:32:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73998;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11172:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343134";
                    readonly id: 73999;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11233:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_414_by_1";
                        readonly typeString: "int_const 414";
                    };
                    readonly value: "414";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74003;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11242:68:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_DECREASED_ALLOWANCE_BELOW_ZERO";
                readonly nameLocation: "11268:36:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74001;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11242:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343135";
                    readonly id: 74002;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11307:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_415_by_1";
                        readonly typeString: "int_const 415";
                    };
                    readonly value: "415";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74006;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11316:62:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_TRANSFER_EXCEEDS_BALANCE";
                readonly nameLocation: "11342:30:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74004;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11316:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343136";
                    readonly id: 74005;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11375:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_416_by_1";
                        readonly typeString: "int_const 416";
                    };
                    readonly value: "416";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74009;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11384:60:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_BURN_EXCEEDS_ALLOWANCE";
                readonly nameLocation: "11410:28:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74007;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11384:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343137";
                    readonly id: 74008;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11441:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_417_by_1";
                        readonly typeString: "int_const 417";
                    };
                    readonly value: "417";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74012;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11450:54:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SAFE_ERC20_CALL_FAILED";
                readonly nameLocation: "11476:22:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74010;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11450:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343138";
                    readonly id: 74011;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11501:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_418_by_1";
                        readonly typeString: "int_const 418";
                    };
                    readonly value: "418";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74015;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11510:60:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ADDRESS_INSUFFICIENT_BALANCE";
                readonly nameLocation: "11536:28:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74013;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11510:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343139";
                    readonly id: 74014;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11567:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_419_by_1";
                        readonly typeString: "int_const 419";
                    };
                    readonly value: "419";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74018;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11576:57:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ADDRESS_CANNOT_SEND_VALUE";
                readonly nameLocation: "11602:25:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74016;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11576:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343230";
                    readonly id: 74017;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11630:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_420_by_1";
                        readonly typeString: "int_const 420";
                    };
                    readonly value: "420";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74021;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11639:63:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SAFE_CAST_VALUE_CANT_FIT_INT256";
                readonly nameLocation: "11665:31:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74019;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11639:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343231";
                    readonly id: 74020;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11699:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_421_by_1";
                        readonly typeString: "int_const 421";
                    };
                    readonly value: "421";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74024;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11708:54:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "GRANT_SENDER_NOT_ADMIN";
                readonly nameLocation: "11734:22:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74022;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11708:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343232";
                    readonly id: 74023;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11759:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_422_by_1";
                        readonly typeString: "int_const 422";
                    };
                    readonly value: "422";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74027;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11768:55:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "REVOKE_SENDER_NOT_ADMIN";
                readonly nameLocation: "11794:23:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74025;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11768:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343233";
                    readonly id: 74026;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11820:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_423_by_1";
                        readonly typeString: "int_const 423";
                    };
                    readonly value: "423";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74030;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11829:59:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "RENOUNCE_SENDER_NOT_ALLOWED";
                readonly nameLocation: "11855:27:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74028;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11829:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343234";
                    readonly id: 74029;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11885:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_424_by_1";
                        readonly typeString: "int_const 424";
                    };
                    readonly value: "424";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74033;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11894:53:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "BUFFER_PERIOD_EXPIRED";
                readonly nameLocation: "11920:21:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74031;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11894:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343235";
                    readonly id: 74032;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11944:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_425_by_1";
                        readonly typeString: "int_const 425";
                    };
                    readonly value: "425";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74036;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11953:51:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CALLER_IS_NOT_OWNER";
                readonly nameLocation: "11979:19:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74034;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11953:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343236";
                    readonly id: 74035;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12001:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_426_by_1";
                        readonly typeString: "int_const 426";
                    };
                    readonly value: "426";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74039;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12010:49:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "NEW_OWNER_IS_ZERO";
                readonly nameLocation: "12036:17:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74037;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12010:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343237";
                    readonly id: 74038;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12056:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_427_by_1";
                        readonly typeString: "int_const 427";
                    };
                    readonly value: "427";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74042;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12065:54:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CODE_DEPLOYMENT_FAILED";
                readonly nameLocation: "12091:22:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74040;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12065:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343238";
                    readonly id: 74041;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12116:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_428_by_1";
                        readonly typeString: "int_const 428";
                    };
                    readonly value: "428";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74045;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12125:52:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CALL_TO_NON_CONTRACT";
                readonly nameLocation: "12151:20:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74043;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12125:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343239";
                    readonly id: 74044;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12174:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_429_by_1";
                        readonly typeString: "int_const 429";
                    };
                    readonly value: "429";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74048;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12183:53:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "LOW_LEVEL_CALL_FAILED";
                readonly nameLocation: "12209:21:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74046;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12183:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343330";
                    readonly id: 74047;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12233:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_430_by_1";
                        readonly typeString: "int_const 430";
                    };
                    readonly value: "430";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74051;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12242:42:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "NOT_PAUSED";
                readonly nameLocation: "12268:10:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74049;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12242:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343331";
                    readonly id: 74050;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12281:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_431_by_1";
                        readonly typeString: "int_const 431";
                    };
                    readonly value: "431";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74054;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12290:59:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ADDRESS_ALREADY_ALLOWLISTED";
                readonly nameLocation: "12316:27:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74052;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12290:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343332";
                    readonly id: 74053;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12346:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_432_by_1";
                        readonly typeString: "int_const 432";
                    };
                    readonly value: "432";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74057;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12355:55:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ADDRESS_NOT_ALLOWLISTED";
                readonly nameLocation: "12381:23:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74055;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12355:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343333";
                    readonly id: 74056;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12407:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_433_by_1";
                        readonly typeString: "int_const 433";
                    };
                    readonly value: "433";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74060;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12416:58:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_BURN_EXCEEDS_BALANCE";
                readonly nameLocation: "12442:26:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74058;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12416:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343334";
                    readonly id: 74059;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12471:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_434_by_1";
                        readonly typeString: "int_const 434";
                    };
                    readonly value: "434";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74063;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12480:49:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_OPERATION";
                readonly nameLocation: "12506:17:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74061;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12480:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343335";
                    readonly id: 74062;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12526:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_435_by_1";
                        readonly typeString: "int_const 435";
                    };
                    readonly value: "435";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74066;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12535:46:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CODEC_OVERFLOW";
                readonly nameLocation: "12561:14:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74064;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12535:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343336";
                    readonly id: 74065;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12578:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_436_by_1";
                        readonly typeString: "int_const 436";
                    };
                    readonly value: "436";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74069;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12587:48:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "IN_RECOVERY_MODE";
                readonly nameLocation: "12613:16:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74067;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12587:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343337";
                    readonly id: 74068;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12632:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_437_by_1";
                        readonly typeString: "int_const 437";
                    };
                    readonly value: "437";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74072;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12641:52:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "NOT_IN_RECOVERY_MODE";
                readonly nameLocation: "12667:20:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74070;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12641:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343338";
                    readonly id: 74071;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12690:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_438_by_1";
                        readonly typeString: "int_const 438";
                    };
                    readonly value: "438";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74075;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12699:47:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INDUCED_FAILURE";
                readonly nameLocation: "12725:15:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74073;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12699:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343339";
                    readonly id: 74074;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12743:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_439_by_1";
                        readonly typeString: "int_const 439";
                    };
                    readonly value: "439";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74078;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12752:49:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "EXPIRED_SIGNATURE";
                readonly nameLocation: "12778:17:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74076;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12752:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343430";
                    readonly id: 74077;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12798:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_440_by_1";
                        readonly typeString: "int_const 440";
                    };
                    readonly value: "440";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74081;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12807:51:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MALFORMED_SIGNATURE";
                readonly nameLocation: "12833:19:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74079;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12807:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343431";
                    readonly id: 74080;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12855:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_441_by_1";
                        readonly typeString: "int_const 441";
                    };
                    readonly value: "441";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74084;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12864:63:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SAFE_CAST_VALUE_CANT_FIT_UINT64";
                readonly nameLocation: "12890:31:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74082;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12864:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343432";
                    readonly id: 74083;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12924:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_442_by_1";
                        readonly typeString: "int_const 442";
                    };
                    readonly value: "442";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74087;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12933:50:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNHANDLED_FEE_TYPE";
                readonly nameLocation: "12959:18:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74085;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12933:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343433";
                    readonly id: 74086;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12980:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_443_by_1";
                        readonly typeString: "int_const 443";
                    };
                    readonly value: "443";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74090;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12989:46:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "BURN_FROM_ZERO";
                readonly nameLocation: "13015:14:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74088;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12989:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343434";
                    readonly id: 74089;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13032:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_444_by_1";
                        readonly typeString: "int_const 444";
                    };
                    readonly value: "444";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74093;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13055:47:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_POOL_ID";
                readonly nameLocation: "13081:15:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74091;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13055:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353030";
                    readonly id: 74092;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13099:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_500_by_1";
                        readonly typeString: "int_const 500";
                    };
                    readonly value: "500";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74096;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13108:47:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CALLER_NOT_POOL";
                readonly nameLocation: "13134:15:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74094;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13108:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353031";
                    readonly id: 74095;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13152:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_501_by_1";
                        readonly typeString: "int_const 501";
                    };
                    readonly value: "501";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74099;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13161:56:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SENDER_NOT_ASSET_MANAGER";
                readonly nameLocation: "13187:24:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74097;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13161:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353032";
                    readonly id: 74098;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13214:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_502_by_1";
                        readonly typeString: "int_const 502";
                    };
                    readonly value: "502";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74102;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13223:57:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "USER_DOESNT_ALLOW_RELAYER";
                readonly nameLocation: "13249:25:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74100;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13223:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353033";
                    readonly id: 74101;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13277:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_503_by_1";
                        readonly typeString: "int_const 503";
                    };
                    readonly value: "503";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74105;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13286:49:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_SIGNATURE";
                readonly nameLocation: "13312:17:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74103;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13286:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353034";
                    readonly id: 74104;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13332:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_504_by_1";
                        readonly typeString: "int_const 504";
                    };
                    readonly value: "504";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74108;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13341:46:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "EXIT_BELOW_MIN";
                readonly nameLocation: "13367:14:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74106;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13341:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353035";
                    readonly id: 74107;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13384:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_505_by_1";
                        readonly typeString: "int_const 505";
                    };
                    readonly value: "505";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74111;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13393:46:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "JOIN_ABOVE_MAX";
                readonly nameLocation: "13419:14:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74109;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13393:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353036";
                    readonly id: 74110;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13436:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_506_by_1";
                        readonly typeString: "int_const 506";
                    };
                    readonly value: "506";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74114;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13445:42:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SWAP_LIMIT";
                readonly nameLocation: "13471:10:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74112;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13445:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353037";
                    readonly id: 74113;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13484:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_507_by_1";
                        readonly typeString: "int_const 507";
                    };
                    readonly value: "507";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74117;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13493:45:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SWAP_DEADLINE";
                readonly nameLocation: "13519:13:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74115;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13493:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353038";
                    readonly id: 74116;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13535:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_508_by_1";
                        readonly typeString: "int_const 508";
                    };
                    readonly value: "508";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74120;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13544:54:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CANNOT_SWAP_SAME_TOKEN";
                readonly nameLocation: "13570:22:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74118;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13544:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353039";
                    readonly id: 74119;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13595:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_509_by_1";
                        readonly typeString: "int_const 509";
                    };
                    readonly value: "509";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74123;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13604:60:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNKNOWN_AMOUNT_IN_FIRST_SWAP";
                readonly nameLocation: "13630:28:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74121;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13604:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353130";
                    readonly id: 74122;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13661:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_510_by_1";
                        readonly typeString: "int_const 510";
                    };
                    readonly value: "510";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74126;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13670:60:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MALCONSTRUCTED_MULTIHOP_SWAP";
                readonly nameLocation: "13696:28:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74124;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13670:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353131";
                    readonly id: 74125;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13727:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_511_by_1";
                        readonly typeString: "int_const 511";
                    };
                    readonly value: "511";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74129;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13736:57:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INTERNAL_BALANCE_OVERFLOW";
                readonly nameLocation: "13762:25:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74127;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13736:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353132";
                    readonly id: 74128;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13790:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_512_by_1";
                        readonly typeString: "int_const 512";
                    };
                    readonly value: "512";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74132;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13799:61:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_INTERNAL_BALANCE";
                readonly nameLocation: "13825:29:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74130;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13799:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353133";
                    readonly id: 74131;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13857:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_513_by_1";
                        readonly typeString: "int_const 513";
                    };
                    readonly value: "513";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74135;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13866:60:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_ETH_INTERNAL_BALANCE";
                readonly nameLocation: "13892:28:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74133;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13866:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353134";
                    readonly id: 74134;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13923:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_514_by_1";
                        readonly typeString: "int_const 514";
                    };
                    readonly value: "514";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74138;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13932:57:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_POST_LOAN_BALANCE";
                readonly nameLocation: "13958:25:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74136;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13932:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353135";
                    readonly id: 74137;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13986:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_515_by_1";
                        readonly typeString: "int_const 515";
                    };
                    readonly value: "515";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74141;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13995:48:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_ETH";
                readonly nameLocation: "14021:16:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74139;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13995:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353136";
                    readonly id: 74140;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14040:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_516_by_1";
                        readonly typeString: "int_const 516";
                    };
                    readonly value: "516";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74144;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14049:47:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNALLOCATED_ETH";
                readonly nameLocation: "14075:15:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74142;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14049:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353137";
                    readonly id: 74143;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14093:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_517_by_1";
                        readonly typeString: "int_const 517";
                    };
                    readonly value: "517";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74147;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14102:44:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ETH_TRANSFER";
                readonly nameLocation: "14128:12:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74145;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14102:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353138";
                    readonly id: 74146;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14143:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_518_by_1";
                        readonly typeString: "int_const 518";
                    };
                    readonly value: "518";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74150;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14152:55:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CANNOT_USE_ETH_SENTINEL";
                readonly nameLocation: "14178:23:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74148;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14152:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353139";
                    readonly id: 74149;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14204:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_519_by_1";
                        readonly typeString: "int_const 519";
                    };
                    readonly value: "519";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74153;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14213:47:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "TOKENS_MISMATCH";
                readonly nameLocation: "14239:15:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74151;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14213:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353230";
                    readonly id: 74152;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14257:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_520_by_1";
                        readonly typeString: "int_const 520";
                    };
                    readonly value: "520";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74156;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14266:52:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "TOKEN_NOT_REGISTERED";
                readonly nameLocation: "14292:20:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74154;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14266:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353231";
                    readonly id: 74155;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14315:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_521_by_1";
                        readonly typeString: "int_const 521";
                    };
                    readonly value: "521";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74159;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14324:56:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "TOKEN_ALREADY_REGISTERED";
                readonly nameLocation: "14350:24:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74157;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14324:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353232";
                    readonly id: 74158;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14377:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_522_by_1";
                        readonly typeString: "int_const 522";
                    };
                    readonly value: "522";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74162;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14386:50:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "TOKENS_ALREADY_SET";
                readonly nameLocation: "14412:18:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74160;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14386:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353233";
                    readonly id: 74161;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14433:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_523_by_1";
                        readonly typeString: "int_const 523";
                    };
                    readonly value: "523";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74165;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14442:55:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "TOKENS_LENGTH_MUST_BE_2";
                readonly nameLocation: "14468:23:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74163;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14442:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353234";
                    readonly id: 74164;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14494:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_524_by_1";
                        readonly typeString: "int_const 524";
                    };
                    readonly value: "524";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74168;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14503:53:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "NONZERO_TOKEN_BALANCE";
                readonly nameLocation: "14529:21:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74166;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14503:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353235";
                    readonly id: 74167;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14553:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_525_by_1";
                        readonly typeString: "int_const 525";
                    };
                    readonly value: "525";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74171;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14562:54:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "BALANCE_TOTAL_OVERFLOW";
                readonly nameLocation: "14588:22:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74169;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14562:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353236";
                    readonly id: 74170;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14613:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_526_by_1";
                        readonly typeString: "int_const 526";
                    };
                    readonly value: "526";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74174;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14622:46:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "POOL_NO_TOKENS";
                readonly nameLocation: "14648:14:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74172;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14622:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353237";
                    readonly id: 74173;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14665:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_527_by_1";
                        readonly typeString: "int_const 527";
                    };
                    readonly value: "527";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74177;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14674:63:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_FLASH_LOAN_BALANCE";
                readonly nameLocation: "14700:31:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74175;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14674:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353238";
                    readonly id: 74176;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14734:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_528_by_1";
                        readonly typeString: "int_const 528";
                    };
                    readonly value: "528";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74180;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14756:60:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SWAP_FEE_PERCENTAGE_TOO_HIGH";
                readonly nameLocation: "14782:28:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74178;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14756:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "363030";
                    readonly id: 74179;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14813:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_600_by_1";
                        readonly typeString: "int_const 600";
                    };
                    readonly value: "600";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74183;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14822:66:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "FLASH_LOAN_FEE_PERCENTAGE_TOO_HIGH";
                readonly nameLocation: "14848:34:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74181;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14822:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "363031";
                    readonly id: 74182;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14885:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_601_by_1";
                        readonly typeString: "int_const 601";
                    };
                    readonly value: "601";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74186;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14894:66:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_FLASH_LOAN_FEE_AMOUNT";
                readonly nameLocation: "14920:34:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74184;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14894:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "363032";
                    readonly id: 74185;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14957:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_602_by_1";
                        readonly typeString: "int_const 602";
                    };
                    readonly value: "602";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74189;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14966:59:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "AUM_FEE_PERCENTAGE_TOO_HIGH";
                readonly nameLocation: "14992:27:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74187;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14966:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "363033";
                    readonly id: 74188;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "15022:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_603_by_1";
                        readonly typeString: "int_const 603";
                    };
                    readonly value: "603";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74192;
                readonly nodeType: "VariableDeclaration";
                readonly src: "15051:64:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SPLITTER_FEE_PERCENTAGE_TOO_HIGH";
                readonly nameLocation: "15077:32:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74190;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "15051:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "373030";
                    readonly id: 74191;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "15112:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_700_by_1";
                        readonly typeString: "int_const 700";
                    };
                    readonly value: "700";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74195;
                readonly nodeType: "VariableDeclaration";
                readonly src: "15134:45:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNIMPLEMENTED";
                readonly nameLocation: "15160:13:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74193;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "15134:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "393938";
                    readonly id: 74194;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "15176:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_998_by_1";
                        readonly typeString: "int_const 998";
                    };
                    readonly value: "998";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 74198;
                readonly nodeType: "VariableDeclaration";
                readonly src: "15185:49:178";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SHOULD_NOT_HAPPEN";
                readonly nameLocation: "15211:17:178";
                readonly scope: 74199;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 74196;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "15185:7:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "393939";
                    readonly id: 74197;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "15231:3:178";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_999_by_1";
                        readonly typeString: "int_const 999";
                    };
                    readonly value: "999";
                };
                readonly visibility: "internal";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "BalancerErrors";
            readonly contractDependencies: readonly [];
            readonly contractKind: "library";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [74199];
            readonly name: "BalancerErrors";
            readonly nameLocation: "5214:14:178";
            readonly scope: 74200;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "GPL-3.0-or-later";
    };
    readonly id: 178;
};
//# sourceMappingURL=BalancerErrors.d.ts.map