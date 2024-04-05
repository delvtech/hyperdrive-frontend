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
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122090530dced4b935e7c114c603a244842acb7154f18289a6d16d4e3f00161db36864736f6c63430008140033";
        readonly sourceMap: "751:5018:166:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;751:5018:166;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122090530dced4b935e7c114c603a244842acb7154f18289a6d16d4e3f00161db36864736f6c63430008140033";
        readonly sourceMap: "751:5018:166:-:0;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"currentAllowance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"requestedDecrease\",\"type\":\"uint256\"}],\"name\":\"SafeERC20FailedDecreaseAllowance\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Wrappers around ERC20 operations that throw on failure (when the token contract returns false). Tokens that return no value (and instead revert or throw on failure) are also supported, non-reverting calls are assumed to be successful. To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract, which allows you to call the safe operations as `token.safeTransfer(...)`, etc.\",\"errors\":{\"SafeERC20FailedDecreaseAllowance(address,uint256,uint256)\":[{\"details\":\"Indicates a failed `decreaseAllowance` request.\"}],\"SafeERC20FailedOperation(address)\":[{\"details\":\"An operation with an ERC20 token failed.\"}]},\"kind\":\"dev\",\"methods\":{},\"title\":\"SafeERC20\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":\"SafeERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]}},\"version\":1}";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
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
        readonly id: 71214;
        readonly exportedSymbols: {
            readonly Address: readonly [71466];
            readonly IERC20: readonly [70861];
            readonly IERC20Permit: readonly [70923];
            readonly SafeERC20: readonly [71213];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "115:5655:166";
        readonly nodes: readonly [{
            readonly id: 70925;
            readonly nodeType: "PragmaDirective";
            readonly src: "115:24:166";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "^", "0.8", ".20"];
        }, {
            readonly id: 70927;
            readonly nodeType: "ImportDirective";
            readonly src: "141:37:166";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";
            readonly file: "../IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 71214;
            readonly sourceUnit: 70862;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 70926;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 70861;
                    readonly src: "149:6:166";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 70929;
            readonly nodeType: "ImportDirective";
            readonly src: "179:60:166";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol";
            readonly file: "../extensions/IERC20Permit.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 71214;
            readonly sourceUnit: 70924;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 70928;
                    readonly name: "IERC20Permit";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 70923;
                    readonly src: "187:12:166";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 70931;
            readonly nodeType: "ImportDirective";
            readonly src: "240:51:166";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/openzeppelin-contracts/contracts/utils/Address.sol";
            readonly file: "../../../utils/Address.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 71214;
            readonly sourceUnit: 71467;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 70930;
                    readonly name: "Address";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 71466;
                    readonly src: "248:7:166";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 71213;
            readonly nodeType: "ContractDefinition";
            readonly src: "751:5018:166";
            readonly nodes: readonly [{
                readonly id: 70935;
                readonly nodeType: "UsingForDirective";
                readonly src: "775:26:166";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 70933;
                    readonly name: "Address";
                    readonly nameLocations: readonly ["781:7:166"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 71466;
                    readonly src: "781:7:166";
                };
                readonly typeName: {
                    readonly id: 70934;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "793:7:166";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
            }, {
                readonly id: 70940;
                readonly nodeType: "ErrorDefinition";
                readonly src: "876:46:166";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70936;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "807:64:166";
                    readonly text: " @dev An operation with an ERC20 token failed.";
                };
                readonly errorSelector: "5274afe7";
                readonly name: "SafeERC20FailedOperation";
                readonly nameLocation: "882:24:166";
                readonly parameters: {
                    readonly id: 70939;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70938;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "915:5:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70940;
                        readonly src: "907:13:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70937;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "907:7:166";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "906:15:166";
                };
            }, {
                readonly id: 70949;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1004:109:166";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 70941;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "928:71:166";
                    readonly text: " @dev Indicates a failed `decreaseAllowance` request.";
                };
                readonly errorSelector: "e570110f";
                readonly name: "SafeERC20FailedDecreaseAllowance";
                readonly nameLocation: "1010:32:166";
                readonly parameters: {
                    readonly id: 70948;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70943;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "1051:7:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70949;
                        readonly src: "1043:15:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70942;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1043:7:166";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70945;
                        readonly mutability: "mutable";
                        readonly name: "currentAllowance";
                        readonly nameLocation: "1068:16:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70949;
                        readonly src: "1060:24:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70944;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1060:7:166";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70947;
                        readonly mutability: "mutable";
                        readonly name: "requestedDecrease";
                        readonly nameLocation: "1094:17:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70949;
                        readonly src: "1086:25:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70946;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1086:7:166";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1042:70:166";
                };
            }, {
                readonly id: 70973;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1303:160:166";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 70972;
                    readonly nodeType: "Block";
                    readonly src: "1375:88:166";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 70961;
                                readonly name: "token";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 70953;
                                readonly src: "1405:5:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                    readonly typeString: "contract IERC20";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 70964;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 70953;
                                        readonly src: "1427:5:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 70965;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1433:8:166";
                                    readonly memberName: "transfer";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 70828;
                                    readonly src: "1427:14:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                        readonly typeString: "function (address,uint256) external returns (bool)";
                                    };
                                }, {
                                    readonly components: readonly [{
                                        readonly id: 70966;
                                        readonly name: "to";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 70955;
                                        readonly src: "1444:2:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 70967;
                                        readonly name: "value";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 70957;
                                        readonly src: "1448:5:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 70968;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "1443:11:166";
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
                                        readonly id: 70962;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "1412:3:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 70963;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1416:10:166";
                                    readonly memberName: "encodeCall";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "1412:14:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 70969;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1412:43:166";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                    readonly typeString: "contract IERC20";
                                }, {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly id: 70960;
                                readonly name: "_callOptionalReturn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71163;
                                readonly src: "1385:19:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$70861_$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (contract IERC20,bytes memory)";
                                };
                            };
                            readonly id: 70970;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1385:71:166";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 70971;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1385:71:166";
                    }];
                };
                readonly documentation: {
                    readonly id: 70950;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1119:179:166";
                    readonly text: " @dev Transfer `value` amount of `token` from the calling contract to `to`. If `token` returns no value,\n non-reverting calls are assumed to be successful.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeTransfer";
                readonly nameLocation: "1312:12:166";
                readonly parameters: {
                    readonly id: 70958;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70953;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "1332:5:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70973;
                        readonly src: "1325:12:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$70861";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 70952;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 70951;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["1325:6:166"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 70861;
                                readonly src: "1325:6:166";
                            };
                            readonly referencedDeclaration: 70861;
                            readonly src: "1325:6:166";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70955;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1347:2:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70973;
                        readonly src: "1339:10:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70954;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1339:7:166";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70957;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "1359:5:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 70973;
                        readonly src: "1351:13:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70956;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1351:7:166";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1324:41:166";
                };
                readonly returnParameters: {
                    readonly id: 70959;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1375:0:166";
                };
                readonly scope: 71213;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71000;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1702:188:166";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 70999;
                    readonly nodeType: "Block";
                    readonly src: "1792:98:166";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 70987;
                                readonly name: "token";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 70977;
                                readonly src: "1822:5:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                    readonly typeString: "contract IERC20";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 70990;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 70977;
                                        readonly src: "1844:5:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 70991;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1850:12:166";
                                    readonly memberName: "transferFrom";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 70860;
                                    readonly src: "1844:18:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$";
                                        readonly typeString: "function (address,address,uint256) external returns (bool)";
                                    };
                                }, {
                                    readonly components: readonly [{
                                        readonly id: 70992;
                                        readonly name: "from";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 70979;
                                        readonly src: "1865:4:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 70993;
                                        readonly name: "to";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 70981;
                                        readonly src: "1871:2:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 70994;
                                        readonly name: "value";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 70983;
                                        readonly src: "1875:5:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 70995;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "1864:17:166";
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
                                        readonly id: 70988;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "1829:3:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 70989;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1833:10:166";
                                    readonly memberName: "encodeCall";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "1829:14:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 70996;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1829:53:166";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                    readonly typeString: "contract IERC20";
                                }, {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly id: 70986;
                                readonly name: "_callOptionalReturn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71163;
                                readonly src: "1802:19:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$70861_$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (contract IERC20,bytes memory)";
                                };
                            };
                            readonly id: 70997;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1802:81:166";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 70998;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1802:81:166";
                    }];
                };
                readonly documentation: {
                    readonly id: 70974;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1469:228:166";
                    readonly text: " @dev Transfer `value` amount of `token` from `from` to `to`, spending the approval given by `from` to the\n calling contract. If `token` returns no value, non-reverting calls are assumed to be successful.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeTransferFrom";
                readonly nameLocation: "1711:16:166";
                readonly parameters: {
                    readonly id: 70984;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 70977;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "1735:5:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71000;
                        readonly src: "1728:12:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$70861";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 70976;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 70975;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["1728:6:166"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 70861;
                                readonly src: "1728:6:166";
                            };
                            readonly referencedDeclaration: 70861;
                            readonly src: "1728:6:166";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70979;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "1750:4:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71000;
                        readonly src: "1742:12:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70978;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1742:7:166";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70981;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1764:2:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71000;
                        readonly src: "1756:10:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 70980;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1756:7:166";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 70983;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "1776:5:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71000;
                        readonly src: "1768:13:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 70982;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1768:7:166";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1727:55:166";
                };
                readonly returnParameters: {
                    readonly id: 70985;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1792:0:166";
                };
                readonly scope: 71213;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71031;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2081:225:166";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71030;
                    readonly nodeType: "Block";
                    readonly src: "2167:139:166";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [71012];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 71012;
                            readonly mutability: "mutable";
                            readonly name: "oldAllowance";
                            readonly nameLocation: "2185:12:166";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71030;
                            readonly src: "2177:20:166";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 71011;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2177:7:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 71021;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 71017;
                                    readonly name: "this";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -28;
                                    readonly src: "2224:4:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_SafeERC20_$71213";
                                        readonly typeString: "library SafeERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_SafeERC20_$71213";
                                        readonly typeString: "library SafeERC20";
                                    }];
                                    readonly id: 71016;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2216:7:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 71015;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2216:7:166";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 71018;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2216:13:166";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 71019;
                                readonly name: "spender";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71006;
                                readonly src: "2231:7:166";
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
                                    readonly id: 71013;
                                    readonly name: "token";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71004;
                                    readonly src: "2200:5:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                        readonly typeString: "contract IERC20";
                                    };
                                };
                                readonly id: 71014;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2206:9:166";
                                readonly memberName: "allowance";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 70838;
                                readonly src: "2200:15:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$";
                                    readonly typeString: "function (address,address) view external returns (uint256)";
                                };
                            };
                            readonly id: 71020;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2200:39:166";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2177:62:166";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 71023;
                                readonly name: "token";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71004;
                                readonly src: "2262:5:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                    readonly typeString: "contract IERC20";
                                };
                            }, {
                                readonly id: 71024;
                                readonly name: "spender";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71006;
                                readonly src: "2269:7:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 71027;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 71025;
                                    readonly name: "oldAllowance";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71012;
                                    readonly src: "2278:12:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly id: 71026;
                                    readonly name: "value";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71008;
                                    readonly src: "2293:5:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2278:20:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                    readonly typeString: "contract IERC20";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 71022;
                                readonly name: "forceApprove";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71121;
                                readonly src: "2249:12:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$70861_$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (contract IERC20,address,uint256)";
                                };
                            };
                            readonly id: 71028;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2249:50:166";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 71029;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2249:50:166";
                    }];
                };
                readonly documentation: {
                    readonly id: 71001;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1896:180:166";
                    readonly text: " @dev Increase the calling contract's allowance toward `spender` by `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeIncreaseAllowance";
                readonly nameLocation: "2090:21:166";
                readonly parameters: {
                    readonly id: 71009;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71004;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "2119:5:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71031;
                        readonly src: "2112:12:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$70861";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 71003;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71002;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["2112:6:166"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 70861;
                                readonly src: "2112:6:166";
                            };
                            readonly referencedDeclaration: 70861;
                            readonly src: "2112:6:166";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71006;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "2134:7:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71031;
                        readonly src: "2126:15:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71005;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2126:7:166";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71008;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "2151:5:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71031;
                        readonly src: "2143:13:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71007;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2143:7:166";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2111:46:166";
                };
                readonly returnParameters: {
                    readonly id: 71010;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2167:0:166";
                };
                readonly scope: 71213;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71074;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2509:468:166";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71073;
                    readonly nodeType: "Block";
                    readonly src: "2607:370:166";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly id: 71072;
                        readonly nodeType: "UncheckedBlock";
                        readonly src: "2617:354:166";
                        readonly statements: readonly [{
                            readonly assignments: readonly [71043];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 71043;
                                readonly mutability: "mutable";
                                readonly name: "currentAllowance";
                                readonly nameLocation: "2649:16:166";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 71072;
                                readonly src: "2641:24:166";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 71042;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "2641:7:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 71052;
                            readonly initialValue: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 71048;
                                        readonly name: "this";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -28;
                                        readonly src: "2692:4:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_SafeERC20_$71213";
                                            readonly typeString: "library SafeERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_SafeERC20_$71213";
                                            readonly typeString: "library SafeERC20";
                                        }];
                                        readonly id: 71047;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "2684:7:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 71046;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "2684:7:166";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 71049;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2684:13:166";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }, {
                                    readonly id: 71050;
                                    readonly name: "spender";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71037;
                                    readonly src: "2699:7:166";
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
                                        readonly id: 71044;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71035;
                                        readonly src: "2668:5:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 71045;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "2674:9:166";
                                    readonly memberName: "allowance";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 70838;
                                    readonly src: "2668:15:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$";
                                        readonly typeString: "function (address,address) view external returns (uint256)";
                                    };
                                };
                                readonly id: 71051;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2668:39:166";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "2641:66:166";
                        }, {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 71055;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 71053;
                                    readonly name: "currentAllowance";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71043;
                                    readonly src: "2725:16:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly id: 71054;
                                    readonly name: "requestedDecrease";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71039;
                                    readonly src: "2744:17:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2725:36:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 71063;
                            readonly nodeType: "IfStatement";
                            readonly src: "2721:160:166";
                            readonly trueBody: {
                                readonly id: 71062;
                                readonly nodeType: "Block";
                                readonly src: "2763:118:166";
                                readonly statements: readonly [{
                                    readonly errorCall: {
                                        readonly arguments: readonly [{
                                            readonly id: 71057;
                                            readonly name: "spender";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 71037;
                                            readonly src: "2821:7:166";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 71058;
                                            readonly name: "currentAllowance";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 71043;
                                            readonly src: "2830:16:166";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 71059;
                                            readonly name: "requestedDecrease";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 71039;
                                            readonly src: "2848:17:166";
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
                                            readonly id: 71056;
                                            readonly name: "SafeERC20FailedDecreaseAllowance";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 70949;
                                            readonly src: "2788:32:166";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_error_pure$_t_address_$_t_uint256_$_t_uint256_$returns$__$";
                                                readonly typeString: "function (address,uint256,uint256) pure";
                                            };
                                        };
                                        readonly id: 71060;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2788:78:166";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$__$";
                                            readonly typeString: "tuple()";
                                        };
                                    };
                                    readonly id: 71061;
                                    readonly nodeType: "RevertStatement";
                                    readonly src: "2781:85:166";
                                }];
                            };
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly id: 71065;
                                    readonly name: "token";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71035;
                                    readonly src: "2907:5:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                        readonly typeString: "contract IERC20";
                                    };
                                }, {
                                    readonly id: 71066;
                                    readonly name: "spender";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71037;
                                    readonly src: "2914:7:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }, {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 71069;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 71067;
                                        readonly name: "currentAllowance";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71043;
                                        readonly src: "2923:16:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 71068;
                                        readonly name: "requestedDecrease";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71039;
                                        readonly src: "2942:17:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2923:36:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                        readonly typeString: "contract IERC20";
                                    }, {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 71064;
                                    readonly name: "forceApprove";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71121;
                                    readonly src: "2894:12:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$70861_$_t_address_$_t_uint256_$returns$__$";
                                        readonly typeString: "function (contract IERC20,address,uint256)";
                                    };
                                };
                                readonly id: 71070;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2894:66:166";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$__$";
                                    readonly typeString: "tuple()";
                                };
                            };
                            readonly id: 71071;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "2894:66:166";
                        }];
                    }];
                };
                readonly documentation: {
                    readonly id: 71032;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2312:192:166";
                    readonly text: " @dev Decrease the calling contract's allowance toward `spender` by `requestedDecrease`. If `token` returns no\n value, non-reverting calls are assumed to be successful.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeDecreaseAllowance";
                readonly nameLocation: "2518:21:166";
                readonly parameters: {
                    readonly id: 71040;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71035;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "2547:5:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71074;
                        readonly src: "2540:12:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$70861";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 71034;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71033;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["2540:6:166"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 70861;
                                readonly src: "2540:6:166";
                            };
                            readonly referencedDeclaration: 70861;
                            readonly src: "2540:6:166";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71037;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "2562:7:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71074;
                        readonly src: "2554:15:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71036;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2554:7:166";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71039;
                        readonly mutability: "mutable";
                        readonly name: "requestedDecrease";
                        readonly nameLocation: "2579:17:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71074;
                        readonly src: "2571:25:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71038;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2571:7:166";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2539:58:166";
                };
                readonly returnParameters: {
                    readonly id: 71041;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2607:0:166";
                };
                readonly scope: 71213;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71121;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3296:380:166";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71120;
                    readonly nodeType: "Block";
                    readonly src: "3373:303:166";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [71086];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 71086;
                            readonly mutability: "mutable";
                            readonly name: "approvalCall";
                            readonly nameLocation: "3396:12:166";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71120;
                            readonly src: "3383:25:166";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 71085;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3383:5:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 71095;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 71089;
                                    readonly name: "token";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71078;
                                    readonly src: "3426:5:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                        readonly typeString: "contract IERC20";
                                    };
                                };
                                readonly id: 71090;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3432:7:166";
                                readonly memberName: "approve";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 70848;
                                readonly src: "3426:13:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                    readonly typeString: "function (address,uint256) external returns (bool)";
                                };
                            }, {
                                readonly components: readonly [{
                                    readonly id: 71091;
                                    readonly name: "spender";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71080;
                                    readonly src: "3442:7:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }, {
                                    readonly id: 71092;
                                    readonly name: "value";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71082;
                                    readonly src: "3451:5:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 71093;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "3441:16:166";
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
                                    readonly id: 71087;
                                    readonly name: "abi";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -1;
                                    readonly src: "3411:3:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_abi";
                                        readonly typeString: "abi";
                                    };
                                };
                                readonly id: 71088;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3415:10:166";
                                readonly memberName: "encodeCall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "3411:14:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function () pure returns (bytes memory)";
                                };
                            };
                            readonly id: 71094;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3411:47:166";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3383:75:166";
                    }, {
                        readonly condition: {
                            readonly id: 71100;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "3473:45:166";
                            readonly subExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 71097;
                                    readonly name: "token";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71078;
                                    readonly src: "3498:5:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                        readonly typeString: "contract IERC20";
                                    };
                                }, {
                                    readonly id: 71098;
                                    readonly name: "approvalCall";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71086;
                                    readonly src: "3505:12:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                        readonly typeString: "contract IERC20";
                                    }, {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly id: 71096;
                                    readonly name: "_callOptionalReturnBool";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71212;
                                    readonly src: "3474:23:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$70861_$_t_bytes_memory_ptr_$returns$_t_bool_$";
                                        readonly typeString: "function (contract IERC20,bytes memory) returns (bool)";
                                    };
                                };
                                readonly id: 71099;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3474:44:166";
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
                        readonly id: 71119;
                        readonly nodeType: "IfStatement";
                        readonly src: "3469:201:166";
                        readonly trueBody: {
                            readonly id: 71118;
                            readonly nodeType: "Block";
                            readonly src: "3520:150:166";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 71102;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71078;
                                        readonly src: "3554:5:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly id: 71105;
                                                readonly name: "token";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 71078;
                                                readonly src: "3576:5:166";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 71106;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3582:7:166";
                                            readonly memberName: "approve";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 70848;
                                            readonly src: "3576:13:166";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,uint256) external returns (bool)";
                                            };
                                        }, {
                                            readonly components: readonly [{
                                                readonly id: 71107;
                                                readonly name: "spender";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 71080;
                                                readonly src: "3592:7:166";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            }, {
                                                readonly hexValue: "30";
                                                readonly id: 71108;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3601:1:166";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }];
                                            readonly id: 71109;
                                            readonly isConstant: false;
                                            readonly isInlineArray: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "TupleExpression";
                                            readonly src: "3591:12:166";
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
                                                readonly id: 71103;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "3561:3:166";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 71104;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3565:10:166";
                                            readonly memberName: "encodeCall";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "3561:14:166";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function () pure returns (bytes memory)";
                                            };
                                        };
                                        readonly id: 71110;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3561:43:166";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                            readonly typeString: "contract IERC20";
                                        }, {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly id: 71101;
                                        readonly name: "_callOptionalReturn";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71163;
                                        readonly src: "3534:19:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$70861_$_t_bytes_memory_ptr_$returns$__$";
                                            readonly typeString: "function (contract IERC20,bytes memory)";
                                        };
                                    };
                                    readonly id: 71111;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3534:71:166";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 71112;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3534:71:166";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 71114;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71078;
                                        readonly src: "3639:5:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }, {
                                        readonly id: 71115;
                                        readonly name: "approvalCall";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71086;
                                        readonly src: "3646:12:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                            readonly typeString: "contract IERC20";
                                        }, {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly id: 71113;
                                        readonly name: "_callOptionalReturn";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71163;
                                        readonly src: "3619:19:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$70861_$_t_bytes_memory_ptr_$returns$__$";
                                            readonly typeString: "function (contract IERC20,bytes memory)";
                                        };
                                    };
                                    readonly id: 71116;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3619:40:166";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 71117;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3619:40:166";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 71075;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2983:308:166";
                    readonly text: " @dev Set the calling contract's allowance toward `spender` to `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful. Meant to be used with tokens that require the approval\n to be set to zero before setting it to a non-zero value, such as USDT.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "forceApprove";
                readonly nameLocation: "3305:12:166";
                readonly parameters: {
                    readonly id: 71083;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71078;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "3325:5:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71121;
                        readonly src: "3318:12:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$70861";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 71077;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71076;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["3318:6:166"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 70861;
                                readonly src: "3318:6:166";
                            };
                            readonly referencedDeclaration: 70861;
                            readonly src: "3318:6:166";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71080;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "3340:7:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71121;
                        readonly src: "3332:15:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71079;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3332:7:166";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71082;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3357:5:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71121;
                        readonly src: "3349:13:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71081;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3349:7:166";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3317:46:166";
                };
                readonly returnParameters: {
                    readonly id: 71084;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3373:0:166";
                };
                readonly scope: 71213;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71163;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4059:629:166";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71162;
                    readonly nodeType: "Block";
                    readonly src: "4129:559:166";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [71131];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 71131;
                            readonly mutability: "mutable";
                            readonly name: "returndata";
                            readonly nameLocation: "4491:10:166";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71162;
                            readonly src: "4478:23:166";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 71130;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4478:5:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 71139;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 71137;
                                readonly name: "data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71127;
                                readonly src: "4532:4:166";
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
                                        readonly id: 71134;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71125;
                                        readonly src: "4512:5:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                            readonly typeString: "contract IERC20";
                                        }];
                                        readonly id: 71133;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "4504:7:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 71132;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "4504:7:166";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 71135;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4504:14:166";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 71136;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4519:12:166";
                                readonly memberName: "functionCall";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 71287;
                                readonly src: "4504:27:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$attached_to$_t_address_$";
                                    readonly typeString: "function (address,bytes memory) returns (bytes memory)";
                                };
                            };
                            readonly id: 71138;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4504:33:166";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4478:59:166";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 71152;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 71143;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 71140;
                                        readonly name: "returndata";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71131;
                                        readonly src: "4551:10:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 71141;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4562:6:166";
                                    readonly memberName: "length";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "4551:17:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 71142;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4572:1:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "4551:22:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "&&";
                            readonly rightExpression: {
                                readonly id: 71151;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "UnaryOperation";
                                readonly operator: "!";
                                readonly prefix: true;
                                readonly src: "4577:31:166";
                                readonly subExpression: {
                                    readonly arguments: readonly [{
                                        readonly id: 71146;
                                        readonly name: "returndata";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71131;
                                        readonly src: "4589:10:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }, {
                                        readonly components: readonly [{
                                            readonly id: 71148;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "4602:4:166";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bool_$";
                                                readonly typeString: "type(bool)";
                                            };
                                            readonly typeName: {
                                                readonly id: 71147;
                                                readonly name: "bool";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "4602:4:166";
                                                readonly typeDescriptions: {};
                                            };
                                        }];
                                        readonly id: 71149;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "4601:6:166";
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
                                            readonly id: 71144;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "4578:3:166";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 71145;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4582:6:166";
                                        readonly memberName: "decode";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4578:10:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abidecode_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 71150;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4578:30:166";
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
                            readonly src: "4551:57:166";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 71161;
                        readonly nodeType: "IfStatement";
                        readonly src: "4547:135:166";
                        readonly trueBody: {
                            readonly id: 71160;
                            readonly nodeType: "Block";
                            readonly src: "4610:72:166";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 71156;
                                            readonly name: "token";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 71125;
                                            readonly src: "4664:5:166";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                                readonly typeString: "contract IERC20";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                                readonly typeString: "contract IERC20";
                                            }];
                                            readonly id: 71155;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "4656:7:166";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 71154;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "4656:7:166";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 71157;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4656:14:166";
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
                                        readonly id: 71153;
                                        readonly name: "SafeERC20FailedOperation";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 70940;
                                        readonly src: "4631:24:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$_t_address_$returns$__$";
                                            readonly typeString: "function (address) pure";
                                        };
                                    };
                                    readonly id: 71158;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4631:40:166";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 71159;
                                readonly nodeType: "RevertStatement";
                                readonly src: "4624:47:166";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 71122;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3682:372:166";
                    readonly text: " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants).";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_callOptionalReturn";
                readonly nameLocation: "4068:19:166";
                readonly parameters: {
                    readonly id: 71128;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71125;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "4095:5:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71163;
                        readonly src: "4088:12:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$70861";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 71124;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71123;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["4088:6:166"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 70861;
                                readonly src: "4088:6:166";
                            };
                            readonly referencedDeclaration: 70861;
                            readonly src: "4088:6:166";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71127;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "4115:4:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71163;
                        readonly src: "4102:17:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71126;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4102:5:166";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4087:33:166";
                };
                readonly returnParameters: {
                    readonly id: 71129;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4129:0:166";
                };
                readonly scope: 71213;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 71212;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5189:578:166";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71211;
                    readonly nodeType: "Block";
                    readonly src: "5278:489:166";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [71175, 71177];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 71175;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "5579:7:166";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71211;
                            readonly src: "5574:12:166";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 71174;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5574:4:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 71177;
                            readonly mutability: "mutable";
                            readonly name: "returndata";
                            readonly nameLocation: "5601:10:166";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71211;
                            readonly src: "5588:23:166";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 71176;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5588:5:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 71185;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 71183;
                                readonly name: "data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71169;
                                readonly src: "5635:4:166";
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
                                        readonly id: 71180;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71167;
                                        readonly src: "5623:5:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                            readonly typeString: "contract IERC20";
                                        }];
                                        readonly id: 71179;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "5615:7:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 71178;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "5615:7:166";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 71181;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5615:14:166";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 71182;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5630:4:166";
                                readonly memberName: "call";
                                readonly nodeType: "MemberAccess";
                                readonly src: "5615:19:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 71184;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5615:25:166";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5573:67:166";
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 71209;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly id: 71200;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 71186;
                                    readonly name: "success";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71175;
                                    readonly src: "5657:7:166";
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
                                        readonly id: 71198;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 71190;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly expression: {
                                                    readonly id: 71187;
                                                    readonly name: "returndata";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 71177;
                                                    readonly src: "5669:10:166";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                };
                                                readonly id: 71188;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5680:6:166";
                                                readonly memberName: "length";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "5669:17:166";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "==";
                                            readonly rightExpression: {
                                                readonly hexValue: "30";
                                                readonly id: 71189;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5690:1:166";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            };
                                            readonly src: "5669:22:166";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "||";
                                        readonly rightExpression: {
                                            readonly arguments: readonly [{
                                                readonly id: 71193;
                                                readonly name: "returndata";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 71177;
                                                readonly src: "5706:10:166";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            }, {
                                                readonly components: readonly [{
                                                    readonly id: 71195;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "5719:4:166";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_bool_$";
                                                        readonly typeString: "type(bool)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 71194;
                                                        readonly name: "bool";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "5719:4:166";
                                                        readonly typeDescriptions: {};
                                                    };
                                                }];
                                                readonly id: 71196;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "5718:6:166";
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
                                                    readonly id: 71191;
                                                    readonly name: "abi";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: -1;
                                                    readonly src: "5695:3:166";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_magic_abi";
                                                        readonly typeString: "abi";
                                                    };
                                                };
                                                readonly id: 71192;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5699:6:166";
                                                readonly memberName: "decode";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "5695:10:166";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_abidecode_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 71197;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5695:30:166";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        };
                                        readonly src: "5669:56:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    }];
                                    readonly id: 71199;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "5668:58:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly src: "5657:69:166";
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
                                readonly id: 71208;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly id: 71203;
                                                readonly name: "token";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 71167;
                                                readonly src: "5738:5:166";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                                    readonly typeString: "contract IERC20";
                                                }];
                                                readonly id: 71202;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5730:7:166";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 71201;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5730:7:166";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 71204;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5730:14:166";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 71205;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5745:4:166";
                                        readonly memberName: "code";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "5730:19:166";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 71206;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5750:6:166";
                                    readonly memberName: "length";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "5730:26:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 71207;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5759:1:166";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "5730:30:166";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "5657:103:166";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 71173;
                        readonly id: 71210;
                        readonly nodeType: "Return";
                        readonly src: "5650:110:166";
                    }];
                };
                readonly documentation: {
                    readonly id: 71164;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4694:490:166";
                    readonly text: " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants).\n This is a variant of {_callOptionalReturn} that silents catches all reverts and returns a bool instead.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_callOptionalReturnBool";
                readonly nameLocation: "5198:23:166";
                readonly parameters: {
                    readonly id: 71170;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71167;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "5229:5:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71212;
                        readonly src: "5222:12:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$70861";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 71166;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71165;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["5222:6:166"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 70861;
                                readonly src: "5222:6:166";
                            };
                            readonly referencedDeclaration: 70861;
                            readonly src: "5222:6:166";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$70861";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71169;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "5249:4:166";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71212;
                        readonly src: "5236:17:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71168;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5236:5:166";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5221:33:166";
                };
                readonly returnParameters: {
                    readonly id: 71173;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71172;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71212;
                        readonly src: "5272:4:166";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 71171;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5272:4:166";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5271:6:166";
                };
                readonly scope: 71213;
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
                readonly id: 70932;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "293:457:166";
                readonly text: " @title SafeERC20\n @dev Wrappers around ERC20 operations that throw on failure (when the token\n contract returns false). Tokens that return no value (and instead revert or\n throw on failure) are also supported, non-reverting calls are assumed to be\n successful.\n To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\n which allows you to call the safe operations as `token.safeTransfer(...)`, etc.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [71213];
            readonly name: "SafeERC20";
            readonly nameLocation: "759:9:166";
            readonly scope: 71214;
            readonly usedErrors: readonly [70940, 70949];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 166;
};
//# sourceMappingURL=SafeERC20.d.ts.map