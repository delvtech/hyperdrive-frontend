export declare const ReentrancyGuard: {
    readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ReentrancyGuardReentrantCall";
        readonly type: "error";
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
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Contract module that helps prevent reentrant calls to a function. Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier available, which can be applied to functions to make sure there are no nested (reentrant) calls to them. Note that because there is a single `nonReentrant` guard, functions marked as `nonReentrant` may not call one another. This can be worked around by making those functions `private`, and then adding `external` `nonReentrant` entry points to them. TIP: If you would like to learn more about reentrancy and alternative ways to protect against it, check out our blog post https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":\"ReentrancyGuard\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ReentrancyGuardReentrantCall";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": "ReentrancyGuard";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                readonly keccak256: "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236";
                readonly urls: readonly ["bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02", "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol";
        readonly id: 71566;
        readonly exportedSymbols: {
            readonly ReentrancyGuard: readonly [71565];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "109:3131:169";
        readonly nodes: readonly [{
            readonly id: 71498;
            readonly nodeType: "PragmaDirective";
            readonly src: "109:24:169";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "^", "0.8", ".20"];
        }, {
            readonly id: 71565;
            readonly nodeType: "ContractDefinition";
            readonly src: "886:2353:169";
            readonly nodes: readonly [{
                readonly id: 71502;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1674:40:169";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "NOT_ENTERED";
                readonly nameLocation: "1699:11:169";
                readonly scope: 71565;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 71500;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1674:7:169";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "31";
                    readonly id: 71501;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "1713:1:169";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_1_by_1";
                        readonly typeString: "int_const 1";
                    };
                    readonly value: "1";
                };
                readonly visibility: "private";
            }, {
                readonly id: 71505;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1720:36:169";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ENTERED";
                readonly nameLocation: "1745:7:169";
                readonly scope: 71565;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 71503;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1720:7:169";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "32";
                    readonly id: 71504;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "1755:1:169";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_2_by_1";
                        readonly typeString: "int_const 2";
                    };
                    readonly value: "2";
                };
                readonly visibility: "private";
            }, {
                readonly id: 71507;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1763:23:169";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_status";
                readonly nameLocation: "1779:7:169";
                readonly scope: 71565;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 71506;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1763:7:169";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 71510;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1850:37:169";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 71508;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1793:52:169";
                    readonly text: " @dev Unauthorized reentrant call.";
                };
                readonly errorSelector: "3ee5aeb5";
                readonly name: "ReentrancyGuardReentrantCall";
                readonly nameLocation: "1856:28:169";
                readonly parameters: {
                    readonly id: 71509;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1884:2:169";
                };
            }, {
                readonly id: 71518;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1893:52:169";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71517;
                    readonly nodeType: "Block";
                    readonly src: "1907:38:169";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 71515;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 71513;
                                readonly name: "_status";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71507;
                                readonly src: "1917:7:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 71514;
                                readonly name: "NOT_ENTERED";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71502;
                                readonly src: "1927:11:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "1917:21:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 71516;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1917:21:169";
                    }];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 71511;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1904:2:169";
                };
                readonly returnParameters: {
                    readonly id: 71512;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1907:0:169";
                };
                readonly scope: 71565;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71529;
                readonly nodeType: "ModifierDefinition";
                readonly src: "2322:103:169";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71528;
                    readonly nodeType: "Block";
                    readonly src: "2346:79:169";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 71521;
                                readonly name: "_nonReentrantBefore";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71545;
                                readonly src: "2356:19:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 71522;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2356:21:169";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 71523;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2356:21:169";
                    }, {
                        readonly id: 71524;
                        readonly nodeType: "PlaceholderStatement";
                        readonly src: "2387:1:169";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 71525;
                                readonly name: "_nonReentrantAfter";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71553;
                                readonly src: "2398:18:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 71526;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2398:20:169";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 71527;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2398:20:169";
                    }];
                };
                readonly documentation: {
                    readonly id: 71519;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1951:366:169";
                    readonly text: " @dev Prevents a contract from calling itself, directly or indirectly.\n Calling a `nonReentrant` function from another `nonReentrant`\n function is not supported. It is possible to prevent this from happening\n by making the `nonReentrant` function external, and making it call a\n `private` function that does the actual work.";
                };
                readonly name: "nonReentrant";
                readonly nameLocation: "2331:12:169";
                readonly parameters: {
                    readonly id: 71520;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2343:2:169";
                };
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71545;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2431:307:169";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71544;
                    readonly nodeType: "Block";
                    readonly src: "2470:268:169";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 71534;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 71532;
                                readonly name: "_status";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71507;
                                readonly src: "2558:7:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 71533;
                                readonly name: "ENTERED";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71505;
                                readonly src: "2569:7:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "2558:18:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 71539;
                        readonly nodeType: "IfStatement";
                        readonly src: "2554:86:169";
                        readonly trueBody: {
                            readonly id: 71538;
                            readonly nodeType: "Block";
                            readonly src: "2578:62:169";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly id: 71535;
                                        readonly name: "ReentrancyGuardReentrantCall";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71510;
                                        readonly src: "2599:28:169";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 71536;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2599:30:169";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 71537;
                                readonly nodeType: "RevertStatement";
                                readonly src: "2592:37:169";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 71542;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 71540;
                                readonly name: "_status";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71507;
                                readonly src: "2714:7:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 71541;
                                readonly name: "ENTERED";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71505;
                                readonly src: "2724:7:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "2714:17:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 71543;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2714:17:169";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_nonReentrantBefore";
                readonly nameLocation: "2440:19:169";
                readonly parameters: {
                    readonly id: 71530;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2459:2:169";
                };
                readonly returnParameters: {
                    readonly id: 71531;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2470:0:169";
                };
                readonly scope: 71565;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 71553;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2744:208:169";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71552;
                    readonly nodeType: "Block";
                    readonly src: "2782:170:169";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 71550;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 71548;
                                readonly name: "_status";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71507;
                                readonly src: "2924:7:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 71549;
                                readonly name: "NOT_ENTERED";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71502;
                                readonly src: "2934:11:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "2924:21:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 71551;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2924:21:169";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_nonReentrantAfter";
                readonly nameLocation: "2753:18:169";
                readonly parameters: {
                    readonly id: 71546;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2771:2:169";
                };
                readonly returnParameters: {
                    readonly id: 71547;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2782:0:169";
                };
                readonly scope: 71565;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 71564;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3131:106:169";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71563;
                    readonly nodeType: "Block";
                    readonly src: "3195:42:169";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 71561;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 71559;
                                readonly name: "_status";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71507;
                                readonly src: "3212:7:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 71560;
                                readonly name: "ENTERED";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71505;
                                readonly src: "3223:7:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "3212:18:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 71558;
                        readonly id: 71562;
                        readonly nodeType: "Return";
                        readonly src: "3205:25:169";
                    }];
                };
                readonly documentation: {
                    readonly id: 71554;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2958:168:169";
                    readonly text: " @dev Returns true if the reentrancy guard is currently set to \"entered\", which indicates there is a\n `nonReentrant` function in the call stack.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_reentrancyGuardEntered";
                readonly nameLocation: "3140:23:169";
                readonly parameters: {
                    readonly id: 71555;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3163:2:169";
                };
                readonly returnParameters: {
                    readonly id: 71558;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71557;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71564;
                        readonly src: "3189:4:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 71556;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3189:4:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3188:6:169";
                };
                readonly scope: 71565;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [];
            readonly canonicalName: "ReentrancyGuard";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 71499;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "135:750:169";
                readonly text: " @dev Contract module that helps prevent reentrant calls to a function.\n Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier\n available, which can be applied to functions to make sure there are no nested\n (reentrant) calls to them.\n Note that because there is a single `nonReentrant` guard, functions marked as\n `nonReentrant` may not call one another. This can be worked around by making\n those functions `private`, and then adding `external` `nonReentrant` entry\n points to them.\n TIP: If you would like to learn more about reentrancy and alternative ways\n to protect against it, check out our blog post\n https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [71565];
            readonly name: "ReentrancyGuard";
            readonly nameLocation: "904:15:169";
            readonly scope: 71566;
            readonly usedErrors: readonly [71510];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 169;
};
//# sourceMappingURL=ReentrancyGuard.d.ts.map