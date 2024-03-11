export declare const Address: {
    readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "AddressEmptyCode";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "AddressInsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FailedInnerCall";
        readonly type: "error";
    }];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122073ffb64776e369ef99b659be8693e4729a17c1ece892eaba16a7799d058ad05164736f6c63430008140033";
        readonly sourceMap: "195:6066:119:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;195:6066:119;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122073ffb64776e369ef99b659be8693e4729a17c1ece892eaba16a7799d058ad05164736f6c63430008140033";
        readonly sourceMap: "195:6066:119:-:0;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"AddressEmptyCode\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"AddressInsufficientBalance\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FailedInnerCall\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Collection of functions related to the address type\",\"errors\":{\"AddressEmptyCode(address)\":[{\"details\":\"There's no code at `target` (it is not a contract).\"}],\"AddressInsufficientBalance(address)\":[{\"details\":\"The ETH balance of the account is not enough to perform the operation.\"}],\"FailedInnerCall()\":[{\"details\":\"A call to an address target failed. The target may have reverted.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":\"Address\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "target";
                    readonly type: "address";
                }];
                readonly type: "error";
                readonly name: "AddressEmptyCode";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                }];
                readonly type: "error";
                readonly name: "AddressInsufficientBalance";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "FailedInnerCall";
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
                readonly "lib/openzeppelin-contracts/contracts/utils/Address.sol": "Address";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
                readonly keccak256: "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721";
                readonly urls: readonly ["bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245", "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/openzeppelin-contracts/contracts/utils/Address.sol";
        readonly id: 66960;
        readonly exportedSymbols: {
            readonly Address: readonly [66959];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "101:6161:119";
        readonly nodes: readonly [{
            readonly id: 66708;
            readonly nodeType: "PragmaDirective";
            readonly src: "101:24:119";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "^", "0.8", ".20"];
        }, {
            readonly id: 66959;
            readonly nodeType: "ContractDefinition";
            readonly src: "195:6066:119";
            readonly nodes: readonly [{
                readonly id: 66714;
                readonly nodeType: "ErrorDefinition";
                readonly src: "316:50:119";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 66710;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "217:94:119";
                    readonly text: " @dev The ETH balance of the account is not enough to perform the operation.";
                };
                readonly errorSelector: "cd786059";
                readonly name: "AddressInsufficientBalance";
                readonly nameLocation: "322:26:119";
                readonly parameters: {
                    readonly id: 66713;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66712;
                        readonly mutability: "mutable";
                        readonly name: "account";
                        readonly nameLocation: "357:7:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66714;
                        readonly src: "349:15:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66711;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "349:7:119";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "348:17:119";
                };
            }, {
                readonly id: 66719;
                readonly nodeType: "ErrorDefinition";
                readonly src: "452:39:119";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 66715;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "372:75:119";
                    readonly text: " @dev There's no code at `target` (it is not a contract).";
                };
                readonly errorSelector: "9996b315";
                readonly name: "AddressEmptyCode";
                readonly nameLocation: "458:16:119";
                readonly parameters: {
                    readonly id: 66718;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66717;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "483:6:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66719;
                        readonly src: "475:14:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66716;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "475:7:119";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "474:16:119";
                };
            }, {
                readonly id: 66722;
                readonly nodeType: "ErrorDefinition";
                readonly src: "591:24:119";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 66720;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "497:89:119";
                    readonly text: " @dev A call to an address target failed. The target may have reverted.";
                };
                readonly errorSelector: "1425ea42";
                readonly name: "FailedInnerCall";
                readonly nameLocation: "597:15:119";
                readonly parameters: {
                    readonly id: 66721;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "612:2:119";
                };
            }, {
                readonly id: 66763;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1531:331:119";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66762;
                    readonly nodeType: "Block";
                    readonly src: "1602:260:119";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 66736;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 66732;
                                        readonly name: "this";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -28;
                                        readonly src: "1624:4:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_Address_$66959";
                                            readonly typeString: "library Address";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_Address_$66959";
                                            readonly typeString: "library Address";
                                        }];
                                        readonly id: 66731;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "1616:7:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 66730;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "1616:7:119";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 66733;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1616:13:119";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 66734;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1630:7:119";
                                readonly memberName: "balance";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1616:21:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 66735;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66727;
                                readonly src: "1640:6:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "1616:30:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 66745;
                        readonly nodeType: "IfStatement";
                        readonly src: "1612:109:119";
                        readonly trueBody: {
                            readonly id: 66744;
                            readonly nodeType: "Block";
                            readonly src: "1648:73:119";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 66740;
                                            readonly name: "this";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -28;
                                            readonly src: "1704:4:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_Address_$66959";
                                                readonly typeString: "library Address";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_Address_$66959";
                                                readonly typeString: "library Address";
                                            }];
                                            readonly id: 66739;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "1696:7:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 66738;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "1696:7:119";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 66741;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "1696:13:119";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        }];
                                        readonly id: 66737;
                                        readonly name: "AddressInsufficientBalance";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66714;
                                        readonly src: "1669:26:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$_t_address_$returns$__$";
                                            readonly typeString: "function (address) pure";
                                        };
                                    };
                                    readonly id: 66742;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1669:41:119";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 66743;
                                readonly nodeType: "RevertStatement";
                                readonly src: "1662:48:119";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [66747, null];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 66747;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "1737:7:119";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 66762;
                            readonly src: "1732:12:119";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 66746;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1732:4:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, null];
                        readonly id: 66754;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly hexValue: "";
                                readonly id: 66752;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "1780:2:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                    readonly typeString: "literal_string \"\"";
                                };
                                readonly value: "";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                    readonly typeString: "literal_string \"\"";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                        readonly typeString: "literal_string \"\"";
                                    }];
                                    readonly expression: {
                                        readonly id: 66748;
                                        readonly name: "recipient";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66725;
                                        readonly src: "1750:9:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address_payable";
                                            readonly typeString: "address payable";
                                        };
                                    };
                                    readonly id: 66749;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1760:4:119";
                                    readonly memberName: "call";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "1750:14:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                    };
                                };
                                readonly id: 66751;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly names: readonly ["value"];
                                readonly nodeType: "FunctionCallOptions";
                                readonly options: readonly [{
                                    readonly id: 66750;
                                    readonly name: "amount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66727;
                                    readonly src: "1772:6:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly src: "1750:29:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value";
                                    readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 66753;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1750:33:119";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1731:52:119";
                    }, {
                        readonly condition: {
                            readonly id: 66756;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "1797:8:119";
                            readonly subExpression: {
                                readonly id: 66755;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66747;
                                readonly src: "1798:7:119";
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
                        readonly id: 66761;
                        readonly nodeType: "IfStatement";
                        readonly src: "1793:63:119";
                        readonly trueBody: {
                            readonly id: 66760;
                            readonly nodeType: "Block";
                            readonly src: "1807:49:119";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly id: 66757;
                                        readonly name: "FailedInnerCall";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66722;
                                        readonly src: "1828:15:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 66758;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1828:17:119";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 66759;
                                readonly nodeType: "RevertStatement";
                                readonly src: "1821:24:119";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 66723;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "621:905:119";
                    readonly text: " @dev Replacement for Solidity's `transfer`: sends `amount` wei to\n `recipient`, forwarding all available gas and reverting on errors.\n https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\n of certain opcodes, possibly making contracts go over the 2300 gas limit\n imposed by `transfer`, making them unable to receive funds via\n `transfer`. {sendValue} removes this limitation.\n https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].\n IMPORTANT: because control is transferred to `recipient`, care must be\n taken to not create reentrancy vulnerabilities. Consider using\n {ReentrancyGuard} or the\n https://solidity.readthedocs.io/en/v0.8.20/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "sendValue";
                readonly nameLocation: "1540:9:119";
                readonly parameters: {
                    readonly id: 66728;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66725;
                        readonly mutability: "mutable";
                        readonly name: "recipient";
                        readonly nameLocation: "1566:9:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66763;
                        readonly src: "1550:25:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address_payable";
                            readonly typeString: "address payable";
                        };
                        readonly typeName: {
                            readonly id: 66724;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1550:15:119";
                            readonly stateMutability: "payable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address_payable";
                                readonly typeString: "address payable";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66727;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1585:6:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66763;
                        readonly src: "1577:14:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 66726;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1577:7:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1549:43:119";
                };
                readonly returnParameters: {
                    readonly id: 66729;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1602:0:119";
                };
                readonly scope: 66959;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 66780;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2705:151:119";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66779;
                    readonly nodeType: "Block";
                    readonly src: "2794:62:119";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 66774;
                                readonly name: "target";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66766;
                                readonly src: "2833:6:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 66775;
                                readonly name: "data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66768;
                                readonly src: "2841:4:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }, {
                                readonly hexValue: "30";
                                readonly id: 66776;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2847:1:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }, {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                }];
                                readonly id: 66773;
                                readonly name: "functionCallWithValue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66826;
                                readonly src: "2811:21:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address,bytes memory,uint256) returns (bytes memory)";
                                };
                            };
                            readonly id: 66777;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2811:38:119";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 66772;
                        readonly id: 66778;
                        readonly nodeType: "Return";
                        readonly src: "2804:45:119";
                    }];
                };
                readonly documentation: {
                    readonly id: 66764;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1868:832:119";
                    readonly text: " @dev Performs a Solidity function call using a low level `call`. A\n plain `call` is an unsafe replacement for a function call: use this\n function instead.\n If `target` reverts with a revert reason or custom error, it is bubbled\n up by this function (like regular Solidity function calls). However, if\n the call reverted with no returned reason, this function reverts with a\n {FailedInnerCall} error.\n Returns the raw returned data. To convert to the expected return value,\n use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\n Requirements:\n - `target` must be a contract.\n - calling `target` with `data` must not revert.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "functionCall";
                readonly nameLocation: "2714:12:119";
                readonly parameters: {
                    readonly id: 66769;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66766;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "2735:6:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66780;
                        readonly src: "2727:14:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66765;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2727:7:119";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66768;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "2756:4:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66780;
                        readonly src: "2743:17:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 66767;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2743:5:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2726:35:119";
                };
                readonly returnParameters: {
                    readonly id: 66772;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66771;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66780;
                        readonly src: "2780:12:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 66770;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2780:5:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2779:14:119";
                };
                readonly scope: 66959;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 66826;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3180:392:119";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66825;
                    readonly nodeType: "Block";
                    readonly src: "3293:279:119";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 66798;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 66794;
                                        readonly name: "this";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -28;
                                        readonly src: "3315:4:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_Address_$66959";
                                            readonly typeString: "library Address";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_Address_$66959";
                                            readonly typeString: "library Address";
                                        }];
                                        readonly id: 66793;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "3307:7:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 66792;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "3307:7:119";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 66795;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3307:13:119";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 66796;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3321:7:119";
                                readonly memberName: "balance";
                                readonly nodeType: "MemberAccess";
                                readonly src: "3307:21:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 66797;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66787;
                                readonly src: "3331:5:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "3307:29:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 66807;
                        readonly nodeType: "IfStatement";
                        readonly src: "3303:108:119";
                        readonly trueBody: {
                            readonly id: 66806;
                            readonly nodeType: "Block";
                            readonly src: "3338:73:119";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 66802;
                                            readonly name: "this";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -28;
                                            readonly src: "3394:4:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_Address_$66959";
                                                readonly typeString: "library Address";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_Address_$66959";
                                                readonly typeString: "library Address";
                                            }];
                                            readonly id: 66801;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "3386:7:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 66800;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "3386:7:119";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 66803;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3386:13:119";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        }];
                                        readonly id: 66799;
                                        readonly name: "AddressInsufficientBalance";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66714;
                                        readonly src: "3359:26:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$_t_address_$returns$__$";
                                            readonly typeString: "function (address) pure";
                                        };
                                    };
                                    readonly id: 66804;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3359:41:119";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 66805;
                                readonly nodeType: "RevertStatement";
                                readonly src: "3352:48:119";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [66809, 66811];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 66809;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "3426:7:119";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 66825;
                            readonly src: "3421:12:119";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 66808;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3421:4:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 66811;
                            readonly mutability: "mutable";
                            readonly name: "returndata";
                            readonly nameLocation: "3448:10:119";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 66825;
                            readonly src: "3435:23:119";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 66810;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3435:5:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 66818;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 66816;
                                readonly name: "data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66785;
                                readonly src: "3488:4:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly expression: {
                                        readonly id: 66812;
                                        readonly name: "target";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66783;
                                        readonly src: "3462:6:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly id: 66813;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3469:4:119";
                                    readonly memberName: "call";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "3462:11:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                    };
                                };
                                readonly id: 66815;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly names: readonly ["value"];
                                readonly nodeType: "FunctionCallOptions";
                                readonly options: readonly [{
                                    readonly id: 66814;
                                    readonly name: "value";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66787;
                                    readonly src: "3481:5:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly src: "3462:25:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value";
                                    readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 66817;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3462:31:119";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3420:73:119";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 66820;
                                readonly name: "target";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66783;
                                readonly src: "3537:6:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 66821;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66809;
                                readonly src: "3545:7:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly id: 66822;
                                readonly name: "returndata";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66811;
                                readonly src: "3554:10:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly id: 66819;
                                readonly name: "verifyCallResultFromTarget";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66918;
                                readonly src: "3510:26:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address,bool,bytes memory) view returns (bytes memory)";
                                };
                            };
                            readonly id: 66823;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3510:55:119";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 66791;
                        readonly id: 66824;
                        readonly nodeType: "Return";
                        readonly src: "3503:62:119";
                    }];
                };
                readonly documentation: {
                    readonly id: 66781;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2862:313:119";
                    readonly text: " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but also transferring `value` wei to `target`.\n Requirements:\n - the calling contract must have an ETH balance of at least `value`.\n - the called Solidity function must be `payable`.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "functionCallWithValue";
                readonly nameLocation: "3189:21:119";
                readonly parameters: {
                    readonly id: 66788;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66783;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "3219:6:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66826;
                        readonly src: "3211:14:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66782;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3211:7:119";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66785;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "3240:4:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66826;
                        readonly src: "3227:17:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 66784;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3227:5:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66787;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3254:5:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66826;
                        readonly src: "3246:13:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 66786;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3246:7:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3210:50:119";
                };
                readonly returnParameters: {
                    readonly id: 66791;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66790;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66826;
                        readonly src: "3279:12:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 66789;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3279:5:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3278:14:119";
                };
                readonly scope: 66959;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 66852;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3711:254:119";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66851;
                    readonly nodeType: "Block";
                    readonly src: "3811:154:119";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [66837, 66839];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 66837;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "3827:7:119";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 66851;
                            readonly src: "3822:12:119";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 66836;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3822:4:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 66839;
                            readonly mutability: "mutable";
                            readonly name: "returndata";
                            readonly nameLocation: "3849:10:119";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 66851;
                            readonly src: "3836:23:119";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 66838;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3836:5:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 66844;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 66842;
                                readonly name: "data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66831;
                                readonly src: "3881:4:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly expression: {
                                    readonly id: 66840;
                                    readonly name: "target";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66829;
                                    readonly src: "3863:6:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 66841;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3870:10:119";
                                readonly memberName: "staticcall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "3863:17:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) view returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 66843;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3863:23:119";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3821:65:119";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 66846;
                                readonly name: "target";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66829;
                                readonly src: "3930:6:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 66847;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66837;
                                readonly src: "3938:7:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly id: 66848;
                                readonly name: "returndata";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66839;
                                readonly src: "3947:10:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly id: 66845;
                                readonly name: "verifyCallResultFromTarget";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66918;
                                readonly src: "3903:26:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address,bool,bytes memory) view returns (bytes memory)";
                                };
                            };
                            readonly id: 66849;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3903:55:119";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 66835;
                        readonly id: 66850;
                        readonly nodeType: "Return";
                        readonly src: "3896:62:119";
                    }];
                };
                readonly documentation: {
                    readonly id: 66827;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3578:128:119";
                    readonly text: " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a static call.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "functionStaticCall";
                readonly nameLocation: "3720:18:119";
                readonly parameters: {
                    readonly id: 66832;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66829;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "3747:6:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66852;
                        readonly src: "3739:14:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66828;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3739:7:119";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66831;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "3768:4:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66852;
                        readonly src: "3755:17:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 66830;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3755:5:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3738:35:119";
                };
                readonly returnParameters: {
                    readonly id: 66835;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66834;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66852;
                        readonly src: "3797:12:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 66833;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3797:5:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3796:14:119";
                };
                readonly scope: 66959;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 66878;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4106:253:119";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66877;
                    readonly nodeType: "Block";
                    readonly src: "4203:156:119";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [66863, 66865];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 66863;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "4219:7:119";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 66877;
                            readonly src: "4214:12:119";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 66862;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4214:4:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 66865;
                            readonly mutability: "mutable";
                            readonly name: "returndata";
                            readonly nameLocation: "4241:10:119";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 66877;
                            readonly src: "4228:23:119";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 66864;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4228:5:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 66870;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 66868;
                                readonly name: "data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66857;
                                readonly src: "4275:4:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly expression: {
                                    readonly id: 66866;
                                    readonly name: "target";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66855;
                                    readonly src: "4255:6:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 66867;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4262:12:119";
                                readonly memberName: "delegatecall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "4255:19:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 66869;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4255:25:119";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4213:67:119";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 66872;
                                readonly name: "target";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66855;
                                readonly src: "4324:6:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 66873;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66863;
                                readonly src: "4332:7:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly id: 66874;
                                readonly name: "returndata";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66865;
                                readonly src: "4341:10:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly id: 66871;
                                readonly name: "verifyCallResultFromTarget";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66918;
                                readonly src: "4297:26:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address,bool,bytes memory) view returns (bytes memory)";
                                };
                            };
                            readonly id: 66875;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4297:55:119";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 66861;
                        readonly id: 66876;
                        readonly nodeType: "Return";
                        readonly src: "4290:62:119";
                    }];
                };
                readonly documentation: {
                    readonly id: 66853;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3971:130:119";
                    readonly text: " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a delegate call.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "functionDelegateCall";
                readonly nameLocation: "4115:20:119";
                readonly parameters: {
                    readonly id: 66858;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66855;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "4144:6:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66878;
                        readonly src: "4136:14:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66854;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4136:7:119";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66857;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "4165:4:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66878;
                        readonly src: "4152:17:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 66856;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4152:5:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4135:35:119";
                };
                readonly returnParameters: {
                    readonly id: 66861;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66860;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66878;
                        readonly src: "4189:12:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 66859;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4189:5:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4188:14:119";
                };
                readonly scope: 66959;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 66918;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4625:582:119";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66917;
                    readonly nodeType: "Block";
                    readonly src: "4783:424:119";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly id: 66891;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "4797:8:119";
                            readonly subExpression: {
                                readonly id: 66890;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66883;
                                readonly src: "4798:7:119";
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
                        readonly falseBody: {
                            readonly id: 66915;
                            readonly nodeType: "Block";
                            readonly src: "4857:344:119";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly id: 66906;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 66900;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 66897;
                                                readonly name: "returndata";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 66885;
                                                readonly src: "5045:10:119";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            };
                                            readonly id: 66898;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5056:6:119";
                                            readonly memberName: "length";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "5045:17:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "==";
                                        readonly rightExpression: {
                                            readonly hexValue: "30";
                                            readonly id: 66899;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "5066:1:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_0_by_1";
                                                readonly typeString: "int_const 0";
                                            };
                                            readonly value: "0";
                                        };
                                        readonly src: "5045:22:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "&&";
                                    readonly rightExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 66905;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly expression: {
                                                    readonly id: 66901;
                                                    readonly name: "target";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 66881;
                                                    readonly src: "5071:6:119";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly id: 66902;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5078:4:119";
                                                readonly memberName: "code";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "5071:11:119";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            };
                                            readonly id: 66903;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5083:6:119";
                                            readonly memberName: "length";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "5071:18:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "==";
                                        readonly rightExpression: {
                                            readonly hexValue: "30";
                                            readonly id: 66904;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "5093:1:119";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_0_by_1";
                                                readonly typeString: "int_const 0";
                                            };
                                            readonly value: "0";
                                        };
                                        readonly src: "5071:23:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "5045:49:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 66912;
                                readonly nodeType: "IfStatement";
                                readonly src: "5041:119:119";
                                readonly trueBody: {
                                    readonly id: 66911;
                                    readonly nodeType: "Block";
                                    readonly src: "5096:64:119";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [{
                                                readonly id: 66908;
                                                readonly name: "target";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 66881;
                                                readonly src: "5138:6:119";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                }];
                                                readonly id: 66907;
                                                readonly name: "AddressEmptyCode";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 66719;
                                                readonly src: "5121:16:119";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$_t_address_$returns$__$";
                                                    readonly typeString: "function (address) pure";
                                                };
                                            };
                                            readonly id: 66909;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5121:24:119";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 66910;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "5114:31:119";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 66913;
                                    readonly name: "returndata";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66885;
                                    readonly src: "5180:10:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly functionReturnParameters: 66889;
                                readonly id: 66914;
                                readonly nodeType: "Return";
                                readonly src: "5173:17:119";
                            }];
                        };
                        readonly id: 66916;
                        readonly nodeType: "IfStatement";
                        readonly src: "4793:408:119";
                        readonly trueBody: {
                            readonly id: 66896;
                            readonly nodeType: "Block";
                            readonly src: "4807:44:119";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 66893;
                                        readonly name: "returndata";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66885;
                                        readonly src: "4829:10:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly id: 66892;
                                        readonly name: "_revert";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66958;
                                        readonly src: "4821:7:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                            readonly typeString: "function (bytes memory) pure";
                                        };
                                    };
                                    readonly id: 66894;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4821:19:119";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 66895;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4821:19:119";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 66879;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4365:255:119";
                    readonly text: " @dev Tool to verify that a low level call to smart-contract was successful, and reverts if the target\n was not a contract or bubbling up the revert reason (falling back to {FailedInnerCall}) in case of an\n unsuccessful call.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "verifyCallResultFromTarget";
                readonly nameLocation: "4634:26:119";
                readonly parameters: {
                    readonly id: 66886;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66881;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "4678:6:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66918;
                        readonly src: "4670:14:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66880;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4670:7:119";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66883;
                        readonly mutability: "mutable";
                        readonly name: "success";
                        readonly nameLocation: "4699:7:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66918;
                        readonly src: "4694:12:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 66882;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4694:4:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66885;
                        readonly mutability: "mutable";
                        readonly name: "returndata";
                        readonly nameLocation: "4729:10:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66918;
                        readonly src: "4716:23:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 66884;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4716:5:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4660:85:119";
                };
                readonly returnParameters: {
                    readonly id: 66889;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66888;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66918;
                        readonly src: "4769:12:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 66887;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4769:5:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4768:14:119";
                };
                readonly scope: 66959;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 66940;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5407:224:119";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66939;
                    readonly nodeType: "Block";
                    readonly src: "5509:122:119";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly id: 66929;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "5523:8:119";
                            readonly subExpression: {
                                readonly id: 66928;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66921;
                                readonly src: "5524:7:119";
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
                        readonly falseBody: {
                            readonly id: 66937;
                            readonly nodeType: "Block";
                            readonly src: "5583:42:119";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 66935;
                                    readonly name: "returndata";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66923;
                                    readonly src: "5604:10:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly functionReturnParameters: 66927;
                                readonly id: 66936;
                                readonly nodeType: "Return";
                                readonly src: "5597:17:119";
                            }];
                        };
                        readonly id: 66938;
                        readonly nodeType: "IfStatement";
                        readonly src: "5519:106:119";
                        readonly trueBody: {
                            readonly id: 66934;
                            readonly nodeType: "Block";
                            readonly src: "5533:44:119";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 66931;
                                        readonly name: "returndata";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66923;
                                        readonly src: "5555:10:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly id: 66930;
                                        readonly name: "_revert";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66958;
                                        readonly src: "5547:7:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                            readonly typeString: "function (bytes memory) pure";
                                        };
                                    };
                                    readonly id: 66932;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5547:19:119";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 66933;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "5547:19:119";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 66919;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5213:189:119";
                    readonly text: " @dev Tool to verify that a low level call was successful, and reverts if it wasn't, either by bubbling the\n revert reason or with a default {FailedInnerCall} error.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "verifyCallResult";
                readonly nameLocation: "5416:16:119";
                readonly parameters: {
                    readonly id: 66924;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66921;
                        readonly mutability: "mutable";
                        readonly name: "success";
                        readonly nameLocation: "5438:7:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66940;
                        readonly src: "5433:12:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 66920;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5433:4:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66923;
                        readonly mutability: "mutable";
                        readonly name: "returndata";
                        readonly nameLocation: "5460:10:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66940;
                        readonly src: "5447:23:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 66922;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5447:5:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5432:39:119";
                };
                readonly returnParameters: {
                    readonly id: 66927;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66926;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66940;
                        readonly src: "5495:12:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 66925;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5495:5:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5494:14:119";
                };
                readonly scope: 66959;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 66958;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5743:516:119";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66957;
                    readonly nodeType: "Block";
                    readonly src: "5798:461:119";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 66949;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 66946;
                                    readonly name: "returndata";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66943;
                                    readonly src: "5874:10:119";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly id: 66947;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5885:6:119";
                                readonly memberName: "length";
                                readonly nodeType: "MemberAccess";
                                readonly src: "5874:17:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 66948;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "5894:1:119";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "5874:21:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 66955;
                            readonly nodeType: "Block";
                            readonly src: "6204:49:119";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly id: 66952;
                                        readonly name: "FailedInnerCall";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66722;
                                        readonly src: "6225:15:119";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 66953;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6225:17:119";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 66954;
                                readonly nodeType: "RevertStatement";
                                readonly src: "6218:24:119";
                            }];
                        };
                        readonly id: 66956;
                        readonly nodeType: "IfStatement";
                        readonly src: "5870:383:119";
                        readonly trueBody: {
                            readonly id: 66951;
                            readonly nodeType: "Block";
                            readonly src: "5897:301:119";
                            readonly statements: readonly [{
                                readonly AST: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "6055:133:119";
                                    readonly statements: readonly [{
                                        readonly nodeType: "YulVariableDeclaration";
                                        readonly src: "6073:40:119";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly name: "returndata";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6102:10:119";
                                            }];
                                            readonly functionName: {
                                                readonly name: "mload";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6096:5:119";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6096:17:119";
                                        };
                                        readonly variables: readonly [{
                                            readonly name: "returndata_size";
                                            readonly nodeType: "YulTypedName";
                                            readonly src: "6077:15:119";
                                            readonly type: "";
                                        }];
                                    }, {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "6141:2:119";
                                                    readonly type: "";
                                                    readonly value: "32";
                                                }, {
                                                    readonly name: "returndata";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "6145:10:119";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "add";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "6137:3:119";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "6137:19:119";
                                            }, {
                                                readonly name: "returndata_size";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6158:15:119";
                                            }];
                                            readonly functionName: {
                                                readonly name: "revert";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6130:6:119";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6130:44:119";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "6130:44:119";
                                    }];
                                };
                                readonly documentation: "@solidity memory-safe-assembly";
                                readonly evmVersion: "paris";
                                readonly externalReferences: readonly [{
                                    readonly declaration: 66943;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "6102:10:119";
                                    readonly valueSize: 1;
                                }, {
                                    readonly declaration: 66943;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "6145:10:119";
                                    readonly valueSize: 1;
                                }];
                                readonly id: 66950;
                                readonly nodeType: "InlineAssembly";
                                readonly src: "6046:142:119";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 66941;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5637:101:119";
                    readonly text: " @dev Reverts with returndata if present. Otherwise reverts with {FailedInnerCall}.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_revert";
                readonly nameLocation: "5752:7:119";
                readonly parameters: {
                    readonly id: 66944;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66943;
                        readonly mutability: "mutable";
                        readonly name: "returndata";
                        readonly nameLocation: "5773:10:119";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66958;
                        readonly src: "5760:23:119";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 66942;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5760:5:119";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5759:25:119";
                };
                readonly returnParameters: {
                    readonly id: 66945;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5798:0:119";
                };
                readonly scope: 66959;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "private";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "Address";
            readonly contractDependencies: readonly [];
            readonly contractKind: "library";
            readonly documentation: {
                readonly id: 66709;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "127:67:119";
                readonly text: " @dev Collection of functions related to the address type";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [66959];
            readonly name: "Address";
            readonly nameLocation: "203:7:119";
            readonly scope: 66960;
            readonly usedErrors: readonly [66714, 66719, 66722];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 119;
};
//# sourceMappingURL=Address.d.ts.map