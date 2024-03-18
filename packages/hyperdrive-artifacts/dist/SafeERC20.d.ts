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
        readonly sourceMap: "751:5018:168:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;751:5018:168;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122076f48067ee79af48f87c626716abb2d6dba39ab8e4a1bf0af237818455119cfe64736f6c63430008140033";
        readonly sourceMap: "751:5018:168:-:0;;;;;;;;";
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
        readonly id: 71644;
        readonly exportedSymbols: {
            readonly Address: readonly [71896];
            readonly IERC20: readonly [71291];
            readonly IERC20Permit: readonly [71353];
            readonly SafeERC20: readonly [71643];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "115:5655:168";
        readonly nodes: readonly [{
            readonly id: 71355;
            readonly nodeType: "PragmaDirective";
            readonly src: "115:24:168";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "^", "0.8", ".20"];
        }, {
            readonly id: 71357;
            readonly nodeType: "ImportDirective";
            readonly src: "141:37:168";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";
            readonly file: "../IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 71644;
            readonly sourceUnit: 71292;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 71356;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 71291;
                    readonly src: "149:6:168";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 71359;
            readonly nodeType: "ImportDirective";
            readonly src: "179:60:168";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol";
            readonly file: "../extensions/IERC20Permit.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 71644;
            readonly sourceUnit: 71354;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 71358;
                    readonly name: "IERC20Permit";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 71353;
                    readonly src: "187:12:168";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 71361;
            readonly nodeType: "ImportDirective";
            readonly src: "240:51:168";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/openzeppelin-contracts/contracts/utils/Address.sol";
            readonly file: "../../../utils/Address.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 71644;
            readonly sourceUnit: 71897;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 71360;
                    readonly name: "Address";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 71896;
                    readonly src: "248:7:168";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 71643;
            readonly nodeType: "ContractDefinition";
            readonly src: "751:5018:168";
            readonly nodes: readonly [{
                readonly id: 71365;
                readonly nodeType: "UsingForDirective";
                readonly src: "775:26:168";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 71363;
                    readonly name: "Address";
                    readonly nameLocations: readonly ["781:7:168"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 71896;
                    readonly src: "781:7:168";
                };
                readonly typeName: {
                    readonly id: 71364;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "793:7:168";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
            }, {
                readonly id: 71370;
                readonly nodeType: "ErrorDefinition";
                readonly src: "876:46:168";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 71366;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "807:64:168";
                    readonly text: " @dev An operation with an ERC20 token failed.";
                };
                readonly errorSelector: "5274afe7";
                readonly name: "SafeERC20FailedOperation";
                readonly nameLocation: "882:24:168";
                readonly parameters: {
                    readonly id: 71369;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71368;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "915:5:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71370;
                        readonly src: "907:13:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71367;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "907:7:168";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "906:15:168";
                };
            }, {
                readonly id: 71379;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1004:109:168";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 71371;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "928:71:168";
                    readonly text: " @dev Indicates a failed `decreaseAllowance` request.";
                };
                readonly errorSelector: "e570110f";
                readonly name: "SafeERC20FailedDecreaseAllowance";
                readonly nameLocation: "1010:32:168";
                readonly parameters: {
                    readonly id: 71378;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71373;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "1051:7:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71379;
                        readonly src: "1043:15:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71372;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1043:7:168";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71375;
                        readonly mutability: "mutable";
                        readonly name: "currentAllowance";
                        readonly nameLocation: "1068:16:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71379;
                        readonly src: "1060:24:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71374;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1060:7:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71377;
                        readonly mutability: "mutable";
                        readonly name: "requestedDecrease";
                        readonly nameLocation: "1094:17:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71379;
                        readonly src: "1086:25:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71376;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1086:7:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1042:70:168";
                };
            }, {
                readonly id: 71403;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1303:160:168";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71402;
                    readonly nodeType: "Block";
                    readonly src: "1375:88:168";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 71391;
                                readonly name: "token";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71383;
                                readonly src: "1405:5:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                    readonly typeString: "contract IERC20";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 71394;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71383;
                                        readonly src: "1427:5:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 71395;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1433:8:168";
                                    readonly memberName: "transfer";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 71258;
                                    readonly src: "1427:14:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                        readonly typeString: "function (address,uint256) external returns (bool)";
                                    };
                                }, {
                                    readonly components: readonly [{
                                        readonly id: 71396;
                                        readonly name: "to";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71385;
                                        readonly src: "1444:2:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 71397;
                                        readonly name: "value";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71387;
                                        readonly src: "1448:5:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 71398;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "1443:11:168";
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
                                        readonly id: 71392;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "1412:3:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 71393;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1416:10:168";
                                    readonly memberName: "encodeCall";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "1412:14:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 71399;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1412:43:168";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                    readonly typeString: "contract IERC20";
                                }, {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly id: 71390;
                                readonly name: "_callOptionalReturn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71593;
                                readonly src: "1385:19:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$71291_$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (contract IERC20,bytes memory)";
                                };
                            };
                            readonly id: 71400;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1385:71:168";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 71401;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1385:71:168";
                    }];
                };
                readonly documentation: {
                    readonly id: 71380;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1119:179:168";
                    readonly text: " @dev Transfer `value` amount of `token` from the calling contract to `to`. If `token` returns no value,\n non-reverting calls are assumed to be successful.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeTransfer";
                readonly nameLocation: "1312:12:168";
                readonly parameters: {
                    readonly id: 71388;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71383;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "1332:5:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71403;
                        readonly src: "1325:12:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$71291";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 71382;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71381;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["1325:6:168"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 71291;
                                readonly src: "1325:6:168";
                            };
                            readonly referencedDeclaration: 71291;
                            readonly src: "1325:6:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71385;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1347:2:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71403;
                        readonly src: "1339:10:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71384;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1339:7:168";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71387;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "1359:5:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71403;
                        readonly src: "1351:13:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71386;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1351:7:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1324:41:168";
                };
                readonly returnParameters: {
                    readonly id: 71389;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1375:0:168";
                };
                readonly scope: 71643;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71430;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1702:188:168";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71429;
                    readonly nodeType: "Block";
                    readonly src: "1792:98:168";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 71417;
                                readonly name: "token";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71407;
                                readonly src: "1822:5:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                    readonly typeString: "contract IERC20";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 71420;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71407;
                                        readonly src: "1844:5:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 71421;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1850:12:168";
                                    readonly memberName: "transferFrom";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 71290;
                                    readonly src: "1844:18:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$";
                                        readonly typeString: "function (address,address,uint256) external returns (bool)";
                                    };
                                }, {
                                    readonly components: readonly [{
                                        readonly id: 71422;
                                        readonly name: "from";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71409;
                                        readonly src: "1865:4:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 71423;
                                        readonly name: "to";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71411;
                                        readonly src: "1871:2:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 71424;
                                        readonly name: "value";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71413;
                                        readonly src: "1875:5:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 71425;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "1864:17:168";
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
                                        readonly id: 71418;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "1829:3:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 71419;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1833:10:168";
                                    readonly memberName: "encodeCall";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "1829:14:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 71426;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1829:53:168";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                    readonly typeString: "contract IERC20";
                                }, {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly id: 71416;
                                readonly name: "_callOptionalReturn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71593;
                                readonly src: "1802:19:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$71291_$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (contract IERC20,bytes memory)";
                                };
                            };
                            readonly id: 71427;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1802:81:168";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 71428;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1802:81:168";
                    }];
                };
                readonly documentation: {
                    readonly id: 71404;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1469:228:168";
                    readonly text: " @dev Transfer `value` amount of `token` from `from` to `to`, spending the approval given by `from` to the\n calling contract. If `token` returns no value, non-reverting calls are assumed to be successful.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeTransferFrom";
                readonly nameLocation: "1711:16:168";
                readonly parameters: {
                    readonly id: 71414;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71407;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "1735:5:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71430;
                        readonly src: "1728:12:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$71291";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 71406;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71405;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["1728:6:168"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 71291;
                                readonly src: "1728:6:168";
                            };
                            readonly referencedDeclaration: 71291;
                            readonly src: "1728:6:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71409;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "1750:4:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71430;
                        readonly src: "1742:12:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71408;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1742:7:168";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71411;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1764:2:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71430;
                        readonly src: "1756:10:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71410;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1756:7:168";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71413;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "1776:5:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71430;
                        readonly src: "1768:13:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71412;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1768:7:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1727:55:168";
                };
                readonly returnParameters: {
                    readonly id: 71415;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1792:0:168";
                };
                readonly scope: 71643;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71461;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2081:225:168";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71460;
                    readonly nodeType: "Block";
                    readonly src: "2167:139:168";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [71442];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 71442;
                            readonly mutability: "mutable";
                            readonly name: "oldAllowance";
                            readonly nameLocation: "2185:12:168";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71460;
                            readonly src: "2177:20:168";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 71441;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2177:7:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 71451;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 71447;
                                    readonly name: "this";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -28;
                                    readonly src: "2224:4:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_SafeERC20_$71643";
                                        readonly typeString: "library SafeERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_SafeERC20_$71643";
                                        readonly typeString: "library SafeERC20";
                                    }];
                                    readonly id: 71446;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2216:7:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 71445;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2216:7:168";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 71448;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2216:13:168";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 71449;
                                readonly name: "spender";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71436;
                                readonly src: "2231:7:168";
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
                                    readonly id: 71443;
                                    readonly name: "token";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71434;
                                    readonly src: "2200:5:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                        readonly typeString: "contract IERC20";
                                    };
                                };
                                readonly id: 71444;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2206:9:168";
                                readonly memberName: "allowance";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 71268;
                                readonly src: "2200:15:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$";
                                    readonly typeString: "function (address,address) view external returns (uint256)";
                                };
                            };
                            readonly id: 71450;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2200:39:168";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2177:62:168";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 71453;
                                readonly name: "token";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71434;
                                readonly src: "2262:5:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                    readonly typeString: "contract IERC20";
                                };
                            }, {
                                readonly id: 71454;
                                readonly name: "spender";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71436;
                                readonly src: "2269:7:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 71457;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 71455;
                                    readonly name: "oldAllowance";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71442;
                                    readonly src: "2278:12:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly id: 71456;
                                    readonly name: "value";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71438;
                                    readonly src: "2293:5:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2278:20:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                    readonly typeString: "contract IERC20";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 71452;
                                readonly name: "forceApprove";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71551;
                                readonly src: "2249:12:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$71291_$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (contract IERC20,address,uint256)";
                                };
                            };
                            readonly id: 71458;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2249:50:168";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 71459;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2249:50:168";
                    }];
                };
                readonly documentation: {
                    readonly id: 71431;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1896:180:168";
                    readonly text: " @dev Increase the calling contract's allowance toward `spender` by `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeIncreaseAllowance";
                readonly nameLocation: "2090:21:168";
                readonly parameters: {
                    readonly id: 71439;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71434;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "2119:5:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71461;
                        readonly src: "2112:12:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$71291";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 71433;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71432;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["2112:6:168"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 71291;
                                readonly src: "2112:6:168";
                            };
                            readonly referencedDeclaration: 71291;
                            readonly src: "2112:6:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71436;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "2134:7:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71461;
                        readonly src: "2126:15:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71435;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2126:7:168";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71438;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "2151:5:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71461;
                        readonly src: "2143:13:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71437;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2143:7:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2111:46:168";
                };
                readonly returnParameters: {
                    readonly id: 71440;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2167:0:168";
                };
                readonly scope: 71643;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71504;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2509:468:168";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71503;
                    readonly nodeType: "Block";
                    readonly src: "2607:370:168";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly id: 71502;
                        readonly nodeType: "UncheckedBlock";
                        readonly src: "2617:354:168";
                        readonly statements: readonly [{
                            readonly assignments: readonly [71473];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 71473;
                                readonly mutability: "mutable";
                                readonly name: "currentAllowance";
                                readonly nameLocation: "2649:16:168";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 71502;
                                readonly src: "2641:24:168";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 71472;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "2641:7:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 71482;
                            readonly initialValue: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 71478;
                                        readonly name: "this";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -28;
                                        readonly src: "2692:4:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_SafeERC20_$71643";
                                            readonly typeString: "library SafeERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_SafeERC20_$71643";
                                            readonly typeString: "library SafeERC20";
                                        }];
                                        readonly id: 71477;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "2684:7:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 71476;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "2684:7:168";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 71479;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2684:13:168";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }, {
                                    readonly id: 71480;
                                    readonly name: "spender";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71467;
                                    readonly src: "2699:7:168";
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
                                        readonly id: 71474;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71465;
                                        readonly src: "2668:5:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 71475;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "2674:9:168";
                                    readonly memberName: "allowance";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 71268;
                                    readonly src: "2668:15:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$";
                                        readonly typeString: "function (address,address) view external returns (uint256)";
                                    };
                                };
                                readonly id: 71481;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2668:39:168";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "2641:66:168";
                        }, {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 71485;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 71483;
                                    readonly name: "currentAllowance";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71473;
                                    readonly src: "2725:16:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly id: 71484;
                                    readonly name: "requestedDecrease";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71469;
                                    readonly src: "2744:17:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2725:36:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 71493;
                            readonly nodeType: "IfStatement";
                            readonly src: "2721:160:168";
                            readonly trueBody: {
                                readonly id: 71492;
                                readonly nodeType: "Block";
                                readonly src: "2763:118:168";
                                readonly statements: readonly [{
                                    readonly errorCall: {
                                        readonly arguments: readonly [{
                                            readonly id: 71487;
                                            readonly name: "spender";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 71467;
                                            readonly src: "2821:7:168";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 71488;
                                            readonly name: "currentAllowance";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 71473;
                                            readonly src: "2830:16:168";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 71489;
                                            readonly name: "requestedDecrease";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 71469;
                                            readonly src: "2848:17:168";
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
                                            readonly id: 71486;
                                            readonly name: "SafeERC20FailedDecreaseAllowance";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 71379;
                                            readonly src: "2788:32:168";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_error_pure$_t_address_$_t_uint256_$_t_uint256_$returns$__$";
                                                readonly typeString: "function (address,uint256,uint256) pure";
                                            };
                                        };
                                        readonly id: 71490;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2788:78:168";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$__$";
                                            readonly typeString: "tuple()";
                                        };
                                    };
                                    readonly id: 71491;
                                    readonly nodeType: "RevertStatement";
                                    readonly src: "2781:85:168";
                                }];
                            };
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly id: 71495;
                                    readonly name: "token";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71465;
                                    readonly src: "2907:5:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                        readonly typeString: "contract IERC20";
                                    };
                                }, {
                                    readonly id: 71496;
                                    readonly name: "spender";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71467;
                                    readonly src: "2914:7:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }, {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 71499;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 71497;
                                        readonly name: "currentAllowance";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71473;
                                        readonly src: "2923:16:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 71498;
                                        readonly name: "requestedDecrease";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71469;
                                        readonly src: "2942:17:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2923:36:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                        readonly typeString: "contract IERC20";
                                    }, {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 71494;
                                    readonly name: "forceApprove";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71551;
                                    readonly src: "2894:12:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$71291_$_t_address_$_t_uint256_$returns$__$";
                                        readonly typeString: "function (contract IERC20,address,uint256)";
                                    };
                                };
                                readonly id: 71500;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2894:66:168";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$__$";
                                    readonly typeString: "tuple()";
                                };
                            };
                            readonly id: 71501;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "2894:66:168";
                        }];
                    }];
                };
                readonly documentation: {
                    readonly id: 71462;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2312:192:168";
                    readonly text: " @dev Decrease the calling contract's allowance toward `spender` by `requestedDecrease`. If `token` returns no\n value, non-reverting calls are assumed to be successful.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeDecreaseAllowance";
                readonly nameLocation: "2518:21:168";
                readonly parameters: {
                    readonly id: 71470;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71465;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "2547:5:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71504;
                        readonly src: "2540:12:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$71291";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 71464;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71463;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["2540:6:168"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 71291;
                                readonly src: "2540:6:168";
                            };
                            readonly referencedDeclaration: 71291;
                            readonly src: "2540:6:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71467;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "2562:7:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71504;
                        readonly src: "2554:15:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71466;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2554:7:168";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71469;
                        readonly mutability: "mutable";
                        readonly name: "requestedDecrease";
                        readonly nameLocation: "2579:17:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71504;
                        readonly src: "2571:25:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71468;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2571:7:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2539:58:168";
                };
                readonly returnParameters: {
                    readonly id: 71471;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2607:0:168";
                };
                readonly scope: 71643;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71551;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3296:380:168";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71550;
                    readonly nodeType: "Block";
                    readonly src: "3373:303:168";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [71516];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 71516;
                            readonly mutability: "mutable";
                            readonly name: "approvalCall";
                            readonly nameLocation: "3396:12:168";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71550;
                            readonly src: "3383:25:168";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 71515;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3383:5:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 71525;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 71519;
                                    readonly name: "token";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71508;
                                    readonly src: "3426:5:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                        readonly typeString: "contract IERC20";
                                    };
                                };
                                readonly id: 71520;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3432:7:168";
                                readonly memberName: "approve";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 71278;
                                readonly src: "3426:13:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                    readonly typeString: "function (address,uint256) external returns (bool)";
                                };
                            }, {
                                readonly components: readonly [{
                                    readonly id: 71521;
                                    readonly name: "spender";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71510;
                                    readonly src: "3442:7:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }, {
                                    readonly id: 71522;
                                    readonly name: "value";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71512;
                                    readonly src: "3451:5:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 71523;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "3441:16:168";
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
                                    readonly id: 71517;
                                    readonly name: "abi";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -1;
                                    readonly src: "3411:3:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_abi";
                                        readonly typeString: "abi";
                                    };
                                };
                                readonly id: 71518;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3415:10:168";
                                readonly memberName: "encodeCall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "3411:14:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function () pure returns (bytes memory)";
                                };
                            };
                            readonly id: 71524;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3411:47:168";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3383:75:168";
                    }, {
                        readonly condition: {
                            readonly id: 71530;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "3473:45:168";
                            readonly subExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 71527;
                                    readonly name: "token";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71508;
                                    readonly src: "3498:5:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                        readonly typeString: "contract IERC20";
                                    };
                                }, {
                                    readonly id: 71528;
                                    readonly name: "approvalCall";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71516;
                                    readonly src: "3505:12:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                        readonly typeString: "contract IERC20";
                                    }, {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly id: 71526;
                                    readonly name: "_callOptionalReturnBool";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71642;
                                    readonly src: "3474:23:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$71291_$_t_bytes_memory_ptr_$returns$_t_bool_$";
                                        readonly typeString: "function (contract IERC20,bytes memory) returns (bool)";
                                    };
                                };
                                readonly id: 71529;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3474:44:168";
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
                        readonly id: 71549;
                        readonly nodeType: "IfStatement";
                        readonly src: "3469:201:168";
                        readonly trueBody: {
                            readonly id: 71548;
                            readonly nodeType: "Block";
                            readonly src: "3520:150:168";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 71532;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71508;
                                        readonly src: "3554:5:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly id: 71535;
                                                readonly name: "token";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 71508;
                                                readonly src: "3576:5:168";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 71536;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3582:7:168";
                                            readonly memberName: "approve";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 71278;
                                            readonly src: "3576:13:168";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,uint256) external returns (bool)";
                                            };
                                        }, {
                                            readonly components: readonly [{
                                                readonly id: 71537;
                                                readonly name: "spender";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 71510;
                                                readonly src: "3592:7:168";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            }, {
                                                readonly hexValue: "30";
                                                readonly id: 71538;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3601:1:168";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }];
                                            readonly id: 71539;
                                            readonly isConstant: false;
                                            readonly isInlineArray: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "TupleExpression";
                                            readonly src: "3591:12:168";
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
                                                readonly id: 71533;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "3561:3:168";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 71534;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3565:10:168";
                                            readonly memberName: "encodeCall";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "3561:14:168";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function () pure returns (bytes memory)";
                                            };
                                        };
                                        readonly id: 71540;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3561:43:168";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                            readonly typeString: "contract IERC20";
                                        }, {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly id: 71531;
                                        readonly name: "_callOptionalReturn";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71593;
                                        readonly src: "3534:19:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$71291_$_t_bytes_memory_ptr_$returns$__$";
                                            readonly typeString: "function (contract IERC20,bytes memory)";
                                        };
                                    };
                                    readonly id: 71541;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3534:71:168";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 71542;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3534:71:168";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 71544;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71508;
                                        readonly src: "3639:5:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }, {
                                        readonly id: 71545;
                                        readonly name: "approvalCall";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71516;
                                        readonly src: "3646:12:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                            readonly typeString: "contract IERC20";
                                        }, {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly id: 71543;
                                        readonly name: "_callOptionalReturn";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71593;
                                        readonly src: "3619:19:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$71291_$_t_bytes_memory_ptr_$returns$__$";
                                            readonly typeString: "function (contract IERC20,bytes memory)";
                                        };
                                    };
                                    readonly id: 71546;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3619:40:168";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 71547;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3619:40:168";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 71505;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2983:308:168";
                    readonly text: " @dev Set the calling contract's allowance toward `spender` to `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful. Meant to be used with tokens that require the approval\n to be set to zero before setting it to a non-zero value, such as USDT.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "forceApprove";
                readonly nameLocation: "3305:12:168";
                readonly parameters: {
                    readonly id: 71513;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71508;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "3325:5:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71551;
                        readonly src: "3318:12:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$71291";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 71507;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71506;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["3318:6:168"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 71291;
                                readonly src: "3318:6:168";
                            };
                            readonly referencedDeclaration: 71291;
                            readonly src: "3318:6:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71510;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "3340:7:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71551;
                        readonly src: "3332:15:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71509;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3332:7:168";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71512;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3357:5:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71551;
                        readonly src: "3349:13:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71511;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3349:7:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3317:46:168";
                };
                readonly returnParameters: {
                    readonly id: 71514;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3373:0:168";
                };
                readonly scope: 71643;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71593;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4059:629:168";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71592;
                    readonly nodeType: "Block";
                    readonly src: "4129:559:168";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [71561];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 71561;
                            readonly mutability: "mutable";
                            readonly name: "returndata";
                            readonly nameLocation: "4491:10:168";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71592;
                            readonly src: "4478:23:168";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 71560;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4478:5:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 71569;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 71567;
                                readonly name: "data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71557;
                                readonly src: "4532:4:168";
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
                                        readonly id: 71564;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71555;
                                        readonly src: "4512:5:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                            readonly typeString: "contract IERC20";
                                        }];
                                        readonly id: 71563;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "4504:7:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 71562;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "4504:7:168";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 71565;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4504:14:168";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 71566;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4519:12:168";
                                readonly memberName: "functionCall";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 71717;
                                readonly src: "4504:27:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$attached_to$_t_address_$";
                                    readonly typeString: "function (address,bytes memory) returns (bytes memory)";
                                };
                            };
                            readonly id: 71568;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4504:33:168";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4478:59:168";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 71582;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 71573;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 71570;
                                        readonly name: "returndata";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71561;
                                        readonly src: "4551:10:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 71571;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4562:6:168";
                                    readonly memberName: "length";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "4551:17:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 71572;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4572:1:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "4551:22:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "&&";
                            readonly rightExpression: {
                                readonly id: 71581;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "UnaryOperation";
                                readonly operator: "!";
                                readonly prefix: true;
                                readonly src: "4577:31:168";
                                readonly subExpression: {
                                    readonly arguments: readonly [{
                                        readonly id: 71576;
                                        readonly name: "returndata";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71561;
                                        readonly src: "4589:10:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }, {
                                        readonly components: readonly [{
                                            readonly id: 71578;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "4602:4:168";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bool_$";
                                                readonly typeString: "type(bool)";
                                            };
                                            readonly typeName: {
                                                readonly id: 71577;
                                                readonly name: "bool";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "4602:4:168";
                                                readonly typeDescriptions: {};
                                            };
                                        }];
                                        readonly id: 71579;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "4601:6:168";
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
                                            readonly id: 71574;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "4578:3:168";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 71575;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4582:6:168";
                                        readonly memberName: "decode";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4578:10:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abidecode_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 71580;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4578:30:168";
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
                            readonly src: "4551:57:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 71591;
                        readonly nodeType: "IfStatement";
                        readonly src: "4547:135:168";
                        readonly trueBody: {
                            readonly id: 71590;
                            readonly nodeType: "Block";
                            readonly src: "4610:72:168";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 71586;
                                            readonly name: "token";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 71555;
                                            readonly src: "4664:5:168";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                                readonly typeString: "contract IERC20";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                                readonly typeString: "contract IERC20";
                                            }];
                                            readonly id: 71585;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "4656:7:168";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 71584;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "4656:7:168";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 71587;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4656:14:168";
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
                                        readonly id: 71583;
                                        readonly name: "SafeERC20FailedOperation";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71370;
                                        readonly src: "4631:24:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$_t_address_$returns$__$";
                                            readonly typeString: "function (address) pure";
                                        };
                                    };
                                    readonly id: 71588;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4631:40:168";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 71589;
                                readonly nodeType: "RevertStatement";
                                readonly src: "4624:47:168";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 71552;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3682:372:168";
                    readonly text: " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants).";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_callOptionalReturn";
                readonly nameLocation: "4068:19:168";
                readonly parameters: {
                    readonly id: 71558;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71555;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "4095:5:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71593;
                        readonly src: "4088:12:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$71291";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 71554;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71553;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["4088:6:168"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 71291;
                                readonly src: "4088:6:168";
                            };
                            readonly referencedDeclaration: 71291;
                            readonly src: "4088:6:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71557;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "4115:4:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71593;
                        readonly src: "4102:17:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71556;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4102:5:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4087:33:168";
                };
                readonly returnParameters: {
                    readonly id: 71559;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4129:0:168";
                };
                readonly scope: 71643;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 71642;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5189:578:168";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71641;
                    readonly nodeType: "Block";
                    readonly src: "5278:489:168";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [71605, 71607];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 71605;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "5579:7:168";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71641;
                            readonly src: "5574:12:168";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 71604;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5574:4:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 71607;
                            readonly mutability: "mutable";
                            readonly name: "returndata";
                            readonly nameLocation: "5601:10:168";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71641;
                            readonly src: "5588:23:168";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 71606;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5588:5:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 71615;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 71613;
                                readonly name: "data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71599;
                                readonly src: "5635:4:168";
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
                                        readonly id: 71610;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71597;
                                        readonly src: "5623:5:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                            readonly typeString: "contract IERC20";
                                        }];
                                        readonly id: 71609;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "5615:7:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 71608;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "5615:7:168";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 71611;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5615:14:168";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 71612;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5630:4:168";
                                readonly memberName: "call";
                                readonly nodeType: "MemberAccess";
                                readonly src: "5615:19:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 71614;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5615:25:168";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5573:67:168";
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 71639;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly id: 71630;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 71616;
                                    readonly name: "success";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71605;
                                    readonly src: "5657:7:168";
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
                                        readonly id: 71628;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 71620;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly expression: {
                                                    readonly id: 71617;
                                                    readonly name: "returndata";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 71607;
                                                    readonly src: "5669:10:168";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                };
                                                readonly id: 71618;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5680:6:168";
                                                readonly memberName: "length";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "5669:17:168";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "==";
                                            readonly rightExpression: {
                                                readonly hexValue: "30";
                                                readonly id: 71619;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5690:1:168";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            };
                                            readonly src: "5669:22:168";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "||";
                                        readonly rightExpression: {
                                            readonly arguments: readonly [{
                                                readonly id: 71623;
                                                readonly name: "returndata";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 71607;
                                                readonly src: "5706:10:168";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            }, {
                                                readonly components: readonly [{
                                                    readonly id: 71625;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "5719:4:168";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_bool_$";
                                                        readonly typeString: "type(bool)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 71624;
                                                        readonly name: "bool";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "5719:4:168";
                                                        readonly typeDescriptions: {};
                                                    };
                                                }];
                                                readonly id: 71626;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "5718:6:168";
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
                                                    readonly id: 71621;
                                                    readonly name: "abi";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: -1;
                                                    readonly src: "5695:3:168";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_magic_abi";
                                                        readonly typeString: "abi";
                                                    };
                                                };
                                                readonly id: 71622;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5699:6:168";
                                                readonly memberName: "decode";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "5695:10:168";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_abidecode_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 71627;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5695:30:168";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        };
                                        readonly src: "5669:56:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    }];
                                    readonly id: 71629;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "5668:58:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly src: "5657:69:168";
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
                                readonly id: 71638;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly id: 71633;
                                                readonly name: "token";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 71597;
                                                readonly src: "5738:5:168";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                                    readonly typeString: "contract IERC20";
                                                }];
                                                readonly id: 71632;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5730:7:168";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 71631;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5730:7:168";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 71634;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5730:14:168";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 71635;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5745:4:168";
                                        readonly memberName: "code";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "5730:19:168";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 71636;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5750:6:168";
                                    readonly memberName: "length";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "5730:26:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 71637;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5759:1:168";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "5730:30:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "5657:103:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 71603;
                        readonly id: 71640;
                        readonly nodeType: "Return";
                        readonly src: "5650:110:168";
                    }];
                };
                readonly documentation: {
                    readonly id: 71594;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4694:490:168";
                    readonly text: " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants).\n This is a variant of {_callOptionalReturn} that silents catches all reverts and returns a bool instead.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_callOptionalReturnBool";
                readonly nameLocation: "5198:23:168";
                readonly parameters: {
                    readonly id: 71600;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71597;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "5229:5:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71642;
                        readonly src: "5222:12:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$71291";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 71596;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71595;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["5222:6:168"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 71291;
                                readonly src: "5222:6:168";
                            };
                            readonly referencedDeclaration: 71291;
                            readonly src: "5222:6:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$71291";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71599;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "5249:4:168";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71642;
                        readonly src: "5236:17:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71598;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5236:5:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5221:33:168";
                };
                readonly returnParameters: {
                    readonly id: 71603;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71602;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71642;
                        readonly src: "5272:4:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 71601;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5272:4:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5271:6:168";
                };
                readonly scope: 71643;
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
                readonly id: 71362;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "293:457:168";
                readonly text: " @title SafeERC20\n @dev Wrappers around ERC20 operations that throw on failure (when the token\n contract returns false). Tokens that return no value (and instead revert or\n throw on failure) are also supported, non-reverting calls are assumed to be\n successful.\n To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\n which allows you to call the safe operations as `token.safeTransfer(...)`, etc.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [71643];
            readonly name: "SafeERC20";
            readonly nameLocation: "759:9:168";
            readonly scope: 71644;
            readonly usedErrors: readonly [71370, 71379];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 168;
};
//# sourceMappingURL=SafeERC20.d.ts.map