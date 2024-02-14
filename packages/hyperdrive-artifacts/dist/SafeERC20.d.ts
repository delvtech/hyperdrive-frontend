export declare const SafeERC20: {
    readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "currentAllowance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "requestedDecrease";
            readonly type: "uint256";
        }];
        readonly name: "SafeERC20FailedDecreaseAllowance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "SafeERC20FailedOperation";
        readonly type: "error";
    }];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122076f48067ee79af48f87c626716abb2d6dba39ab8e4a1bf0af237818455119cfe64736f6c63430008140033";
        readonly sourceMap: "751:5018:117:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;751:5018:117;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122076f48067ee79af48f87c626716abb2d6dba39ab8e4a1bf0af237818455119cfe64736f6c63430008140033";
        readonly sourceMap: "751:5018:117:-:0;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"currentAllowance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"requestedDecrease\",\"type\":\"uint256\"}],\"name\":\"SafeERC20FailedDecreaseAllowance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Wrappers around ERC20 operations that throw on failure (when the token contract returns false). Tokens that return no value (and instead revert or throw on failure) are also supported, non-reverting calls are assumed to be successful. To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract, which allows you to call the safe operations as `token.safeTransfer(...)`, etc.\",\"errors\":{\"SafeERC20FailedDecreaseAllowance(address,uint256,uint256)\":[{\"details\":\"Indicates a failed `decreaseAllowance` request.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{},\"title\":\"SafeERC20\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":\"SafeERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "currentAllowance";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "requestedDecrease";
                    readonly type: "uint256";
                }];
                readonly type: "error";
                readonly name: "SafeERC20FailedDecreaseAllowance";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "token";
                    readonly type: "address";
                }];
                readonly type: "error";
                readonly name: "SafeERC20FailedOperation";
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
                readonly "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": "SafeERC20";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
                readonly keccak256: "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70";
                readonly urls: readonly ["bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c", "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
                readonly keccak256: "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff";
                readonly urls: readonly ["bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d", "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
                readonly keccak256: "0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386";
                readonly urls: readonly ["bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0", "dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
                readonly keccak256: "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721";
                readonly urls: readonly ["bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245", "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol";
        readonly id: 67007;
        readonly exportedSymbols: {
            readonly Address: readonly [67259];
            readonly IERC20: readonly [66654];
            readonly IERC20Permit: readonly [66716];
            readonly SafeERC20: readonly [67006];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "115:5655:117";
        readonly nodes: readonly [{
            readonly id: 66718;
            readonly nodeType: "PragmaDirective";
            readonly src: "115:24:117";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "^", "0.8", ".20"];
        }, {
            readonly id: 66720;
            readonly nodeType: "ImportDirective";
            readonly src: "141:37:117";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";
            readonly file: "../IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 67007;
            readonly sourceUnit: 66655;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 66719;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 66654;
                    readonly src: "149:6:117";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 66722;
            readonly nodeType: "ImportDirective";
            readonly src: "179:60:117";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol";
            readonly file: "../extensions/IERC20Permit.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 67007;
            readonly sourceUnit: 66717;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 66721;
                    readonly name: "IERC20Permit";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 66716;
                    readonly src: "187:12:117";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 66724;
            readonly nodeType: "ImportDirective";
            readonly src: "240:51:117";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/openzeppelin-contracts/contracts/utils/Address.sol";
            readonly file: "../../../utils/Address.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 67007;
            readonly sourceUnit: 67260;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 66723;
                    readonly name: "Address";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 67259;
                    readonly src: "248:7:117";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 67006;
            readonly nodeType: "ContractDefinition";
            readonly src: "751:5018:117";
            readonly nodes: readonly [{
                readonly id: 66728;
                readonly nodeType: "UsingForDirective";
                readonly src: "775:26:117";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 66726;
                    readonly name: "Address";
                    readonly nameLocations: readonly ["781:7:117"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 67259;
                    readonly src: "781:7:117";
                };
                readonly typeName: {
                    readonly id: 66727;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "793:7:117";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
            }, {
                readonly id: 66733;
                readonly nodeType: "ErrorDefinition";
                readonly src: "876:46:117";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 66729;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "807:64:117";
                    readonly text: " @dev An operation with an ERC20 token failed.";
                };
                readonly errorSelector: "5274afe7";
                readonly name: "SafeERC20FailedOperation";
                readonly nameLocation: "882:24:117";
                readonly parameters: {
                    readonly id: 66732;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66731;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "915:5:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66733;
                        readonly src: "907:13:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66730;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "907:7:117";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "906:15:117";
                };
            }, {
                readonly id: 66742;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1004:109:117";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 66734;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "928:71:117";
                    readonly text: " @dev Indicates a failed `decreaseAllowance` request.";
                };
                readonly errorSelector: "e570110f";
                readonly name: "SafeERC20FailedDecreaseAllowance";
                readonly nameLocation: "1010:32:117";
                readonly parameters: {
                    readonly id: 66741;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66736;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "1051:7:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66742;
                        readonly src: "1043:15:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66735;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1043:7:117";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66738;
                        readonly mutability: "mutable";
                        readonly name: "currentAllowance";
                        readonly nameLocation: "1068:16:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66742;
                        readonly src: "1060:24:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 66737;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1060:7:117";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66740;
                        readonly mutability: "mutable";
                        readonly name: "requestedDecrease";
                        readonly nameLocation: "1094:17:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66742;
                        readonly src: "1086:25:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 66739;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1086:7:117";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1042:70:117";
                };
            }, {
                readonly id: 66766;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1303:160:117";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66765;
                    readonly nodeType: "Block";
                    readonly src: "1375:88:117";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 66754;
                                readonly name: "token";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66746;
                                readonly src: "1405:5:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                    readonly typeString: "contract IERC20";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 66757;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66746;
                                        readonly src: "1427:5:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 66758;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1433:8:117";
                                    readonly memberName: "transfer";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 66621;
                                    readonly src: "1427:14:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                        readonly typeString: "function (address,uint256) external returns (bool)";
                                    };
                                }, {
                                    readonly components: readonly [{
                                        readonly id: 66759;
                                        readonly name: "to";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66748;
                                        readonly src: "1444:2:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 66760;
                                        readonly name: "value";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66750;
                                        readonly src: "1448:5:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 66761;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "1443:11:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_address_$_t_uint256_$";
                                        readonly typeString: "tuple(address,uint256)";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                        readonly typeString: "function (address,uint256) external returns (bool)";
                                    }, {
                                        readonly typeIdentifier: "t_tuple$_t_address_$_t_uint256_$";
                                        readonly typeString: "tuple(address,uint256)";
                                    }];
                                    readonly expression: {
                                        readonly id: 66755;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "1412:3:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 66756;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1416:10:117";
                                    readonly memberName: "encodeCall";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "1412:14:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 66762;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1412:43:117";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                    readonly typeString: "contract IERC20";
                                }, {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly id: 66753;
                                readonly name: "_callOptionalReturn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66956;
                                readonly src: "1385:19:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$66654_$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (contract IERC20,bytes memory)";
                                };
                            };
                            readonly id: 66763;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1385:71:117";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 66764;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1385:71:117";
                    }];
                };
                readonly documentation: {
                    readonly id: 66743;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1119:179:117";
                    readonly text: " @dev Transfer `value` amount of `token` from the calling contract to `to`. If `token` returns no value,\n non-reverting calls are assumed to be successful.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeTransfer";
                readonly nameLocation: "1312:12:117";
                readonly parameters: {
                    readonly id: 66751;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66746;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "1332:5:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66766;
                        readonly src: "1325:12:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$66654";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 66745;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 66744;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["1325:6:117"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 66654;
                                readonly src: "1325:6:117";
                            };
                            readonly referencedDeclaration: 66654;
                            readonly src: "1325:6:117";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66748;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1347:2:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66766;
                        readonly src: "1339:10:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66747;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1339:7:117";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66750;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "1359:5:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66766;
                        readonly src: "1351:13:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 66749;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1351:7:117";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1324:41:117";
                };
                readonly returnParameters: {
                    readonly id: 66752;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1375:0:117";
                };
                readonly scope: 67006;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 66793;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1702:188:117";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66792;
                    readonly nodeType: "Block";
                    readonly src: "1792:98:117";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 66780;
                                readonly name: "token";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66770;
                                readonly src: "1822:5:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                    readonly typeString: "contract IERC20";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 66783;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66770;
                                        readonly src: "1844:5:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 66784;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1850:12:117";
                                    readonly memberName: "transferFrom";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 66653;
                                    readonly src: "1844:18:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$";
                                        readonly typeString: "function (address,address,uint256) external returns (bool)";
                                    };
                                }, {
                                    readonly components: readonly [{
                                        readonly id: 66785;
                                        readonly name: "from";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66772;
                                        readonly src: "1865:4:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 66786;
                                        readonly name: "to";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66774;
                                        readonly src: "1871:2:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 66787;
                                        readonly name: "value";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66776;
                                        readonly src: "1875:5:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 66788;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "1864:17:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_address_$_t_address_$_t_uint256_$";
                                        readonly typeString: "tuple(address,address,uint256)";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$";
                                        readonly typeString: "function (address,address,uint256) external returns (bool)";
                                    }, {
                                        readonly typeIdentifier: "t_tuple$_t_address_$_t_address_$_t_uint256_$";
                                        readonly typeString: "tuple(address,address,uint256)";
                                    }];
                                    readonly expression: {
                                        readonly id: 66781;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "1829:3:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 66782;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1833:10:117";
                                    readonly memberName: "encodeCall";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "1829:14:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 66789;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1829:53:117";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                    readonly typeString: "contract IERC20";
                                }, {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly id: 66779;
                                readonly name: "_callOptionalReturn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66956;
                                readonly src: "1802:19:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$66654_$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (contract IERC20,bytes memory)";
                                };
                            };
                            readonly id: 66790;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1802:81:117";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 66791;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1802:81:117";
                    }];
                };
                readonly documentation: {
                    readonly id: 66767;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1469:228:117";
                    readonly text: " @dev Transfer `value` amount of `token` from `from` to `to`, spending the approval given by `from` to the\n calling contract. If `token` returns no value, non-reverting calls are assumed to be successful.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeTransferFrom";
                readonly nameLocation: "1711:16:117";
                readonly parameters: {
                    readonly id: 66777;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66770;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "1735:5:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66793;
                        readonly src: "1728:12:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$66654";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 66769;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 66768;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["1728:6:117"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 66654;
                                readonly src: "1728:6:117";
                            };
                            readonly referencedDeclaration: 66654;
                            readonly src: "1728:6:117";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66772;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "1750:4:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66793;
                        readonly src: "1742:12:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66771;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1742:7:117";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66774;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1764:2:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66793;
                        readonly src: "1756:10:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66773;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1756:7:117";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66776;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "1776:5:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66793;
                        readonly src: "1768:13:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 66775;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1768:7:117";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1727:55:117";
                };
                readonly returnParameters: {
                    readonly id: 66778;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1792:0:117";
                };
                readonly scope: 67006;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 66824;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2081:225:117";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66823;
                    readonly nodeType: "Block";
                    readonly src: "2167:139:117";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [66805];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 66805;
                            readonly mutability: "mutable";
                            readonly name: "oldAllowance";
                            readonly nameLocation: "2185:12:117";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 66823;
                            readonly src: "2177:20:117";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 66804;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2177:7:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 66814;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 66810;
                                    readonly name: "this";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -28;
                                    readonly src: "2224:4:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_SafeERC20_$67006";
                                        readonly typeString: "library SafeERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_SafeERC20_$67006";
                                        readonly typeString: "library SafeERC20";
                                    }];
                                    readonly id: 66809;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2216:7:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 66808;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2216:7:117";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 66811;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2216:13:117";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 66812;
                                readonly name: "spender";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66799;
                                readonly src: "2231:7:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly expression: {
                                    readonly id: 66806;
                                    readonly name: "token";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66797;
                                    readonly src: "2200:5:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                        readonly typeString: "contract IERC20";
                                    };
                                };
                                readonly id: 66807;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2206:9:117";
                                readonly memberName: "allowance";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 66631;
                                readonly src: "2200:15:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$";
                                    readonly typeString: "function (address,address) view external returns (uint256)";
                                };
                            };
                            readonly id: 66813;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2200:39:117";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2177:62:117";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 66816;
                                readonly name: "token";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66797;
                                readonly src: "2262:5:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                    readonly typeString: "contract IERC20";
                                };
                            }, {
                                readonly id: 66817;
                                readonly name: "spender";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66799;
                                readonly src: "2269:7:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 66820;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 66818;
                                    readonly name: "oldAllowance";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66805;
                                    readonly src: "2278:12:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly id: 66819;
                                    readonly name: "value";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66801;
                                    readonly src: "2293:5:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2278:20:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                    readonly typeString: "contract IERC20";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 66815;
                                readonly name: "forceApprove";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66914;
                                readonly src: "2249:12:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$66654_$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (contract IERC20,address,uint256)";
                                };
                            };
                            readonly id: 66821;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2249:50:117";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 66822;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2249:50:117";
                    }];
                };
                readonly documentation: {
                    readonly id: 66794;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1896:180:117";
                    readonly text: " @dev Increase the calling contract's allowance toward `spender` by `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeIncreaseAllowance";
                readonly nameLocation: "2090:21:117";
                readonly parameters: {
                    readonly id: 66802;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66797;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "2119:5:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66824;
                        readonly src: "2112:12:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$66654";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 66796;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 66795;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["2112:6:117"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 66654;
                                readonly src: "2112:6:117";
                            };
                            readonly referencedDeclaration: 66654;
                            readonly src: "2112:6:117";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66799;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "2134:7:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66824;
                        readonly src: "2126:15:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66798;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2126:7:117";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66801;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "2151:5:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66824;
                        readonly src: "2143:13:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 66800;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2143:7:117";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2111:46:117";
                };
                readonly returnParameters: {
                    readonly id: 66803;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2167:0:117";
                };
                readonly scope: 67006;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 66867;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2509:468:117";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66866;
                    readonly nodeType: "Block";
                    readonly src: "2607:370:117";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly id: 66865;
                        readonly nodeType: "UncheckedBlock";
                        readonly src: "2617:354:117";
                        readonly statements: readonly [{
                            readonly assignments: readonly [66836];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 66836;
                                readonly mutability: "mutable";
                                readonly name: "currentAllowance";
                                readonly nameLocation: "2649:16:117";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 66865;
                                readonly src: "2641:24:117";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 66835;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "2641:7:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 66845;
                            readonly initialValue: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 66841;
                                        readonly name: "this";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -28;
                                        readonly src: "2692:4:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_SafeERC20_$67006";
                                            readonly typeString: "library SafeERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_SafeERC20_$67006";
                                            readonly typeString: "library SafeERC20";
                                        }];
                                        readonly id: 66840;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "2684:7:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 66839;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "2684:7:117";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 66842;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2684:13:117";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }, {
                                    readonly id: 66843;
                                    readonly name: "spender";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66830;
                                    readonly src: "2699:7:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    }, {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    }];
                                    readonly expression: {
                                        readonly id: 66837;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66828;
                                        readonly src: "2668:5:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 66838;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "2674:9:117";
                                    readonly memberName: "allowance";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 66631;
                                    readonly src: "2668:15:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$";
                                        readonly typeString: "function (address,address) view external returns (uint256)";
                                    };
                                };
                                readonly id: 66844;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2668:39:117";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "2641:66:117";
                        }, {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 66848;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 66846;
                                    readonly name: "currentAllowance";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66836;
                                    readonly src: "2725:16:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly id: 66847;
                                    readonly name: "requestedDecrease";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66832;
                                    readonly src: "2744:17:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2725:36:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 66856;
                            readonly nodeType: "IfStatement";
                            readonly src: "2721:160:117";
                            readonly trueBody: {
                                readonly id: 66855;
                                readonly nodeType: "Block";
                                readonly src: "2763:118:117";
                                readonly statements: readonly [{
                                    readonly errorCall: {
                                        readonly arguments: readonly [{
                                            readonly id: 66850;
                                            readonly name: "spender";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 66830;
                                            readonly src: "2821:7:117";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 66851;
                                            readonly name: "currentAllowance";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 66836;
                                            readonly src: "2830:16:117";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 66852;
                                            readonly name: "requestedDecrease";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 66832;
                                            readonly src: "2848:17:117";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly id: 66849;
                                            readonly name: "SafeERC20FailedDecreaseAllowance";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 66742;
                                            readonly src: "2788:32:117";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_error_pure$_t_address_$_t_uint256_$_t_uint256_$returns$__$";
                                                readonly typeString: "function (address,uint256,uint256) pure";
                                            };
                                        };
                                        readonly id: 66853;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2788:78:117";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$__$";
                                            readonly typeString: "tuple()";
                                        };
                                    };
                                    readonly id: 66854;
                                    readonly nodeType: "RevertStatement";
                                    readonly src: "2781:85:117";
                                }];
                            };
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly id: 66858;
                                    readonly name: "token";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66828;
                                    readonly src: "2907:5:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                        readonly typeString: "contract IERC20";
                                    };
                                }, {
                                    readonly id: 66859;
                                    readonly name: "spender";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66830;
                                    readonly src: "2914:7:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }, {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 66862;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 66860;
                                        readonly name: "currentAllowance";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66836;
                                        readonly src: "2923:16:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 66861;
                                        readonly name: "requestedDecrease";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66832;
                                        readonly src: "2942:17:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2923:36:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                        readonly typeString: "contract IERC20";
                                    }, {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 66857;
                                    readonly name: "forceApprove";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66914;
                                    readonly src: "2894:12:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$66654_$_t_address_$_t_uint256_$returns$__$";
                                        readonly typeString: "function (contract IERC20,address,uint256)";
                                    };
                                };
                                readonly id: 66863;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2894:66:117";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$__$";
                                    readonly typeString: "tuple()";
                                };
                            };
                            readonly id: 66864;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "2894:66:117";
                        }];
                    }];
                };
                readonly documentation: {
                    readonly id: 66825;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2312:192:117";
                    readonly text: " @dev Decrease the calling contract's allowance toward `spender` by `requestedDecrease`. If `token` returns no\n value, non-reverting calls are assumed to be successful.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeDecreaseAllowance";
                readonly nameLocation: "2518:21:117";
                readonly parameters: {
                    readonly id: 66833;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66828;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "2547:5:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66867;
                        readonly src: "2540:12:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$66654";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 66827;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 66826;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["2540:6:117"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 66654;
                                readonly src: "2540:6:117";
                            };
                            readonly referencedDeclaration: 66654;
                            readonly src: "2540:6:117";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66830;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "2562:7:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66867;
                        readonly src: "2554:15:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66829;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2554:7:117";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66832;
                        readonly mutability: "mutable";
                        readonly name: "requestedDecrease";
                        readonly nameLocation: "2579:17:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66867;
                        readonly src: "2571:25:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 66831;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2571:7:117";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2539:58:117";
                };
                readonly returnParameters: {
                    readonly id: 66834;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2607:0:117";
                };
                readonly scope: 67006;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 66914;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3296:380:117";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66913;
                    readonly nodeType: "Block";
                    readonly src: "3373:303:117";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [66879];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 66879;
                            readonly mutability: "mutable";
                            readonly name: "approvalCall";
                            readonly nameLocation: "3396:12:117";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 66913;
                            readonly src: "3383:25:117";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 66878;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3383:5:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 66888;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 66882;
                                    readonly name: "token";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66871;
                                    readonly src: "3426:5:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                        readonly typeString: "contract IERC20";
                                    };
                                };
                                readonly id: 66883;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3432:7:117";
                                readonly memberName: "approve";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 66641;
                                readonly src: "3426:13:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                    readonly typeString: "function (address,uint256) external returns (bool)";
                                };
                            }, {
                                readonly components: readonly [{
                                    readonly id: 66884;
                                    readonly name: "spender";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66873;
                                    readonly src: "3442:7:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }, {
                                    readonly id: 66885;
                                    readonly name: "value";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66875;
                                    readonly src: "3451:5:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 66886;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "3441:16:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_address_$_t_uint256_$";
                                    readonly typeString: "tuple(address,uint256)";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                    readonly typeString: "function (address,uint256) external returns (bool)";
                                }, {
                                    readonly typeIdentifier: "t_tuple$_t_address_$_t_uint256_$";
                                    readonly typeString: "tuple(address,uint256)";
                                }];
                                readonly expression: {
                                    readonly id: 66880;
                                    readonly name: "abi";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -1;
                                    readonly src: "3411:3:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_abi";
                                        readonly typeString: "abi";
                                    };
                                };
                                readonly id: 66881;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3415:10:117";
                                readonly memberName: "encodeCall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "3411:14:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function () pure returns (bytes memory)";
                                };
                            };
                            readonly id: 66887;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3411:47:117";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3383:75:117";
                    }, {
                        readonly condition: {
                            readonly id: 66893;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "3473:45:117";
                            readonly subExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 66890;
                                    readonly name: "token";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66871;
                                    readonly src: "3498:5:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                        readonly typeString: "contract IERC20";
                                    };
                                }, {
                                    readonly id: 66891;
                                    readonly name: "approvalCall";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66879;
                                    readonly src: "3505:12:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                        readonly typeString: "contract IERC20";
                                    }, {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly id: 66889;
                                    readonly name: "_callOptionalReturnBool";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 67005;
                                    readonly src: "3474:23:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$66654_$_t_bytes_memory_ptr_$returns$_t_bool_$";
                                        readonly typeString: "function (contract IERC20,bytes memory) returns (bool)";
                                    };
                                };
                                readonly id: 66892;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3474:44:117";
                                readonly tryCall: false;
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
                        readonly id: 66912;
                        readonly nodeType: "IfStatement";
                        readonly src: "3469:201:117";
                        readonly trueBody: {
                            readonly id: 66911;
                            readonly nodeType: "Block";
                            readonly src: "3520:150:117";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 66895;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66871;
                                        readonly src: "3554:5:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly id: 66898;
                                                readonly name: "token";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 66871;
                                                readonly src: "3576:5:117";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 66899;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3582:7:117";
                                            readonly memberName: "approve";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 66641;
                                            readonly src: "3576:13:117";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,uint256) external returns (bool)";
                                            };
                                        }, {
                                            readonly components: readonly [{
                                                readonly id: 66900;
                                                readonly name: "spender";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 66873;
                                                readonly src: "3592:7:117";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            }, {
                                                readonly hexValue: "30";
                                                readonly id: 66901;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3601:1:117";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }];
                                            readonly id: 66902;
                                            readonly isConstant: false;
                                            readonly isInlineArray: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "TupleExpression";
                                            readonly src: "3591:12:117";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$_t_address_$_t_rational_0_by_1_$";
                                                readonly typeString: "tuple(address,int_const 0)";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,uint256) external returns (bool)";
                                            }, {
                                                readonly typeIdentifier: "t_tuple$_t_address_$_t_rational_0_by_1_$";
                                                readonly typeString: "tuple(address,int_const 0)";
                                            }];
                                            readonly expression: {
                                                readonly id: 66896;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "3561:3:117";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 66897;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3565:10:117";
                                            readonly memberName: "encodeCall";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "3561:14:117";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function () pure returns (bytes memory)";
                                            };
                                        };
                                        readonly id: 66903;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3561:43:117";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                            readonly typeString: "contract IERC20";
                                        }, {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly id: 66894;
                                        readonly name: "_callOptionalReturn";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66956;
                                        readonly src: "3534:19:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$66654_$_t_bytes_memory_ptr_$returns$__$";
                                            readonly typeString: "function (contract IERC20,bytes memory)";
                                        };
                                    };
                                    readonly id: 66904;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3534:71:117";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 66905;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3534:71:117";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 66907;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66871;
                                        readonly src: "3639:5:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }, {
                                        readonly id: 66908;
                                        readonly name: "approvalCall";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66879;
                                        readonly src: "3646:12:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                            readonly typeString: "contract IERC20";
                                        }, {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly id: 66906;
                                        readonly name: "_callOptionalReturn";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66956;
                                        readonly src: "3619:19:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$66654_$_t_bytes_memory_ptr_$returns$__$";
                                            readonly typeString: "function (contract IERC20,bytes memory)";
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
                                    readonly src: "3619:40:117";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 66910;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3619:40:117";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 66868;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2983:308:117";
                    readonly text: " @dev Set the calling contract's allowance toward `spender` to `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful. Meant to be used with tokens that require the approval\n to be set to zero before setting it to a non-zero value, such as USDT.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "forceApprove";
                readonly nameLocation: "3305:12:117";
                readonly parameters: {
                    readonly id: 66876;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66871;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "3325:5:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66914;
                        readonly src: "3318:12:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$66654";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 66870;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 66869;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["3318:6:117"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 66654;
                                readonly src: "3318:6:117";
                            };
                            readonly referencedDeclaration: 66654;
                            readonly src: "3318:6:117";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66873;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "3340:7:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66914;
                        readonly src: "3332:15:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66872;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3332:7:117";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66875;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3357:5:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66914;
                        readonly src: "3349:13:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 66874;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3349:7:117";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3317:46:117";
                };
                readonly returnParameters: {
                    readonly id: 66877;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3373:0:117";
                };
                readonly scope: 67006;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 66956;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4059:629:117";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66955;
                    readonly nodeType: "Block";
                    readonly src: "4129:559:117";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [66924];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 66924;
                            readonly mutability: "mutable";
                            readonly name: "returndata";
                            readonly nameLocation: "4491:10:117";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 66955;
                            readonly src: "4478:23:117";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 66923;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4478:5:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 66932;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 66930;
                                readonly name: "data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66920;
                                readonly src: "4532:4:117";
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
                                    readonly arguments: readonly [{
                                        readonly id: 66927;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66918;
                                        readonly src: "4512:5:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                            readonly typeString: "contract IERC20";
                                        }];
                                        readonly id: 66926;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "4504:7:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 66925;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "4504:7:117";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 66928;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4504:14:117";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 66929;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4519:12:117";
                                readonly memberName: "functionCall";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 67080;
                                readonly src: "4504:27:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$attached_to$_t_address_$";
                                    readonly typeString: "function (address,bytes memory) returns (bytes memory)";
                                };
                            };
                            readonly id: 66931;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4504:33:117";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4478:59:117";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 66945;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 66936;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 66933;
                                        readonly name: "returndata";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66924;
                                        readonly src: "4551:10:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 66934;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4562:6:117";
                                    readonly memberName: "length";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "4551:17:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 66935;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4572:1:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "4551:22:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "&&";
                            readonly rightExpression: {
                                readonly id: 66944;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "UnaryOperation";
                                readonly operator: "!";
                                readonly prefix: true;
                                readonly src: "4577:31:117";
                                readonly subExpression: {
                                    readonly arguments: readonly [{
                                        readonly id: 66939;
                                        readonly name: "returndata";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66924;
                                        readonly src: "4589:10:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }, {
                                        readonly components: readonly [{
                                            readonly id: 66941;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "4602:4:117";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bool_$";
                                                readonly typeString: "type(bool)";
                                            };
                                            readonly typeName: {
                                                readonly id: 66940;
                                                readonly name: "bool";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "4602:4:117";
                                                readonly typeDescriptions: {};
                                            };
                                        }];
                                        readonly id: 66942;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "4601:6:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_bool_$";
                                            readonly typeString: "type(bool)";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }, {
                                            readonly typeIdentifier: "t_type$_t_bool_$";
                                            readonly typeString: "type(bool)";
                                        }];
                                        readonly expression: {
                                            readonly id: 66937;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "4578:3:117";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 66938;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4582:6:117";
                                        readonly memberName: "decode";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4578:10:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abidecode_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 66943;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4578:30:117";
                                    readonly tryCall: false;
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
                            readonly src: "4551:57:117";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 66954;
                        readonly nodeType: "IfStatement";
                        readonly src: "4547:135:117";
                        readonly trueBody: {
                            readonly id: 66953;
                            readonly nodeType: "Block";
                            readonly src: "4610:72:117";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 66949;
                                            readonly name: "token";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 66918;
                                            readonly src: "4664:5:117";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                                readonly typeString: "contract IERC20";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                                readonly typeString: "contract IERC20";
                                            }];
                                            readonly id: 66948;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "4656:7:117";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 66947;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "4656:7:117";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 66950;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4656:14:117";
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
                                        readonly id: 66946;
                                        readonly name: "SafeERC20FailedOperation";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66733;
                                        readonly src: "4631:24:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$_t_address_$returns$__$";
                                            readonly typeString: "function (address) pure";
                                        };
                                    };
                                    readonly id: 66951;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4631:40:117";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 66952;
                                readonly nodeType: "RevertStatement";
                                readonly src: "4624:47:117";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 66915;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3682:372:117";
                    readonly text: " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants).";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_callOptionalReturn";
                readonly nameLocation: "4068:19:117";
                readonly parameters: {
                    readonly id: 66921;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66918;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "4095:5:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66956;
                        readonly src: "4088:12:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$66654";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 66917;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 66916;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["4088:6:117"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 66654;
                                readonly src: "4088:6:117";
                            };
                            readonly referencedDeclaration: 66654;
                            readonly src: "4088:6:117";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66920;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "4115:4:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66956;
                        readonly src: "4102:17:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 66919;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4102:5:117";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4087:33:117";
                };
                readonly returnParameters: {
                    readonly id: 66922;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4129:0:117";
                };
                readonly scope: 67006;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 67005;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5189:578:117";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 67004;
                    readonly nodeType: "Block";
                    readonly src: "5278:489:117";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [66968, 66970];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 66968;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "5579:7:117";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 67004;
                            readonly src: "5574:12:117";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 66967;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5574:4:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 66970;
                            readonly mutability: "mutable";
                            readonly name: "returndata";
                            readonly nameLocation: "5601:10:117";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 67004;
                            readonly src: "5588:23:117";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 66969;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5588:5:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 66978;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 66976;
                                readonly name: "data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66962;
                                readonly src: "5635:4:117";
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
                                    readonly arguments: readonly [{
                                        readonly id: 66973;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66960;
                                        readonly src: "5623:5:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                            readonly typeString: "contract IERC20";
                                        }];
                                        readonly id: 66972;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "5615:7:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 66971;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "5615:7:117";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 66974;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5615:14:117";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 66975;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5630:4:117";
                                readonly memberName: "call";
                                readonly nodeType: "MemberAccess";
                                readonly src: "5615:19:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 66977;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5615:25:117";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5573:67:117";
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 67002;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly id: 66993;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 66979;
                                    readonly name: "success";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66968;
                                    readonly src: "5657:7:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "&&";
                                readonly rightExpression: {
                                    readonly components: readonly [{
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                        readonly id: 66991;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 66983;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly expression: {
                                                    readonly id: 66980;
                                                    readonly name: "returndata";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 66970;
                                                    readonly src: "5669:10:117";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                };
                                                readonly id: 66981;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5680:6:117";
                                                readonly memberName: "length";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "5669:17:117";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "==";
                                            readonly rightExpression: {
                                                readonly hexValue: "30";
                                                readonly id: 66982;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5690:1:117";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            };
                                            readonly src: "5669:22:117";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "||";
                                        readonly rightExpression: {
                                            readonly arguments: readonly [{
                                                readonly id: 66986;
                                                readonly name: "returndata";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 66970;
                                                readonly src: "5706:10:117";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            }, {
                                                readonly components: readonly [{
                                                    readonly id: 66988;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "5719:4:117";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_bool_$";
                                                        readonly typeString: "type(bool)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 66987;
                                                        readonly name: "bool";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "5719:4:117";
                                                        readonly typeDescriptions: {};
                                                    };
                                                }];
                                                readonly id: 66989;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "5718:6:117";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_bool_$";
                                                    readonly typeString: "type(bool)";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                }, {
                                                    readonly typeIdentifier: "t_type$_t_bool_$";
                                                    readonly typeString: "type(bool)";
                                                }];
                                                readonly expression: {
                                                    readonly id: 66984;
                                                    readonly name: "abi";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: -1;
                                                    readonly src: "5695:3:117";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_magic_abi";
                                                        readonly typeString: "abi";
                                                    };
                                                };
                                                readonly id: 66985;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5699:6:117";
                                                readonly memberName: "decode";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "5695:10:117";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_abidecode_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 66990;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5695:30:117";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        };
                                        readonly src: "5669:56:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    }];
                                    readonly id: 66992;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "5668:58:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly src: "5657:69:117";
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
                                readonly id: 67001;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly id: 66996;
                                                readonly name: "token";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 66960;
                                                readonly src: "5738:5:117";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                                    readonly typeString: "contract IERC20";
                                                }];
                                                readonly id: 66995;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5730:7:117";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 66994;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5730:7:117";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 66997;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5730:14:117";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 66998;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5745:4:117";
                                        readonly memberName: "code";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "5730:19:117";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 66999;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5750:6:117";
                                    readonly memberName: "length";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "5730:26:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 67000;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5759:1:117";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "5730:30:117";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "5657:103:117";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 66966;
                        readonly id: 67003;
                        readonly nodeType: "Return";
                        readonly src: "5650:110:117";
                    }];
                };
                readonly documentation: {
                    readonly id: 66957;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4694:490:117";
                    readonly text: " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants).\n This is a variant of {_callOptionalReturn} that silents catches all reverts and returns a bool instead.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_callOptionalReturnBool";
                readonly nameLocation: "5198:23:117";
                readonly parameters: {
                    readonly id: 66963;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66960;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "5229:5:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 67005;
                        readonly src: "5222:12:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$66654";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 66959;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 66958;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["5222:6:117"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 66654;
                                readonly src: "5222:6:117";
                            };
                            readonly referencedDeclaration: 66654;
                            readonly src: "5222:6:117";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$66654";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66962;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "5249:4:117";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 67005;
                        readonly src: "5236:17:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 66961;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5236:5:117";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5221:33:117";
                };
                readonly returnParameters: {
                    readonly id: 66966;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66965;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 67005;
                        readonly src: "5272:4:117";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 66964;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5272:4:117";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5271:6:117";
                };
                readonly scope: 67006;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "private";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "SafeERC20";
            readonly contractDependencies: readonly [];
            readonly contractKind: "library";
            readonly documentation: {
                readonly id: 66725;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "293:457:117";
                readonly text: " @title SafeERC20\n @dev Wrappers around ERC20 operations that throw on failure (when the token\n contract returns false). Tokens that return no value (and instead revert or\n throw on failure) are also supported, non-reverting calls are assumed to be\n successful.\n To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\n which allows you to call the safe operations as `token.safeTransfer(...)`, etc.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [67006];
            readonly name: "SafeERC20";
            readonly nameLocation: "759:9:117";
            readonly scope: 67007;
            readonly usedErrors: readonly [66733, 66742];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 117;
};
//# sourceMappingURL=SafeERC20.d.ts.map