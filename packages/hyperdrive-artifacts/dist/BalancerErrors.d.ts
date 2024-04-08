export declare const BalancerErrors: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212208161fa77f4649efc35ad41fe80d36387f51a427ad52b424b06dc6466f69a61c164736f6c63430008140033";
        readonly sourceMap: "5206:10031:176:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;5206:10031:176;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212208161fa77f4649efc35ad41fe80d36387f51a427ad52b424b06dc6466f69a61c164736f6c63430008140033";
        readonly sourceMap: "5206:10031:176:-:0;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"test/3rdPartyLibs/BalancerErrors.sol\":\"BalancerErrors\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"test/3rdPartyLibs/BalancerErrors.sol\":{\"keccak256\":\"0xd4bc389c3bb940fe0ebd712a06c219dd8ebcaa8749fa5e166c8a373ca7eaa4ca\",\"license\":\"GPL-3.0-or-later\",\"urls\":[\"bzz-raw://9d0847b6535322c1ffa9d2783b32557f80aed5e8de430c824a496ea3b6f58611\",\"dweb:/ipfs/QmRDqDSkP3FDvFYbPQNXwYq25FbYsx1UEYSg11caiw2xtU\"]}},\"version\":1}";
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
        readonly id: 73844;
        readonly exportedSymbols: {
            readonly BalancerErrors: readonly [73843];
            readonly _require: readonly [73287, 73306];
            readonly _revert: readonly [73318, 73338];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "688:14550:176";
        readonly nodes: readonly [{
            readonly id: 73271;
            readonly nodeType: "PragmaDirective";
            readonly src: "688:31:176";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.7", ".0", "<", "0.9", ".0"];
        }, {
            readonly id: 73287;
            readonly nodeType: "FunctionDefinition";
            readonly src: "926:101:176";
            readonly nodes: readonly [];
            readonly body: {
                readonly id: 73286;
                readonly nodeType: "Block";
                readonly src: "984:43:176";
                readonly nodes: readonly [];
                readonly statements: readonly [{
                    readonly condition: {
                        readonly id: 73280;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly lValueRequested: false;
                        readonly nodeType: "UnaryOperation";
                        readonly operator: "!";
                        readonly prefix: true;
                        readonly src: "994:10:176";
                        readonly subExpression: {
                            readonly id: 73279;
                            readonly name: "condition";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 73274;
                            readonly src: "995:9:176";
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
                    readonly id: 73285;
                    readonly nodeType: "IfStatement";
                    readonly src: "990:34:176";
                    readonly trueBody: {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 73282;
                                readonly name: "errorCode";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73276;
                                readonly src: "1014:9:176";
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
                                readonly id: 73281;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [73318, 73338];
                                readonly referencedDeclaration: 73318;
                                readonly src: "1006:7:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$returns$__$";
                                    readonly typeString: "function (uint256) pure";
                                };
                            };
                            readonly id: 73283;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1006:18:176";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 73284;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1006:18:176";
                    };
                }];
            };
            readonly documentation: {
                readonly id: 73272;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "741:184:176";
                readonly text: " @dev Reverts if `condition` is false, with a revert reason containing `errorCode`. Only codes up to 999 are\n supported.\n Uses the default 'BAL' prefix for the error code";
            };
            readonly implemented: true;
            readonly kind: "freeFunction";
            readonly modifiers: readonly [];
            readonly name: "_require";
            readonly nameLocation: "935:8:176";
            readonly parameters: {
                readonly id: 73277;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [{
                    readonly constant: false;
                    readonly id: 73274;
                    readonly mutability: "mutable";
                    readonly name: "condition";
                    readonly nameLocation: "949:9:176";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 73287;
                    readonly src: "944:14:176";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 73273;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "944:4:176";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 73276;
                    readonly mutability: "mutable";
                    readonly name: "errorCode";
                    readonly nameLocation: "968:9:176";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 73287;
                    readonly src: "960:17:176";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 73275;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "960:7:176";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly src: "943:35:176";
            };
            readonly returnParameters: {
                readonly id: 73278;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [];
                readonly src: "984:0:176";
            };
            readonly scope: 73844;
            readonly stateMutability: "pure";
            readonly virtual: false;
            readonly visibility: "internal";
        }, {
            readonly id: 73306;
            readonly nodeType: "FunctionDefinition";
            readonly src: "1162:124:176";
            readonly nodes: readonly [];
            readonly body: {
                readonly id: 73305;
                readonly nodeType: "Block";
                readonly src: "1235:51:176";
                readonly nodes: readonly [];
                readonly statements: readonly [{
                    readonly condition: {
                        readonly id: 73298;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly lValueRequested: false;
                        readonly nodeType: "UnaryOperation";
                        readonly operator: "!";
                        readonly prefix: true;
                        readonly src: "1245:10:176";
                        readonly subExpression: {
                            readonly id: 73297;
                            readonly name: "condition";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 73290;
                            readonly src: "1246:9:176";
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
                    readonly id: 73304;
                    readonly nodeType: "IfStatement";
                    readonly src: "1241:42:176";
                    readonly trueBody: {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 73300;
                                readonly name: "errorCode";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73292;
                                readonly src: "1265:9:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 73301;
                                readonly name: "prefix";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73294;
                                readonly src: "1276:6:176";
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
                                readonly id: 73299;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [73318, 73338];
                                readonly referencedDeclaration: 73338;
                                readonly src: "1257:7:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_bytes3_$returns$__$";
                                    readonly typeString: "function (uint256,bytes3) pure";
                                };
                            };
                            readonly id: 73302;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1257:26:176";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 73303;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1257:26:176";
                    };
                }];
            };
            readonly documentation: {
                readonly id: 73288;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "1029:132:176";
                readonly text: " @dev Reverts if `condition` is false, with a revert reason containing `errorCode`. Only codes up to 999 are\n supported.";
            };
            readonly implemented: true;
            readonly kind: "freeFunction";
            readonly modifiers: readonly [];
            readonly name: "_require";
            readonly nameLocation: "1171:8:176";
            readonly parameters: {
                readonly id: 73295;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [{
                    readonly constant: false;
                    readonly id: 73290;
                    readonly mutability: "mutable";
                    readonly name: "condition";
                    readonly nameLocation: "1185:9:176";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 73306;
                    readonly src: "1180:14:176";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bool";
                        readonly typeString: "bool";
                    };
                    readonly typeName: {
                        readonly id: 73289;
                        readonly name: "bool";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1180:4:176";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 73292;
                    readonly mutability: "mutable";
                    readonly name: "errorCode";
                    readonly nameLocation: "1204:9:176";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 73306;
                    readonly src: "1196:17:176";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 73291;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1196:7:176";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 73294;
                    readonly mutability: "mutable";
                    readonly name: "prefix";
                    readonly nameLocation: "1222:6:176";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 73306;
                    readonly src: "1215:13:176";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes3";
                        readonly typeString: "bytes3";
                    };
                    readonly typeName: {
                        readonly id: 73293;
                        readonly name: "bytes3";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1215:6:176";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes3";
                            readonly typeString: "bytes3";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly src: "1179:50:176";
            };
            readonly returnParameters: {
                readonly id: 73296;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [];
                readonly src: "1235:0:176";
            };
            readonly scope: 73844;
            readonly stateMutability: "pure";
            readonly virtual: false;
            readonly visibility: "internal";
        }, {
            readonly id: 73318;
            readonly nodeType: "FunctionDefinition";
            readonly src: "1445:126:176";
            readonly nodes: readonly [];
            readonly body: {
                readonly id: 73317;
                readonly nodeType: "Block";
                readonly src: "1486:85:176";
                readonly nodes: readonly [];
                readonly statements: readonly [{
                    readonly expression: {
                        readonly arguments: readonly [{
                            readonly id: 73313;
                            readonly name: "errorCode";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 73309;
                            readonly src: "1500:9:176";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        }, {
                            readonly hexValue: "3078343234313463";
                            readonly id: 73314;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "1511:8:176";
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
                            readonly id: 73312;
                            readonly name: "_revert";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [73318, 73338];
                            readonly referencedDeclaration: 73338;
                            readonly src: "1492:7:176";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_bytes3_$returns$__$";
                                readonly typeString: "function (uint256,bytes3) pure";
                            };
                        };
                        readonly id: 73315;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "functionCall";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "1492:28:176";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_tuple$__$";
                            readonly typeString: "tuple()";
                        };
                    };
                    readonly id: 73316;
                    readonly nodeType: "ExpressionStatement";
                    readonly src: "1492:28:176";
                }];
            };
            readonly documentation: {
                readonly id: 73307;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "1288:156:176";
                readonly text: " @dev Reverts with a revert reason containing `errorCode`. Only codes up to 999 are supported.\n Uses the default 'BAL' prefix for the error code";
            };
            readonly implemented: true;
            readonly kind: "freeFunction";
            readonly modifiers: readonly [];
            readonly name: "_revert";
            readonly nameLocation: "1454:7:176";
            readonly parameters: {
                readonly id: 73310;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [{
                    readonly constant: false;
                    readonly id: 73309;
                    readonly mutability: "mutable";
                    readonly name: "errorCode";
                    readonly nameLocation: "1470:9:176";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 73318;
                    readonly src: "1462:17:176";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 73308;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1462:7:176";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly src: "1461:19:176";
            };
            readonly returnParameters: {
                readonly id: 73311;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [];
                readonly src: "1486:0:176";
            };
            readonly scope: 73844;
            readonly stateMutability: "pure";
            readonly virtual: false;
            readonly visibility: "internal";
        }, {
            readonly id: 73338;
            readonly nodeType: "FunctionDefinition";
            readonly src: "1678:3526:176";
            readonly nodes: readonly [];
            readonly body: {
                readonly id: 73337;
                readonly nodeType: "Block";
                readonly src: "1734:3470:176";
                readonly nodes: readonly [];
                readonly statements: readonly [{
                    readonly assignments: readonly [73327];
                    readonly declarations: readonly [{
                        readonly constant: false;
                        readonly id: 73327;
                        readonly mutability: "mutable";
                        readonly name: "prefixUint";
                        readonly nameLocation: "1748:10:176";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 73337;
                        readonly src: "1740:18:176";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 73326;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1740:7:176";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly id: 73335;
                    readonly initialValue: {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 73332;
                                readonly name: "prefix";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 73323;
                                readonly src: "1776:6:176";
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
                                readonly id: 73331;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "1769:6:176";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_uint24_$";
                                    readonly typeString: "type(uint24)";
                                };
                                readonly typeName: {
                                    readonly id: 73330;
                                    readonly name: "uint24";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "1769:6:176";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 73333;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1769:14:176";
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
                            readonly id: 73329;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "1761:7:176";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                readonly typeString: "type(uint256)";
                            };
                            readonly typeName: {
                                readonly id: 73328;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1761:7:176";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 73334;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "1761:23:176";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly nodeType: "VariableDeclarationStatement";
                    readonly src: "1740:44:176";
                }, {
                    readonly AST: {
                        readonly nodeType: "YulBlock";
                        readonly src: "2573:2629:176";
                        readonly statements: readonly [{
                            readonly nodeType: "YulVariableDeclaration";
                            readonly src: "2847:42:176";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly name: "errorCode";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2868:9:176";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "2879:2:176";
                                        readonly type: "";
                                        readonly value: "10";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mod";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2864:3:176";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2864:18:176";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "2884:4:176";
                                    readonly type: "";
                                    readonly value: "0x30";
                                }];
                                readonly functionName: {
                                    readonly name: "add";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2860:3:176";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "2860:29:176";
                            };
                            readonly variables: readonly [{
                                readonly name: "units";
                                readonly nodeType: "YulTypedName";
                                readonly src: "2851:5:176";
                                readonly type: "";
                            }];
                        }, {
                            readonly nodeType: "YulAssignment";
                            readonly src: "2899:31:176";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly name: "errorCode";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2916:9:176";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "2927:2:176";
                                    readonly type: "";
                                    readonly value: "10";
                                }];
                                readonly functionName: {
                                    readonly name: "div";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2912:3:176";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "2912:18:176";
                            };
                            readonly variableNames: readonly [{
                                readonly name: "errorCode";
                                readonly nodeType: "YulIdentifier";
                                readonly src: "2899:9:176";
                            }];
                        }, {
                            readonly nodeType: "YulVariableDeclaration";
                            readonly src: "2939:43:176";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly name: "errorCode";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2961:9:176";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "2972:2:176";
                                        readonly type: "";
                                        readonly value: "10";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mod";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "2957:3:176";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "2957:18:176";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "2977:4:176";
                                    readonly type: "";
                                    readonly value: "0x30";
                                }];
                                readonly functionName: {
                                    readonly name: "add";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "2953:3:176";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "2953:29:176";
                            };
                            readonly variables: readonly [{
                                readonly name: "tenths";
                                readonly nodeType: "YulTypedName";
                                readonly src: "2943:6:176";
                                readonly type: "";
                            }];
                        }, {
                            readonly nodeType: "YulAssignment";
                            readonly src: "2992:31:176";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly name: "errorCode";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "3009:9:176";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "3020:2:176";
                                    readonly type: "";
                                    readonly value: "10";
                                }];
                                readonly functionName: {
                                    readonly name: "div";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "3005:3:176";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "3005:18:176";
                            };
                            readonly variableNames: readonly [{
                                readonly name: "errorCode";
                                readonly nodeType: "YulIdentifier";
                                readonly src: "2992:9:176";
                            }];
                        }, {
                            readonly nodeType: "YulVariableDeclaration";
                            readonly src: "3032:45:176";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly name: "errorCode";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3056:9:176";
                                    }, {
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "3067:2:176";
                                        readonly type: "";
                                        readonly value: "10";
                                    }];
                                    readonly functionName: {
                                        readonly name: "mod";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3052:3:176";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3052:18:176";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "3072:4:176";
                                    readonly type: "";
                                    readonly value: "0x30";
                                }];
                                readonly functionName: {
                                    readonly name: "add";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "3048:3:176";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "3048:29:176";
                            };
                            readonly variables: readonly [{
                                readonly name: "hundreds";
                                readonly nodeType: "YulTypedName";
                                readonly src: "3036:8:176";
                                readonly type: "";
                            }];
                        }, {
                            readonly nodeType: "YulVariableDeclaration";
                            readonly src: "3710:61:176";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "3737:2:176";
                                    readonly type: "";
                                    readonly value: "24";
                                }, {
                                    readonly arguments: readonly [{
                                        readonly kind: "number";
                                        readonly nodeType: "YulLiteral";
                                        readonly src: "3745:4:176";
                                        readonly type: "";
                                        readonly value: "0x23";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly kind: "number";
                                            readonly nodeType: "YulLiteral";
                                            readonly src: "3755:1:176";
                                            readonly type: "";
                                            readonly value: "8";
                                        }, {
                                            readonly name: "prefixUint";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3758:10:176";
                                        }];
                                        readonly functionName: {
                                            readonly name: "shl";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3751:3:176";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "3751:18:176";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3741:3:176";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3741:29:176";
                                }];
                                readonly functionName: {
                                    readonly name: "shl";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "3733:3:176";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "3733:38:176";
                            };
                            readonly variables: readonly [{
                                readonly name: "formattedPrefix";
                                readonly nodeType: "YulTypedName";
                                readonly src: "3714:15:176";
                                readonly type: "";
                            }];
                        }, {
                            readonly nodeType: "YulVariableDeclaration";
                            readonly src: "3781:182:176";
                            readonly value: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "3818:3:176";
                                    readonly type: "";
                                    readonly value: "200";
                                }, {
                                    readonly arguments: readonly [{
                                        readonly name: "formattedPrefix";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3856:15:176";
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly name: "units";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3897:5:176";
                                            }, {
                                                readonly arguments: readonly [{
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "3908:1:176";
                                                    readonly type: "";
                                                    readonly value: "8";
                                                }, {
                                                    readonly name: "tenths";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3911:6:176";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "shl";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "3904:3:176";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "3904:14:176";
                                            }];
                                            readonly functionName: {
                                                readonly name: "add";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3893:3:176";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "3893:26:176";
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly kind: "number";
                                                readonly nodeType: "YulLiteral";
                                                readonly src: "3925:2:176";
                                                readonly type: "";
                                                readonly value: "16";
                                            }, {
                                                readonly name: "hundreds";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3929:8:176";
                                            }];
                                            readonly functionName: {
                                                readonly name: "shl";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "3921:3:176";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "3921:17:176";
                                        }];
                                        readonly functionName: {
                                            readonly name: "add";
                                            readonly nodeType: "YulIdentifier";
                                            readonly src: "3889:3:176";
                                        };
                                        readonly nodeType: "YulFunctionCall";
                                        readonly src: "3889:50:176";
                                    }];
                                    readonly functionName: {
                                        readonly name: "add";
                                        readonly nodeType: "YulIdentifier";
                                        readonly src: "3835:3:176";
                                    };
                                    readonly nodeType: "YulFunctionCall";
                                    readonly src: "3835:118:176";
                                }];
                                readonly functionName: {
                                    readonly name: "shl";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "3801:3:176";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "3801:162:176";
                            };
                            readonly variables: readonly [{
                                readonly name: "revertReason";
                                readonly nodeType: "YulTypedName";
                                readonly src: "3785:12:176";
                                readonly type: "";
                            }];
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4491:3:176";
                                    readonly type: "";
                                    readonly value: "0x0";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4508:66:176";
                                    readonly type: "";
                                    readonly value: "0x08c379a000000000000000000000000000000000000000000000000000000000";
                                }];
                                readonly functionName: {
                                    readonly name: "mstore";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "4471:6:176";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "4471:113:176";
                            };
                            readonly nodeType: "YulExpressionStatement";
                            readonly src: "4471:113:176";
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4730:4:176";
                                    readonly type: "";
                                    readonly value: "0x04";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4748:66:176";
                                    readonly type: "";
                                    readonly value: "0x0000000000000000000000000000000000000000000000000000000000000020";
                                }];
                                readonly functionName: {
                                    readonly name: "mstore";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "4710:6:176";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "4710:114:176";
                            };
                            readonly nodeType: "YulExpressionStatement";
                            readonly src: "4710:114:176";
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4893:4:176";
                                    readonly type: "";
                                    readonly value: "0x24";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4899:1:176";
                                    readonly type: "";
                                    readonly value: "7";
                                }];
                                readonly functionName: {
                                    readonly name: "mstore";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "4886:6:176";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "4886:15:176";
                            };
                            readonly nodeType: "YulExpressionStatement";
                            readonly src: "4886:15:176";
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "4966:4:176";
                                    readonly type: "";
                                    readonly value: "0x44";
                                }, {
                                    readonly name: "revertReason";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "4972:12:176";
                                }];
                                readonly functionName: {
                                    readonly name: "mstore";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "4959:6:176";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "4959:26:176";
                            };
                            readonly nodeType: "YulExpressionStatement";
                            readonly src: "4959:26:176";
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "5189:1:176";
                                    readonly type: "";
                                    readonly value: "0";
                                }, {
                                    readonly kind: "number";
                                    readonly nodeType: "YulLiteral";
                                    readonly src: "5192:3:176";
                                    readonly type: "";
                                    readonly value: "100";
                                }];
                                readonly functionName: {
                                    readonly name: "revert";
                                    readonly nodeType: "YulIdentifier";
                                    readonly src: "5182:6:176";
                                };
                                readonly nodeType: "YulFunctionCall";
                                readonly src: "5182:14:176";
                            };
                            readonly nodeType: "YulExpressionStatement";
                            readonly src: "5182:14:176";
                        }];
                    };
                    readonly evmVersion: "paris";
                    readonly externalReferences: readonly [{
                        readonly declaration: 73321;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "2868:9:176";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 73321;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "2899:9:176";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 73321;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "2916:9:176";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 73321;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "2961:9:176";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 73321;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "2992:9:176";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 73321;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "3009:9:176";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 73321;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "3056:9:176";
                        readonly valueSize: 1;
                    }, {
                        readonly declaration: 73327;
                        readonly isOffset: false;
                        readonly isSlot: false;
                        readonly src: "3758:10:176";
                        readonly valueSize: 1;
                    }];
                    readonly id: 73336;
                    readonly nodeType: "InlineAssembly";
                    readonly src: "2564:2638:176";
                }];
            };
            readonly documentation: {
                readonly id: 73319;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "1573:104:176";
                readonly text: " @dev Reverts with a revert reason containing `errorCode`. Only codes up to 999 are supported.";
            };
            readonly implemented: true;
            readonly kind: "freeFunction";
            readonly modifiers: readonly [];
            readonly name: "_revert";
            readonly nameLocation: "1687:7:176";
            readonly parameters: {
                readonly id: 73324;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [{
                    readonly constant: false;
                    readonly id: 73321;
                    readonly mutability: "mutable";
                    readonly name: "errorCode";
                    readonly nameLocation: "1703:9:176";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 73338;
                    readonly src: "1695:17:176";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                    readonly typeName: {
                        readonly id: 73320;
                        readonly name: "uint256";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1695:7:176";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 73323;
                    readonly mutability: "mutable";
                    readonly name: "prefix";
                    readonly nameLocation: "1721:6:176";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 73338;
                    readonly src: "1714:13:176";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_bytes3";
                        readonly typeString: "bytes3";
                    };
                    readonly typeName: {
                        readonly id: 73322;
                        readonly name: "bytes3";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "1714:6:176";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes3";
                            readonly typeString: "bytes3";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly src: "1694:34:176";
            };
            readonly returnParameters: {
                readonly id: 73325;
                readonly nodeType: "ParameterList";
                readonly parameters: readonly [];
                readonly src: "1734:0:176";
            };
            readonly scope: 73844;
            readonly stateMutability: "pure";
            readonly virtual: false;
            readonly visibility: "internal";
        }, {
            readonly id: 73843;
            readonly nodeType: "ContractDefinition";
            readonly src: "5206:10031:176";
            readonly nodes: readonly [{
                readonly id: 73341;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5247:42:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ADD_OVERFLOW";
                readonly nameLocation: "5273:12:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73339;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5247:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "30";
                    readonly id: 73340;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5288:1:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_0_by_1";
                        readonly typeString: "int_const 0";
                    };
                    readonly value: "0";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73344;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5295:42:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SUB_OVERFLOW";
                readonly nameLocation: "5321:12:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73342;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5295:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "31";
                    readonly id: 73343;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5336:1:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_1_by_1";
                        readonly typeString: "int_const 1";
                    };
                    readonly value: "1";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73347;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5343:43:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SUB_UNDERFLOW";
                readonly nameLocation: "5369:13:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73345;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5343:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "32";
                    readonly id: 73346;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5385:1:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_2_by_1";
                        readonly typeString: "int_const 2";
                    };
                    readonly value: "2";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73350;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5392:42:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MUL_OVERFLOW";
                readonly nameLocation: "5418:12:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73348;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5392:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "33";
                    readonly id: 73349;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5433:1:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_3_by_1";
                        readonly typeString: "int_const 3";
                    };
                    readonly value: "3";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73353;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5440:43:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ZERO_DIVISION";
                readonly nameLocation: "5466:13:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73351;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5440:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "34";
                    readonly id: 73352;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5482:1:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_4_by_1";
                        readonly typeString: "int_const 4";
                    };
                    readonly value: "4";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73356;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5489:42:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "DIV_INTERNAL";
                readonly nameLocation: "5515:12:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73354;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5489:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "35";
                    readonly id: 73355;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5530:1:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_5_by_1";
                        readonly typeString: "int_const 5";
                    };
                    readonly value: "5";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73359;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5537:45:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "X_OUT_OF_BOUNDS";
                readonly nameLocation: "5563:15:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73357;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5537:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "36";
                    readonly id: 73358;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5581:1:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_6_by_1";
                        readonly typeString: "int_const 6";
                    };
                    readonly value: "6";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73362;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5588:45:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "Y_OUT_OF_BOUNDS";
                readonly nameLocation: "5614:15:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73360;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5588:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "37";
                    readonly id: 73361;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5632:1:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_7_by_1";
                        readonly typeString: "int_const 7";
                    };
                    readonly value: "7";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73365;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5639:51:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "PRODUCT_OUT_OF_BOUNDS";
                readonly nameLocation: "5665:21:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73363;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5639:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "38";
                    readonly id: 73364;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5689:1:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_8_by_1";
                        readonly typeString: "int_const 8";
                    };
                    readonly value: "8";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73368;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5696:46:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_EXPONENT";
                readonly nameLocation: "5722:16:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73366;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5696:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "39";
                    readonly id: 73367;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5741:1:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_9_by_1";
                        readonly typeString: "int_const 9";
                    };
                    readonly value: "9";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73371;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5762:45:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "OUT_OF_BOUNDS";
                readonly nameLocation: "5788:13:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73369;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5762:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313030";
                    readonly id: 73370;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5804:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_100_by_1";
                        readonly typeString: "int_const 100";
                    };
                    readonly value: "100";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73374;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5813:46:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNSORTED_ARRAY";
                readonly nameLocation: "5839:14:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73372;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5813:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313031";
                    readonly id: 73373;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5856:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_101_by_1";
                        readonly typeString: "int_const 101";
                    };
                    readonly value: "101";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73377;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5865:47:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNSORTED_TOKENS";
                readonly nameLocation: "5891:15:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73375;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5865:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313032";
                    readonly id: 73376;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5909:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_102_by_1";
                        readonly typeString: "int_const 102";
                    };
                    readonly value: "102";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73380;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5918:53:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INPUT_LENGTH_MISMATCH";
                readonly nameLocation: "5944:21:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73378;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5918:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313033";
                    readonly id: 73379;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "5968:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_103_by_1";
                        readonly typeString: "int_const 103";
                    };
                    readonly value: "103";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73383;
                readonly nodeType: "VariableDeclaration";
                readonly src: "5977:42:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ZERO_TOKEN";
                readonly nameLocation: "6003:10:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73381;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "5977:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313034";
                    readonly id: 73382;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6016:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_104_by_1";
                        readonly typeString: "int_const 104";
                    };
                    readonly value: "104";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73386;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6025:49:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_DATA";
                readonly nameLocation: "6051:17:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73384;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6025:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "313035";
                    readonly id: 73385;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6071:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_105_by_1";
                        readonly typeString: "int_const 105";
                    };
                    readonly value: "105";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73389;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6101:42:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MIN_TOKENS";
                readonly nameLocation: "6127:10:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73387;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6101:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323030";
                    readonly id: 73388;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6140:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_200_by_1";
                        readonly typeString: "int_const 200";
                    };
                    readonly value: "200";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73392;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6149:42:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_TOKENS";
                readonly nameLocation: "6175:10:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73390;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6149:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323031";
                    readonly id: 73391;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6188:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_201_by_1";
                        readonly typeString: "int_const 201";
                    };
                    readonly value: "201";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73395;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6197:55:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_SWAP_FEE_PERCENTAGE";
                readonly nameLocation: "6223:23:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73393;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6197:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323032";
                    readonly id: 73394;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6249:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_202_by_1";
                        readonly typeString: "int_const 202";
                    };
                    readonly value: "202";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73398;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6258:55:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MIN_SWAP_FEE_PERCENTAGE";
                readonly nameLocation: "6284:23:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73396;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6258:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323033";
                    readonly id: 73397;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6310:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_203_by_1";
                        readonly typeString: "int_const 203";
                    };
                    readonly value: "203";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73401;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6319:43:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MINIMUM_BPT";
                readonly nameLocation: "6345:11:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73399;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6319:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323034";
                    readonly id: 73400;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6359:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_204_by_1";
                        readonly typeString: "int_const 204";
                    };
                    readonly value: "204";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73404;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6368:48:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CALLER_NOT_VAULT";
                readonly nameLocation: "6394:16:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73402;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6368:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323035";
                    readonly id: 73403;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6413:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_205_by_1";
                        readonly typeString: "int_const 205";
                    };
                    readonly value: "205";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73407;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6422:45:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNINITIALIZED";
                readonly nameLocation: "6448:13:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73405;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6422:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323036";
                    readonly id: 73406;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6464:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_206_by_1";
                        readonly typeString: "int_const 206";
                    };
                    readonly value: "206";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73410;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6473:49:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "BPT_IN_MAX_AMOUNT";
                readonly nameLocation: "6499:17:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73408;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6473:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323037";
                    readonly id: 73409;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6519:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_207_by_1";
                        readonly typeString: "int_const 207";
                    };
                    readonly value: "207";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73413;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6528:50:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "BPT_OUT_MIN_AMOUNT";
                readonly nameLocation: "6554:18:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73411;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6528:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323038";
                    readonly id: 73412;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6575:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_208_by_1";
                        readonly typeString: "int_const 208";
                    };
                    readonly value: "208";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73416;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6584:46:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "EXPIRED_PERMIT";
                readonly nameLocation: "6610:14:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73414;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6584:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323039";
                    readonly id: 73415;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6627:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_209_by_1";
                        readonly typeString: "int_const 209";
                    };
                    readonly value: "209";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73419;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6636:46:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "NOT_TWO_TOKENS";
                readonly nameLocation: "6662:14:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73417;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6636:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323130";
                    readonly id: 73418;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6679:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_210_by_1";
                        readonly typeString: "int_const 210";
                    };
                    readonly value: "210";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73422;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6688:40:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "DISABLED";
                readonly nameLocation: "6714:8:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73420;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6688:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "323131";
                    readonly id: 73421;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6725:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_211_by_1";
                        readonly typeString: "int_const 211";
                    };
                    readonly value: "211";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73425;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6748:39:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MIN_AMP";
                readonly nameLocation: "6774:7:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73423;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6748:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333030";
                    readonly id: 73424;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6784:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_300_by_1";
                        readonly typeString: "int_const 300";
                    };
                    readonly value: "300";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73428;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6793:39:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_AMP";
                readonly nameLocation: "6819:7:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73426;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6793:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333031";
                    readonly id: 73427;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6829:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_301_by_1";
                        readonly typeString: "int_const 301";
                    };
                    readonly value: "301";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73431;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6838:42:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MIN_WEIGHT";
                readonly nameLocation: "6864:10:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73429;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6838:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333032";
                    readonly id: 73430;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6877:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_302_by_1";
                        readonly typeString: "int_const 302";
                    };
                    readonly value: "302";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73434;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6886:49:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_STABLE_TOKENS";
                readonly nameLocation: "6912:17:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73432;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6886:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333033";
                    readonly id: 73433;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6932:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_303_by_1";
                        readonly typeString: "int_const 303";
                    };
                    readonly value: "303";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73437;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6941:44:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_IN_RATIO";
                readonly nameLocation: "6967:12:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73435;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6941:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333034";
                    readonly id: 73436;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "6982:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_304_by_1";
                        readonly typeString: "int_const 304";
                    };
                    readonly value: "304";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73440;
                readonly nodeType: "VariableDeclaration";
                readonly src: "6991:45:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_OUT_RATIO";
                readonly nameLocation: "7017:13:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73438;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "6991:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333035";
                    readonly id: 73439;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7033:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_305_by_1";
                        readonly typeString: "int_const 305";
                    };
                    readonly value: "305";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73443;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7042:56:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MIN_BPT_IN_FOR_TOKEN_OUT";
                readonly nameLocation: "7068:24:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73441;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7042:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333036";
                    readonly id: 73442;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7095:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_306_by_1";
                        readonly typeString: "int_const 306";
                    };
                    readonly value: "306";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73446;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7104:56:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_OUT_BPT_FOR_TOKEN_IN";
                readonly nameLocation: "7130:24:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73444;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7104:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333037";
                    readonly id: 73445;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7157:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_307_by_1";
                        readonly typeString: "int_const 307";
                    };
                    readonly value: "307";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73449;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7166:59:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "NORMALIZED_WEIGHT_INVARIANT";
                readonly nameLocation: "7192:27:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73447;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7166:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333038";
                    readonly id: 73448;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7222:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_308_by_1";
                        readonly typeString: "int_const 308";
                    };
                    readonly value: "308";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73452;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7231:45:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_TOKEN";
                readonly nameLocation: "7257:13:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73450;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7231:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333039";
                    readonly id: 73451;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7273:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_309_by_1";
                        readonly typeString: "int_const 309";
                    };
                    readonly value: "309";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73455;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7282:51:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNHANDLED_JOIN_KIND";
                readonly nameLocation: "7308:19:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73453;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7282:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333130";
                    readonly id: 73454;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7330:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_310_by_1";
                        readonly typeString: "int_const 310";
                    };
                    readonly value: "310";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73458;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7339:46:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ZERO_INVARIANT";
                readonly nameLocation: "7365:14:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73456;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7339:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333131";
                    readonly id: 73457;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7382:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_311_by_1";
                        readonly typeString: "int_const 311";
                    };
                    readonly value: "311";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73461;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7391:60:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ORACLE_INVALID_SECONDS_QUERY";
                readonly nameLocation: "7417:28:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73459;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7391:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333132";
                    readonly id: 73460;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7448:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_312_by_1";
                        readonly typeString: "int_const 312";
                    };
                    readonly value: "312";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73464;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7457:54:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ORACLE_NOT_INITIALIZED";
                readonly nameLocation: "7483:22:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73462;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7457:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333133";
                    readonly id: 73463;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7508:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_313_by_1";
                        readonly typeString: "int_const 313";
                    };
                    readonly value: "313";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73467;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7517:52:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ORACLE_QUERY_TOO_OLD";
                readonly nameLocation: "7543:20:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73465;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7517:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333134";
                    readonly id: 73466;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7566:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_314_by_1";
                        readonly typeString: "int_const 314";
                    };
                    readonly value: "314";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73470;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7575:52:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ORACLE_INVALID_INDEX";
                readonly nameLocation: "7601:20:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73468;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7575:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333135";
                    readonly id: 73469;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7624:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_315_by_1";
                        readonly typeString: "int_const 315";
                    };
                    readonly value: "315";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73473;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7633:47:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ORACLE_BAD_SECS";
                readonly nameLocation: "7659:15:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73471;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7633:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333136";
                    readonly id: 73472;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7677:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_316_by_1";
                        readonly typeString: "int_const 316";
                    };
                    readonly value: "316";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73476;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7686:54:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "AMP_END_TIME_TOO_CLOSE";
                readonly nameLocation: "7712:22:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73474;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7686:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333137";
                    readonly id: 73475;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7737:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_317_by_1";
                        readonly typeString: "int_const 317";
                    };
                    readonly value: "317";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73479;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7746:50:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "AMP_ONGOING_UPDATE";
                readonly nameLocation: "7772:18:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73477;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7746:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333138";
                    readonly id: 73478;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7793:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_318_by_1";
                        readonly typeString: "int_const 318";
                    };
                    readonly value: "318";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73482;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7802:49:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "AMP_RATE_TOO_HIGH";
                readonly nameLocation: "7828:17:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73480;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7802:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333139";
                    readonly id: 73481;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7848:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_319_by_1";
                        readonly typeString: "int_const 319";
                    };
                    readonly value: "319";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73485;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7857:53:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "AMP_NO_ONGOING_UPDATE";
                readonly nameLocation: "7883:21:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73483;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7857:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333230";
                    readonly id: 73484;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7907:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_320_by_1";
                        readonly typeString: "int_const 320";
                    };
                    readonly value: "320";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73488;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7916:63:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "STABLE_INVARIANT_DIDNT_CONVERGE";
                readonly nameLocation: "7942:31:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73486;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7916:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333231";
                    readonly id: 73487;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "7976:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_321_by_1";
                        readonly typeString: "int_const 321";
                    };
                    readonly value: "321";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73491;
                readonly nodeType: "VariableDeclaration";
                readonly src: "7985:65:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "STABLE_GET_BALANCE_DIDNT_CONVERGE";
                readonly nameLocation: "8011:33:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73489;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "7985:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333232";
                    readonly id: 73490;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8047:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_322_by_1";
                        readonly typeString: "int_const 322";
                    };
                    readonly value: "322";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73494;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8056:52:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "RELAYER_NOT_CONTRACT";
                readonly nameLocation: "8082:20:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73492;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8056:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333233";
                    readonly id: 73493;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8105:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_323_by_1";
                        readonly typeString: "int_const 323";
                    };
                    readonly value: "323";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73497;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8114:60:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "BASE_POOL_RELAYER_NOT_CALLED";
                readonly nameLocation: "8140:28:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73495;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8114:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333234";
                    readonly id: 73496;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8171:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_324_by_1";
                        readonly typeString: "int_const 324";
                    };
                    readonly value: "324";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73500;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8180:61:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "REBALANCING_RELAYER_REENTERED";
                readonly nameLocation: "8206:29:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73498;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8180:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333235";
                    readonly id: 73499;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8238:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_325_by_1";
                        readonly typeString: "int_const 325";
                    };
                    readonly value: "325";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73503;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8247:58:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "GRADUAL_UPDATE_TIME_TRAVEL";
                readonly nameLocation: "8273:26:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73501;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8247:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333236";
                    readonly id: 73502;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8302:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_326_by_1";
                        readonly typeString: "int_const 326";
                    };
                    readonly value: "326";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73506;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8311:46:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SWAPS_DISABLED";
                readonly nameLocation: "8337:14:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73504;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8311:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333237";
                    readonly id: 73505;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8354:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_327_by_1";
                        readonly typeString: "int_const 327";
                    };
                    readonly value: "327";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73509;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8363:55:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CALLER_IS_NOT_LBP_OWNER";
                readonly nameLocation: "8389:23:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73507;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8363:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333238";
                    readonly id: 73508;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8415:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_328_by_1";
                        readonly typeString: "int_const 328";
                    };
                    readonly value: "328";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73512;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8424:51:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "PRICE_RATE_OVERFLOW";
                readonly nameLocation: "8450:19:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73510;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8424:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333239";
                    readonly id: 73511;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8472:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_329_by_1";
                        readonly typeString: "int_const 329";
                    };
                    readonly value: "329";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73515;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8481:75:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_JOIN_EXIT_KIND_WHILE_SWAPS_DISABLED";
                readonly nameLocation: "8507:43:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73513;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8481:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333330";
                    readonly id: 73514;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8553:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_330_by_1";
                        readonly typeString: "int_const 330";
                    };
                    readonly value: "330";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73518;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8562:54:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "WEIGHT_CHANGE_TOO_FAST";
                readonly nameLocation: "8588:22:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73516;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8562:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333331";
                    readonly id: 73517;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8613:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_331_by_1";
                        readonly typeString: "int_const 331";
                    };
                    readonly value: "331";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73521;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8622:63:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "LOWER_GREATER_THAN_UPPER_TARGET";
                readonly nameLocation: "8648:31:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73519;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8622:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333332";
                    readonly id: 73520;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8682:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_332_by_1";
                        readonly typeString: "int_const 332";
                    };
                    readonly value: "332";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73524;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8691:53:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UPPER_TARGET_TOO_HIGH";
                readonly nameLocation: "8717:21:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73522;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8691:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333333";
                    readonly id: 73523;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8741:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_333_by_1";
                        readonly typeString: "int_const 333";
                    };
                    readonly value: "333";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73527;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8750:56:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNHANDLED_BY_LINEAR_POOL";
                readonly nameLocation: "8776:24:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73525;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8750:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333334";
                    readonly id: 73526;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8803:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_334_by_1";
                        readonly typeString: "int_const 334";
                    };
                    readonly value: "334";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73530;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8812:51:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "OUT_OF_TARGET_RANGE";
                readonly nameLocation: "8838:19:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73528;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8812:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333335";
                    readonly id: 73529;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8860:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_335_by_1";
                        readonly typeString: "int_const 335";
                    };
                    readonly value: "335";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73533;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8869:51:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNHANDLED_EXIT_KIND";
                readonly nameLocation: "8895:19:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73531;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8869:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333336";
                    readonly id: 73532;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8917:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_336_by_1";
                        readonly typeString: "int_const 336";
                    };
                    readonly value: "336";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73536;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8926:49:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNAUTHORIZED_EXIT";
                readonly nameLocation: "8952:17:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73534;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8926:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333337";
                    readonly id: 73535;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "8972:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_337_by_1";
                        readonly typeString: "int_const 337";
                    };
                    readonly value: "337";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73539;
                readonly nodeType: "VariableDeclaration";
                readonly src: "8981:66:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_MANAGEMENT_SWAP_FEE_PERCENTAGE";
                readonly nameLocation: "9007:34:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73537;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "8981:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333338";
                    readonly id: 73538;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9044:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_338_by_1";
                        readonly typeString: "int_const 338";
                    };
                    readonly value: "338";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73542;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9053:57:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNHANDLED_BY_MANAGED_POOL";
                readonly nameLocation: "9079:25:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73540;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9053:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333339";
                    readonly id: 73541;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9107:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_339_by_1";
                        readonly typeString: "int_const 339";
                    };
                    readonly value: "339";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73545;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9116:57:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNHANDLED_BY_PHANTOM_POOL";
                readonly nameLocation: "9142:25:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73543;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9116:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333430";
                    readonly id: 73544;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9170:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_340_by_1";
                        readonly typeString: "int_const 340";
                    };
                    readonly value: "340";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73548;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9179:65:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "TOKEN_DOES_NOT_HAVE_RATE_PROVIDER";
                readonly nameLocation: "9205:33:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73546;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9179:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333431";
                    readonly id: 73547;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9241:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_341_by_1";
                        readonly typeString: "int_const 341";
                    };
                    readonly value: "341";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73551;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9250:54:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_INITIALIZATION";
                readonly nameLocation: "9276:22:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73549;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9250:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333432";
                    readonly id: 73550;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9301:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_342_by_1";
                        readonly typeString: "int_const 342";
                    };
                    readonly value: "342";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73554;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9310:55:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "OUT_OF_NEW_TARGET_RANGE";
                readonly nameLocation: "9336:23:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73552;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9310:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333433";
                    readonly id: 73553;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9362:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_343_by_1";
                        readonly typeString: "int_const 343";
                    };
                    readonly value: "343";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73557;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9371:48:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "FEATURE_DISABLED";
                readonly nameLocation: "9397:16:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73555;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9371:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333434";
                    readonly id: 73556;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9416:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_344_by_1";
                        readonly typeString: "int_const 344";
                    };
                    readonly value: "344";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73560;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9425:61:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNINITIALIZED_POOL_CONTROLLER";
                readonly nameLocation: "9451:29:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73558;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9425:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333435";
                    readonly id: 73559;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9483:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_345_by_1";
                        readonly typeString: "int_const 345";
                    };
                    readonly value: "345";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73563;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9492:62:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SET_SWAP_FEE_DURING_FEE_CHANGE";
                readonly nameLocation: "9518:30:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73561;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9492:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333436";
                    readonly id: 73562;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9551:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_346_by_1";
                        readonly typeString: "int_const 346";
                    };
                    readonly value: "346";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73566;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9560:63:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SET_SWAP_FEE_PENDING_FEE_CHANGE";
                readonly nameLocation: "9586:31:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73564;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9560:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333437";
                    readonly id: 73565;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9620:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_347_by_1";
                        readonly typeString: "int_const 347";
                    };
                    readonly value: "347";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73569;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9629:66:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CHANGE_TOKENS_DURING_WEIGHT_CHANGE";
                readonly nameLocation: "9655:34:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73567;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9629:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333438";
                    readonly id: 73568;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9692:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_348_by_1";
                        readonly typeString: "int_const 348";
                    };
                    readonly value: "348";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73572;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9701:67:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CHANGE_TOKENS_PENDING_WEIGHT_CHANGE";
                readonly nameLocation: "9727:35:176";
                readonly scope: 73843;
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
                    readonly src: "9701:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333439";
                    readonly id: 73571;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9765:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_349_by_1";
                        readonly typeString: "int_const 349";
                    };
                    readonly value: "349";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73575;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9774:42:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_WEIGHT";
                readonly nameLocation: "9800:10:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73573;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9774:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333530";
                    readonly id: 73574;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9813:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_350_by_1";
                        readonly typeString: "int_const 350";
                    };
                    readonly value: "350";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73578;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9822:49:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNAUTHORIZED_JOIN";
                readonly nameLocation: "9848:17:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73576;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9822:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333531";
                    readonly id: 73577;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9868:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_351_by_1";
                        readonly typeString: "int_const 351";
                    };
                    readonly value: "351";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73581;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9877:65:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_MANAGEMENT_AUM_FEE_PERCENTAGE";
                readonly nameLocation: "9903:33:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73579;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9877:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333532";
                    readonly id: 73580;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9939:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_352_by_1";
                        readonly typeString: "int_const 352";
                    };
                    readonly value: "352";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73584;
                readonly nodeType: "VariableDeclaration";
                readonly src: "9948:49:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "FRACTIONAL_TARGET";
                readonly nameLocation: "9974:17:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73582;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9948:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333533";
                    readonly id: 73583;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "9994:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_353_by_1";
                        readonly typeString: "int_const 353";
                    };
                    readonly value: "353";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73587;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10003:49:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ADD_OR_REMOVE_BPT";
                readonly nameLocation: "10029:17:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73585;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10003:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333534";
                    readonly id: 73586;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10049:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_354_by_1";
                        readonly typeString: "int_const 354";
                    };
                    readonly value: "354";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73590;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10058:62:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_CIRCUIT_BREAKER_BOUNDS";
                readonly nameLocation: "10084:30:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73588;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10058:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333535";
                    readonly id: 73589;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10117:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_355_by_1";
                        readonly typeString: "int_const 355";
                    };
                    readonly value: "355";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73593;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10126:55:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CIRCUIT_BREAKER_TRIPPED";
                readonly nameLocation: "10152:23:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73591;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10126:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333536";
                    readonly id: 73592;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10178:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_356_by_1";
                        readonly typeString: "int_const 356";
                    };
                    readonly value: "356";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73596;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10187:54:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MALICIOUS_QUERY_REVERT";
                readonly nameLocation: "10213:22:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73594;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10187:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333537";
                    readonly id: 73595;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10238:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_357_by_1";
                        readonly typeString: "int_const 357";
                    };
                    readonly value: "357";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73599;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10247:52:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "JOINS_EXITS_DISABLED";
                readonly nameLocation: "10273:20:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73597;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10247:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "333538";
                    readonly id: 73598;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10296:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_358_by_1";
                        readonly typeString: "int_const 358";
                    };
                    readonly value: "358";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73602;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10317:42:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "REENTRANCY";
                readonly nameLocation: "10343:10:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73600;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10317:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343030";
                    readonly id: 73601;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10356:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_400_by_1";
                        readonly typeString: "int_const 400";
                    };
                    readonly value: "400";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73605;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10365:50:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SENDER_NOT_ALLOWED";
                readonly nameLocation: "10391:18:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73603;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10365:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343031";
                    readonly id: 73604;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10412:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_401_by_1";
                        readonly typeString: "int_const 401";
                    };
                    readonly value: "401";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73608;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10421:38:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "PAUSED";
                readonly nameLocation: "10447:6:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73606;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10421:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343032";
                    readonly id: 73607;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10456:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_402_by_1";
                        readonly typeString: "int_const 402";
                    };
                    readonly value: "402";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73611;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10465:52:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "PAUSE_WINDOW_EXPIRED";
                readonly nameLocation: "10491:20:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73609;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10465:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343033";
                    readonly id: 73610;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10514:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_403_by_1";
                        readonly typeString: "int_const 403";
                    };
                    readonly value: "403";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73614;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10523:57:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_PAUSE_WINDOW_DURATION";
                readonly nameLocation: "10549:25:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73612;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10523:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343034";
                    readonly id: 73613;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10577:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_404_by_1";
                        readonly typeString: "int_const 404";
                    };
                    readonly value: "404";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73617;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10586:58:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MAX_BUFFER_PERIOD_DURATION";
                readonly nameLocation: "10612:26:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73615;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10586:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343035";
                    readonly id: 73616;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10641:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_405_by_1";
                        readonly typeString: "int_const 405";
                    };
                    readonly value: "405";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73620;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10650:52:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_BALANCE";
                readonly nameLocation: "10676:20:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73618;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10650:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343036";
                    readonly id: 73619;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10699:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_406_by_1";
                        readonly typeString: "int_const 406";
                    };
                    readonly value: "406";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73623;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10708:54:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_ALLOWANCE";
                readonly nameLocation: "10734:22:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73621;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10708:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343037";
                    readonly id: 73622;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10759:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_407_by_1";
                        readonly typeString: "int_const 407";
                    };
                    readonly value: "407";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73626;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10768:64:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_TRANSFER_FROM_ZERO_ADDRESS";
                readonly nameLocation: "10794:32:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73624;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10768:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343038";
                    readonly id: 73625;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10829:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_408_by_1";
                        readonly typeString: "int_const 408";
                    };
                    readonly value: "408";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73629;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10838:62:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_TRANSFER_TO_ZERO_ADDRESS";
                readonly nameLocation: "10864:30:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73627;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10838:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343039";
                    readonly id: 73628;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10897:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_409_by_1";
                        readonly typeString: "int_const 409";
                    };
                    readonly value: "409";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73632;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10906:58:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_MINT_TO_ZERO_ADDRESS";
                readonly nameLocation: "10932:26:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73630;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10906:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343130";
                    readonly id: 73631;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "10961:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_410_by_1";
                        readonly typeString: "int_const 410";
                    };
                    readonly value: "410";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73635;
                readonly nodeType: "VariableDeclaration";
                readonly src: "10970:60:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_BURN_FROM_ZERO_ADDRESS";
                readonly nameLocation: "10996:28:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73633;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "10970:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343131";
                    readonly id: 73634;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11027:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_411_by_1";
                        readonly typeString: "int_const 411";
                    };
                    readonly value: "411";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73638;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11036:63:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_APPROVE_FROM_ZERO_ADDRESS";
                readonly nameLocation: "11062:31:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73636;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11036:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343132";
                    readonly id: 73637;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11096:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_412_by_1";
                        readonly typeString: "int_const 412";
                    };
                    readonly value: "412";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73641;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11105:61:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_APPROVE_TO_ZERO_ADDRESS";
                readonly nameLocation: "11131:29:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73639;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11105:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343133";
                    readonly id: 73640;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11163:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_413_by_1";
                        readonly typeString: "int_const 413";
                    };
                    readonly value: "413";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73644;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11172:64:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_TRANSFER_EXCEEDS_ALLOWANCE";
                readonly nameLocation: "11198:32:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73642;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11172:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343134";
                    readonly id: 73643;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11233:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_414_by_1";
                        readonly typeString: "int_const 414";
                    };
                    readonly value: "414";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73647;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11242:68:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_DECREASED_ALLOWANCE_BELOW_ZERO";
                readonly nameLocation: "11268:36:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73645;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11242:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343135";
                    readonly id: 73646;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11307:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_415_by_1";
                        readonly typeString: "int_const 415";
                    };
                    readonly value: "415";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73650;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11316:62:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_TRANSFER_EXCEEDS_BALANCE";
                readonly nameLocation: "11342:30:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73648;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11316:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343136";
                    readonly id: 73649;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11375:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_416_by_1";
                        readonly typeString: "int_const 416";
                    };
                    readonly value: "416";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73653;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11384:60:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_BURN_EXCEEDS_ALLOWANCE";
                readonly nameLocation: "11410:28:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73651;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11384:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343137";
                    readonly id: 73652;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11441:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_417_by_1";
                        readonly typeString: "int_const 417";
                    };
                    readonly value: "417";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73656;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11450:54:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SAFE_ERC20_CALL_FAILED";
                readonly nameLocation: "11476:22:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73654;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11450:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343138";
                    readonly id: 73655;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11501:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_418_by_1";
                        readonly typeString: "int_const 418";
                    };
                    readonly value: "418";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73659;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11510:60:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ADDRESS_INSUFFICIENT_BALANCE";
                readonly nameLocation: "11536:28:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73657;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11510:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343139";
                    readonly id: 73658;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11567:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_419_by_1";
                        readonly typeString: "int_const 419";
                    };
                    readonly value: "419";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73662;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11576:57:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ADDRESS_CANNOT_SEND_VALUE";
                readonly nameLocation: "11602:25:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73660;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11576:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343230";
                    readonly id: 73661;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11630:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_420_by_1";
                        readonly typeString: "int_const 420";
                    };
                    readonly value: "420";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73665;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11639:63:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SAFE_CAST_VALUE_CANT_FIT_INT256";
                readonly nameLocation: "11665:31:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73663;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11639:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343231";
                    readonly id: 73664;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11699:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_421_by_1";
                        readonly typeString: "int_const 421";
                    };
                    readonly value: "421";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73668;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11708:54:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "GRANT_SENDER_NOT_ADMIN";
                readonly nameLocation: "11734:22:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73666;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11708:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343232";
                    readonly id: 73667;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11759:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_422_by_1";
                        readonly typeString: "int_const 422";
                    };
                    readonly value: "422";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73671;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11768:55:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "REVOKE_SENDER_NOT_ADMIN";
                readonly nameLocation: "11794:23:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73669;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11768:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343233";
                    readonly id: 73670;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11820:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_423_by_1";
                        readonly typeString: "int_const 423";
                    };
                    readonly value: "423";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73674;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11829:59:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "RENOUNCE_SENDER_NOT_ALLOWED";
                readonly nameLocation: "11855:27:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73672;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11829:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343234";
                    readonly id: 73673;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11885:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_424_by_1";
                        readonly typeString: "int_const 424";
                    };
                    readonly value: "424";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73677;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11894:53:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "BUFFER_PERIOD_EXPIRED";
                readonly nameLocation: "11920:21:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73675;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11894:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343235";
                    readonly id: 73676;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "11944:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_425_by_1";
                        readonly typeString: "int_const 425";
                    };
                    readonly value: "425";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73680;
                readonly nodeType: "VariableDeclaration";
                readonly src: "11953:51:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CALLER_IS_NOT_OWNER";
                readonly nameLocation: "11979:19:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73678;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "11953:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343236";
                    readonly id: 73679;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12001:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_426_by_1";
                        readonly typeString: "int_const 426";
                    };
                    readonly value: "426";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73683;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12010:49:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "NEW_OWNER_IS_ZERO";
                readonly nameLocation: "12036:17:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73681;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12010:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343237";
                    readonly id: 73682;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12056:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_427_by_1";
                        readonly typeString: "int_const 427";
                    };
                    readonly value: "427";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73686;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12065:54:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CODE_DEPLOYMENT_FAILED";
                readonly nameLocation: "12091:22:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73684;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12065:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343238";
                    readonly id: 73685;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12116:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_428_by_1";
                        readonly typeString: "int_const 428";
                    };
                    readonly value: "428";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73689;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12125:52:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CALL_TO_NON_CONTRACT";
                readonly nameLocation: "12151:20:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73687;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12125:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343239";
                    readonly id: 73688;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12174:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_429_by_1";
                        readonly typeString: "int_const 429";
                    };
                    readonly value: "429";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73692;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12183:53:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "LOW_LEVEL_CALL_FAILED";
                readonly nameLocation: "12209:21:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73690;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12183:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343330";
                    readonly id: 73691;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12233:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_430_by_1";
                        readonly typeString: "int_const 430";
                    };
                    readonly value: "430";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73695;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12242:42:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "NOT_PAUSED";
                readonly nameLocation: "12268:10:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73693;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12242:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343331";
                    readonly id: 73694;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12281:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_431_by_1";
                        readonly typeString: "int_const 431";
                    };
                    readonly value: "431";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73698;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12290:59:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ADDRESS_ALREADY_ALLOWLISTED";
                readonly nameLocation: "12316:27:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73696;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12290:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343332";
                    readonly id: 73697;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12346:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_432_by_1";
                        readonly typeString: "int_const 432";
                    };
                    readonly value: "432";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73701;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12355:55:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ADDRESS_NOT_ALLOWLISTED";
                readonly nameLocation: "12381:23:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73699;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12355:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343333";
                    readonly id: 73700;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12407:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_433_by_1";
                        readonly typeString: "int_const 433";
                    };
                    readonly value: "433";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73704;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12416:58:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ERC20_BURN_EXCEEDS_BALANCE";
                readonly nameLocation: "12442:26:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73702;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12416:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343334";
                    readonly id: 73703;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12471:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_434_by_1";
                        readonly typeString: "int_const 434";
                    };
                    readonly value: "434";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73707;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12480:49:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_OPERATION";
                readonly nameLocation: "12506:17:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73705;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12480:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343335";
                    readonly id: 73706;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12526:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_435_by_1";
                        readonly typeString: "int_const 435";
                    };
                    readonly value: "435";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73710;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12535:46:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CODEC_OVERFLOW";
                readonly nameLocation: "12561:14:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73708;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12535:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343336";
                    readonly id: 73709;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12578:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_436_by_1";
                        readonly typeString: "int_const 436";
                    };
                    readonly value: "436";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73713;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12587:48:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "IN_RECOVERY_MODE";
                readonly nameLocation: "12613:16:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73711;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12587:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343337";
                    readonly id: 73712;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12632:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_437_by_1";
                        readonly typeString: "int_const 437";
                    };
                    readonly value: "437";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73716;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12641:52:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "NOT_IN_RECOVERY_MODE";
                readonly nameLocation: "12667:20:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73714;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12641:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343338";
                    readonly id: 73715;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12690:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_438_by_1";
                        readonly typeString: "int_const 438";
                    };
                    readonly value: "438";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73719;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12699:47:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INDUCED_FAILURE";
                readonly nameLocation: "12725:15:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73717;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12699:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343339";
                    readonly id: 73718;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12743:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_439_by_1";
                        readonly typeString: "int_const 439";
                    };
                    readonly value: "439";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73722;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12752:49:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "EXPIRED_SIGNATURE";
                readonly nameLocation: "12778:17:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73720;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12752:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343430";
                    readonly id: 73721;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12798:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_440_by_1";
                        readonly typeString: "int_const 440";
                    };
                    readonly value: "440";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73725;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12807:51:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MALFORMED_SIGNATURE";
                readonly nameLocation: "12833:19:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73723;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12807:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343431";
                    readonly id: 73724;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12855:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_441_by_1";
                        readonly typeString: "int_const 441";
                    };
                    readonly value: "441";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73728;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12864:63:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SAFE_CAST_VALUE_CANT_FIT_UINT64";
                readonly nameLocation: "12890:31:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73726;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12864:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343432";
                    readonly id: 73727;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12924:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_442_by_1";
                        readonly typeString: "int_const 442";
                    };
                    readonly value: "442";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73731;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12933:50:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNHANDLED_FEE_TYPE";
                readonly nameLocation: "12959:18:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73729;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12933:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343433";
                    readonly id: 73730;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "12980:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_443_by_1";
                        readonly typeString: "int_const 443";
                    };
                    readonly value: "443";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73734;
                readonly nodeType: "VariableDeclaration";
                readonly src: "12989:46:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "BURN_FROM_ZERO";
                readonly nameLocation: "13015:14:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73732;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "12989:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "343434";
                    readonly id: 73733;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13032:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_444_by_1";
                        readonly typeString: "int_const 444";
                    };
                    readonly value: "444";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73737;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13055:47:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_POOL_ID";
                readonly nameLocation: "13081:15:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73735;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13055:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353030";
                    readonly id: 73736;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13099:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_500_by_1";
                        readonly typeString: "int_const 500";
                    };
                    readonly value: "500";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73740;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13108:47:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CALLER_NOT_POOL";
                readonly nameLocation: "13134:15:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73738;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13108:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353031";
                    readonly id: 73739;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13152:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_501_by_1";
                        readonly typeString: "int_const 501";
                    };
                    readonly value: "501";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73743;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13161:56:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SENDER_NOT_ASSET_MANAGER";
                readonly nameLocation: "13187:24:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73741;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13161:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353032";
                    readonly id: 73742;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13214:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_502_by_1";
                        readonly typeString: "int_const 502";
                    };
                    readonly value: "502";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73746;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13223:57:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "USER_DOESNT_ALLOW_RELAYER";
                readonly nameLocation: "13249:25:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73744;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13223:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353033";
                    readonly id: 73745;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13277:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_503_by_1";
                        readonly typeString: "int_const 503";
                    };
                    readonly value: "503";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73749;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13286:49:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_SIGNATURE";
                readonly nameLocation: "13312:17:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73747;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13286:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353034";
                    readonly id: 73748;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13332:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_504_by_1";
                        readonly typeString: "int_const 504";
                    };
                    readonly value: "504";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73752;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13341:46:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "EXIT_BELOW_MIN";
                readonly nameLocation: "13367:14:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73750;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13341:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353035";
                    readonly id: 73751;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13384:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_505_by_1";
                        readonly typeString: "int_const 505";
                    };
                    readonly value: "505";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73755;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13393:46:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "JOIN_ABOVE_MAX";
                readonly nameLocation: "13419:14:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73753;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13393:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353036";
                    readonly id: 73754;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13436:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_506_by_1";
                        readonly typeString: "int_const 506";
                    };
                    readonly value: "506";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73758;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13445:42:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SWAP_LIMIT";
                readonly nameLocation: "13471:10:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73756;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13445:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353037";
                    readonly id: 73757;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13484:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_507_by_1";
                        readonly typeString: "int_const 507";
                    };
                    readonly value: "507";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73761;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13493:45:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SWAP_DEADLINE";
                readonly nameLocation: "13519:13:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73759;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13493:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353038";
                    readonly id: 73760;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13535:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_508_by_1";
                        readonly typeString: "int_const 508";
                    };
                    readonly value: "508";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73764;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13544:54:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CANNOT_SWAP_SAME_TOKEN";
                readonly nameLocation: "13570:22:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73762;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13544:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353039";
                    readonly id: 73763;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13595:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_509_by_1";
                        readonly typeString: "int_const 509";
                    };
                    readonly value: "509";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73767;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13604:60:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNKNOWN_AMOUNT_IN_FIRST_SWAP";
                readonly nameLocation: "13630:28:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73765;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13604:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353130";
                    readonly id: 73766;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13661:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_510_by_1";
                        readonly typeString: "int_const 510";
                    };
                    readonly value: "510";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73770;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13670:60:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "MALCONSTRUCTED_MULTIHOP_SWAP";
                readonly nameLocation: "13696:28:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73768;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13670:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353131";
                    readonly id: 73769;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13727:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_511_by_1";
                        readonly typeString: "int_const 511";
                    };
                    readonly value: "511";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73773;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13736:57:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INTERNAL_BALANCE_OVERFLOW";
                readonly nameLocation: "13762:25:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73771;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13736:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353132";
                    readonly id: 73772;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13790:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_512_by_1";
                        readonly typeString: "int_const 512";
                    };
                    readonly value: "512";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73776;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13799:61:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_INTERNAL_BALANCE";
                readonly nameLocation: "13825:29:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73774;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13799:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353133";
                    readonly id: 73775;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13857:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_513_by_1";
                        readonly typeString: "int_const 513";
                    };
                    readonly value: "513";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73779;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13866:60:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_ETH_INTERNAL_BALANCE";
                readonly nameLocation: "13892:28:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73777;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13866:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353134";
                    readonly id: 73778;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13923:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_514_by_1";
                        readonly typeString: "int_const 514";
                    };
                    readonly value: "514";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73782;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13932:57:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INVALID_POST_LOAN_BALANCE";
                readonly nameLocation: "13958:25:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73780;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13932:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353135";
                    readonly id: 73781;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "13986:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_515_by_1";
                        readonly typeString: "int_const 515";
                    };
                    readonly value: "515";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73785;
                readonly nodeType: "VariableDeclaration";
                readonly src: "13995:48:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_ETH";
                readonly nameLocation: "14021:16:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73783;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "13995:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353136";
                    readonly id: 73784;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14040:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_516_by_1";
                        readonly typeString: "int_const 516";
                    };
                    readonly value: "516";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73788;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14049:47:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNALLOCATED_ETH";
                readonly nameLocation: "14075:15:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73786;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14049:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353137";
                    readonly id: 73787;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14093:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_517_by_1";
                        readonly typeString: "int_const 517";
                    };
                    readonly value: "517";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73791;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14102:44:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ETH_TRANSFER";
                readonly nameLocation: "14128:12:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73789;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14102:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353138";
                    readonly id: 73790;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14143:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_518_by_1";
                        readonly typeString: "int_const 518";
                    };
                    readonly value: "518";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73794;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14152:55:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "CANNOT_USE_ETH_SENTINEL";
                readonly nameLocation: "14178:23:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73792;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14152:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353139";
                    readonly id: 73793;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14204:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_519_by_1";
                        readonly typeString: "int_const 519";
                    };
                    readonly value: "519";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73797;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14213:47:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "TOKENS_MISMATCH";
                readonly nameLocation: "14239:15:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73795;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14213:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353230";
                    readonly id: 73796;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14257:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_520_by_1";
                        readonly typeString: "int_const 520";
                    };
                    readonly value: "520";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73800;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14266:52:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "TOKEN_NOT_REGISTERED";
                readonly nameLocation: "14292:20:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73798;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14266:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353231";
                    readonly id: 73799;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14315:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_521_by_1";
                        readonly typeString: "int_const 521";
                    };
                    readonly value: "521";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73803;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14324:56:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "TOKEN_ALREADY_REGISTERED";
                readonly nameLocation: "14350:24:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73801;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14324:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353232";
                    readonly id: 73802;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14377:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_522_by_1";
                        readonly typeString: "int_const 522";
                    };
                    readonly value: "522";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73806;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14386:50:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "TOKENS_ALREADY_SET";
                readonly nameLocation: "14412:18:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73804;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14386:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353233";
                    readonly id: 73805;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14433:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_523_by_1";
                        readonly typeString: "int_const 523";
                    };
                    readonly value: "523";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73809;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14442:55:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "TOKENS_LENGTH_MUST_BE_2";
                readonly nameLocation: "14468:23:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73807;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14442:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353234";
                    readonly id: 73808;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14494:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_524_by_1";
                        readonly typeString: "int_const 524";
                    };
                    readonly value: "524";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73812;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14503:53:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "NONZERO_TOKEN_BALANCE";
                readonly nameLocation: "14529:21:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73810;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14503:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353235";
                    readonly id: 73811;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14553:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_525_by_1";
                        readonly typeString: "int_const 525";
                    };
                    readonly value: "525";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73815;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14562:54:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "BALANCE_TOTAL_OVERFLOW";
                readonly nameLocation: "14588:22:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73813;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14562:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353236";
                    readonly id: 73814;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14613:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_526_by_1";
                        readonly typeString: "int_const 526";
                    };
                    readonly value: "526";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73818;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14622:46:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "POOL_NO_TOKENS";
                readonly nameLocation: "14648:14:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73816;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14622:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353237";
                    readonly id: 73817;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14665:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_527_by_1";
                        readonly typeString: "int_const 527";
                    };
                    readonly value: "527";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73821;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14674:63:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_FLASH_LOAN_BALANCE";
                readonly nameLocation: "14700:31:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73819;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14674:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "353238";
                    readonly id: 73820;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14734:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_528_by_1";
                        readonly typeString: "int_const 528";
                    };
                    readonly value: "528";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73824;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14756:60:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SWAP_FEE_PERCENTAGE_TOO_HIGH";
                readonly nameLocation: "14782:28:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73822;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14756:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "363030";
                    readonly id: 73823;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14813:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_600_by_1";
                        readonly typeString: "int_const 600";
                    };
                    readonly value: "600";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73827;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14822:66:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "FLASH_LOAN_FEE_PERCENTAGE_TOO_HIGH";
                readonly nameLocation: "14848:34:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73825;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14822:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "363031";
                    readonly id: 73826;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14885:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_601_by_1";
                        readonly typeString: "int_const 601";
                    };
                    readonly value: "601";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73830;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14894:66:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "INSUFFICIENT_FLASH_LOAN_FEE_AMOUNT";
                readonly nameLocation: "14920:34:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73828;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14894:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "363032";
                    readonly id: 73829;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "14957:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_602_by_1";
                        readonly typeString: "int_const 602";
                    };
                    readonly value: "602";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73833;
                readonly nodeType: "VariableDeclaration";
                readonly src: "14966:59:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "AUM_FEE_PERCENTAGE_TOO_HIGH";
                readonly nameLocation: "14992:27:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73831;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "14966:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "363033";
                    readonly id: 73832;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "15022:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_603_by_1";
                        readonly typeString: "int_const 603";
                    };
                    readonly value: "603";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73836;
                readonly nodeType: "VariableDeclaration";
                readonly src: "15051:64:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SPLITTER_FEE_PERCENTAGE_TOO_HIGH";
                readonly nameLocation: "15077:32:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73834;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "15051:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "373030";
                    readonly id: 73835;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "15112:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_700_by_1";
                        readonly typeString: "int_const 700";
                    };
                    readonly value: "700";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73839;
                readonly nodeType: "VariableDeclaration";
                readonly src: "15134:45:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "UNIMPLEMENTED";
                readonly nameLocation: "15160:13:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73837;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "15134:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "393938";
                    readonly id: 73838;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "15176:3:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_998_by_1";
                        readonly typeString: "int_const 998";
                    };
                    readonly value: "998";
                };
                readonly visibility: "internal";
            }, {
                readonly id: 73842;
                readonly nodeType: "VariableDeclaration";
                readonly src: "15185:49:176";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "SHOULD_NOT_HAPPEN";
                readonly nameLocation: "15211:17:176";
                readonly scope: 73843;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 73840;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "15185:7:176";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "393939";
                    readonly id: 73841;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "15231:3:176";
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
            readonly linearizedBaseContracts: readonly [73843];
            readonly name: "BalancerErrors";
            readonly nameLocation: "5214:14:176";
            readonly scope: 73844;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "GPL-3.0-or-later";
    };
    readonly id: 176;
};
//# sourceMappingURL=BalancerErrors.d.ts.map