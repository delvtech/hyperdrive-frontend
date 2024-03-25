export declare const SafeERC20: {
    readonly abi: readonly [{
        readonly type: "error";
        readonly name: "SafeERC20FailedDecreaseAllowance";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "currentAllowance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "requestedDecrease";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "SafeERC20FailedOperation";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122076f48067ee79af48f87c626716abb2d6dba39ab8e4a1bf0af237818455119cfe64736f6c63430008140033";
        readonly sourceMap: "751:5018:172:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;751:5018:172;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122076f48067ee79af48f87c626716abb2d6dba39ab8e4a1bf0af237818455119cfe64736f6c63430008140033";
        readonly sourceMap: "751:5018:172:-:0;;;;;;;;";
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
        readonly id: 71822;
        readonly exportedSymbols: {
            readonly Address: readonly [72074];
            readonly IERC20: readonly [71469];
            readonly IERC20Permit: readonly [71531];
            readonly SafeERC20: readonly [71821];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "115:5655:172";
        readonly nodes: readonly [{
            readonly id: 71533;
            readonly nodeType: "PragmaDirective";
            readonly src: "115:24:172";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "^", "0.8", ".20"];
        }, {
            readonly id: 71535;
            readonly nodeType: "ImportDirective";
            readonly src: "141:37:172";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";
            readonly file: "../IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 71822;
            readonly sourceUnit: 71470;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 71534;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 71469;
                    readonly src: "149:6:172";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 71537;
            readonly nodeType: "ImportDirective";
            readonly src: "179:60:172";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol";
            readonly file: "../extensions/IERC20Permit.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 71822;
            readonly sourceUnit: 71532;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 71536;
                    readonly name: "IERC20Permit";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 71531;
                    readonly src: "187:12:172";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 71539;
            readonly nodeType: "ImportDirective";
            readonly src: "240:51:172";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/openzeppelin-contracts/contracts/utils/Address.sol";
            readonly file: "../../../utils/Address.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 71822;
            readonly sourceUnit: 72075;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 71538;
                    readonly name: "Address";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 72074;
                    readonly src: "248:7:172";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 71821;
            readonly nodeType: "ContractDefinition";
            readonly src: "751:5018:172";
            readonly nodes: readonly [{
                readonly id: 71543;
                readonly nodeType: "UsingForDirective";
                readonly src: "775:26:172";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 71541;
                    readonly name: "Address";
                    readonly nameLocations: readonly ["781:7:172"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 72074;
                    readonly src: "781:7:172";
                };
                readonly typeName: {
                    readonly id: 71542;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "793:7:172";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
            }, {
                readonly id: 71548;
                readonly nodeType: "ErrorDefinition";
                readonly src: "876:46:172";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 71544;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "807:64:172";
                    readonly text: " @dev An operation with an ERC20 token failed.";
                };
                readonly errorSelector: "5274afe7";
                readonly name: "SafeERC20FailedOperation";
                readonly nameLocation: "882:24:172";
                readonly parameters: {
                    readonly id: 71547;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71546;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "915:5:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71548;
                        readonly src: "907:13:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71545;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "907:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "906:15:172";
                };
            }, {
                readonly id: 71557;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1004:109:172";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 71549;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "928:71:172";
                    readonly text: " @dev Indicates a failed `decreaseAllowance` request.";
                };
                readonly errorSelector: "e570110f";
                readonly name: "SafeERC20FailedDecreaseAllowance";
                readonly nameLocation: "1010:32:172";
                readonly parameters: {
                    readonly id: 71556;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71551;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "1051:7:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71557;
                        readonly src: "1043:15:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71550;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1043:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71553;
                        readonly mutability: "mutable";
                        readonly name: "currentAllowance";
                        readonly nameLocation: "1068:16:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71557;
                        readonly src: "1060:24:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71552;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1060:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71555;
                        readonly mutability: "mutable";
                        readonly name: "requestedDecrease";
                        readonly nameLocation: "1094:17:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71557;
                        readonly src: "1086:25:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71554;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1086:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1042:70:172";
                };
            }, {
                readonly id: 71581;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1303:160:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71580;
                    readonly nodeType: "Block";
                    readonly src: "1375:88:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 71569;
                                readonly name: "token";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71561;
                                readonly src: "1405:5:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                    readonly typeString: "contract IERC20";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 71572;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71561;
                                        readonly src: "1427:5:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 71573;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1433:8:172";
                                    readonly memberName: "transfer";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 71436;
                                    readonly src: "1427:14:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                        readonly typeString: "function (address,uint256) external returns (bool)";
                                    };
                                }, {
                                    readonly components: readonly [{
                                        readonly id: 71574;
                                        readonly name: "to";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71563;
                                        readonly src: "1444:2:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 71575;
                                        readonly name: "value";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71565;
                                        readonly src: "1448:5:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 71576;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "1443:11:172";
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
                                        readonly id: 71570;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "1412:3:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 71571;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1416:10:172";
                                    readonly memberName: "encodeCall";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "1412:14:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 71577;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1412:43:172";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                    readonly typeString: "contract IERC20";
                                }, {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly id: 71568;
                                readonly name: "_callOptionalReturn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71771;
                                readonly src: "1385:19:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$71469_$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (contract IERC20,bytes memory)";
                                };
                            };
                            readonly id: 71578;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1385:71:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 71579;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1385:71:172";
                    }];
                };
                readonly documentation: {
                    readonly id: 71558;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1119:179:172";
                    readonly text: " @dev Transfer `value` amount of `token` from the calling contract to `to`. If `token` returns no value,\n non-reverting calls are assumed to be successful.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeTransfer";
                readonly nameLocation: "1312:12:172";
                readonly parameters: {
                    readonly id: 71566;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71561;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "1332:5:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71581;
                        readonly src: "1325:12:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$71469";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 71560;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71559;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["1325:6:172"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 71469;
                                readonly src: "1325:6:172";
                            };
                            readonly referencedDeclaration: 71469;
                            readonly src: "1325:6:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71563;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1347:2:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71581;
                        readonly src: "1339:10:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71562;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1339:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71565;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "1359:5:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71581;
                        readonly src: "1351:13:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71564;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1351:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1324:41:172";
                };
                readonly returnParameters: {
                    readonly id: 71567;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1375:0:172";
                };
                readonly scope: 71821;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71608;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1702:188:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71607;
                    readonly nodeType: "Block";
                    readonly src: "1792:98:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 71595;
                                readonly name: "token";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71585;
                                readonly src: "1822:5:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                    readonly typeString: "contract IERC20";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 71598;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71585;
                                        readonly src: "1844:5:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 71599;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1850:12:172";
                                    readonly memberName: "transferFrom";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 71468;
                                    readonly src: "1844:18:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$";
                                        readonly typeString: "function (address,address,uint256) external returns (bool)";
                                    };
                                }, {
                                    readonly components: readonly [{
                                        readonly id: 71600;
                                        readonly name: "from";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71587;
                                        readonly src: "1865:4:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 71601;
                                        readonly name: "to";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71589;
                                        readonly src: "1871:2:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 71602;
                                        readonly name: "value";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71591;
                                        readonly src: "1875:5:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 71603;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "1864:17:172";
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
                                        readonly id: 71596;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "1829:3:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 71597;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1833:10:172";
                                    readonly memberName: "encodeCall";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "1829:14:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 71604;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1829:53:172";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                    readonly typeString: "contract IERC20";
                                }, {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly id: 71594;
                                readonly name: "_callOptionalReturn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71771;
                                readonly src: "1802:19:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$71469_$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (contract IERC20,bytes memory)";
                                };
                            };
                            readonly id: 71605;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1802:81:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 71606;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1802:81:172";
                    }];
                };
                readonly documentation: {
                    readonly id: 71582;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1469:228:172";
                    readonly text: " @dev Transfer `value` amount of `token` from `from` to `to`, spending the approval given by `from` to the\n calling contract. If `token` returns no value, non-reverting calls are assumed to be successful.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeTransferFrom";
                readonly nameLocation: "1711:16:172";
                readonly parameters: {
                    readonly id: 71592;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71585;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "1735:5:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71608;
                        readonly src: "1728:12:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$71469";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 71584;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71583;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["1728:6:172"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 71469;
                                readonly src: "1728:6:172";
                            };
                            readonly referencedDeclaration: 71469;
                            readonly src: "1728:6:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71587;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "1750:4:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71608;
                        readonly src: "1742:12:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71586;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1742:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71589;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1764:2:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71608;
                        readonly src: "1756:10:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71588;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1756:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71591;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "1776:5:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71608;
                        readonly src: "1768:13:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71590;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1768:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1727:55:172";
                };
                readonly returnParameters: {
                    readonly id: 71593;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1792:0:172";
                };
                readonly scope: 71821;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71639;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2081:225:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71638;
                    readonly nodeType: "Block";
                    readonly src: "2167:139:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [71620];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 71620;
                            readonly mutability: "mutable";
                            readonly name: "oldAllowance";
                            readonly nameLocation: "2185:12:172";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71638;
                            readonly src: "2177:20:172";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 71619;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2177:7:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 71629;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 71625;
                                    readonly name: "this";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -28;
                                    readonly src: "2224:4:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_SafeERC20_$71821";
                                        readonly typeString: "library SafeERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_SafeERC20_$71821";
                                        readonly typeString: "library SafeERC20";
                                    }];
                                    readonly id: 71624;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2216:7:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 71623;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2216:7:172";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 71626;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2216:13:172";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 71627;
                                readonly name: "spender";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71614;
                                readonly src: "2231:7:172";
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
                                    readonly id: 71621;
                                    readonly name: "token";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71612;
                                    readonly src: "2200:5:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                        readonly typeString: "contract IERC20";
                                    };
                                };
                                readonly id: 71622;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2206:9:172";
                                readonly memberName: "allowance";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 71446;
                                readonly src: "2200:15:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$";
                                    readonly typeString: "function (address,address) view external returns (uint256)";
                                };
                            };
                            readonly id: 71628;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2200:39:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2177:62:172";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 71631;
                                readonly name: "token";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71612;
                                readonly src: "2262:5:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                    readonly typeString: "contract IERC20";
                                };
                            }, {
                                readonly id: 71632;
                                readonly name: "spender";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71614;
                                readonly src: "2269:7:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 71635;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 71633;
                                    readonly name: "oldAllowance";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71620;
                                    readonly src: "2278:12:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly id: 71634;
                                    readonly name: "value";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71616;
                                    readonly src: "2293:5:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2278:20:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                    readonly typeString: "contract IERC20";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 71630;
                                readonly name: "forceApprove";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71729;
                                readonly src: "2249:12:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$71469_$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (contract IERC20,address,uint256)";
                                };
                            };
                            readonly id: 71636;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2249:50:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 71637;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2249:50:172";
                    }];
                };
                readonly documentation: {
                    readonly id: 71609;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1896:180:172";
                    readonly text: " @dev Increase the calling contract's allowance toward `spender` by `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeIncreaseAllowance";
                readonly nameLocation: "2090:21:172";
                readonly parameters: {
                    readonly id: 71617;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71612;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "2119:5:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71639;
                        readonly src: "2112:12:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$71469";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 71611;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71610;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["2112:6:172"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 71469;
                                readonly src: "2112:6:172";
                            };
                            readonly referencedDeclaration: 71469;
                            readonly src: "2112:6:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71614;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "2134:7:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71639;
                        readonly src: "2126:15:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71613;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2126:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71616;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "2151:5:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71639;
                        readonly src: "2143:13:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71615;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2143:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2111:46:172";
                };
                readonly returnParameters: {
                    readonly id: 71618;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2167:0:172";
                };
                readonly scope: 71821;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71682;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2509:468:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71681;
                    readonly nodeType: "Block";
                    readonly src: "2607:370:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly id: 71680;
                        readonly nodeType: "UncheckedBlock";
                        readonly src: "2617:354:172";
                        readonly statements: readonly [{
                            readonly assignments: readonly [71651];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 71651;
                                readonly mutability: "mutable";
                                readonly name: "currentAllowance";
                                readonly nameLocation: "2649:16:172";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 71680;
                                readonly src: "2641:24:172";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 71650;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "2641:7:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 71660;
                            readonly initialValue: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 71656;
                                        readonly name: "this";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -28;
                                        readonly src: "2692:4:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_SafeERC20_$71821";
                                            readonly typeString: "library SafeERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_SafeERC20_$71821";
                                            readonly typeString: "library SafeERC20";
                                        }];
                                        readonly id: 71655;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "2684:7:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 71654;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "2684:7:172";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 71657;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2684:13:172";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }, {
                                    readonly id: 71658;
                                    readonly name: "spender";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71645;
                                    readonly src: "2699:7:172";
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
                                        readonly id: 71652;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71643;
                                        readonly src: "2668:5:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 71653;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "2674:9:172";
                                    readonly memberName: "allowance";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 71446;
                                    readonly src: "2668:15:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$";
                                        readonly typeString: "function (address,address) view external returns (uint256)";
                                    };
                                };
                                readonly id: 71659;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2668:39:172";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "2641:66:172";
                        }, {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 71663;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 71661;
                                    readonly name: "currentAllowance";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71651;
                                    readonly src: "2725:16:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly id: 71662;
                                    readonly name: "requestedDecrease";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71647;
                                    readonly src: "2744:17:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2725:36:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 71671;
                            readonly nodeType: "IfStatement";
                            readonly src: "2721:160:172";
                            readonly trueBody: {
                                readonly id: 71670;
                                readonly nodeType: "Block";
                                readonly src: "2763:118:172";
                                readonly statements: readonly [{
                                    readonly errorCall: {
                                        readonly arguments: readonly [{
                                            readonly id: 71665;
                                            readonly name: "spender";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 71645;
                                            readonly src: "2821:7:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 71666;
                                            readonly name: "currentAllowance";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 71651;
                                            readonly src: "2830:16:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 71667;
                                            readonly name: "requestedDecrease";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 71647;
                                            readonly src: "2848:17:172";
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
                                            readonly id: 71664;
                                            readonly name: "SafeERC20FailedDecreaseAllowance";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 71557;
                                            readonly src: "2788:32:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_error_pure$_t_address_$_t_uint256_$_t_uint256_$returns$__$";
                                                readonly typeString: "function (address,uint256,uint256) pure";
                                            };
                                        };
                                        readonly id: 71668;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2788:78:172";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$__$";
                                            readonly typeString: "tuple()";
                                        };
                                    };
                                    readonly id: 71669;
                                    readonly nodeType: "RevertStatement";
                                    readonly src: "2781:85:172";
                                }];
                            };
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly id: 71673;
                                    readonly name: "token";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71643;
                                    readonly src: "2907:5:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                        readonly typeString: "contract IERC20";
                                    };
                                }, {
                                    readonly id: 71674;
                                    readonly name: "spender";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71645;
                                    readonly src: "2914:7:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }, {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 71677;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 71675;
                                        readonly name: "currentAllowance";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71651;
                                        readonly src: "2923:16:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 71676;
                                        readonly name: "requestedDecrease";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71647;
                                        readonly src: "2942:17:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2923:36:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                        readonly typeString: "contract IERC20";
                                    }, {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 71672;
                                    readonly name: "forceApprove";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71729;
                                    readonly src: "2894:12:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$71469_$_t_address_$_t_uint256_$returns$__$";
                                        readonly typeString: "function (contract IERC20,address,uint256)";
                                    };
                                };
                                readonly id: 71678;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2894:66:172";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$__$";
                                    readonly typeString: "tuple()";
                                };
                            };
                            readonly id: 71679;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "2894:66:172";
                        }];
                    }];
                };
                readonly documentation: {
                    readonly id: 71640;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2312:192:172";
                    readonly text: " @dev Decrease the calling contract's allowance toward `spender` by `requestedDecrease`. If `token` returns no\n value, non-reverting calls are assumed to be successful.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeDecreaseAllowance";
                readonly nameLocation: "2518:21:172";
                readonly parameters: {
                    readonly id: 71648;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71643;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "2547:5:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71682;
                        readonly src: "2540:12:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$71469";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 71642;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71641;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["2540:6:172"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 71469;
                                readonly src: "2540:6:172";
                            };
                            readonly referencedDeclaration: 71469;
                            readonly src: "2540:6:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71645;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "2562:7:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71682;
                        readonly src: "2554:15:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71644;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2554:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71647;
                        readonly mutability: "mutable";
                        readonly name: "requestedDecrease";
                        readonly nameLocation: "2579:17:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71682;
                        readonly src: "2571:25:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71646;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2571:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2539:58:172";
                };
                readonly returnParameters: {
                    readonly id: 71649;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2607:0:172";
                };
                readonly scope: 71821;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71729;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3296:380:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71728;
                    readonly nodeType: "Block";
                    readonly src: "3373:303:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [71694];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 71694;
                            readonly mutability: "mutable";
                            readonly name: "approvalCall";
                            readonly nameLocation: "3396:12:172";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71728;
                            readonly src: "3383:25:172";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 71693;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3383:5:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 71703;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 71697;
                                    readonly name: "token";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71686;
                                    readonly src: "3426:5:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                        readonly typeString: "contract IERC20";
                                    };
                                };
                                readonly id: 71698;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3432:7:172";
                                readonly memberName: "approve";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 71456;
                                readonly src: "3426:13:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                    readonly typeString: "function (address,uint256) external returns (bool)";
                                };
                            }, {
                                readonly components: readonly [{
                                    readonly id: 71699;
                                    readonly name: "spender";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71688;
                                    readonly src: "3442:7:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }, {
                                    readonly id: 71700;
                                    readonly name: "value";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71690;
                                    readonly src: "3451:5:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 71701;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "3441:16:172";
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
                                    readonly id: 71695;
                                    readonly name: "abi";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -1;
                                    readonly src: "3411:3:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_abi";
                                        readonly typeString: "abi";
                                    };
                                };
                                readonly id: 71696;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3415:10:172";
                                readonly memberName: "encodeCall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "3411:14:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function () pure returns (bytes memory)";
                                };
                            };
                            readonly id: 71702;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3411:47:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3383:75:172";
                    }, {
                        readonly condition: {
                            readonly id: 71708;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "3473:45:172";
                            readonly subExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 71705;
                                    readonly name: "token";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71686;
                                    readonly src: "3498:5:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                        readonly typeString: "contract IERC20";
                                    };
                                }, {
                                    readonly id: 71706;
                                    readonly name: "approvalCall";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71694;
                                    readonly src: "3505:12:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                        readonly typeString: "contract IERC20";
                                    }, {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly id: 71704;
                                    readonly name: "_callOptionalReturnBool";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71820;
                                    readonly src: "3474:23:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$71469_$_t_bytes_memory_ptr_$returns$_t_bool_$";
                                        readonly typeString: "function (contract IERC20,bytes memory) returns (bool)";
                                    };
                                };
                                readonly id: 71707;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3474:44:172";
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
                        readonly id: 71727;
                        readonly nodeType: "IfStatement";
                        readonly src: "3469:201:172";
                        readonly trueBody: {
                            readonly id: 71726;
                            readonly nodeType: "Block";
                            readonly src: "3520:150:172";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 71710;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71686;
                                        readonly src: "3554:5:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly id: 71713;
                                                readonly name: "token";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 71686;
                                                readonly src: "3576:5:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 71714;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3582:7:172";
                                            readonly memberName: "approve";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 71456;
                                            readonly src: "3576:13:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,uint256) external returns (bool)";
                                            };
                                        }, {
                                            readonly components: readonly [{
                                                readonly id: 71715;
                                                readonly name: "spender";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 71688;
                                                readonly src: "3592:7:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            }, {
                                                readonly hexValue: "30";
                                                readonly id: 71716;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3601:1:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }];
                                            readonly id: 71717;
                                            readonly isConstant: false;
                                            readonly isInlineArray: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "TupleExpression";
                                            readonly src: "3591:12:172";
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
                                                readonly id: 71711;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "3561:3:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 71712;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3565:10:172";
                                            readonly memberName: "encodeCall";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "3561:14:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function () pure returns (bytes memory)";
                                            };
                                        };
                                        readonly id: 71718;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3561:43:172";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                            readonly typeString: "contract IERC20";
                                        }, {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly id: 71709;
                                        readonly name: "_callOptionalReturn";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71771;
                                        readonly src: "3534:19:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$71469_$_t_bytes_memory_ptr_$returns$__$";
                                            readonly typeString: "function (contract IERC20,bytes memory)";
                                        };
                                    };
                                    readonly id: 71719;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3534:71:172";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 71720;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3534:71:172";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 71722;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71686;
                                        readonly src: "3639:5:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }, {
                                        readonly id: 71723;
                                        readonly name: "approvalCall";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71694;
                                        readonly src: "3646:12:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                            readonly typeString: "contract IERC20";
                                        }, {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly id: 71721;
                                        readonly name: "_callOptionalReturn";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71771;
                                        readonly src: "3619:19:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$71469_$_t_bytes_memory_ptr_$returns$__$";
                                            readonly typeString: "function (contract IERC20,bytes memory)";
                                        };
                                    };
                                    readonly id: 71724;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3619:40:172";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 71725;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3619:40:172";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 71683;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2983:308:172";
                    readonly text: " @dev Set the calling contract's allowance toward `spender` to `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful. Meant to be used with tokens that require the approval\n to be set to zero before setting it to a non-zero value, such as USDT.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "forceApprove";
                readonly nameLocation: "3305:12:172";
                readonly parameters: {
                    readonly id: 71691;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71686;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "3325:5:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71729;
                        readonly src: "3318:12:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$71469";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 71685;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71684;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["3318:6:172"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 71469;
                                readonly src: "3318:6:172";
                            };
                            readonly referencedDeclaration: 71469;
                            readonly src: "3318:6:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71688;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "3340:7:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71729;
                        readonly src: "3332:15:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71687;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3332:7:172";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71690;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3357:5:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71729;
                        readonly src: "3349:13:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71689;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3349:7:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3317:46:172";
                };
                readonly returnParameters: {
                    readonly id: 71692;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3373:0:172";
                };
                readonly scope: 71821;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71771;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4059:629:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71770;
                    readonly nodeType: "Block";
                    readonly src: "4129:559:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [71739];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 71739;
                            readonly mutability: "mutable";
                            readonly name: "returndata";
                            readonly nameLocation: "4491:10:172";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71770;
                            readonly src: "4478:23:172";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 71738;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4478:5:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 71747;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 71745;
                                readonly name: "data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71735;
                                readonly src: "4532:4:172";
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
                                        readonly id: 71742;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71733;
                                        readonly src: "4512:5:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                            readonly typeString: "contract IERC20";
                                        }];
                                        readonly id: 71741;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "4504:7:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 71740;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "4504:7:172";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 71743;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4504:14:172";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 71744;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4519:12:172";
                                readonly memberName: "functionCall";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 71895;
                                readonly src: "4504:27:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$attached_to$_t_address_$";
                                    readonly typeString: "function (address,bytes memory) returns (bytes memory)";
                                };
                            };
                            readonly id: 71746;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4504:33:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4478:59:172";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 71760;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 71751;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 71748;
                                        readonly name: "returndata";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71739;
                                        readonly src: "4551:10:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 71749;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4562:6:172";
                                    readonly memberName: "length";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "4551:17:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 71750;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4572:1:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "4551:22:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "&&";
                            readonly rightExpression: {
                                readonly id: 71759;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "UnaryOperation";
                                readonly operator: "!";
                                readonly prefix: true;
                                readonly src: "4577:31:172";
                                readonly subExpression: {
                                    readonly arguments: readonly [{
                                        readonly id: 71754;
                                        readonly name: "returndata";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71739;
                                        readonly src: "4589:10:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }, {
                                        readonly components: readonly [{
                                            readonly id: 71756;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "4602:4:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bool_$";
                                                readonly typeString: "type(bool)";
                                            };
                                            readonly typeName: {
                                                readonly id: 71755;
                                                readonly name: "bool";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "4602:4:172";
                                                readonly typeDescriptions: {};
                                            };
                                        }];
                                        readonly id: 71757;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "4601:6:172";
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
                                            readonly id: 71752;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "4578:3:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 71753;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4582:6:172";
                                        readonly memberName: "decode";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4578:10:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abidecode_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 71758;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4578:30:172";
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
                            readonly src: "4551:57:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 71769;
                        readonly nodeType: "IfStatement";
                        readonly src: "4547:135:172";
                        readonly trueBody: {
                            readonly id: 71768;
                            readonly nodeType: "Block";
                            readonly src: "4610:72:172";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 71764;
                                            readonly name: "token";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 71733;
                                            readonly src: "4664:5:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                                readonly typeString: "contract IERC20";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                                readonly typeString: "contract IERC20";
                                            }];
                                            readonly id: 71763;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "4656:7:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 71762;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "4656:7:172";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 71765;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4656:14:172";
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
                                        readonly id: 71761;
                                        readonly name: "SafeERC20FailedOperation";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71548;
                                        readonly src: "4631:24:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$_t_address_$returns$__$";
                                            readonly typeString: "function (address) pure";
                                        };
                                    };
                                    readonly id: 71766;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4631:40:172";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 71767;
                                readonly nodeType: "RevertStatement";
                                readonly src: "4624:47:172";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 71730;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3682:372:172";
                    readonly text: " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants).";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_callOptionalReturn";
                readonly nameLocation: "4068:19:172";
                readonly parameters: {
                    readonly id: 71736;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71733;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "4095:5:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71771;
                        readonly src: "4088:12:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$71469";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 71732;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71731;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["4088:6:172"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 71469;
                                readonly src: "4088:6:172";
                            };
                            readonly referencedDeclaration: 71469;
                            readonly src: "4088:6:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71735;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "4115:4:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71771;
                        readonly src: "4102:17:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71734;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4102:5:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4087:33:172";
                };
                readonly returnParameters: {
                    readonly id: 71737;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4129:0:172";
                };
                readonly scope: 71821;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 71820;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5189:578:172";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71819;
                    readonly nodeType: "Block";
                    readonly src: "5278:489:172";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [71783, 71785];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 71783;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "5579:7:172";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71819;
                            readonly src: "5574:12:172";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 71782;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5574:4:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 71785;
                            readonly mutability: "mutable";
                            readonly name: "returndata";
                            readonly nameLocation: "5601:10:172";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71819;
                            readonly src: "5588:23:172";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 71784;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5588:5:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 71793;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 71791;
                                readonly name: "data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71777;
                                readonly src: "5635:4:172";
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
                                        readonly id: 71788;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71775;
                                        readonly src: "5623:5:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                            readonly typeString: "contract IERC20";
                                        }];
                                        readonly id: 71787;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "5615:7:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 71786;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "5615:7:172";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 71789;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5615:14:172";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 71790;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5630:4:172";
                                readonly memberName: "call";
                                readonly nodeType: "MemberAccess";
                                readonly src: "5615:19:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 71792;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5615:25:172";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5573:67:172";
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 71817;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly id: 71808;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 71794;
                                    readonly name: "success";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71783;
                                    readonly src: "5657:7:172";
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
                                        readonly id: 71806;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 71798;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly expression: {
                                                    readonly id: 71795;
                                                    readonly name: "returndata";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 71785;
                                                    readonly src: "5669:10:172";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                };
                                                readonly id: 71796;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5680:6:172";
                                                readonly memberName: "length";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "5669:17:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "==";
                                            readonly rightExpression: {
                                                readonly hexValue: "30";
                                                readonly id: 71797;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5690:1:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            };
                                            readonly src: "5669:22:172";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "||";
                                        readonly rightExpression: {
                                            readonly arguments: readonly [{
                                                readonly id: 71801;
                                                readonly name: "returndata";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 71785;
                                                readonly src: "5706:10:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            }, {
                                                readonly components: readonly [{
                                                    readonly id: 71803;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "5719:4:172";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_bool_$";
                                                        readonly typeString: "type(bool)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 71802;
                                                        readonly name: "bool";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "5719:4:172";
                                                        readonly typeDescriptions: {};
                                                    };
                                                }];
                                                readonly id: 71804;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "5718:6:172";
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
                                                    readonly id: 71799;
                                                    readonly name: "abi";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: -1;
                                                    readonly src: "5695:3:172";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_magic_abi";
                                                        readonly typeString: "abi";
                                                    };
                                                };
                                                readonly id: 71800;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5699:6:172";
                                                readonly memberName: "decode";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "5695:10:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_abidecode_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 71805;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5695:30:172";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        };
                                        readonly src: "5669:56:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    }];
                                    readonly id: 71807;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "5668:58:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly src: "5657:69:172";
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
                                readonly id: 71816;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly id: 71811;
                                                readonly name: "token";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 71775;
                                                readonly src: "5738:5:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                                    readonly typeString: "contract IERC20";
                                                }];
                                                readonly id: 71810;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5730:7:172";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 71809;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5730:7:172";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 71812;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5730:14:172";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 71813;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5745:4:172";
                                        readonly memberName: "code";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "5730:19:172";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 71814;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5750:6:172";
                                    readonly memberName: "length";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "5730:26:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 71815;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5759:1:172";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "5730:30:172";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "5657:103:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 71781;
                        readonly id: 71818;
                        readonly nodeType: "Return";
                        readonly src: "5650:110:172";
                    }];
                };
                readonly documentation: {
                    readonly id: 71772;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4694:490:172";
                    readonly text: " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants).\n This is a variant of {_callOptionalReturn} that silents catches all reverts and returns a bool instead.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_callOptionalReturnBool";
                readonly nameLocation: "5198:23:172";
                readonly parameters: {
                    readonly id: 71778;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71775;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "5229:5:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71820;
                        readonly src: "5222:12:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$71469";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 71774;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71773;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["5222:6:172"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 71469;
                                readonly src: "5222:6:172";
                            };
                            readonly referencedDeclaration: 71469;
                            readonly src: "5222:6:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$71469";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71777;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "5249:4:172";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71820;
                        readonly src: "5236:17:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71776;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5236:5:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5221:33:172";
                };
                readonly returnParameters: {
                    readonly id: 71781;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71780;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71820;
                        readonly src: "5272:4:172";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 71779;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5272:4:172";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5271:6:172";
                };
                readonly scope: 71821;
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
                readonly id: 71540;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "293:457:172";
                readonly text: " @title SafeERC20\n @dev Wrappers around ERC20 operations that throw on failure (when the token\n contract returns false). Tokens that return no value (and instead revert or\n throw on failure) are also supported, non-reverting calls are assumed to be\n successful.\n To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\n which allows you to call the safe operations as `token.safeTransfer(...)`, etc.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [71821];
            readonly name: "SafeERC20";
            readonly nameLocation: "759:9:172";
            readonly scope: 71822;
            readonly usedErrors: readonly [71548, 71557];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 172;
};
//# sourceMappingURL=SafeERC20.d.ts.map