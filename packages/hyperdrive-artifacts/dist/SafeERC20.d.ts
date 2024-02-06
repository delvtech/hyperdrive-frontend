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
        readonly sourceMap: "751:5018:118:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;751:5018:118;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122076f48067ee79af48f87c626716abb2d6dba39ab8e4a1bf0af237818455119cfe64736f6c63430008140033";
        readonly sourceMap: "751:5018:118:-:0;;;;;;;;";
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
        readonly id: 66755;
        readonly exportedSymbols: {
            readonly Address: readonly [67007];
            readonly IERC20: readonly [66402];
            readonly IERC20Permit: readonly [66464];
            readonly SafeERC20: readonly [66754];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "115:5655:118";
        readonly nodes: readonly [{
            readonly id: 66466;
            readonly nodeType: "PragmaDirective";
            readonly src: "115:24:118";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "^", "0.8", ".20"];
        }, {
            readonly id: 66468;
            readonly nodeType: "ImportDirective";
            readonly src: "141:37:118";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";
            readonly file: "../IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 66755;
            readonly sourceUnit: 66403;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 66467;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 66402;
                    readonly src: "149:6:118";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 66470;
            readonly nodeType: "ImportDirective";
            readonly src: "179:60:118";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol";
            readonly file: "../extensions/IERC20Permit.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 66755;
            readonly sourceUnit: 66465;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 66469;
                    readonly name: "IERC20Permit";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 66464;
                    readonly src: "187:12:118";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 66472;
            readonly nodeType: "ImportDirective";
            readonly src: "240:51:118";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/openzeppelin-contracts/contracts/utils/Address.sol";
            readonly file: "../../../utils/Address.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 66755;
            readonly sourceUnit: 67008;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 66471;
                    readonly name: "Address";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 67007;
                    readonly src: "248:7:118";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 66754;
            readonly nodeType: "ContractDefinition";
            readonly src: "751:5018:118";
            readonly nodes: readonly [{
                readonly id: 66476;
                readonly nodeType: "UsingForDirective";
                readonly src: "775:26:118";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 66474;
                    readonly name: "Address";
                    readonly nameLocations: readonly ["781:7:118"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 67007;
                    readonly src: "781:7:118";
                };
                readonly typeName: {
                    readonly id: 66475;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "793:7:118";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
            }, {
                readonly id: 66481;
                readonly nodeType: "ErrorDefinition";
                readonly src: "876:46:118";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 66477;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "807:64:118";
                    readonly text: " @dev An operation with an ERC20 token failed.";
                };
                readonly errorSelector: "5274afe7";
                readonly name: "SafeERC20FailedOperation";
                readonly nameLocation: "882:24:118";
                readonly parameters: {
                    readonly id: 66480;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66479;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "915:5:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66481;
                        readonly src: "907:13:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66478;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "907:7:118";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "906:15:118";
                };
            }, {
                readonly id: 66490;
                readonly nodeType: "ErrorDefinition";
                readonly src: "1004:109:118";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 66482;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "928:71:118";
                    readonly text: " @dev Indicates a failed `decreaseAllowance` request.";
                };
                readonly errorSelector: "e570110f";
                readonly name: "SafeERC20FailedDecreaseAllowance";
                readonly nameLocation: "1010:32:118";
                readonly parameters: {
                    readonly id: 66489;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66484;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "1051:7:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66490;
                        readonly src: "1043:15:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66483;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1043:7:118";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66486;
                        readonly mutability: "mutable";
                        readonly name: "currentAllowance";
                        readonly nameLocation: "1068:16:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66490;
                        readonly src: "1060:24:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 66485;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1060:7:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66488;
                        readonly mutability: "mutable";
                        readonly name: "requestedDecrease";
                        readonly nameLocation: "1094:17:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66490;
                        readonly src: "1086:25:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 66487;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1086:7:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1042:70:118";
                };
            }, {
                readonly id: 66514;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1303:160:118";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66513;
                    readonly nodeType: "Block";
                    readonly src: "1375:88:118";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 66502;
                                readonly name: "token";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66494;
                                readonly src: "1405:5:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                    readonly typeString: "contract IERC20";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 66505;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66494;
                                        readonly src: "1427:5:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 66506;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1433:8:118";
                                    readonly memberName: "transfer";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 66369;
                                    readonly src: "1427:14:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                        readonly typeString: "function (address,uint256) external returns (bool)";
                                    };
                                }, {
                                    readonly components: readonly [{
                                        readonly id: 66507;
                                        readonly name: "to";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66496;
                                        readonly src: "1444:2:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 66508;
                                        readonly name: "value";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66498;
                                        readonly src: "1448:5:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 66509;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "1443:11:118";
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
                                        readonly id: 66503;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "1412:3:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 66504;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1416:10:118";
                                    readonly memberName: "encodeCall";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "1412:14:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 66510;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1412:43:118";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                    readonly typeString: "contract IERC20";
                                }, {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly id: 66501;
                                readonly name: "_callOptionalReturn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66704;
                                readonly src: "1385:19:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$66402_$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (contract IERC20,bytes memory)";
                                };
                            };
                            readonly id: 66511;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1385:71:118";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 66512;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1385:71:118";
                    }];
                };
                readonly documentation: {
                    readonly id: 66491;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1119:179:118";
                    readonly text: " @dev Transfer `value` amount of `token` from the calling contract to `to`. If `token` returns no value,\n non-reverting calls are assumed to be successful.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeTransfer";
                readonly nameLocation: "1312:12:118";
                readonly parameters: {
                    readonly id: 66499;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66494;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "1332:5:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66514;
                        readonly src: "1325:12:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$66402";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 66493;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 66492;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["1325:6:118"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 66402;
                                readonly src: "1325:6:118";
                            };
                            readonly referencedDeclaration: 66402;
                            readonly src: "1325:6:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66496;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1347:2:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66514;
                        readonly src: "1339:10:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66495;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1339:7:118";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66498;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "1359:5:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66514;
                        readonly src: "1351:13:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 66497;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1351:7:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1324:41:118";
                };
                readonly returnParameters: {
                    readonly id: 66500;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1375:0:118";
                };
                readonly scope: 66754;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 66541;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1702:188:118";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66540;
                    readonly nodeType: "Block";
                    readonly src: "1792:98:118";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 66528;
                                readonly name: "token";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66518;
                                readonly src: "1822:5:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                    readonly typeString: "contract IERC20";
                                };
                            }, {
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 66531;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66518;
                                        readonly src: "1844:5:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 66532;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1850:12:118";
                                    readonly memberName: "transferFrom";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 66401;
                                    readonly src: "1844:18:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$";
                                        readonly typeString: "function (address,address,uint256) external returns (bool)";
                                    };
                                }, {
                                    readonly components: readonly [{
                                        readonly id: 66533;
                                        readonly name: "from";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66520;
                                        readonly src: "1865:4:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 66534;
                                        readonly name: "to";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66522;
                                        readonly src: "1871:2:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly id: 66535;
                                        readonly name: "value";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66524;
                                        readonly src: "1875:5:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 66536;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "1864:17:118";
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
                                        readonly id: 66529;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "1829:3:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 66530;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "1833:10:118";
                                    readonly memberName: "encodeCall";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "1829:14:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 66537;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "1829:53:118";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                    readonly typeString: "contract IERC20";
                                }, {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly id: 66527;
                                readonly name: "_callOptionalReturn";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66704;
                                readonly src: "1802:19:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$66402_$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (contract IERC20,bytes memory)";
                                };
                            };
                            readonly id: 66538;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1802:81:118";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 66539;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1802:81:118";
                    }];
                };
                readonly documentation: {
                    readonly id: 66515;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1469:228:118";
                    readonly text: " @dev Transfer `value` amount of `token` from `from` to `to`, spending the approval given by `from` to the\n calling contract. If `token` returns no value, non-reverting calls are assumed to be successful.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeTransferFrom";
                readonly nameLocation: "1711:16:118";
                readonly parameters: {
                    readonly id: 66525;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66518;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "1735:5:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66541;
                        readonly src: "1728:12:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$66402";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 66517;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 66516;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["1728:6:118"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 66402;
                                readonly src: "1728:6:118";
                            };
                            readonly referencedDeclaration: 66402;
                            readonly src: "1728:6:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66520;
                        readonly mutability: "mutable";
                        readonly name: "from";
                        readonly nameLocation: "1750:4:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66541;
                        readonly src: "1742:12:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66519;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1742:7:118";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66522;
                        readonly mutability: "mutable";
                        readonly name: "to";
                        readonly nameLocation: "1764:2:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66541;
                        readonly src: "1756:10:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66521;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1756:7:118";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66524;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "1776:5:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66541;
                        readonly src: "1768:13:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 66523;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1768:7:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1727:55:118";
                };
                readonly returnParameters: {
                    readonly id: 66526;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1792:0:118";
                };
                readonly scope: 66754;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 66572;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2081:225:118";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66571;
                    readonly nodeType: "Block";
                    readonly src: "2167:139:118";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [66553];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 66553;
                            readonly mutability: "mutable";
                            readonly name: "oldAllowance";
                            readonly nameLocation: "2185:12:118";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 66571;
                            readonly src: "2177:20:118";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 66552;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2177:7:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 66562;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 66558;
                                    readonly name: "this";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -28;
                                    readonly src: "2224:4:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_SafeERC20_$66754";
                                        readonly typeString: "library SafeERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_SafeERC20_$66754";
                                        readonly typeString: "library SafeERC20";
                                    }];
                                    readonly id: 66557;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2216:7:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 66556;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2216:7:118";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 66559;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2216:13:118";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 66560;
                                readonly name: "spender";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66547;
                                readonly src: "2231:7:118";
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
                                    readonly id: 66554;
                                    readonly name: "token";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66545;
                                    readonly src: "2200:5:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                        readonly typeString: "contract IERC20";
                                    };
                                };
                                readonly id: 66555;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2206:9:118";
                                readonly memberName: "allowance";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 66379;
                                readonly src: "2200:15:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$";
                                    readonly typeString: "function (address,address) view external returns (uint256)";
                                };
                            };
                            readonly id: 66561;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2200:39:118";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2177:62:118";
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 66564;
                                readonly name: "token";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66545;
                                readonly src: "2262:5:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                    readonly typeString: "contract IERC20";
                                };
                            }, {
                                readonly id: 66565;
                                readonly name: "spender";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66547;
                                readonly src: "2269:7:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 66568;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 66566;
                                    readonly name: "oldAllowance";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66553;
                                    readonly src: "2278:12:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "+";
                                readonly rightExpression: {
                                    readonly id: 66567;
                                    readonly name: "value";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66549;
                                    readonly src: "2293:5:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2278:20:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                    readonly typeString: "contract IERC20";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 66563;
                                readonly name: "forceApprove";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66662;
                                readonly src: "2249:12:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$66402_$_t_address_$_t_uint256_$returns$__$";
                                    readonly typeString: "function (contract IERC20,address,uint256)";
                                };
                            };
                            readonly id: 66569;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2249:50:118";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 66570;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2249:50:118";
                    }];
                };
                readonly documentation: {
                    readonly id: 66542;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1896:180:118";
                    readonly text: " @dev Increase the calling contract's allowance toward `spender` by `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeIncreaseAllowance";
                readonly nameLocation: "2090:21:118";
                readonly parameters: {
                    readonly id: 66550;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66545;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "2119:5:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66572;
                        readonly src: "2112:12:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$66402";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 66544;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 66543;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["2112:6:118"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 66402;
                                readonly src: "2112:6:118";
                            };
                            readonly referencedDeclaration: 66402;
                            readonly src: "2112:6:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66547;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "2134:7:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66572;
                        readonly src: "2126:15:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66546;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2126:7:118";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66549;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "2151:5:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66572;
                        readonly src: "2143:13:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 66548;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2143:7:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2111:46:118";
                };
                readonly returnParameters: {
                    readonly id: 66551;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2167:0:118";
                };
                readonly scope: 66754;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 66615;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2509:468:118";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66614;
                    readonly nodeType: "Block";
                    readonly src: "2607:370:118";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly id: 66613;
                        readonly nodeType: "UncheckedBlock";
                        readonly src: "2617:354:118";
                        readonly statements: readonly [{
                            readonly assignments: readonly [66584];
                            readonly declarations: readonly [{
                                readonly constant: false;
                                readonly id: 66584;
                                readonly mutability: "mutable";
                                readonly name: "currentAllowance";
                                readonly nameLocation: "2649:16:118";
                                readonly nodeType: "VariableDeclaration";
                                readonly scope: 66613;
                                readonly src: "2641:24:118";
                                readonly stateVariable: false;
                                readonly storageLocation: "default";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly typeName: {
                                    readonly id: 66583;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "2641:7:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly visibility: "internal";
                            }];
                            readonly id: 66593;
                            readonly initialValue: {
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 66589;
                                        readonly name: "this";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -28;
                                        readonly src: "2692:4:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_SafeERC20_$66754";
                                            readonly typeString: "library SafeERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_SafeERC20_$66754";
                                            readonly typeString: "library SafeERC20";
                                        }];
                                        readonly id: 66588;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "2684:7:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 66587;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "2684:7:118";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 66590;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "2684:13:118";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }, {
                                    readonly id: 66591;
                                    readonly name: "spender";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66578;
                                    readonly src: "2699:7:118";
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
                                        readonly id: 66585;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66576;
                                        readonly src: "2668:5:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 66586;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "2674:9:118";
                                    readonly memberName: "allowance";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 66379;
                                    readonly src: "2668:15:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$";
                                        readonly typeString: "function (address,address) view external returns (uint256)";
                                    };
                                };
                                readonly id: 66592;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2668:39:118";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "VariableDeclarationStatement";
                            readonly src: "2641:66:118";
                        }, {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 66596;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 66594;
                                    readonly name: "currentAllowance";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66584;
                                    readonly src: "2725:16:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly id: 66595;
                                    readonly name: "requestedDecrease";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66580;
                                    readonly src: "2744:17:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly src: "2725:36:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 66604;
                            readonly nodeType: "IfStatement";
                            readonly src: "2721:160:118";
                            readonly trueBody: {
                                readonly id: 66603;
                                readonly nodeType: "Block";
                                readonly src: "2763:118:118";
                                readonly statements: readonly [{
                                    readonly errorCall: {
                                        readonly arguments: readonly [{
                                            readonly id: 66598;
                                            readonly name: "spender";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 66578;
                                            readonly src: "2821:7:118";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 66599;
                                            readonly name: "currentAllowance";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 66584;
                                            readonly src: "2830:16:118";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }, {
                                            readonly id: 66600;
                                            readonly name: "requestedDecrease";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 66580;
                                            readonly src: "2848:17:118";
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
                                            readonly id: 66597;
                                            readonly name: "SafeERC20FailedDecreaseAllowance";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 66490;
                                            readonly src: "2788:32:118";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_error_pure$_t_address_$_t_uint256_$_t_uint256_$returns$__$";
                                                readonly typeString: "function (address,uint256,uint256) pure";
                                            };
                                        };
                                        readonly id: 66601;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2788:78:118";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$__$";
                                            readonly typeString: "tuple()";
                                        };
                                    };
                                    readonly id: 66602;
                                    readonly nodeType: "RevertStatement";
                                    readonly src: "2781:85:118";
                                }];
                            };
                        }, {
                            readonly expression: {
                                readonly arguments: readonly [{
                                    readonly id: 66606;
                                    readonly name: "token";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66576;
                                    readonly src: "2907:5:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                        readonly typeString: "contract IERC20";
                                    };
                                }, {
                                    readonly id: 66607;
                                    readonly name: "spender";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66578;
                                    readonly src: "2914:7:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }, {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 66610;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 66608;
                                        readonly name: "currentAllowance";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66584;
                                        readonly src: "2923:16:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "-";
                                    readonly rightExpression: {
                                        readonly id: 66609;
                                        readonly name: "requestedDecrease";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66580;
                                        readonly src: "2942:17:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2923:36:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                        readonly typeString: "contract IERC20";
                                    }, {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 66605;
                                    readonly name: "forceApprove";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66662;
                                    readonly src: "2894:12:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$66402_$_t_address_$_t_uint256_$returns$__$";
                                        readonly typeString: "function (contract IERC20,address,uint256)";
                                    };
                                };
                                readonly id: 66611;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2894:66:118";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$__$";
                                    readonly typeString: "tuple()";
                                };
                            };
                            readonly id: 66612;
                            readonly nodeType: "ExpressionStatement";
                            readonly src: "2894:66:118";
                        }];
                    }];
                };
                readonly documentation: {
                    readonly id: 66573;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2312:192:118";
                    readonly text: " @dev Decrease the calling contract's allowance toward `spender` by `requestedDecrease`. If `token` returns no\n value, non-reverting calls are assumed to be successful.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "safeDecreaseAllowance";
                readonly nameLocation: "2518:21:118";
                readonly parameters: {
                    readonly id: 66581;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66576;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "2547:5:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66615;
                        readonly src: "2540:12:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$66402";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 66575;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 66574;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["2540:6:118"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 66402;
                                readonly src: "2540:6:118";
                            };
                            readonly referencedDeclaration: 66402;
                            readonly src: "2540:6:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66578;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "2562:7:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66615;
                        readonly src: "2554:15:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66577;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2554:7:118";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66580;
                        readonly mutability: "mutable";
                        readonly name: "requestedDecrease";
                        readonly nameLocation: "2579:17:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66615;
                        readonly src: "2571:25:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 66579;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2571:7:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2539:58:118";
                };
                readonly returnParameters: {
                    readonly id: 66582;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2607:0:118";
                };
                readonly scope: 66754;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 66662;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3296:380:118";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66661;
                    readonly nodeType: "Block";
                    readonly src: "3373:303:118";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [66627];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 66627;
                            readonly mutability: "mutable";
                            readonly name: "approvalCall";
                            readonly nameLocation: "3396:12:118";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 66661;
                            readonly src: "3383:25:118";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 66626;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3383:5:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 66636;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 66630;
                                    readonly name: "token";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66619;
                                    readonly src: "3426:5:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                        readonly typeString: "contract IERC20";
                                    };
                                };
                                readonly id: 66631;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3432:7:118";
                                readonly memberName: "approve";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 66389;
                                readonly src: "3426:13:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                    readonly typeString: "function (address,uint256) external returns (bool)";
                                };
                            }, {
                                readonly components: readonly [{
                                    readonly id: 66632;
                                    readonly name: "spender";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66621;
                                    readonly src: "3442:7:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }, {
                                    readonly id: 66633;
                                    readonly name: "value";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66623;
                                    readonly src: "3451:5:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 66634;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "3441:16:118";
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
                                    readonly id: 66628;
                                    readonly name: "abi";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -1;
                                    readonly src: "3411:3:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_abi";
                                        readonly typeString: "abi";
                                    };
                                };
                                readonly id: 66629;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3415:10:118";
                                readonly memberName: "encodeCall";
                                readonly nodeType: "MemberAccess";
                                readonly src: "3411:14:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function () pure returns (bytes memory)";
                                };
                            };
                            readonly id: 66635;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3411:47:118";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3383:75:118";
                    }, {
                        readonly condition: {
                            readonly id: 66641;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "3473:45:118";
                            readonly subExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 66638;
                                    readonly name: "token";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66619;
                                    readonly src: "3498:5:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                        readonly typeString: "contract IERC20";
                                    };
                                }, {
                                    readonly id: 66639;
                                    readonly name: "approvalCall";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66627;
                                    readonly src: "3505:12:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                        readonly typeString: "contract IERC20";
                                    }, {
                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                        readonly typeString: "bytes memory";
                                    }];
                                    readonly id: 66637;
                                    readonly name: "_callOptionalReturnBool";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66753;
                                    readonly src: "3474:23:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$66402_$_t_bytes_memory_ptr_$returns$_t_bool_$";
                                        readonly typeString: "function (contract IERC20,bytes memory) returns (bool)";
                                    };
                                };
                                readonly id: 66640;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "3474:44:118";
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
                        readonly id: 66660;
                        readonly nodeType: "IfStatement";
                        readonly src: "3469:201:118";
                        readonly trueBody: {
                            readonly id: 66659;
                            readonly nodeType: "Block";
                            readonly src: "3520:150:118";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 66643;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66619;
                                        readonly src: "3554:5:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly id: 66646;
                                                readonly name: "token";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 66619;
                                                readonly src: "3576:5:118";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 66647;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3582:7:118";
                                            readonly memberName: "approve";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 66389;
                                            readonly src: "3576:13:118";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,uint256) external returns (bool)";
                                            };
                                        }, {
                                            readonly components: readonly [{
                                                readonly id: 66648;
                                                readonly name: "spender";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 66621;
                                                readonly src: "3592:7:118";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_address";
                                                    readonly typeString: "address";
                                                };
                                            }, {
                                                readonly hexValue: "30";
                                                readonly id: 66649;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "3601:1:118";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }];
                                            readonly id: 66650;
                                            readonly isConstant: false;
                                            readonly isInlineArray: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "TupleExpression";
                                            readonly src: "3591:12:118";
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
                                                readonly id: 66644;
                                                readonly name: "abi";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -1;
                                                readonly src: "3561:3:118";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_abi";
                                                    readonly typeString: "abi";
                                                };
                                            };
                                            readonly id: 66645;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3565:10:118";
                                            readonly memberName: "encodeCall";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "3561:14:118";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_abiencodecall_pure$__$returns$_t_bytes_memory_ptr_$";
                                                readonly typeString: "function () pure returns (bytes memory)";
                                            };
                                        };
                                        readonly id: 66651;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3561:43:118";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                            readonly typeString: "contract IERC20";
                                        }, {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly id: 66642;
                                        readonly name: "_callOptionalReturn";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66704;
                                        readonly src: "3534:19:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$66402_$_t_bytes_memory_ptr_$returns$__$";
                                            readonly typeString: "function (contract IERC20,bytes memory)";
                                        };
                                    };
                                    readonly id: 66652;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3534:71:118";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 66653;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3534:71:118";
                            }, {
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly id: 66655;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66619;
                                        readonly src: "3639:5:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }, {
                                        readonly id: 66656;
                                        readonly name: "approvalCall";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66627;
                                        readonly src: "3646:12:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                            readonly typeString: "contract IERC20";
                                        }, {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        }];
                                        readonly id: 66654;
                                        readonly name: "_callOptionalReturn";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66704;
                                        readonly src: "3619:19:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_nonpayable$_t_contract$_IERC20_$66402_$_t_bytes_memory_ptr_$returns$__$";
                                            readonly typeString: "function (contract IERC20,bytes memory)";
                                        };
                                    };
                                    readonly id: 66657;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3619:40:118";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 66658;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3619:40:118";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 66616;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "2983:308:118";
                    readonly text: " @dev Set the calling contract's allowance toward `spender` to `value`. If `token` returns no value,\n non-reverting calls are assumed to be successful. Meant to be used with tokens that require the approval\n to be set to zero before setting it to a non-zero value, such as USDT.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "forceApprove";
                readonly nameLocation: "3305:12:118";
                readonly parameters: {
                    readonly id: 66624;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66619;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "3325:5:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66662;
                        readonly src: "3318:12:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$66402";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 66618;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 66617;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["3318:6:118"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 66402;
                                readonly src: "3318:6:118";
                            };
                            readonly referencedDeclaration: 66402;
                            readonly src: "3318:6:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66621;
                        readonly mutability: "mutable";
                        readonly name: "spender";
                        readonly nameLocation: "3340:7:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66662;
                        readonly src: "3332:15:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 66620;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3332:7:118";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66623;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3357:5:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66662;
                        readonly src: "3349:13:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 66622;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3349:7:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3317:46:118";
                };
                readonly returnParameters: {
                    readonly id: 66625;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3373:0:118";
                };
                readonly scope: 66754;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 66704;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4059:629:118";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66703;
                    readonly nodeType: "Block";
                    readonly src: "4129:559:118";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [66672];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 66672;
                            readonly mutability: "mutable";
                            readonly name: "returndata";
                            readonly nameLocation: "4491:10:118";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 66703;
                            readonly src: "4478:23:118";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 66671;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4478:5:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 66680;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 66678;
                                readonly name: "data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66668;
                                readonly src: "4532:4:118";
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
                                        readonly id: 66675;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66666;
                                        readonly src: "4512:5:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                            readonly typeString: "contract IERC20";
                                        }];
                                        readonly id: 66674;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "4504:7:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 66673;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "4504:7:118";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 66676;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4504:14:118";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 66677;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4519:12:118";
                                readonly memberName: "functionCall";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 66828;
                                readonly src: "4504:27:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$_t_bytes_memory_ptr_$attached_to$_t_address_$";
                                    readonly typeString: "function (address,bytes memory) returns (bytes memory)";
                                };
                            };
                            readonly id: 66679;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4504:33:118";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4478:59:118";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 66693;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 66684;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 66681;
                                        readonly name: "returndata";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66672;
                                        readonly src: "4551:10:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 66682;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "4562:6:118";
                                    readonly memberName: "length";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "4551:17:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 66683;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "4572:1:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "4551:22:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "&&";
                            readonly rightExpression: {
                                readonly id: 66692;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "UnaryOperation";
                                readonly operator: "!";
                                readonly prefix: true;
                                readonly src: "4577:31:118";
                                readonly subExpression: {
                                    readonly arguments: readonly [{
                                        readonly id: 66687;
                                        readonly name: "returndata";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66672;
                                        readonly src: "4589:10:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    }, {
                                        readonly components: readonly [{
                                            readonly id: 66689;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "4602:4:118";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_bool_$";
                                                readonly typeString: "type(bool)";
                                            };
                                            readonly typeName: {
                                                readonly id: 66688;
                                                readonly name: "bool";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "4602:4:118";
                                                readonly typeDescriptions: {};
                                            };
                                        }];
                                        readonly id: 66690;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "4601:6:118";
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
                                            readonly id: 66685;
                                            readonly name: "abi";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -1;
                                            readonly src: "4578:3:118";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_abi";
                                                readonly typeString: "abi";
                                            };
                                        };
                                        readonly id: 66686;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4582:6:118";
                                        readonly memberName: "decode";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4578:10:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_abidecode_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 66691;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4578:30:118";
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
                            readonly src: "4551:57:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 66702;
                        readonly nodeType: "IfStatement";
                        readonly src: "4547:135:118";
                        readonly trueBody: {
                            readonly id: 66701;
                            readonly nodeType: "Block";
                            readonly src: "4610:72:118";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 66697;
                                            readonly name: "token";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 66666;
                                            readonly src: "4664:5:118";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                                readonly typeString: "contract IERC20";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                                readonly typeString: "contract IERC20";
                                            }];
                                            readonly id: 66696;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "4656:7:118";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 66695;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "4656:7:118";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 66698;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4656:14:118";
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
                                        readonly id: 66694;
                                        readonly name: "SafeERC20FailedOperation";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66481;
                                        readonly src: "4631:24:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$_t_address_$returns$__$";
                                            readonly typeString: "function (address) pure";
                                        };
                                    };
                                    readonly id: 66699;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4631:40:118";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 66700;
                                readonly nodeType: "RevertStatement";
                                readonly src: "4624:47:118";
                            }];
                        };
                    }];
                };
                readonly documentation: {
                    readonly id: 66663;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3682:372:118";
                    readonly text: " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants).";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_callOptionalReturn";
                readonly nameLocation: "4068:19:118";
                readonly parameters: {
                    readonly id: 66669;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66666;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "4095:5:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66704;
                        readonly src: "4088:12:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$66402";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 66665;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 66664;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["4088:6:118"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 66402;
                                readonly src: "4088:6:118";
                            };
                            readonly referencedDeclaration: 66402;
                            readonly src: "4088:6:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66668;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "4115:4:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66704;
                        readonly src: "4102:17:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 66667;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4102:5:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4087:33:118";
                };
                readonly returnParameters: {
                    readonly id: 66670;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "4129:0:118";
                };
                readonly scope: 66754;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "private";
            }, {
                readonly id: 66753;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5189:578:118";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 66752;
                    readonly nodeType: "Block";
                    readonly src: "5278:489:118";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [66716, 66718];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 66716;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "5579:7:118";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 66752;
                            readonly src: "5574:12:118";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 66715;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5574:4:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }, {
                            readonly constant: false;
                            readonly id: 66718;
                            readonly mutability: "mutable";
                            readonly name: "returndata";
                            readonly nameLocation: "5601:10:118";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 66752;
                            readonly src: "5588:23:118";
                            readonly stateVariable: false;
                            readonly storageLocation: "memory";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes";
                            };
                            readonly typeName: {
                                readonly id: 66717;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5588:5:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 66726;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 66724;
                                readonly name: "data";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 66710;
                                readonly src: "5635:4:118";
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
                                        readonly id: 66721;
                                        readonly name: "token";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 66708;
                                        readonly src: "5623:5:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                            readonly typeString: "contract IERC20";
                                        }];
                                        readonly id: 66720;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "5615:7:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 66719;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "5615:7:118";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 66722;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "5615:14:118";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly id: 66723;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5630:4:118";
                                readonly memberName: "call";
                                readonly nodeType: "MemberAccess";
                                readonly src: "5615:19:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                };
                            };
                            readonly id: 66725;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5615:25:118";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                readonly typeString: "tuple(bool,bytes memory)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5573:67:118";
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 66750;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly id: 66741;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 66727;
                                    readonly name: "success";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 66716;
                                    readonly src: "5657:7:118";
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
                                        readonly id: 66739;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly commonType: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                            readonly id: 66731;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly leftExpression: {
                                                readonly expression: {
                                                    readonly id: 66728;
                                                    readonly name: "returndata";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 66718;
                                                    readonly src: "5669:10:118";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_bytes_memory_ptr";
                                                        readonly typeString: "bytes memory";
                                                    };
                                                };
                                                readonly id: 66729;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5680:6:118";
                                                readonly memberName: "length";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "5669:17:118";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly nodeType: "BinaryOperation";
                                            readonly operator: "==";
                                            readonly rightExpression: {
                                                readonly hexValue: "30";
                                                readonly id: 66730;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "5690:1:118";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            };
                                            readonly src: "5669:22:118";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "||";
                                        readonly rightExpression: {
                                            readonly arguments: readonly [{
                                                readonly id: 66734;
                                                readonly name: "returndata";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 66718;
                                                readonly src: "5706:10:118";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                                    readonly typeString: "bytes memory";
                                                };
                                            }, {
                                                readonly components: readonly [{
                                                    readonly id: 66736;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "5719:4:118";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_bool_$";
                                                        readonly typeString: "type(bool)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 66735;
                                                        readonly name: "bool";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "5719:4:118";
                                                        readonly typeDescriptions: {};
                                                    };
                                                }];
                                                readonly id: 66737;
                                                readonly isConstant: false;
                                                readonly isInlineArray: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "TupleExpression";
                                                readonly src: "5718:6:118";
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
                                                    readonly id: 66732;
                                                    readonly name: "abi";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: -1;
                                                    readonly src: "5695:3:118";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_magic_abi";
                                                        readonly typeString: "abi";
                                                    };
                                                };
                                                readonly id: 66733;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5699:6:118";
                                                readonly memberName: "decode";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "5695:10:118";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_abidecode_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 66738;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5695:30:118";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        };
                                        readonly src: "5669:56:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    }];
                                    readonly id: 66740;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "5668:58:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly src: "5657:69:118";
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
                                readonly id: 66749;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly id: 66744;
                                                readonly name: "token";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 66708;
                                                readonly src: "5738:5:118";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                                    readonly typeString: "contract IERC20";
                                                }];
                                                readonly id: 66743;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "5730:7:118";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 66742;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "5730:7:118";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 66745;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "5730:14:118";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 66746;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "5745:4:118";
                                        readonly memberName: "code";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "5730:19:118";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes_memory_ptr";
                                            readonly typeString: "bytes memory";
                                        };
                                    };
                                    readonly id: 66747;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "5750:6:118";
                                    readonly memberName: "length";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "5730:26:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 66748;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "5759:1:118";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "5730:30:118";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "5657:103:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 66714;
                        readonly id: 66751;
                        readonly nodeType: "Return";
                        readonly src: "5650:110:118";
                    }];
                };
                readonly documentation: {
                    readonly id: 66705;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4694:490:118";
                    readonly text: " @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\n on the return value: the return value is optional (but if data is returned, it must not be false).\n @param token The token targeted by the call.\n @param data The call data (encoded using abi.encode or one of its variants).\n This is a variant of {_callOptionalReturn} that silents catches all reverts and returns a bool instead.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_callOptionalReturnBool";
                readonly nameLocation: "5198:23:118";
                readonly parameters: {
                    readonly id: 66711;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66708;
                        readonly mutability: "mutable";
                        readonly name: "token";
                        readonly nameLocation: "5229:5:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66753;
                        readonly src: "5222:12:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$66402";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 66707;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 66706;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["5222:6:118"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 66402;
                                readonly src: "5222:6:118";
                            };
                            readonly referencedDeclaration: 66402;
                            readonly src: "5222:6:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$66402";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 66710;
                        readonly mutability: "mutable";
                        readonly name: "data";
                        readonly nameLocation: "5249:4:118";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66753;
                        readonly src: "5236:17:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 66709;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5236:5:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5221:33:118";
                };
                readonly returnParameters: {
                    readonly id: 66714;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 66713;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 66753;
                        readonly src: "5272:4:118";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 66712;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5272:4:118";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5271:6:118";
                };
                readonly scope: 66754;
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
                readonly id: 66473;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "293:457:118";
                readonly text: " @title SafeERC20\n @dev Wrappers around ERC20 operations that throw on failure (when the token\n contract returns false). Tokens that return no value (and instead revert or\n throw on failure) are also supported, non-reverting calls are assumed to be\n successful.\n To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\n which allows you to call the safe operations as `token.safeTransfer(...)`, etc.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [66754];
            readonly name: "SafeERC20";
            readonly nameLocation: "759:9:118";
            readonly scope: 66755;
            readonly usedErrors: readonly [66481, 66490];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 118;
};
//# sourceMappingURL=SafeERC20.d.ts.map