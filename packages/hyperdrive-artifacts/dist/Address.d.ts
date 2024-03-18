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
        readonly sourceMap: "195:6066:169:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;195:6066:169;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122073ffb64776e369ef99b659be8693e4729a17c1ece892eaba16a7799d058ad05164736f6c63430008140033";
        readonly sourceMap: "195:6066:169:-:0;;;;;;;;";
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
        readonly id: 71897;
        readonly exportedSymbols: {
            readonly Address: readonly [71896];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "101:6161:169";
        readonly nodes: readonly [{
            readonly id: 71645;
            readonly nodeType: "PragmaDirective";
            readonly src: "101:24:169";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "^", "0.8", ".20"];
        }, {
            readonly id: 71896;
            readonly nodeType: "ContractDefinition";
            readonly src: "195:6066:169";
            readonly nodes: readonly [{
                readonly id: 71651;
                readonly nodeType: "ErrorDefinition";
                readonly src: "316:50:169";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 71647;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "217:94:169";
                    readonly text: " @dev The ETH balance of the account is not enough to perform the operation.";
                };
                readonly errorSelector: "cd786059";
                readonly name: "AddressInsufficientBalance";
                readonly nameLocation: "322:26:169";
                readonly parameters: {
                    readonly id: 71650;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71649;
                        readonly mutability: "mutable";
                        readonly name: "account";
                        readonly nameLocation: "357:7:169";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71651;
                        readonly src: "349:15:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71648;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "349:7:169";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "348:17:169";
                };
            }, {
                readonly id: 71656;
                readonly nodeType: "ErrorDefinition";
                readonly src: "452:39:169";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 71652;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "372:75:169";
                    readonly text: " @dev There's no code at `target` (it is not a contract).";
                };
                readonly errorSelector: "9996b315";
                readonly name: "AddressEmptyCode";
                readonly nameLocation: "458:16:169";
                readonly parameters: {
                    readonly id: 71655;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71654;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "483:6:169";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71656;
                        readonly src: "475:14:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71653;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "475:7:169";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "474:16:169";
                };
            }, {
                readonly id: 71659;
                readonly nodeType: "ErrorDefinition";
                readonly src: "591:24:169";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 71657;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "497:89:169";
                    readonly text: " @dev A call to an address target failed. The target may have reverted.";
                };
                readonly errorSelector: "1425ea42";
                readonly name: "FailedInnerCall";
                readonly nameLocation: "597:15:169";
                readonly parameters: {
                    readonly id: 71658;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "612:2:169";
                };
            }, {
                readonly id: 71700;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1531:331:169";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71699;
                    readonly nodeType: "Block";
                    readonly src: "1602:260:169";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 71673;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 71669;
                                        readonly name: "this";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -28;
                                        readonly src: "1624:4:169";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_Address_$71896";
                                            readonly typeString: "library Address";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_Address_$71896";
                                            readonly typeString: "library Address";
                                        }];
                                        readonly id: 71668;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "1616:7:169";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 71667;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "1616:7:169";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 71670;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1616:13:169";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 71671;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1630:7:169";
                                readonly memberName: "balance";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1616:21:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 71672;
                                readonly name: "amount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71664;
                                readonly src: "1640:6:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "1616:30:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 71682;
                        readonly nodeType: "IfStatement";
                        readonly src: "1612:109:169";
                        readonly trueBody: {
                            readonly id: 71681;
                            readonly nodeType: "Block";
                            readonly src: "1648:73:169";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 71677;
                                            readonly name: "this";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -28;
                                            readonly src: "1704:4:169";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_Address_$71896";
                                                readonly typeString: "library Address";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_Address_$71896";
                                                readonly typeString: "library Address";
                                            }];
                                            readonly id: 71676;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "1696:7:169";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 71675;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "1696:7:169";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 71678;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "1696:13:169";
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
                                        readonly id: 71674;
                                        readonly name: "AddressInsufficientBalance";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71651;
                                        readonly src: "1669:26:169";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$_t_address_$returns$__$";
                                            readonly typeString: "function (address) pure";
                                        };
                                    };
                                    readonly id: 71679;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1669:41:169";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 71680;
                                readonly nodeType: "RevertStatement";
                                readonly src: "1662:48:169";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [71684, null];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 71684;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "1737:7:169";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71699;
                            readonly src: "1732:12:169";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 71683;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1732:4:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, null];
                        readonly id: 71691;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly hexValue: "";
                                readonly id: 71689;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "1780:2:169";
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
                                        readonly id: 71685;
                                        readonly name: "recipient";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71662;
                                        readonly src: "1750:9:169";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address_payable";
                                            readonly typeString: "address payable";
                                        };
                                    };
                                    readonly id: 71686;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1760:4:169";
                                    readonly memberName: "call";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "1750:14:169";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                    };
                                };
                                readonly id: 71688;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly names: readonly ["value"];
                                readonly nodeType: "FunctionCallOptions";
                                readonly options: readonly [{
                                    readonly id: 71687;
                                    readonly name: "amount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71664;
                                    readonly src: "1772:6:169";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly src: "1750:29:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value";
                                    readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 71690;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1750:33:169";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1731:52:169";
                    }, {
                        readonly condition: {
                            readonly id: 71693;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "1797:8:169";
                            readonly subExpression: {
                                readonly id: 71692;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71684;
                                readonly src: "1798:7:169";
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
                        readonly id: 71698;
                        readonly nodeType: "IfStatement";
                        readonly src: "1793:63:169";
                        readonly trueBody: {
                            readonly id: 71697;
                            readonly nodeType: "Block";
                            readonly src: "1807:49:169";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly id: 71694;
                                        readonly name: "FailedInnerCall";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71659;
                                        readonly src: "1828:15:169";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 71695;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1828:17:169";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 71696;
                                readonly nodeType: "RevertStatement";
                                readonly src: "1821:24:169";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 71660;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "621:905:169";
                    readonly text: " @dev Replacement for Solidity's `transfer`: sends `amount` wei to\n `recipient`, forwarding all available gas and reverting on errors.\n https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\n of certain opcodes, possibly making contracts go over the 2300 gas limit\n imposed by `transfer`, making them unable to receive funds via\n `transfer`. {sendValue} removes this limitation.\n https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].\n IMPORTANT: because control is transferred to `recipient`, care must be\n taken to not create reentrancy vulnerabilities. Consider using\n {ReentrancyGuard} or the\n https://solidity.readthedocs.io/en/v0.8.20/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "sendValue";
                readonly nameLocation: "1540:9:169";
                readonly parameters: {
                    readonly id: 71665;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71662;
                        readonly mutability: "mutable";
                        readonly name: "recipient";
                        readonly nameLocation: "1566:9:169";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71700;
                        readonly src: "1550:25:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address_payable";
                            readonly typeString: "address payable";
                        };
                        readonly typeName: {
                            readonly id: 71661;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1550:15:169";
                            readonly stateMutability: "payable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address_payable";
                                readonly typeString: "address payable";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71664;
                        readonly mutability: "mutable";
                        readonly name: "amount";
                        readonly nameLocation: "1585:6:169";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71700;
                        readonly src: "1577:14:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71663;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1577:7:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1549:43:169";
                };
                readonly returnParameters: {
                    readonly id: 71666;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1602:0:169";
                };
                readonly scope: 71896;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71717;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2705:151:169";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71716;
                    readonly nodeType: "Block";
                    readonly src: "2794:62:169";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 71711;
                                readonly name: "target";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71703;
                                readonly src: "2833:6:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 71712;
                                readonly name: "data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71705;
                                readonly src: "2841:4:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }, {
                                readonly hexValue: "30";
                                readonly id: 71713;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "2847:1:169";
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
                                readonly id: 71710;
                                readonly name: "functionCallWithValue";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71763;
                                readonly src: "2811:21:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address,bytes memory,uint256) returns (bytes memory)";
                                };
                            };
                            readonly id: 71714;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2811:38:169";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 71709;
                        readonly id: 71715;
                        readonly nodeType: "Return";
                        readonly src: "2804:45:169";
                    }];
                };
                readonly documentation: {
                    readonly id: 71701;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1868:832:169";
                    readonly text: " @dev Performs a Solidity function call using a low level `call`. A\n plain `call` is an unsafe replacement for a function call: use this\n function instead.\n If `target` reverts with a revert reason or custom error, it is bubbled\n up by this function (like regular Solidity function calls). However, if\n the call reverted with no returned reason, this function reverts with a\n {FailedInnerCall} error.\n Returns the raw returned data. To convert to the expected return value,\n use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\n Requirements:\n - `target` must be a contract.\n - calling `target` with `data` must not revert.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "functionCall";
                readonly nameLocation: "2714:12:169";
                readonly parameters: {
                    readonly id: 71706;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71703;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "2735:6:169";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71717;
                        readonly src: "2727:14:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71702;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2727:7:169";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71705;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "2756:4:169";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71717;
                        readonly src: "2743:17:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71704;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2743:5:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2726:35:169";
                };
                readonly returnParameters: {
                    readonly id: 71709;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71708;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71717;
                        readonly src: "2780:12:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71707;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2780:5:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2779:14:169";
                };
                readonly scope: 71896;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71763;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3180:392:169";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71762;
                    readonly nodeType: "Block";
                    readonly src: "3293:279:169";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 71735;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 71731;
                                        readonly name: "this";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -28;
                                        readonly src: "3315:4:169";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_Address_$71896";
                                            readonly typeString: "library Address";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_Address_$71896";
                                            readonly typeString: "library Address";
                                        }];
                                        readonly id: 71730;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "3307:7:169";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 71729;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "3307:7:169";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 71732;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3307:13:169";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 71733;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3321:7:169";
                                readonly memberName: "balance";
                                readonly nodeType: "MemberAccess";
                                readonly src: "3307:21:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "<";
                            readonly rightExpression: {
                                readonly id: 71734;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71724;
                                readonly src: "3331:5:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "3307:29:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 71744;
                        readonly nodeType: "IfStatement";
                        readonly src: "3303:108:169";
                        readonly trueBody: {
                            readonly id: 71743;
                            readonly nodeType: "Block";
                            readonly src: "3338:73:169";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 71739;
                                            readonly name: "this";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -28;
                                            readonly src: "3394:4:169";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_Address_$71896";
                                                readonly typeString: "library Address";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_Address_$71896";
                                                readonly typeString: "library Address";
                                            }];
                                            readonly id: 71738;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "3386:7:169";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 71737;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "3386:7:169";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 71740;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3386:13:169";
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
                                        readonly id: 71736;
                                        readonly name: "AddressInsufficientBalance";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71651;
                                        readonly src: "3359:26:169";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$_t_address_$returns$__$";
                                            readonly typeString: "function (address) pure";
                                        };
                                    };
                                    readonly id: 71741;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3359:41:169";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 71742;
                                readonly nodeType: "RevertStatement";
                                readonly src: "3352:48:169";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [71746, 71748];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 71746;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "3426:7:169";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71762;
                            readonly src: "3421:12:169";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 71745;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3421:4:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 71748;
                            readonly mutability: "mutable";
                            readonly name: "returndata";
                            readonly nameLocation: "3448:10:169";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71762;
                            readonly src: "3435:23:169";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 71747;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3435:5:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 71755;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 71753;
                                readonly name: "data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71722;
                                readonly src: "3488:4:169";
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
                                        readonly id: 71749;
                                        readonly name: "target";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71720;
                                        readonly src: "3462:6:169";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly id: 71750;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "3469:4:169";
                                    readonly memberName: "call";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "3462:11:169";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                    };
                                };
                                readonly id: 71752;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly names: readonly ["value"];
                                readonly nodeType: "FunctionCallOptions";
                                readonly options: readonly [{
                                    readonly id: 71751;
                                    readonly name: "value";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71724;
                                    readonly src: "3481:5:169";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly src: "3462:25:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value";
                                    readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 71754;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3462:31:169";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3420:73:169";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 71757;
                                readonly name: "target";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71720;
                                readonly src: "3537:6:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 71758;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71746;
                                readonly src: "3545:7:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly id: 71759;
                                readonly name: "returndata";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71748;
                                readonly src: "3554:10:169";
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
                                readonly id: 71756;
                                readonly name: "verifyCallResultFromTarget";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71855;
                                readonly src: "3510:26:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address,bool,bytes memory) view returns (bytes memory)";
                                };
                            };
                            readonly id: 71760;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3510:55:169";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 71728;
                        readonly id: 71761;
                        readonly nodeType: "Return";
                        readonly src: "3503:62:169";
                    }];
                };
                readonly documentation: {
                    readonly id: 71718;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2862:313:169";
                    readonly text: " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but also transferring `value` wei to `target`.\n Requirements:\n - the calling contract must have an ETH balance of at least `value`.\n - the called Solidity function must be `payable`.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "functionCallWithValue";
                readonly nameLocation: "3189:21:169";
                readonly parameters: {
                    readonly id: 71725;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71720;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "3219:6:169";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71763;
                        readonly src: "3211:14:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71719;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3211:7:169";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71722;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "3240:4:169";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71763;
                        readonly src: "3227:17:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71721;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3227:5:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71724;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3254:5:169";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71763;
                        readonly src: "3246:13:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71723;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3246:7:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3210:50:169";
                };
                readonly returnParameters: {
                    readonly id: 71728;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71727;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71763;
                        readonly src: "3279:12:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71726;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3279:5:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3278:14:169";
                };
                readonly scope: 71896;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71789;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3711:254:169";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71788;
                    readonly nodeType: "Block";
                    readonly src: "3811:154:169";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [71774, 71776];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 71774;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "3827:7:169";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71788;
                            readonly src: "3822:12:169";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 71773;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3822:4:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 71776;
                            readonly mutability: "mutable";
                            readonly name: "returndata";
                            readonly nameLocation: "3849:10:169";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71788;
                            readonly src: "3836:23:169";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 71775;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3836:5:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 71781;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 71779;
                                readonly name: "data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71768;
                                readonly src: "3881:4:169";
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
                                    readonly id: 71777;
                                    readonly name: "target";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71766;
                                    readonly src: "3863:6:169";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 71778;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3870:10:169";
                                readonly memberName: "staticcall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "3863:17:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) view returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 71780;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3863:23:169";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3821:65:169";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 71783;
                                readonly name: "target";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71766;
                                readonly src: "3930:6:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 71784;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71774;
                                readonly src: "3938:7:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly id: 71785;
                                readonly name: "returndata";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71776;
                                readonly src: "3947:10:169";
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
                                readonly id: 71782;
                                readonly name: "verifyCallResultFromTarget";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71855;
                                readonly src: "3903:26:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address,bool,bytes memory) view returns (bytes memory)";
                                };
                            };
                            readonly id: 71786;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3903:55:169";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 71772;
                        readonly id: 71787;
                        readonly nodeType: "Return";
                        readonly src: "3896:62:169";
                    }];
                };
                readonly documentation: {
                    readonly id: 71764;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3578:128:169";
                    readonly text: " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a static call.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "functionStaticCall";
                readonly nameLocation: "3720:18:169";
                readonly parameters: {
                    readonly id: 71769;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71766;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "3747:6:169";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71789;
                        readonly src: "3739:14:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71765;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3739:7:169";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71768;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "3768:4:169";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71789;
                        readonly src: "3755:17:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71767;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3755:5:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3738:35:169";
                };
                readonly returnParameters: {
                    readonly id: 71772;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71771;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71789;
                        readonly src: "3797:12:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71770;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3797:5:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3796:14:169";
                };
                readonly scope: 71896;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71815;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4106:253:169";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71814;
                    readonly nodeType: "Block";
                    readonly src: "4203:156:169";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [71800, 71802];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 71800;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "4219:7:169";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71814;
                            readonly src: "4214:12:169";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 71799;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4214:4:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 71802;
                            readonly mutability: "mutable";
                            readonly name: "returndata";
                            readonly nameLocation: "4241:10:169";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71814;
                            readonly src: "4228:23:169";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 71801;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4228:5:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 71807;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 71805;
                                readonly name: "data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71794;
                                readonly src: "4275:4:169";
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
                                    readonly id: 71803;
                                    readonly name: "target";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71792;
                                    readonly src: "4255:6:169";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 71804;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4262:12:169";
                                readonly memberName: "delegatecall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "4255:19:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 71806;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4255:25:169";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4213:67:169";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 71809;
                                readonly name: "target";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71792;
                                readonly src: "4324:6:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 71810;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71800;
                                readonly src: "4332:7:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly id: 71811;
                                readonly name: "returndata";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71802;
                                readonly src: "4341:10:169";
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
                                readonly id: 71808;
                                readonly name: "verifyCallResultFromTarget";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71855;
                                readonly src: "4297:26:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_address_$_t_bool_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (address,bool,bytes memory) view returns (bytes memory)";
                                };
                            };
                            readonly id: 71812;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4297:55:169";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 71798;
                        readonly id: 71813;
                        readonly nodeType: "Return";
                        readonly src: "4290:62:169";
                    }];
                };
                readonly documentation: {
                    readonly id: 71790;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3971:130:169";
                    readonly text: " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a delegate call.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "functionDelegateCall";
                readonly nameLocation: "4115:20:169";
                readonly parameters: {
                    readonly id: 71795;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71792;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "4144:6:169";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71815;
                        readonly src: "4136:14:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71791;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4136:7:169";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71794;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "4165:4:169";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71815;
                        readonly src: "4152:17:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71793;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4152:5:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4135:35:169";
                };
                readonly returnParameters: {
                    readonly id: 71798;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71797;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71815;
                        readonly src: "4189:12:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71796;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4189:5:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4188:14:169";
                };
                readonly scope: 71896;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71855;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4625:582:169";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71854;
                    readonly nodeType: "Block";
                    readonly src: "4783:424:169";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly id: 71828;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "4797:8:169";
                            readonly subExpression: {
                                readonly id: 71827;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71820;
                                readonly src: "4798:7:169";
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
                            readonly id: 71852;
                            readonly nodeType: "Block";
                            readonly src: "4857:344:169";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly id: 71843;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 71837;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 71834;
                                                readonly name: "returndata";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 71822;
                                                readonly src: "5045:10:169";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            };
                                            readonly id: 71835;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5056:6:169";
                                            readonly memberName: "length";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "5045:17:169";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "==";
                                        readonly rightExpression: {
                                            readonly hexValue: "30";
                                            readonly id: 71836;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "5066:1:169";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_0_by_1";
                                                readonly typeString: "int_const 0";
                                            };
                                            readonly value: "0";
                                        };
                                        readonly src: "5045:22:169";
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
                                        readonly id: 71842;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly expression: {
                                                    readonly id: 71838;
                                                    readonly name: "target";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 71818;
                                                    readonly src: "5071:6:169";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address";
                                                        readonly typeString: "address";
                                                    };
                                                };
                                                readonly id: 71839;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5078:4:169";
                                                readonly memberName: "code";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "5071:11:169";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            };
                                            readonly id: 71840;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5083:6:169";
                                            readonly memberName: "length";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "5071:18:169";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "==";
                                        readonly rightExpression: {
                                            readonly hexValue: "30";
                                            readonly id: 71841;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "number";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "5093:1:169";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_rational_0_by_1";
                                                readonly typeString: "int_const 0";
                                            };
                                            readonly value: "0";
                                        };
                                        readonly src: "5071:23:169";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "5045:49:169";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 71849;
                                readonly nodeType: "IfStatement";
                                readonly src: "5041:119:169";
                                readonly trueBody: {
                                    readonly id: 71848;
                                    readonly nodeType: "Block";
                                    readonly src: "5096:64:169";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [{
                                                readonly id: 71845;
                                                readonly name: "target";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 71818;
                                                readonly src: "5138:6:169";
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
                                                readonly id: 71844;
                                                readonly name: "AddressEmptyCode";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 71656;
                                                readonly src: "5121:16:169";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$_t_address_$returns$__$";
                                                    readonly typeString: "function (address) pure";
                                                };
                                            };
                                            readonly id: 71846;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5121:24:169";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 71847;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "5114:31:169";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 71850;
                                    readonly name: "returndata";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71822;
                                    readonly src: "5180:10:169";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly functionReturnParameters: 71826;
                                readonly id: 71851;
                                readonly nodeType: "Return";
                                readonly src: "5173:17:169";
                            }];
                        };
                        readonly id: 71853;
                        readonly nodeType: "IfStatement";
                        readonly src: "4793:408:169";
                        readonly trueBody: {
                            readonly id: 71833;
                            readonly nodeType: "Block";
                            readonly src: "4807:44:169";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 71830;
                                        readonly name: "returndata";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71822;
                                        readonly src: "4829:10:169";
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
                                        readonly id: 71829;
                                        readonly name: "_revert";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71895;
                                        readonly src: "4821:7:169";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                            readonly typeString: "function (bytes memory) pure";
                                        };
                                    };
                                    readonly id: 71831;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4821:19:169";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 71832;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4821:19:169";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 71816;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4365:255:169";
                    readonly text: " @dev Tool to verify that a low level call to smart-contract was successful, and reverts if the target\n was not a contract or bubbling up the revert reason (falling back to {FailedInnerCall}) in case of an\n unsuccessful call.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "verifyCallResultFromTarget";
                readonly nameLocation: "4634:26:169";
                readonly parameters: {
                    readonly id: 71823;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71818;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "4678:6:169";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71855;
                        readonly src: "4670:14:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71817;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4670:7:169";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71820;
                        readonly mutability: "mutable";
                        readonly name: "success";
                        readonly nameLocation: "4699:7:169";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71855;
                        readonly src: "4694:12:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 71819;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4694:4:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71822;
                        readonly mutability: "mutable";
                        readonly name: "returndata";
                        readonly nameLocation: "4729:10:169";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71855;
                        readonly src: "4716:23:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71821;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4716:5:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4660:85:169";
                };
                readonly returnParameters: {
                    readonly id: 71826;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71825;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71855;
                        readonly src: "4769:12:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71824;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4769:5:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4768:14:169";
                };
                readonly scope: 71896;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71877;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5407:224:169";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71876;
                    readonly nodeType: "Block";
                    readonly src: "5509:122:169";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly id: 71866;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "5523:8:169";
                            readonly subExpression: {
                                readonly id: 71865;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71858;
                                readonly src: "5524:7:169";
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
                            readonly id: 71874;
                            readonly nodeType: "Block";
                            readonly src: "5583:42:169";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 71872;
                                    readonly name: "returndata";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71860;
                                    readonly src: "5604:10:169";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly functionReturnParameters: 71864;
                                readonly id: 71873;
                                readonly nodeType: "Return";
                                readonly src: "5597:17:169";
                            }];
                        };
                        readonly id: 71875;
                        readonly nodeType: "IfStatement";
                        readonly src: "5519:106:169";
                        readonly trueBody: {
                            readonly id: 71871;
                            readonly nodeType: "Block";
                            readonly src: "5533:44:169";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 71868;
                                        readonly name: "returndata";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71860;
                                        readonly src: "5555:10:169";
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
                                        readonly id: 71867;
                                        readonly name: "_revert";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71895;
                                        readonly src: "5547:7:169";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                            readonly typeString: "function (bytes memory) pure";
                                        };
                                    };
                                    readonly id: 71869;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5547:19:169";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 71870;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "5547:19:169";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 71856;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5213:189:169";
                    readonly text: " @dev Tool to verify that a low level call was successful, and reverts if it wasn't, either by bubbling the\n revert reason or with a default {FailedInnerCall} error.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "verifyCallResult";
                readonly nameLocation: "5416:16:169";
                readonly parameters: {
                    readonly id: 71861;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71858;
                        readonly mutability: "mutable";
                        readonly name: "success";
                        readonly nameLocation: "5438:7:169";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71877;
                        readonly src: "5433:12:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 71857;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5433:4:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71860;
                        readonly mutability: "mutable";
                        readonly name: "returndata";
                        readonly nameLocation: "5460:10:169";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71877;
                        readonly src: "5447:23:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71859;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5447:5:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5432:39:169";
                };
                readonly returnParameters: {
                    readonly id: 71864;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71863;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71877;
                        readonly src: "5495:12:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71862;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5495:5:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5494:14:169";
                };
                readonly scope: 71896;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71895;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5743:516:169";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71894;
                    readonly nodeType: "Block";
                    readonly src: "5798:461:169";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 71886;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly expression: {
                                    readonly id: 71883;
                                    readonly name: "returndata";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71880;
                                    readonly src: "5874:10:169";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                };
                                readonly id: 71884;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5885:6:169";
                                readonly memberName: "length";
                                readonly nodeType: "MemberAccess";
                                readonly src: "5874:17:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 71885;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "5894:1:169";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "5874:21:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 71892;
                            readonly nodeType: "Block";
                            readonly src: "6204:49:169";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly id: 71889;
                                        readonly name: "FailedInnerCall";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71659;
                                        readonly src: "6225:15:169";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 71890;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6225:17:169";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 71891;
                                readonly nodeType: "RevertStatement";
                                readonly src: "6218:24:169";
                            }];
                        };
                        readonly id: 71893;
                        readonly nodeType: "IfStatement";
                        readonly src: "5870:383:169";
                        readonly trueBody: {
                            readonly id: 71888;
                            readonly nodeType: "Block";
                            readonly src: "5897:301:169";
                            readonly statements: readonly [{
                                readonly AST: {
                                    readonly nodeType: "YulBlock";
                                    readonly src: "6055:133:169";
                                    readonly statements: readonly [{
                                        readonly nodeType: "YulVariableDeclaration";
                                        readonly src: "6073:40:169";
                                        readonly value: {
                                            readonly arguments: readonly [{
                                                readonly name: "returndata";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6102:10:169";
                                            }];
                                            readonly functionName: {
                                                readonly name: "mload";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6096:5:169";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6096:17:169";
                                        };
                                        readonly variables: readonly [{
                                            readonly name: "returndata_size";
                                            readonly nodeType: "YulTypedName";
                                            readonly src: "6077:15:169";
                                            readonly type: "";
                                        }];
                                    }, {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly kind: "number";
                                                    readonly nodeType: "YulLiteral";
                                                    readonly src: "6141:2:169";
                                                    readonly type: "";
                                                    readonly value: "32";
                                                }, {
                                                    readonly name: "returndata";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "6145:10:169";
                                                }];
                                                readonly functionName: {
                                                    readonly name: "add";
                                                    readonly nodeType: "YulIdentifier";
                                                    readonly src: "6137:3:169";
                                                };
                                                readonly nodeType: "YulFunctionCall";
                                                readonly src: "6137:19:169";
                                            }, {
                                                readonly name: "returndata_size";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6158:15:169";
                                            }];
                                            readonly functionName: {
                                                readonly name: "revert";
                                                readonly nodeType: "YulIdentifier";
                                                readonly src: "6130:6:169";
                                            };
                                            readonly nodeType: "YulFunctionCall";
                                            readonly src: "6130:44:169";
                                        };
                                        readonly nodeType: "YulExpressionStatement";
                                        readonly src: "6130:44:169";
                                    }];
                                };
                                readonly documentation: "@solidity memory-safe-assembly";
                                readonly evmVersion: "paris";
                                readonly externalReferences: readonly [{
                                    readonly declaration: 71880;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "6102:10:169";
                                    readonly valueSize: 1;
                                }, {
                                    readonly declaration: 71880;
                                    readonly isOffset: false;
                                    readonly isSlot: false;
                                    readonly src: "6145:10:169";
                                    readonly valueSize: 1;
                                }];
                                readonly id: 71887;
                                readonly nodeType: "InlineAssembly";
                                readonly src: "6046:142:169";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 71878;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "5637:101:169";
                    readonly text: " @dev Reverts with returndata if present. Otherwise reverts with {FailedInnerCall}.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_revert";
                readonly nameLocation: "5752:7:169";
                readonly parameters: {
                    readonly id: 71881;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71880;
                        readonly mutability: "mutable";
                        readonly name: "returndata";
                        readonly nameLocation: "5773:10:169";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71895;
                        readonly src: "5760:23:169";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71879;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5760:5:169";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5759:25:169";
                };
                readonly returnParameters: {
                    readonly id: 71882;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "5798:0:169";
                };
                readonly scope: 71896;
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
                readonly id: 71646;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "127:67:169";
                readonly text: " @dev Collection of functions related to the address type";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [71896];
            readonly name: "Address";
            readonly nameLocation: "203:7:169";
            readonly scope: 71897;
            readonly usedErrors: readonly [71651, 71656, 71659];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 169;
};
//# sourceMappingURL=Address.d.ts.map