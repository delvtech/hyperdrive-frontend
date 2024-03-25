export declare const ReentrancyGuard: {
    readonly abi: readonly [{
        readonly type: "error";
        readonly name: "ReentrancyGuardReentrantCall";
        readonly inputs: readonly [];
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
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Contract module that helps prevent reentrant calls to a function. Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier available, which can be applied to functions to make sure there are no nested (reentrant) calls to them. Note that because there is a single `nonReentrant` guard, functions marked as `nonReentrant` may not call one another. This can be worked around by making those functions `private`, and then adding `external` `nonReentrant` entry points to them. TIP: If you would like to learn more about reentrancy and alternative ways to protect against it, check out our blog post https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":\"ReentrancyGuard\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
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
        readonly id: 72174;
        readonly exportedSymbols: {
            readonly ReentrancyGuard: readonly [72173];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "109:3131:175";
        readonly nodes: readonly [{
            readonly id: 72106;
            readonly nodeType: "PragmaDirective";
            readonly src: "109:24:175";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "^", "0.8", ".20"];
        }, {
            readonly id: 72173;
            readonly nodeType: "ContractDefinition";
            readonly src: "886:2353:175";
            readonly nodes: readonly [{
                readonly id: 72110;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1674:40:175";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "NOT_ENTERED";
                readonly nameLocation: "1699:11:175";
                readonly scope: 72173;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 72108;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1674:7:175";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "31";
                    readonly id: 72109;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "1713:1:175";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_1_by_1";
                        readonly typeString: "int_const 1";
                    };
                    readonly value: "1";
                };
                readonly visibility: "private";
            }, {
                readonly id: 72113;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1720:36:175";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "ENTERED";
                readonly nameLocation: "1745:7:175";
                readonly scope: 72173;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 72111;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1720:7:175";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly value: {
                    readonly hexValue: "32";
                    readonly id: 72112;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "number";
                    readonly lValueRequested: false;
                    readonly nodeType: "Literal";
                    readonly src: "1755:1:175";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_rational_2_by_1";
                        readonly typeString: "int_const 2";
                    };
                    readonly value: "2";
                };
                readonly visibility: "private";
            }, {
                readonly id: 72115;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1763:23:175";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_status";
                readonly nameLocation: "1779:7:175";
                readonly scope: 72173;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 72114;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1763:7:175";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 72118;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1850:37:175";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 72116;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1793:52:175";
                    readonly text: " @dev Unauthorized reentrant call.";
                };
                readonly errorSelector: "3ee5aeb5";
                readonly name: "ReentrancyGuardReentrantCall";
                readonly nameLocation: "1856:28:175";
                readonly parameters: {
                    readonly id: 72117;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1884:2:175";
                };
            }, {
                readonly id: 72126;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1893:52:175";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72125;
                    readonly nodeType: "Block";
                    readonly src: "1907:38:175";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 72123;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 72121;
                                readonly name: "_status";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72115;
                                readonly src: "1917:7:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 72122;
                                readonly name: "NOT_ENTERED";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72110;
                                readonly src: "1927:11:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "1917:21:175";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 72124;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1917:21:175";
                    }];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 72119;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1904:2:175";
                };
                readonly returnParameters: {
                    readonly id: 72120;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1907:0:175";
                };
                readonly scope: 72173;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 72137;
                readonly nodeType: "ModifierDefinition";
                readonly src: "2322:103:175";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72136;
                    readonly nodeType: "Block";
                    readonly src: "2346:79:175";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 72129;
                                readonly name: "_nonReentrantBefore";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72153;
                                readonly src: "2356:19:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 72130;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2356:21:175";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72131;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2356:21:175";
                    }, {
                        readonly id: 72132;
                        readonly nodeType: "PlaceholderStatement";
                        readonly src: "2387:1:175";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 72133;
                                readonly name: "_nonReentrantAfter";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72161;
                                readonly src: "2398:18:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$__$returns$__$";
                                    readonly typeString: "function ()";
                                };
                            };
                            readonly id: 72134;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2398:20:175";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 72135;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2398:20:175";
                    }];
                };
                readonly documentation: {
                    readonly id: 72127;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1951:366:175";
                    readonly text: " @dev Prevents a contract from calling itself, directly or indirectly.\n Calling a `nonReentrant` function from another `nonReentrant`\n function is not supported. It is possible to prevent this from happening\n by making the `nonReentrant` function external, and making it call a\n `private` function that does the actual work.";
                };
                readonly name: "nonReentrant";
                readonly nameLocation: "2331:12:175";
                readonly parameters: {
                    readonly id: 72128;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2343:2:175";
                };
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 72153;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2431:307:175";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72152;
                    readonly nodeType: "Block";
                    readonly src: "2470:268:175";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 72142;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 72140;
                                readonly name: "_status";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72115;
                                readonly src: "2558:7:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 72141;
                                readonly name: "ENTERED";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72113;
                                readonly src: "2569:7:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "2558:18:175";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 72147;
                        readonly nodeType: "IfStatement";
                        readonly src: "2554:86:175";
                        readonly trueBody: {
                            readonly id: 72146;
                            readonly nodeType: "Block";
                            readonly src: "2578:62:175";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly id: 72143;
                                        readonly name: "ReentrancyGuardReentrantCall";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 72118;
                                        readonly src: "2599:28:175";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 72144;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2599:30:175";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 72145;
                                readonly nodeType: "RevertStatement";
                                readonly src: "2592:37:175";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 72150;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 72148;
                                readonly name: "_status";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72115;
                                readonly src: "2714:7:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 72149;
                                readonly name: "ENTERED";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72113;
                                readonly src: "2724:7:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "2714:17:175";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 72151;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2714:17:175";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_nonReentrantBefore";
                readonly nameLocation: "2440:19:175";
                readonly parameters: {
                    readonly id: 72138;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2459:2:175";
                };
                readonly returnParameters: {
                    readonly id: 72139;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2470:0:175";
                };
                readonly scope: 72173;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 72161;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2744:208:175";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72160;
                    readonly nodeType: "Block";
                    readonly src: "2782:170:175";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 72158;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 72156;
                                readonly name: "_status";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72115;
                                readonly src: "2924:7:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 72157;
                                readonly name: "NOT_ENTERED";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72110;
                                readonly src: "2934:11:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "2924:21:175";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 72159;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2924:21:175";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_nonReentrantAfter";
                readonly nameLocation: "2753:18:175";
                readonly parameters: {
                    readonly id: 72154;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2771:2:175";
                };
                readonly returnParameters: {
                    readonly id: 72155;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2782:0:175";
                };
                readonly scope: 72173;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 72172;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3131:106:175";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 72171;
                    readonly nodeType: "Block";
                    readonly src: "3195:42:175";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 72169;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 72167;
                                readonly name: "_status";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72115;
                                readonly src: "3212:7:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 72168;
                                readonly name: "ENTERED";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 72113;
                                readonly src: "3223:7:175";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "3212:18:175";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 72166;
                        readonly id: 72170;
                        readonly nodeType: "Return";
                        readonly src: "3205:25:175";
                    }];
                };
                readonly documentation: {
                    readonly id: 72162;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2958:168:175";
                    readonly text: " @dev Returns true if the reentrancy guard is currently set to \"entered\", which indicates there is a\n `nonReentrant` function in the call stack.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_reentrancyGuardEntered";
                readonly nameLocation: "3140:23:175";
                readonly parameters: {
                    readonly id: 72163;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3163:2:175";
                };
                readonly returnParameters: {
                    readonly id: 72166;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 72165;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 72172;
                        readonly src: "3189:4:175";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 72164;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3189:4:175";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3188:6:175";
                };
                readonly scope: 72173;
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
                readonly id: 72107;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "135:750:175";
                readonly text: " @dev Contract module that helps prevent reentrant calls to a function.\n Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier\n available, which can be applied to functions to make sure there are no nested\n (reentrant) calls to them.\n Note that because there is a single `nonReentrant` guard, functions marked as\n `nonReentrant` may not call one another. This can be worked around by making\n those functions `private`, and then adding `external` `nonReentrant` entry\n points to them.\n TIP: If you would like to learn more about reentrancy and alternative ways\n to protect against it, check out our blog post\n https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [72173];
            readonly name: "ReentrancyGuard";
            readonly nameLocation: "904:15:175";
            readonly scope: 72174;
            readonly usedErrors: readonly [72118];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 175;
};
//# sourceMappingURL=ReentrancyGuard.d.ts.map