export declare const BalancerErrors: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220266e2ba104e84b33f292012d642257d0222fb24ff031ac88ba274f6fcb83c50464736f6c63430008140033";
        readonly sourceMap: "5206:10031:128:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;5206:10031:128;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220266e2ba104e84b33f292012d642257d0222fb24ff031ac88ba274f6fcb83c50464736f6c63430008140033";
        readonly sourceMap: "5206:10031:128:-:0;;;;;;;;";
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
        readonly id: 69263;
        readonly exportedSymbols: {
            readonly BalancerErrors: readonly [69262];
            readonly _require: readonly [68706, 68725];
            readonly _revert: readonly [68737, 68757];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "688:14550:128";
        readonly nodes: readonly [{
            readonly id: 68690;
            readonly nodeType: "PragmaDirective";
            readonly src: "688:31:128";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.7", ".0", "<", "0.9", ".0"];
        }, {
            readonly id: 68706;
            readonly nodeType: "FunctionDefinition";
            readonly src: "926:101:128";
            readonly nodes: readonly [];
            readonly body: {
                readonly id: 68705;
                readonly nodeType: "Block";
                readonly src: "984:43:128";
                readonly nodes: readonly [];
                readonly statements: readonly [{
                    readonly condition: {
                        readonly id: 68699;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly lValueRequested: false;
                        readonly nodeType: "UnaryOperation";
                        readonly operator: "!";
                        readonly prefix: true;
                        readonly src: "994:10:128";
                        readonly subExpression: {
                            readonly id: 68698;
                            readonly name: "condition";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 68693;
                            readonly src: "995:9:128";
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
                    readonly id: 68704;
                    readonly nodeType: "IfStatement";
                    readonly src: "990:34:128";
                    readonly trueBody: {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 68701;
                                readonly name: "errorCode";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68695;
                                readonly src: "1014:9:128";
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
                                readonly id: 68700;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [68737, 68757];
                                readonly referencedDeclaration: 68737;
                                readonly src: "1006:7:128";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$__$";
                                    readonly typeString: "function (uint256) pure";
                                };
                            };
                            readonly id: 68702;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1006:18:128";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 68703;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1006:18:128";
                    };
                }];
            };
            readonly documentation: {
                readonly id: 68691;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "741:184:128";
                readonly text: " @dev Reverts if `condition` is false, with a revert reason containing `errorCode`. Only codes up to 999 are\n supported.\n Uses the default 'BAL' prefix for the error code";
            };
            readonly implemented: true;
            readonly kind: "freeFunction";
            readonly modifiers: readonly [];
            readonly name: "_require";
            readonly nameLocation: "935:8:128";
            readonly parameters: {
                readonly id: 68696;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [{
                    readonly constant: false;
                    readonly id: 68693;
                    readonly mutability: "mutable";
                    readonly name: "condition";
                    readonly nameLocation: "949:9:128";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 68706;
                    readonly src: "944:14:128";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 68692;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "944:4:128";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 68695;
                    readonly mutability: "mutable";
                    readonly name: "errorCode";
                    readonly nameLocation: "968:9:128";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 68706;
                    readonly src: "960:17:128";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 68694;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "960:7:128";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly src: "943:35:128";
            };
            readonly returnParameters: {
                readonly id: 68697;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [];
                readonly src: "984:0:128";
            };
            readonly scope: 69263;
            readonly stateMutability: "pure";
            readonly virtual: false;
            readonly visibility: "internal";
        }, {
            readonly id: 68725;
            readonly nodeType: "FunctionDefinition";
            readonly src: "1162:124:128";
            readonly nodes: readonly [];
            readonly body: {
                readonly id: 68724;
                readonly nodeType: "Block";
                readonly src: "1235:51:128";
                readonly nodes: readonly [];
                readonly statements: readonly [{
                    readonly condition: {
                        readonly id: 68717;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly lValueRequested: false;
                        readonly nodeType: "UnaryOperation";
                        readonly operator: "!";
                        readonly prefix: true;
                        readonly src: "1245:10:128";
                        readonly subExpression: {
                            readonly id: 68716;
                            readonly name: "condition";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 68709;
                            readonly src: "1246:9:128";
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
                    readonly id: 68723;
                    readonly nodeType: "IfStatement";
                    readonly src: "1241:42:128";
                    readonly trueBody: {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 68719;
                                readonly name: "errorCode";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68711;
                                readonly src: "1265:9:128";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 68720;
                                readonly name: "prefix";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68713;
                                readonly src: "1276:6:128";
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
                                readonly id: 68718;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [68737, 68757];
                                readonly referencedDeclaration: 68757;
                                readonly src: "1257:7:128";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_bytes3_$returns$__$";
                                    readonly typeString: "function (uint256,bytes3) pure";
                                };
                            };
                            readonly id: 68721;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1257:26:128";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 68722;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1257:26:128";
                    };
                }];
            };
            readonly documentation: {
                readonly id: 68707;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "1029:132:128";
                readonly text: " @dev Reverts if `condition` is false, with a revert reason containing `errorCode`. Only codes up to 999 are\n supported.";
            };
            readonly implemented: true;
            readonly kind: "freeFunction";
            readonly modifiers: readonly [];
            readonly name: "_require";
            readonly nameLocation: "1171:8:128";
            readonly parameters: {
                readonly id: 68714;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [{
                    readonly constant: false;
                    readonly id: 68709;
                    readonly mutability: "mutable";
                    readonly name: "condition";
                    readonly nameLocation: "1185:9:128";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 68725;
                    readonly src: "1180:14:128";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 68708;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1180:4:128";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 68711;
                    readonly mutability: "mutable";
                    readonly name: "errorCode";
                    readonly nameLocation: "1204:9:128";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 68725;
                    readonly src: "1196:17:128";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 68710;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1196:7:128";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 68713;
                    readonly mutability: "mutable";
                    readonly name: "prefix";
                    readonly nameLocation: "1222:6:128";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 68725;
                    readonly src: "1215:13:128";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes3";
                        readonly typeString: "bytes3";
                    };
                    readonly typeName: {
                        readonly id: 68712;
                        readonly name: "bytes3";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1215:6:128";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes3";
                            readonly typeString: "bytes3";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly src: "1179:50:128";
            };
            readonly returnParameters: {
                readonly id: 68715;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [];
                readonly src: "1235:0:128";
            };
            readonly scope: 69263;
            readonly stateMutability: "pure";
            readonly virtual: false;
            readonly visibility: "internal";
        }, {
            readonly id: 68737;
            readonly nodeType: "FunctionDefinition";
            readonly src: "1445:126:128";
            readonly nodes: readonly [];
            readonly body: {
                readonly id: 68736;
                readonly nodeType: "Block";
                readonly src: "1486:85:128";
                readonly nodes: readonly [];
                readonly statements: readonly [{
                    readonly expression: {
                        readonly arguments: readonly [{
                            readonly id: 68732;
                            readonly name: "errorCode";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 68728;
                            readonly src: "1500:9:128";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        }, {
                            readonly hexValue: "3078343234313463";
                            readonly id: 68733;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "1511:8:128";
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
                            readonly id: 68731;
                            readonly name: "_revert";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [68737, 68757];
                            readonly referencedDeclaration: 68757;
                            readonly src: "1492:7:128";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_bytes3_$returns$__$";
                                readonly typeString: "function (uint256,bytes3) pure";
                            };
                        };
                        readonly id: 68734;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "functionCall";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "1492:28:128";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_tuple$__$";
                            readonly typeString: "tuple()";
                        };
                    };
                    readonly id: 68735;
                    readonly nodeType: "ExpressionStatement";
                    readonly src: "1492:28:128";
                }];
            };
            readonly documentation: {
                readonly id: 68726;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "1288:156:128";
                readonly text: " @dev Reverts with a revert reason containing `errorCode`. Only codes up to 999 are supported.\n Uses the default 'BAL' prefix for the error code";
            };
            readonly implemented: true;
            readonly kind: "freeFunction";
            readonly modifiers: readonly [];
            readonly name: "_revert";
            readonly nameLocation: "1454:7:128";
            readonly parameters: {
                readonly id: 68729;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [{
                    readonly constant: false;
                    readonly id: 68728;
                    readonly mutability: "mutable";
                    readonly name: "errorCode";
                    readonly nameLocation: "1470:9:128";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 68737;
                    readonly src: "1462:17:128";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 68727;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1462:7:128";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly src: "1461:19:128";
            };
            readonly returnParameters: {
                readonly id: 68730;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [];
                readonly src: "1486:0:128";
            };
            readonly scope: 69263;
            readonly stateMutability: "pure";
            readonly virtual: false;
            readonly visibility: "internal";
        }, {
            readonly id: 68757;
            readonly nodeType: "FunctionDefinition";
            readonly src: "1678:3526:128";
            readonly nodes: readonly [];
            readonly body: {
                readonly id: 68756;
                readonly nodeType: "Block";
                readonly src: "1734:3470:128";
                readonly nodes: readonly [];
                readonly statements: readonly [{
                    readonly assignments: readonly [68746];
                    readonly declarations: readonly [{
                        readonly constant: false;
                        readonly id: 68746;
                        readonly mutability: "mutable";
                        readonly name: "prefixUint";
                        readonly nameLocation: "1748:10:128";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 68756;
                        readonly src: "1740:18:128";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 68745;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1740:7:128";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly id: 68754;
                    readonly initialValue: {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 68751;
                                readonly name: "prefix";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 68742;
                                readonly src: "1776:6:128";
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
                                readonly id: 68750;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "1769:6:128";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_uint24_$";
                                    readonly typeString: "type(uint24)";
                                };
                                readonly typeName: {
                                    readonly id: 68749;
                                    readonly name: "uint24";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "1769:6:128";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 68752;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1769:14:128";
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
                            readonly id: 68748;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "1761:7:128";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                readonly typeString: "type(uint256)";
                            };
                            readonly typeName: {
                                readonly id: 68747;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1761:7:128";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 68753;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "1761:23:128";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly nodeType: "VariableDeclarationStatement";
                    readonly src: "1740:44:128";
                }, {
                    readonly AST: {
                        readonly nodeType: "YulBlock";
                        readonly src: "2573:2629:128";
                        readonly statements: readonly [{
                            readonly nodeType: "YulVariableDeclaration";
                            readonly src: "2847:42:128";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly name: "errorCode";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2868:9:128";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "2879:2:128";
                                        readonly type: "";
                                        readonly value: "10";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mod";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2864:3:128";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2864:18:128";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "2884:4:128";
                                    readonly type: "";
                                    readonly value: "0x30";
                                }];
                                readonly functionName: {
                                    readonly name: "add";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2860:3:128";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "2860:29:128";
                            };
                            readonly variables: readonly [{
                                readonly name: "units";
                                readonly nodeType: "YulTypedName";
                                readonly src: "2851:5:128";
                                readonly type: "";
                            }];
                        }, {
                            readonly nodeType: "YulAssignment";
                            readonly src: "2899:31:128";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly name: "errorCode";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2916:9:128";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "2927:2:128";
                                    readonly type: "";
                                    readonly value: "10";
                                }];
                                readonly functionName: {
                                    readonly name: "div";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2912:3:128";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "2912:18:128";
                            };
                            readonly variableNames: readonly [{
                                readonly name: "errorCode";
                                readonly nodeType: "YulIdentifier";
                                readonly src: "2899:9:128";
                            }];
                        }, {
                            readonly nodeType: "YulVariableDeclaration";
                            readonly src: "2939:43:128";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly name: "errorCode";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2961:9:128";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "2972:2:128";
                                        readonly type: "";
                                        readonly value: "10";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mod";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2957:3:128";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2957:18:128";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "2977:4:128";
                                    readonly type: "";
                                    readonly value: "0x30";
                                }];
                                readonly functionName: {
                                    readonly name: "add";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2953:3:128";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "2953:29:128";
                            };
                            readonly variables: readonly [{
                                readonly name: "tenths";
                                readonly nodeType: "YulTypedName";
                                readonly src: "2943:6:128";
                                readonly type: "";
                            }];
                        }, {
                            readonly nodeType: "YulAssignment";
                            readonly src: "2992:31:128";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly name: "errorCode";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "3009:9:128";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "3020:2:128";
                                    readonly type: "";
                                    readonly value: "10";
                                }];
                                readonly functionName: {
                                    readonly name: "div";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "3005:3:128";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "3005:18:128";
                            };
                            readonly variableNames: readonly [{
                                readonly name: "errorCode";
                                readonly nodeType: "YulIdentifier";
                                readonly src: "2992:9:128";
                            }];
                        }, {
                            readonly nodeType: "YulVariableDeclaration";
                            readonly src: "3032:45:128";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly name: "errorCode";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3056:9:128";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "3067:2:128";
                                        readonly type: "";
                                        readonly value: "10";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mod";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3052:3:128";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3052:18:128";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "3072:4:128";
                                    readonly type: "";
                                    readonly value: "0x30";
                                }];
                                readonly functionName: {
                                    readonly name: "add";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "3048:3:128";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "3048:29:128";
                            };
                            readonly variables: readonly [{
                                readonly name: "hundreds";
                                readonly nodeType: "YulTypedName";
                                readonly src: "3036:8:128";
                                readonly type: "";
                            }];
                        }, {
                            readonly nodeType: "YulVariableDeclaration";
                            readonly src: "3710:61:128";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "3737:2:128";
                                    readonly type: "";
                                    readonly value: "24";
                                }, {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "3745:4:128";
                                        readonly type: "";
                                        readonly value: "0x23";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3755:1:128";
                                            readonly type: "";
                                            readonly value: "8";
                                        }, {
                                            readonly name: "prefixUint";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3758:10:128";
                                        }];
                                        readonly functionName: {
                                            readonly name: "shl";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3751:3:128";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "3751:18:128";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3741:3:128";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3741:29:128";
                                }];
                                readonly functionName: {
                                    readonly name: "shl";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "3733:3:128";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "3733:38:128";
                            };
                            readonly variables: readonly [{
                                readonly name: "formattedPrefix";
                                readonly nodeType: "YulTypedName";
                                readonly src: "3714:15:128";
                                readonly type: "";
                            }];
                        }, {
                            readonly nodeType: "YulVariableDeclaration";
                            readonly src: "3781:182:128";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "3818:3:128";
                                    readonly type: "";
                                    readonly value: "200";
                                }, {
                                    readonly arguments: readonly [{
                                        readonly name: "formattedPrefix";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3856:15:128";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "units";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3897:5:128";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "3908:1:128";
                                                    readonly type: "";
                                                    readonly value: "8";
                                                }, {
                                                    readonly name: "tenths";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3911:6:128";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "shl";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3904:3:128";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "3904:14:128";
                                            }];
                                            readonly functionName: {
                                                readonly name: "add";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3893:3:128";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "3893:26:128";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "3925:2:128";
                                                readonly type: "";
                                                readonly value: "16";
                                            }, {
                                                readonly name: "hundreds";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3929:8:128";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3921:3:128";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "3921:17:128";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3889:3:128";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "3889:50:128";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3835:3:128";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3835:118:128";
                                }];
                                readonly functionName: {
                                    readonly name: "shl";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "3801:3:128";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "3801:162:128";
                            };
                            readonly variables: readonly [{
                                readonly name: "revertReason";
                                readonly nodeType: "YulTypedName";
                                readonly src: "3785:12:128";
                                readonly type: "";
                            }];
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4491:3:128";
                                    readonly type: "";
                                    readonly value: "0x0";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4508:66:128";
                                    readonly type: "";
                                    readonly value: "0x08c379a000000000000000000000000000000000000000000000000000000000";
                                }];
                                readonly functionName: {
                                    readonly name: "mstore";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "4471:6:128";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "4471:113:128";
                            };
                            readonly nodeType: "YulExpressionStatement";
                            readonly src: "4471:113:128";
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4730:4:128";
                                    readonly type: "";
                                    readonly value: "0x04";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4748:66:128";
                                    readonly type: "";
                                    readonly value: "0x0000000000000000000000000000000000000000000000000000000000000020";
                                }];
                                readonly functionName: {
                                    readonly name: "mstore";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "4710:6:128";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "4710:114:128";
                            };
                            readonly nodeType: "YulExpressionStatement";
                            readonly src: "4710:114:128";
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4893:4:128";
                                    readonly type: "";
                                    readonly value: "0x24";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4899:1:128";
                                    readonly type: "";
                                    readonly value: "7";
                                }];
                                readonly functionName: {
                                    readonly name: "mstore";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "4886:6:128";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "4886:15:128";
                            };
                            readonly nodeType: "YulExpressionStatement";
                            readonly src: "4886:15:128";
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4966:4:128";
                                    readonly type: "";
                                    readonly value: "0x44";
                                }, {
                                    readonly name: "revertReason";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "4972:12:128";
                                }];
                                readonly functionName: {
                                    readonly name: "mstore";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "4959:6:128";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "4959:26:128";
                            };
                            readonly nodeType: "YulExpressionStatement";
                            readonly src: "4959:26:128";
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "5189:1:128";
                                    readonly type: "";
                                    readonly value: "0";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "5192:3:128";
                                    readonly type: "";
                                    readonly value: "100";
                                }];
                                readonly functionName: {
                                    readonly name: "revert";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "5182:6:128";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "5182:14:128";
                            };
                            readonly nodeType: "YulExpressionStatement";
                            readonly src: "5182:14:128";
                        }];
                    };
                    readonly evmVersion: "paris";
                    readonly externalReferences: readonly [{
                        readonly declaration: 68740;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "2868:9:128";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 68740;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "2899:9:128";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 68740;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "2916:9:128";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 68740;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "2961:9:128";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 68740;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "2992:9:128";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 68740;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "3009:9:128";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 68740;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "3056:9:128";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 68746;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "3758:10:128";
                        readonly valueSize: 1;
                    }];
                    readonly id: 68755;
                    readonly nodeType: "InlineAssembly";
                    readonly src: "2564:2638:128";
                }];
            };
            readonly documentation: {
                readonly id: 68738;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "1573:104:128";
                readonly text: " @dev Reverts with a revert reason containing `errorCode`. Only codes up to 999 are supported.";
            };
            readonly implemented: true;
            readonly kind: "freeFunction";
            readonly modifiers: readonly [];
            readonly name: "_revert";
            readonly nameLocation: "1687:7:128";
            readonly parameters: {
                readonly id: 68743;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [{
                    readonly constant: false;
                    readonly id: 68740;
                    readonly mutability: "mutable";
                    readonly name: "errorCode";
                    readonly nameLocation: "1703:9:128";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 68757;
                    readonly src: "1695:17:128";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 68739;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1695:7:128";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 68742;
                    readonly mutability: "mutable";
                    readonly name: "prefix";
                    readonly nameLocation: "1721:6:128";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 68757;
                    readonly src: "1714:13:128";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes3";
                        readonly typeString: "bytes3";
                    };
                    readonly typeName: {
                        readonly id: 68741;
                        readonly name: "bytes3";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1714:6:128";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes3";
                            readonly typeString: "bytes3";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly src: "1694:34:128";
            };
            readonly returnParameters: {
                readonly id: 68744;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [];
                readonly src: "1734:0:128";
            };
            readonly scope: 69263;
            readonly stateMutability: "pure";
            readonly virtual: false;
            readonly visibility: "internal";
        }, {
            readonly id: 69262;
            readonly nodeType: "ContractDefinition";
            readonly src: "5206:10031:128";
            readonly nodes: readonly [{
                readonly id: 68760;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5247:42:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ADD_OVERFLOW";
                readonly nameLocation: "5273:12:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68758;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5247:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "30";
                    readonly id: 68759;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5288:1:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_0_by_1";
                        readonly typeString: "int_const 0";
                    };
                    readonly value: "0";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68763;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5295:42:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SUB_OVERFLOW";
                readonly nameLocation: "5321:12:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68761;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5295:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "31";
                    readonly id: 68762;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5336:1:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_1_by_1";
                        readonly typeString: "int_const 1";
                    };
                    readonly value: "1";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68766;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5343:43:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SUB_UNDERFLOW";
                readonly nameLocation: "5369:13:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68764;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5343:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "32";
                    readonly id: 68765;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5385:1:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_2_by_1";
                        readonly typeString: "int_const 2";
                    };
                    readonly value: "2";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68769;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5392:42:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MUL_OVERFLOW";
                readonly nameLocation: "5418:12:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68767;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5392:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "33";
                    readonly id: 68768;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5433:1:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_3_by_1";
                        readonly typeString: "int_const 3";
                    };
                    readonly value: "3";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68772;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5440:43:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ZERO_DIVISION";
                readonly nameLocation: "5466:13:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68770;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5440:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "34";
                    readonly id: 68771;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5482:1:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_4_by_1";
                        readonly typeString: "int_const 4";
                    };
                    readonly value: "4";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68775;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5489:42:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "DIV_INTERNAL";
                readonly nameLocation: "5515:12:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68773;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5489:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "35";
                    readonly id: 68774;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5530:1:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_5_by_1";
                        readonly typeString: "int_const 5";
                    };
                    readonly value: "5";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68778;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5537:45:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "X_OUT_OF_BOUNDS";
                readonly nameLocation: "5563:15:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68776;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5537:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "36";
                    readonly id: 68777;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5581:1:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_6_by_1";
                        readonly typeString: "int_const 6";
                    };
                    readonly value: "6";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68781;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5588:45:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "Y_OUT_OF_BOUNDS";
                readonly nameLocation: "5614:15:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68779;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5588:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "37";
                    readonly id: 68780;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5632:1:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_7_by_1";
                        readonly typeString: "int_const 7";
                    };
                    readonly value: "7";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68784;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5639:51:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "PRODUCT_OUT_OF_BOUNDS";
                readonly nameLocation: "5665:21:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68782;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5639:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "38";
                    readonly id: 68783;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5689:1:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_8_by_1";
                        readonly typeString: "int_const 8";
                    };
                    readonly value: "8";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68787;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5696:46:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_EXPONENT";
                readonly nameLocation: "5722:16:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68785;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5696:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "39";
                    readonly id: 68786;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5741:1:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_9_by_1";
                        readonly typeString: "int_const 9";
                    };
                    readonly value: "9";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68790;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5762:45:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "OUT_OF_BOUNDS";
                readonly nameLocation: "5788:13:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68788;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5762:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313030";
                    readonly id: 68789;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5804:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_100_by_1";
                        readonly typeString: "int_const 100";
                    };
                    readonly value: "100";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68793;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5813:46:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNSORTED_ARRAY";
                readonly nameLocation: "5839:14:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68791;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5813:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313031";
                    readonly id: 68792;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5856:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_101_by_1";
                        readonly typeString: "int_const 101";
                    };
                    readonly value: "101";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68796;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5865:47:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNSORTED_TOKENS";
                readonly nameLocation: "5891:15:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68794;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5865:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313032";
                    readonly id: 68795;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5909:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_102_by_1";
                        readonly typeString: "int_const 102";
                    };
                    readonly value: "102";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68799;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5918:53:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INPUT_LENGTH_MISMATCH";
                readonly nameLocation: "5944:21:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68797;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5918:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313033";
                    readonly id: 68798;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5968:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_103_by_1";
                        readonly typeString: "int_const 103";
                    };
                    readonly value: "103";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68802;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5977:42:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ZERO_TOKEN";
                readonly nameLocation: "6003:10:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68800;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5977:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313034";
                    readonly id: 68801;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6016:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_104_by_1";
                        readonly typeString: "int_const 104";
                    };
                    readonly value: "104";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68805;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6025:49:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_DATA";
                readonly nameLocation: "6051:17:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68803;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6025:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313035";
                    readonly id: 68804;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6071:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_105_by_1";
                        readonly typeString: "int_const 105";
                    };
                    readonly value: "105";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68808;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6101:42:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MIN_TOKENS";
                readonly nameLocation: "6127:10:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68806;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6101:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323030";
                    readonly id: 68807;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6140:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_200_by_1";
                        readonly typeString: "int_const 200";
                    };
                    readonly value: "200";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68811;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6149:42:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_TOKENS";
                readonly nameLocation: "6175:10:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68809;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6149:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323031";
                    readonly id: 68810;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6188:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_201_by_1";
                        readonly typeString: "int_const 201";
                    };
                    readonly value: "201";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68814;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6197:55:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_SWAP_FEE_PERCENTAGE";
                readonly nameLocation: "6223:23:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68812;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6197:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323032";
                    readonly id: 68813;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6249:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_202_by_1";
                        readonly typeString: "int_const 202";
                    };
                    readonly value: "202";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68817;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6258:55:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MIN_SWAP_FEE_PERCENTAGE";
                readonly nameLocation: "6284:23:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68815;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6258:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323033";
                    readonly id: 68816;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6310:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_203_by_1";
                        readonly typeString: "int_const 203";
                    };
                    readonly value: "203";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68820;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6319:43:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MINIMUM_BPT";
                readonly nameLocation: "6345:11:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68818;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6319:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323034";
                    readonly id: 68819;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6359:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_204_by_1";
                        readonly typeString: "int_const 204";
                    };
                    readonly value: "204";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68823;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6368:48:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CALLER_NOT_VAULT";
                readonly nameLocation: "6394:16:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68821;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6368:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323035";
                    readonly id: 68822;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6413:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_205_by_1";
                        readonly typeString: "int_const 205";
                    };
                    readonly value: "205";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68826;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6422:45:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNINITIALIZED";
                readonly nameLocation: "6448:13:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68824;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6422:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323036";
                    readonly id: 68825;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6464:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_206_by_1";
                        readonly typeString: "int_const 206";
                    };
                    readonly value: "206";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68829;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6473:49:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "BPT_IN_MAX_AMOUNT";
                readonly nameLocation: "6499:17:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68827;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6473:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323037";
                    readonly id: 68828;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6519:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_207_by_1";
                        readonly typeString: "int_const 207";
                    };
                    readonly value: "207";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68832;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6528:50:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "BPT_OUT_MIN_AMOUNT";
                readonly nameLocation: "6554:18:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68830;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6528:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323038";
                    readonly id: 68831;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6575:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_208_by_1";
                        readonly typeString: "int_const 208";
                    };
                    readonly value: "208";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68835;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6584:46:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "EXPIRED_PERMIT";
                readonly nameLocation: "6610:14:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68833;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6584:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323039";
                    readonly id: 68834;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6627:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_209_by_1";
                        readonly typeString: "int_const 209";
                    };
                    readonly value: "209";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68838;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6636:46:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "NOT_TWO_TOKENS";
                readonly nameLocation: "6662:14:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68836;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6636:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323130";
                    readonly id: 68837;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6679:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_210_by_1";
                        readonly typeString: "int_const 210";
                    };
                    readonly value: "210";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68841;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6688:40:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "DISABLED";
                readonly nameLocation: "6714:8:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68839;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6688:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323131";
                    readonly id: 68840;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6725:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_211_by_1";
                        readonly typeString: "int_const 211";
                    };
                    readonly value: "211";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68844;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6748:39:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MIN_AMP";
                readonly nameLocation: "6774:7:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68842;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6748:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333030";
                    readonly id: 68843;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6784:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_300_by_1";
                        readonly typeString: "int_const 300";
                    };
                    readonly value: "300";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68847;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6793:39:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_AMP";
                readonly nameLocation: "6819:7:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68845;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6793:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333031";
                    readonly id: 68846;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6829:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_301_by_1";
                        readonly typeString: "int_const 301";
                    };
                    readonly value: "301";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68850;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6838:42:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MIN_WEIGHT";
                readonly nameLocation: "6864:10:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68848;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6838:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333032";
                    readonly id: 68849;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6877:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_302_by_1";
                        readonly typeString: "int_const 302";
                    };
                    readonly value: "302";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68853;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6886:49:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_STABLE_TOKENS";
                readonly nameLocation: "6912:17:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68851;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6886:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333033";
                    readonly id: 68852;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6932:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_303_by_1";
                        readonly typeString: "int_const 303";
                    };
                    readonly value: "303";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68856;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6941:44:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_IN_RATIO";
                readonly nameLocation: "6967:12:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68854;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6941:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333034";
                    readonly id: 68855;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6982:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_304_by_1";
                        readonly typeString: "int_const 304";
                    };
                    readonly value: "304";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68859;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6991:45:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_OUT_RATIO";
                readonly nameLocation: "7017:13:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68857;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6991:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333035";
                    readonly id: 68858;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7033:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_305_by_1";
                        readonly typeString: "int_const 305";
                    };
                    readonly value: "305";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68862;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7042:56:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MIN_BPT_IN_FOR_TOKEN_OUT";
                readonly nameLocation: "7068:24:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68860;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7042:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333036";
                    readonly id: 68861;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7095:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_306_by_1";
                        readonly typeString: "int_const 306";
                    };
                    readonly value: "306";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68865;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7104:56:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_OUT_BPT_FOR_TOKEN_IN";
                readonly nameLocation: "7130:24:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68863;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7104:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333037";
                    readonly id: 68864;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7157:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_307_by_1";
                        readonly typeString: "int_const 307";
                    };
                    readonly value: "307";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68868;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7166:59:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "NORMALIZED_WEIGHT_INVARIANT";
                readonly nameLocation: "7192:27:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68866;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7166:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333038";
                    readonly id: 68867;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7222:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_308_by_1";
                        readonly typeString: "int_const 308";
                    };
                    readonly value: "308";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68871;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7231:45:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_TOKEN";
                readonly nameLocation: "7257:13:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68869;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7231:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333039";
                    readonly id: 68870;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7273:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_309_by_1";
                        readonly typeString: "int_const 309";
                    };
                    readonly value: "309";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68874;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7282:51:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNHANDLED_JOIN_KIND";
                readonly nameLocation: "7308:19:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68872;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7282:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333130";
                    readonly id: 68873;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7330:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_310_by_1";
                        readonly typeString: "int_const 310";
                    };
                    readonly value: "310";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68877;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7339:46:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ZERO_INVARIANT";
                readonly nameLocation: "7365:14:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68875;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7339:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333131";
                    readonly id: 68876;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7382:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_311_by_1";
                        readonly typeString: "int_const 311";
                    };
                    readonly value: "311";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68880;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7391:60:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ORACLE_INVALID_SECONDS_QUERY";
                readonly nameLocation: "7417:28:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68878;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7391:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333132";
                    readonly id: 68879;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7448:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_312_by_1";
                        readonly typeString: "int_const 312";
                    };
                    readonly value: "312";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68883;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7457:54:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ORACLE_NOT_INITIALIZED";
                readonly nameLocation: "7483:22:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68881;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7457:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333133";
                    readonly id: 68882;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7508:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_313_by_1";
                        readonly typeString: "int_const 313";
                    };
                    readonly value: "313";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68886;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7517:52:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ORACLE_QUERY_TOO_OLD";
                readonly nameLocation: "7543:20:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68884;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7517:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333134";
                    readonly id: 68885;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7566:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_314_by_1";
                        readonly typeString: "int_const 314";
                    };
                    readonly value: "314";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68889;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7575:52:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ORACLE_INVALID_INDEX";
                readonly nameLocation: "7601:20:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68887;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7575:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333135";
                    readonly id: 68888;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7624:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_315_by_1";
                        readonly typeString: "int_const 315";
                    };
                    readonly value: "315";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68892;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7633:47:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ORACLE_BAD_SECS";
                readonly nameLocation: "7659:15:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68890;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7633:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333136";
                    readonly id: 68891;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7677:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_316_by_1";
                        readonly typeString: "int_const 316";
                    };
                    readonly value: "316";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68895;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7686:54:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "AMP_END_TIME_TOO_CLOSE";
                readonly nameLocation: "7712:22:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68893;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7686:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333137";
                    readonly id: 68894;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7737:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_317_by_1";
                        readonly typeString: "int_const 317";
                    };
                    readonly value: "317";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68898;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7746:50:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "AMP_ONGOING_UPDATE";
                readonly nameLocation: "7772:18:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68896;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7746:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333138";
                    readonly id: 68897;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7793:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_318_by_1";
                        readonly typeString: "int_const 318";
                    };
                    readonly value: "318";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68901;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7802:49:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "AMP_RATE_TOO_HIGH";
                readonly nameLocation: "7828:17:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68899;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7802:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333139";
                    readonly id: 68900;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7848:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_319_by_1";
                        readonly typeString: "int_const 319";
                    };
                    readonly value: "319";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68904;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7857:53:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "AMP_NO_ONGOING_UPDATE";
                readonly nameLocation: "7883:21:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68902;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7857:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333230";
                    readonly id: 68903;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7907:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_320_by_1";
                        readonly typeString: "int_const 320";
                    };
                    readonly value: "320";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68907;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7916:63:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "STABLE_INVARIANT_DIDNT_CONVERGE";
                readonly nameLocation: "7942:31:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68905;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7916:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333231";
                    readonly id: 68906;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7976:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_321_by_1";
                        readonly typeString: "int_const 321";
                    };
                    readonly value: "321";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68910;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7985:65:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "STABLE_GET_BALANCE_DIDNT_CONVERGE";
                readonly nameLocation: "8011:33:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68908;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7985:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333232";
                    readonly id: 68909;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8047:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_322_by_1";
                        readonly typeString: "int_const 322";
                    };
                    readonly value: "322";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68913;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8056:52:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "RELAYER_NOT_CONTRACT";
                readonly nameLocation: "8082:20:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68911;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8056:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333233";
                    readonly id: 68912;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8105:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_323_by_1";
                        readonly typeString: "int_const 323";
                    };
                    readonly value: "323";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68916;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8114:60:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "BASE_POOL_RELAYER_NOT_CALLED";
                readonly nameLocation: "8140:28:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68914;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8114:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333234";
                    readonly id: 68915;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8171:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_324_by_1";
                        readonly typeString: "int_const 324";
                    };
                    readonly value: "324";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68919;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8180:61:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "REBALANCING_RELAYER_REENTERED";
                readonly nameLocation: "8206:29:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68917;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8180:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333235";
                    readonly id: 68918;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8238:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_325_by_1";
                        readonly typeString: "int_const 325";
                    };
                    readonly value: "325";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68922;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8247:58:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "GRADUAL_UPDATE_TIME_TRAVEL";
                readonly nameLocation: "8273:26:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68920;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8247:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333236";
                    readonly id: 68921;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8302:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_326_by_1";
                        readonly typeString: "int_const 326";
                    };
                    readonly value: "326";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68925;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8311:46:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SWAPS_DISABLED";
                readonly nameLocation: "8337:14:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68923;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8311:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333237";
                    readonly id: 68924;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8354:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_327_by_1";
                        readonly typeString: "int_const 327";
                    };
                    readonly value: "327";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68928;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8363:55:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CALLER_IS_NOT_LBP_OWNER";
                readonly nameLocation: "8389:23:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68926;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8363:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333238";
                    readonly id: 68927;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8415:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_328_by_1";
                        readonly typeString: "int_const 328";
                    };
                    readonly value: "328";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68931;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8424:51:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "PRICE_RATE_OVERFLOW";
                readonly nameLocation: "8450:19:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68929;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8424:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333239";
                    readonly id: 68930;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8472:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_329_by_1";
                        readonly typeString: "int_const 329";
                    };
                    readonly value: "329";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68934;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8481:75:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_JOIN_EXIT_KIND_WHILE_SWAPS_DISABLED";
                readonly nameLocation: "8507:43:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68932;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8481:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333330";
                    readonly id: 68933;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8553:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_330_by_1";
                        readonly typeString: "int_const 330";
                    };
                    readonly value: "330";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68937;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8562:54:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "WEIGHT_CHANGE_TOO_FAST";
                readonly nameLocation: "8588:22:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68935;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8562:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333331";
                    readonly id: 68936;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8613:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_331_by_1";
                        readonly typeString: "int_const 331";
                    };
                    readonly value: "331";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68940;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8622:63:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "LOWER_GREATER_THAN_UPPER_TARGET";
                readonly nameLocation: "8648:31:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68938;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8622:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333332";
                    readonly id: 68939;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8682:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_332_by_1";
                        readonly typeString: "int_const 332";
                    };
                    readonly value: "332";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68943;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8691:53:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UPPER_TARGET_TOO_HIGH";
                readonly nameLocation: "8717:21:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68941;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8691:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333333";
                    readonly id: 68942;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8741:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_333_by_1";
                        readonly typeString: "int_const 333";
                    };
                    readonly value: "333";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68946;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8750:56:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNHANDLED_BY_LINEAR_POOL";
                readonly nameLocation: "8776:24:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68944;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8750:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333334";
                    readonly id: 68945;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8803:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_334_by_1";
                        readonly typeString: "int_const 334";
                    };
                    readonly value: "334";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68949;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8812:51:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "OUT_OF_TARGET_RANGE";
                readonly nameLocation: "8838:19:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68947;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8812:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333335";
                    readonly id: 68948;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8860:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_335_by_1";
                        readonly typeString: "int_const 335";
                    };
                    readonly value: "335";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68952;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8869:51:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNHANDLED_EXIT_KIND";
                readonly nameLocation: "8895:19:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68950;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8869:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333336";
                    readonly id: 68951;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8917:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_336_by_1";
                        readonly typeString: "int_const 336";
                    };
                    readonly value: "336";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68955;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8926:49:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNAUTHORIZED_EXIT";
                readonly nameLocation: "8952:17:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68953;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8926:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333337";
                    readonly id: 68954;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8972:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_337_by_1";
                        readonly typeString: "int_const 337";
                    };
                    readonly value: "337";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68958;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8981:66:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_MANAGEMENT_SWAP_FEE_PERCENTAGE";
                readonly nameLocation: "9007:34:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68956;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8981:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333338";
                    readonly id: 68957;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9044:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_338_by_1";
                        readonly typeString: "int_const 338";
                    };
                    readonly value: "338";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68961;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9053:57:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNHANDLED_BY_MANAGED_POOL";
                readonly nameLocation: "9079:25:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68959;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9053:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333339";
                    readonly id: 68960;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9107:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_339_by_1";
                        readonly typeString: "int_const 339";
                    };
                    readonly value: "339";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68964;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9116:57:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNHANDLED_BY_PHANTOM_POOL";
                readonly nameLocation: "9142:25:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68962;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9116:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333430";
                    readonly id: 68963;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9170:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_340_by_1";
                        readonly typeString: "int_const 340";
                    };
                    readonly value: "340";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68967;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9179:65:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "TOKEN_DOES_NOT_HAVE_RATE_PROVIDER";
                readonly nameLocation: "9205:33:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68965;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9179:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333431";
                    readonly id: 68966;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9241:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_341_by_1";
                        readonly typeString: "int_const 341";
                    };
                    readonly value: "341";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68970;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9250:54:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_INITIALIZATION";
                readonly nameLocation: "9276:22:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68968;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9250:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333432";
                    readonly id: 68969;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9301:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_342_by_1";
                        readonly typeString: "int_const 342";
                    };
                    readonly value: "342";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68973;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9310:55:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "OUT_OF_NEW_TARGET_RANGE";
                readonly nameLocation: "9336:23:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68971;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9310:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333433";
                    readonly id: 68972;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9362:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_343_by_1";
                        readonly typeString: "int_const 343";
                    };
                    readonly value: "343";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68976;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9371:48:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "FEATURE_DISABLED";
                readonly nameLocation: "9397:16:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68974;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9371:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333434";
                    readonly id: 68975;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9416:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_344_by_1";
                        readonly typeString: "int_const 344";
                    };
                    readonly value: "344";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68979;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9425:61:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNINITIALIZED_POOL_CONTROLLER";
                readonly nameLocation: "9451:29:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68977;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9425:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333435";
                    readonly id: 68978;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9483:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_345_by_1";
                        readonly typeString: "int_const 345";
                    };
                    readonly value: "345";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68982;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9492:62:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SET_SWAP_FEE_DURING_FEE_CHANGE";
                readonly nameLocation: "9518:30:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68980;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9492:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333436";
                    readonly id: 68981;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9551:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_346_by_1";
                        readonly typeString: "int_const 346";
                    };
                    readonly value: "346";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68985;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9560:63:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SET_SWAP_FEE_PENDING_FEE_CHANGE";
                readonly nameLocation: "9586:31:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68983;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9560:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333437";
                    readonly id: 68984;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9620:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_347_by_1";
                        readonly typeString: "int_const 347";
                    };
                    readonly value: "347";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68988;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9629:66:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CHANGE_TOKENS_DURING_WEIGHT_CHANGE";
                readonly nameLocation: "9655:34:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68986;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9629:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333438";
                    readonly id: 68987;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9692:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_348_by_1";
                        readonly typeString: "int_const 348";
                    };
                    readonly value: "348";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68991;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9701:67:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CHANGE_TOKENS_PENDING_WEIGHT_CHANGE";
                readonly nameLocation: "9727:35:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68989;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9701:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333439";
                    readonly id: 68990;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9765:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_349_by_1";
                        readonly typeString: "int_const 349";
                    };
                    readonly value: "349";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68994;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9774:42:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_WEIGHT";
                readonly nameLocation: "9800:10:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68992;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9774:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333530";
                    readonly id: 68993;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9813:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_350_by_1";
                        readonly typeString: "int_const 350";
                    };
                    readonly value: "350";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 68997;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9822:49:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNAUTHORIZED_JOIN";
                readonly nameLocation: "9848:17:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68995;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9822:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333531";
                    readonly id: 68996;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9868:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_351_by_1";
                        readonly typeString: "int_const 351";
                    };
                    readonly value: "351";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69000;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9877:65:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_MANAGEMENT_AUM_FEE_PERCENTAGE";
                readonly nameLocation: "9903:33:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 68998;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9877:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333532";
                    readonly id: 68999;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9939:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_352_by_1";
                        readonly typeString: "int_const 352";
                    };
                    readonly value: "352";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69003;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9948:49:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "FRACTIONAL_TARGET";
                readonly nameLocation: "9974:17:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69001;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9948:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333533";
                    readonly id: 69002;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9994:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_353_by_1";
                        readonly typeString: "int_const 353";
                    };
                    readonly value: "353";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69006;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10003:49:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ADD_OR_REMOVE_BPT";
                readonly nameLocation: "10029:17:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69004;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10003:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333534";
                    readonly id: 69005;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10049:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_354_by_1";
                        readonly typeString: "int_const 354";
                    };
                    readonly value: "354";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69009;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10058:62:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_CIRCUIT_BREAKER_BOUNDS";
                readonly nameLocation: "10084:30:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69007;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10058:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333535";
                    readonly id: 69008;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10117:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_355_by_1";
                        readonly typeString: "int_const 355";
                    };
                    readonly value: "355";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69012;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10126:55:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CIRCUIT_BREAKER_TRIPPED";
                readonly nameLocation: "10152:23:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69010;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10126:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333536";
                    readonly id: 69011;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10178:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_356_by_1";
                        readonly typeString: "int_const 356";
                    };
                    readonly value: "356";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69015;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10187:54:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MALICIOUS_QUERY_REVERT";
                readonly nameLocation: "10213:22:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69013;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10187:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333537";
                    readonly id: 69014;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10238:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_357_by_1";
                        readonly typeString: "int_const 357";
                    };
                    readonly value: "357";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69018;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10247:52:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "JOINS_EXITS_DISABLED";
                readonly nameLocation: "10273:20:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69016;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10247:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333538";
                    readonly id: 69017;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10296:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_358_by_1";
                        readonly typeString: "int_const 358";
                    };
                    readonly value: "358";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69021;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10317:42:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "REENTRANCY";
                readonly nameLocation: "10343:10:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69019;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10317:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343030";
                    readonly id: 69020;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10356:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_400_by_1";
                        readonly typeString: "int_const 400";
                    };
                    readonly value: "400";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69024;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10365:50:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SENDER_NOT_ALLOWED";
                readonly nameLocation: "10391:18:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69022;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10365:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343031";
                    readonly id: 69023;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10412:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_401_by_1";
                        readonly typeString: "int_const 401";
                    };
                    readonly value: "401";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69027;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10421:38:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "PAUSED";
                readonly nameLocation: "10447:6:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69025;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10421:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343032";
                    readonly id: 69026;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10456:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_402_by_1";
                        readonly typeString: "int_const 402";
                    };
                    readonly value: "402";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69030;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10465:52:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "PAUSE_WINDOW_EXPIRED";
                readonly nameLocation: "10491:20:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69028;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10465:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343033";
                    readonly id: 69029;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10514:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_403_by_1";
                        readonly typeString: "int_const 403";
                    };
                    readonly value: "403";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69033;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10523:57:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_PAUSE_WINDOW_DURATION";
                readonly nameLocation: "10549:25:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69031;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10523:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343034";
                    readonly id: 69032;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10577:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_404_by_1";
                        readonly typeString: "int_const 404";
                    };
                    readonly value: "404";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69036;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10586:58:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_BUFFER_PERIOD_DURATION";
                readonly nameLocation: "10612:26:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69034;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10586:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343035";
                    readonly id: 69035;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10641:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_405_by_1";
                        readonly typeString: "int_const 405";
                    };
                    readonly value: "405";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69039;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10650:52:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_BALANCE";
                readonly nameLocation: "10676:20:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69037;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10650:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343036";
                    readonly id: 69038;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10699:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_406_by_1";
                        readonly typeString: "int_const 406";
                    };
                    readonly value: "406";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69042;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10708:54:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_ALLOWANCE";
                readonly nameLocation: "10734:22:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69040;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10708:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343037";
                    readonly id: 69041;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10759:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_407_by_1";
                        readonly typeString: "int_const 407";
                    };
                    readonly value: "407";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69045;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10768:64:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_TRANSFER_FROM_ZERO_ADDRESS";
                readonly nameLocation: "10794:32:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69043;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10768:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343038";
                    readonly id: 69044;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10829:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_408_by_1";
                        readonly typeString: "int_const 408";
                    };
                    readonly value: "408";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69048;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10838:62:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_TRANSFER_TO_ZERO_ADDRESS";
                readonly nameLocation: "10864:30:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69046;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10838:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343039";
                    readonly id: 69047;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10897:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_409_by_1";
                        readonly typeString: "int_const 409";
                    };
                    readonly value: "409";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69051;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10906:58:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_MINT_TO_ZERO_ADDRESS";
                readonly nameLocation: "10932:26:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69049;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10906:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343130";
                    readonly id: 69050;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10961:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_410_by_1";
                        readonly typeString: "int_const 410";
                    };
                    readonly value: "410";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69054;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10970:60:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_BURN_FROM_ZERO_ADDRESS";
                readonly nameLocation: "10996:28:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69052;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10970:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343131";
                    readonly id: 69053;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11027:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_411_by_1";
                        readonly typeString: "int_const 411";
                    };
                    readonly value: "411";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69057;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11036:63:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_APPROVE_FROM_ZERO_ADDRESS";
                readonly nameLocation: "11062:31:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69055;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11036:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343132";
                    readonly id: 69056;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11096:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_412_by_1";
                        readonly typeString: "int_const 412";
                    };
                    readonly value: "412";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69060;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11105:61:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_APPROVE_TO_ZERO_ADDRESS";
                readonly nameLocation: "11131:29:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69058;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11105:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343133";
                    readonly id: 69059;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11163:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_413_by_1";
                        readonly typeString: "int_const 413";
                    };
                    readonly value: "413";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69063;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11172:64:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_TRANSFER_EXCEEDS_ALLOWANCE";
                readonly nameLocation: "11198:32:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69061;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11172:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343134";
                    readonly id: 69062;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11233:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_414_by_1";
                        readonly typeString: "int_const 414";
                    };
                    readonly value: "414";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69066;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11242:68:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_DECREASED_ALLOWANCE_BELOW_ZERO";
                readonly nameLocation: "11268:36:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69064;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11242:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343135";
                    readonly id: 69065;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11307:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_415_by_1";
                        readonly typeString: "int_const 415";
                    };
                    readonly value: "415";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69069;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11316:62:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_TRANSFER_EXCEEDS_BALANCE";
                readonly nameLocation: "11342:30:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69067;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11316:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343136";
                    readonly id: 69068;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11375:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_416_by_1";
                        readonly typeString: "int_const 416";
                    };
                    readonly value: "416";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69072;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11384:60:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_BURN_EXCEEDS_ALLOWANCE";
                readonly nameLocation: "11410:28:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69070;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11384:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343137";
                    readonly id: 69071;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11441:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_417_by_1";
                        readonly typeString: "int_const 417";
                    };
                    readonly value: "417";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69075;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11450:54:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SAFE_ERC20_CALL_FAILED";
                readonly nameLocation: "11476:22:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69073;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11450:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343138";
                    readonly id: 69074;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11501:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_418_by_1";
                        readonly typeString: "int_const 418";
                    };
                    readonly value: "418";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69078;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11510:60:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ADDRESS_INSUFFICIENT_BALANCE";
                readonly nameLocation: "11536:28:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69076;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11510:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343139";
                    readonly id: 69077;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11567:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_419_by_1";
                        readonly typeString: "int_const 419";
                    };
                    readonly value: "419";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69081;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11576:57:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ADDRESS_CANNOT_SEND_VALUE";
                readonly nameLocation: "11602:25:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69079;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11576:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343230";
                    readonly id: 69080;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11630:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_420_by_1";
                        readonly typeString: "int_const 420";
                    };
                    readonly value: "420";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69084;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11639:63:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SAFE_CAST_VALUE_CANT_FIT_INT256";
                readonly nameLocation: "11665:31:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69082;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11639:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343231";
                    readonly id: 69083;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11699:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_421_by_1";
                        readonly typeString: "int_const 421";
                    };
                    readonly value: "421";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69087;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11708:54:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "GRANT_SENDER_NOT_ADMIN";
                readonly nameLocation: "11734:22:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69085;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11708:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343232";
                    readonly id: 69086;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11759:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_422_by_1";
                        readonly typeString: "int_const 422";
                    };
                    readonly value: "422";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69090;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11768:55:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "REVOKE_SENDER_NOT_ADMIN";
                readonly nameLocation: "11794:23:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69088;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11768:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343233";
                    readonly id: 69089;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11820:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_423_by_1";
                        readonly typeString: "int_const 423";
                    };
                    readonly value: "423";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69093;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11829:59:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "RENOUNCE_SENDER_NOT_ALLOWED";
                readonly nameLocation: "11855:27:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69091;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11829:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343234";
                    readonly id: 69092;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11885:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_424_by_1";
                        readonly typeString: "int_const 424";
                    };
                    readonly value: "424";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69096;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11894:53:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "BUFFER_PERIOD_EXPIRED";
                readonly nameLocation: "11920:21:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69094;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11894:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343235";
                    readonly id: 69095;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11944:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_425_by_1";
                        readonly typeString: "int_const 425";
                    };
                    readonly value: "425";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69099;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11953:51:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CALLER_IS_NOT_OWNER";
                readonly nameLocation: "11979:19:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69097;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11953:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343236";
                    readonly id: 69098;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12001:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_426_by_1";
                        readonly typeString: "int_const 426";
                    };
                    readonly value: "426";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69102;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12010:49:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "NEW_OWNER_IS_ZERO";
                readonly nameLocation: "12036:17:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69100;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12010:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343237";
                    readonly id: 69101;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12056:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_427_by_1";
                        readonly typeString: "int_const 427";
                    };
                    readonly value: "427";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69105;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12065:54:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CODE_DEPLOYMENT_FAILED";
                readonly nameLocation: "12091:22:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69103;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12065:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343238";
                    readonly id: 69104;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12116:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_428_by_1";
                        readonly typeString: "int_const 428";
                    };
                    readonly value: "428";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69108;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12125:52:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CALL_TO_NON_CONTRACT";
                readonly nameLocation: "12151:20:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69106;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12125:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343239";
                    readonly id: 69107;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12174:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_429_by_1";
                        readonly typeString: "int_const 429";
                    };
                    readonly value: "429";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69111;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12183:53:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "LOW_LEVEL_CALL_FAILED";
                readonly nameLocation: "12209:21:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69109;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12183:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343330";
                    readonly id: 69110;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12233:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_430_by_1";
                        readonly typeString: "int_const 430";
                    };
                    readonly value: "430";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69114;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12242:42:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "NOT_PAUSED";
                readonly nameLocation: "12268:10:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69112;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12242:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343331";
                    readonly id: 69113;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12281:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_431_by_1";
                        readonly typeString: "int_const 431";
                    };
                    readonly value: "431";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69117;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12290:59:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ADDRESS_ALREADY_ALLOWLISTED";
                readonly nameLocation: "12316:27:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69115;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12290:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343332";
                    readonly id: 69116;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12346:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_432_by_1";
                        readonly typeString: "int_const 432";
                    };
                    readonly value: "432";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69120;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12355:55:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ADDRESS_NOT_ALLOWLISTED";
                readonly nameLocation: "12381:23:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69118;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12355:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343333";
                    readonly id: 69119;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12407:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_433_by_1";
                        readonly typeString: "int_const 433";
                    };
                    readonly value: "433";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69123;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12416:58:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_BURN_EXCEEDS_BALANCE";
                readonly nameLocation: "12442:26:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69121;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12416:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343334";
                    readonly id: 69122;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12471:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_434_by_1";
                        readonly typeString: "int_const 434";
                    };
                    readonly value: "434";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69126;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12480:49:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_OPERATION";
                readonly nameLocation: "12506:17:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69124;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12480:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343335";
                    readonly id: 69125;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12526:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_435_by_1";
                        readonly typeString: "int_const 435";
                    };
                    readonly value: "435";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69129;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12535:46:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CODEC_OVERFLOW";
                readonly nameLocation: "12561:14:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69127;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12535:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343336";
                    readonly id: 69128;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12578:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_436_by_1";
                        readonly typeString: "int_const 436";
                    };
                    readonly value: "436";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69132;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12587:48:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "IN_RECOVERY_MODE";
                readonly nameLocation: "12613:16:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69130;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12587:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343337";
                    readonly id: 69131;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12632:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_437_by_1";
                        readonly typeString: "int_const 437";
                    };
                    readonly value: "437";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69135;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12641:52:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "NOT_IN_RECOVERY_MODE";
                readonly nameLocation: "12667:20:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69133;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12641:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343338";
                    readonly id: 69134;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12690:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_438_by_1";
                        readonly typeString: "int_const 438";
                    };
                    readonly value: "438";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69138;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12699:47:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INDUCED_FAILURE";
                readonly nameLocation: "12725:15:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69136;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12699:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343339";
                    readonly id: 69137;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12743:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_439_by_1";
                        readonly typeString: "int_const 439";
                    };
                    readonly value: "439";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69141;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12752:49:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "EXPIRED_SIGNATURE";
                readonly nameLocation: "12778:17:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69139;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12752:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343430";
                    readonly id: 69140;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12798:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_440_by_1";
                        readonly typeString: "int_const 440";
                    };
                    readonly value: "440";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69144;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12807:51:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MALFORMED_SIGNATURE";
                readonly nameLocation: "12833:19:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69142;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12807:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343431";
                    readonly id: 69143;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12855:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_441_by_1";
                        readonly typeString: "int_const 441";
                    };
                    readonly value: "441";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69147;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12864:63:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SAFE_CAST_VALUE_CANT_FIT_UINT64";
                readonly nameLocation: "12890:31:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69145;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12864:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343432";
                    readonly id: 69146;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12924:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_442_by_1";
                        readonly typeString: "int_const 442";
                    };
                    readonly value: "442";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69150;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12933:50:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNHANDLED_FEE_TYPE";
                readonly nameLocation: "12959:18:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69148;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12933:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343433";
                    readonly id: 69149;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12980:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_443_by_1";
                        readonly typeString: "int_const 443";
                    };
                    readonly value: "443";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69153;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12989:46:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "BURN_FROM_ZERO";
                readonly nameLocation: "13015:14:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69151;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12989:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343434";
                    readonly id: 69152;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13032:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_444_by_1";
                        readonly typeString: "int_const 444";
                    };
                    readonly value: "444";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69156;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13055:47:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_POOL_ID";
                readonly nameLocation: "13081:15:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69154;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13055:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353030";
                    readonly id: 69155;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13099:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_500_by_1";
                        readonly typeString: "int_const 500";
                    };
                    readonly value: "500";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69159;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13108:47:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CALLER_NOT_POOL";
                readonly nameLocation: "13134:15:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69157;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13108:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353031";
                    readonly id: 69158;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13152:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_501_by_1";
                        readonly typeString: "int_const 501";
                    };
                    readonly value: "501";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69162;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13161:56:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SENDER_NOT_ASSET_MANAGER";
                readonly nameLocation: "13187:24:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69160;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13161:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353032";
                    readonly id: 69161;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13214:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_502_by_1";
                        readonly typeString: "int_const 502";
                    };
                    readonly value: "502";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69165;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13223:57:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "USER_DOESNT_ALLOW_RELAYER";
                readonly nameLocation: "13249:25:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69163;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13223:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353033";
                    readonly id: 69164;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13277:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_503_by_1";
                        readonly typeString: "int_const 503";
                    };
                    readonly value: "503";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69168;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13286:49:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_SIGNATURE";
                readonly nameLocation: "13312:17:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69166;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13286:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353034";
                    readonly id: 69167;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13332:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_504_by_1";
                        readonly typeString: "int_const 504";
                    };
                    readonly value: "504";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69171;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13341:46:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "EXIT_BELOW_MIN";
                readonly nameLocation: "13367:14:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69169;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13341:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353035";
                    readonly id: 69170;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13384:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_505_by_1";
                        readonly typeString: "int_const 505";
                    };
                    readonly value: "505";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69174;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13393:46:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "JOIN_ABOVE_MAX";
                readonly nameLocation: "13419:14:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69172;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13393:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353036";
                    readonly id: 69173;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13436:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_506_by_1";
                        readonly typeString: "int_const 506";
                    };
                    readonly value: "506";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69177;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13445:42:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SWAP_LIMIT";
                readonly nameLocation: "13471:10:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69175;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13445:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353037";
                    readonly id: 69176;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13484:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_507_by_1";
                        readonly typeString: "int_const 507";
                    };
                    readonly value: "507";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69180;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13493:45:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SWAP_DEADLINE";
                readonly nameLocation: "13519:13:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69178;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13493:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353038";
                    readonly id: 69179;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13535:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_508_by_1";
                        readonly typeString: "int_const 508";
                    };
                    readonly value: "508";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69183;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13544:54:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CANNOT_SWAP_SAME_TOKEN";
                readonly nameLocation: "13570:22:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69181;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13544:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353039";
                    readonly id: 69182;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13595:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_509_by_1";
                        readonly typeString: "int_const 509";
                    };
                    readonly value: "509";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69186;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13604:60:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNKNOWN_AMOUNT_IN_FIRST_SWAP";
                readonly nameLocation: "13630:28:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69184;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13604:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353130";
                    readonly id: 69185;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13661:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_510_by_1";
                        readonly typeString: "int_const 510";
                    };
                    readonly value: "510";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69189;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13670:60:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MALCONSTRUCTED_MULTIHOP_SWAP";
                readonly nameLocation: "13696:28:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69187;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13670:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353131";
                    readonly id: 69188;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13727:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_511_by_1";
                        readonly typeString: "int_const 511";
                    };
                    readonly value: "511";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69192;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13736:57:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INTERNAL_BALANCE_OVERFLOW";
                readonly nameLocation: "13762:25:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69190;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13736:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353132";
                    readonly id: 69191;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13790:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_512_by_1";
                        readonly typeString: "int_const 512";
                    };
                    readonly value: "512";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69195;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13799:61:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_INTERNAL_BALANCE";
                readonly nameLocation: "13825:29:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69193;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13799:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353133";
                    readonly id: 69194;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13857:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_513_by_1";
                        readonly typeString: "int_const 513";
                    };
                    readonly value: "513";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69198;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13866:60:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_ETH_INTERNAL_BALANCE";
                readonly nameLocation: "13892:28:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69196;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13866:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353134";
                    readonly id: 69197;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13923:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_514_by_1";
                        readonly typeString: "int_const 514";
                    };
                    readonly value: "514";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69201;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13932:57:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_POST_LOAN_BALANCE";
                readonly nameLocation: "13958:25:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69199;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13932:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353135";
                    readonly id: 69200;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13986:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_515_by_1";
                        readonly typeString: "int_const 515";
                    };
                    readonly value: "515";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69204;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13995:48:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_ETH";
                readonly nameLocation: "14021:16:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69202;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13995:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353136";
                    readonly id: 69203;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14040:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_516_by_1";
                        readonly typeString: "int_const 516";
                    };
                    readonly value: "516";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69207;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14049:47:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNALLOCATED_ETH";
                readonly nameLocation: "14075:15:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69205;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14049:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353137";
                    readonly id: 69206;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14093:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_517_by_1";
                        readonly typeString: "int_const 517";
                    };
                    readonly value: "517";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69210;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14102:44:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ETH_TRANSFER";
                readonly nameLocation: "14128:12:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69208;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14102:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353138";
                    readonly id: 69209;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14143:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_518_by_1";
                        readonly typeString: "int_const 518";
                    };
                    readonly value: "518";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69213;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14152:55:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CANNOT_USE_ETH_SENTINEL";
                readonly nameLocation: "14178:23:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69211;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14152:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353139";
                    readonly id: 69212;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14204:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_519_by_1";
                        readonly typeString: "int_const 519";
                    };
                    readonly value: "519";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69216;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14213:47:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "TOKENS_MISMATCH";
                readonly nameLocation: "14239:15:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69214;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14213:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353230";
                    readonly id: 69215;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14257:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_520_by_1";
                        readonly typeString: "int_const 520";
                    };
                    readonly value: "520";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69219;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14266:52:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "TOKEN_NOT_REGISTERED";
                readonly nameLocation: "14292:20:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69217;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14266:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353231";
                    readonly id: 69218;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14315:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_521_by_1";
                        readonly typeString: "int_const 521";
                    };
                    readonly value: "521";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69222;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14324:56:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "TOKEN_ALREADY_REGISTERED";
                readonly nameLocation: "14350:24:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69220;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14324:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353232";
                    readonly id: 69221;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14377:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_522_by_1";
                        readonly typeString: "int_const 522";
                    };
                    readonly value: "522";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69225;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14386:50:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "TOKENS_ALREADY_SET";
                readonly nameLocation: "14412:18:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69223;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14386:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353233";
                    readonly id: 69224;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14433:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_523_by_1";
                        readonly typeString: "int_const 523";
                    };
                    readonly value: "523";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69228;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14442:55:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "TOKENS_LENGTH_MUST_BE_2";
                readonly nameLocation: "14468:23:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69226;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14442:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353234";
                    readonly id: 69227;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14494:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_524_by_1";
                        readonly typeString: "int_const 524";
                    };
                    readonly value: "524";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69231;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14503:53:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "NONZERO_TOKEN_BALANCE";
                readonly nameLocation: "14529:21:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69229;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14503:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353235";
                    readonly id: 69230;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14553:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_525_by_1";
                        readonly typeString: "int_const 525";
                    };
                    readonly value: "525";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69234;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14562:54:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "BALANCE_TOTAL_OVERFLOW";
                readonly nameLocation: "14588:22:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69232;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14562:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353236";
                    readonly id: 69233;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14613:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_526_by_1";
                        readonly typeString: "int_const 526";
                    };
                    readonly value: "526";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69237;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14622:46:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "POOL_NO_TOKENS";
                readonly nameLocation: "14648:14:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69235;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14622:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353237";
                    readonly id: 69236;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14665:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_527_by_1";
                        readonly typeString: "int_const 527";
                    };
                    readonly value: "527";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69240;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14674:63:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_FLASH_LOAN_BALANCE";
                readonly nameLocation: "14700:31:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69238;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14674:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353238";
                    readonly id: 69239;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14734:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_528_by_1";
                        readonly typeString: "int_const 528";
                    };
                    readonly value: "528";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69243;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14756:60:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SWAP_FEE_PERCENTAGE_TOO_HIGH";
                readonly nameLocation: "14782:28:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69241;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14756:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "363030";
                    readonly id: 69242;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14813:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_600_by_1";
                        readonly typeString: "int_const 600";
                    };
                    readonly value: "600";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69246;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14822:66:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "FLASH_LOAN_FEE_PERCENTAGE_TOO_HIGH";
                readonly nameLocation: "14848:34:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69244;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14822:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "363031";
                    readonly id: 69245;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14885:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_601_by_1";
                        readonly typeString: "int_const 601";
                    };
                    readonly value: "601";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69249;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14894:66:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_FLASH_LOAN_FEE_AMOUNT";
                readonly nameLocation: "14920:34:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69247;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14894:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "363032";
                    readonly id: 69248;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14957:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_602_by_1";
                        readonly typeString: "int_const 602";
                    };
                    readonly value: "602";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69252;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14966:59:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "AUM_FEE_PERCENTAGE_TOO_HIGH";
                readonly nameLocation: "14992:27:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69250;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14966:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "363033";
                    readonly id: 69251;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "15022:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_603_by_1";
                        readonly typeString: "int_const 603";
                    };
                    readonly value: "603";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69255;
                readonly nodeType: "VariableDeclaration";
                readonly src: "15051:64:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SPLITTER_FEE_PERCENTAGE_TOO_HIGH";
                readonly nameLocation: "15077:32:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69253;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "15051:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "373030";
                    readonly id: 69254;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "15112:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_700_by_1";
                        readonly typeString: "int_const 700";
                    };
                    readonly value: "700";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69258;
                readonly nodeType: "VariableDeclaration";
                readonly src: "15134:45:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNIMPLEMENTED";
                readonly nameLocation: "15160:13:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69256;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "15134:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "393938";
                    readonly id: 69257;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "15176:3:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_998_by_1";
                        readonly typeString: "int_const 998";
                    };
                    readonly value: "998";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 69261;
                readonly nodeType: "VariableDeclaration";
                readonly src: "15185:49:128";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SHOULD_NOT_HAPPEN";
                readonly nameLocation: "15211:17:128";
                readonly scope: 69262;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 69259;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "15185:7:128";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "393939";
                    readonly id: 69260;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "15231:3:128";
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
            readonly linearizedBaseContracts: readonly [69262];
            readonly name: "BalancerErrors";
            readonly nameLocation: "5214:14:128";
            readonly scope: 69263;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "GPL-3.0-or-later";
    };
    readonly id: 128;
};
//# sourceMappingURL=BalancerErrors.d.ts.map